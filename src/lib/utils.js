import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility function to truncate text
export const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

// Utility function to set background image
export const setBackground = (backgroundImage) => {
  const backgroundImageStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.3s ease-in-out',
    willChange: 'background-image',
  }
  return backgroundImageStyles;
}