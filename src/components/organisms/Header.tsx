import { Typograpy } from 'components/atoms/Typograpy';
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
      <nav className="flex flex-row justify-between items-center gap-[4rem] px-[2rem] w-full">
        <div>
          <Typograpy type="caption" className="font-medium">시스템</Typograpy>
        </div>
        <div className="flex flex-row gap-[1.2rem]">
          <Typograpy type="caption" className="font-medium">{currentTime}</Typograpy>
          <button onClick={toggleDark}>
            <Typograpy type="caption" className="font-medium">{isDark ? '☀️' : '🌙'}</Typograpy>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
