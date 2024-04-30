import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import Lottie from "lottie-react";
import DoneAnimation from "../../assets/animation/LoadingDone.json";
import FullHeightBottomSheet from '../../components/BottomSheet/FullHeightBottomSheet';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';

const UploadingVideo = ({ brand, theme, lang = "en" }) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [titleText, setTitleText] = useState('Uploading video');
    const [hideBody1, setHideBody1] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);

        // Change title3 content after 3 seconds
        const titleChangeTimeout = setTimeout(() => {
            setTitleText('Video uploaded');
        }, 3000);

        // Hide body1 after 3 seconds
        const bodyHideTimeout = setTimeout(() => {
            setHideBody1(true);
        }, 3000);

      
        const showBottomSheetTimeout = setTimeout(() => {
            setShowBottomSheet(true);
        }, 7000);

        // Clean up timeouts when the component is unmounted
        return () => {
            clearTimeout(titleChangeTimeout);
            clearTimeout(bodyHideTimeout);
            clearTimeout(showBottomSheetTimeout);
        };
    }, []);

    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
            <TopNavigation1 />

            <div className='title-container1 text-center'>
                <span className='title3'>{titleText}</span>
                <div style={{ height: "24px" }}></div>
                <div className='hiding_body_container'>
                    {!hideBody1 && (
                        <span className="body1">This may take a few seconds depending on your internet connection…</span>
                    )}
                </div>
            </div>

            <div style={{ height: "124px" }}></div>
            <div className='animation-container64'>
                <Lottie animationData={DoneAnimation} loop={false} />
            </div>

            <FullHeightBottomSheet show={showBottomSheet} title="Terms and Conditions" setShowBottomSheet={setShowBottomSheet}>
                <div className='full-bottom-sheet-content-container'>
                    <div className='full-bottom-sheet-title-contianer'>
                        <span className='title3'>Digital Debit account contract agreement</span>
                    </div>
                    <div className='full-bottom-sheet-body-container'>
                        <div>
                            <span className='body1'>
                                In consideration of Bank agreeing to make a Card available to the applicant in accordance with the following uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                            <div style={{ height: "16px" }}></div>

                            <div>
                                <span className='body1'>
                                    These Terms supplement, are additional to and are to be read together with:-                                         (a) our bank Cardmembers Agreement; and           (b) the terms and conditions of any other document or agreement governing your relationship with us.
                                </span>
                            </div>


                            <div style={{ height: "16px" }}></div>

                            <div>
                                <span className='body1'>
                                    Supplemental Terms
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>



                    </div>
<div style={{textAlign: "center", marginTop: "24px"}}>
                    <Link to="/create-passcode" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Agree and continue"} />
                    </Link>
                </div>

        </div>
              

            </FullHeightBottomSheet >
        </div >
    );
};

export default UploadingVideo;