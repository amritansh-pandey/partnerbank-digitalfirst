import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function TopNavigation4({ leftIcon, pageTitle, rightIcon }) {
  const navigate = useNavigate();

  const handleLeftIconClick = () => {
    // Navigate back to the previous screen
    navigate(-1);
  };

  
  return (
    <div className='top-navigation-container2'>
       <div className='left-icon' onClick={handleLeftIconClick}>
        {leftIcon}
      </div>
      <div className='page-title'>{pageTitle}</div>
      <div className='right-icon'>{rightIcon}</div>
    </div>
  );
}

export default TopNavigation4;