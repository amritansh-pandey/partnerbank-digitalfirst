import React from 'react';
import '../style.css';



const DisabledButtonMedium = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="disabled-button-medium button-text">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default DisabledButtonMedium;