// CircularProgress.js
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CircularProgress = ({ value }) => {
  const strokeWidth = 10;
  const radius = 40 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className='circular-progress-container'>
    <svg className="circular-progress" width="80" height="80">
      <circle
        className="progress-bar-background"
        cx="40"
        cy="40"
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-bar"
        cx="40"
        cy="40"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
      />
   
    </svg>
    <div className='progress-text-container'>
<span className='progress-text'>
    {value}%
</span>
    </div>
    </div>
  );
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CircularProgress;
