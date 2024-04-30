
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import './style.css';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import DoneAnimation from "../../assets/animation/LoadingDone.json";
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';



function RewardRedeemed() {
    const [isChecked, setIsChecked] = useState(false);


    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);






    return (
        <div>
            <TopNavigation4
                pageTitle={"Confirmation"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`} >




                <div style={{ height: "124px" }}></div>
                <div className='animation-container64'>
                    <Lottie animationData={DoneAnimation} loop={false} />
                </div>
                <div className='reward-redeemed-text-container'>
                    <div>
                        <span className='title1'>Redemption successful</span>
                    </div>


                </div>

                <div style={{ textAlign: "center", marginTop: "128px" }}>
                    <Link to="/rewards-redeemed" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Done"} />
                    </Link>
                </div>



            </div>
        </div>

    );
}

export default RewardRedeemed;
