import '@fontsource/gaegu';
import '@fontsource/jua';
import './style.css';
import { profileData } from './data/profileData.js';
import {
  renderMalpungiSvg,
  renderVerticalNameTag,
  renderBubbleBgSvg,
  renderDoodleSvg,
  renderChatterSticker,
} from './components/stickers.js';

function renderApp() {
  const { hero, philosophy, interests, projects, contact, chatterStickers } = profileData;

  const navButtonsHtml = hero.navButtons
    .map(
      (btn) => `
      <a href="${btn.target}" class="sticker sticker-btn bg-${btn.color}" style="--rot: ${btn.rot};" data-bounce>
        <span>${btn.label}</span>
      </a>
    `
    )
    .join('');

  const philosophyHtml = philosophy
    .map(
      (item) => `
      <article class="sticker philosophy-card" style="--rot: ${item.rot};" data-bounce>
        ${renderBubbleBgSvg(item.shape, item.color)}
        <div class="sticker-content">
          <div class="phil-header">
            <span class="phil-kaomoji">${item.kaomoji}</span>
            <h3 class="phil-title">${item.title}</h3>
          </div>
          <p class="phil-desc">${item.description}</p>
        </div>
      </article>
    `
    )
    .join('');

  const interestsHtml = interests
    .map(
      (item) => `
      <article class="sticker interest-sticker" style="--rot: ${item.rot};" data-bounce>
        ${renderBubbleBgSvg(item.shape, item.color)}
        <div class="sticker-content">
          <span class="interest-kaomoji">${item.kaomoji}</span>
          <h3 class="interest-title">${item.title}</h3>
          <p class="interest-subtitle">${item.subtitle}</p>
        </div>
      </article>
    `
    )
    .join('');

  const projectsHtml = projects
    .map(
      (proj) => `
      <article class="sticker memo-card bg-${proj.color}" style="--rot: ${proj.rot};" data-bounce>
        <div class="memo-tape bg-${proj.tapeColor}" aria-hidden="true"></div>
        <span class="memo-tag">${proj.tag}</span>
        <h3 class="memo-title">${proj.title}</h3>
        <p class="memo-desc">${proj.description}</p>
        <div class="memo-hole-line">
          <a href="${proj.linkUrl}" class="memo-link">${proj.linkText}</a>
        </div>
      </article>
    `
    )
    .join('');

  const contactLinksHtml = contact.links
    .map(
      (link) => `
      <li class="contact-link-item">
        <a href="${link.url}">${link.label}</a>
      </li>
    `
    )
    .join('');

  const appEl = document.querySelector('#app');
  appEl.innerHTML = `
    <!-- 1. 첫 화면 (Hero) -->
    <header class="hero-section" id="top">
      <div class="interlude-row" style="margin-top: 0; margin-bottom: 18px;">
        <div class="doodle" style="width: 44px; height: 44px; --rot: -12deg;" data-bounce>
          ${renderDoodleSvg('sun', 'yellow')}
        </div>
        <div class="doodle" style="width: 56px; height: 40px; --rot: 6deg;" data-bounce>
          ${renderDoodleSvg('cloud', 'sky')}
        </div>
        <div class="doodle" style="width: 38px; height: 38px; --rot: 15deg;" data-bounce>
          ${renderDoodleSvg('sparkle', 'pink')}
        </div>
      </div>

      <div class="hero-collage">
        <!-- 세로 이름표 스티커 (글자마다 작은 하트) -->
        ${renderVerticalNameTag(hero.nameChars)}

        <!-- 큰 말풍선 한 줄 소개 -->
        <div class="sticker hero-headline-bubble" style="--rot: 1.6deg;" data-bounce>
          ${renderBubbleBgSvg('rect-tail-left', 'yellow')}
          <div class="sticker-content">
            <span class="role-badge-pill">${hero.roleBadge}</span>
            <h1 class="hero-headline-text">${hero.headline}</h1>
          </div>
        </div>

        <!-- 짧은 자기소개 스티커 -->
        <div class="sticker hero-bio-sticker bg-green" style="--rot: -1.7deg;" data-bounce>
          <p>${hero.shortBio}</p>
        </div>

        <!-- '나의 이야기' · '프로젝트' 이동 스티커 버튼 -->
        <nav class="hero-nav-buttons" aria-label="주요 섹션 이동">
          ${navButtonsHtml}
        </nav>

        <!-- 오리지널 마스코트 '말풍이' -->
        <div class="sticker hero-mascot-wrap" style="--rot: 2.3deg;" data-bounce>
          ${renderMalpungiSvg()}
          <p class="mascot-caption">${hero.mascotCaption}</p>
        </div>
      </div>
    </header>

    <!-- 사이 장식 1 -->
    <div class="interlude-row" aria-hidden="true">
      <div class="doodle" style="width: 38px; height: 38px; --rot: -14deg;" data-bounce>
        ${renderDoodleSvg('star', 'yellow')}
      </div>
      ${renderChatterSticker(chatterStickers[0])}
      <div class="doodle" style="width: 36px; height: 36px; --rot: 12deg;" data-bounce>
        ${renderDoodleSvg('heart', 'pink')}
      </div>
    </div>

    <!-- 2. 교육 철학 -->
    <section class="philosophy-section" id="story" aria-labelledby="title-philosophy">
      <div class="section-header-wrap">
        <div class="doodle" style="width: 34px; height: 34px; --rot: -10deg;" data-bounce>
          ${renderDoodleSvg('sparkle', 'purple')}
        </div>
        <h2 id="title-philosophy" class="sticker section-label-sticker bg-pink" style="--rot: -1.8deg;" data-bounce>
          <span class="section-step-num">01</span>
          <span>나의 교육 철학 (・ω・)</span>
        </h2>
        <div class="doodle" style="width: 52px; height: 36px; --rot: 8deg;" data-bounce>
          ${renderDoodleSvg('cloud', 'sky')}
        </div>
      </div>

      <div class="philosophy-scatter">
        ${philosophyHtml}
      </div>
    </section>

    <!-- 사이 장식 2 -->
    <div class="interlude-row" aria-hidden="true">
      <div class="doodle" style="width: 42px; height: 42px; --rot: 10deg;" data-bounce>
        ${renderDoodleSvg('sun', 'yellow')}
      </div>
      ${renderChatterSticker(chatterStickers[1])}
      <div class="doodle" style="width: 36px; height: 36px; --rot: -15deg;" data-bounce>
        ${renderDoodleSvg('star', 'green')}
      </div>
    </div>

    <!-- 3. 연구 관심사 -->
    <section class="interests-section" id="interests" aria-labelledby="title-interests">
      <div class="section-header-wrap">
        <div class="doodle" style="width: 34px; height: 34px; --rot: 14deg;" data-bounce>
          ${renderDoodleSvg('heart', 'pink')}
        </div>
        <h2 id="title-interests" class="sticker section-label-sticker bg-purple" style="--rot: 2.1deg;" data-bounce>
          <span class="section-step-num">02</span>
          <span>연구 관심사 ٩(◕‿◕)۶</span>
        </h2>
        <div class="doodle" style="width: 36px; height: 36px; --rot: -12deg;" data-bounce>
          ${renderDoodleSvg('sparkle', 'yellow')}
        </div>
      </div>

      <div class="interests-scatter">
        ${interestsHtml}
      </div>
    </section>

    <!-- 사이 장식 3 -->
    <div class="interlude-row" aria-hidden="true">
      <div class="doodle" style="width: 54px; height: 38px; --rot: -8deg;" data-bounce>
        ${renderDoodleSvg('cloud', 'purple')}
      </div>
      ${renderChatterSticker(chatterStickers[2])}
      <div class="doodle" style="width: 36px; height: 36px; --rot: 18deg;" data-bounce>
        ${renderDoodleSvg('sparkle', 'pink')}
      </div>
    </div>

    <!-- 4. 수업·연구 프로젝트 -->
    <section class="projects-section" id="projects" aria-labelledby="title-projects">
      <div class="section-header-wrap">
        <div class="doodle" style="width: 38px; height: 38px; --rot: -12deg;" data-bounce>
          ${renderDoodleSvg('star', 'yellow')}
        </div>
        <h2 id="title-projects" class="sticker section-label-sticker bg-green" style="--rot: -1.5deg;" data-bounce>
          <span class="section-step-num">03</span>
          <span>수업·연구 프로젝트 메모장 (｡•̀ᴗ-)✧</span>
        </h2>
        <div class="doodle" style="width: 36px; height: 36px; --rot: 9deg;" data-bounce>
          ${renderDoodleSvg('heart', 'pink')}
        </div>
      </div>

      <div class="projects-grid">
        ${projectsHtml}
      </div>
    </section>

    <!-- 사이 장식 4 -->
    <div class="interlude-row" aria-hidden="true">
      <div class="doodle" style="width: 36px; height: 36px; --rot: -16deg;" data-bounce>
        ${renderDoodleSvg('heart', 'pink')}
      </div>
      ${renderChatterSticker(chatterStickers[3])}
      <div class="doodle" style="width: 42px; height: 42px; --rot: 11deg;" data-bounce>
        ${renderDoodleSvg('sun', 'yellow')}
      </div>
    </div>

    <!-- 5. 연락처 (생각 풍선) -->
    <footer class="contact-section" id="contact" aria-labelledby="title-contact">
      <div class="section-header-wrap" style="margin-bottom: 18px;">
        <h2 id="title-contact" class="sticker section-label-sticker bg-sky" style="--rot: 1.7deg;" data-bounce>
          <span class="section-step-num">04</span>
          <span>연락처 & 반가운 연결 ☆</span>
        </h2>
      </div>

      <div class="sticker thought-bubble-card" style="--rot: -1.4deg;" data-bounce>
        ${renderBubbleBgSvg('thought-bubble', 'yellow')}
        <div class="sticker-content">
          <p class="contact-greeting">${contact.greeting}</p>
          <a href="${contact.emailHref}" class="contact-email-pill">
            <span class="contact-email-badge">${contact.emailLabel}</span>
            <span>${contact.email}</span>
          </a>
          <ul class="contact-links-list">
            ${contactLinksHtml}
          </ul>
        </div>
      </div>

      <p class="diary-footer-note">
        ✿ 최효령의 민주시민교육 · AI융합교육 연구 다이어리 ✿
      </p>
    </footer>
  `;
}

/**
 * 1) IntersectionObserver로 스크롤 시 스티커가 '톡' 붙듯 나타나는 효과
 * 2) 스크롤 내리고 올릴 때 요소들이 통통 살짝 바운스되는 스프링 인터랙티브 효과
 */
function setupStickerInteractions() {
  const stickers = Array.from(document.querySelectorAll('.sticker'));
  const bounceTargets = Array.from(document.querySelectorAll('[data-bounce]'));

  // 1. 화면 진입 시 '톡' 붙는 효과
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.popDelay || 0);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  stickers.forEach((el, index) => {
    // 같은 줄/섹션의 스티커들이 순차적으로 '톡, 톡' 붙도록 미세 딜레이 부여
    el.dataset.popDelay = String((index % 4) * 65);
    observer.observe(el);
  });

  // 2. 스크롤 내리면서 요소들이 살짝 바운스되는 스프링 물리 인터랙션
  let lastScrollY = window.scrollY;
  let velocity = 0;
  let displacement = 0;
  let rafId = null;

  function updateSpringBounce() {
    // 스프링 복원력(stiffness)과 감쇠(damping)로 쫀득한 바운스 구현
    const springForce = -0.18 * displacement;
    velocity = (velocity + springForce) * 0.76;
    displacement += velocity;

    const vh = window.innerHeight;

    bounceTargets.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      // 현재 화면 안에 보이는 요소만 바운스 적용
      if (rect.bottom < -60 || rect.top > vh + 60) return;

      // 요소마다 살짝 다른 위상과 탄성 계수를 주어 다꾸 스티커가 살아 움직이는 느낌 연출
      const factor = (idx % 3 === 0 ? 1 : idx % 3 === 1 ? -0.75 : 0.85);
      const offsetY = Math.max(-14, Math.min(14, displacement * factor));
      const scaleDelta = 1 + Math.min(0.03, Math.abs(displacement) * 0.0018);

      el.style.setProperty('--scroll-y', `${offsetY.toFixed(2)}px`);
      el.style.setProperty('--scroll-scale', scaleDelta.toFixed(3));
    });

    if (Math.abs(displacement) > 0.15 || Math.abs(velocity) > 0.15) {
      rafId = requestAnimationFrame(updateSpringBounce);
    } else {
      // 정지 시 원래 자리로 깔끔하게 복귀
      displacement = 0;
      velocity = 0;
      bounceTargets.forEach((el) => {
        el.style.setProperty('--scroll-y', '0px');
        el.style.setProperty('--scroll-scale', '1');
      });
      rafId = null;
    }
  }

  window.addEventListener(
    'scroll',
    () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      // 스크롤 속도에 비례해 바운스 충격량 추가 (과도한 튐 방지 캡 적용)
      const impulse = Math.max(-16, Math.min(16, delta * 0.28));
      velocity += impulse * 0.35;

      if (!rafId) {
        rafId = requestAnimationFrame(updateSpringBounce);
      }
    },
    { passive: true }
  );
}

renderApp();
setupStickerInteractions();
