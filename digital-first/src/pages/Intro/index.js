import React, { useState, useEffect } from 'react';
import "./style.css";
import IntroCarousel from '../../components/IntroCarousel';

function Intro(props) {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  return (
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <IntroCarousel {...props} />
    </div>
  )
}

export default Intro;