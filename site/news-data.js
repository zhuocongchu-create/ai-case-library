/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
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
  },
  {
    date:"2026-09-09",
    items:[
      {
        title:"数学家指控 OpenAI 算力碾压，AI 竞争已进阶学术信任战",
        why:"数学家用 LLM 证明方程被 OpenAI 算力追赶，说明 AI 已渗透科研核心环节。你若用 AI 做数学类副业，需警惕成果被大厂逆向解析风险，建议同步申请专利或保留原始数据链路。",
        url:"https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician",
        tag:"行业观察"
      },
      {
        title:"Mistral 三年估值破210亿欧元，欧洲AI正疯狂吸金",
        why:"30亿欧元融资刷新欧洲科技公司纪录，说明主权AI赛道正被资本狂热追逐。你若想接AI相关单，可关注这类高估值企业的技术路线图，但需注意其开源策略可能挤压中小开发者生存空间。",
        url:"https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier",
        tag:"行业数据"
      },
      {
        title:"数学家公开AI协作细节，LLM已能辅助突破方程难题",
        why:"巴克马斯特团队用AI完成blowup证明并公开沟通记录，显示LLM可参与高阶数学研究。你若想用AI搞数学类内容变现，可尝试复现该方法，但需注意成果公开可能引发的优先权纠纷，建议同步建立技术壁垒。",
        url:"https://cims.nyu.edu/~tristanb/statement.pdf",
        tag:"工具动态"
      }
    ]
  },
  {
    date:"2026-09-08",
    items:[
      {
        title:"Anthropic 5170亿算力协议曝光，AI算力成本或成关键变量",
        why:"大厂算力投入远超营收预期，说明AI赛道需警惕算力成本陷阱。你若想用AI做内容变现，需测算算力投入与收益比——5170亿合同背后，可能隐藏着技术门槛和资源争夺的残酷现实。建议优先评估自身算力获取渠道",
        url:"https://the-decoder.com/anthropic-reportedly-signs-517-billion-in-compute-deals-after-dario-amodei-warned-rivals-about-reckless-risk",
        tag:"行业观察"
      },
      {
        title:"Mistral 30亿欧元融资估值210亿，欧洲AI赛道资本热度飙升",
        why:"欧洲AI独角兽融资规模突破30亿欧元，说明资本正在重新定义AI价值。你若考虑AI接单，可研究其资金用途中的「开源模型研发」方向——210亿估值背后，是欧洲主权AI对数据主权的执着，这可能为你打开政府项目接单窗口",
        url:"https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier",
        tag:"行业数据"
      },
      {
        title:"数学家曝AI数学证明细节，工具辅助研究潜力显现",
        why:"AI已能辅助证明复杂方程，但需注意其局限性。你若想用AI做高阶内容变现，可尝试数学建模领域——但需警惕「工具依赖陷阱」，特里斯坦团队证明blowup现象时，仍需人类数学家把控方向，这暗示AI只能作为辅助而非替代",
        url:"https://cims.nyu.edu/~tristanb/statement.pdf",
        tag:"工具动态"
      }
    ]
  }
];
