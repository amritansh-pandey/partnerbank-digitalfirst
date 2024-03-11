
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import OffersList from '../../components/OfferList';
import RedeemPointsList from '../../components/RedeemPointsList';
import { useParams, useNavigate } from 'react-router-dom';
import bills from '../../assets/data/bill';
import BellAlert from '../../assets/images/bell-alert.svg'
import Warning from '../../assets/images/information-circle-orrange.svg'
import ChevronRight from '../../assets/images/chevron-right-black.svg'
import Credit from '../../assets/images/credit-card-active.svg'
import Notes from '../../assets/images/banknotes-active.svg'
import Calendar from '../../assets/images/calendar-days-active.svg'
import Notification from '../../assets/images/bell-alert-active.svg'
import Toggle from '../../components/Toggle'

function BillPaymentsSettings() {


    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        
        setShouldAnimate(false);
    }, []);

    



    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Biller payment settings"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`} >

                <div className='biller-detail-container'>

                    <div>
                        <span className='subheading5'>Biller details</span>
                    </div>
                    <div>
                        <span className='bill-due-text'>Bill due in 3 days</span>
                    </div>
                </div>


                <div className='bill-info-card-container'>

                    <div className='bill-card-container'>

                        <div className='points-cash-container'>
                            <div className='reward-card-image-container'>
                                <img src={selectedItem.billImg} alt='card-image' className='bill-logo' />
                            </div>


                            <div className='cash-equivalent-container'>
                                <div>
                                    <span className='Body1'>{selectedItem.name}</span>
                                </div>
                                <div>
                                    <span className='caption'>{selectedItem.type}</span>
                                </div>
                            </div>
                        </div>
                        <div className='reward-card-image-container'>
                            <img src={BellAlert} alt='card-image' />
                        </div>


                    </div>

                    <div className='auto-pay-container'>
                        <div>
                            <span className='title3'>Auto pay</span>
                        </div>
                        <div>
                            <Toggle isChecked={isChecked} onToggle={handleToggle} />
                        </div>
                    </div>




                </div>

                <div className='warning-message-container'>
                    <div>
                        <img src={Warning} alt='card-image' />
                    </div>

                    <div className='warning-message-text'>
                        <div>
                            <span className='subheading3'>Credit card payments are accepted, but…</span>
                        </div>
                        <div>
                            <span className='body1'>This biller charges a convenience fee of $2.50 for credit card payments.</span>
                        </div>
                    </div>

                </div>

          

                <div className='biller-settings-container'>
                    <div className='biller-settings-title'>
                        <div>
                            <span className='title3'>Biller settings</span>
                        </div>

                        <div>
                            <span className='subheading2'>Payment details & scheduling</span>
                        </div>
                    </div>

                    <div className='bill-settings-list-container'>
                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text'>
                            <div> <img src={Credit} alt='card-image' /></div>
                            <div>
                                <div><span className='subheading2'>Digital Debit Card</span></div> <div><span className='body1'>•••• 8832</span></div>
                            </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>

                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text'>
                            <div> <img src={Notes} alt='card-image' /></div>
                            <div>
                                <div><span className='subheading2'>Pay the full balance</span></div> <div><span className='body1'>$53.60</span></div>
                            </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>

                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text'>
                            <div> <img src={Calendar} alt='card-image' /></div>
                            <div>
                                <div><span className='subheading2'>Digital Debit Card</span></div> <div><span className='body1'>10/03/2024</span></div>
                            </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>

                        <div style={{marginTop: "16px"}}>
                            <span className='subheading2'>Notifications</span>
                        </div>

                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text2'>
                            <div> <img src={Notification} alt='card-image' /></div>
                            <div>
                                <div><span className='subheading2'>Alert settings</span></div>
                            </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <div onClick={() => navigate(`/biller-added/${id}`)}>
                        <PrimaryButtonMedium text={"Add biller"} />
                    </div>
                </div>

                <div style={{height: "150px"}}></div>
            </div>





        </div>


    );
}

export default BillPaymentsSettings;
