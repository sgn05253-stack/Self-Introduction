import '@fontsource/gowun-batang/400.css';
import '@fontsource/gowun-batang/700.css';
import 'pretendard/dist/web/static/pretendard.css';
import './style.css';
import { profileData } from './data/profileData.js';
import { renderHeroVennSvg, renderMiniVennSvg } from './components/vennDiagram.js';

function renderApp() {
  const { site, hero, philosophy, interests, projects, contact } = profileData;

  const navLinksHtml = site.navItems
    .map(
      (item) => `
      <a href="${item.href}" class="nav-link">
        <span class="nav-link-num">${item.num}</span>${item.label}
      </a>
    `
    )
    .join('');

  const philosophyHtml = philosophy
    .map(
      (item) => `
      <article class="philosophy-item reveal-block" data-bounce>
        <span class="philosophy-num">${item.num}</span>
        <h3 class="philosophy-title">${item.title}</h3>
        <p class="philosophy-desc">${item.description}</p>
      </article>
    `
    )
    .join('');

  const interestsHtml = interests
    .map(
      (item) => `
      <li class="interest-row reveal-block" tabindex="0" data-bounce>
        <div class="interest-main">
          <span class="interest-venn-indicator" aria-hidden="true">
            ${renderMiniVennSvg()}
          </span>
          <h3 class="interest-title">${item.title}</h3>
        </div>
        <span class="interest-note">${item.note}</span>
      </li>
    `
    )
    .join('');

  const projectsHtml = projects
    .map(
      (proj) => `
      <article class="project-card reveal-block" data-bounce>
        <div>
          <span class="project-category">${proj.category}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
        </div>
        <a href="${proj.linkHref}" class="project-link">${proj.linkLabel}</a>
      </article>
    `
    )
    .join('');

  const contactLinksHtml = contact.links
    .map(
      (link) => `
      <li>
        <a href="${link.href}" class="draw-underline-link">${link.label}</a>
      </li>
    `
    )
    .join('');

  const appEl = document.querySelector('#app');
  appEl.innerHTML = `
    <!-- 상단 고정 얇은 메뉴바 (모바일에서는 이름만 표시) -->
    <header class="site-header">
      <div class="header-inner">
        <a href="#top" class="brand-name">${site.name}</a>
        <nav class="site-nav" aria-label="섹션 탐색">
          ${navLinksHtml}
        </nav>
      </div>
    </header>

    <main class="page-container" id="top">
      <!-- 1. 첫 화면 (화면 높이 가득) -->
      <section class="hero-section" aria-label="소개 첫 화면">
        <div class="hero-grid">
          <div class="hero-text-col reveal-block" data-bounce>
            <p class="hero-eyebrow">${hero.eyebrow}</p>
            <h1 class="hero-headline">${hero.headline}</h1>
            <p class="hero-name">${hero.name}</p>
            <p class="hero-bio">${hero.bio}</p>
            <div class="hero-actions">
              <a href="${hero.primaryBtn.href}" class="btn btn-filled">${hero.primaryBtn.label}</a>
              <a href="${hero.secondaryBtn.href}" class="btn btn-outline">${hero.secondaryBtn.label}</a>
            </div>
          </div>

          <div class="hero-visual">
            ${renderHeroVennSvg()}
          </div>
        </div>
      </section>

      <!-- 2. 01 — 교육 철학 -->
      <section class="section-block" id="philosophy" aria-labelledby="heading-philosophy">
        <div class="section-heading-row reveal-block">
          ${renderMiniVennSvg()}
          <h2 id="heading-philosophy" class="section-label">01 — 교육 철학</h2>
        </div>
        <div class="philosophy-grid">
          ${philosophyHtml}
        </div>
      </section>

      <!-- 3. 02 — 연구 관심사 -->
      <section class="section-block" id="interests" aria-labelledby="heading-interests">
        <div class="section-heading-row reveal-block">
          ${renderMiniVennSvg()}
          <h2 id="heading-interests" class="section-label">02 — 연구 관심사</h2>
        </div>
        <ul class="interests-list">
          ${interestsHtml}
        </ul>
      </section>

      <!-- 4. 03 — 수업·연구 프로젝트 -->
      <section class="section-block" id="projects" aria-labelledby="heading-projects">
        <div class="section-heading-row reveal-block">
          ${renderMiniVennSvg()}
          <h2 id="heading-projects" class="section-label">03 — 수업·연구 프로젝트</h2>
        </div>
        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </section>

      <!-- 5. 04 — 연락처 -->
      <footer class="contact-section" id="contact" aria-labelledby="heading-contact">
        <div class="section-heading-row reveal-block">
          ${renderMiniVennSvg()}
          <h2 id="heading-contact" class="section-label">04 — 연락처</h2>
        </div>
        <div class="reveal-block" data-bounce>
          <p class="contact-heading">${contact.heading}</p>
          <p class="contact-subtext">${contact.subtext}</p>
          <div class="contact-details">
            <a href="${contact.emailHref}" class="draw-underline-link contact-email-link">
              ${contact.email}
            </a>
            <ul class="contact-links-row">
              ${contactLinksHtml}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  `;
}

/**
 * 스크롤 인터랙션 설정
 * 1) IntersectionObserver로 각 블록이 아래에서 16px 부드럽게 떠오르며 등장
 * 2) 스크롤 시 요소들이 살짝 바운스되는 인터랙티브 동작
 * 3) prefers-reduced-motion 설정 시 모든 움직임 비활성화
 */
function setupMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealBlocks = Array.from(document.querySelectorAll('.reveal-block'));
  const bounceTargets = Array.from(document.querySelectorAll('[data-bounce]'));

  if (prefersReducedMotion) {
    revealBlocks.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // 1. IntersectionObserver (16px 아래에서 부드럽게 떠오름)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealBlocks.forEach((el) => observer.observe(el));

  // 2. 스크롤 내리면서 요소들이 살짝 바운스되는 인터랙티브 동작
  let lastScrollY = window.scrollY;
  let velocity = 0;
  let displacement = 0;
  let rafId = null;

  function updateSpring() {
    const springForce = -0.16 * displacement;
    velocity = (velocity + springForce) * 0.78;
    displacement += velocity;

    const vh = window.innerHeight;

    bounceTargets.forEach((el, idx) => {
      if (!el.classList.contains('is-visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -40 || rect.top > vh + 40) return;

      const phase = idx % 2 === 0 ? 1 : 0.75;
      const offsetY = Math.max(-8, Math.min(8, displacement * phase));
      el.style.setProperty('--scroll-bounce-y', `${offsetY.toFixed(2)}px`);
    });

    if (Math.abs(displacement) > 0.1 || Math.abs(velocity) > 0.1) {
      rafId = requestAnimationFrame(updateSpring);
    } else {
      displacement = 0;
      velocity = 0;
      bounceTargets.forEach((el) => el.style.setProperty('--scroll-bounce-y', '0px'));
      rafId = null;
    }
  }

  window.addEventListener(
    'scroll',
    () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      const impulse = Math.max(-10, Math.min(10, delta * 0.2));
      velocity += impulse * 0.3;

      if (!rafId) {
        rafId = requestAnimationFrame(updateSpring);
      }
    },
    { passive: true }
  );
}

renderApp();
setupMotion();
