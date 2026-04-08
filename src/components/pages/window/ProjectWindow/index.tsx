import { Typograpy } from "components/atoms/Typograpy";
import { Icon } from "components/molecules/Icon";
import { Project, projects } from "data/portfolioData";
import { useIcon } from "hooks/useImage";
import React from "react";

const ProjectsWindow: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = React.useState(
    projects[0].id,
  );

  const selectedProject = React.useMemo(
    () =>
      projects.find((project) => project.id === selectedProjectId) ??
      projects[0],
    [selectedProjectId],
  );

  return (
    <div className="projects-window">
      <div className="projects-window__sidebar">
        <div className="window-section-heading">
          <Typograpy className={"text-white font-bold"}>
            대표 프로젝트
          </Typograpy>
        </div>

        <div className="pt-[1.2rem] project-list">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`project-list__item ${project.id === selectedProject.id ? "is-selected" : ""}`}
              onClick={() => setSelectedProjectId(project.id)}
              type="button"
            >
              <div className="project-list__thumb">
                <div></div>
                <div className="flex flex-1 items-center">
                  <Icon category="logo" iconName={project.logo || ""} />
                </div>
                <Typograpy as="span" type="caption" className="text-center">
                  {project.category}
                </Typograpy>
              </div>
              <div className="project-list__content">
                <strong>{project.title}</strong>
                <Typograpy as="p" type="body">
                  {project.summary}
                </Typograpy>
                <div className="project-list__meta mono">
                  <Typograpy as="span" type="caption">
                    {project.period}
                  </Typograpy>
                  <Typograpy as="span" type="caption">
                    {project.contribution}
                  </Typograpy>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-window__detail">
        <section className="project-hero">
          <div className={"flex flex-col gap-[1.2rem]"}>
            <div className="flex flex-row items-center gap-[0.8rem]">
              <Typograpy as="span" className="soft-label mono" type="caption">
                {selectedProject.category}
              </Typograpy>
            </div>
            <div className="flex flex-row items-center gap-[0.8rem]">
              <Icon
                category="logo"
                iconName={selectedProject.logo || ""}
                size={{ width: 40, height: 40 }}
              />
              <Typograpy as={"h2"} className={"text-3xl font-bold"}>
                {selectedProject.title}
              </Typograpy>
            </div>
            <div className="flex flex-col gap-[0.8rem]">
              <Typograpy as="p" type="body" className="font-bold">
                소속/연계 회사 : {selectedProject.company}
              </Typograpy>
              <Typograpy as="p" type="body">
                {selectedProject.summary}
              </Typograpy>
            </div>
          </div>

          <div className="project-hero__metrics">
            <div>
              <Typograpy as="span" type="caption">
                기간
              </Typograpy>
              <strong>{selectedProject.period}</strong>
            </div>
            <div>
              <Typograpy as="span" type="caption">
                역할
              </Typograpy>
              <strong>{selectedProject.role}</strong>
            </div>
            <div>
              <Typograpy as="span" type="caption">
                기여도
              </Typograpy>
              <strong>{selectedProject.contribution}</strong>
            </div>
          </div>
        </section>

        <section className="project-grid">
          <article className="content-card is-wide">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                PROJECT OVERVIEW
              </Typograpy>
              <strong>무엇을 맡았는지 한눈에 보기</strong>
            </div>
            <div className="project-summary-grid">
              <div>
                <Typograpy as="span" type="caption">
                  팀 구성
                </Typograpy>
                <strong>{selectedProject.team}</strong>
              </div>
              <div>
                <Typograpy as="span" type="caption">
                  역할
                </Typograpy>
                <strong>{selectedProject.role}</strong>
              </div>
              <div>
                <Typograpy as="span" type="caption">
                  핵심 키워드
                </Typograpy>
                <strong>{selectedProject.highlights.join(" · ")}</strong>
              </div>
            </div>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                CHALLENGE
              </Typograpy>
              <strong>문제 상황</strong>
            </div>
            <Typograpy as="p" type="body">
              {selectedProject.problem}
            </Typograpy>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                SOLUTION
              </Typograpy>
              <strong>해결 방식</strong>
            </div>
            <Typograpy as="p" type="body">
              {selectedProject.solution}
            </Typograpy>
          </article>

          <article className="content-card">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                IMPACT
              </Typograpy>
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
              <Typograpy as="span" className="mono" type="caption">
                TECH STACK
              </Typograpy>
              <strong>사용 기술</strong>
            </div>
            <div className="tag-group">
              {selectedProject.techStack.map((item) => (
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
        </section>
      </div>
    </div>
  );
};

export default ProjectsWindow;
