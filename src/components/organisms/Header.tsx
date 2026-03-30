import React from 'react';
import { useGetNowTime } from 'hook/useGetNowTime';

const Header: React.FC = () => {
  const currentTime = useGetNowTime();

  return (
    <header className="topbar glass-panel">
      <div className="topbar__left">
        <span className="topbar__brand">KT Portfolio OS</span>
        <span className="topbar__divider" />
        <span className="topbar__meta">Frontend Developer · 4년 2개월</span>
      </div>

      <div className="topbar__right">
        <span className="soft-label mono">⌘ 1-6 빠른 열기</span>
        <span className="soft-label mono">{currentTime}</span>
      </div>
    </header>
  );
};

export default Header;
