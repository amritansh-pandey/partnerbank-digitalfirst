import React from 'react';
import '../style.css';



const TextButtonSmall = ({ text, leftIcon, rightIcon }) => {
    return (
        <button className="text-button-small button-text-primary-gradient">
        {leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {text}
        {rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </button>
    )
}

export default TextButtonSmall;