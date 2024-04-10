import React from 'react';
import './style.css';

const CustomHeightBottomSheet = ({ show, title, onClose, children }) => {
  return (
    <div>
      {show && <div className="bottom-sheet-overlay" onClick={onClose}></div>}
      <div className={`custom-bottom-sheet ${show ? 'show' : ''}`}>
        <div className="custom-bottom-sheet-header">
          <span className='subheading2'>{title}</span>
        </div>
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomHeightBottomSheet;
