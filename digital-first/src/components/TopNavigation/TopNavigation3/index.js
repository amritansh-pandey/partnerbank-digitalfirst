import React from 'react';
import './style.css';

function TopNavigation3({ leftIcon, pageTitle, rightIcon }) {
  return (
    <div className='top-navigation-container'>
      <div className='left-icon'>{leftIcon}</div>
      <div className='page-title'>{pageTitle}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation3;