import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import { Link } from 'react-router-dom';
import ScanID  from '../../assets/images/scan-photo.png'
import VideoScan  from '../../assets/images/record-video.png'

const ScanInstruction = ({ brand, theme, lang = "en" }) => {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);
  


  return (
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />

      <div className='title-container1 text-center'>
        <span className='title3'>Let's confirm it's really you</span>
      </div>

      <div className='sub-title-container1 text-center'>
        <span className='body1'>To help prevent fraud and keep you safe, we need to verify your identity in two simple steps </span>
      </div>

      <div className='intruction-container'>
        <div className='intruction-image-container'>
        <img src={ScanID} alt="scan-photo" className='photo-id'/>
    
        </div>
        <div className='text-center'>
          <span className='body3'>Scan your photo ID</span>
        </div>
      </div>

      <div className='intruction-container'>
        <div className='intruction-image-container'>
        <img src={VideoScan} alt="record-video" className='record-video'/>
      
        </div>
        <div className='text-center'>
          <span className='body3'>Record a video selfie</span>
        </div>
      </div>
      <div  className='text-center'>
      <Link to="/scan-photo-id" style={{ textDecoration: "none" }}>
                        <div className='bottom-button-container'>
                            <button className='primary-button-medium button-text-white'>
                                Next
                            </button>
                        </div>

                    </Link>
      </div>
   
    </div>
  );
}

export default ScanInstruction;