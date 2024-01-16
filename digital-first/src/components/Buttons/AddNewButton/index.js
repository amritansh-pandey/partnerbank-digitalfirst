import React from 'react';
import './style.css';
import AddPlusIcon from '../../../assets/images/plus-circle-active.svg';

function AddNewButton({ title }) {
  return (
    <div className='add-new-button-container'>
      <div>
        <span className='subheading5'>{title}</span>
      </div>
      <div>
        <img src={AddPlusIcon} alt='add' className='icon32' />
      </div>
    </div>
  );
}

export default AddNewButton;