import React, { useState, useEffect } from 'react';
import './slideIn.css'; // Import the CSS file with the styles

const SlideIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the slide-in effect once the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div className={`content ${isVisible ? 'slide-in-element' : ''}`}>
      <h1>Slide In Effect</h1>
      <p>This content is sliding in.</p>
    </div>
  );
};

export default SlideIn;