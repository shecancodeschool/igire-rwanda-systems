export const setBackground = (backgroundImage, backgroundPosition) => {
    const backgroundImageStyles = {
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: backgroundPosition || 'center',
      transition: 'background-image 0.3s ease-in-out',
      willChange: 'background-image',
    }
    return backgroundImageStyles;
  }