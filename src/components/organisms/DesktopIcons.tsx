import React from "react";
import { Typograpy } from "components/atoms/Typograpy";
import { desktopWindows, WindowId } from "data/portfolioData";
import { useModal } from "context/ModalContext";

export const DesktopIcons: React.FC = () => {
  const { openWindow, windows } = useModal();

  return (
    <aside className="desktop-icons">
      {desktopWindows.map((item, index) => {
        const isActive =
          windows[item.id].isOpen && !windows[item.id].isMinimized;

        return (
          <button
            key={item.id}
            className={`desktop-icon ${isActive ? "is-active" : ""}`}
            onClick={() => openWindow(item.id as WindowId)}
            type="button"
          >
            <Typograpy
              as="span"
              className="desktop-icon__badge"
              style={{ background: item.accent } as React.CSSProperties}
            >
              {item.shortLabel}
            </Typograpy>
            <Typograpy as="span" className="desktop-icon__title" type="body">
              {item.label}
            </Typograpy>
            <Typograpy as="span" className="desktop-icon__meta" type="caption">
              {index === 0 ? "핵심" : item.description}
            </Typograpy>
          </button>
        );
      })}
    </aside>
  );
};
