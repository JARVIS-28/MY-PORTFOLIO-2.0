import React from 'react';

const Background: React.FC = () => {
  const scanlineStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10,
    backgroundColor: '#09090b', // bg-dark-900
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.2) 1px,
        rgba(0, 0, 0, 0.2) 2px
      )
    `,
    pointerEvents: 'none',
  };

  return (
    <div style={scanlineStyle} />
  );
};

export default Background;