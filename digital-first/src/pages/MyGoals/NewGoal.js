import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import HouseIcon from '../../assets/images/home.svg';
import CarIcon from '../../assets/images/car.svg';
import Fork from '../../assets/images/fork.svg';
import Shopping from '../../assets/images/shopping-bag.svg';
import Plane from '../../assets/images/plane.svg';
import Education from '../../assets/images/building-library.svg';
import Heart from '../../assets/images/heart.svg';
import Phone from '../../assets/images/device-phone-mobile.svg';
import Game from '../../assets/images/game.svg';
import Calendar from '../../assets/images/calendar-days-active.svg';
import ChevronDown from '../../assets/images/chevron-down-black.svg';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../../components/TextFields/TextField';
import DisabledButtonMedium from '../../components/Buttons/DisabledButtonMedium';

function NewGoal() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/newgoal2", { replace: true });
      }, 3000);
    }, []);


    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Create a new goal"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='new-goal-main-container'>

                    <div>
                        <TextField
                            label={"What are you saving for?"}
                            value={"Latest Smartphone"} />
                    </div>


                    <div className='select-category-container'>
                        <span className='subheading3'>Select a category</span>
                        <div className='category-item-container'>

                            <div className='category-item'>
                                <img src={HouseIcon} className='icon20' />
                                <span className='body4'>Property</span>
                            </div>

                            <div className='category-item'>
                                <img src={Shopping} className='icon20' />
                                <span className='body4'>Shopping</span>
                            </div>

                            <div className='category-item'>
                                <img src={Plane} className='icon20' />
                                <span className='body4'>Travel</span>
                            </div>

                            <div className='category-item'>
                                <img src={Heart} className='icon20' />
                                <span className='body4'>Health</span>
                            </div>

                            <div className='category-item'>
                                <img src={Fork} className='icon20' />
                                <span className='body4'>Special Nights</span>
                            </div>

                            <div className='category-item'>
                                <img src={CarIcon} className='icon20' />
                                <span className='body4'>Automobiles</span>
                            </div>

                            <div className='category-item'>
                                <img src={Education} className='icon20' />
                                <span className='body4'>Education</span>
                            </div>

                            <div className='category-item'>
                                <img src={Phone} className='icon20' />
                                <span className='body4'>Latest tech</span>
                            </div>

                            <div className='category-item'>
                                <img src={Game} className='icon20' />
                                <span className='body4'>LEntertainment</span>
                            </div>


                        </div>
                    </div>

                    <div className='goal-info-container'>
                        <div className='mt-32'>
                            <TextField
                                label={"How much do you want to save?"}
                                value={""} />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"Starting goal contribution"}
                                value={""} />
                        </div>


                        <div className='mt-32' style={{ position: "relative" }}>
                            <TextField
                                label={"Target completion date"}
                                value={""}
                            />

                            <div className='text-field-icon'>
                              
                                    <img src={Calendar} className='' />
                                
                            </div>
                        </div>

                        <div className='mt-32' style={{ position: "relative" }}>
                            <TextField
                                label={"Contribution frequency"}
                                value={""}
                            />

                            <div className='text-field-icon'>
                                
                                    <img src={ChevronDown} className='' />
                              
                            </div>
                        </div>

                       

                    </div>


                    <div style={{textAlign: "center", marginBottom: "16px"}}>
                    <DisabledButtonMedium
                        text={"Continue"} />
                </div>
                </div>


                <div style={{ height: "150px" }}></div>
            </div>





        </div>


    );
}

export default NewGoal





