import React from 'react';
import './style.css';
import TickIcon from '../../assets/images/check-white.svg';

const CustomCheckbox = ({ label, onChange, checked }) => {
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark">
        {checked && <img src={TickIcon} alt="tick" className="tick-icon" />}
      </span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
