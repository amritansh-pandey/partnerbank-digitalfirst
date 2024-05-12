import React, { useState, useEffect } from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import TopNavigation6 from '../../components/TopNavigation/TopNavigation6'
import WhiteChevronLeft from '../../assets/images/chevron-left-white.svg'
import DigitalDebitCardLock from '../../assets/images/card-lock.png'
import { Link } from 'react-router-dom';
import BottomNavigationHome from '../../components/BottomNavigation/BottomNavigationHome';
import SustainableIcon from '../../assets/images/sustainable-logo.svg';
import InfoIcon from '../../assets/images/info-black.svg';
import Eye from '../../assets/images/eye-active.svg';
import Plus from '../../assets/images/plus-circle-active.svg';
import LockOpen from '../../assets/images/lock-open.svg';
import Setting from '../../assets/images/settings-active.svg';
import ApplePay from '../../assets/images/AddtoAppleWallet.png';
import C2P from '../../assets/images/c2p.png';
import Benefit1 from '../../assets/images/manage-card-2.png';
import Benefit2 from '../../assets/images/manage-card-1.png';
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";
import RecentTransaction from '../../components/TransactionList/RecentTransaction';
import PrimaryBase2 from '../../components/Base/PrimaryBase/PrimaryBase2';
import C2PPopup from '../../components/C2PPopoup';

const CardLock = ({ brand, theme, lang = "en" }) => {



    const [shouldAnimate, setShouldAnimate] = useState(true);
    useEffect(() => {
        setShouldAnimate(false);
    }, []);

    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const openBottomSheet = () => {
        setShowBottomSheet(true);
    };

    const closeBottomSheet = () => {
        setShowBottomSheet(false);
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup); // Toggle pop-up visibility
        console.log("Popup visibility:", !showPopup);
    };




    return (
        <div style={{ overflow: "scroll" }}>
             <div className="page-without-animation">
                <div className='digital-card-container'>

                </div>

                <GradientBase>

                    <div>
                        <TopNavigation6
                            leftIcon={<img src={WhiteChevronLeft} alt="Page Logo" className='page-logo' />}
                            pageLogo={<span className='navigation-title'>Digital Debit</span>} 
                            leftIconPath="/old-home"  />
                    </div>

                </GradientBase>
                <PrimaryBase2>
                    <div className='base_gradient_container2'>

                        <div className='debit-card-container'>
                            <div>
                                <img src={DigitalDebitCardLock} alt="Card" className='debit-card-image' />
                            </div>

                            <div className="" onClick={openBottomSheet}>
                                <div className='sustainable-icon-container2'>
                                    <div>
                                        <img src={SustainableIcon} alt="sustaible" className='sustainable-icon1' />
                                    </div>
                                    <div className='sustainble-text'>
                                        <span>Sustainable Card</span>
                                    </div>
                                    <div>
                                        <img src={InfoIcon} alt="photo-id" className='info-icon-sustainable' />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='available-container'>
                                    <span className='caption'>Available balance</span>
                                </div>
                                <div>
                                    <span className='title1'>$2,640.55</span>
                                </div>
                            </div>

                            <div className='card-settings-container'>
                            <Link to="/view-card-detail-faceid" style={{ textDecoration: "none" }}>
                                <div className='card-setting-item'>
                                    <div><img src={Eye} alt="photo-id" className='' /></div>
                                    <div className='card-setting-item-text'><span className='caption-bold'>Card details</span></div>
                                </div>
                                </Link>
                                <Link to="/add-money" style={{ textDecoration: "none" }}>
                                <div className='card-setting-item'>
                                    <div><img src={Plus} alt="photo-id" className='' /></div>
                                    <div className='card-setting-item-text'><span className='caption-bold'>Add money</span></div>
                                </div>
                                </Link>

                                <Link to="/card-unlock-faceid" style={{ textDecoration: "none" }}>
                                <div className='card-setting-item'>
                                    <div><img src={LockOpen} alt="photo-id" className='' /></div>
                                    <div className='card-setting-item-text'><span className='caption-bold'>Unlock card</span></div>
                                </div>
                                </Link>

                                <Link to="/card-settings" style={{ textDecoration: "none" }}>
                                <div className='card-setting-item'>
                                    <div><img src={Setting} alt="photo-id" className='' /></div>
                                    <div className='card-setting-item-text'><span className='caption-bold'>Manage card</span></div>
                                </div>
                                </Link>

                            </div>

                        </div>






                    </div>

                    <div style={{ height: "32px" }}></div>
                    <div className='recent-transaction-container'>
                        <RecentTransaction />


                    </div>
                    <div className='card-connection-container'>
                        <div>
                            <div>
                                <span className='subheading2'>Card connections</span>
                            </div>
                            <div className='card-connection-image-container'>
                                <div>
                                    <Link to="/apple-wallet" style={{ textDecoration: "none" }}>
                                        <img src={ApplePay} alt="Page Logo" className='card-connection-image' />
                                    </Link>
                                </div>
                                <div  className='click-to-pay-button' onClick={togglePopup}>
                              
                                    <img src={C2P} alt="Page Logo" className='card-connection-image' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#f8f8f8", height: "16px" }}></div>
                    <div className='card-benefits-container'>
                        <div>
                            <div>
                                <span className='subheading2'>Your card benefits</span>
                            </div>
                            <div className='card-benefit-image-container'>
                                <div>
                                    <img src={Benefit1} alt="Page Logo" className='benefit-image' />
                                </div>
                                <div>
                                    <img src={Benefit2} alt="Page Logo" className='benefit-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {showPopup && <C2PPopup onClose={togglePopup} />}
                    <div style={{ backgroundColor: "#f8f8f8", height: "100px" }}></div>
                </PrimaryBase2>


                <CustomHeightBottomSheet
                    show={showBottomSheet}
                   
                    setShowBottomSheet={closeBottomSheet}
                >
                    <div className='sustainable-cards-pop-up'>

                        <div><span className='subheading2'>Sustainable Card</span></div>
                        <div>
                            <img src={SustainableIcon} alt="sustaible" className='sustainable-icon2' />
                        </div>
                        <div>
                            <span className='body1'>Your account's physical card was made with 100% recycled plastic. This approach yields 40% fewer CO<sub>2</sub> emissions than using new plastic and diverts materials from landfills.</span>
                        </div>
                        <div>
                            <button onClick={closeBottomSheet} className='primary-button-medium'>
                                <span className='button-text-white'>Got it</span>
                            </button>

                        </div>
                    </div>
                </CustomHeightBottomSheet>

            </div>
          
            <BottomNavigationHome />
        </div>
    )
}
export default CardLock;