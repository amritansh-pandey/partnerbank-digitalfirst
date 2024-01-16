import React from 'react'
import './style.css'
import Travel from '../../assets/images/travel.png'
import Phone from '../../assets/images/phone.png'
import CircularProgress from '../CircularProgress'
function SavingGoalCard() {
    const completionPercentage = 64;

    return (
        <div>
            <div className='saving-goal-card-container'>
                <div className='saving-goal-image-container'>
                    <img src={Travel} alt='saving-image' className='saving-goal-image' />
                    <div className='saving-goal-title-container'>
                    <span className='saving-goal-title'>Trip to Greece</span>
                </div>
                </div>
               

                <div className='saving-goal-info-container'>
                    <div className='saving-goal-text-container'>
                        <div>
                            <span className='caption'>Amount saved</span>
                        </div>
                        <div>
                            <span className='subheading5'>$900 out of $1,400</span>
                        </div>

                        <div>
                            <span className='body1'>$100 monthly until 03/07/25</span>
                        </div>

                    </div>

                    <div>
                        <CircularProgress value={completionPercentage} />
                    </div>

                    <div className='saving-goal-progress'>

                    </div>

                </div>
            </div>



            <div className='saving-goal-card-container'>
                <div className='saving-goal-image-container'>
                    <img src={Phone} alt='saving-image' className='saving-goal-image' />
                    <div className='saving-goal-title-container'>
                    <span className='saving-goal-title'>Latest phone</span>
                </div>
                </div>
               

                <div className='saving-goal-info-container'>
                    <div className='saving-goal-text-container'>
                        <div>
                            <span className='caption'>Amount saved</span>
                        </div>
                        <div>
                            <span className='subheading5'>$400 out of $600</span>
                        </div>

                        <div>
                            <span className='body1'>$50 monthly until 30/12/23</span>
                        </div>

                    </div>

                    <div>
                        <CircularProgress value={completionPercentage} />
                    </div>

                    <div className='saving-goal-progress'>

                    </div>

                </div>
            </div>




            
        </div>
    )
}

export default SavingGoalCard