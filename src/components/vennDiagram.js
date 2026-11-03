/**
 * 상징 요소: 딥 그린(#2F6F62) 원과 코랄(#E07A5F) 원이 반쯤 겹친 벤 다이어그램 SVG
 * 겹친 부분은 mix-blend-mode: multiply와 투명도로 두 색이 자연스럽게 섞여 보입니다.
 */

export function renderHeroVennSvg() {
  return `
    <svg class="hero-venn-svg" viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="서로 다른 두 관점이 만나는 벤 다이어그램">
      <circle
        class="venn-circle venn-circle-left"
        cx="162"
        cy="150"
        r="108"
        fill="#2F6F62"
        fill-opacity="0.85"
      />
      <circle
        class="venn-circle venn-circle-right"
        cx="258"
        cy="150"
        r="108"
        fill="#E07A5F"
        fill-opacity="0.85"
      />
    </svg>
  `;
}

export function renderMiniVennSvg(extraClass = '') {
  return `
    <svg class="mini-venn-svg ${extraClass}" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle
        class="mini-venn-left"
        cx="13.5"
        cy="12"
        r="9.5"
        fill="#2F6F62"
        fill-opacity="0.85"
      />
      <circle
        class="mini-venn-right"
        cx="22.5"
        cy="12"
        r="9.5"
        fill="#E07A5F"
        fill-opacity="0.85"
      />
    </svg>
  `;
}

