import React from 'react';
import './style.css';

function CircleProgressBar({ percentage, amount }) {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ '--percentage': percentage }}
      ></div>
      <div className="main-progress-text">
        <span className='caption'>Saved amount</span>
        <div>
          <span className='title2'>{amount}</span>
        </div>
      </div>
    </div>
  );
}

export default CircleProgressBar;
