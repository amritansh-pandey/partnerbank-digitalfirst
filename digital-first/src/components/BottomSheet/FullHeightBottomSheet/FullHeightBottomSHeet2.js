import React from 'react';
import './style.css';



  const FullHeightBottomSheet2 = ({ show, title, onClose, children }) => {
    const handleOverlayClick = () => {
      if (onClose) {
        onClose();
      }
    };
  
    return (
      <div>
        {show && <div className="bottom-sheet-overlay" onClick={handleOverlayClick}></div>}
        <div className={`full-page-bottom-sheet ${show ? 'show' : ''}`}>
          <div className="bottom-sheet-header2">
            <span className='subheading2'>{title}</span>
          </div>
          <div className="bottom-sheet-content">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
 

export default FullHeightBottomSheet2;