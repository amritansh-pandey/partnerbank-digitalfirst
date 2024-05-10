import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function TopNavigation2({ leftIcon, pageLogo, rightIcon, leftIconPath }) {


  return (
    <div className='top-navigation-container'>
       <Link to={leftIconPath}>
        {leftIcon}
      </Link>
       
      <div className='page-logo'>{pageLogo}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation2;