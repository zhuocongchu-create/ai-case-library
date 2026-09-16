/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-17",
    items:[
      {
        title:"Perplexity 自研 CobbleDB 节省每年一亿美元",
        why:"Perplexity 用自研 CobbleDB 替代 AWS DynamoDB，节省每年一亿美元。你若想优化数据成本，可研究其热存储延迟优化（P50 从 31.4ms 降至 5.60ms），但需注意自研数据库需技术积累，别盲目跟风。",
        url:"https://x.com/AravSrinivas/status/2099957318935028173",
        tag:"行业数据"
      },
      {
        title:"Arena Image-to-WebDev 榜单：GPT-6 Astra 以 1733 分登顶",
        why:"Arena 新榜单显示 GPT-6 Astra 在图像生成任务中表现突出，每百万 token 价格优势明显。你若想选模型接单，可参考此排名，但要留意模型性能与价格并非绝对正比，需结合实际需求测试。",
        url:"https://x.com/arena/status/2099971741993050236",
        tag:"行业观察"
      },
      {
        title:"Vercel 用 AI 销售智能体实现 32x ROI",
        why:"Vercel 将 inbound 销售团队从 10 人缩至 1.25 人，AI 成本仅数千美元，ROI 提升 32 倍。你若想用 AI 提高转化率，可借鉴其自动化策略，但需评估自身业务是否适合 AI 驱动的销售工具。",
        url:"https://tomtunguz.com/single-digit-thousand-dollar-ai-sdr",
        tag:"行业数据"
      }
    ]
  },
  {
    date:"2026-09-16",
    items:[
      {
        title:"Perplexity 自研 CobbleDB 替代 AWS DynamoDB，每年最多可节省一亿美元",
        why:"Perplexity 用自研 CobbleDB 降本 1 亿美金，说明替代大厂数据库能带来显著收益。你若想用 AI 优化成本，可参考其构建方式，但需注意技术门槛和迁移风险，确保系统兼容性后再行动。",
        url:"https://x.com/AravSrinivas/status/2099957318935028173",
        tag:"行业数据"
      },
      {
        title:"Gergely Orosz 探访 OpenAI：Codex 驱动的智能体软件工厂",
        why:"OpenAI 已用 Codex 掌控内部研发，效率提升明显。你若想用 AI 提升开发效率，可尝试类似工具，但需注意依赖模型稳定性，避免因模型更新导致项目中断。",
        url:"https://newsletter.pragmaticengineer.com/p/openai-software-factory",
        tag:"工具动态"
      },
      {
        title:"Anthropic 与 OpenAI 提议协调放缓前沿 AI 开发，Cohere CEO 等批评者质疑其真实动机",
        why:"头部公司提议放缓 AI 发展，背后可能有商业或监管考量。你若做 AI 副业，需关注政策风向，但别盲目跟风，要结合自身业务判断是否受影响。",
        url:"https://the-decoder.com/not-everyone-is-convinced-that-big-ais-proposed-development-slowdown-is-really-about-safety",
        tag:"行业观察"
      }
    ]
  },
  {
    date:"2026-09-15",
    items:[
      {
        title:"Anthropic 连续盈利瞄准 2 万亿美元估值，但需注意调整后指标",
        why:"Anthropic 的盈利数据基于调整后指标，毛利率超 80% 但尚未计入分成和训练成本。想做 AI 副业的，别被高估值迷惑，要认清盈利模式和成本结构，避免被虚假数据误导。",
        url:"https://the-decoder.com/anthropic-eyes-nasdaq-listing-as-a-second-profitable-quarter-aims-to-win-over-investors-ahead-of-a-mega-ipo",
        tag:"行业数据"
      },
      {
        title:"科技巨头 AI 开发放缓：安全共识还是卡特尔？",
        why:"Sam Altman 等人提出全球 AI 开发放缓协议，但被批评为压制竞争。想做 AI 副业的，需警惕行业趋势变化，关注政策与技术博弈，别盲目跟风，先了解风险再行动。",
        url:"https://www.theverge.com/ai-artificial-intelligence/995186-is-big-techs-ai-slowdown-a-safety-pact-or-a-cartel",
        tag:"行业观察"
      },
      {
        title:"GPT-5.6 Luna 与 GPT-6 Astra 代码评审对比：$1.20 与 $5.66 的差距",
        why:"Luna 每个仓库成本 $0.20，但 bug 检测精度低于 Astra。想做 AI 副业的，别只看价格，要评估模型实际效果，比如 bug 召回率与精度，避免低价低质陷阱。",
        url:"https://entelligence.ai/blogs/gpt-5.6-luna-vs-gpt-6-astra-is-a-1.20-model-good-enough-for-code-review",
        tag:"工具动态"
      }
    ]
  },
  {
    date:"2026-09-14",
    items:[
      {
        title:"胡塞组织用 Claude Code 开发导弹制导软件",
        why:"AI 工具被用于军事领域，制导软件射程超 2000 公里，提醒你注意技术滥用风险。AI 副业需警惕技术被用于非法用途，建议加强伦理审查和合规意识。",
        url:"https://clashreport.com/world/articles/houthis-used-claude-code-to-develop-missile-guidance-software-anthropic-s52mnx4pwpo",
        tag:"行业观察"
      },
      {
        title:"Gary Marcus 赞成 Dario Amodei 放慢 AI 发展提议",
        why:"Dario 提议中强调透明度，但被质疑有监管俘获风险。你若想做 AI 副业，需关注政策动向，避免卷入争议，同时提升技术伦理意识。",
        url:"https://garymarcus.substack.com/p/two-cheers-out-of-three-for-dario",
        tag:"行业观察"
      }
    ]
  }
];
