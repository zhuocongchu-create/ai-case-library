# -*- coding: utf-8 -*-
"""
AIHOT 快讯拉取脚本 · 供每日自动化调用
数据来源：AIHOT (https://aihot.virxact.com) 匿名只读 v1 API，站长卡兹克已同意本产品调用
输出：buyer-catalog/aihot-flash.js  （window.AI_HOT_FLASH，按日期分组，保留最近 7 天）
用法：python fetch_aihot.py
失败行为：API 不可达时保留旧数据不动，exit 1（自动化侧应记录但不必中断主流程）
"""
import json, re, sys, urllib.request
import os
from datetime import datetime, timedelta

BASE = "https://aihot.virxact.com/api/v1"
UA = "ai-case-catalog/1.0 (+https://5dec34266b8e47d9bdf988b48c6eb429.app.workbuddy.link)"
FLASH_JS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "site", "aihot-flash.js")
FLASH_JSON = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_batch", "aihot-flash-data.json")
KEEP_DAYS = 3

CAT_CN = {"model": "模型", "product": "产品", "industry": "行业", "paper": "论文", "tip": "技巧"}

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

def to_bj(iso):
    """ISO UTC -> 北京时间 naive datetime"""
    s = iso.replace("Z", "+00:00")
    dt = datetime.fromisoformat(s)
    return dt + timedelta(hours=8)

def fetch_items():
    # 首选 24h 精选池；为空则回退 7 天（周一凌晨等场景）
    for win, lim in (("24h", 40), ("7d", 30)):
        try:
            d = get(f"{BASE}/items?mode=selected&window={win}&limit={lim}")
            items = d.get("items") or []
            if items:
                print(f"[aihot] window={win} -> {len(items)} items")
                return items
        except Exception as e:
            print(f"[aihot] {win} failed: {e}")
    return []

def transform(items):
    out = {}
    for it in items:
        pub = it.get("publishedAt")
        disc = it.get("discoveredAt")
        if not pub and not disc:
            continue
        # 与 AIHOT 时间轴一致：历史回填(>72h)按原文发布时间，否则按收录时间
        if pub and disc:
            base = to_bj(pub) if (to_bj(disc) - to_bj(pub)) > timedelta(hours=72) else to_bj(disc)
        else:
            base = to_bj(pub or disc)
        date, hm = base.strftime("%Y-%m-%d"), base.strftime("%H:%M")
        rec = {
            "t": (it.get("title") or "").strip(),
            "s": (it.get("summary") or "").strip(),
            "w": (it.get("reason") or "").strip(),
            "u": (it.get("links") or {}).get("aihot") or (it.get("links") or {}).get("original") or "",
            "src": (it.get("source") or {}).get("name") or "",
            "cat": CAT_CN.get(it.get("category"), it.get("category") or "资讯"),
            "hm": hm,
        }
        if not rec["t"] or not rec["u"]:
            continue
        out.setdefault(date, [])
        if not any(x["t"] == rec["t"] for x in out[date]):  # 按标题去重
            out[date].append(rec)
    for d in out:
        out[d].sort(key=lambda x: x["hm"], reverse=True)
    return out

def load_existing():
    try:
        with open(FLASH_JSON, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}

def main():
    items = fetch_items()
    if not items:
        print("[aihot] no items fetched; keep old data")
        sys.exit(1)
    fresh = transform(items)
    old = load_existing()
    merged = dict(old)
    for d, lst in fresh.items():
        seen = {x["t"] for x in merged.get(d, [])}
        merged[d] = list(merged.get(d, [])) + [x for x in lst if x["t"] not in seen]
    # 只保留最近 KEEP_DAYS 天
    today = datetime.now() + timedelta(hours=8)  # 北京时间近似（本地已+8亦无碍，仅用于保留窗口）
    dates_sorted = sorted(merged.keys(), reverse=True)[:KEEP_DAYS]
    merged = {d: merged[d] for d in dates_sorted if merged[d]}  # 空日期组直接剔除

    with open(FLASH_JSON, "w", encoding="utf-8") as f:
        json.dump(merged, f, ensure_ascii=False, indent=1)

    js = (
        "/* ============================================================\n"
        "   AI 快讯 · aihot-flash.js\n"
        "   数据来源：AIHOT（https://aihot.virxact.com，站长：数字生命卡兹克）\n"
        "   由每日自动化任务调用 fetch_aihot.py 更新，请保留本署名注释\n"
        "   ⚠️ 每次更新后必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）\n"
        "   ============================================================ */\n"
        "window.AI_HOT_FLASH=" + json.dumps(
            [{"date": d, "items": merged[d]} for d in dates_sorted],
            ensure_ascii=False) + ";\n"
    )
    with open(FLASH_JS, "w", encoding="utf-8") as f:
        f.write(js)
    total = sum(len(v) for v in merged.values())
    print(f"[aihot] wrote {FLASH_JS}: {len(dates_sorted)} day(s), {total} items")

if __name__ == "__main__":
    main()
