import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import DigitalCardArt from '../../assets/images/card-shadow.png';
import AppleWallet from '../../assets/images/AddtoAppleWallet.png';
import SustainableIcon from '../../assets/images/sustainable-logo.svg';
import InfoIcon from '../../assets/images/info-black.svg';
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";

const AccountReady = ({ brand, theme, lang = "en" }) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
    useEffect(() => {
        setShouldAnimate(false);
    }, []);

    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const openBottomSheet = () => {
        setShowBottomSheet(true);
    };

    const closeBottomSheet = () => {
        setShowBottomSheet(false);
    };


    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
            <TopNavigation1 />
            <div className='getting-started-container'>
                <div className='title-container1 text-center'>
                    <span className='title3'>Your account is ready</span>
                </div>
                <div style={{ height: "64px" }}></div>
                <div className='mt-64 getting-started-image-container'>
                    <img src={DigitalCardArt} alt="photo-id" className='digital-card-image' />
                </div>
                <div className="" onClick={openBottomSheet}>
                    <div className='sustainable-icon-container'>
                        <div>
                            <img src={SustainableIcon} alt="sustaible" className='sustainable-icon1' />
                        </div>
                        <div className='sustainble-text'>
                            <span>Sustainable Card</span>
                        </div>
                        <div>
                            <img src={InfoIcon} alt="photo-id" className='info-icon-sustainable' />
                        </div>
                    </div>
                </div>
                <div className='mt-32 scan-photo-id-body-container'>
                    <span className="body1">Your new physical card should automatically arrive within 3 to 5 business days.</span>
                    <div style={{ height: "24px" }}></div>
                    <span className="body1">Add your card to Apple Wallet to pay securely online and in-store.</span>
                </div>
                <div style={{ height: "48px" }}></div>
                <div>
                <Link to="/apple-wallet" style={{ textDecoration: "none" }}>
                    <img src={AppleWallet} alt="photo-id" className='apple-wallet' />
                    </Link>
                </div>
                <div style={{ height: "24px" }}></div>

                <CustomHeightBottomSheet
                    show={showBottomSheet}
                    title="Sustainable Card"
                    setShowBottomSheet={closeBottomSheet}
                >
                    <div className='sustainable-cards-pop-up'>
                        <div>
                            <img src={SustainableIcon} alt="sustaible" className='sustainable-icon2' />
                        </div>
                        <div>
                            <span className='body1'>Your account's physical card was made with 100% recycled plastic. This approach yields 40% fewer CO<sub>2</sub> emissions than using new plastic and diverts materials from landfills.</span>
                        </div>
                        <div>
                            <button onClick={closeBottomSheet}  className='primary-button-medium'>
                             <span className='button-text-white'>Got it</span>  
                            </button>

                        </div>
                    </div>
                </CustomHeightBottomSheet>

                <Link to="/new-home" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium text={"Go to my account"} />
                </Link>
            </div>
        </div>
    );
};

export default AccountReady;
