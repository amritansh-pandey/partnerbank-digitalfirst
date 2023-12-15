import React from 'react'

import './style.css'
import { SendMoneyIcon, PayBillIcon, RewardIcon, GoalIcon } from '../Icons'

function CircelNavigation() {
  return (
    <div className='circel_container'>
        <div className='circles'>
            <div className='circle-button'>
                <SendMoneyIcon size={24} className="icon-white" />
            </div>
            <div className='circle-text'>
                <span>Send money</span>
            </div>
        </div>

        <div className='circles'>
            <div className='circle-button'>
                <PayBillIcon size={24} className="icon-white" />
            </div>
            <div className='circle-text'>
                <span>Pay bills</span>
            </div>
        </div>

        <div className='circles'>
            <div className='circle-button'>
                <RewardIcon size={24} className="icon-white" />
            </div>
            <div className='circle-text'>
                <span>My rewards</span>
            </div>
        </div>

        <div className='circles'>
            <div className='circle-button'>
                <GoalIcon size={24} className="icon-white" />
            </div>
            <div className='circle-text'>
                <span>My goals</span>
            </div>
        </div>
       
    </div>
  )
}

export default CircelNavigation