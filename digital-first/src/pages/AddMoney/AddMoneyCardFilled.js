import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TextField from '../../components/TextFields/TextField';
import CustomCheckbox from '../../components/Checkbox';
import Camera from '../../assets/images/camera.svg'
import MCLogo from '../../assets/images/mc24.svg'
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";

function AddMoneyCardFilled() {

    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowBottomSheet(true);
        }, 3000); 

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);

    const handleCheckboxChange = (newValue) => {
        setIsChecked(newValue);
    };

 

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Add money"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                <div className='sub-title-container1 text-center' style={{ margin: "32px 70px 16px" }}>
                    <span className='body1'>Card must be in your own name</span>
                </div>


                <div className='form-container margin24'>

                    <div className='mt-32'>
                        <TextField
                            label={"Name"}
                            value={"Alexis Jansen"} />
                    </div>


                    <div className='mt-32' style={{ position: "relative" }}>
                        <TextField
                            label={"Card number*"}
                            value={"5873 3873 6836 1234"}
                        />

                        <div className='text-field-icon'>
                            <div className='card-camera-icon-container'>
                                <div> <img src={MCLogo} alt="photo-id" className='' /></div>
                                <div> <img src={Camera} alt="photo-id" className='' /></div>
                            </div>


                        </div>
                    </div>

                    <div className='expiry-date-cvv-container'>

                        <div className='mt-32'>
                            <TextField
                                label={"Expiry date*"}
                                value={"09 / 28"}
                            />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"CVC*"}
                                value={"123"}
                            />
                        </div>


                    </div>
                    <div className='check-box-bill-term-container'>
                        <div>
                            <CustomCheckbox

                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                        <div>
                            <span className='checkbox-text'>Save this card to enable faster account funding in the future.</span>
                        </div>

                        <CustomHeightBottomSheet
                            show={showBottomSheet}
                           

                        >
                            <div className='save-card-button-pop-up'>

                                <div className='save-card-button-pop-up-info'>
                                    <span className='subheading2'> Would you like to save this card</span>
                                    <span className='body1'>Save this card to enable faster account funding in the future</span>
                                </div>
                                <div>
                                <Link to="/add-money-value" style={{ textDecoration: "none" }}>
                                    <div className='save-card-button-container'> 
                                    <button className='primary-button-medium'>
                                        <span className='button-text-white'>Save card</span>
                                    </button>

                                    <button className='text-button-medium' style={{margin: "0px"}}>
                                        <span className='button-text-primary'>Not now</span>
                                    </button>

                                    </div>
                                    
                                    </Link>

                                </div>
                            </div>
                        </CustomHeightBottomSheet>
                    </div>
                </div>
                <div style={{ textAlign: "center", margin: "24px" }}>
                
                        <PrimaryButtonMedium
                            text={"Next"} />
                   
                </div>


            </div>
        </div>
    );
}

export default AddMoneyCardFilled;
