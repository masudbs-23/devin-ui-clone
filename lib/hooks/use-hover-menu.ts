import { useState } from 'react';

/**
 * Custom hook for managing hover menu state
 * Useful for dropdown menus and hover interactions
 */
export function useHoverMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return {
    hoveredItem,
    handleMouseEnter,
    handleMouseLeave,
    isHovered: (item: string) => hoveredItem === item,
  };
}
