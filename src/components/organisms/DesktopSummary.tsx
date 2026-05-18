import React from "react";
import { Typograpy } from "components/atoms/Typograpy";
import { quickStats } from "data/portfolioData";
import { useModal } from "context/ModalContext";

export const DesktopSummary: React.FC = () => {
  const { openWindow } = useModal();

  return (
    <section className="desktop-summary glass-panel">
      <div className="desktop-summary__stats">
        {quickStats.map((item) => (
          <div key={item.label} className="desktop-summary__stat">
            <Typograpy as="span" type="caption">
              {item.label}
            </Typograpy>
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
          대표 프로젝트
        </button>
        <button
          className="secondary-action"
          onClick={() => openWindow("resume")}
          type="button"
        >
          프로필
        </button>
      </div>
    </section>
  );
};
