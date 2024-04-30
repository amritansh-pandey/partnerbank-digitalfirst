import React, { useState } from 'react';
import './style.css'
import RewardCardImage from '../../assets/images/digital-card.png'
import Toggle from '../Toggle'
import CheckWhite from '../../assets/images/check-white.svg'

function RewardInfoCard2() {

    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='reward-info-card-container'>

            <div className='points-cash-card-container'>

                <div className='points-cash-container'>
                    <div className='points-container'>
                        <div>
                            <span className='caption'>Points</span>
                        </div>
                        <div>
                            <span className='subheading3'>4,046</span>
                        </div>
                    </div>
                    <div className='cash-equivalent-container'>
                        <div>
                            <span className='caption'>Cash equivalent</span>
                        </div>
                        <div>
                            <span className='subheading3'>$40.46</span>
                        </div>
                    </div>
                </div>
                <div className='reward-card-image-container'>
                    <img src={RewardCardImage} alt='card-image' className='reward-card-image' />
                </div>


            </div>

            <div className='pay-with-points-container'>
                <div>
                    <span className='title3'>Pay with points</span>
                </div>
                <div>
                    <Toggle isChecked={isChecked} onToggle={handleToggle} />
                </div>
            </div>

            <div className='all-purchase-next-purchase-container'>
                <div className='pill-container-filled'>
                    <div className='check-icon'>
                        <img src={CheckWhite} alt='check' className='check-icon' />
                    </div>
                    <div>
                        <span>All purchases</span>
                    </div>
                </div>

                <div className='pill-container'>
                    <div>
                        <span>Next purchase</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RewardInfoCard2