import React from 'react';

interface TypograpyProps extends React.HTMLAttributes<HTMLElement> {
    type?: 'display' | 'headline' | 'title' | 'subtitle' | 'body' | 'caption';
    className?: string;
    children?: React.ReactNode;
    as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typograpy: React.FC<TypograpyProps> = ({ 
    type = 'body', 
    className, 
    children, 
    as: Component = 'div',
    ...rest
}) => {
    const typographyClass = `typography typography-${type} text-text-primary dark:text-text-secondary ${className || ''}`;
    
    return React.createElement(Component, { className: typographyClass, ...rest }, children);
};
