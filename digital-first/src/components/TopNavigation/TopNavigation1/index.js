import React from 'react';
import './style.css';

function TopNavigation1({ leftIcon, pageTitle, rightIcon }) {
  return (
    <div className='top-navigation-container'>
      <div className='left-icon'>{leftIcon}</div>
      <div className='page-title'>{pageTitle}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation1;