import React, { useCallback, useEffect, useState } from 'react';

// Pre-import all available icons
import ic_profile from '../../assets/images/dockbar/ic_profile.png';
import ic_skill from '../../assets/images/dockbar/ic_skill.png';
import ic_history from '../../assets/images/dockbar/ic_history.png';
interface IconProps {
  category: string;
  name: string;
  className?: string;
}

// Icon registry
const iconRegistry: Record<string, Record<string, { light: string; dark?: string }>> = {
  dockbar: {
    ic_profile: { light: ic_profile, dark: ic_profile },
    ic_skill: { light: ic_skill, dark: ic_skill },
    ic_history: { light: ic_history, dark: ic_history }
  }
};

const Icon: React.FC<IconProps> = ({ 
  category, 
  name, 
  className = '' 
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getIconSrc = useCallback(() => {
    const icons = iconRegistry[category];
    if (!icons || !icons[name]) {
      console.error(`Icon not found: ${category}/${name}`);
      return null;
    }

    return isDarkMode && icons[name].dark ? icons[name].dark : icons[name].light;
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
    return <div className={` bg-red-300 ${className}`} />;
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
