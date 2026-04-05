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
    feelFree: "Feel free to reach out!"
  },
  zh: {
    about: "关于我",
    publications: "论文",
    projects: "项目",
    news: "新闻",
    experience: "经历",
    contact: "联系",
    viewPubs: "查看论文",
    getInTouch: "联系我",
    newsTitle: "新闻动态",
    pubsTitle: "科研成果",
    projectsTitle: "科研项目",
    experienceTitle: "教育经历",
    contactTitle: "联系方式",
    feelFree: "欢迎随时联系！"
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

// Load saved theme
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

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll state
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

scrollElements.forEach(el => observer.observe(el));

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

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

function populateLists(cfg) {
  const pubList = document.getElementById('cfg-publications');
  if (!pubList || !cfg.publications) return;

  let html = '';

  // 只遍历前 2 个年份（2026、2025）
  cfg.publications.slice(0, 2).forEach(yearGroup => {
    const year = yearGroup.year;
    const papers = yearGroup.papers;

    html += `<article class="pub-card">`;
    html += `<div class="pub-year">${year}</div>`;
    html += `<div class="pub-content">`;

    // 显示前 3 篇
    papers.slice(0, 5).forEach(p => {
      html += `
      <div class="pub-item">
        <div class="pub-header">
          <h3 class="pub-title">${p.title}</h3>
          <div class="pub-links">
            ${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('')}
          </div>
        </div>
        <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
        <p class="pub-venue">${p.venue}</p>
      </div>`;
    });

    // 多于 3 篇，显示 more 按钮
    if (papers.length > 5) {
      html += `
      <div class="more-wrapper">
        <button class="more-btn" onclick="togglePapers(this)">more <span>▼</span></button>
        <div class="papers-hidden">
          ${papers.slice(5).map(p => `
          <div class="pub-item">
            <div class="pub-header">
              <h3 class="pub-title">${p.title}</h3>
              <div class="pub-links">
                ${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('')}
              </div>
            </div>
            <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
            <p class="pub-venue">${p.venue}</p>
          </div>`).join('')}
        </div>
      </div>`;
    }

    html += `</div></article>`;
  });

  // ==============================
  // 关键：剩余年份（从第3个开始）放到一个 "更多年份" 的折叠块里
  // ==============================
  if (cfg.publications.length > 2) {
    html += `
    <div class="more-years-wrapper">
      <button class="more-btn" onclick="toggleYears(this)">
        more years <span>▼</span>
      </button>
      <div class="years-hidden">
        ${cfg.publications.slice(2).map(yearGroup => {
          const year = yearGroup.year;
          return `
          <article class="pub-card">
            <div class="pub-year">${year}</div>
            <div class="pub-content">
              ${yearGroup.papers.map(p => `
              <div class="pub-item">
                <div class="pub-header">
                  <h3 class="pub-title">${p.title}</h3>
                  <div class="pub-links">
                    ${Object.entries(p.links||{}).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('')}
                  </div>
                </div>
                <p class="pub-authors">${boldName(p.authors, cfg.name)}</p>
                <p class="pub-venue">${p.venue}</p>
              </div>`).join('')}
            </div>
          </article>`;
        }).join('')}
      </div>
    </div>`;
  }

  // 渲染专利（无 undefined 版本）
const patentsList = document.getElementById('cfg-patents');
if (patentsList && cfg.patents) {
  let patentsHTML = '';
  cfg.patents.forEach(yearGroup => {
    patentsHTML += `<article class="pub-card">`;
    patentsHTML += `<div class="pub-year">${yearGroup.year}</div>`;
    patentsHTML += `<div class="pub-content">`;

    yearGroup.list.forEach(p => {
      // 拼接专利号和状态，状态为空时只显示专利号
      let venueText = `专利号: ${p.number}`;
      if (p.status) {
        venueText += ` | ${p.status}`;
      }

      patentsHTML += `
      <div class="pub-item">
        <div class="pub-header">
          <h3 class="pub-title">${p.title}</h3>
          <div class="pub-links">
            ${p.links ? Object.entries(p.links).map(([k,v])=>`<a href="${v}" class="pub-link">${k}</a>`).join('') : ''}
          </div>
        </div>
        <p class="pub-authors">${p.authors}</p>
        <p class="pub-venue">${venueText}</p>
      </div>`;
    });

    patentsHTML += `</div></article>`;
  });
  patentsList.innerHTML = patentsHTML;
}
  // 渲染基金项目
  const fundsContainer = document.getElementById('cfg-projects');
  if (fundsContainer && cfg.funds) {
    let fundsHTML = '';
    cfg.funds.forEach(item => {
      fundsHTML += `
      <div class="fund-item">
        <div class="fund-time">${item.time}</div>
        <div class="fund-info">
          <h4 class="fund-name">${item.name}</h4>
          <p class="fund-number">编号：${item.number}</p>
        </div>
      </div>`;
    });
    fundsContainer.innerHTML = fundsHTML;
  }

  // 渲染新闻
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }

  // 渲染经历
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-category"><h3>Education</h3>${edu.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-category"><h3>Experience</h3>${exp.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expGrid.innerHTML = html;
  }

  pubList.innerHTML = html;
}

 



  // 渲染基金项目
const fundsContainer = document.getElementById('cfg-projects');
if (fundsContainer && cfg.funds) {
  let fundsHTML = '';
  cfg.funds.forEach(item => {
    fundsHTML += `
    <div class="fund-item">
      <div class="fund-time">${item.time}</div>
      <div class="fund-info">
        <h4 class="fund-name">${item.name}</h4>
        <p class="fund-number">编号：${item.number}</p>
      </div>
    </div>`;
  });
  fundsContainer.innerHTML = fundsHTML;
}
  const newsList = document.getElementById('cfg-news');
  if (newsList && cfg.news?.length) {
    newsList.innerHTML = cfg.news.map(n => `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <div class="news-content">
          <span class="news-badge">${n.badge}</span>
          <span class="news-text">${n.text}</span>
        </div>
      </div>`).join('');
  }
  const expGrid = document.getElementById('cfg-experience');
  if (expGrid) {
    const edu = cfg.education||[], exp = cfg.experience||[];
    let html = '';
    if (edu.length) html += `<div class="exp-category"><h3>Education</h3>${edu.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.degree}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (exp.length) html += `<div class="exp-category"><h3>Experience</h3>${exp.map(e=>`<div class="exp-item"><div class="exp-period">${e.period}</div><div class="exp-details"><h4>${e.role}</h4><p>${e.institution}</p></div></div>`).join('')}</div>`;
    if (html) expGrid.innerHTML = html;
  }





// 切换论文展开/收起
function togglePapers(btn) {
  const hidden = btn.nextElementSibling;
  hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = btn.innerHTML.includes('more') ? 'less <span>▲</span>' : 'more <span>▼</span>';
}

// 切换年份折叠/展开
function toggleYears(btn) {
  const hidden = btn.nextElementSibling;
  hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';
  btn.innerHTML = btn.innerHTML.includes('more') ? '收起年份 <span>▲</span>' : '更多年份 <span>▼</span>';
}



// 切换论文/专利选项卡
function switchTab(tab) {
    // 切换按钮高亮
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-btn[onclick="switchTab('${tab}')"]`).classList.add('active');

    // 切换内容显示
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}-tab`).classList.add('active');
}






