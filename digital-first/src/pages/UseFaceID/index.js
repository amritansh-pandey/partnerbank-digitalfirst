import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import Lottie from "lottie-react";
import FaceIDPartial from "../../assets/animation/FaceIDPartial.json";
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';




const UseFaceID = ({ brand, theme, lang = "en" }) => {
    const [shouldAnimate, setShouldAnimate] = useState(true);


    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);


    }, []);

    return (
        <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
            <TopNavigation1 />

            <div className='title-container1 text-center'>
                <span className='title3'>Use Face ID</span>

                <div className='hiding_body_container'>

                    <span className="body1">Set up Face ID to experience faster login and safer checkouts</span>

                </div>
            </div>


            <div className='animation-container128'>
                <Lottie animationData={FaceIDPartial} loop={true} />
            </div>
           
            <div style={{ textAlign: "center" }}>
                <Link to="/use-faceid2" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium text={"Set up Face ID"} />
                </Link>
            </div>

            <div style={{ textAlign: "center", marginTop: "8px" }}>
               
                    <div className='text-center primary-text'>
                    <button className='text-button-small button-text-primary space8'>
                    Not now, maybe later
            </button>
                       
                    </div>
               
            </div>

        </div >
    );
};

export default UseFaceID;