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
  photo:      "",   // optional: path to your photo, e.g. "assets/photo.jpg"

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
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],
  publications: [
    {
      year: 2026,
      title: "第一篇论文标题：Super-aware fuzzy c-means clustering...",
      authors: "Xiaohong Jia, Yonghui Li, Yunchao Wei",
      venue: "International Journal of Fuzzy Systems 2026",
      links: { pdf: "https://doi.org/10.1007/s40815-025-02201-y", code: "#" },
      abstract: "简短介绍第一项研究成果。"
    }, // <--- 注意这个逗号，它是连接下一篇论文的关键
    {
      year: 2026,
      title: "第二篇论文标题：The design and application of steerable side window",
      authors: "Xiaohong Jia, Tao Lei, Yingbo Wang",
      venue: "Neural Computing and Applications 2026",
      links: { pdf: "https://doi.org/10.1007/s00521-025-11819-w", code: "#" },
      abstract: "简短介绍第二项研究成果。"
    },
    {
      year: 2026,
      title: "第三篇论文标题：Wavelet pooling group Swin Transformer...",
      authors: "Xiaohong Jia, Tao Lei, Xiaomei Guo",
      venue: "IEEE ICASSP 2026",
      links: { pdf: "#", code: "#" },
      abstract: "简短介绍第三项研究成果。"
    }, // <--- 最后一篇后面可以不加逗号
  
      {
      year:     2026,
      title:    "Wavelet pooling group Swin Transformer for superpixel segmentation",
      authors:  "Xiaohong Jia,Tao Lei, Xiaomei Guo",
      venue:    "IEEE International Conference on Acoustics, Speech, and Signal Processing 2026",
      links:    { pdf: "", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
      {
      year:     2026,
      title:    "KAN-Based Superpixel Segmentation with Boundary Constraint and Semantic Guidance",
      authors:  "Xiaohong Jia,Fuhai Wang, Tong Tong",
      venue:    "International Joint Conference on Neural Networks 2026",
      links:    { pdf: "", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
      {
      year:     2026,
      title:    "Simple multiple kernel k-means with heat kernel diffusion",
      authors:  "Zhiwei Xia,Xiaohong Jia, Xuejun Zhang",
      venue:    "IEEE International Joint Conference on Neural Network 2026",
      links:    { pdf: "", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
      {
      year:     2025,
      title:    "Unsupervised region-based image editing of denoising diffusion models",
      authors:  "Zixiang Li,Yue Song, Renshuai Tao,Xiaohong Jia",
      venue:    "in Proceedings of the AAAI Conference on Artificial Intelligence 2026",
      links:    { pdf: "", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2025,
      title:    "CNN与Transformer协同的多模态边缘检测网络",
      authors:  "李永辉(研究生), 赵耀, 加小红",
      venue:    "计算机工程与应用 2025",
      links:    { pdf: "", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },

    {
      year:     2024,
      title:    "Another Paper Title",
      authors:  "Your Name, Co-Author 1",
      venue:    "Conference / Journal Name 2024",
      links:    { pdf: "#" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  
  ],

  

  education: [
    { period: "2020–Present", degree: "Ph.D. in Computer Science", institution: "Your University" },
    { period: "2016–2020",    degree: "B.S. in Computer Science",  institution: "Your University" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
