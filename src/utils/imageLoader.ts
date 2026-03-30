// Dynamic image loader utility
export const loadImage = (path: string): string => {
  try {
    return require(`../assets/images/${path}`);
  } catch (error) {
    console.error(`Image not found: ${path}`, error);
    return "";
  }
};

// Icon-specific loader
export const loadIcon = (category: string, iconName: string): string => {
  const extensions = [".png", ".jpg", ".jpeg", ".svg", ".webp"];

  for (const ext of extensions) {
    try {
      return require(`../assets/images/${category}/${iconName}${ext}`);
    } catch {
      // Try next extension
    }
  }

  return "";
};

// Batch loader for multiple icons
export const loadIcons = (
  category: string,
  iconNames: string[],
): Record<string, string> => {
  const result: Record<string, string> = {};

  iconNames.forEach((name) => {
    result[name] = loadIcon(category, name);
  });

  return result;
};
