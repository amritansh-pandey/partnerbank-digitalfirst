import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RefreshIcon from '../../assets/images/arrow-path.svg';
import GreenLock from '../../assets/images/green-lock-closed.svg';
import Globe from '../../assets/images/globe-alt.svg';
import C2PLogo from '../../assets/images/c2p-mc.svg'
import CloseIcon from '../../assets/images/black-close.svg'
import InfoGrey from '../../assets/images/information-circle-grey16.svg'
import ChevDownGrey from '../../assets/images/chevron-down-grey.svg'
import TopNavigation7 from '../../components/TopNavigation/TopNavigation7';
import DigtalCard from '../../assets/images/digital-card.png'
import BlackCheckbox from '../../components/Checkbox/BlackCheckbox';

function C2PInfo() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);


    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (newValue) => {
        setIsChecked(newValue);
    };


    return (
        <div>
            <TopNavigation7
                leftIcon={<span className='left-nav-button'>Close</span>}
                pageUrl={
                    <div className='url-container'>
                        <img src={GreenLock} />
                        <span>src.mastercard.com</span>
                    </div>}
                rightIcon={<img src={RefreshIcon} />}
                leftIconPath="/manage-card" 
            />
            <div style={{ height: "2px", width: "100%", backgroundColor: "#BCBCBC" }}></div>
            <div className="c2p-main-container">




                <div className='c2p-grey-bg'>
                    <div className='c2p-globe-close-icon-container'>
                        <div> <img src={C2PLogo} className='icon24' alt='wallet-banner' /></div>

                        <div className='globe-close-icons'>
                            <div className='globe-us-contanier'>
                                <span>US</span>
                                <img src={Globe} className='icon24' alt='wallet-banner' /></div>
                            <div> <img src={CloseIcon} className='icon24' alt='wallet-banner' /></div>
                        </div>
                    </div>


                    <div className='c2p-title-container'>
                        <span>Review your information</span>
                    </div>

                    <div className='c2p-white-bg-container'>

                        <div className='c2p-digital-detail-container'>
                            <div> <img src={DigtalCard} className='c2p-digital-card' alt='c2p' /></div>
                            <div className='digital-card-info-container'>
                                <span className='subheading2'>Debit Card</span>
                                <span className='caption'>•••• 1234</span>
                            </div>
                        </div>


                        <div className='billing-info-container'>
                            <div className='billing-info-title-container'>
                                <div><span className='subheading2'>Billing Information</span></div>
                                <div> <img src={InfoGrey} alt='c2p' className='info-grey-icon' /></div>
                            </div>

                            <div className='billing-details-container'>
                                <span>Alexis Jansen</span>
                                <span>123 Main St.</span>
                                <span>Paris, NY 10001</span>
                            </div>

                            <div>
                                <div className='check-box-bill-term-container'>
                                    <div>
                                        <BlackCheckbox

                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div>
                                        <span className='checkbox-text'>Save as a shipping address.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='contact-info-container'>
                            <div className='billing-info-title-container'>
                                <span className='subheading2'>Contact information</span></div>


                            <div className='contact-details-container'>
                                <div className='c2p-email-container'>
                                    <span className='caption'>Email</span>
                                    <span>Alexis.jansen@mail.com</span>
                                </div>

                                <div className='c2p-phone-container'>
                                    <div className='c2p-country-code'>
                                        <span>US +1</span>
                                        <img src={ChevDownGrey} alt='c2p' className='icon24' />
                                    </div>
                                    <div className='c2p-phone'>
                                        <span className='caption'>Mobile number</span>
                                        <span>468-272-6821</span>
                                    </div>

                                </div>

                                <div className='c2p-disclaimer-container'>
                                    <span>Click to Pay will use this information to verify
                                        you and may send verification codes to this
                                        number. Message/data rates may apply.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='c2p-disclaimer-container2'>
                        <span>By continuing, you agree to Mastercard’s Terms and understand your data will be processed according to the <span style={{ textDecoration: "underline" }}>Privacy Notice</span>.</span>
                    </div>
                    <Link to="/c2p-loader" style={{ textDecoration: "none" }}>
                        <div className='c2p-primary-button'><span>Continue</span></div>
                    </Link>

                    <div className='c2p-secondary-button'><span>Cancel</span></div>

                    <div className='terms-privacy-cookies-feedback'>
                        <span>TERMS   •   Privacy   •   Cookies   •   Feedback</span>
                    </div>
                    <div style={{height: "128px"}}></div>
                </div>

            </div>
        </div>

    );
};

export default C2PInfo;