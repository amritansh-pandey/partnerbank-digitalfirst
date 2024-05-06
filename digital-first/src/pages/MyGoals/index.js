import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import AddNewButton2 from '../../components/Buttons/AddNewButton/Addbutton2';
import { Link, useNavigate } from 'react-router-dom';
import savingGoals from '../../assets/data/goal';
import CircularProgress from '../../components/CircularProgress';

function MyGoals() {
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const navigate = useNavigate();

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
                    <AddNewButton2 title={'Create a new goal'} />
                </div>

                {savingGoals.slice(1).map((item, index) => ( // Exclude the first data set
                    <div key={index}>
                        <Link to={`/goaldetail/${index}`} style={{ textDecoration: "none" }}>
                            <div className='saving-goal-card-container'>
                                <div className='saving-goal-title-container'>
                                    <img src={item.icon} alt="Icon" />
                                    <span className='saving-goal-title'>{item.title}</span>
                                </div>

                                <div className='saving-goal-info-container'>
                                    <div className='saving-goal-text-container'>
                                        <div>
                                            <span className='caption'>Amount saved</span>
                                        </div>
                                        <div>
                                            <span className='subheading5'>{item.amountSaved} out of {item.totalAmount}</span>
                                        </div>
                                        <div>
                                            <span className='body1'>{item.monthlyContribution} monthly until {item.endDate}</span>
                                        </div>
                                    </div>

                                    <div style={{ textDecoration: "none" }}>
                                        <CircularProgress value={item.completionPercentage} />
                                    </div>
                                    <div className='saving-goal-progress'></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <div style={{height: "200px"}}></div>
            </div>
            <BottomNavigationDefault />
        </div>
    );
}

export default MyGoals;
