import React from 'react';
import './style.css';

const FullHeightBottomSheet = ({ show, title, setShowBottomSheet, children }) => {
  return (
    <div>
      {show && <div className="overlay" onClick={() => setShowBottomSheet(false)}></div>}
      <div className={`full-page-bottom-sheet ${show ? 'show' : ''}`}>
        <div className="bottom-sheet-header">
        <span className='subheading2'>{title}</span>
        </div>
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullHeightBottomSheet;