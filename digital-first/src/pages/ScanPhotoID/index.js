import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import data from '../../assets/data/data.json';
import { importImage } from '../../utils';

const ScanPhotoID = ({ brand, theme, lang = "en" }) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
  
    useEffect(() => {
      // Disable animation after the initial render
      setShouldAnimate(false);
    }, []);
    
  
    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
              <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />
            <div className='getting-started-container'>
            <div className='title-container1 text-center'>
        <span className='title3'>Scan your photo ID</span>
      </div>
                <div style={{height: "64px"}}></div>
                <div className='mt-64 getting-started-image-container'>
                <img src={importImage(brand, theme, "photo-id.png")} alt="photo-id"/>
                
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">To complete this step, you'll need your photo ID. This will help us verify your account information.
                    </span>
<div style={{height: "24px"}}></div>
                    <span className="body1">Please find a well-lit area to scan your photo ID. 
                    </span>
                </div>

           
                <div className='mt-56'>
                <div className='scan-photo-id-caption-container'>
                    <span className="caption">By continuing, you agree to use your photo ID to verify your identity.</span> 
                </div>

                    <Link to="/camera-photo-id" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Verify yourself"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ScanPhotoID;