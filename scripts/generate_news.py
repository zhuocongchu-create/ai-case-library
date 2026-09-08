# -*- coding: utf-8 -*-
"""
变现热点点评生成 · 供 GitHub Actions 每日调用
流程：拉 AIHOT 精选池 → 机械预筛 → 调硅基流动免费模型写点评（风格铁律+范文）→ 合并进 site/news-data.js（保留3天）
质量护栏：JSON 解析失败 / 字段缺失 / 字数越界 / tag 非法 → 保留旧文件原样，exit 0（宁可不更新，不出烂文案）
环境变量：SILICONFLOW_API_KEY 必填
"""
import json, os, re, sys, urllib.request
from datetime import datetime, timedelta, timezone

BASE = "https://aihot.virxact.com/api/v1"
SF_API = "https://api.siliconflow.cn/v1/chat/completions"
MODEL = os.environ.get("SF_MODEL", "Qwen/Qwen3-8B")
KEEP_DAYS = 3
UA = "ai-case-catalog/1.0"
HERE = os.path.dirname(os.path.abspath(__file__))
NEWS_JS = os.path.join(HERE, "..", "site", "news-data.js")

VALID_TAGS = {"行业观察", "接单行情", "行业数据", "工具动态", "数字产品"}

SYSTEM_PROMPT = """你是「AI变现案例库」情报站的编辑，为想做AI副业的普通人写变现点评。风格铁律：
1. 标题：保留新闻事实，突出和搞钱相关的数字/信号，40字以内
2. why字段（100-160字）：必须给「想做AI副业的读者」一个可执行的信号或避坑提醒，引用文中的具体数字，用第二人称「你」，口语但专业，结尾落在行动建议或风险提示上；禁止空洞口号和套话
3. tag 只能选：行业观察/接单行情/行业数据/工具动态/数字产品
4. 只输出 JSON 数组（字段：title/why/url/tag），不要多余文字

风格范例（学这个味道）：
例1 why: 同一个赛道冰火两重天：无脑批量跑量已经被工具卷到成本线附近，「把客户说不清的需求做成成品」的定制活反而在涨价。想做 AI 内容变现的，别再拼产能，要拼创意和品牌理解——这两样恰好是工具替代不了的溢价来源。
例2 why: 这篇最值钱的不是收入数字，是获客路径：技术群发广告、闲鱼挂链接全部零成交，最后线下跑 12 家店才签下 1 家。AI 接单的瓶颈从来不是技术，而是找到「每天被重复问题折磨」的小老板；另外他三档报价（8千/1.5万/3万）客户选了中间档，这个定价法可以直接抄。"""

BAD_PHRASES = ["赋能", "助力企业", "综上所述", "总而言之", "在这个飞速发展", "随着AI的不断发展"]


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))


def fetch_pool():
    for win, lim in (("24h", 20), ("7d", 20)):
        try:
            items = get(f"{BASE}/items?mode=selected&window={win}&limit={lim}").get("items") or []
            if items:
                print(f"[news] window={win} -> {len(items)} items")
                return items
        except Exception as e:
            print(f"[news] {win} failed: {e}")
    return []


def prefilter(items, n=3):
    """机械预筛：优先行业/产品/技巧类且分数高的，纯研究类靠后"""
    def rank(it):
        cat = it.get("category") or ""
        cat_score = {"product": 3, "industry": 3, "tip": 2, "model": 1, "paper": 0}.get(cat, 1)
        return (cat_score, it.get("score") or 0)
    return sorted(items, key=rank, reverse=True)[:n]


def llm_write(cands):
    payload = []
    for it in cands:
        links = it.get("links") or {}
        payload.append({
            "title": it.get("title"),
            "summary": (it.get("summary") or "")[:280],
            "editor_reason": (it.get("reason") or "")[:200],
            "category": it.get("category"),
            "url": links.get("original") or links.get("aihot"),
        })
    user = "给下面每条新闻各写一条变现点评，输出 JSON 数组（字段：title/why/url/tag）：\n\n" + json.dumps(payload, ensure_ascii=False)
    body = json.dumps({
        "model": MODEL,
        "messages": [{"role": "system", "content": SYSTEM_PROMPT}, {"role": "user", "content": user}],
        "temperature": 0.6, "max_tokens": 2000,
    }).encode()
    req = urllib.request.Request(SF_API, data=body, method="POST",
        headers={"Authorization": "Bearer " + os.environ["SILICONFLOW_API_KEY"], "Content-Type": "application/json"})
    resp = json.load(urllib.request.urlopen(req, timeout=180))
    out = resp["choices"][0]["message"]["content"]
    out = re.sub(r"<think>.*?</think>", "", out, flags=re.S)
    return json.loads(out[out.find("["):out.rfind("]") + 1])


def validate(items):
    if not items or len(items) > 4:
        raise ValueError(f"条数异常: {len(items)}")
    for it in items:
        if not it.get("title") or not it.get("why") or not it.get("url"):
            raise ValueError(f"字段缺失: {it}")
        why = it["why"].strip()
        if not (60 <= len(why) <= 220):
            raise ValueError(f"why字数越界({len(why)}): {why[:50]}")
        if it.get("tag") not in VALID_TAGS:
            raise ValueError(f"tag非法: {it.get('tag')}")
        for bad in BAD_PHRASES:
            if bad in why:
                raise ValueError(f"空洞套话[{bad}]: {why[:50]}")


def parse_groups():
    """解析现有 news-data.js 里的组列表（JS 单引号对象 → Python）"""
    with open(NEWS_JS, "r", encoding="utf-8") as f:
        src = f.read()
    body = src[src.find("[", src.find("window.NEWS=")):src.rfind("]") + 1]
    body = re.sub(r",(\s*[}\]])", r"\1", body)   # 去尾逗号
    body = body.replace("'", '"')                # 单引号 → 双引号（值）
    # 给不带引号的 key 补引号（date/items/title 等）
    body = re.sub(r"([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)(\s*:)", r'\1"\2"\3', body)
    return json.loads(body), src[:src.find("window.NEWS=")]


def merge(new_items):
    bj = datetime.now(timezone(timedelta(hours=8)))
    today = bj.strftime("%Y-%m-%d")
    cutoff = (bj - timedelta(days=KEEP_DAYS)).strftime("%Y-%m-%d")

    groups, header = parse_groups()
    groups = [g for g in groups if g.get("date", today) >= cutoff and g.get("date") != today]
    groups.insert(0, {"date": today, "items": new_items})

    def dump_str(s):
        return json.dumps(s, ensure_ascii=False)

    lines = [header.rstrip(), "window.NEWS=["]
    for gi, g in enumerate(groups):
        lines.append("  {")
        lines.append(f"    date:{dump_str(g['date'])},")
        lines.append("    items:[")
        for ii, it in enumerate(g["items"]):
            lines.append("      {")
            lines.append(f"        title:{dump_str(it['title'])},")
            lines.append(f"        why:{dump_str(it['why'])},")
            lines.append(f"        url:{dump_str(it['url'])},")
            lines.append(f"        tag:{dump_str(it.get('tag', '行业观察'))}")
            lines.append("      }" + ("," if ii < len(g["items"]) - 1 else ""))
        lines.append("    ]")
        lines.append("  }" + ("," if gi < len(groups) - 1 else ""))
    lines.append("];")
    with open(NEWS_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print(f"[news] merged {len(new_items)} items @ {today}, groups={len(groups)}")


def main():
    if not os.environ.get("SILICONFLOW_API_KEY"):
        print("[news] no API key, skip news generation")
        return
    pool = fetch_pool()
    if not pool:
        print("[news] empty pool, keep old data")
        return
    try:
        items = llm_write(prefilter(pool))
        validate(items)
        merge(items)
        print("[news] OK")
    except Exception as e:
        print(f"[news] guardrail triggered, keep old data: {e}")


if __name__ == "__main__":
    main()
