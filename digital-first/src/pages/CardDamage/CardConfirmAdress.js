import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TextField from '../../components/TextFields/TextField';
import { ChevronLeftIcon } from '../../components/Icons';
import TopNavigation5 from '../../components/TopNavigation/TopNavigation5';

function CardConfirmAddress() {
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
                        <span className='body1'>New card will be delivered to below address in 3-5 business days.</span>
                    </div>


                    <div className='form-container margin24'>



                      

                        <div className='mt-32'>
                            <TextField
                                label={"Address line 1"}
                                value={"789 Prestige Place"} />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"Address line 2"}
                                value={"Metropolitan Square"} />
                 
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"City"}
                                value={"Paris"} />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"State (optional)"}
                                value={""} />
                        </div>

                        <div className='mt-32'>
                            <TextField
                                label={"Zipcode"}
                                value={"75011"} />
                        </div>


                    </div>
                    <div className='mt-32'>
                        <Link to="/card-new-confirm" style={{ textDecoration: "none" }}>
                            <PrimaryButtonMedium text={"Proceed"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardConfirmAddress;