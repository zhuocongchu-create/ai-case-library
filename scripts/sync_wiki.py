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


def beijing_today():
    return (datetime.now(timezone.utc) + timedelta(hours=8)).date()


def pick_window(groups, keep=KEEP_DAYS):
    if not groups:
        return [], False
    floor = (beijing_today() - timedelta(days=keep - 1)).isoformat()
    sel = [g for g in groups if (g.get("date") or "") >= floor]
    if sel:
        return sorted(sel, key=lambda g: g["date"], reverse=True), False
    return sorted(groups, key=lambda g: g.get("date") or "", reverse=True)[:keep], True


# ---------------- 渲染 ----------------
def render_flash(groups):
    sel, degraded = pick_window(groups)
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    span = "%s ~ %s" % (sel[-1]["date"], sel[0]["date"]) if sel else "-"
    note = ("> ⚠️ 近 3 天无新增，当前展示最近一次数据窗口：%s" % span) if degraded \
        else ("> 数据窗口：%s（仅保留近 3 天）" % span)
    out = ["# ⚡ AI 快讯", "",
           "> 近 3 天 AI 圈值得一看的快讯，每条附一句「为什么值得看」。",
           "> 数据来源：AIHOT（aihot.virxact.com，站长：数字生命卡兹克）",
           "> 本页由自动化每日重写 · 最近更新：%s" % now,
           note, "", "---", ""]
    if not sel:
        out.append("_暂无语料，请稍后再来。_")
        return "\n".join(out)
    for g in sel:
        out += ["## 📅 %s" % g["date"], ""]
        for i, it in enumerate(g["items"], 1):
            t, u = it.get("t") or "(无标题)", it.get("u") or ""
            out.append("### %d. [%s](%s)" % (i, t, u) if u else "### %d. %s" % (i, t))
            out.append("")
            if it.get("s"):
                out.append("- **摘要**：%s" % it["s"])
            if it.get("w"):
                out.append("- **为什么值得看**：%s" % it["w"])
            meta = " · ".join(x for x in [it.get("src") or "", it.get("cat") or "", it.get("hm") or ""] if x)
            if meta:
                out.append("- **来源**：%s" % meta)
            out += ["", "---", ""]
    return "\n".join(out)


def render_hot(groups):
    sel, degraded = pick_window(groups)
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    span = "%s ~ %s" % (sel[-1]["date"], sel[0]["date"]) if sel else "-"
    note = ("> ⚠️ 近 3 天无新增，当前展示最近一次数据窗口：%s" % span) if degraded \
        else ("> 数据窗口：%s（仅保留近 3 天）" % span)
    out = ["# 💰 重点机会", "",
           "> 近 3 天最值得下手的 AI 变现机会，每条附一句「变现视角」点评。",
           "> 本页由自动化每日重写 · 最近更新：%s" % now,
           note, "", "---", ""]
    if not sel:
        out.append("_暂无语料，请稍后再来。_")
        return "\n".join(out)
    for g in sel:
        out += ["## 📅 %s" % g["date"], ""]
        for i, it in enumerate(g["items"], 1):
            t, u = it.get("title") or "(无标题)", it.get("url") or ""
            out.append("### %d. [%s](%s)" % (i, t, u) if u else "### %d. %s" % (i, t))
            out.append("")
            if it.get("why"):
                out += ["**变现视角**：%s" % it["why"], ""]
            tail = ([("`%s`" % it["tag"])] if it.get("tag") else []) + (["[原文](%s)" % u] if u else [])
            if tail:
                out.append(" · ".join(tail))
            out += ["", "---", ""]
    return "\n".join(out)


# ---------------- 文档覆写 ----------------
# 用飞书「AI 文档编辑」接口整页覆写（lark-cli 的 docs +update --command overwrite 走的就是它）：
#   PUT /open-apis/docs_ai/v1/documents/{document_id}
#   {"command":"overwrite","content":"<markdown>","format":"markdown","revision_id":-1}
# 比「转换块 → 清空子块 → 逐块写入」简单得多，且实测应用身份可用。
def overwrite_doc(doc_id, md, token):
    d = http("PUT", "/open-apis/docs_ai/v1/documents/%s" % doc_id, token=token,
             body={"command": "overwrite", "content": md, "format": "markdown", "revision_id": -1})
    if d.get("code") != 0:
        raise RuntimeError(json.dumps(d, ensure_ascii=False)[:300])
    return len(md)


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
