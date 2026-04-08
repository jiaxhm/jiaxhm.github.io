// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "加小红",
  role:       "副教授",
  university: "兰州交通大学",
  email:      "your.email@university.edu",
  bio:        "主要从事机器学习和模式识别研究，先后主持国家自然科学基金1项，甘肃省青年科技基金1项，省部级开放课题1项，在国内外权威期刊及会议IEEE TIP、IEEE TFS、IEEE SPL、IJFS、电子学报、IEEE ICASSP、IEEE FG、IJCNN等上发表学术论文20余篇，其中2篇论文入选ESI高被引，且单篇最高引用550余次，同时获得授权专利5项，并担任IEEE TFS、IEEE TCYB、IEEE TNNLS、IEEE TCSVT等国际期刊审稿人。",
  photo:      "assets/jiaxiaohong.jpg",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "20+",  label: "Publications" },
    { value: "1000+", label: "Citations" },
    { value: "4+",   label: "Projects" },
  ],

  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/",
    twitter: "",          // leave empty to hide
    cv:      "assets/cv.pdf",
  },
news: [
    { date: "2026.03.21", badge: "New",   text: "Two papers have been accepted to IJCNN 2026 (CCF-C). Congratulations to Zhiwei Xia and Fuhai Wang!" },
    { date: "2026.01.16", badge: "New",   text: "One paper has been accepted to IEEE ICASSP 2026 (CCF-B). Congratulations to Yonghui Li!" },
    { date: "2026.01.16", badge: "New",   text: "One paper has been accepted to IEEE ICASSP 2026 (CCF-B). Congratulations to Yonghui Li!" },
    { date: "2026.01.16", badge: "New",   text: "One paper has been accepted to IEEE ICASSP 2026 (CCF-B). Congratulations to Yonghui Li!" },
  ],
   publications: [
  {
    year: 2026,
    papers: [
      {
        title: "1. Super-aware fuzzy c-means clustering for hyperspectral image segmentation",
        authors: "Xiaohong Jia, Yonghui Li, Yunchao Wei, Yao Zhao, Wenwen Chang",
        venue: "International Journal of Fuzzy Systems 2026",
        links: { pdf: "https://doi.org/10.1007/s40815-025-02201-y", code: "https://github.com/jiaxhm/SAFCM" }
      },
      {
        title: "2. The design and application of steerable side window",
        authors: "Xiaohong Jia, Tao Lei, Yingbo Wang, Xuejun Zhang, Guanghui Yan, Asoke K. Nandi",
        venue: "Neural Computing and Applications 2026",
        links: { pdf: "https://doi.org/10.1007/s00521-025-11819-w", code: "https://github.com/jiaxhm/SSW" }
      },
      {
        title: "3. Wavelet pooling group swin transformer for superpixel segmentation",
        authors: "Xiaohong Jia, Yonghui Li, Xiaomei Guo, Yao Zhao, Guanghui Yan, Zhengwen Huang",
        venue: "IEEE International Conference on Acoustics, Speech, and Signal Processing 2026",
        links: { pdf: "#", code: "#" }
      },
      {
        title: "4. KAN-Based superpixel segmentation with boundary constraint and semantic guidance",
        authors: "Xiaohong Jia, Fuhai Wang, Tong Tong, Long Ma, Guanghui Yan",
        venue: "International Joint Conference on Neural Networks 2026",
        links: { pdf: "#", code: "#" }
      },
      {
        title: "5. Simple multiple kernel k-means with heat kernel diffusion",
        authors: "Zhiwei Xia, Xiaohong Jia, Xuejun Zhang, Yao Zhao, Wenqian Yu",
        venue: "IEEE International Joint Conference on Neural Network 2026",
        links: { pdf: "#", code: "#" }
      }
    ]
  },
  {
    year: 2025,
    papers: [
      {
        title: "1. SSMamba: Superpixel segmentation with Mamba",
        authors: "Xiaohong Jia, Yonghui Li, Jianjun Jiao, Yao Zhao, Zhiwei Xia",
        venue: "IEEE Signal Processing Letters 2025",
        links: { pdf: "https://doi.org/10.1109/LSP.2025.3559425", code: "https://github.com/jiaxhm/SSMamba" }
      },
      {
        title: "2. Fuzzy C-means clustering with region constraints for superpixel generation",
        authors: "Xiaohong Jia, Yao Zhao, Bin Zhang, Xuejun Zhang, Ganghui Yan",
        venue: "International Journal of Fuzzy Systems 2025",
        links: { pdf: "https://doi.org/10.1007/s40815-025-02017-w", code: "https://github.com/jiaxhm/RCFCMS" }
      },
      {
        title: "3. Unsupervised region-based image editing of denoising diffusion models",
        authors: "Zixiang Li, Yue Song, Renshuai Tao, Xiaohong Jia, Yao Zhao, Wei Wang",
        venue: "in Proceedings of the AAAI Conference on Artificial Intelligence 2025",
        links: { pdf: "https://doi.org/10.1609/aaai.v39i17.34051", code: "#" }
      },
      {
        title: "4. CNN与Transformer协同的多模态边缘检测网络",
        authors: "李永辉, 赵耀, 加小红, 魏琛珍, 常文文",
        venue: "计算机工程与应用 2025",
        links: { pdf: "https://doi.org/10.3778/j.issn.1002-8331.2412-0150", code: "#" }
      }
    ]
  },
  {
    year: 2024,
    papers: [
      {
        title: "MAS-Net: Multi-Attention hybrid network for superpixel segmentation",
        authors: "Guanghui Yan, Chenzhen Wei, Xiaohong Jia, Yonghui Li, Wenwen Chang",
        venue: "Symmetry 2024",
        links: { pdf: "https://doi.org/10.3390/sym16081000", code: "#" }
      }
    ]
  },
  {
    year: 2022,
    papers: [
      {
        title: "Fuzzy Student's t-distribution model based on richer spatial combination",
        authors: "Tao Lei, Xiaohong Jia, Dinghua Xue, Qi Wang, Hongying Meng, Asoke K. Nandi",
        venue: "IEEE Transactions on Fuzzy Systems 2022",
        links: { pdf: " https://doi.org/10.1109/TFUZZ.2021.3099560", code: "#" }
      }
    ]
  }
],
  

  
  workExperience: [
     {
      period: "2026.01-至今",
      position: "副教授",
      school: "兰州交通大学"
    },
    {
      period: "2022.05-2025.12",
      position: "讲师",
      school: "兰州交通大学"
    }
   
  ],


patents: [
    {
      year: 2025,
      list: [
        {
          title: "1.一种基于可控侧窗框架的嵌入式滤波方法",
          authors: "加小红, 夏之伟, 闫光辉, 张学军, 黄亚宁",
          number: "202510457684.6",
        },
        {
          title: "2.基于 Mamba 状态空间模型的超像素分割方法及系统",
          authors: "加小红, 李永辉, 赵耀, 杨军, 张斌",
          number: "202510419182.4",
        }
      ]
    },
  ],

funds: [
    {
      name: "国家自然科学基金",
      number: "62366029",
      time: "2024.01.01 - 2027.12.31"
    },
    {
      name: "甘肃省青年科技基金",
      number: "23JRRA855",
      time: "2023.07.01 - 2025.06.30"
    },
    {
      name: "北京交通大学省部级及以上科研平台开放课题",
      number: "BATLAB202302",
      time: "2023.10 - 2025.09"
    },
{
      name: "兰州交通大学青年科学基金",
      number: "2023006",
      time: "2024.01.01 - 2026.12.31"
    }
  ],
  students: [
  {
    title: "硕士生：",
    list: [
       "谢安聪(2025年秋入学,在读）",
       "贾元麟(2025年秋入学,在读）",
       "廖文康(2025年秋入学,在读）",
       "王唯琦(2025年秋入学,在读）",
       "夏之伟(2024年秋入学,在读）",
       "陆新飞(2024年秋入学,在读）",
       "王福海(2024年秋入学,在读）",
       "孟鹏宇(2024年秋入学,在读）",
       "孙  赫(2023年秋入学,在读)",
       "李永辉(2023年秋入学,在读)",
       "杜昊炜(2023年秋入学,在读)",
       "魏琛珍(2022年秋入学,已毕业)",
       
     
    ]
  }
],
contact: {
    message: "欢迎随时联系！",
    email: "jiaxhm@163.com ",
    tel:18293132021
},


// 软件著作权（你可以无限加）
monographs: [
  {
    name: "高光谱遥感图像特征提取与分类智能分析软件",
    number: "15722631",
    copyrightHolder: "兰州交通大学", // 著作权人
    developers: "孟鹏宇，闫光辉，加小红",      // 开发人员
    time: "2025.06.23"
  },
  {
    name: "基于深度学习的自习室预约系统",
    number: "15346971",
    copyrightHolder: "兰州交通大学",
    developers: "孟鹏宇，闫光辉，加小红",
    time: "2025.04.27"
  }
],

};