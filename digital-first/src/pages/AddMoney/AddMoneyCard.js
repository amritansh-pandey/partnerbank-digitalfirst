import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../../components/TextFields/TextField';
import CustomCheckbox from '../../components/Checkbox';
import DisabledButtonMedium from '../../components/Buttons/DisabledButtonMedium';
import Camera from '../../assets/images/camera.svg'


function AddMoneyCard() {


    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/card-camera-scan", { replace: true });
      }, 2000);
    }, []);



    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);


    const [isChecked, setIsChecked] = useState(false);

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


                    <div className='mt-32' style={{position: "relative"}}>
                        <TextField
                            label={"Card number*"}
                            value={""}
                      />

                            <div className='text-field-icon'>
                            <Link to="/card-camera-scan" style={{ textDecoration: "none" }}>
                            <img src={Camera} alt="photo-id" className='' />
                            </Link>
                            </div>
                    </div>

                    <div className='expiry-date-cvv-container'>

                        <div className='mt-32'>
                            <TextField
                                label={"Expiry date*"}
                                value={""}
                                 />
                        </div>


                        <div className='mt-32'>
                            <TextField
                                label={"CVC*"}
                                value={""}
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
                    </div>
                </div>
                <div style={{textAlign: "center", margin: "24px"}}>
                    <DisabledButtonMedium
                        text={"Next"} />
                </div>


            </div>
        </div>
    );
}

export default AddMoneyCard;
