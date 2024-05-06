import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import SMSAlert from '../../components/SMSAlert';

function ForgotPin() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);



  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/create-pin", { replace: true });
    }, 6000);
  }, []);



  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
  
    const timeoutId = setTimeout(() => {
      changeOtpInputClass();
    }, 3000);

 
    return () => clearTimeout(timeoutId);
  }, []);

  const changeOtpInputClass = () => {
  
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((otpInput) => {
      otpInput.classList.add('otp-input-filled'); 
      otpInput.classList.remove('otp-input'); 
    });
  };

  return (
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />

      <div className='title-container1 text-center'>
        <span className='title3'>Check your messages</span>
      </div>

      <div className='sub-title-container1 text-center'>
        <span className='body1'>Enter the code sent to</span>
      </div>
      <div className='sub-title-container1 text-center'>
        <span className='body3'>+1-468-272-6821</span>
      </div>

      <div className='otp-container'>
        <div className='otp-input'></div>
        <div className='otp-input'></div>
        <div className='otp-input'></div>
        <div className='otp-input'></div>
        <div className='otp-input'></div>
        <div className='otp-input'></div>
      </div>

      <div className='sub-title-container1 text-center primary-text'>
       

       
            <button className='text-button-small button-text-primary space8'>
            Resend SMS OTP
            </button>
  
      </div>

      <SMSAlert message_title="OTP Verification" message_text="Use verification code 123-456 within 10 minutes" onClose={() => setShowAlert(false)} initialSlideIn={showAlert} />
    </div>
  );
}

export default ForgotPin;