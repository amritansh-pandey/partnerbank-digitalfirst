import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationReward from '../../components/BottomNavigation/BottomNavigationReward';
import AddNewButton from '../../components/Buttons/AddNewButton';
import SavingGoalCard from '../../components/SavingGoalCard';

function MyGoals() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);



    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Rewards"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='add-new-button-background'>
                    <AddNewButton
                        title={'Create a new goal'}
                    />
                </div>

                <div>
                    <SavingGoalCard />
                </div>

            </div>
            <BottomNavigationReward />




        </div>


    );
}

export default MyGoals





