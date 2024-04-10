import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import AddNewButton2 from '../../components/Buttons/AddNewButton/Addbutton2';
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
                pageTitle={"My saving goals"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='add-new-button-background'>

                    <AddNewButton2 
                     title={'Create a new goal'}
                     />
                   
                </div>

                <div>
                    <SavingGoalCard />
                </div>

            </div>
            <BottomNavigationDefault />




        </div>


    );
}

export default MyGoals





