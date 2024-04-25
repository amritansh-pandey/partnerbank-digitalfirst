import React from 'react';
import './style.css'
import AppleDone from '../../assets/images/apple-done.svg'
import WalletIcon from '../../assets/images/wallet-icon.png'
import { Link, useNavigate } from 'react-router-dom';



function AppleCardAdded2() {

  const navigate = useNavigate();

  const handleLeftIconClick = () => {
    // Navigate back to the previous screen
    navigate(-1);
  };
  return (
    <div>



      <Link to="/apple-wallet-card-added-done2" style={{ textDecoration: "none" }}>
        <div className='apple-navigation-right'><span>Done</span></div>
      </Link>



      <div className='wallet-title-container-icon'>
        <span>Card Added</span>
        <img src={AppleDone} className='icon24' alt='wallet-banner' />
      </div>







      <div style={{ height: "48px" }}></div>

      <div className='apple-waller-info-container'>
        <div className='apple-waller-info-item'>
          <span className='subheading2'>Name</span>
          <span style={{ color: "#c8c8c8" }}>Mira Jansen</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Card Number</span>
          <span style={{ color: "#c8c8c8" }}>5412 7512 3412 8832</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Expiry Date</span>
          <span style={{ color: "#c8c8c8" }}>01/29</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Security Code</span>
          <span style={{ color: "#c8c8c8" }}>123</span>
        </div>
      </div>



      <div className='wallet-apple-logo-container'>
        <img src={WalletIcon} className='wallet-apple-logo' alt='wallet-banner' />
      </div>

      <div className='wallet-text-container'>
        <span className='caption'>Card-related information, location, device settings and device used patterns will be sent to Apple and may be shared together with account information with your card issuer or bank to set up Apple Pay. <span style={{ color: "#2F7CF6" }}>See how your data is managed...</span></span>
      </div>


    </div>
  )
}

export default AppleCardAdded2;