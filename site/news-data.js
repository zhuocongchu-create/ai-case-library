/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-16",
    items:[
      {
        title:"Perplexity 自研 CobbleDB 替代 AWS DynamoDB，每年最多可节省一亿美元",
        why:"Perplexity 用自研 CobbleDB 每年省下一亿美元，说明定制数据库能带来显著成本节约。你如果考虑用 AI 优化数据存储，可以借鉴他们的方法，但需评估自身技术储备和需求匹配度。",
        url:"https://x.com/AravSrinivas/status/2099957318935028173",
        tag:"行业数据"
      },
      {
        title:"Gergely Orosz 探访 OpenAI：Codex 驱动的智能体软件工厂",
        why:"OpenAI 用 Codex 和 ChatGPT Work 推动内部研发，表明 AI 工具正在全面替代传统开发流程。你如果想用 AI 提升开发效率，可以尝试 Codex，但需注意其局限性与学习成本，别盲目依赖。",
        url:"https://newsletter.pragmaticengineer.com/p/openai-software-factory",
        tag:"工具动态"
      },
      {
        title:"Anthropic 与 OpenAI 提议协调放缓前沿 AI 开发，Cohere CEO 等批评者质疑其真实动机",
        why:"头部 AI 公司提议放缓前沿模型开发，但被质疑动机不纯。你若想进入 AI 领域，需关注行业政策动态，避免被卷入无谓的舆论漩涡，专注技术落地才是正道。",
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
  },
  {
    date:"2026-09-13",
    items:[
      {
        title:"AI Agent 长任务上下文管理四招，教你应对目标丢失难题",
        why:"这篇文章详细拆解了 Agent 长任务处理中上下文溢出的四类解决机制，包括预算控制、压缩、todo-state 复述和记忆管理。你如果想做 AI 副业，了解这些技术细节能帮助你优化系统，提高服务稳定性。建议结合具体产品实现方式，逐步测试应用。",
        url:"https://www.marktechpost.com/2026/09/12/context-engineering-inside-the-harness-4-mechanisms-that-beat-context-overflow-and-goal-loss-on-long-horizon-tasks",
        tag:"行业观察"
      },
      {
        title:"英伟达成 AI 领域中央银行，700亿融资背后潜藏风险",
        why:"英伟达通过巨额融资支持 AI 初创企业，三年累计投入超 700 亿美元，今年更提供 1050 亿美元兜底。你若想进入 AI 芯片或相关服务赛道，需警惕其背后可能引发的泡沫风险，建议关注实际应用场景和可持续性。",
        url:"https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai",
        tag:"行业数据"
      },
      {
        title:"OpenAI 跟进 Anthropic，开放独立评估者访问",
        why:"OpenAI 现已同意让独立评估者访问其 AI 系统，这反映了行业对 AI 安全与透明的重视。你若想做 AI 咨询或评估类副业，这是一个值得跟进的趋势，但需注意技术门槛和合规风险。",
        url:"https://x.com/sama/status/2098811563415150910",
        tag:"行业观察"
      }
    ]
  }
];
