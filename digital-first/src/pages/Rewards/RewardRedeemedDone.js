
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationReward from '../../components/BottomNavigation/BottomNavigationReward';
import Tab from '../../components/Tab'
import OffersList from '../../components/OfferList';
import RedeemPointsList2 from '../../components/RedeemPointsList/RedeemPointsList2';
import RewardInfoCard2 from '../../components/RewardInfoCard/RewardInfoCard2';


function RewardRedeemedDone() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    const tabs = ['Offers', 'Redeem points'];

    const tabContent = {
        'Offers': <OffersList />,
        'Redeem points': <RedeemPointsList2 />,
    };


    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Rewards"}
            />
           
                <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                    <RewardInfoCard2 />

                    <div className='bill-list-container'>
                        <Tab tabs={tabs} defaultTab="Offers" content={tabContent} onTabChange={(tab) => console.log(`Switched to ${tab}`)} />

                    </div>
<div style={{height: "250px"}}></div>
                </div>
                <BottomNavigationReward />




            </div>

       
    );
}

export default RewardRedeemedDone;
