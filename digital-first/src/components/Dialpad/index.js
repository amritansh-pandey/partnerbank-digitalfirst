// DialPad.js

import React from 'react';
import './style.css'; 

function DialPad({ onKeyPress }) {
  const handleKeyPress = (value) => {
    // Pass the pressed digit to the parent component
    onKeyPress(value);
  };

  return (
    <div className='dial-pad-container'>
      <div className='dial-pad-row'>
        <button><span className='title4'>1</span></button>
        <button><span className='title4'>2</span></button>
        <button><span className='title4'>3</span></button>
      </div>
      <div className='dial-pad-row'>
      <button><span className='title4'>4</span></button>
        <button><span className='title4'>5</span></button>
        <button><span className='title4'>6</span></button>
      </div>
      <div className='dial-pad-row'>
      <button><span className='title4'>7</span></button>
        <button><span className='title4'>8</span></button>
        <button><span className='title4'>9</span></button>
      </div>
      <div className='dial-pad-row'>
      <button><span className='title4'>0</span></button>
      </div>
    </div>
  );
}

export default DialPad;
