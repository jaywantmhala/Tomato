import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-tomato-500 text-white px-4 py-2 rounded-lg z-50 font-medium"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
