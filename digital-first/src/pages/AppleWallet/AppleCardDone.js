import React from 'react';
import './style.css'
import DigtalCard from '../../assets/images/digital-card.png'
import { Link } from 'react-router-dom';


function AppleCardDone() {


  return (
    <div>
      <div className='apple-wallet-digital-card-container'>
        <img src={DigtalCard} className='apple-wallet-digital-card' alt='wallet-banner' />
      </div>

      <div className='wallet-title-container-done'>
        <span>Set as Default Card in Wallet</span>
      </div>

      <div className='wallet-subtitle-container'>
        <span>This card will be automatically selected when you use Apple Pay.</span>
      </div>

      <div style={{height: "128px"}}></div>
      <Link to="/manage-card" style={{ textDecoration: "none" }}>
      <div className='wallet-button-container'>
        <button className='wallet-button'>Use as default card</button>
      </div>
      </Link>
      <Link to="/manage-card" style={{ textDecoration: "none" }}>
      <div className='wallet-text-button-container'>
        <button className='wallet-text-button'>Not Now</button>
      </div>
      </Link>
    </div>
  )
}

export default AppleCardDone;