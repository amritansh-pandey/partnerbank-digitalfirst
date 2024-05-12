import React, { useEffect } from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import TopNavigation6 from '../../components/TopNavigation/TopNavigation6'
import WhiteChevronLeft from '../../assets/images/chevron-left-white.svg'
import DigitalDebitCard from '../../assets/images/digital-card.png'
import { Link, useNavigate } from 'react-router-dom';
import SustainableIcon from '../../assets/images/sustainable-logo.svg';
import InfoIcon from '../../assets/images/info-black.svg';
import Eye from '../../assets/images/eye-active.svg';
import Plus from '../../assets/images/plus-circle-active.svg';
import Lock from '../../assets/images/lock-closed-active.svg';
import Setting from '../../assets/images/settings-active.svg';
import RecentTransaction from '../../components/TransactionList/RecentTransaction';
import PrimaryBase2 from '../../components/Base/PrimaryBase/PrimaryBase2';
import Lottie from "lottie-react";
import FaceIDLogin from "../../assets/animation/FaceID.json";

const CardUnLockFaceID = () => {



    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/manage-card2", { replace: true });
      }, 5000);
    }, []);
  
  


    return (

        <div>

            <div className='face-id-container'>
                <div className='face-id-animation-container'>
                    <Lottie animationData={FaceIDLogin} loop={false} />
                </div>

            </div>
            <div className='face-id-blur'>

                <div className='digital-card-container'>

                </div>

                <GradientBase>

                    <div>
                        <TopNavigation6
                            leftIcon={<img src={WhiteChevronLeft} alt="Page Logo" className='page-logo' />}
                            pageLogo={<span className='navigation-title'>Digital Debit</span>} />
                    </div>

                </GradientBase>
                <PrimaryBase2>
                    <div className='base_gradient_container2'>

                        <div className='debit-card-container'>
                            <div>
                                <img src={DigitalDebitCard} alt="Card" className='debit-card-image' />
                            </div>

                            <div className="" >
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
                                <Link to="/view-card-detail" style={{ textDecoration: "none" }}>
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

                                <Link to="/lock-card" style={{ textDecoration: "none" }}>
                                    <div className='card-setting-item'>
                                        <div><img src={Lock} alt="photo-id" className='' /></div>
                                        <div className='card-setting-item-text'><span className='caption-bold'>Lock card</span></div>
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

                </PrimaryBase2>


            </div>


        </div>
    )
}
export default CardUnLockFaceID;