/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-12",
    items:[
      {
        title:"英伟达或投资100亿美元参与Anthropic IPO，估值达2万亿美元",
        why:"英伟达考虑投资 Anthropic 至多 100 亿美元，这表明 AI 大模型赛道正吸引巨头资金。想做 AI 副业的你，可以关注大模型公司融资动态，寻找潜在合作机会或投资信号。但需注意，大模型创业风险高，需评估技术与市场潜力后再行动。",
        url:"https://www.ithome.com/1/001/488.htm",
        tag:"行业观察"
      },
      {
        title:"Minitap 指控 Google Artemis 未署名使用其开源代码",
        why:"Google Artemis 被指未署名使用 Minitap 的开源项目，这提醒你：在使用开源项目时，注意版权与署名问题，避免法律风险。AI 副业中若涉及代码开发，务必确认开源协议条款，防止因侵权导致纠纷。",
        url:"https://www.minitap.ai/blog/i-expected-better-from-google",
        tag:"行业观察"
      },
      {
        title:"DeepSeek V4.1 Flash 价格大降，缓存输入降价7倍",
        why:"DeepSeek V4.1 Flash 的价格大幅下降，缓存输入降价 7 倍，这对 AI 接单者是个机会。你可考虑使用该模型降低服务成本，提升竞争力。但需注意，低价可能伴随性能下降，建议结合实际测试再决定是否采用。",
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
  }
];
