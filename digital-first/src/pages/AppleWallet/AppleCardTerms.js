import React from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';



function AppleCardTerms() {

  const navigate = useNavigate();

  const handleLeftIconClick = () => {
    // Navigate back to the previous screen
    navigate(-1);
  };
  return (
    <div>




      <div className='terms-condition-title-container'>
        <span className='subheading2'>Terms and Conditions</span>
      </div>

      <div className='terms-condition-text-container'>
        <span>
          By adding your card to Apple Wallet, you agree to the following terms and conditions:
        </span>

        <ol>
          <li> <span className='subheading2'>Authorization:</span> You authorize Apple Inc. and its affiliates ("Apple") to securely store and access your card information for the purpose of enabling transactions through Apple Wallet.</li>
          <li> <span className='subheading2'>Security:</span> You authorize Apple Inc. and its affiliates ("Apple") to securely store and access your card information for the purpose of enabling transactions through Apple Wallet.</li>
          <li> <span className='subheading2'>Usage:</span> You authorize Apple Inc. and its affiliates ("Apple") to securely store and access your card information for the purpose of enabling transactions through Apple Wallet.</li>
          <li> <span className='subheading2'>Privacy:</span> You authorize Apple Inc. and its affiliates ("Apple") to securely store and access your card information for the purpose of enabling transactions through Apple Wallet.</li>
          <li> <span className='subheading2'>Updates:</span> You authorize Apple Inc. and its affiliates ("Apple") to securely store and access your card information for the purpose of enabling transactions through Apple Wallet.</li>
        </ol>
      </div>


      <div className='bottom-page-button-container'>      </div>

        <div className='apple-navigation-left-bottom' onClick={handleLeftIconClick}><span>Disagree</span></div>

        <div className='apple-navigation-right-bottom'>
          <Link to="/apple-wallet-card-added" style={{ textDecoration: "none" }}>
            <span style={{ textDecoration: "none" }}>Agree</span>
          </Link>
        </div>


    </div>

  )
}

export default AppleCardTerms;