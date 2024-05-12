import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Southbank from '../../assets/images/south-bank.png'
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import Close from '../../assets/images/x-mark.svg'
import Loader from "../../assets/animation/Loader.json";
import Lottie from "lottie-react";
import SMSAlert from '../../components/SMSAlert';

function AddMoneyOTP() {

    const [showAlert, setShowAlert] = useState(true);
    
    const navigate = useNavigate();
    
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);



    useEffect(() => {
        const navigationTimeout = setTimeout(() => {
            navigate("/add-money-otp-filled", { replace: true });
        }, 3000);

        return () => {
            clearTimeout(navigationTimeout);
        };
    }, [navigate]);


    return (
        <div>
            <TopNavigation4
                leftIcon={<img src={Close} alt="photo-id" className='' />}
                pageTitle={"Verification"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='south-bank-logo-container'>
                    <img src={Southbank} alt="photo-id" className='southbank-logo' />
                </div>


                <div className='southbank-otp-container'>
                    <div>
                        <span className='subheading2'>2-step verification</span>
                    </div>
                    <div>
                        <span className='body1'>Enter the 6-digit code sent to the phone number ending in <span className='subheading2'>3456</span></span>
                    </div>

                    <div className='otp-number-container'></div>

                    <div className='otp-button-container'>
                        <span>Continue</span>
                    </div>

                    <div className='otp-text-button-container'>
                        <span>Resend OTP</span>
                    </div>
                </div>


                <div className='otp-payment-info'>
                    <div><span>Merchant: PartnerBank</span></div>
                    <div><span>Amount: $1,000</span></div>
                    <div><span>Date: 02/05/2024</span></div>
                    <div><span>Card number: •••• •••• •••• 3456</span></div>
                </div>
                <div>
                <SMSAlert message_title="South Bank" message_text="Use verification code 123-456 within 10 minutes" onClose={() => setShowAlert(false)} initialSlideIn={showAlert} />
                </div>
            </div>
        </div>
    );
}

export default AddMoneyOTP;
