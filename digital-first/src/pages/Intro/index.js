import React from 'react';
import "./style.css";
import IntroCarousel from '../../components/IntroCarousel';

function Intro(props) {
  return (
    <div className='page-container'>
      <IntroCarousel {...props} />
    </div>
  )
}

export default Intro;