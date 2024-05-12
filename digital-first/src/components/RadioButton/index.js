import React from 'react';
import './style.css';

const RadioButton = ({ checked, onChange }) => {
  return (
    <label className="radio-container">
      <input type="radio" checked={checked} onChange={onChange} />
      <span className="radio-custom"></span>
    </label>
  );
};

export default RadioButton;