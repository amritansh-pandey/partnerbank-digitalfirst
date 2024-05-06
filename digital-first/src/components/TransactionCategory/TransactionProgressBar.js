import React from 'react'
import './style.css'

const TransactionProgressBar= ({ progress, color }) => {

    const progressBarStyle = {
        width: `${progress}%`, 
        backgroundColor: color 
      };
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={progressBarStyle}></div>
    </div>
  )
}

export default TransactionProgressBar