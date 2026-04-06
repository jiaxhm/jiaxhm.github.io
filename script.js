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
    teaching: "Teaching"
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
    experienceTitle: "教育经历",
    contactTitle: "联系方式",
    feelFree: "欢迎随时联系！",
    teaching: "教育教学"
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
  const pubList = document.getElementById('cfg-publications');
  if (pubList && cfg.publications) {
    let html = '';
    cfg.publications.slice(0, 2).forEach(yearGroup => {
      html += `<article class="pub-card">`;
      html += `<div class="pub-year">${yearGroup.year}</div><div class="pub-content">`;
      yearGroup.papers.slice(0,5).forEach(p => {
        html += `
        <div class="pub-item">
          <div class="pub-header">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('')}</div>
          </div>
          <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
          <p class="pub-venue">${p.venue}</p>
        </div>`;
      });
      if (yearGroup.papers.length > 5) {
        html += `
        <div class="more-wrapper">
          <button class="more-btn" onclick="togglePapers(this)">more ▼</button>
          <div class="papers-hidden">${yearGroup.papers.slice(5).map(p => `
          <div class="pub-item">
            <div class="pub-header">
              <h3 class="pub-title">${p.title}</h3>
              <div class="pub-links">${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('')}</div>
            </div>
            <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
            <p class="pub-venue">${p.venue}</p>
          </div>`).join('')}
          </div>
        </div>`;
      }
      html += `</div></article>`;
    });
    if (cfg.publications.length > 2) {
      html += `
      <div class="more-years-wrapper">
        <button class="more-btn" onclick="toggleYears(this)">more years ▼</button>
        <div class="years-hidden">${cfg.publications.slice(2).map(y => `
        <article class="pub-card">
          <div class="pub-year">${y.year}</div>
          <div class="pub-content">${y.papers.map(p => `
          <div class="pub-item">
            <div class="pub-header"><h3 class="pub-title">${p.title}</h3></div>
            <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
            <p class="pub-venue">${p.venue}</p>
          </div>`).join('')}</div>
        </article>`).join('')}
        </div>
      </div>`;
    }
    pubList.innerHTML = html;
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
  // 专著
  // --------------------
  const monographsContainer = document.getElementById('cfg-monographs');
  if (monographsContainer && cfg.monographs) {
    let mhtml = '';
    cfg.monographs.forEach((item, i) => {
      mhtml += `
      <div class="pub-item">
        <h3 class="pub-title">${i+1}. ${item.title}</h3>
        <p class="pub-authors">${item.authors}</p>
        <p class="pub-venue">${item.press} | ${item.year}</p>
      </div>`;
    });
    monographsContainer.innerHTML = mhtml;
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
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content"><span class="news-badge">${n.badge}</span><span class="news-text">${n.text}</span></div>
      </div>`).join('');
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
  const studentsContainer = document.getElementById('cfg-students');
  if (studentsContainer && cfg.students) {
    let shtml = '';
    cfg.students.forEach(g => {
      shtml += `<div class="pub-item"><p style="color:red;font-weight:bold;">${g.title}</p>`;
      g.list.forEach(t => shtml += `<p>${t}</p>`);
      shtml += `</div>`;
    });
    studentsContainer.innerHTML = shtml;
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