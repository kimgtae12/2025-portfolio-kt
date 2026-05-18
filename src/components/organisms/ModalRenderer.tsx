import React, { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Modal } from "components/atoms/Modal";
import {
  archiveGroups,
  contactLinks,
  desktopWindows,
  resumeSections,
  skillGroups,
  strengths,
  WindowId,
} from "data/portfolioData";
import { useModal } from "context/ModalContext";
import { useIcon } from "hooks/useImage";
import { Typograpy } from "components/atoms/Typograpy";
import ProjectsWindow from "components/pages/window/ProjectWindow";
import AboutWindow from "components/pages/window/AboutWindow";
import ContactWindow from "components/pages/window/ContactWindow";
import ResumeWindow from "components/pages/window/ResumeWindow";

const SkillItem: React.FC<{ item: any }> = ({ item }) => {
  const { src: iconSrc } = useIcon("skills", item.icon || "");

  return (
    <article className="mini-card">
      <div className="flex flex-row items-center gap-[0.8rem]">
        {item.icon && iconSrc && (
          <div className="flex justify-center bg-white p-[2px] rounded-[6px]">
            <img
              src={iconSrc}
              alt={item.name}
              width={20}
              height={20}
              className={"object-contain"}
            />
          </div>
        )}
        <Typograpy as="span" className="font-bold text-2xl" type="body">
          {item.name}
        </Typograpy>
      </div>
      <Typograpy as="p" className="text-xs" type="caption">
        {item.description}
      </Typograpy>
    </article>
  );
};

const SkillsWindow: React.FC = () => (
  <div className="content-stack">
    {skillGroups.map((group) => (
      <section key={group.title} className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            {group.title.toUpperCase()}
          </Typograpy>
          {/* <strong>{group.title}</strong> */}
        </div>
        <div className="info-grid">
          {group.items.map((item) => (
            <SkillItem key={item.name} item={item} />
          ))}
        </div>
      </section>
    ))}
  </div>
);

const ArchiveWindow: React.FC = () => (
  <div className="archive-window">
    <aside className="archive-sidebar">
      <div className="window-section-heading">
        <Typograpy as="span" className="mono" type="caption">
          ARCHIVE
        </Typograpy>
        <strong>탐색 허브</strong>
      </div>
      <div className="archive-sidebar__list">
        {archiveGroups.map((group) => (
          <div key={group.title} className="archive-sidebar__group">
            <Typograpy as="span" type="body">
              {group.title}
            </Typograpy>
            <strong>{group.items.length} items</strong>
          </div>
        ))}
      </div>
    </aside>

    <div className="archive-content">
      {archiveGroups.map((group) => (
        <section key={group.title} className="content-card">
          <div className="content-card__header">
            <Typograpy as="span" className="mono" type="caption">
              {group.title.toUpperCase()}
            </Typograpy>
            <strong>{group.title}</strong>
          </div>
          <div className="archive-content__grid">
            {group.items.map((item) => (
              <article key={item} className="mini-card">
                <strong>{item}</strong>
                <Typograpy as="p" type="body">
                  Finder 스타일 보조 창에서 빠르게 접근할 수 있는 리소스입니다.
                </Typograpy>
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
    // case "archive":
    //   return <ArchiveWindow />;
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
