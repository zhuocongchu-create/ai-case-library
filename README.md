# AI 变现案例库

80 条真实 AI 变现案例 + 每日 AI 情报站的静态单页产品站。

## 结构

- `site/` — 网站本体（Cloudflare Pages 部署目录，无构建步骤）
  - `index.html` 单文件页面（内联 CSS/JS）
  - `case-data.js` 80 条案例数据 / `news-data.js` 每日变现热点 / `aihot-flash.js` AIHOT 快讯 / `weekly-updates.js` 每周精选
  - `images/` 收款码
- `scripts/fetch_aihot.py` — 每日同步 AIHOT（aihot.virxact.com）精选快讯 → 重写 `site/aihot-flash.js`，只保留近 3 天
- `scripts/bump_version.py` — 递增 index.html 中数据文件 `?v=` 版本号（防浏览器缓存）

## 每日自动更新

GitHub Actions（`.github/workflows/daily-flash.yml`）每天北京时间 08:30：
拉 AIHOT → 更新数据 → 递增版本号 → commit → push 自动触发 Cloudflare Pages 部署。

数据无变化时不产生空提交、不触发部署。

## 防缓存铁律

任何数据文件更新后必须递增 index.html 里对应的 `?v=` 版本号，否则用户浏览器拿旧缓存。

## 周更案例 / 变现热点

每周精选（weekly-updates.js）与变现热点（news-data.js）由产品工程线人工/AI 编辑产出后提交。
