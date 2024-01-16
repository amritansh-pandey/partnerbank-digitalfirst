
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationReward from '../../components/BottomNavigation/BottomNavigationReward';
import RewardInfoCard from '../../components/RewardInfoCard';
import Tab from '../../components/Tab'
import OffersList from '../../components/OfferList';
import RedeemPointsList from '../../components/RedeemPointsList';


function Rewards() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    const tabs = ['Offers', 'Redeem points'];

    const tabContent = {
        'Offers': <OffersList />,
        'Redeem points': <RedeemPointsList />,
    };


    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Rewards"}
            />
           
                <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                    <RewardInfoCard />

                    <div className='bill-list-container'>
                        <Tab tabs={tabs} defaultTab="Offers" content={tabContent} onTabChange={(tab) => console.log(`Switched to ${tab}`)} />

                    </div>

                </div>
                <BottomNavigationReward />




            </div>

       
    );
}

export default Rewards;
