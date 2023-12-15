import React from 'react';
import './style.css';

function TopNavigation2({ leftIcon, pageLogo, rightIcon }) {
  return (
    <div className='top-navigation-container'>
      <div className='left-icon'>{leftIcon}</div>
      <div className='page-logo'>{pageLogo}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation2;