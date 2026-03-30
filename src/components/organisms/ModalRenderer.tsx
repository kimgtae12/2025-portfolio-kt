import React, { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Modal } from "components/atoms/Modal";
import {
  archiveGroups,
  contactLinks,
  desktopWindows,
  projects,
  resumeSections,
  skillGroups,
  strengths,
  WindowId,
} from "data/portfolioData";
import { useModal } from "context/ModalContext";

const ProjectsWindow: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = useMemo(
    () =>
      projects.find((project) => project.id === selectedProjectId) ??
      projects[0],
    [selectedProjectId],
  );

  return (
    <div className="projects-window">
      <div className="projects-window__sidebar">
        <div className="window-section-heading">
          <strong>대표 프로젝트</strong>
        </div>

        <div className="py-[1.2rem] project-list">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`project-list__item ${project.id === selectedProject.id ? "is-selected" : ""}`}
              onClick={() => setSelectedProjectId(project.id)}
              type="button"
            >
              <div className="project-list__thumb">
                <span>{project.category}</span>
              </div>
              <div className="project-list__content">
                <strong>{project.title}</strong>
                <p>{project.summary}</p>
                <div className="project-list__meta mono">
                  <span>{project.period}</span>
                  <span>{project.contribution}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-window__detail">
        <section className="project-hero">
          <div>
            <span className="soft-label mono">{selectedProject.category}</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.summary}</p>
          </div>

          <div className="project-hero__metrics">
            <div>
              <span>기간</span>
              <strong>{selectedProject.period}</strong>
            </div>
            <div>
              <span>역할</span>
              <strong>{selectedProject.role}</strong>
            </div>
            <div>
              <span>기여도</span>
              <strong>{selectedProject.contribution}</strong>
            </div>
          </div>
        </section>

        <section className="project-grid">
          <article className="content-card is-wide">
            <div className="content-card__header">
              <span className="mono">PROJECT OVERVIEW</span>
              <strong>무엇을 맡았는지 한눈에 보기</strong>
            </div>
            <div className="project-summary-grid">
              <div>
                <span>팀 구성</span>
                <strong>{selectedProject.team}</strong>
              </div>
              <div>
                <span>역할</span>
                <strong>{selectedProject.role}</strong>
              </div>
              <div>
                <span>핵심 키워드</span>
                <strong>{selectedProject.highlights.join(" · ")}</strong>
              </div>
            </div>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <span className="mono">CHALLENGE</span>
              <strong>문제 상황</strong>
            </div>
            <p>{selectedProject.problem}</p>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <span className="mono">SOLUTION</span>
              <strong>해결 방식</strong>
            </div>
            <p>{selectedProject.solution}</p>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <span className="mono">IMPACT</span>
              <strong>결과와 효과</strong>
            </div>
            <ul>
              {selectedProject.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <span className="mono">TECH STACK</span>
              <strong>사용 기술</strong>
            </div>
            <div className="tag-group">
              {selectedProject.techStack.map((item) => (
                <span key={item} className="tag-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

const AboutWindow: React.FC = () => (
  <div className="content-stack">
    <section className="content-card">
      <div className="content-card__header">
        <span className="mono">ABOUT ME</span>
        <strong>직무와 일하는 방식</strong>
      </div>
      <h2 className="section-title">Frontend Developer · 4년 2개월</h2>
      <p>
        서비스 목적에 맞는 정보 구조를 설계하고, UI 구현 디테일과 유지보수
        가능성을 함께 챙기는 프론트엔드 개발자입니다. React, Next.js, React
        Native 기반의 프로젝트에서 구조를 빠르게 이해하고 정리하는 역할을 자주
        맡아왔습니다.
      </p>
    </section>

    <section className="content-card">
      <div className="content-card__header">
        <span className="mono">STRENGTH</span>
        <strong>강점 3가지</strong>
      </div>
      <div className="info-grid">
        {strengths.map((strength) => (
          <article key={strength.title} className="mini-card">
            <strong>{strength.title}</strong>
            <p>{strength.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="content-card">
      <div className="content-card__header">
        <span className="mono">COLLABORATION</span>
        <strong>협업 스타일</strong>
      </div>
      <ul>
        <li>요구사항을 화면·상태·예외 흐름 단위로 나눠 설명하고 정리합니다.</li>
        <li>
          디자인 의도를 구현 제약과 함께 조율하며, 가능한 대안을 빠르게
          제시합니다.
        </li>
        <li>
          일정과 품질 사이에서 우선순위를 판단하고 끝까지 책임지는 편입니다.
        </li>
      </ul>
    </section>
  </div>
);

const SkillsWindow: React.FC = () => (
  <div className="content-stack">
    {skillGroups.map((group) => (
      <section key={group.title} className="content-card">
        <div className="content-card__header">
          <span className="mono">{group.title.toUpperCase()}</span>
          <strong>{group.title}</strong>
        </div>
        <div className="info-grid">
          {group.items.map((item) => (
            <article key={item.name} className="mini-card">
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const ResumeWindow: React.FC = () => (
  <div className="resume-window">
    <div className="resume-window__toolbar">
      <span className="soft-label mono">HTML Resume</span>
      <span className="secondary-action" role="status">
        PDF 버전 준비 중
      </span>
    </div>

    <div className="resume-document">
      <header className="resume-document__header">
        <div>
          <h2>김경태</h2>
          <p>Frontend Developer · React / Next.js / React Native</p>
        </div>
        <div className="resume-contact mono">
          <span>GitHub / Blog / Email</span>
          <span>채용 검토에 필요한 정보 위주로 정리</span>
        </div>
      </header>

      {resumeSections.map((section) => (
        <section key={section.title} className="resume-document__section">
          <h3>{section.title}</h3>
          {section.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      ))}
    </div>
  </div>
);

const ContactWindow: React.FC = () => (
  <div className="content-stack">
    <section className="content-card">
      <div className="content-card__header">
        <span className="mono">CONTACT</span>
        <strong>짧고 명확하게 연락하기</strong>
      </div>
      <p>
        채용, 협업, 프로젝트 관련 대화를 언제든 환영합니다. 가장 빠른 채널은
        이메일과 GitHub입니다.
      </p>
    </section>

    <section className="info-grid">
      {contactLinks.map((link) => (
        <a
          key={link.label}
          className="contact-link"
          href={link.href}
          rel="noreferrer"
          target="_blank"
        >
          <strong>{link.label}</strong>
          <span>{link.caption}</span>
        </a>
      ))}
    </section>
  </div>
);

const ArchiveWindow: React.FC = () => (
  <div className="archive-window">
    <aside className="archive-sidebar">
      <div className="window-section-heading">
        <span className="mono">ARCHIVE</span>
        <strong>탐색 허브</strong>
      </div>
      <div className="archive-sidebar__list">
        {archiveGroups.map((group) => (
          <div key={group.title} className="archive-sidebar__group">
            <span>{group.title}</span>
            <strong>{group.items.length} items</strong>
          </div>
        ))}
      </div>
    </aside>

    <div className="archive-content">
      {archiveGroups.map((group) => (
        <section key={group.title} className="content-card">
          <div className="content-card__header">
            <span className="mono">{group.title.toUpperCase()}</span>
            <strong>{group.title}</strong>
          </div>
          <div className="archive-content__grid">
            {group.items.map((item) => (
              <article key={item} className="mini-card">
                <strong>{item}</strong>
                <p>
                  Finder 스타일 보조 창에서 빠르게 접근할 수 있는 리소스입니다.
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

const renderWindowContent = (id: WindowId) => {
  switch (id) {
    case "projects":
      return <ProjectsWindow />;
    case "about":
      return <AboutWindow />;
    case "skills":
      return <SkillsWindow />;
    case "resume":
      return <ResumeWindow />;
    case "contact":
      return <ContactWindow />;
    case "archive":
      return <ArchiveWindow />;
    default:
      return null;
  }
};

export const ModalRenderer: React.FC = () => {
  const {
    windows,
    activeWindowId,
    closeWindow,
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useModal();

  return (
    <div className="window-layer">
      <AnimatePresence>
        {desktopWindows.map((windowItem) => (
          <Modal
            key={windowItem.id}
            accent={windowItem.accent}
            description={windowItem.description}
            isActive={activeWindowId === windowItem.id}
            modalId={windowItem.id}
            onClose={() => closeWindow(windowItem.id)}
            onFocus={() => focusWindow(windowItem.id)}
            onMaximize={() => toggleMaximizeWindow(windowItem.id)}
            onMinimize={() => minimizeWindow(windowItem.id)}
            onPositionChange={(position) =>
              updateWindowPosition(windowItem.id, position)
            }
            onSizeChange={(size) => updateWindowSize(windowItem.id, size)}
            state={windows[windowItem.id]}
            title={windowItem.label}
          >
            {renderWindowContent(windowItem.id)}
          </Modal>
        ))}
      </AnimatePresence>
    </div>
  );
};
