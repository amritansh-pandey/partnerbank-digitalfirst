import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import IDFront from '../../assets/images/id-front.png';
import IDBack from '../../assets/images/id-back.png';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';

const CameraScanID = () => {
  const videoRef = useRef();
  const [isBackCamera, setIsBackCamera] = useState(true);
  const [showBackSide, setShowBackSide] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let stream = null;

    const openCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: isBackCamera ? 'environment' : 'user' },
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    openCamera();

    const timeoutId = setTimeout(() => {
      setShowBackSide(true);
    }, 3000);

    return () => {
      // Stop the media stream when component unmounts or navigates away
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigate("/home-address", { replace: true });
    }, 8000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, [navigate]);

  const toggleCard = () => {
    setShowBackSide(prev => !prev);
  };

  return (
    <div id="camera-container">
      <div className='top-navigation-camera'>
        <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-white" />} />
      </div>

      <video ref={videoRef} autoPlay playsInline id="camera" />

      <div className="overlay" />
      <div className='title-container-camera'>
        <div className='title-container1 text-center camera-text'>
          <span className='title3 camera-text'>
            {showBackSide
              ? 'Now scan the back of your photo ID'
              : 'Scan the front of your photo ID'}
          </span>
        </div>
      </div>
      <div className='id-card-container' onClick={toggleCard}>
        <div className={`id-card ${showBackSide ? 'flipped' : ''}`}>
          <div className='scanning-animation'></div>
          <img
            src={showBackSide ? IDBack : IDFront}
            alt="idcard"
            className='id-card'
          />
        </div>

        <div className='camera-caption-container'>
          <span className='caption' style={{ color: "#fff" }}>Position your ID inside the frame</span>
        </div>
      </div>

      <div className='mt-56 camera-button-container'>
        <Link to="/home-address" style={{ textDecoration: 'none' }}>
          <PrimaryButtonMedium text={'Scan'} />
        </Link>
      </div>
    </div>
  );
};

export default CameraScanID;
