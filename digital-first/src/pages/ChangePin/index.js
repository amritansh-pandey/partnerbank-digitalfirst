import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import { ChevronLeftIcon } from '../../components/Icons';
import DigitalCardArt from '../../assets/images/card-shadow.png';
import DialPad from '../../components/Dialpad';
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";
import { Link } from 'react-router-dom';


function ChangePasscode() {

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

            <div className='title-container1 text-center'>
                <span className='title3'>Change card PIN</span>
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
                <span className='body1'>Enter your current card PIN to continue.</span>
                <div className='forgot-button-container'onClick={handleOpenBottomSheet} >
                    <button className="text-button-small-icon button-text-primary" >
                        Forgot card PIN?
                    </button>
                </div>
                <div style={{marginTop: "360px"}}>
                    <Link to="/create-pin" style={{ textDecoration: 'none' }}>
                        <button className='primary-button-medium'>
                            <span className='button-text-white'>Continue</span>
                        </button>
                    </Link>
                </div>
            </div>

            <CustomHeightBottomSheet
                 show={bottomSheetOpen}
                 onClose={handleCloseBottomSheet}
            >
                <div className='forgot-pin-pop-up'>
                    <div><span className='subheading2'>Forgot your card PIN?</span></div>
                    <div>
                        <img src={DigitalCardArt} alt="sustaible" className='forgot-pin-digital-card' />
                    </div>

                    <div>
                        <span className='body1'>To reset the card PIN, first verify your mobile using an One Time Password (OTP)</span>
                    </div>
                    <div>
                        <Link to="/forgot-pin" style={{ textDecoration: 'none' }}>
                            <button className='primary-button-medium'>
                                <span className='button-text-white'>Continue</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </CustomHeightBottomSheet>

            <DialPad />
        </div>
    );
}

export default ChangePasscode;
