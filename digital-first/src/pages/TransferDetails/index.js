
import React, { useState, useEffect, useRef } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TextField from '../../components/TextFields/TextField';
import { useParams, useNavigate } from 'react-router-dom';
import contacts from '../../assets/data/contact';




const TransferDetails = () => {
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = contacts.find((item) => item.id === parseInt(id, 10));


    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Select transfer details"}
                rightIcon={<img src={InfoActive} alt="info" />}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>


                <div className='contact-list'>
                    <div>
                        <div className='form-container margin24'>
                            <div className='mt-32'>
                                <TextField label={"Full Name"} value={selectedItem.name} />
                            </div>
                            <div className='mt-32'>
                                <TextField label={"Email ID"} value={selectedItem.detail} />
                            </div>
                            <div className='mt-32'>
                                <TextField label={"Category"} value="Gift" />
                            </div>
                            <div className='mt-32'>
                                <TextField label={"Transfer from"} value="Digital Debit Card •••• 8832" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className='mt-32' style={{ textAlign: "center" }}>
                    <div onClick={() => navigate(`/amount-send/${id}`)}>
                        <PrimaryButtonMedium text={"Next"} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TransferDetails;