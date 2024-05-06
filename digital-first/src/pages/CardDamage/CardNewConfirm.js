import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import DigitalCardArt from '../../assets/images/card-shadow.png';
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";
import { ChevronLeftIcon } from '../../components/Icons';

const CardNewConfrim = () => {

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);

    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setBottomSheetOpen(false);
    };


    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
             <TopNavigation1 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />
            <div className='getting-started-container'>
                <div className='title-container1 text-center'>
                    <span className='title3'>Your new card is on its way</span>
                </div>

                <div style={{ height: "64px" }}></div>
                <div className='mt-64 getting-started-image-container'>
                    <img src={DigitalCardArt} alt="photo-id" className='digital-card-image' />
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">Your new physical card should arrive in 3-5  business days. </span>
                    <div style={{ height: "24px" }}></div>
                    <span className="body1">Your digital card remains unchanged and you can continue to shop as usual. </span>
                </div>
                <div style={{ height: "128px" }}></div>


             

                <Link to="/card-setting-done" style={{ textDecoration: 'none' }}>
                    <PrimaryButtonMedium text={"Done"} />
                    </Link>
            </div>
        </div>
    );
};

export default CardNewConfrim;
