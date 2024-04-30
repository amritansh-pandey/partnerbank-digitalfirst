import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import VideoSelfieCameraImage from '../../assets/images/video-selfie.png';

const VideoSelfieRecording = () => {
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
        <span className='title3'>Record a video selfie</span>
      </div>
                <div style={{height: "64px"}}></div>
                <div className='mt-64 getting-started-image-container'>
                <img src={VideoSelfieCameraImage} alt="photo-id"/>
                
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">We need a short video selfie to help us match your face with your photo ID.
                    </span>
<div style={{height: "24px"}}></div>
                    <span className="body1">We'll walk you through what's needed. No hats or sunglasses please.
                    </span>
                </div>

     

                <div className='mt-56'>
                <div className='scan-photo-id-caption-container'>
                    <span className="caption">By continuing, you agree to the use of your facial biometrics to verify your identity.</span> 
                </div>
                    <Link to="/video-selfie-camera" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Verify yourself"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoSelfieRecording;