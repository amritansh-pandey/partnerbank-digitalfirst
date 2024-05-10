import React from 'react';
import './style.css'
import WalletBanner from '../../assets/images/wallet-banner.png'
import AppleLogo from '../../assets/images/apple-pay-logo.png'
import WalletIcon from '../../assets/images/wallet-icon.png'
import { Link, useNavigate } from 'react-router-dom';



function AddAppleCard() {

  const navigate = useNavigate();

  const handleLeftIconClick = () => {
  
    navigate("/manage-card");
  };
  return (
    <div>

      <div className='apple-navigation-left' onClick={handleLeftIconClick}><span>Cancel</span></div>

      <Link to="/apple-wallet-terms" style={{ textDecoration: "none" }}>
        <div className='apple-navigation-right'><span>Next</span></div>
      </Link>



      <div className='wallet-title-container'>
        <span>Add Card to Apple Pay</span>
      </div>

      <div className='wallet-subtitle-container'>
        <span>Your card will be available in wallet.</span>
      </div>

      <div className='apple-waller-info-container'>
        <div className='apple-waller-info-item'>
          <span className='subheading2'>Name</span>
          <span style={{color: "#919191"}}>Mira Jansen</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Card Number</span>
          <span style={{color: "#919191"}}>5412 7512 3412 8832</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Expiry Date</span>
          <span style={{color: "#919191"}}>01/29</span>
        </div>

        <div className='apple-waller-info-item'>
          <span className='subheading2'>Security Code</span>
          <span style={{color: "#919191"}}>123</span>
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

export default AddAppleCard;