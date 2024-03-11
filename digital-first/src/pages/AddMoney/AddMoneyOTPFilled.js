import React from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import './style.css';
import './style.css';
import { Link } from 'react-router-dom';
import Southbank from '../../assets/images/south-bank.png'
import Close from '../../assets/images/x-mark.svg'


function AddMoneyOTPFilled() {


    return (
        <div>
            <TopNavigation4
                leftIcon={<img src={Close} alt="photo-id" className='' />}
                pageTitle={"Verification"}
            />

            <div>

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

                    <div className='otp-number-container'>
                        <span>123-456</span>
                    </div>
                    <Link to="/add-money-done" style={{ textDecoration: 'none' }}>
                        <div className='otp-button-container'>
                            <span>Continue</span>
                        </div>
                    </Link>


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

                </div>
            </div>
        </div>
    );
}

export default AddMoneyOTPFilled;
