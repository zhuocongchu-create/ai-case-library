/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-15",
    items:[
      {
        title:"Anthropic 连续盈利瞄准 2 万亿美元估值，但盈利口径存争议",
        why:"Anthropic 连续第二季度盈利，但基于调整后指标，实际成本未计入。想做 AI 副业的你，需警惕盈利数据背后的隐藏成本，关注长期可持续性。建议先研究其商业模式再考虑跟进。",
        url:"https://the-decoder.com/anthropic-eyes-nasdaq-listing-as-a-second-profitable-quarter-aims-to-win-over-investors-ahead-of-a-mega-ipo",
        tag:"行业观察"
      },
      {
        title:"科技巨头 AI 开发放缓：安全共识还是压制竞争的卡特尔？",
        why:"Sam Altman 等提出 AI 开发放缓协议，但被质疑为压制开源与竞争者。想做 AI 副业的你，需留意行业风向变化，关注政策与技术发展的平衡点，避免盲目跟风。",
        url:"https://www.theverge.com/ai-artificial-intelligence/995186-is-big-techs-ai-slowdown-a-safety-pact-or-a-cartel",
        tag:"行业观察"
      },
      {
        title:"GPT-5.6 Luna vs GPT-6 Astra：代码评审精度与成本对比",
        why:"Luna 在代码评审中找到 69 个 bug，成本仅 $0.20，但 Astra 精度更高。想做 AI 副业的你，若涉及代码相关服务，可考虑性价比高的模型，但别忽视精度对客户信任的影响。",
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
  },
  {
    date:"2026-09-12",
    items:[
      {
        title:"英伟达或投资100亿美元助Anthropic上市，成史上最大IPO",
        why:"英伟达考虑投资Anthropic至多100亿美元，这说明AI大模型赛道正吸引巨头重金布局。如果你在做AI相关副业，要关注这类头部企业的动向，可能带来合作机会或市场信号。建议多关注行业动态，提前布局相关资源。",
        url:"https://www.ithome.com/1/001/488.htm",
        tag:"行业观察"
      },
      {
        title:"Minitap指控Google Artemis未署名使用其开源代码",
        why:"Google Artemis 项目被指移除了 Minitap 团队的署名，这提醒 AI 副业从业者注意代码版权与开源协议问题。你如果在使用开源项目，务必确认授权条款，避免法律风险，尤其像 Apache 2.0 这类明确署名要求的协议。",
        url:"https://www.minitap.ai/blog/i-expected-better-from-google",
        tag:"行业观察"
      },
      {
        title:"DeepSeek V4.1 Flash 价格大降，适合低成本AI生成任务",
        why:"DeepSeek V4.1 Flash 的价格降幅达7倍以上，适合预算有限的AI副业者。你若在做内容生成或视觉任务，可考虑尝试这一版本，但需注意它的性能表现是否符合你的需求，避免因低价影响质量。",
        url:"https://mp.weixin.qq.com/s?__biz=Mzg3MTk3NzYzNw%3D%3D&mid=2247511119&idx=1&sn=0f53b5017e41b16afc9b201966ce2bda",
        tag:"工具动态"
      }
    ]
  }
];
