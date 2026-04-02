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
      title: "Hybrid offline-online learning of fuzzy cognitive maps for forecasting nonstationary streaming time series",
      authors: "Xiaohong Jia, et al.",
      venue: "IEEE Transactions on Fuzzy Systems, 2026.",
      // 这里的 labels 对应图中蓝、紫色的圆角标签
      labels: ["SCI一区 Top", "IF 10.7"], 
      links: { pdf: "https://doi.org/10.1007/...", code: "#" },
      abstract: "这里写论文的简要介绍..."
    },
    {
      year: 2026,
      title: "TacticalCalib: End-to-End 6-DoF Camera Pose Regression for Tactical Camera Calibration",
      authors: "Xiaohong Jia, et al.",
      venue: "WACV, 2026, pp. 6547-6556.",
      // 这里的 labels 对应图中绿色的圆角标签
      labels: ["计算机视觉顶级会议"],
      links: { pdf: "https://doi.org/10.1007/...", code: "#" },
      abstract: "这里写第二篇论文的简要介绍..."
    }
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
