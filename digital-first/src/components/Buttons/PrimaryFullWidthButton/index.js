import React from 'react';
import '../style.css';



const PrimaryFullWidthButton = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="primary-full-width-button button-text">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default PrimaryFullWidthButton;