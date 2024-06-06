import React from 'react';
import '../style.css';



const TextButtonMediumRed = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="text-button-medium button-text-red ">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default TextButtonMediumRed;