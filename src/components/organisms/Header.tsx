import React from "react";
import { Typograpy } from "components/atoms/Typograpy";
import { useGetNowTime } from "hook/useGetNowTime";

const Header: React.FC = () => {
  const currentTime = useGetNowTime();

  return (
    <header className="topbar glass-panel">
      <div className="topbar__left">
        <Typograpy
          as="span"
          className="text-white topbar__brand"
          type="caption"
        >
          KT Portfolio OS
        </Typograpy>
        <span className="topbar__divider" />
        <Typograpy as="span" className="topbar__meta" type="caption">
          Frontend Developer · 4년 2개월
        </Typograpy>
      </div>

      <div className="topbar__right">
        <Typograpy as="span" className="soft-label mono" type="caption">
          ⌘ 1-6 빠른 열기
        </Typograpy>
        <Typograpy as="span" className="soft-label mono" type="caption">
          {currentTime}
        </Typograpy>
      </div>
    </header>
  );
};

export default Header;
