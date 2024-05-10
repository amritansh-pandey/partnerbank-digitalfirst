import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function TopNavigation7({ leftIcon, pageUrl, rightIcon, leftIconPath }) {
 


  return (
    <div className='top-navigation-container'>
       <Link to={leftIconPath} className='left-icon' style={{ textDecoration: "none" }}>  
       <div className='left-icon2'>
        {leftIcon}
      </div>
      </Link>
      <div className='page-logo'>{pageUrl}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation7;