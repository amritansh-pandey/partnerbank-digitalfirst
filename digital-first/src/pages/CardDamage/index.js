import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import DigitalCardArt from '../../assets/images/card-shadow.png';
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";
import { ChevronLeftIcon } from '../../components/Icons';

const CardDamage = () => {

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
                    <span className='title3'>Damaged or lost card?</span>
                </div>
                <div style={{ marginTop: "16px" }}>
                    <span className='subheading3'>Don't worry, we're here to help!</span>
                </div>
                <div style={{ height: "64px" }}></div>
                <div className='mt-64 getting-started-image-container'>
                    <img src={DigitalCardArt} alt="photo-id" className='digital-card-image' />
                </div>

                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">Tap 'Cancel card' to prevent your current physical card from being used.</span>
                    <div style={{ height: "24px" }}></div>
                    <span className="body1">We will issue you a new card within 3-5 business days. Your digital card will remain unchanged. </span>
                </div>
                <div style={{ height: "48px" }}></div>

                <div style={{ height: "24px" }}></div>

                <CustomHeightBottomSheet
                    show={bottomSheetOpen}
                    title="Confirmation"
                    onClose={handleCloseBottomSheet}
                >
                    <div className='sustainable-cards-pop-up' style={{ marginBottom: "48px" }} >

                        <div>
                            <span className='body1'>Are you sure you want to cancel your physical card ending in 1234? This cannot be undone.</span>
                        </div>
                        <div>
                            <Link to="/card-damage-face-id" style={{ textDecoration: 'none' }}>
                                <button className='primary-button-medium' style={{ margin: "0" }}>
                                    <span className='button-text-white'>Yes, cancel the card</span>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <button onClick={handleCloseBottomSheet} className='text-button-small'>
                                <span className='button-text-primary'>Not now</span>
                            </button>

                        </div>
                    </div>
                </CustomHeightBottomSheet>

                <div onClick={handleOpenBottomSheet}>
                    <PrimaryButtonMedium text={"Cancel card ending in 1234"} />
                </div>
            </div>
        </div>
    );
};

export default CardDamage;
