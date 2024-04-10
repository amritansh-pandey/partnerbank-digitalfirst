import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TextField from '../../components/TextFields/TextField';
import { ChevronLeftIcon } from '../../components/Icons';
import TopNavigation5 from '../../components/TopNavigation/TopNavigation5';

function HomeAddress() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation5 leftIcon={<ChevronLeftIcon size={24} className="icon-black" />} />
            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='home-address-container'>
                    <div className='text-center'>
                        <span className='title3'>Confirm your details</span>
                    </div>

                    <div className='sub-title-container1 text-center' style={{ margin: "32px 70px" }}>
                        <span className='body1'>Make sure this information is correct and up-to-date</span>
                    </div>


                    <div className='form-container margin24'>



                        <div className='mt-32'>
                            <TextField
                                label={"First Name"}
                                value={"Mira"} />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"Last Name"}
                                value={"Jansen"} />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"Address line 1"}
                                value={"123 Main street"} />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"Address line 2"}
                            />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"City"}
                                value={"New York"} />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"State"}
                                value={"NY"} />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"Zipcode"}
                                value={"10001"} />
                        </div>


                    </div>
                    <div className='mt-32'>
                        <Link to="/video-selfie" style={{ textDecoration: "none" }}>
                            <PrimaryButtonMedium text={"Next"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAddress;