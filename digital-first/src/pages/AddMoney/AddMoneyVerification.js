import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import CardActive from '../../assets/images/credit-card-active.svg'
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import Close from '../../assets/images/x-mark.svg'
import Loader from "../../assets/animation/Loader.json";
import Lottie from "lottie-react";


function AddMoneyVerification() {

    const navigate = useNavigate();
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);



    useEffect(() => {
        const navigationTimeout = setTimeout(() => {
          navigate("/add-money-otp", { replace: true });
        }, 2000);
    
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

                <div style={{height: "256px"}}></div>
                <div className='animation-container128'>
                    <Lottie animationData={Loader} loop={true} />
                </div>
            </div>
        </div>
    );
}

export default AddMoneyVerification;
