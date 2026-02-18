import { useGetNowTime } from 'hook/useGetNowTime';
import React, { useState } from 'react';

const Header: React.FC = () => {

    const [isDark, setIsDark] = useState(false);
    const currentTime = useGetNowTime();

      const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };


  React.useEffect(() => {
    // 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);


  return (
    <header className="os-header os-header-dark">
      <nav className="flex flex-row w-full justify-between items-center px-[2rem] gap-[4rem]">
        <div>
          <span className="os-header-font os-header-font-dark">시스템</span>
        </div>
        <div className="flex flex-row gap-[1.2rem]">
          <span className="os-header-font os-header-font-dark">{currentTime}</span>
          <button onClick={toggleDark}>
            <span className="os-header-font os-header-font-dark">{isDark ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
