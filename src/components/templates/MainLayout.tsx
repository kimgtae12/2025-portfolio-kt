import React, { useEffect, useMemo, useRef, useState } from "react";
import { Typograpy } from "components/atoms/Typograpy";
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
      <div className="boot-screen__bar">
        <div className="boot-screen__bar-fill" />
      </div>
      <Typograpy as="p" type="body">
        로딩중...
      </Typograpy>
    </div>
  </div>
);

const MobilePortfolio: React.FC = () => (
  <div className="mobile-portfolio">
    <section className="mobile-hero glass-panel">
      <Typograpy as="span" className="soft-label mono" type="caption">
        Frontend Developer
      </Typograpy>
      <h1>실무 구조와 구현 디테일을 함께 챙기는 프론트엔드 개발자</h1>
      <Typograpy as="p" type="body">
        대표 프로젝트 4개를 중심으로 역할, 문제 해결, 결과를 빠르게 확인할 수
        있도록 재구성한 모바일 포트폴리오입니다.
      </Typograpy>
      <div className="mobile-hero__stats">
        {quickStats.map((item) => (
          <div key={item.label}>
            <Typograpy as="span" type="caption">
              {item.label}
            </Typograpy>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <Typograpy as="span" className="mono" type="caption">
          PROJECTS
        </Typograpy>
        <h2>대표 프로젝트 4개</h2>
      </div>
      <div className="mobile-card-list">
        {projects.map((project) => (
          <article key={project.id} className="content-card">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                {project.category}
              </Typograpy>
              <strong>{project.title}</strong>
            </div>
            <Typograpy as="p" type="body">
              {project.summary}
            </Typograpy>
            <div className="project-summary-grid">
              <div>
                <Typograpy as="span" type="caption">
                  기간
                </Typograpy>
                <strong>{project.period}</strong>
              </div>
              <div>
                <Typograpy as="span" type="caption">
                  역할
                </Typograpy>
                <strong>{project.role}</strong>
              </div>
            </div>
            <Typograpy as="p" type="body">
              {project.problem}
            </Typograpy>
            <Typograpy as="p" type="body">
              {project.solution}
            </Typograpy>
          </article>
        ))}
      </div>
    </section>

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <Typograpy as="span" className="mono" type="caption">
          SKILLS
        </Typograpy>
        <h2>실무 사용 맥락</h2>
      </div>
      {skillGroups.map((group) => (
        <article key={group.title} className="content-card">
          <div className="content-card__header">
            <Typograpy as="span" className="mono" type="caption">
              {group.title.toUpperCase()}
            </Typograpy>
            <strong>{group.title}</strong>
          </div>
          <div className="info-grid">
            {group.items.map((item) => (
              <div key={item.name} className="mini-card">
                <strong>{item.name}</strong>
                <Typograpy as="p" type="body">
                  {item.description}
                </Typograpy>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>

    {/* <section className="mobile-section">
      <div className="mobile-section__heading">
        <Typograpy as="span" className="mono" type="caption">
          ARCHIVE
        </Typograpy>
        <h2>문서와 링크</h2>
      </div>
      {archiveGroups.map((group) => (
        <article key={group.title} className="content-card">
          <div className="content-card__header">
            <Typograpy as="span" className="mono" type="caption">
              {group.title.toUpperCase()}
            </Typograpy>
            <strong>{group.title}</strong>
          </div>
          <div className="tag-group">
            {group.items.map((item) => (
              <Typograpy
                as="span"
                key={item}
                className="tag-chip"
                type="caption"
              >
                {item}
              </Typograpy>
            ))}
          </div>
        </article>
      ))}
    </section> */}

    <section className="mobile-section">
      <div className="mobile-section__heading">
        <Typograpy as="span" className="mono" type="caption">
          CONTACT
        </Typograpy>
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
            <Typograpy as="span" type="body">
              {link.caption}
            </Typograpy>
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

      {/* <button
        className="desktop-hint glass-panel"
        onClick={() => openWindow("archive")}
        type="button"
      >
        <Typograpy as="span" className="mono" type="caption">
          Quick Access
        </Typograpy>
        <strong>Archive에서 전체 탐색</strong>
      </button> */}

      <ModalRenderer />
      <DockBar />
    </>
  );
};

const PortfolioFrame: React.FC = () => {
  const { openWindow } = useModal();
  const [bootDone, setBootDone] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  const hasOpenedInitialResume = useRef(false);

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

  useEffect(() => {
    if (hasOpenedInitialResume.current || !bootDone || !isDesktop) {
      return;
    }

    hasOpenedInitialResume.current = true;
    openWindow("resume");
  }, [bootDone, isDesktop, openWindow]);

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
