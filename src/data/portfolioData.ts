export type WindowId = "projects" | "about" | "skills" | "resume" | "contact";

interface ProjectLink {
  label: "App Store" | "Google Play" | "Website" | "Demo";
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  team: string;
  role: string;
  contribution: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  highlights: string[];
  tags: string[];
  logo: string;
  company: string;
  externalLinks?: ProjectLink[];
}

export const quickStats = [
  { label: "직무", value: "Frontend Developer" },
  { label: "경력", value: "4년 2개월 · 실질 5년차" },
  { label: "핵심", value: "React · Next.js · React Native" },
];

export const desktopWindows: Array<{
  id: WindowId;
  label: string;
  shortLabel: string;
  description: string;
  accent: string;
  defaultSize: { width: number; height: number };
  defaultPosition: { x: number; y: number };
  dockOrder: number;
}> = [
  {
    id: "projects",
    label: "Projects",
    shortLabel: "PJ",
    description: "대표 프로젝트",
    accent: "#6aa6ff",
    defaultSize: { width: 1040, height: 660 },
    defaultPosition: { x: 250, y: 92 },
    dockOrder: 1,
  },
  {
    id: "about",
    label: "Style",
    shortLabel: "ST",
    description: "직무·강점·협업 스타일",
    accent: "#7c8cff",
    defaultSize: { width: 700, height: 560 },
    defaultPosition: { x: 112, y: 112 },
    dockOrder: 2,
  },
  {
    id: "skills",
    label: "Skills",
    shortLabel: "SK",
    description: "직무 스킬",
    accent: "#4fd1a5",
    defaultSize: { width: 820, height: 600 },
    defaultPosition: { x: 170, y: 104 },
    dockOrder: 3,
  },
  {
    id: "resume",
    label: "Profile",
    shortLabel: "PF",
    description: "프로필",
    accent: "#ffd166",
    defaultSize: { width: 780, height: 640 },
    defaultPosition: { x: 200, y: 88 },
    dockOrder: 4,
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "CT",
    description: "연락하기",
    accent: "#ff8c69",
    defaultSize: { width: 500, height: 400 },
    defaultPosition: { x: 600, y: 170 },
    dockOrder: 5,
  },
  // {
  //   id: "archive",
  //   label: "Archive",
  //   shortLabel: "AR",
  //   description: "Finder 스타일 허브",
  //   accent: "#b39dff",
  //   defaultSize: { width: 900, height: 620 },
  //   defaultPosition: { x: 220, y: 102 },
  //   dockOrder: 6,
  // },
];

export const projects: Project[] = [
  {
    id: "redbutton-app",
    title: "레드버튼",
    category: "React Native",
    period: "2025.02 — 진행중",
    team: "Designer 1 · Frontend 1 · Backend 3",
    role: "프론트엔드 단독 개발 및 전체 구조/라우트 설계",
    contribution: "기여도 100% (프론트엔드)",
    company: "블루라이언스",
    summary:
      "건강검진 및 진료 정보를 시각화하고, 분석된 취약점을 바탕으로 건강기능식품을 추천·판매하는 헬스케어 커머스 플랫폼입니다.",
    problem:
      "최대 5개년의 방대한 의료 데이터를 사용자에게 직관적으로 시각화하고, 분석 결과와 커머스(쇼핑/클레임) 기능을 매끄럽게 연결해야 했습니다.",
    solution:
      "데이터 시각화 모듈을 구축하고 React Query와 Zustand를 활용해 서버 상태와 UI 상태를 분리했습니다. 전체 구조 설계, 타입 정의, 라우팅 시스템을 직접 구축하여 확장성을 확보했습니다.",
    impact: [
      "5개년치 건강검진 데이터의 안정적인 시각화 및 조회 기능 구현",
      "사용자 취약점 분석 기반 맞춤형 영양제 추천 및 구매 플로우 구축",
      "주문 조회부터 클레임까지 이어지는 커머스 풀 사이클 개발",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled-components",
    ],
    highlights: ["의료 데이터 시각화", "헬스케어 커머스", "구조 및 타입 설계"],
    tags: ["App", "Healthcare", "Commerce"],
    logo: "logo_redbutton.png",
    externalLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%EB%A0%88%EB%93%9C%EB%B2%84%ED%8A%BC/id6738403758",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.bluelions.redbutton&hl=ko",
      },
    ],
  },
  {
    id: "bluebutton-app",
    title: "블루버튼",
    category: "React Native",
    period: "2024.06 — 진행중",
    team: "Designer 1 · Frontend 1 · Backend 2",
    role: "프론트엔드 단독 개발 및 전체 구조/라우트 설계",
    contribution: "기여도 100% (프론트엔드)",
    company: "블루라이언스",
    summary:
      "홈택스 연말정산 데이터를 연동하여 AI 소득/지출 예측 및 미환급금 경정청구 기능을 제공하는 자산 관리 플랫폼입니다.",
    problem:
      "복잡한 연말정산 데이터를 정교하게 조회하고, 차년도 환급금 예측 및 경정청구 등 민감한 금융 데이터를 안전하고 정확하게 처리해야 했습니다.",
    solution:
      "금융 데이터의 정합성을 위해 철저한 타입 설계를 진행했으며, AI 예측 결과를 대시보드 형태로 구성했습니다. 초기 아키텍처부터 라우트 설계까지 프론트엔드 전 과정을 주도했습니다.",
    impact: [
      "홈택스 연동을 통한 실시간 연말정산 데이터 조회 시스템 구축",
      "AI 기반 소득 지출 예측 및 환급금 계산 알고리즘 UI 구현",
      "경정청구를 통한 미환급금 신청 프로세스 자동화",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled-components",
    ],
    highlights: ["Fintech", "AI 예측 대시보드", "경정청구 시스템"],
    tags: ["App", "Finance", "AI"],
    logo: "logo_bluebutton.png",

    externalLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%EB%B8%94%EB%A3%A8%EB%B2%84%ED%8A%BC/id6673894821",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ichis_mobile&hl=ko",
      },
    ],
  },
  {
    id: "bluesale-web",
    title: "블루세일",
    category: "Next.js",
    period: "2025.07 — 2026.02",
    team: "Designer 1 · Frontend 1 · Backend 1",
    role: "프론트엔드 개발 및 UI 구조 설계 (Atomic Pattern)",
    contribution: "기여도 100% (프론트엔드)",
    company: "블루라이언스",
    summary:
      "레드/블루버튼 유저와 보험 설계사를 매칭하여 데이터 기반의 맞춤형 보험 컨설팅을 제공하는 B2B2C 플랫폼입니다.",
    problem:
      "고객의 금융/보험 데이터를 설계사에게 효율적으로 보여주기 위한 복잡한 테이블 구조와 데이터 필터링 시스템이 필요했습니다.",
    solution:
      "Next.js App Router를 도입하고 아토믹 패턴을 노련하게 적용하여 컴포넌트 재사용성을 극대화했습니다. SSR 구조를 깊이 이해하고 적용하여 데이터 로딩 성능을 최적화했습니다.",
    impact: [
      "아토믹 디자인 패턴 적용으로 대규모 테이블 및 복잡한 UI의 유지보수성 향상",
      "Next.js SSR 및 App Router를 활용한 최적화된 데이터 패칭 구조 설계",
      "보험 설계사를 위한 고객 리스트 및 금융 정보 상세 조회 대시보드 구현",
    ],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled-components",
    ],
    highlights: ["Atomic Design", "Next.js SSR", "Insurance Matching"],
    tags: ["Web", "B2B", "Platform"],
    logo: "logo_bluesale.png",
    externalLinks: [
      {
        label: "Website",
        href: "https://www.bluesale.kr/",
      },
    ],
  },
  {
    id: "fairlink-app",
    title: "페어링크",
    category: "React Native",
    period: "2023.07 — 2023.09",
    team: "FrontEnd 2 · Backend 1",
    role: "프론트엔드 총괄 및 아키텍처 설계",
    contribution: "기여도 70%",
    company: "디몬스터 / 남동발전소",
    summary:
      "남동발전소 내 중장비 조종사와 건설업자를 매칭하고, 배차부터 서류 자동 작성까지 관리하는 중장비 배차 플랫폼입니다.",
    problem:
      "동일한 UI의 페이지가 많았지만, 각 페이지마다 독립적인 로직과 상태 관리가 필요했습니다. 각 페이지에 맞는 파일을 만들다보니, 프로젝트 관리가 매우 불편했으며, Common UI 수정시에 여러개의 파일을 일일이 수정해야하는 번거로움이 있었습니다.",
    solution:
      "처음으로 아토믹 패턴을 도입하여 구조를 설계했으며, 동일한 UI 페이지엔 템플릿을 만들어, Props를 통해 데이터를 주입하여 중복 코드를 최소화했습니다.",
    impact: [
      "임대계약서, 작업일보 등 모든 배차 관련 서류 자동 작성 및 전자결재 구현",
      "개인정보 자동 마스킹 및 서류 암호화 보관으로 보안성 강화",
      "지역별 중장비 정보 실시간 조회 및 간편 배차 매칭 시스템 구축",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Styled-components",
      "Atomic Design",
    ],
    highlights: ["중장비 매칭 시스템", "서류 자동화(PDF)", "아토믹 패턴 도입"],
    tags: ["App", "B2B", "Matching"],
    logo: "logo_fairlink.webp",
    externalLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.fairlink&hl=ko",
      },
    ],
  },
  {
    id: "t-membership-survey",
    title: "T멤버십 - 돈버는설문",
    category: "React.js",
    period: "2023.07 — 2023.09",
    team: "FrontEnd 1",
    role: "프론트엔드 총괄 (아키텍처 구성 및 프로젝트 설계)",
    contribution: "기여도 100%",
    company: "디몬스터 / SKT",
    summary:
      "T멤버십 앱 내 대규모 유저를 대상으로 설문을 진행하고 포인트 보상을 지급하는 이벤트형 설문 플랫폼입니다.",
    problem:
      "동일한 페이지 및 설문 컴포넌트가 여러 개 존재했지만, 각 페이지마다 독립적인 로직과 상태 관리가 필요했습니다. 또한 Props Drill이 발생하는 컴포넌트가 많아서 이에 맞는 재설계가 필요했습니다.",
    solution:
      "아토믹 패턴을 채용하여, 설문 컴포넌트를 재설계하고 Context API를 활용하여 Props Drill을 최소화했습니다.",
    impact: [
      "SKT T멤버십 플랫폼 내 안정적인 설문 시스템 런칭",
      "설문 완료 시 T포인트 즉시 지급 연동 및 예외 처리 로직 설계",
      "확장 가능한 설문 컴포넌트 설계로 다양한 질문 유형에 대응",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Styled-components",
      "Atomic-Pattern",
    ],
    highlights: ["프론트엔드 총괄", "대규모 트래픽 대응", "포인트 연동 시스템"],
    tags: ["Web", "Event", "Enterprise"],
    logo: "logo_tmember.svg",

    externalLinks: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.fairlink&hl=ko",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/t-%EB%A9%A4%EB%B2%84%EC%8B%AD/id464205249",
      },
    ],
  },
];

export const strengths = [
  {
    title: "🎯 일정 책임감",
    description:
      "마감이 필요한 상황에서 우선순위를 정리하고, 범위를 조율하며 끝까지 책임지는 편입니다.",
  },
  {
    title: "⚡ 빠른 코드 습득",
    description:
      "낯선 코드베이스도 구조를 빠르게 파악하고, 필요한 지점부터 실무적으로 흡수하는 강점이 있습니다.",
  },
  {
    title: "🤝 밝고 유연한 협업",
    description:
      "디자이너·기획자와 부드럽게 소통하면서도 구현 디테일은 놓치지 않는 스타일입니다.",
  },
  {
    title: "🔄 빠른 피드백 루프",
    description: "AI 툴과 빠른 프로토타이핑으로 빠른 피드백 루프를 구축합니다.",
  },
  {
    title: "👥 유저 관점",
    description:
      "사용자 관점에서 문제를 인식하고 해결책을 제시하는 것을 좋아합니다.",
  },
];

export const skillGroups = [
  {
    title: "Core Frontend",
    items: [
      {
        name: "React",
        description: "컴포넌트 구조화, 상태 분리, 재사용성 중심 설계",
        icon: "ic_react.png",
      },
      {
        name: "Next.js",
        description: "페이지 구조, SSR/CSR 전략, 서비스형 웹 구축 경험",
        icon: "ic_next.png",
      },
      {
        name: "React Native",
        description: "모바일 앱 UI 구현과 플랫폼별 예외 대응 경험",
        icon: "ic_react.png",
      },
    ],
  },
  {
    title: "State & Data",
    items: [
      {
        name: "React Query",
        description:
          "서버 상태 캐싱, 로딩·에러 흐름, 요청 상태를 표준화합니다.",
        icon: "ic_reactquery.png",
      },
      {
        name: "Zustand",
        description: "복잡하지 않은 전역 상태를 가볍게 분리해 관리합니다.",
        icon: "ic_zustand.svg",
      },
      {
        name: "Context API",
        description: "도메인 범위의 UI 상태와 공통 컨텍스트 구성을 관리합니다.",
      },
    ],
  },
  {
    title: "UI & Styling",
    items: [
      {
        name: "Tailwind CSS",
        description: "일관된 디자인 토큰과 빠른 화면 구현",
        icon: "ic_tailwind.png",
      },
      {
        name: "Styled-components",
        description: "컴포넌트 단위 스타일 캡슐화와 테마 확장",
        icon: "ic_styledcomponents.png",
      },
      {
        name: "Framer Motion",
        description: "과하지 않은 전환 애니메이션과 인터랙션 강화",
        icon: "ic_framermotion.png",
      },
    ],
  },
  {
    title: "Workflow & AI",
    items: [
      {
        name: "Codex",
        description:
          "구현 속도를 높이되 구조 판단은 직접 검증하는 방식으로 활용합니다.",
        icon: "ic_codex.png",
      },
      {
        name: "Windsurf",
        description: "탐색형 작업과 반복 코드 정리에 보조 도구로 활용합니다.",
        icon: "ic_windsurf.png",
      },
      {
        name: "Gemini Assistant",
        description: "초안 탐색, 비교 검토, 아이디어 확장에 활용합니다.",
        icon: "ic_gemini.png",
      },
    ],
  },
];

export const resumeSections = [
  {
    title: "전체 구조를 먼저 그리고,\n안정적으로 구현까지 이어갑니다.",
    lines: [
      "4년 2개월 경력의 프론트엔드 개발자로서, 다수의 프로젝트에서 초기 아키텍처 설계부터 전체 구조 및 라우팅 시스템 구축을 주도해왔습니다.",
      "React, Next.js(App Router), React Native를 활용하여 헬스케어 커머스, 핀테크, B2B/B2B2C 플랫폼 등 복잡한 도메인에서 프론트엔드 총괄 및 단독 개발을 성공적으로 수행했습니다.",
      "아토믹 패턴(Atomic Design)을 노련하게 활용하여 컴포넌트 재사용성을 극대화하고, 복잡한 비즈니스 로직과 대규모 데이터를 안정적인 코드 구조로 풀어내는 데 강점이 있습니다.",
    ],
  },
  {
    title: "복잡한 요구도 정리해서,\n쓰기 쉬운 화면으로 바꾸는 편입니다.",
    lines: [
      "주도적인 아키텍처 설계 역량: 프로젝트 목적에 따라 확장 가능한 초기 폴더 구조, 타입 시스템, 라우팅 시스템을 독자적으로 설계하고 구축합니다.",
      "효율 중심의 컴포넌트 전략: 아토믹 패턴과 템플릿화 기법을 도입해 중복 코드를 최소화하고, 공통 UI 수정 시 발생하는 번거로움을 시스템적으로 해결합니다.",
      "복잡한 데이터의 사용자 경험 최적화: 5개년치 의료 데이터 시각화, AI 기반 금융 데이터 예측, 대규모 트래픽 설문 시스템 등 난도 높은 기능을 코드 정밀도를 기반으로 구현합니다.",
    ],
  },
  {
    title: "여러 도메인에서 처음부터 끝까지,\n책임지고 만들어왔습니다.",
    lines: [
      "헬스케어 커머스 및 AI 핀테크 앱 단독 구축 — 5개년 진료 데이터 시각화 및 연말정산 환급금 예측 시스템의 전체 구조와 라우팅 설계 주도.",
      "아토믹 패턴 기반 B2B/B2B2C 플랫폼 설계 — 보험 컨설팅 및 중장비 배차 시스템에 아토믹 디자인을 적용하여 복잡한 테이블 UI와 서류 자동화 프로세스 구축.",
      "엔터프라이즈 레벨 프로젝트 총괄 — SKT T멤버십 설문 플랫폼 프론트엔드 총괄로서 초기 아키텍처 구성 및 대규모 트래픽 대응을 위한 상태 관리 재설계.",
    ],
  },
];

export const archiveGroups = [
  {
    title: "Pinned",
    items: ["대표 프로젝트 4선", "이력 요약", "GitHub 링크", "블로그 글 모음"],
  },
  {
    title: "Documents",
    items: ["Resume PDF", "Project Case Study", "Career Summary"],
  },
  {
    title: "Links",
    items: ["GitHub", "Blog", "Instagram", "Email"],
  },
];

export const contactLinks = [
  {
    label: "📧 Email",
    href: "mailto:kimgtea@naver.com",
    caption: "kimgtea@naver.com",
  },
  {
    label: "🐙 GitHub",
    href: "https://github.com/kimgtae12",
    caption: "github.com/kimgtae12",
  },
  {
    label: "💻 Tech Blog",
    href: "https://kimgtea.tistory.com/",
    caption: "kimgtea.tistory.com",
  },
  {
    label: "📝 Daily Blog",
    href: "https://blog.naver.com/kimgtea",
    caption: "blog.naver.com/kimgtea",
  },
  {
    label: "📷 Instagram",
    href: "https://www.instagram.com/bliss_xxee/",
    caption: "@bliss_xxee",
  },
];
