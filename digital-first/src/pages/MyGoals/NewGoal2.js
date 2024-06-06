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
import WhitePhone from '../../assets/images/device-phone-mobil-whitee.svg';
import Game from '../../assets/images/game.svg';
import Calendar from '../../assets/images/calendar-days-active.svg';
import ChevronDown from '../../assets/images/chevron-down-black.svg';
import { Link } from 'react-router-dom';
import TextField from '../../components/TextFields/TextField';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';

function NewGoal2() {
 



    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Create a new goal"}
            />

            <div className='page-without-animation'>

                <div className='new-goal-main-container'>

                    <div style={{marginTop: "16px"}}>
                        <TextField
                            label={"What are you saving for?"}
                            value={"Latest smartphone"} />
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

                            <div className='category-item-active'>
                                <img src={WhitePhone} className='icon20' />
                                <span>Latest tech</span>
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
                            value={"€1200"}
                        />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"Starting goal contribution"}
                                value={"€100"} />
                        </div>


                        <div className='mt-32' style={{ position: "relative" }}>
                            <TextField
                                label={"Target completion date"}
                                value={"4 Mar 2025  "}
                            />

                            <div className='text-field-icon'>
                              
                                    <img src={Calendar} className='' />
                                
                            </div>
                        </div>

                        <div className='mt-32' style={{ position: "relative" }}>
                            <TextField
                                label={"Contribution frequency"}
                                value={"Monthly"}
                            />

                            <div className='text-field-icon'>
                                
                                    <img src={ChevronDown} className='' />
                              
                            </div>
                        </div>

                       

                    </div>


                    <div style={{textAlign: "center", marginBottom: "16px"}}>
                    <Link to="/goalcreated" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium
                        text={"Continue"} />
                        </Link>
                </div>
                </div>


                <div style={{ height: "150px" }}></div>
            </div>





        </div>


    );
}

export default NewGoal2





