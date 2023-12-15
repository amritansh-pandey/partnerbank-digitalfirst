import React from 'react';
import './style.css';

function TopNavigation4({ leftIcon, pageTitle, rightIcon }) {
  return (
    <div className='top-navigation-container2'>
      <div className='left-icon'>{leftIcon}</div>
      <div className='page-title'>{pageTitle}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation4;