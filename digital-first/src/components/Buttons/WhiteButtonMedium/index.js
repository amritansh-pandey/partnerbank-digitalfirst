import React from 'react';
import '../style.css';



const WhiteButtonMedium = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="white-button-medium white-button-text-primary">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default WhiteButtonMedium;