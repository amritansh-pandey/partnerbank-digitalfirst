import React from 'react';
import './style.css'
import WalletBanner from '../../assets/images/wallet-banner.png'
import AppleLogo from '../../assets/images/apple-pay-logo.png'
import WalletIcon from '../../assets/images/wallet-icon.png'
import BlueArrow from '../../assets/images/blue-chevron-left.svg'
import { Link, useNavigate } from 'react-router-dom';

function AppleWallet2() {
  const navigate = useNavigate();

  const handleLeftIconClick = () => {
    // Navigate back to the previous screen
    navigate(-1);
  };

  return (
    <div className="wallet-container"> {/* Apply wallet-container class */}
      <div>
        <img src={WalletBanner} className='wallet-banner' alt='wallet-banner' />
      </div>

      <div className='back-arrow-container' onClick={handleLeftIconClick}>
        <span>
          Cancel
        </span>
      </div>
      <div className='wallet-apple-logo-container'>
        <img src={AppleLogo} className='wallet-apple-logo' alt='wallet-banner' />
      </div>

      <div className='wallet-text-container'>
        <span className='subheading1'>Add credit, debit or store cards to Apple Pay to make secure purchases in shops, in apps and on the web.</span>
      </div>

      <div className='wallet-apple-logo-container'>
        <img src={WalletIcon} className='wallet-apple-logo' alt='wallet-banner' />
      </div>

      <div className='wallet-text-container'>
        <span className='caption'>Card-related information, location, device settings and device used patterns will be sent to Apple and may be shared together with account information with your card issuer or bank to set up Apple Pay. <span style={{ color: "#2F7CF6" }}>See how your data is managed...</span></span>
      </div>

      <div style={{height: "72px"}}></div>

      <div className='wallet-button-container'>
        <Link to="/apple-wallet-add-card2" style={{ textDecoration: "none" }}>
          <button className='wallet-button'>Continue</button>
        </Link>
      </div>

    </div>
  )
}

export default AppleWallet2;
