// ==========================
// 中英文切换
// ==========================
let currentLang = localStorage.getItem('lang') || 'en';

const langText = {
  en: {
    about: "About Me",
    publications: "Publications",
    patents: "Patents",
    projects: "Projects",
    news: "News",
    experience: "Experience",
    contact: "Contact",
    viewPubs: "View Publications",
    contactMe: "Contact Me",
    newsTitle: "News",
    pubsTitle: "Research",
    projectsTitle: "Projects",
    experienceTitle: "Experience",
    contactTitle: "Contact",
    feelFree: "Feel free to reach out!",
    educationTitle: "Education",
    workTitle: "Work Experience"
  },
  zh: {
    about: "关于我",
    publications: "论文",
    patents: "专利",
    projects: "科研项目",
    news: "新闻动态",
    experience: "工作经历",
    contact: "联系方式",
    viewPubs: "查看论文",
    contactMe: "联系我",
    newsTitle: "新闻动态",
    pubsTitle: "研究成果",
    projectsTitle: "科研项目",
    experienceTitle: "工作经历",
    contactTitle: "联系方式",
    feelFree: "欢迎随时联系我！",
    educationTitle: "教育经历",
    workTitle: "工作经历"
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

// ==========================
// 主题切换
// ==========================
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
}

// ==========================
// 选项卡切换（论文/专利）
// ==========================
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.querySelector(`.tab-btn[onclick="switchTab('${tab}')"]`).classList.add('active');
  document.getElementById(`${tab}-tab`).classList.add('active');
}

// ==========================
// 经历选项卡切换
// ==========================
function switchExpTab(tabName) {
  const container = document.getElementById('experience');
  if (!container) return;
  container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  container.querySelector(`.tab-btn[onclick="switchExpTab('${tabName}')"]`).classList.add('active');
  container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(`${tabName}Tab`).classList.add('active');
}

// ==========================
// 核心渲染函数（所有内容都在这里）
// ==========================
function populateLists(cfg) {
  // 渲染论文
  const pubsList = document.getElementById('cfg-publications');
  if (pubsList && cfg.publications) {
    let pubsHTML = '';
    cfg.publications.forEach(yearGroup => {
      pubsHTML += `<article class="pub-card"><div class="pub-year">${yearGroup.year}</div><div class="pub-content">`;
      yearGroup.list.forEach(pub => {
        pubsHTML += `
        <div class="pub-item">
          <div class="pub-header">
            <h3 class="pub-title">${pub.title}</h3>
            <div class="pub-links">
              ${pub.links ? Object.entries(pub.links).map(([k, v]) => `<a href="${v}" class="pub-link">${k.toUpperCase()}</a>`).join('') : ''}
            </div>
          </div>
          <p class="pub-authors">${pub.authors}</p>
          <p class="pub-venue">${pub.venue}</p>
        </div>`;
      });
      pubsHTML += `</div></article>`;
    });
    pubsList.innerHTML = pubsHTML;
  }

  // 渲染专利
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
          <div class="pub-header">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-links">
              ${p.links ? Object.entries(p.links).map(([k, v]) => `<a href="${v}" class="pub-link">${k}</a>`).join('') : ''}
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

  // ==========================
  // ✅ 基金项目渲染（已放在正确位置）
  // ==========================
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
  const newsContainer = document.getElementById('cfg-news');
  if (newsContainer && cfg.news) {
    newsContainer.innerHTML = cfg.news.map(item => `
      <div class="news-item">
        <span class="news-date">${item.date}</span>
        <p class="news-content">${item.content}</p>
      </div>
    `).join('');
  }

  // 渲染教育经历
  const eduContainer = document.getElementById('cfg-education');
  if (eduContainer && cfg.education) {
    eduContainer.innerHTML = cfg.education.map(item => `
      <div class="exp-item">
        <div class="exp-period">${item.period}</div>
        <div class="exp-details">
          <h4>${item.degree}</h4>
          <p>${item.school}</p>
        </div>
      </div>
    `).join('');
  }

  // 渲染工作经历
  const workContainer = document.getElementById('cfg-work');
  if (workContainer && cfg.workExperience) {
    workContainer.innerHTML = cfg.workExperience.map(item => `
      <div class="exp-item">
        <div class="exp-period">${item.period}</div>
        <div class="exp-details">
          <h4>${item.position}</h4>
          <p>${item.company}</p>
        </div>
      </div>
    `).join('');
  }
}

// ==========================
// 页面加载初始化
// ==========================
document.addEventListener('DOMContentLoaded', () => {
  // 初始化主题
  if (localStorage.getItem('theme')) {
    document.documentElement.dataset.theme = localStorage.getItem('theme');
  }
  // 初始化语言
  applyLang();
  // 渲染所有数据
  if (typeof USER_CONFIG !== 'undefined') {
    populateLists(USER_CONFIG);
  }
  // 语言切换按钮
  const langBtn = document.getElementById('langSwitch');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      localStorage.setItem('lang', currentLang);
      applyLang();
    });
  }
});