// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './style.css'; // Import the styles

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      {isVisible && (
        <a href="#" onClick={topFunction} id="myBtn" className="scroll-to-top-button">
          <img src="up.png" alt="Back-To-Top" className="button-image" />
        </a>
      )}
    </div>
  );
};

export default ScrollToTopButton;
