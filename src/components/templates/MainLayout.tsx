import React, { useEffect, useMemo, useState } from "react";
import Header from "../organisms/Header";
import { ModalProvider, useModal } from "context/ModalContext";
import {
  archiveGroups,
  contactLinks,
  projects,
  quickStats,
  skillGroups,
} from "data/portfolioData";
import { DesktopIcons } from "components/organisms/DesktopIcons";
import { DesktopSummary } from "components/organisms/DesktopSummary";
import { ModalRenderer } from "components/organisms/ModalRenderer";
import { DockBar } from "components/organisms/DockBar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const BootScreen: React.FC<{ done: boolean }> = ({ done }) => (
  <div className={`boot-screen ${done ? "is-hidden" : ""}`}>
    <div className="boot-screen__content">
      <span className="boot-screen__logo mono">KT / Portfolio OS</span>
      <div className="boot-screen__bar">
        <div className="boot-screen__bar-fill" />
      </div>
      <p>프로젝트 중심 포트폴리오를 불러오는 중…</p>
    </div>
  </div>
);

const MobilePortfolio: React.FC = () => (
  <div className="mobile-portfolio">
    <section className="mobile-hero glass-panel">
      <span className="soft-label mono">Frontend Developer</span>
      <h1>실무 구조와 구현 디테일을 함께 챙기는 프론트엔드 개발자</h1>
      <p>
        대표 프로젝트 4개를 중심으로 역할, 문제 해결, 결과를 빠르게 확인할 수
        있도록 재구성한 모바일 포트폴리오입니다.
      </p>
      <div className="mobile-hero__stats">
        {quickStats.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <span className="mono">PROJECTS</span>
        <h2>대표 프로젝트 4개</h2>
      </div>
      <div className="mobile-card-list">
        {projects.map((project) => (
          <article key={project.id} className="content-card">
            <div className="content-card__header">
              <span className="mono">{project.category}</span>
              <strong>{project.title}</strong>
            </div>
            <p>{project.summary}</p>
            <div className="project-summary-grid">
              <div>
                <span>기간</span>
                <strong>{project.period}</strong>
              </div>
              <div>
                <span>역할</span>
                <strong>{project.role}</strong>
              </div>
            </div>
            <p>{project.problem}</p>
            <p>{project.solution}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <span className="mono">SKILLS</span>
        <h2>실무 사용 맥락</h2>
      </div>
      {skillGroups.map((group) => (
        <article key={group.title} className="content-card">
          <div className="content-card__header">
            <span className="mono">{group.title.toUpperCase()}</span>
            <strong>{group.title}</strong>
          </div>
          <div className="info-grid">
            {group.items.map((item) => (
              <div key={item.name} className="mini-card">
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <span className="mono">ARCHIVE</span>
        <h2>문서와 링크</h2>
      </div>
      {archiveGroups.map((group) => (
        <article key={group.title} className="content-card">
          <div className="content-card__header">
            <span className="mono">{group.title.toUpperCase()}</span>
            <strong>{group.title}</strong>
          </div>
          <div className="tag-group">
            {group.items.map((item) => (
              <span key={item} className="tag-chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <span className="mono">CONTACT</span>
        <h2>바로 연락하기</h2>
      </div>
      <div className="info-grid">
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
      </div>
    </section>
  </div>
);

const DesktopPortfolio: React.FC = () => {
  const { openWindow } = useModal();

  return (
    <>
      <Header />
      <DesktopIcons />
      <DesktopSummary />

      <button
        className="desktop-hint glass-panel"
        onClick={() => openWindow("archive")}
        type="button"
      >
        <span className="mono">Quick Access</span>
        <strong>Archive에서 전체 탐색</strong>
      </button>

      <ModalRenderer />
      <DockBar />
    </>
  );
};

const PortfolioFrame: React.FC = () => {
  const [bootDone, setBootDone] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const timer = window.setTimeout(() => setBootDone(true), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = useMemo(() => viewportWidth > 1024, [viewportWidth]);

  return (
    <div
      className={`portfolio-shell ${isDesktop ? "is-desktop" : "is-mobile"}`}
    >
      <BootScreen done={bootDone} />
      {isDesktop ? <DesktopPortfolio /> : <MobilePortfolio />}
    </div>
  );
};

const MainLayout: React.FC<MainLayoutProps> = () => (
  <ModalProvider>
    <PortfolioFrame />
  </ModalProvider>
);

export default MainLayout;
