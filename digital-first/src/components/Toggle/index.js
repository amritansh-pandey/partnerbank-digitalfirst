import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Toggle = ({ isChecked, onToggle }) => {
  return (
    <label className={`toggle ${isChecked ? 'checked' : ''}`}>
      <input type="checkbox" checked={isChecked} onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
};

Toggle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;