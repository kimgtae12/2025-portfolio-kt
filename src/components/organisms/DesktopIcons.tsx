import React from 'react';
import { desktopWindows, WindowId } from 'data/portfolioData';
import { useModal } from 'context/ModalContext';

export const DesktopIcons: React.FC = () => {
  const { openWindow, windows } = useModal();

  return (
    <aside className="desktop-icons">
      {desktopWindows.map((item, index) => {
        const isActive = windows[item.id].isOpen && !windows[item.id].isMinimized;

        return (
          <button
            key={item.id}
            className={`desktop-icon ${isActive ? 'is-active' : ''}`}
            onClick={() => openWindow(item.id as WindowId)}
            type="button"
          >
            <span className="desktop-icon__badge" style={{ background: item.accent }}>
              {item.shortLabel}
            </span>
            <span className="desktop-icon__title">{item.label}</span>
            <span className="desktop-icon__meta">{index === 0 ? '핵심' : item.description}</span>
          </button>
        );
      })}
    </aside>
  );
};
