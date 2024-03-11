import React, { useState } from 'react';
import './style.css'
import BellAlert from '../../assets/images/bell-alert.svg'
import Toggle from '../Toggle'
import CheckWhite from '../../assets/images/check-white.svg'

function BillInfoCard() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='reward-info-card-container'>

            <div className='points-cash-card-container'>

                <div className='points-cash-container'>
                <div className='reward-card-image-container'>
                    <img src={BellAlert} alt='card-image' className='bill-logo' />
                </div>


                    <div className='cash-equivalent-container'>
                        <div>
                            <span className='Body1'>Cash equivalent</span>
                        </div>
                        <div>
                            <span className='caption'>$80.96</span>
                        </div>
                    </div>
                </div>
                <div className='reward-card-image-container'>
                    <img src={BellAlert} alt='card-image' />
                </div>


            </div>

            <div className='pay-with-points-container'>
                <div>
                    <span className='title3'>Auto pay</span>
                </div>
                <div>
                    <Toggle isChecked={isChecked} onToggle={handleToggle} />
                </div>
            </div>

     


        </div>
    )
}

export default BillInfoCard