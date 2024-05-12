
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationReward from '../../components/BottomNavigation/BottomNavigationReward';
import RedeemPointsList2 from '../../components/RedeemPointsList/RedeemPointsList2';
import RewardInfoCard2 from '../../components/RewardInfoCard/RewardInfoCard2';
import TopNavigation8 from '../../components/TopNavigation/TopNavigation8';
import { useNavigate } from 'react-router-dom';


function RewardRedeemedDone() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);


    const navigate = useNavigate();


    return (
        <div>

            <TopNavigation8
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Rewards"}
                leftIconPath="/old-home"
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <RewardInfoCard2 />

                <div className='bill-list-container'>
                    <div className='tab-list-container'>
                        <div onClick={() => navigate(`/rewards-redeemed2`)}>
                            <div className='Offers-tab2'>
                                <span>Offers</span>
                            </div>
                        </div>
                        <div className='connected-billers-tab2'>
                            <span>Redeem points</span>
                        </div>
                    </div>
                    <div className='redeem-list2-container'>
                    <RedeemPointsList2 />
                </div>
                </div>
                <div style={{ height: "250px" }}></div>
            </div>
            <BottomNavigationReward />




        </div>


    );
}

export default RewardRedeemedDone;
