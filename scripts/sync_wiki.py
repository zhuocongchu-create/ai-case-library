# -*- coding: utf-8 -*-
"""
每日热点 → 飞书知识库同步（云端版 · 供 GitHub Actions 调用）
================================================================
把「AI 情报站」两个频道的近 3 天内容，整页覆写到飞书知识库的两个固定页。

  ⚡ AI 快讯   <- site/aihot-flash.js   doc_id: A1hBdv5jEo4ihnxbJbecnB7Xn3e
  💰 重点机会  <- site/news-data.js     doc_id: PV1EdTi5AoV7G5xyGricPYE1nef

【为什么只能用「覆写固定页」】
  授权应用/账号在该知识库中 无新建节点权限、无删除节点权限（实测 131006），
  因此页数固定不变，每天只换这两页的内容；页内只保留近 KEEP_DAYS 天。

【环境变量】
  FEISHU_APP_ID      自建应用 App ID
  FEISHU_APP_SECRET  自建应用 App Secret
  未配置时：打印提示并 exit 0（不阻塞主流程）

【用法】
  python scripts/sync_wiki.py
  python scripts/sync_wiki.py --dry-run     # 只渲染打印，不调 API
  python scripts/sync_wiki.py --only flash
"""
import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone

API_BASE = "https://open.feishu.cn"
KEEP_DAYS = 3
HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", "site"))

PAGES = {
    "flash": {"doc_id": "A1hBdv5jEo4ihnxbJbecnB7Xn3e", "title": "⚡ AI 快讯", "file": "aihot-flash.js", "var": "AI_HOT_FLASH"},
    "hot":   {"doc_id": "PV1EdTi5AoV7G5xyGricPYE1nef", "title": "💰 重点机会", "file": "news-data.js", "var": "NEWS"},
}


# ---------------- HTTP ----------------
def http(method, path, token=None, body=None):
    url = API_BASE + path
    data = json.dumps(body, ensure_ascii=False).encode("utf-8") if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Content-Type", "application/json; charset=utf-8")
    if token:
        req.add_header("Authorization", "Bearer " + token)
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            return json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        try:
            return json.loads(e.read().decode("utf-8"))
        except Exception:
            return {"code": -1, "msg": "HTTP %s" % e.code}


def tenant_token(app_id, app_secret):
    d = http("POST", "/open-apis/auth/v3/tenant_access_token/internal",
             body={"app_id": app_id, "app_secret": app_secret})
    if d.get("code") != 0:
        raise RuntimeError("获取 tenant_access_token 失败: %s" % json.dumps(d, ensure_ascii=False)[:300])
    return d["tenant_access_token"]


# ---------------- 数据 ----------------
def load_js(path, varname):
    """宽松解析 `window.X=[...]`（数据文件里的 key 无引号）。"""
    raw = open(path, encoding="utf-8").read()
    i = raw.index(varname + "=")
    body = raw[i + len(varname) + 1:]
    end = body.rindex("]")
    body = body[:end + 1]
    body = re.sub(r'([{,\[]\s*)([A-Za-z_][A-Za-z0-9_]*)(\s*:)', r'\1"\2"\3', body)
    return json.loads(body)


def beijing_now():
    return datetime.now(timezone.utc) + timedelta(hours=8)


def beijing_today():
    return beijing_now().date()


def pick_window(groups, keep=KEEP_DAYS):
    if not groups:
        return [], False
    floor = (beijing_today() - timedelta(days=keep - 1)).isoformat()
    sel = [g for g in groups if (g.get("date") or "") >= floor]
    if sel:
        return sorted(sel, key=lambda g: g["date"], reverse=True), False
    return sorted(groups, key=lambda g: g.get("date") or "", reverse=True)[:keep], True


# ---------------- 渲染 ----------------
# 排版约定（飞书 markdown 导入会还原成原生块，层级要拉开）：
#   #       → 文档标题
#   > 多行  → 引用块（灰底卡片感），用来放页头说明 / 每条的重点点评
#   ##      → 日期分组
#   ###     → 单条标题（不挂链接，保持"标题"的深色粗体，别变成蓝色链接）
#   普通段落 → 摘要正文（**不要用 - 列表**，列表会把正文压成小字、糊成一团）
#   `xx`    → 行内代码 = 灰底小标签，用来放来源/分类/时间，像 tag
#   ---     → 分割线
def _header(title, lead, extra_lines, note):
    out = ["# %s" % title, "",
           "> **%s**" % lead,
           "> %s" % "｜".join(extra_lines),
           "> %s" % note, "", "---", ""]
    return out


def _meta_line(chips, url, link_text="读原文 →"):
    tags = "　".join("`%s`" % c for c in chips if c)
    if url:
        return (tags + "　·　[%s](%s)" % (link_text, url)) if tags else "[%s](%s)" % (link_text, url)
    return tags


def render_flash(groups):
    sel, degraded = pick_window(groups)
    now = beijing_now().strftime("%Y-%m-%d %H:%M") + "（北京时间）"
    span = "%s ~ %s" % (sel[-1]["date"], sel[0]["date"]) if sel else "-"
    note = ("⚠️ 近 3 天无新增，当前展示最近一次数据窗口：%s" % span) if degraded \
        else ("最近更新：%s　·　数据窗口：%s（仅保留近 3 天）" % (now, span))
    out = _header("⚡ AI 快讯",
                  "近 3 天 AI 圈值得一看的快讯，每条附一句「为什么值得看」",
                  ["来源：AIHOT（aihot.virxact.com）", "本页由自动化每日重写"], note)
    if not sel:
        out.append("_暂无语料，请稍后再来。_")
        return "\n".join(out)
    for g in sel:
        out += ["## 📅 %s" % g["date"], ""]
        for i, it in enumerate(g["items"], 1):
            t, u = it.get("t") or "(无标题)", it.get("u") or ""
            out += ["### %d. %s" % (i, t), ""]
            if it.get("s"):
                out += [it["s"], ""]
            if it.get("w"):
                out += ["> 💡 **为什么值得看**　%s" % it["w"], ""]
            meta = _meta_line([it.get("src"), it.get("cat"), it.get("hm")], u)
            if meta:
                out += [meta, ""]
            out += ["---", ""]
    return "\n".join(out)


def render_hot(groups):
    sel, degraded = pick_window(groups)
    now = beijing_now().strftime("%Y-%m-%d %H:%M") + "（北京时间）"
    span = "%s ~ %s" % (sel[-1]["date"], sel[0]["date"]) if sel else "-"
    note = ("⚠️ 近 3 天无新增，当前展示最近一次数据窗口：%s" % span) if degraded \
        else ("最近更新：%s　·　数据窗口：%s（仅保留近 3 天）" % (now, span))
    out = _header("💰 重点机会",
                  "近 3 天最值得下手的 AI 变现机会，每条附一句「变现视角」点评",
                  ["来源：本站 AI 情报站 · 编辑自选", "本页由自动化每日重写"], note)
    if not sel:
        out.append("_暂无语料，请稍后再来。_")
        return "\n".join(out)
    for g in sel:
        out += ["## 📅 %s" % g["date"], ""]
        for i, it in enumerate(g["items"], 1):
            t, u = it.get("title") or "(无标题)", it.get("url") or ""
            out += ["### %d. %s" % (i, t), ""]
            if it.get("why"):
                out += ["> 💰 **变现视角**　%s" % it["why"], ""]
            meta = _meta_line([it.get("tag")], u, "读原文 →")
            if meta:
                out += [meta, ""]
            out += ["---", ""]
    return "\n".join(out)



# ---------------- 文档覆写 ----------------
# 用飞书「AI 文档编辑」接口整页覆写（lark-cli 的 docs +update --command overwrite 走的就是它）：
#   PUT /open-apis/docs_ai/v1/documents/{document_id}
#   {"command":"overwrite","content":"<markdown>","format":"markdown","revision_id":-1}
# ⚠️ 该接口是异步的：即使目标文档没有写权限，也可能返回 code=0。
#    所以写入后必须「回读校验」，否则会出现"报成功但内容没变"的假成功。
def read_raw(doc_id, token):
    d = http("GET", "/open-apis/docx/v1/documents/%s/raw_content" % doc_id, token=token)
    if d.get("code") != 0:
        return None
    return d.get("data", {}).get("content") or ""


def _fingerprint(md):
    """取正文里的关键特征做比对（服务端 markdown 与本地渲染会有格式差异，比对特征串）。"""
    keys = []
    for line in md.split("\n"):
        s = line.strip()
        if s.startswith("# ") or s.startswith("## 📅") or s.startswith("### "):
            keys.append(re.sub(r"[#\s]", "", s)[:24])
    return keys


def _hits(md, cur):
    keys = _fingerprint(md)
    flat = re.sub(r"\s", "", cur or "")
    hit = sum(1 for k in keys if k and k in flat)
    need = max(1, int(len(keys) * 0.6)) if keys else 0
    return hit, need


def overwrite_doc(doc_id, md, token, verify=True, wait=8, tries=6):
    """整页覆写 + 回读校验。

    ⚠️ docs_ai 覆写接口是**异步**的：PUT 返回 code=0 只代表"已受理"，落库可能还要几秒到几十秒。
    因此不能只 sleep 一次就下结论（曾因此误判"假成功"，实际写入是成功的），要**轮询**。
    """
    before = read_raw(doc_id, token) if verify else None

    d = http("PUT", "/open-apis/docs_ai/v1/documents/%s" % doc_id, token=token,
             body={"command": "overwrite", "content": md, "format": "markdown", "revision_id": -1})
    if d.get("code") != 0:
        raise RuntimeError("接口返回失败: %s" % json.dumps(d, ensure_ascii=False)[:250])
    if not verify:
        return len(md)

    hit = need = 0
    for i in range(tries):
        time.sleep(wait)
        cur = read_raw(doc_id, token)
        if cur is None:
            continue
        hit, need = _hits(md, cur)
        if need and hit >= need:
            return len(md)
        # 兜底：内容确实变化了 → 写入已生效（特征串对不齐只是服务端 markdown 转换差异）
        if before is not None and cur != before and cur.strip():
            return len(md)

    cur = read_raw(doc_id, token) or ""
    raise RuntimeError(
        "回读校验不通过：轮询 %ds 后内容仍未变化（特征命中 %d/%d）。"
        "通常原因=该应用不是这两个文档的协作者，没有写入权限。"
        "当前文档前 60 字=%r" % (wait * tries, hit, need, cur[:60]))



# ---------------- 主流程 ----------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", choices=["flash", "hot"])
    a = ap.parse_args()

    app_id = os.environ.get("FEISHU_APP_ID", "").strip()
    app_secret = os.environ.get("FEISHU_APP_SECRET", "").strip()
    if not a.dry_run and not (app_id and app_secret):
        print("[skip] 未配置 FEISHU_APP_ID / FEISHU_APP_SECRET，跳过知识库同步")
        return 0

    keys = [a.only] if a.only else ["flash", "hot"]
    rendered = []
    for k in keys:
        cfg = PAGES[k]
        groups = load_js(os.path.join(SITE, cfg["file"]), cfg["var"])
        md = (render_flash if k == "flash" else render_hot)(groups)
        rendered.append((k, cfg, md))

    if a.dry_run:
        for k, cfg, md in rendered:
            print("\n" + "=" * 70)
            print("[dry-run] 《%s》 %s  %d 字" % (cfg["title"], cfg["doc_id"], len(md)))
            print("=" * 70)
            print(md[:900] + ("\n…（略）" if len(md) > 900 else ""))
        return 0

    token = tenant_token(app_id, app_secret)
    failed = 0
    for k, cfg, md in rendered:
        try:
            n = overwrite_doc(cfg["doc_id"], md, token)
            print("[OK] 《%s》已更新：%d 字" % (cfg["title"], n))
        except Exception as e:
            failed += 1
            print("[FAIL] 《%s》: %s" % (cfg["title"], e))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
