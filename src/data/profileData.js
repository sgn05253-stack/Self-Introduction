/**
 * 자기소개 페이지 텍스트 데이터 모음
 * 필요한 문구나 링크를 실제 내용으로 편하게 수정해 사용하세요!
 */
export const profileData = {
  // 1. 첫 화면 (Hero)
  hero: {
    nameChars: ['최', '효', '령'],
    roleBadge: '초등교사 · 민주시민교육 & AI융합교육 연구 (｡•̀ᴗ-)✧',
    headline: '교실 속 작은 대화에서 세상을 바꾸는 배움을 연구합니다 ٩(◕‿◕)۶',
    shortBio:
      '안녕하세요! 어린이들이 서로의 마음에 귀 기울이며 건강한 민주시민으로 자라나도록 돕고, AI 기술로 생각의 지평을 넓히는 수업을 고민하는 초등교사 최효령입니다. (・ω・)ノ',
    mascotCaption: '안녕! 우린 다정한 대화 단짝, 말풍이야! (・ω・) (◕‿◕)',
    navButtons: [
      { label: '나의 이야기 보러가기 ✧', target: '#story', color: 'yellow', rot: '-2.5deg' },
      { label: '수업·연구 프로젝트 ☆', target: '#projects', color: 'pink', rot: '2.2deg' },
    ],
  },

  // 2. 교육 철학
  philosophy: [
    {
      id: 'phil-1',
      title: '서로의 입장에서 생각하는 토론',
      kaomoji: '(・ω・)💬(・ω・)',
      description:
        '나와 다른 의견도 존중하며 상대방의 시선으로 문제를 바라보는 따뜻한 교실 토론 문화를 만듭니다.',
      shape: 'rect-tail-left',
      color: 'green',
      rot: '-2.4deg',
    },
    {
      id: 'phil-2',
      title: '학생 주도 문제해결',
      kaomoji: '٩(◕‿◕)۶',
      description:
        '학생 스스로 일상의 질문을 발견하고, 친구들과 협력하여 해답을 찾아가는 주도적인 배움을 지향합니다.',
      shape: 'oval-bubble',
      color: 'yellow',
      rot: '2.1deg',
    },
    {
      id: 'phil-3',
      title: '기술로 넓히는 배움',
      kaomoji: '(｡•̀ᴗ-)✧',
      description:
        'AI와 디지털 도구를 단순한 기술이 아닌, 생각과 공감의 폭을 확장하는 배움의 파트너로 활용합니다.',
      shape: 'cloud-bubble',
      color: 'sky',
      rot: '-1.8deg',
    },
  ],

  // 3. 연구 관심사 (모양이 서로 다른 스티커 3개)
  interests: [
    {
      id: 'int-1',
      title: '민주시민교육과 공감형 토론',
      kaomoji: '(´• ω •`) ♡',
      subtitle: '다름을 인정하고 공존을 배우는 대화 설계',
      shape: 'heart',
      color: 'pink',
      rot: '-2.8deg',
    },
    {
      id: 'int-2',
      title: 'AI 기반 관점 확장',
      kaomoji: '✧(•̀ᴗ•́)و ̑̑',
      subtitle: '다양한 시각을 탐색하게 돕는 에듀테크·AI 융합',
      shape: 'starburst',
      color: 'purple',
      rot: '2.5deg',
    },
    {
      id: 'int-3',
      title: '사회정서학습',
      kaomoji: '( ˘⌣˘ )♡( ˘⌣˘ )',
      subtitle: '자기 이해와 타인 공감을 키우는 정서 지원',
      shape: 'ribbon-frame',
      color: 'green',
      rot: '-1.9deg',
    },
  ],

  // 4. 수업·연구 프로젝트 (메모지 스티커 카드 3개)
  projects: [
    {
      id: 'proj-1',
      tag: '수업·연구 01',
      title: '공감 톡톡! AI 활용 다관점 토론 수업',
      description:
        '수업이나 연구 프로젝트의 주요 내용, 대상 학년, 활동 결과 등을 자유롭게 적어 주세요. ٩(◕‿◕)۶',
      linkText: '수업 자료 / 기록 보기 →',
      linkUrl: '#projects',
      color: 'yellow',
      tapeColor: 'pink',
      rot: '-2.2deg',
    },
    {
      id: 'proj-2',
      tag: '수업·연구 02',
      title: '우리 반 민주시민 자치 & 갈등 해결 프로젝트',
      description:
        '학급 프로젝트나 연구 사례의 배경과 핵심 활동을 수정해 넣을 수 있습니다. (・ω・)',
      linkText: '프로젝트 노트 보기 →',
      linkUrl: '#projects',
      color: 'gray',
      tapeColor: 'green',
      rot: '1.9deg',
    },
    {
      id: 'proj-3',
      tag: '수업·연구 03',
      title: '사회정서학습(SEL) 연계 디지털 스토리텔링',
      description:
        '연구 논문, 에듀테크 활용 수업 설계안, 발표 자료 등의 소개 문구를 입력해 주세요. (｡•̀ᴗ-)✧',
      linkText: '연구 결과물 보기 →',
      linkUrl: '#projects',
      color: 'sky',
      tapeColor: 'purple',
      rot: '-1.6deg',
    },
  ],

  // 5. 연락처 (생각 풍선 안)
  contact: {
    greeting: '언제든 반갑게 인사해 주세요! (｡•̀ᴗ-)✧',
    emailLabel: '이메일',
    email: 'example@school.kr',
    emailHref: 'mailto:example@school.kr',
    links: [
      { label: '연구 노트 / 블로그', url: '#contact' },
      { label: '수업 자료 아카이브', url: '#contact' },
      { label: '학술 프로필 / GitHub', url: '#contact' },
    ],
  },

  // 섹션 사이사이 추임새 장식 말풍선
  chatterStickers: [
    { text: '네 생각은 어때? (・ω・)', color: 'sky', rot: '2.8deg', shape: 'mini-oval' },
    { text: '역지사지 ON! (｡•̀ᴗ-)✧', color: 'yellow', rot: '-2.6deg', shape: 'mini-burst' },
    { text: '질문 환영 ☆', color: 'purple', rot: '2.4deg', shape: 'mini-cloud' },
    { text: '같이 이야기해요 ٩(◕‿◕)۶', color: 'pink', rot: '-2.2deg', shape: 'mini-rect' },
  ],
};
