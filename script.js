// ==========================
// 中英文切换
// ==========================
let currentLang = localStorage.getItem('lang') || 'en';

const langText = {
  en: {
    about: "About Me",
    publications: "Publications",
    projects: "Projects",
    news: "News",
    experience: "Experience",
    contact: "Contact",
    viewPubs: "View Publications",
    getInTouch: "Get in Touch",
    newsTitle: "News",
    pubsTitle: "Research",
    projectsTitle: "Projects",
    experienceTitle: "Experience",
    contactTitle: "Contact",
    feelFree: "Feel free to reach out!",
    teaching: "Teaching",
    teachingTitle: "Teaching",
  },
  zh: {
    about: "关于我",
    publications: "科研成果",
    projects: "科研项目",
    news: "新闻动态",
    experience: "个人经历",
    contact: "联系方式",
    viewPubs: "查看论文",
    getInTouch: "联系我",
    newsTitle: "新闻动态",
    pubsTitle: "科研成果",
    projectsTitle: "科研项目",
    experienceTitle: "个人经历",
    contactTitle: "联系方式",
    feelFree: "欢迎随时联系！",
    teaching: "教育教学",
    teachingTitle: "教育教学",
  }
};

function applyLang() {
  document.querySelectorAll('[data-locale]').forEach(el => {
    const key = el.dataset.locale;
    if (langText[currentLang][key]) {
      el.textContent = langText[currentLang][key];
    }
  });
  document.getElementById('langText').textContent = currentLang === 'en' ? '中' : 'EN';
  document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  const btn = document.getElementById('langSwitch');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLang();
  });
});

// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
  const label = document.querySelector('.theme-label');
  if (label) {
    label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeLabel();
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const scrollElements = document.querySelectorAll('.scroll-animate');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
scrollElements.forEach(el => observer.observe(el));

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── Config Population ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USER_CONFIG === 'undefined') return;
  populateSimpleFields(USER_CONFIG);
  populateLists(USER_CONFIG);
});

function populateSimpleFields(cfg) {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (key === 'role_university') el.textContent = `${cfg.role} at ${cfg.university}`;
    else if (cfg[key] !== undefined) el.textContent = cfg[key];
  });
  if (cfg.name) document.title = `${cfg.name} | Academic Homepage`;
  if (cfg.photo) {
    const av = document.querySelector('.image-placeholder, .hero-photo');
    if (av) av.innerHTML = `<img src="${cfg.photo}" alt="${cfg.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  }

  if (cfg.stats && cfg.stats.length > 0) {
    const statsContainer = document.getElementById('hero-stats');
    if (statsContainer) {
      let statsHTML = '';
      cfg.stats.forEach(stat => {
        statsHTML += `
          <div class="stat">
            <div class="stat-number">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `;
      });
      statsContainer.innerHTML = statsHTML;
    }
  }
}

function boldName(authors, name) {
  if (!name) return authors;
  return authors.replace(name, `<strong>${name}</strong>`);
}

// ==========================
// 核心渲染函数（已修复）
// ==========================
function populateLists(cfg) {

  // --------------------
  // 论文
  // --------------------
// 论文渲染（修复pdf/code按钮显示）
// --------------------
// --------------------
// --------------------
// 论文：和专利完全一样的排版 + 点击年份下拉选择 + 滚动条
// --------------------
const pubList = document.getElementById('cfg-publications');
if (pubList && cfg.publications) {
  let html = `
  <div class="pub-scroll-wrapper">
    <div class="pub-scroll-content" id="pubScrollContent">
    </div>
  </div>`;

  pubList.innerHTML = html;
  switchYear(cfg.publications[0].year);
}

function switchYear(year) {
  const content = document.getElementById('pubScrollContent');
  const target = cfg.publications.find(item => item.year == year);
  if (!target) return;

  let html = `
  <div class="pub-item">
    <div class="pub-year-dropdown">
      <select class="year-select" onchange="switchYear(this.value)">`;

  cfg.publications.forEach(y => {
    html += `<option value="${y.year}" ${y.year == year ? 'selected' : ''}>${y.year}</option>`;
  });

  html += `
      </select>
    </div>
    <div class="pub-list-group">`;

  target.papers.forEach(p => {
    let linkHtml = '';
    if (p.links) {
      if (p.links.pdf) linkHtml += `<a href="${p.links.pdf}" class="pub-link" target="_blank">pdf</a>`;
      if (p.links.code) linkHtml += `<a href="${p.links.code}" class="pub-link" target="_blank">code</a>`;
    }

    html += `
      <div class="pub-single">
        <div class="pub-header">
          <h3 class="pub-title">${p.title}</h3>
          <div class="pub-links">${linkHtml}</div>
        </div>
        <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
        <p class="pub-venue">${p.venue}</p>
      </div>`;
  });

  html += `
    </div>
  </div>`;

  content.innerHTML = html;
}

  // --------------------
  // 专利
  // --------------------
  const patentsList = document.getElementById('cfg-patents');
  if (patentsList && cfg.patents) {
    let patentsHTML = '';
    cfg.patents.forEach(yearGroup => {
      patentsHTML += `<article class="pub-card"><div class="pub-year">${yearGroup.year}</div><div class="pub-content">`;
      yearGroup.list.forEach(p => {
        let venueText = `专利号: ${p.number}`;
        if (p.status) venueText += ` | ${p.status}`;
        patentsHTML += `
        <div class="pub-item">
          <div class="pub-header"><h3 class="pub-title">${p.title}</h3></div>
          <p class="pub-authors">${p.authors}</p>
          <p class="pub-venue">${venueText}</p>
        </div>`;
      });
      patentsHTML += `</div></article>`;
    });
    patentsList.innerHTML = patentsHTML;
  }

  // --------------------
  // 专著渲染
const monographsContainer = document.getElementById('cfg-monographs');
if (monographsContainer && cfg.monographs?.length) {
  let html = '';
  cfg.monographs.forEach((item, index) => {
    html += `
    <div class="pub-item">
      <h3 class="pub-title">${index + 1}. ${item.name}</h3>
      <p class="pub-authors">著作权人：${item.copyrightHolder}</p>
      <p class="pub-authors">开发人员：${item.developers}</p>
      <p class="pub-venue">登记号：${item.number} | ${item.time}</p>
    </div>
    `;
  });
  monographsContainer.innerHTML = html;
}

  // --------------------
  // 基金项目
  // --------------------
  const fundsContainer = document.getElementById('cfg-projects');
  if (fundsContainer && cfg.funds) {
    let fhtml = '';
    cfg.funds.slice(0,5).forEach((item,i) => {
      fhtml += `<div class="pub-item"><h3 class="pub-title">${i+1}. ${item.name}</h3><p class="pub-authors">编号：${item.number} | ${item.time}</p></div>`;
    });
    if (cfg.funds.length>5) {
      fhtml += `
      <div class="more-wrapper">
        <button class="more-btn" onclick="toggleFunds(this)">more ▼</button>
        <div class="funds-hidden" style="display:none;">${cfg.funds.slice(5).map((item,i)=>`
        <div class="pub-item"><h3 class="pub-title">${5+i+1}. ${item.name}</h3><p class="pub-authors">编号：${item.number} | ${item.time}</p></div>`).join('')}
        </div>
      </div>`;
    }
    fundsContainer.innerHTML = fhtml;
  }

  // --------------------
  // 新闻
  // --------------------
  // 渲染新闻（适配论文卡片样式）
const newsList = document.getElementById('cfg-news');
if (newsList && cfg.news?.length) {
  let newsHTML = '';
  cfg.news.forEach(n => {
    newsHTML += `
    <div class="news-item">
      <span class="news-date">${n.date}</span>
      <div class="news-content">
        <span class="news-badge">${n.badge}</span>
        <span class="news-text">${n.text}</span>
      </div>
    </div>`;
  });
  newsList.innerHTML = newsHTML;
}

  // --------------------
  // 教育 & 工作
  // --------------------
  const eduContainer = document.getElementById('cfg-education');
  if (eduContainer && cfg.education) {
    eduContainer.innerHTML = cfg.education.map(item => `
    <div class="exp-item">
      <div class="exp-period">${item.period}</div>
      <div class="exp-details"><h4>${item.degree}</h4><p>${item.school}</p></div>
    </div>`).join('');
  }

  const workContainer = document.getElementById('cfg-work');
  if (workContainer && cfg.workExperience) {
    workContainer.innerHTML = cfg.workExperience.map(item => `
    <div class="exp-item">
      <div class="exp-period">${item.period}</div>
      <div class="exp-details"><h4>${item.position}</h4><p>${item.school}</p></div>
    </div>`).join('');
  }

  // --------------------
  // 学生
  // --------------------
  // 渲染学生信息（已修复：标题黑色 + 超过8个折叠）
const studentsContainer = document.getElementById('cfg-students');
if (studentsContainer && cfg.students?.length) {
  let studentsHTML = '';
  cfg.students.forEach(group => {
    studentsHTML += `<div class="pub-item">`;
    // 标题改成黑色，去掉蓝色样式
    studentsHTML += `<p style="color: #000; font-weight:bold;">${group.title}</p>`;
    
    // 前8个正常显示
    const showList = group.list.slice(0, 8);
    const hiddenList = group.list.slice(8);
    
    showList.forEach(item => {
      studentsHTML += `<p>${item}</p>`;
    });

    // 超过8个，显示more按钮折叠
    if (hiddenList.length > 0) {
      studentsHTML += `
      <div class="more-wrapper">
        <button class="more-btn" onclick="toggleStudents(this)">more <span>▼</span></button>
        <div class="students-hidden" style="display:none;">
          ${hiddenList.map(item => `<p>${item}</p>`).join('')}
        </div>
      </div>`;
    }
    studentsHTML += `</div>`;
  });
  studentsContainer.innerHTML = studentsHTML;
}

  // --------------------
  // 联系信息
  // --------------------
  if (USER_CONFIG && USER_CONFIG.contact) {
    const cfg = USER_CONFIG.contact;
    const msgEl = document.getElementById('contact-message');
    const emailEl = document.getElementById('contact-email');
    const telEl = document.getElementById('contact-tel');
    if (msgEl) msgEl.textContent = cfg.message;
    if (emailEl) emailEl.innerHTML = `Email: <a href="mailto:${cfg.email}">${cfg.email}</a>`;
    if (telEl) telEl.textContent = `Tel: ${cfg.tel}`;
  }
}

// ==========================
// 展开/收起
// ==========================
function togglePapers(btn) {
  const h = btn.nextElementSibling;
  h.style.display = h.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = h.style.display === 'block' ? 'less ▲' : 'more ▼';
}

function toggleYears(btn) {
  const h = btn.nextElementSibling;
  h.style.display = h.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = h.style.display === 'block' ? 'less years ▲' : 'more years ▼';
}
// 学生列表展开/收起
function toggleStudents(btn) {
  const hidden = btn.nextElementSibling;
  hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = hidden.style.display === 'block' ? 'less <span>▲</span>' : 'more <span>▼</span>';
}

function toggleFunds(btn) {
  const h = btn.nextElementSibling;
  h.style.display = h.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = h.style.display === 'block' ? 'less ▲' : 'more ▼';
}

// ==========================
// 通用切换（所有按钮）
// ==========================
function switchTab(tabName) {
  const group = event.target.closest('.tab-buttons');
  if (!group) return;
  group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  group.parentElement.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById(tabName);
  if (target) target.classList.add('active');
}

// ==========================
// 自动加粗名字
// ==========================
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pub-authors').forEach(el => {
    el.innerHTML = el.innerHTML.replace(/Xiaohong Jia/g, '<strong>Xiaohong Jia</strong>');
    el.innerHTML = el.innerHTML.replace(/加小红/g, '<strong>加小红</strong>');
  });
});