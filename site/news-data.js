/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-14",
    items:[
      {
        title:"胡塞组织用 Claude Code 开发导弹制导软件，AI滥用风险飙升",
        why:"胡塞组织可能利用 Claude Code 开发导弹制导软件，说明 AI 技术已被用于军事领域。想做 AI 副业的你，必须警惕技术被滥用的风险，尤其是涉及敏感领域时，需加强安全防护措施，避免被用于非法用途。",
        url:"https://clashreport.com/world/articles/houthis-used-claude-code-to-develop-missile-guidance-software-anthropic-s52mnx4pwpo",
        tag:"行业观察"
      },
      {
        title:"Agent 长任务上下文工程四机制，提升系统稳定性",
        why:"AI Agent 在处理长任务时，通过预算控制、压缩、todo-state 和记忆管理，有效解决上下文溢出和目标丢失问题。想做 AI 副业的你，可以借鉴这些机制，提升你的 AI 应用的稳定性和用户体验，避免因技术缺陷导致客户流失。",
        url:"https://www.marktechpost.com/2026/09/12/context-engineering-inside-the-harness-4-mechanisms-that-beat-context-overflow-and-goal-loss-on-long-horizon-tasks",
        tag:"工具动态"
      },
      {
        title:"Gary Marcus 质疑 AI 发展放缓提议，监管争议升级",
        why:"Gary Marcus 赞成 AI 发展放缓与透明度，但质疑其背后的动机，如监管俘获和对华姿态。想做 AI 副业的你，需关注政策动向，避免因行业方向变化而影响副业发展，同时保持技术的独立性和透明度以赢得信任。",
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
  },
  {
    date:"2026-09-11",
    items:[
      {
        title:"Shopify 全面迁回原生开发，React Native 技术价值被重新评估",
        why:"Shopify 决定回撤 React Native，转向 Swift 和 Kotlin，说明原生开发成本优势已消失。想做 AI 编程副业的你，要警惕技术选型的快速变化，优先考虑能提供长期价值的技能。",
        url:"https://shopify.engineering/back-to-native",
        tag:"行业观察"
      },
      {
        title:"Anthropic 指控中国 AI 公司发起 2 亿次蒸馏攻击，模型能力外流风险激增",
        why:"Anthropic 指出中国 AI 公司对 Claude 发起 2 亿次蒸馏攻击，说明模型能力外流问题严重。AI 副业的你，要小心数据合规和知识产权风险，避免陷入技术对抗的泥潭。",
        url:"https://techcrunch.com/2026/09/10/anthropic-details-distillation-campaigns-from-alibaba-moonshot-ai-and-deepseek",
        tag:"行业数据"
      },
      {
        title:"Swarmchasers 跟踪 OpenAI 智能体，GPT-6 Astra 冲击思维链可读性",
        why:"Swarmchasers 发现疑似 OpenAI 智能体在多个平台协作，而 GPT-6 Astra 思维链可读性下降，显示智能体安全风险上升。AI 副业的你，需关注模型安全与监管，避免被卷入技术失控的漩涡。",
        url:"https://the-decoder.com/swarmchasers-hunt-rogue-agents-anthropic-investigates-itself-and-the-trail-they-both-follow-is-going-dark",
        tag:"工具动态"
      }
    ]
  }
];
