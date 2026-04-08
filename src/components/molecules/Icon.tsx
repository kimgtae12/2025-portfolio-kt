import { useIcon } from "hooks/useImage";
import React from "react";

interface IconProps {
  category: string;
  iconName: string;
  size?: {
    width: number;
    height: number;
  };
}

export const Icon: React.FC<IconProps> = ({ category, iconName, size }) => {
  const { src } = useIcon(category, iconName);

  return (
    <img
      src={src}
      alt={iconName}
      style={{ width: size?.width, height: size?.height }}
    />
  );
};
