import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import SemiCircleProgressBar from '../../components/SemiCircleProgressbar';
import Rocket from '../../assets/images/rocket-launch.svg';
import Clock from '../../assets/images/clock.svg';
import Notes from '../../assets/images/banknotes-active.svg';
import Withdraw from '../../assets/images/arrow-down-tray.svg';
import Trash from '../../assets/images/trash-active.svg';
import savingGoals2 from '../../assets/data/goal2';


function GoalDetails2() {

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);


    const { id } = useParams();
    const goal = savingGoals2[id];

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"My saving goal"}
            />


            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='goal-detail-main-container'>
                    <div style={{ textAlign: "center" }}>
                        <span className='title3'>{goal.title}</span>
                    </div>

                    <div className='semi-circle-progressbar-container'>
                        <SemiCircleProgressBar percentage={goal.completionPercentage} amount={goal.amountSaved} />
                        <div className='goal-start-end-month'>
                            <span className='caption'>{goal.startMonth}</span>
                            <span className='caption'>{goal.endMonth}</span>
                        </div>
                    </div>

                    <div className='contribution-info-container'>
                        <div className='contribution-text-container'>
                            <span className='caption'>Contribution left</span>
                            <span className='title3'>{goal.amountRemaining}</span>
                        </div>
                        <div style={{ height: "48px", width: "2px", backgroundColor: "#F0F0F0" }}></div>
                        <div className='contribution-text-container'>
                            <span className='caption'>Target amount</span>
                            <span className='title3'>{goal.totalAmount}</span>
                        </div>
                    </div>

                    <div className='monthly-saving-container'>
                        <span className='body1'>{goal.monthlyContribution} </span>
                        <span className='body1'>every month until </span>
                        <span className='body1'>{goal.endDate}</span>
                    </div>

                    <div className='rocket-text'>
                        <img src={Rocket} />
                        <span className='caption'>Great! Based on your regular contribution, you are likely to reach your goal in 9 months</span>
                    </div>
                    <div className='action-buttons-container'>
                        <div className='action-button'>
                            <img src={Clock} />
                            <span>Transactions</span>
                        </div>

                        <div className='action-button'>
                            <img src={Notes} />
                            <span>Contribute</span>
                        </div>

                        <div className='action-button'>
                            <img src={Withdraw} />
                            <span>Withdraw</span>
                        </div>

                        <div className='action-button'>
                            <img src={Trash} />
                            <span>Delete</span>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    );
}

export default GoalDetails2;
