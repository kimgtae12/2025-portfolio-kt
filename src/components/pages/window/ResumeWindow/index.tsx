import { Typograpy } from "components/atoms/Typograpy";
import { resumeSections } from "data/portfolioData";
import { useIcon } from "hooks/useImage";
import React from "react";

const collaborationPoints = [
  "대화와 협의를 가장 중요하게 생각하며, 다양한 의견 속에서 모두가 납득할 수 있는 방향을 찾으려 합니다.",
  "문제가 생기면 먼저 원인을 차분히 파악하고, 팀원들과의 대화를 통해 현실적인 협의점을 정리합니다.",
  "협의된 기준을 바탕으로 실행까지 책임지고, 분위기를 너무 무겁지 않게 만드는 편입니다.",
];

const personalityKeywords = [
  "Communication First",
  "Positive Mindset",
  "Root Cause Thinking",
  "Team Mood Maker",
];

const ResumeWindow = () => {
  const { src: profileSrc } = useIcon("profile", "profile_photo.jpeg");

  return (
    <div className="content-stack resume-window">
      <section className="content-card resume-hero items-center">
        <div
          className="resume-hero__photo"
          style={{
            background: profileSrc
              ? `url(${profileSrc}) center/cover`
              : "linear-gradient(135deg, rgba(106, 166, 255, 0.28), rgba(255, 209, 102, 0.24))",
          }}
        >
          {!profileSrc && (
            <Typograpy as="span" className="mono" type="caption">
              PROFILE
            </Typograpy>
          )}
        </div>

        <div className="resume-hero__content">
          <div className="content-card__header">
            <Typograpy as="span" className="mono" type="caption">
              RESUME
            </Typograpy>
            <strong>문서형 이력보다, 함께 일하는 방식까지 보이도록</strong>
          </div>

          <div className="resume-hero__headline">
            <div>
              <Typograpy as="h2" className="section-title font-bold">
                김경태
              </Typograpy>
              <Typograpy as="p" type="body">
                Frontend Developer · React / Next.js / React Native
              </Typograpy>
            </div>

            <div className="resume-tag-group">
              {personalityKeywords.map((keyword) => (
                <Typograpy
                  as="span"
                  className="tag-chip"
                  key={keyword}
                  type="caption"
                >
                  {keyword}
                </Typograpy>
              ))}
            </div>
          </div>

          <Typograpy as="p" type="body">
            사용자 경험과 구현 디테일을 함께 챙기되, 결국 좋은 결과는 좋은
            협업에서 나온다고 믿습니다. 팀 안에서 대화를 연결하고 문제를 푸는
            흐름을 만드는 데 강점을 가진 프론트엔드 개발자입니다.
          </Typograpy>
          <Typograpy as="p" type="body">
            * 강아지를 정말 좋아합니다.
          </Typograpy>
        </div>
      </section>

      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            PERSONALITY
          </Typograpy>
          <strong>성격과 일하는 태도</strong>
        </div>

        <ul>
          {collaborationPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      {/* <div className="info-grid resume-grid"> */}
      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            TEAM FIT
          </Typograpy>
          <strong>협업에서 자주 맡는 역할</strong>
        </div>

        <div className="resume-mini-list">
          <article className="mini-card">
            <strong>조율자</strong>
            <Typograpy as="p" type="body">
              이슈를 빠르게 공유하고, 각자의 관점을 정리해 합의 가능한 지점을
              찾습니다.
            </Typograpy>
          </article>

          <article className="mini-card">
            <strong>문제 해결자</strong>
            <Typograpy as="p" type="body">
              현상만 처리하지 않고 원인을 파악한 뒤, 재발을 줄일 수 있는
              방식으로 해결하려고 합니다.
            </Typograpy>
          </article>

          <article className="mini-card">
            <strong>분위기 메이커</strong>
            <Typograpy as="p" type="body">
              지나치게 경직되지 않도록 팀 분위기를 부드럽게 만들며, 함께 일하는
              리듬을 챙기는 편입니다.
            </Typograpy>
          </article>
        </div>
      </section>
      {/* </div> */}

      <div className="info-grid resume-grid">
        {resumeSections.map((section) => (
          <section key={section.title} className="content-card">
            <div className="content-card__header">
              <Typograpy as="span" className="mono" type="caption">
                RESUME SECTION
              </Typograpy>
              <strong>{section.title}</strong>
            </div>

            <ul>
              {section.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ResumeWindow;
