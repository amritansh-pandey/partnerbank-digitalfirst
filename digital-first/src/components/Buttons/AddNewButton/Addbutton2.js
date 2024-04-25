import React from 'react';
import './style.css';
import AddPlusIcon from '../../../assets/images/plus-circle-filled.svg';
import { Link } from 'react-router-dom';

function AddNewButton2({ title }) {
  return (
  <Link to="/newgoal" style={{ textDecoration: "none" }}>
    <div className='add-new-button-container'>
      <div>
        <span className='subheading5'>{title}</span>
      </div>
      <div>
        <img src={AddPlusIcon} alt='add' className='icon32' />
      </div>
    </div>
    </Link>
  );
}

export default AddNewButton2;