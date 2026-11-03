/**
 * 자기소개 페이지 텍스트 데이터
 * 제공하지 않은 경력·실적·연락처는 [대괄호] 임시 텍스트로 표시되어 있습니다.
 */
export const profileData = {
  // 상단 메뉴바 및 기본 정보
  site: {
    name: '최효령',
    role: '초등교사 · 연구자',
    navItems: [
      { id: 'philosophy', num: '01', label: '교육 철학', href: '#philosophy' },
      { id: 'interests', num: '02', label: '연구 관심사', href: '#interests' },
      { id: 'projects', num: '03', label: '프로젝트', href: '#projects' },
      { id: 'contact', num: '04', label: '연락처', href: '#contact' },
    ],
  },

  // 1. 첫 화면 (Hero)
  hero: {
    eyebrow: '초등교사 · 연구자',
    headline: '[서로 다른 관점이 만나는 교실, 한 줄 소개 임시 문구]',
    name: '최효령',
    bio: '[2~3줄 자기소개 임시 문구입니다. 민주시민교육과 AI융합교육을 연구하며, 어린이들이 다양한 시선으로 세상을 이해하고 타인과 깊이 있게 소통하는 배움의 자리를 설계합니다.]',
    primaryBtn: { label: '나의 이야기', href: '#philosophy' },
    secondaryBtn: { label: '프로젝트', href: '#projects' },
  },

  // 2. 01 교육 철학 (3단 구성)
  philosophy: [
    {
      num: '01',
      title: '서로의 입장에서 생각하는 토론',
      description:
        '[교육 철학 1 임시 설명 문구입니다. 나와 다른 의견을 경청하고 상대의 맥락에서 문제를 바라보는 숙의와 공존의 대화를 실천합니다.]',
    },
    {
      num: '02',
      title: '학생 주도 문제해결',
      description:
        '[교육 철학 2 임시 설명 문구입니다. 학생 스스로 삶과 연결된 질문을 발견하고 협력하여 해답을 찾아가는 주체적인 탐구 과정을 지원합니다.]',
    },
    {
      num: '03',
      title: '기술로 넓히는 배움',
      description:
        '[교육 철학 3 임시 설명 문구입니다. 인공지능과 디지털 도구를 사고와 공감의 지평을 넓히는 교육적 매개로 활용합니다.]',
    },
  ],

  // 3. 02 연구 관심사 (큰 글씨 목록 3줄)
  interests: [
    {
      num: '01',
      title: '민주시민교육과 공감형 토론',
      note: '[세부 연구 주제 임시 문구]',
    },
    {
      num: '02',
      title: 'AI 기반 관점 확장',
      note: '[세부 연구 주제 임시 문구]',
    },
    {
      num: '03',
      title: '사회정서학습',
      note: '[세부 연구 주제 임시 문구]',
    },
  ],

  // 4. 03 수업·연구 프로젝트 (카드 3개)
  projects: [
    {
      id: 'project-1',
      category: '[연도 · 분류 임시 텍스트]',
      title: '[수업·연구 프로젝트 01 제목 임시 텍스트]',
      description:
        '[프로젝트 01의 연구 배경, 수업 설계 내용, 주요 활동 및 결과를 입력하는 임시 설명 자리입니다.]',
      linkLabel: '[관련 자료 보기]',
      linkHref: '#projects',
    },
    {
      id: 'project-2',
      category: '[연도 · 분류 임시 텍스트]',
      title: '[수업·연구 프로젝트 02 제목 임시 텍스트]',
      description:
        '[프로젝트 02의 연구 배경, 수업 설계 내용, 주요 활동 및 결과를 입력하는 임시 설명 자리입니다.]',
      linkLabel: '[연구 기록 보기]',
      linkHref: '#projects',
    },
    {
      id: 'project-3',
      category: '[연도 · 분류 임시 텍스트]',
      title: '[수업·연구 프로젝트 03 제목 임시 텍스트]',
      description:
        '[프로젝트 03의 연구 배경, 수업 설계 내용, 주요 활동 및 결과를 입력하는 임시 설명 자리입니다.]',
      linkLabel: '[발표 및 논문 링크]',
      linkHref: '#projects',
    },
  ],

  // 5. 04 연락처
  contact: {
    heading: '함께 이야기해요',
    subtext: '[교실 수업, 민주시민교육, AI융합교육 연구에 관한 대화를 언제나 환영합니다.]',
    email: '[이메일 주소 임시 텍스트: example@email.com]',
    emailHref: 'mailto:example@email.com',
    links: [
      { label: '[연구 노트 / 블로그 링크]', href: '#contact' },
      { label: '[학술 프로필 / 연구실 링크]', href: '#contact' },
      { label: '[수업 아카이브 링크]', href: '#contact' },
    ],
  },
};
