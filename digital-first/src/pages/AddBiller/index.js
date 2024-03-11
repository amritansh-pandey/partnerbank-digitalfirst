import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '../../components/Icons';
import TextField from '../../components/TextFields/TextField';
import ForwardArrow from '../../assets/images/chevron-right-black.svg';
import bills from '../../assets/data/bill';
import './style.css';
import CustomCheckbox from '../../components/Checkbox';

function AddBiller() {

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);

    };


    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Add biller"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                <div className='amount-grey-container'>
                    <div className='amount-info-container'>
                        <div>
                            <img src={selectedItem.billImg} alt={selectedItem.name} className='payee-image' />
                        </div>
                        <div>
                            <span className='biller-name'>{selectedItem.name}</span>
                        </div>
                    </div>
                    <div className='bill-category-container'>
                        <span className='body1'>{selectedItem.type}</span>
                    </div>
                </div>
                <div className='payment-info-container'>
                    <div>
                        <div className='form-container'>
                            <div>
                                <TextField label={"Full Name*"} value="Mira Jansen" />
                            </div>
                            <div className='mt-32'>
                                <TextField label={"Billing account number*"} value="NW12345678910" />
                            </div>
                            <div className='check-box-bill-term-container'>
                                <div>
                                    <CustomCheckbox
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                </div>
                                <div>
                                    <span>I agree to the biller's <span className='highlighted'>terms & conditions</span> and paperless statements.</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-32' style={{ textAlign: "center" }}>
                    <div onClick={() => navigate(`/bill-payments-settings/${id}`)}>
                        <PrimaryButtonMedium text={"Continue"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBiller;
