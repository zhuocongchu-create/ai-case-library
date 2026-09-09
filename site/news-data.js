/* ============================================================
   AI 情报站数据 · news-data.js
   由每日自动化任务更新（搜集 → 飞书入库 → 同步到此文件）
   结构：window.NEWS = [ { date:'YYYY-MM-DD', items:[{title,why,url,tag}] } ]
   权限规则：date 距今 ≤3 天人人免费可看；>3 天仅订阅款(pro)可见
   ⚠️ 每次更新本文件后，必须同步递增 index.html 里的 ?v= 版本号（防缓存铁律）
   ============================================================ */
window.NEWS=[
  {
    date:"2026-09-09",
    items:[
      {
        title:"数学家指控OpenAI算力抢夺，AI副业需警惕信任风险",
        why:"OpenAI用大量算力追赶证明，算力成本已成竞争关键。AI副业别盲目依赖大模型，优先权争议可能影响长期合作——先建立信任，再谈技术",
        url:"https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician",
        tag:"行业观察"
      },
      {
        title:"Mistral融资30亿欧元估值210亿，欧洲AI资本热度飙升",
        why:"Mistral D轮30亿欧元估值210亿，欧洲AI资本热度飙升。想做AI副业的盯紧主权AI赛道，但别被高估值迷惑，先验证市场需求",
        url:"https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier",
        tag:"行业数据"
      },
      {
        title:"数学家用LLM完成证明，AI工具数学领域已具生产力",
        why:"数学家用LLM完成证明，AI工具在数学领域已具生产力。AI副业可尝试细分领域，但需注意成果验证成本——先小规模测试，再扩大应用",
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
