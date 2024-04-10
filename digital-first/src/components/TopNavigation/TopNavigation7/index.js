import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function TopNavigation7({ leftIcon, pageUrl, rightIcon }) {
  const navigate = useNavigate();

  const handleLeftIconClick = () => {
    // Navigate back to the previous screen
    navigate(-1);
  };

  return (
    <div className='top-navigation-container'>
       <div className='left-icon2' onClick={handleLeftIconClick}>
        {leftIcon}
      </div>
      <div className='page-logo'>{pageUrl}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation7;