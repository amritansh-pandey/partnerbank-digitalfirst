import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import DigitalCardArt from '../../assets/images/card-shadow.png'
import AppleWallet from '../../assets/images/AddtoAppleWallet.png'

const AccountReady = ({ brand, theme, lang = "en" }) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
  
    useEffect(() => {
      // Disable animation after the initial render
      setShouldAnimate(false);
    }, []);
    
  
    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
              <TopNavigation1  />
            <div className='getting-started-container'>
            <div className='title-container1 text-center'>
        <span className='title3'>Your account is ready</span>
      </div>
                <div style={{height: "64px"}}></div>
                <div className='mt-64 getting-started-image-container'>
                <img src={DigitalCardArt} alt="photo-id" className='digital-card-image'/>
                
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">Your new physical card should automatically arrive within 3 to 5 business days.
                    </span>
<div style={{height: "24px"}}></div>
                    <span className="body1">Add your card to Apple Wallet to pay securely online and in-store.
                    </span>
                </div>
                <div style={{height: "48px"}}></div>
<div>
<img src={AppleWallet} alt="photo-id" className='apple-wallet'/>
</div>
<div style={{height: "24px"}}></div>

             
               
                    <Link to="/new-home" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Go to my account"} />
                    </Link>
            
            </div>
        </div>
    );
};

export default AccountReady;