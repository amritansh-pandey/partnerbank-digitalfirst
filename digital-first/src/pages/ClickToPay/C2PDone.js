import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RefreshIcon from '../../assets/images/arrow-path.svg';
import GreenLock from '../../assets/images/green-lock-closed.svg';
import Globe from '../../assets/images/globe-alt.svg';
import C2PLogo from '../../assets/images/c2p-mc.svg'
import CloseIcon from '../../assets/images/black-close.svg'
import C2PLogo24 from '../../assets/images/c2p24.svg'
import TopNavigation7 from '../../components/TopNavigation/TopNavigation7';
import DigtalCard from '../../assets/images/digital-card.png'


function C2PDone() {
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

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
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
                        <span>Your card is ready for smarter, faster checkout</span>
                    </div>

                    <div className='c2p-white-bg-container'>

                        <div className='c2p-digital-detail-container2'>
                            <div> <img src={DigtalCard} className='c2p-digital-card' alt='c2p' /></div>
                            <div className='digital-card-info-container'>
                                <span className='subheading2'>Debit Card</span>
                                <span className='caption'>•••• 1234</span>
                            </div>
                        </div>
                    </div>

                    <div className='how-it-works-container'>
                        <span className='subheading2'>How it works </span>

                        <ol>
                            <li>  <div style={{display: "flex", gap: "4px", alignItems: "center", paddingBottom: "2px"}}>
                                <div>
                                    <span>Look for the Click to Pay icon</span>
                                </div>
                                <div>
                                    <img src={C2PLogo24} />
                                </div>         
                            </div>
                            <span>where Mastercard is accepted</span>
                            </li>


                            <li><span>Access stored cards with your email or mobile number</span></li>

                            <li><span>Speed through checkout at your favorite online merchants</span></li>

                        </ol>
                    </div>


                    <div style={{height: "64px"}}></div>

                    <Link to="/manage-card" style={{ textDecoration: "none" }}>
                        <div className='c2p-primary-button'><span>Continue to bank</span></div>
                    </Link>

                 <div style={{height: "32px"}}></div>

                    <div className='terms-privacy-cookies-feedback'>
                        <span>TERMS   •   Privacy   •   Cookies   •   Feedback</span>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default C2PDone;