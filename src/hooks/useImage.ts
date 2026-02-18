import { useState, useEffect } from 'react';
import { loadImage } from 'utils/imageLoader';

export const useImage = (path: string) => {
  const [src, setSrc] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const imageSrc = loadImage(path);
      if (imageSrc) {
        setSrc(imageSrc);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }, [path]);

  return { src, error };
};

export const useIcon = (category: string, iconName: string) => {
  const [src, setSrc] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const iconSrc = loadImage(`${category}/${iconName}`);
      if (iconSrc) {
        setSrc(iconSrc);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }, [category, iconName]);

  return { src, error };
};
