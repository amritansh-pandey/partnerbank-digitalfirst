import React from 'react';
import '../style.css';



const TextButtonMedium = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="text-button-medium button-text-white ">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default TextButtonMedium;