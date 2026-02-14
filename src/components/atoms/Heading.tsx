import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const baseClasses = 'font-bold text-gray-900';
  
  const sizeClasses = {
    1: 'text-4xl md:text-6xl',
    2: 'text-3xl md:text-5xl',
    3: 'text-2xl md:text-4xl',
    4: 'text-xl md:text-3xl',
    5: 'text-lg md:text-2xl',
    6: 'text-base md:text-xl',
  };
  
  const classes = `${baseClasses} ${sizeClasses[level]} ${className}`;
  
  const Tag = `h${level}` as const;
  
  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
