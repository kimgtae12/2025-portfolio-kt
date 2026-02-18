import React, { useCallback, useEffect, useState } from 'react';
import { loadIcon } from 'utils/imageLoader';

interface IconProps {
  category: string;
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  category, 
  name, 
  className = '' 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getIconSrc = useCallback(() => {
    // Check for dark mode variant first
    if (isDarkMode) {
      const darkIconSrc = loadIcon(category, `${name}_dark`);
      if (darkIconSrc) return darkIconSrc;
    }
    
    // Fall back to regular icon
    return loadIcon(category, name);
  }, [category, name, isDarkMode]);

  // 다크모드 변경 감지
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // 초기 체크
    checkDarkMode();

    // 클래스 변경 감지 (MutationObserver)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const classes = `${className}`;
  const iconSrc = getIconSrc();

  if (!iconSrc) {
    return <div className={`bg-red-300 ${className}`} />;
  }

  return (
    <img 
      src={iconSrc} 
      alt={`${category}-${name} icon`}
      className={classes}
    />
  );
};

export default Icon;
