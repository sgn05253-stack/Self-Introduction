/**
 * 손그림 느낌 SVG 스티커 모양, 마스코트 '말풍이', 주변 낙서(Doodle) 컴포넌트 모음
 * 그라데이션·그림자 없이 1.5~2px 검은 실선(#222222)과 파스텔 단색만 사용합니다.
 */

export const PALETTE = {
  green: '#DCF5E3',
  purple: '#EAE0F9',
  pink: '#FDE0E6',
  yellow: '#FFF4CC',
  sky: '#D9F0FA',
  gray: '#EFEFEF',
  apricot: '#FFE3D3',
  white: '#FFFFFF',
  stroke: '#222222',
};

/**
 * 오리지널 마스코트 '말풍이' SVG
 * 하늘색 말풍선과 살구색 말풍선이 다정하게 겹쳐 있고 각각 점 눈과 작은 입이 있는 캐릭터
 */
export function renderMalpungiSvg() {
  return `
    <svg class="malpungi-svg" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="오리지널 마스코트 말풍이">
      <!-- 상단 작은 손그림 반짝이 & 하트 장식 -->
      <path d="M140 24 C136 16, 125 17, 126 26 C127 33, 138 39, 140 43 C142 39, 153 33, 154 26 C155 17, 144 16, 140 24 Z"
        fill="${PALETTE.pink}" stroke="${PALETTE.stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M42 38 L45 46 L53 49 L45 52 L42 60 L39 52 L31 49 L39 46 Z"
        fill="${PALETTE.yellow}" stroke="${PALETTE.stroke}" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M242 34 L244 40 L250 42 L244 44 L242 50 L240 44 L234 42 L240 40 Z"
        fill="${PALETTE.yellow}" stroke="${PALETTE.stroke}" stroke-width="1.6" stroke-linejoin="round"/>

      <!-- 왼쪽: 하늘색 말풍선 친구 (살짝 기울어진 손그림 곡선) -->
      <g class="malpungi-left">
        <path d="M 34 95
                 C 32 58, 65 44, 106 46
                 C 146 47, 168 65, 166 98
                 C 164 126, 138 142, 98 142
                 C 82 142, 70 140, 62 137
                 L 40 154
                 L 47 130
                 C 37 121, 35 109, 34 95 Z"
              fill="${PALETTE.sky}" stroke="${PALETTE.stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- 점 눈 -->
        <circle cx="80" cy="92" r="3.6" fill="${PALETTE.stroke}"/>
        <circle cx="118" cy="90" r="3.6" fill="${PALETTE.stroke}"/>
        <!-- 발그레 볼터치 (단색 파스텔 분홍) -->
        <ellipse cx="69" cy="100" rx="6" ry="3.5" fill="${PALETTE.pink}"/>
        <ellipse cx="129" cy="98" rx="6" ry="3.5" fill="${PALETTE.pink}"/>
        <!-- 작은 입 -->
        <path d="M 93 98 Q 99 105 105 97" stroke="${PALETTE.stroke}" stroke-width="2" stroke-linecap="round" fill="none"/>
      </g>

      <!-- 오른쪽: 살구색 말풍선 친구 (하늘색 말풍선과 겹쳐 있음) -->
      <g class="malpungi-right">
        <path d="M 118 112
                 C 116 78, 144 62, 186 63
                 C 228 64, 252 82, 250 115
                 C 248 142, 224 156, 196 157
                 L 212 175
                 L 182 158
                 C 146 158, 120 142, 118 112 Z"
              fill="${PALETTE.apricot}" stroke="${PALETTE.stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- 점 눈 -->
        <circle cx="164" cy="109" r="3.6" fill="${PALETTE.stroke}"/>
        <circle cx="202" cy="111" r="3.6" fill="${PALETTE.stroke}"/>
        <!-- 발그레 볼터치 -->
        <ellipse cx="153" cy="117" rx="6" ry="3.5" fill="${PALETTE.pink}"/>
        <ellipse cx="213" cy="119" rx="6" ry="3.5" fill="${PALETTE.pink}"/>
        <!-- 작은 입 (귀여운 미소) -->
        <path d="M 177 116 Q 183 123 189 116" stroke="${PALETTE.stroke}" stroke-width="2" stroke-linecap="round" fill="none"/>
      </g>
    </svg>
  `;
}

/**
 * 세로로 긴 이름표 스티커 (글자마다 작은 하트 포함)
 */
export function renderVerticalNameTag(chars = ['최', '효', '령']) {
  const itemsHtml = chars
    .map(
      (ch, idx) => `
      <div class="nametag-char-row">
        <span class="nametag-char">${ch}</span>
        <svg class="nametag-mini-heart" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20 C12 20 4 14.5 4 9 C4 5.8 6.8 4 9.5 4 C11 4 12 5 12 6.2 C12 5 13 4 14.5 4 C17.2 4 20 5.8 20 9 C20 14.5 12 20 12 20 Z"
            fill="${idx % 2 === 0 ? PALETTE.pink : PALETTE.yellow}"
            stroke="${PALETTE.stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    `
    )
    .join('');

  return `
    <div class="sticker vertical-nametag" style="--rot: -2.8deg;" data-bounce>
      <svg class="nametag-bg-svg" viewBox="0 0 110 310" preserveAspectRatio="none" aria-hidden="true">
        <!-- 세로로 긴 손그림 이름표 테두리 -->
        <path d="M 22 14
                 L 88 12
                 L 102 34
                 L 100 292
                 Q 100 302 88 302
                 L 20 300
                 Q 10 300 10 288
                 L 8 34
                 Z"
              fill="${PALETTE.purple}" stroke="${PALETTE.stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
        <!-- 이름표 위쪽 펀칭 구멍 -->
        <circle cx="55" cy="28" r="7" fill="#FFFDF6" stroke="${PALETTE.stroke}" stroke-width="1.8" vector-effect="non-scaling-stroke"/>
      </svg>
      <div class="nametag-inner">
        <span class="nametag-label">NAME</span>
        <div class="nametag-chars">
          ${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

/**
 * 다양한 말풍선/스티커 배경 SVG 생성기
 * vector-effect="non-scaling-stroke"를 적용해 크기가 달라져도 1.8~2px 손그림 테두리를 유지합니다.
 */
export function renderBubbleBgSvg(shape, colorKey = 'yellow') {
  const fill = PALETTE[colorKey] || PALETTE.yellow;
  const stroke = PALETTE.stroke;

  switch (shape) {
    // 1) 꼬리 달린 큰 둥근 사각형 말풍선 (왼쪽 아래 꼬리)
    case 'rect-tail-left':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 400 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 28 16
                   C 130 11, 270 13, 372 18
                   C 386 19, 392 29, 391 45
                   C 390 92, 392 135, 389 172
                   C 388 186, 376 194, 360 194
                   C 260 197, 150 195, 92 194
                   L 48 214
                   L 58 192
                   L 32 191
                   C 17 190, 10 180, 11 164
                   C 12 115, 10 68, 13 38
                   C 14 23, 20 17, 28 16 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    // 2) 꼬리 달린 타원 말풍선
    case 'oval-bubble':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 380 230" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 190 12
                   C 305 10, 368 48, 368 106
                   C 368 158, 312 194, 218 198
                   L 234 222
                   L 184 199
                   C 78 198, 12 162, 12 106
                   C 12 46, 82 14, 190 12 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    // 3) 몽글몽글 구름 말풍선
    case 'cloud-bubble':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 400 240" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 66 52
                   C 78 20, 138 14, 168 34
                   C 198 10, 268 12, 294 38
                   C 342 30, 384 58, 376 98
                   C 396 126, 382 170, 340 180
                   C 324 208, 266 214, 232 198
                   L 202 226
                   L 188 200
                   C 142 214, 86 204, 68 180
                   C 24 176, 10 136, 28 104
                   C 14 74, 34 48, 66 52 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    // 4) 통통한 하트 모양 스티커
    case 'heart':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 360 310" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 180 54
                   C 146 8, 52 8, 24 68
                   C -2 124, 36 196, 180 294
                   C 324 196, 362 124, 336 68
                   C 308 8, 214 8, 180 54 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    // 5) 별 폭발 (뾰족뾰족 스타버스트) 스티커
    case 'starburst':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 380 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 190 8
                   L 228 38 L 282 16 L 296 56 L 354 52 L 340 98
                   L 374 132 L 342 168 L 366 214 L 314 228
                   L 312 272 L 254 260 L 224 292 L 186 266
                   L 144 292 L 118 258 L 62 268 L 64 224
                   L 14 206 L 38 162 L 6 126 L 42 92
                   L 28 48 L 86 54 L 104 14 L 154 38 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    // 6) 리본 액자 스티커
    case 'ribbon-frame':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 360 280" preserveAspectRatio="none" aria-hidden="true">
          <!-- 액자 본체 (모서리가 안쪽으로 살짝 들어간 손그림 액자) -->
          <path d="M 34 38
                   L 326 36
                   Q 332 52 346 56
                   L 344 242
                   Q 328 248 324 264
                   L 36 264
                   Q 30 248 14 242
                   L 16 56
                   Q 30 50 34 38 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- 안쪽 점선 테두리 -->
          <rect x="28" y="52" width="304" height="196" rx="10"
                fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="6 6" vector-effect="non-scaling-stroke"/>
          <!-- 상단 중앙 손그림 리본 장식 -->
          <path d="M 180 34 C 154 10, 118 14, 126 36 C 132 48, 162 44, 180 36 Z"
                fill="${PALETTE.pink}" stroke="${stroke}" stroke-width="1.8" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
          <path d="M 180 34 C 206 10, 242 14, 234 36 C 228 48, 198 44, 180 36 Z"
                fill="${PALETTE.pink}" stroke="${stroke}" stroke-width="1.8" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
          <circle cx="180" cy="35" r="7" fill="${PALETTE.yellow}" stroke="${stroke}" stroke-width="1.8" vector-effect="non-scaling-stroke"/>
        </svg>
      `;

    // 7) 동그라미가 이어지는 생각 풍선 (연락처용)
    case 'thought-bubble':
      return `
        <svg class="sticker-bg-svg" viewBox="0 0 520 290" preserveAspectRatio="none" aria-hidden="true">
          <!-- 큰 구름형 생각 풍선 본체 -->
          <path d="M 78 52
                   C 96 18, 174 12, 214 34
                   C 256 8, 346 12, 380 40
                   C 442 28, 496 60, 488 108
                   C 512 140, 494 192, 442 204
                   C 418 236, 340 244, 294 224
                   C 246 246, 166 244, 132 220
                   C 72 232, 24 202, 32 162
                   C 8 134, 16 84, 52 68
                   C 48 56, 62 48, 78 52 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- 이어지는 작은 생각 동그라미 3개 -->
          <ellipse cx="98" cy="248" rx="18" ry="12" fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke"/>
          <ellipse cx="66" cy="268" rx="12" ry="8" fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke"/>
          <ellipse cx="42" cy="281" rx="7" ry="5" fill="${fill}" stroke="${stroke}" stroke-width="2" vector-effect="non-scaling-stroke"/>
        </svg>
      `;

    default:
      return '';
  }
}

/**
 * 주변 손그림 낙서(Doodles) SVG: 작은 별, 반짝이, 하트, 해, 구름
 */
export function renderDoodleSvg(type, colorKey = 'yellow') {
  const fill = PALETTE[colorKey] || PALETTE.yellow;
  const stroke = PALETTE.stroke;

  switch (type) {
    case 'star':
      return `
        <svg class="doodle-svg" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 5 L29.5 16.8 L42.5 18.4 L32.8 27.4 L35.4 40.2 L24 33.8 L12.6 40.2 L15.2 27.4 L5.5 18.4 L18.5 16.8 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case 'sparkle':
      return `
        <svg class="doodle-svg" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 4 Q26 21 44 24 Q26 27 24 44 Q22 27 4 24 Q22 21 24 4 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="38" cy="10" r="2.5" fill="${stroke}"/>
          <circle cx="10" cy="38" r="2" fill="${stroke}"/>
        </svg>
      `;
    case 'heart':
      return `
        <svg class="doodle-svg" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 40 C24 40 7 29 7 17 C7 10.5 12.5 7 18 7 C21.2 7 23.2 9 24 11 C24.8 9 26.8 7 30 7 C35.5 7 41 10.5 41 17 C41 29 24 40 24 40 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case 'sun':
      return `
        <svg class="doodle-svg" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r="12" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
          <path d="M28 5 L28 11 M28 45 L28 51 M5 28 L11 28 M45 28 L51 28 M11.5 11.5 L16 16 M40 40 L44.5 44.5 M44.5 11.5 L40 16 M16 40 L11.5 44.5"
                stroke="${stroke}" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    case 'cloud':
      return `
        <svg class="doodle-svg" viewBox="0 0 64 44" aria-hidden="true">
          <path d="M16 34 C9 34 5 29 6 23 C7 18 11 15 16 16 C19 9 28 7 34 11 C39 7 48 9 50 16 C56 16 60 21 59 27 C58 32 53 34 47 34 Z"
                fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    default:
      return '';
  }
}

/**
 * 섹션 사이 짧은 추임새 장식 말풍선 렌더링
 */
export function renderChatterSticker(item, extraClass = '') {
  return `
    <div class="sticker chatter-sticker chatter-${item.shape} bg-${item.color} ${extraClass}"
         style="--rot: ${item.rot};" data-bounce>
      <span class="chatter-text">${item.text}</span>
    </div>
  `;
}

