/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-10",
    items:[
      {
        title:"六家中国AI公司被美三部门指控知识提取",
        why:"美国指控中国AI企业通过多渠道绕过规则提取模型知识，争议核心在访问授权。想做AI副业的，别碰数据合规雷区——尤其涉及跨境模型训练时，需确认数据来源合法性，否则可能面临法律风险。建议关注知识蒸馏技术的授权边界，避免踩坑。",
        url:"https://x.com/thexpin/status/2097615997616406833",
        tag:"行业观察"
      },
      {
        title:"美军方要求OpenAI定制最低拒绝率模型",
        why:"美军方曾要求OpenAI提供军事指令专用模型，虽属草案但暴露AI定制需求。AI接单者可留意政府/企业级定制项目，但需警惕合同中的安全条款陷阱——比如OpenAI已签署部署协议，说明此类合作需提前评估合规成本与收益，别被模糊条款误导。",
        url:"https://www.ithome.com/1/000/277.htm",
        tag:"行业观察"
      },
      {
        title:"OpenAI新增安全委员会监管AI治理",
        why:"Paul Christiano加入OpenAI安全委员会，暗示AI治理趋严。做AI副业的要盯紧行业政策风向，尤其是涉及敏感领域时，安全合规成本可能成隐形门槛。建议提前研究相关监管框架，别等到被约谈才补课。",
        url:"https://x.com/gdb/status/2097769891013280241",
        tag:"行业观察"
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
  },
  {
    date:"2026-09-07",
    items:[
      {
        title:"闲鱼官方数据：上半年 AI 服务成交 981.6 万单，同比增长 157%",
        why:"「卖 AI 服务」这个大盘首次被平台官方数据证实：近 500 万人买过 AI 服务，日均五六万单。你在案例库里看到的闲鱼类玩法，背后都是这条增长曲线——赛道有效性有了硬背书。",
        url:"https://finance.sina.com.cn/roll/2026-09-05/doc-iniquptn3555476.shtml",
        tag:"行业数据"
      },
      {
        title:"「卖铲子」样本：AI 漫剧教程定价 9.9 元，半年卖出 1.7 万份、流水 16 万",
        why:"淘金的还没上岸，卖教程的先赚了。把踩坑经验打包成「一次制作、永久售卖」的数字产品，是零门槛变现里利润率最高的模式之一——和我们案例库收录的知识付费玩法同源，适合作为你的第一个试水动作。",
        url:"https://www.toutiao.com/article/7680581583656501770",
        tag:"数字产品"
      },
      {
        title:"9 月 AI 接单价目表曝光：头像 9.9-99 元、文案 50-300 元、简历优化 30-199 元",
        why:"一张可以直接抄的报价基准表。亮点案例：前 HR 靠「行业经验+AI」做简历优化月入 1.2 万——AI 只负责出活，你的旧行业经验才是溢价来源，接单前先对表报价，别贱卖。",
        url:"https://www.toutiao.com/article/7681133494390555186/",
        tag:"接单行情"
      },
      {
        title:"闲鱼 AI 卖家画像：62.4% 是女性、六成年仅 18-35 岁、月均成交 897 元",
        why:"两个反常识结论：①赚到钱的主力不是程序员，而是「懂人情世故」的普通人，技术门槛比想象中低得多；②月均 897 元提醒我们这是副业起点而非暴富神话——预期管理同样是变现能力的一部分。",
        url:"https://www.163.com/dy/article/L67L3OUT05199D2V.html",
        tag:"行业观察"
      },
      {
        title:"政府搭台的 AI 创业社区：瑜伽老师转型 AI 漫剧，上月收入破 5000 元",
        why:"内蒙古赤峰的社区「AI 一人公司」孵化器：免费工位+共享算力，把个人创业者的硬件成本压到零。零基础转行样本+官方渠道分成的组合，说明这类扶持政策正在变多，值得查查你所在城市有没有同类空间。",
        url:"https://www.hongshanqu.gov.cn/ywdt/yw/202609/t20260901_2812422.html",
        tag:"转型样本"
      }
    ]
  }
];
