export type WindowId =
  | "projects"
  | "about"
  | "skills"
  | "resume"
  | "contact"
  | "archive";

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
    description: "대표 프로젝트 4개",
    accent: "#6aa6ff",
    defaultSize: { width: 1040, height: 660 },
    defaultPosition: { x: 250, y: 92 },
    dockOrder: 1,
  },
  {
    id: "about",
    label: "About",
    shortLabel: "ME",
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
    description: "실무 중심 기술 스택",
    accent: "#4fd1a5",
    defaultSize: { width: 820, height: 600 },
    defaultPosition: { x: 170, y: 104 },
    dockOrder: 3,
  },
  {
    id: "resume",
    label: "Resume",
    shortLabel: "CV",
    description: "문서형 이력 요약",
    accent: "#ffd166",
    defaultSize: { width: 780, height: 640 },
    defaultPosition: { x: 200, y: 88 },
    dockOrder: 4,
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "CT",
    description: "바로 연락하기",
    accent: "#ff8c69",
    defaultSize: { width: 500, height: 400 },
    defaultPosition: { x: 600, y: 170 },
    dockOrder: 5,
  },
  {
    id: "archive",
    label: "Archive",
    shortLabel: "AR",
    description: "Finder 스타일 허브",
    accent: "#b39dff",
    defaultSize: { width: 900, height: 620 },
    defaultPosition: { x: 220, y: 102 },
    dockOrder: 6,
  },
];

export const projects: Project[] = [
  {
    id: "commerce-app",
    title: "모바일 커머스 앱 고도화",
    category: "React Native",
    period: "2024.03 — 2024.10",
    team: "PM 1 · Designer 1 · Frontend 2 · Backend 2",
    role: "React Native 프론트엔드 개발",
    contribution: "기여도 65%",
    summary:
      "핵심 구매 흐름과 상태 구조를 재정비해 전환 흐름을 안정화하고, 운영 대응 속도를 높인 모바일 커머스 프로젝트입니다.",
    problem:
      "장바구니·주문·결제 플로우가 화면별로 분산되어 있어 예외 처리와 QA 대응 비용이 컸고, 상태 꼬임으로 재현이 어려운 버그가 반복되었습니다.",
    solution:
      "주문 흐름을 도메인 단위로 재구성하고 React Query와 Zustand를 분리 적용해 서버 상태와 UI 상태를 명확히 나눴습니다. 공통 폼/결제 컴포넌트를 모듈화해 화면 간 일관성을 확보했습니다.",
    impact: [
      "결제 관련 중복 로직을 공통 모듈로 통합",
      "QA 이슈 재현 경로를 단순화해 대응 시간 단축",
      "핵심 구매 플로우의 유지보수 난이도 개선",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled-components",
    ],
    highlights: ["구매 여정 재설계", "상태 관리 분리", "공통 컴포넌트 시스템"],
    tags: ["App", "Commerce", "Featured"],
  },
  {
    id: "b2b-admin",
    title: "B2B 운영 어드민 리뉴얼",
    category: "Next.js",
    period: "2023.07 — 2024.01",
    team: "PO 1 · Designer 1 · Frontend 1 · Backend 2",
    role: "프론트엔드 단독 담당",
    contribution: "기여도 80%",
    summary:
      "복잡한 운영 데이터를 빠르게 파악하고 처리할 수 있도록 화면 구조와 테이블 UX를 재설계한 B2B 어드민 프로젝트입니다.",
    problem:
      "기존 어드민은 정보가 한 화면에 과도하게 밀집되어 있었고, 검색·필터·상세 조회 동선이 길어 실무자 피로도가 높았습니다.",
    solution:
      "Finder처럼 좌측 탐색과 우측 상세 패널을 분리하고, 페이지별 정보 위계를 재정립했습니다. 서버 상태 캐싱과 테이블 인터랙션을 표준화해 화면 응답성과 사용성을 동시에 잡았습니다.",
    impact: [
      "운영자가 핵심 데이터를 더 빠르게 스캔할 수 있는 구조 확보",
      "필터/리스트/상세의 반복 UI를 재사용 가능하게 정리",
      "신규 기능 추가 시 화면 확장 비용 감소",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
    ],
    highlights: ["운영 화면 구조화", "탐색 효율 개선", "반복 패턴 컴포넌트화"],
    tags: ["Web", "Admin", "Featured"],
  },
  {
    id: "content-platform",
    title: "콘텐츠 플랫폼 프론트 구축",
    category: "React",
    period: "2022.09 — 2023.05",
    team: "PM 1 · Designer 1 · Frontend 2 · Backend 2",
    role: "프론트엔드 개발 및 UI 구조 설계",
    contribution: "기여도 50%",
    summary:
      "콘텐츠 탐색과 상세 소비 경험을 자연스럽게 연결하는 웹 플랫폼으로, 화면 전환 속도와 컴포넌트 재사용성을 함께 개선했습니다.",
    problem:
      "상세 페이지 진입 이후 사용자가 관련 콘텐츠를 다시 탐색하기 어렵고, 리스트/상세 레이아웃 규칙이 일관되지 않아 이탈 포인트가 많았습니다.",
    solution:
      "카테고리·추천 영역·상세 요약 블록을 공통 규칙으로 정리하고, 데이터 패칭 단위를 화면 목적에 맞게 재설계했습니다. 재사용 가능한 카드/섹션 템플릿으로 디자인 일관성을 유지했습니다.",
    impact: [
      "콘텐츠 탐색 흐름을 단순화해 페이지 간 연결감 개선",
      "상세 페이지 구성 규칙 통일로 유지보수 편의 향상",
      "반복 섹션 템플릿화로 신규 페이지 제작 속도 확보",
    ],
    techStack: ["React", "TypeScript", "Context API", "Styled-components"],
    highlights: [
      "리스트-상세 흐름 정리",
      "섹션 템플릿화",
      "디자인 일관성 강화",
    ],
    tags: ["Web", "Content"],
  },
  {
    id: "portfolio-lab",
    title: "개인 생산성·실험 도구 제작",
    category: "Next.js",
    period: "2024.11 — 진행 중",
    team: "개인 프로젝트",
    role: "기획 · 디자인 · 프론트엔드 전체",
    contribution: "기여도 100%",
    summary:
      "개발 생산성과 UI 실험을 함께 다루는 개인 프로젝트로, 구조 설계와 구현 디테일을 빠르게 검증하는 실험실 역할을 합니다.",
    problem:
      "반복되는 아이디어와 작업 패턴을 빠르게 검증할 수 있는 개인 실험 환경이 없어서 학습과 구현이 단절되는 문제가 있었습니다.",
    solution:
      "작은 단위의 UI/상태/애니메이션 실험을 빠르게 누적할 수 있도록 구조를 표준화하고, AI 보조 툴을 활용한 설계-구현 루프를 만들었습니다.",
    impact: [
      "신규 UI 패턴을 빠르게 프로토타이핑할 수 있는 기반 마련",
      "실무에 재활용 가능한 공통 패턴을 꾸준히 축적",
      "도구 활용과 코드 구조화 역량을 동시에 강화",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Codex / Windsurf / Gemini",
    ],
    highlights: ["개인 설계 실험실", "AI 기반 생산성 루프", "UI 패턴 아카이빙"],
    tags: ["Personal", "R&D"],
  },
];

export const strengths = [
  {
    title: "일정 책임감",
    description:
      "마감이 필요한 상황에서 우선순위를 정리하고, 범위를 조율하며 끝까지 책임지는 편입니다.",
  },
  {
    title: "빠른 코드 습득",
    description:
      "낯선 코드베이스도 구조를 빠르게 파악하고, 필요한 지점부터 실무적으로 흡수하는 강점이 있습니다.",
  },
  {
    title: "밝고 유연한 협업",
    description:
      "디자이너·기획자와 부드럽게 소통하면서도 구현 디테일은 놓치지 않는 스타일입니다.",
  },
];

export const skillGroups = [
  {
    title: "Core Frontend",
    items: [
      {
        name: "React",
        description: "컴포넌트 구조화, 상태 분리, 재사용성 중심 설계",
      },
      {
        name: "Next.js",
        description: "페이지 구조, SSR/CSR 전략, 서비스형 웹 구축 경험",
      },
      {
        name: "React Native",
        description: "모바일 앱 UI 구현과 플랫폼별 예외 대응 경험",
      },
    ],
  },
  {
    title: "State & Data",
    items: [
      {
        name: "React Query",
        description: "서버 상태 캐싱, 로딩·에러 흐름, 요청 상태 표준화",
      },
      {
        name: "Zustand",
        description: "복잡하지 않은 전역 상태를 가볍게 분리해 관리",
      },
      {
        name: "Context API",
        description: "도메인 범위의 UI 상태와 공통 컨텍스트 구성",
      },
    ],
  },
  {
    title: "UI & Styling",
    items: [
      {
        name: "Tailwind CSS",
        description: "일관된 디자인 토큰과 빠른 화면 구현",
      },
      {
        name: "Styled-components",
        description: "컴포넌트 단위 스타일 캡슐화와 테마 확장",
      },
      {
        name: "Framer Motion",
        description: "과하지 않은 전환 애니메이션과 인터랙션 강화",
      },
    ],
  },
  {
    title: "Workflow & AI",
    items: [
      {
        name: "Codex",
        description:
          "구현 속도를 높이되 구조 판단은 직접 검증하는 방식으로 활용",
      },
      {
        name: "Windsurf",
        description: "탐색형 작업과 반복 코드 정리에 보조 도구로 활용",
      },
      {
        name: "Gemini Assistant",
        description: "초안 탐색, 비교 검토, 아이디어 확장에 활용",
      },
    ],
  },
];

export const resumeSections = [
  {
    title: "Summary",
    lines: [
      "4년 2개월 경력의 프론트엔드 개발자이며, 실질적으로 5년차에 가까운 업무 범위를 경험했습니다.",
      "React / Next.js / React Native 기반 서비스에서 구조 설계, 상태 관리, UI 품질 개선, 운영성 향상에 강점이 있습니다.",
    ],
  },
  {
    title: "Strength",
    lines: [
      "프로젝트 목적에 맞게 정보 구조와 구현 우선순위를 정리합니다.",
      "새로운 코드와 도메인을 빠르게 습득해 실무 생산성으로 연결합니다.",
      "일정을 지키는 책임감과 커뮤니케이션 톤을 함께 챙깁니다.",
    ],
  },
  {
    title: "Experience Snapshot",
    lines: [
      "모바일 커머스 앱 고도화 — 구매 여정 개선, 공통 모듈화, 상태 흐름 정리",
      "B2B 운영 어드민 리뉴얼 — 테이블 UX 개선, 탐색 구조 정비, 프론트 단독 대응",
      "콘텐츠 플랫폼 구축 — 리스트/상세 흐름 설계, 템플릿화, UI 일관성 강화",
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
    label: "Email",
    href: "mailto:your.email@example.com",
    caption: "your.email@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/kimgtae12",
    caption: "github.com/kimgtae12",
  },
  {
    label: "Blog",
    href: "https://kimgtea.tistory.com/",
    caption: "kimgtea.tistory.com",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/your.handle",
    caption: "@your.handle",
  },
];
