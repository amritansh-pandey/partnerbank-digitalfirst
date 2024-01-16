import React from 'react';
import '../style.css';


import { Link } from 'react-router-dom';

const TextButtonSmall = ({ text, leftIcon, rightIcon, to }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
        <button className="text-button-small-icon button-text-primary">
        {leftIcon}
        {text}
        {rightIcon}
      </button>
      </Link>

    );

export default TextButtonSmall;