// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "加小红",
  role:       "副教授",
  university: "兰州交通大学",
  email:      "your.email@university.edu",
  bio:        "主要从事机器学习和模式识别研究，先后主持国家自然科学基金1项，甘肃省青年科技基金1项，省部级开放课题1项，在国内外权威期刊及会议IEEE TIP、IEEE TFS、电子学报、IEEE FG等上发表学术论文20余篇，其中2篇论文入选ESI高被引，且单篇最高引用550余次，同时获得授权专利5项，并担任IEEE TFS、IEEE TCYB、IEEE TNNLS、IEEE TCSVT等国际期刊审稿人。",
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
    { date: "2026.03.21", badge: "New",   text: "Zhiwei Xia's Paper accepted at CCF-C 2026!" },
    { date: "2026.03.21", badge: "New",   text: "Fuhai Wang's Paper accepted at CCF-C 2026!" },
  ],
   publications: [
    {
      year:     2026,
      papers: [
     { 
      title:    "1. Super-aware fuzzy c-means clustering for hyperspectral image segmentation",
      authors:  "Xiaohong Jia, Yonghui Li, Yunchao Wei, Yao Zhao, Wenwen Chang",
      venue:    "International Journal of Fuzzy Systems 2026",
      links:    { pdf: "Doi: 10.1007/s40815-025-02201-y", code: "#" },

    },
    {
      title:    "2. The design and application of steerable side window",
      authors:  "Xiaohong Jia, Tao Lei, Yingbo Wang, Xuejun Zhang, Guanghui Yan, Asoke K. Nandi",
      venue:    "Neural Computing and Applications 2026",
      links:    { pdf: "https://doi.org/10.1007/s00521-025-11819-w", code: "#" },
      
      
    },
    {
      title:    "3. Wavelet pooling group Swin Transformer for superpixel segmentation",
      authors:  "Xiaohong Jia, Yonghui Li, Xiaomei Guo, Yao Zhao, Guanghui Yan, Zhengwen Huang",
      venue:    "IEEE International Conference on Acoustics, Speech, and Signal Processing 2026",
      links:    { pdf: "", code: "#" },
    
    },
      {
      title:    "4. KAN-Based Superpixel Segmentation with Boundary Constraint and Semantic Guidance",
      authors:  "Xiaohong Jia, Fuhai Wang, Tong Tong, Long Ma, Guanghui Yan",
      venue:    "International Joint Conference on Neural Networks 2026",
      links:    { pdf: "", code: "#" },
      
    },
      {
      title:    "5. Simple multiple kernel k-means with heat kernel diffusion",
      authors:  "Zhiwei Xia, Xiaohong Jia, Xuejun Zhang, Yao Zhao, Wenqian Yu",
      venue:    "IEEE International Joint Conference on Neural Network 2026",
      links:    { pdf: "", code: "#" },
      
    },
  ],
},
   { 
    year:     2025,
      papers:[
      {
      title:    "1. Unsupervised region-based image editing of denoising diffusion models",
      authors:  "Zixiang Li, Yue Song, Renshuai Tao, Xiaohong Jia, Yao Zhao, Wei Wang",
      venue:    "in Proceedings of the AAAI Conference on Artificial Intelligence 2026",
      links:    { pdf: "", code: "#" },
    },
    {
      title:    "2. CNN与Transformer协同的多模态边缘检测网络",
      authors:  "李永辉(研究生), 赵耀, 加小红, 魏琛珍, 常文文",
      venue:    "计算机工程与应用 2025",
      links:    { pdf: "", code: "#" },
    },
    {
      title:    "3. SSMamba: Superpixel segmentation with Mamba",
      authors:  "Xiaohong Jia, Yonghui Li, Jianjun Jiao, Yao Zhao, Zhiwei Xia",
      venue:    "IEEE Signal Processing Letters 2025",
      links:    { pdf: "", code: "#" },
      
    },
{
      title:    "4. Fuzzy C-means clustering with region constraints for superpixel generation",
      authors:  "Xiaohong Jia, Yao Zhao, Bin Zhang, Xuejun Zhang, Ganghui Yan",
      venue:    "International Journal of Fuzzy Systems 2025",
      links:    { pdf: "Doi: https://doi.org/10.1007/s40815-025-02017-w" },
      
    },
  ],
},
 { year:     2024, 
  papers:[ 
{
  title:    "MAS-Net: Multi-Attention Hybrid Network for Superpixel Segmentation",
      authors:  "Guanghui Yan, Chenzhen Wei, Xiaohong Jia, Yonghui Li, Wenwen Chang",
      venue:    "Symmetry 2024",
      links:    { pdf: "#" },
      
    },
  ],
},
    {
      year:     2022,
      papers:[
      {
        title:    "Fuzzy Student’s t-distribution model based on richer spatial combination",
      authors:  "Tao Lei, Xiaohong Jia, Dinghua Xue, Qi Wang, Hongying Meng, Asoke K. Nandi",
      venue:    "IEEE Transactions on Fuzzy Systems 2022",
      links:    { pdf: "#" },
      
    },
  
  ],
},
  ],
  

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],

patents: [
    {
      year: 2025,
      list: [
        {
          title: "一种基于可控侧窗框架的嵌入式滤波方法",
          authors: "加小红, 夏之伟, 闫光辉, 张学军, 黄亚宁",
          number: "202510457684.6",
        },
        {
          title: "基于 Mamba 状态空间模型的超像素分割方法及系统，发明专利",
          authors: "加小红, 李永辉, 赵耀, 杨军, 张斌",
          number: "202510419182.4",
        }
      ]
    },
  ]
};