/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-13",
    items:[
      {
        title:"AI Agent 长任务上下文工程四机制解析，帮你优化系统效率",
        why:"文章拆解了 Agent 长任务中解决上下文溢出的四大机制，如预算控制和记忆存储，适合想搭建 AI 副业工具的你。掌握这些技术能显著提升系统稳定性，建议先从预算控制入手，避免资源浪费。",
        url:"https://www.marktechpost.com/2026/09/12/context-engineering-inside-the-harness-4-mechanisms-that-beat-context-overflow-and-goal-loss-on-long-horizon-tasks",
        tag:"行业观察"
      },
      {
        title:"OpenAI 支持放缓前沿 AI，独立评估访问权限将开放",
        why:"Sam Altman 明确表态支持放缓前沿 AI 发展，并将开放独立评估者访问权限，这为 AI 副业者提供了更透明的行业信号。你若关注 AI 技术伦理或想接评估类订单，这可能是未来机会点，但需留意政策变化带来的不确定性。",
        url:"https://x.com/sama/status/2098811563415150910",
        tag:"行业观察"
      },
      {
        title:"Anthropic 工程师支持放缓 AI 前沿，强调系统加固与社会讨论",
        why:"Thariq 作为 Anthropic 一线工程师，公开支持放缓 AI 前沿发展，强调行业加速带来的疲劳和社会消化时间。你若考虑做 AI 伦理咨询或内容评估，这可能是新赛道，但需注意行业节奏变化对需求的影响。",
        url:"https://x.com/trq212/status/2098860941391872132",
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
  },
  {
    date:"2026-09-10",
    items:[
      {
        title:"美军方AI合同暗藏安全博弈，100亿估值引行业震动",
        why:"军方要求AI模型降低拒绝率的合同争议，暴露安全护栏对商业价值的影响。Nvidia收购HuggingFace的100亿估值暗示，AI软实力正在成为企业争夺的核心资产。想做AI副业的，要关注安全合规赛道，但别盲目复制军方逻辑——商业场景需平衡实用性和伦理风险。",
        url:"https://www.ithome.com/1/000/277.htm",
        tag:"行业数据"
      },
      {
        title:"OpenAI安全委员会人事变动，AI治理成新风口",
        why:"Paul Christiano加入安全委员会，预示AI治理需求激增。你若想布局AI合规服务，可参考其独立监督模式——但需注意，此类高门槛岗位需持续输出专业内容，短期接单可能面临信任成本难题。",
        url:"https://x.com/gdb/status/2097769891013280241",
        tag:"行业观察"
      },
      {
        title:"Nvidia买下HuggingFace软实力，AI工具价值飙升100亿",
        why:"Nathan Lambert称HuggingFace软实力年值100亿，说明AI工具影响力已超越技术本身。想做AI副业的可关注Nvidia在开发者生态的布局，但需警惕：模型即服务模式需持续迭代，单靠工具难以形成溢价，要结合场景化解决方案。",
        url:"https://x.com/natolambert/status/2097745018421236154",
        tag:"工具动态"
      }
    ]
  }
];
