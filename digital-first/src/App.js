import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";
import AppRoutes from './AppRoutes';
import LandingPage from './LandingPage';
import MCLogo from './assets/images/mc-logo.svg';
import ShareIcon from './assets/images/ios-share.svg';
import ArrowDown from './assets/images/arrow-down.svg';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 768px)").matches);
  const [showAddToHomeScreen, setShowAddToHomeScreen] = useState(!window.matchMedia("(display-mode: standalone)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAddToHomeScreenClick = () => {
    setShowAddToHomeScreen(false);
  };

  return (
    <Router>
      {!isDesktop && showAddToHomeScreen ? (
        <div className='mweb-container'>
          <div className='mastercard-logo'>
            <img src={MCLogo} className='mastercard-logo' />
          </div>
          <div className='mweb-info-container'>
            <span className='title4'>Digital First</span>
            <div style={{ height: "0px" }}></div>
            <div style={{width: "60%" , margin: "0 auto"}}>
            <span className='title3'>Experience the app on your phone</span>
          </div></div>
          <div style={{ height: "1px", backgroundColor: "#C8C8C8" }}></div>
          <div className='mweb-info-container'>
            <span className='subheading3' onClick={handleAddToHomeScreenClick} >
            This app requires iPhone 7 or above with the latest iOS and must be opened using Safari.
            </span>
            <span className='body1'>
            When prompted in-app, please grant camera access by selecting 'Allow' in the permission prompt for the full app experience.  It’s important to note that the Digital First app doesn’t collect any data or store/transmit any videos or images captured by the camera.
            </span>
           
          </div>
          <div className='share-icon-text-container'>
            <span className='title3'>You are just two taps away:</span>
            <div style={{ height: "4px" }}></div>
            <div className='share-icon-container'>
              <span className='subheading3'>Tap the</span>
              <img src={ShareIcon} className='share-icon' />
              <span className='subheading3'>icon button below,</span>
            </div>
            <div>
              <span className='subheading3'>then tap “Add to home screen.</span>
            </div>
          </div>
          <div className='arrow-animation-container'>
            <div className='dive'>
              <img src={ArrowDown} alt="Arrow down" />
            </div>
          </div>
        </div>
      ) : (
        isDesktop ? <LandingPage /> : <AppRoutes />
      )}
    </Router>
  );
}

export default App;
