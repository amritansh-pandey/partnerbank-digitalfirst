import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function TopNavigation8({ leftIcon, pageTitle, rightIcon, leftIconPath }) {
  return (
    <div className='top-navigation-container2'>
      <Link to={leftIconPath} className='left-icon'>
        {leftIcon}
      </Link>
      <div className='page-title'>{pageTitle}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation8;
