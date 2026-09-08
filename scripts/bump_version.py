"""
递增 site/index.html 中数据文件的 ?v= 版本号（防缓存铁律）。
用法: python bump_version.py
规则: 版本号 = YYYYMMDD + 字母序号（当天第 n 次递增 a/b/c...，跨天重置 a）
"""
import io
import os
import re
from datetime import datetime, timezone, timedelta

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "site")
INDEX = os.path.join(ROOT, "index.html")

CN_TZ = timezone(timedelta(hours=8))
today = datetime.now(CN_TZ).strftime("%Y%m%d")

s = io.open(INDEX, encoding="utf-8").read()

def bump(m):
    ver = m.group(1)
    if ver.startswith(today) and ver[-1].isalpha():
        new = today + chr(ord(ver[-1]) + 1)
    else:
        new = today + "a"
    return "v=" + new

s2, n = re.subn(r"v=(\d{8}[a-z]?)", bump, s)
io.open(INDEX, "w", encoding="utf-8").write(s2)
print(f"[bump] {n} refs -> {today}+")
