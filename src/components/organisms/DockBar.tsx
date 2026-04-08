import React from "react";
import { Typograpy } from "components/atoms/Typograpy";
import { contactLinks, desktopWindows, WindowId } from "data/portfolioData";
import { useModal } from "context/ModalContext";

const externalDockItems = [
  { label: "GitHub", shortLabel: "GitHub", href: contactLinks[1].href },
  { label: "TBlog", shortLabel: "TBlog", href: contactLinks[2].href },
  { label: "DBlog", shortLabel: "DBlog", href: contactLinks[3].href },
  { label: "Email", shortLabel: "Email", href: contactLinks[0].href },
];

export const DockBar: React.FC = () => {
  const { openWindow, restoreWindow, windows } = useModal();

  return (
    <nav className="dock glass-panel" aria-label="Portfolio dock">
      {desktopWindows
        .sort((a, b) => a.dockOrder - b.dockOrder)
        .map((item) => {
          const windowState = windows[item.id];
          const isRunning = windowState.isOpen;
          const isActive = isRunning && !windowState.isMinimized;

          return (
            <button
              key={item.id}
              className={`dock__item ${isActive ? "is-active" : ""}`}
              onClick={() =>
                windowState.isMinimized
                  ? restoreWindow(item.id as WindowId)
                  : openWindow(item.id as WindowId)
              }
              title={item.label}
              type="button"
            >
              <Typograpy
                as="span"
                className="dock__icon"
                style={{ background: item.accent }}
                type="caption"
              >
                {item.shortLabel}
              </Typograpy>
              <Typograpy as="span" className="dock__tooltip" type="caption">
                {item.label}
              </Typograpy>
              {isRunning && <span className="dock__indicator" />}
            </button>
          );
        })}

      <span className="dock__separator" />

      {externalDockItems.map((item) => (
        <a
          key={item.label}
          className="dock__item is-link"
          href={item.href}
          rel="noreferrer"
          target="_blank"
        >
          <Typograpy as="span" className="dock__icon dock__icon--link" type="caption">
            {item.shortLabel}
          </Typograpy>
          <Typograpy as="span" className="dock__tooltip" type="caption">
            {item.label}
          </Typograpy>
        </a>
      ))}
    </nav>
  );
};
