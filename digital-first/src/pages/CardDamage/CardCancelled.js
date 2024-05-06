import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import DigitalCardArt from '../../assets/images/card-shadow.png';
import { ChevronLeftIcon } from '../../components/Icons';

const CardCancelled = () => {

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);


    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
            <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />
            <div className='getting-started-container'>
                <div className='title-container1 text-center'>
                    <span className='title3'>Card cancelled</span>
                </div>
                
                <div style={{ height: "64px" }}></div>
                <div className='mt-64 getting-started-image-container'>
                    <img src={DigitalCardArt} alt="photo-id" className='digital-card-image' />
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">Your physical Partnerbank Debit Card is now cancelled. You can proceed to issue a new card.</span>
                   
                  
                </div>
                <div style={{ height: "148px" }}></div>



               
                <div>
                <Link to="/card-address" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium text={"Request new card"} />
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default CardCancelled;
