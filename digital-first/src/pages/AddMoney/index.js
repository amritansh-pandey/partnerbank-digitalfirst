import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import AddMoneyOptions from '../../components/AddMoneyOptions';

function AddMoney() {


    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Choose how to add money"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                    <AddMoneyOptions />
        </div>  
        </div>
    );
}

export default AddMoney;
