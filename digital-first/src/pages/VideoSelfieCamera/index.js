import React, { useEffect, useRef } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';

const VideoSelfieCamera = () => {
  const videoRef = useRef();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();
  }, []);

  return (
    <div className='card-scanner-camera'>
      <div className='top-navigation-camera'>
        <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-white" />} />
      </div>

      <div className='title-container-camera'>
        <div className='title-container1 text-center'>
          <span className='title3 video-camera-text'>
            Position your face in the oval
          </span>
        </div>
        <div className='video-caption-container'>
          <span className='caption' style={{ color: "#fff" }}>Scan when you’re ready</span>
        </div>
      </div>

      <div className='mt-56 video-button-container'>
        <Link to="/transactions" style={{ textDecoration: 'none' }}>
          <PrimaryButtonMedium text={'Scan'} />
        </Link>
      </div>

      <div className="face-recognition-container">
        <div className='overlay'>
          <div className='inverse-clip'></div>
        </div>
        <video ref={videoRef} autoPlay playsInline id="video" />
      </div>
    </div>
  );
};

export default VideoSelfieCamera;