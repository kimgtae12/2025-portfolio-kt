import Icon from 'components/atoms/Icon';
import React, { useState } from 'react';

interface DockbarIconProps {
    category: string;
    name: string;
    classNameProp?: string;
    label :string;
    onClick?: () => void;
}

export const DockbarIcon : React.FC<DockbarIconProps> = ({ category, name, classNameProp, label, onClick }) => {

    const [isHovered, setIsHovered] = React.useState(false);

        return(
            <div className="dock-icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick}>
            <Icon category={category} name={name} className={`w-auto h-full max-h-[100%] object-contain ${classNameProp}`} />
            {/**{isHovered && (
                <div className="tooltip">
                    <span className="text-caption">
                    {label}
                    </span>
                </div>
            )}*/}
        </div>
    );
};
