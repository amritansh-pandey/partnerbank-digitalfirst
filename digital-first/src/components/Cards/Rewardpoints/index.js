import React from 'react'
import '../style.css'
import './style.css'
import Rewards from '../../../assets/images/rewards.png'


function Rewardpoints() {

    return (
        <div className='card-container reward_space'>
            <div className='world_card'>
                <img src={Rewards} alt="world card" className='reward_image' />
            </div>

            <div className='world_card_text_container'>
                <div>
                    <span className='body3'>My reward points</span>
                </div>
                <div>
                    <span className='subheading1'>8,096 pts</span>
                </div>
                  </div>
        </div>
    )
}


export default Rewardpoints;