import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import DialPad from '../../components/Dialpad';



function ConfirmPasscode() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);



    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/use-faceid", { replace: true });
        }, 4000);
    }, []);



    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            changeOtpInputClass();
        }, 2000);


        return () => clearTimeout(timeoutId);
    }, []);

    const changeOtpInputClass = () => {
        const otpInputs = document.querySelectorAll('.passcode-input');
        otpInputs.forEach((otpInput) => {
            otpInput.classList.add('passcode-filled');  // Change class name to 'passcode-filled'
            otpInput.classList.remove('passcode-input'); // Remove 'passcode-input'
        });
    };
    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
            <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />

            <div className='title-container1 text-center'>
                <span className='title3'>Confirm passcode</span>
            </div>



            <div className='passcode-container'>
                <div className='passcode-input'></div>
                <div className='passcode-input'></div>
                <div className='passcode-input'></div>
                <div className='passcode-input'></div>
                <div className='passcode-input'></div>
                <div className='passcode-input'></div>
            </div>

            <div className='sub-title-container-pascode text-center'>
                <span className='body1'>Re-enter your passcode.</span>
            </div>
            <DialPad />

        </div>
    );
}

export default ConfirmPasscode;