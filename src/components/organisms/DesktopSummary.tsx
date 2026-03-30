import React from "react";
import { quickStats } from "data/portfolioData";
import { useModal } from "context/ModalContext";

export const DesktopSummary: React.FC = () => {
  const { openWindow } = useModal();

  return (
    <section className="desktop-summary glass-panel">
      {/* <div className="desktop-summary__eyebrow mono">PORTFOLIO / FRONTEND ARCHIVE</div>
      <h1 className="desktop-summary__title">빠르게 이해되고, 프로젝트로 설득되는 프론트엔드 포트폴리오</h1>
      <p className="desktop-summary__description">
        중소기업 채용담당자가 5초 안에 직무와 경력을 파악하고, 대표 프로젝트 4개에서 실무 역량을 바로 읽을 수 있도록 설계했습니다.
      </p> */}

      <div className="desktop-summary__stats">
        {quickStats.map((item) => (
          <div key={item.label} className="desktop-summary__stat">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="desktop-summary__actions">
        <button
          className="primary-action"
          onClick={() => openWindow("projects")}
          type="button"
        >
          대표 프로젝트 보기
        </button>
        <button
          className="secondary-action"
          onClick={() => openWindow("resume")}
          type="button"
        >
          이력 요약 열기
        </button>
      </div>
    </section>
  );
};
