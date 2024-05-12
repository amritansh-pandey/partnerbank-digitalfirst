import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function TopNavigation6({ leftIcon, pageLogo, rightIcon, leftIconPath }) {


  return (
    <div className='top-navigation-container'>
       <Link to={leftIconPath}>
       <div className='left-icon2'>
        {leftIcon}
        </div>
      </Link>
       
      <div className='page-logo'>{pageLogo}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation6;