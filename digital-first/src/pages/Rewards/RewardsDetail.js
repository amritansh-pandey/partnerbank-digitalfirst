import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import Share from '../../assets/images/share.svg';
import GoodFood from '../../assets/images/merchants/fresh-street.png'
import Map from '../../assets/images/map.png'
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { Link } from 'react-router-dom';

function RewardsDetails() {

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {

        setShouldAnimate(false);
    }, []);




    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Transaction details"}
            />


            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='transaction-detail-main-container'>
                    <div className='transaction-info-container'>
                        <div className='transaction-name-date'>
                            <span className='subheading3'>Good Food Club</span>
                            <span className='body1'>03/04/24</span>
                        </div>
                        <div>
                            <span className='title3'>$40.50</span>
                        </div>
                    </div>

                    <div className='transaction-detail-container'>
                        <div className='transaction-detail-item'>
                            <span className='subheading3'>Time:</span>
                            <span className='body1'>12:34:00</span>
                        </div>

                        <div className='transaction-detail-item'>
                            <span className='subheading3'>Category:</span>
                            <span className='body1'>Dining</span>
                        </div>

                        <div className='transaction-detail-item'>
                            <span className='subheading3'>Website:</span>
                            <span className='body1'>www.gfclub.com</span>
                        </div>

                        <div className='transaction-detail-item'>
                            <span className='subheading3'>Type:</span>
                            <span className='body1'>In-store</span>
                        </div>

                        <div className='transaction-detail-item'>
                            <span className='subheading3'>Phone number:</span>
                            <span className='body1'>11-800-543-4572</span>
                        </div>
                    </div>
                    <div className='logo-address-share-map'>
                        <div className='logo-address-share'>
                            <div className='logo-address'>
                                <img src={GoodFood} className='merchant-transaction-logo' />
                                <span className='body3'>25 Madison Ave, New York, NY 10010, USA</span>
                            </div>
                            <div>
                                <img src={Share} />
                            </div>
                        </div>
                        <img src={Map} className='map-image' />
                    </div>
                </div>

                <div className='redeem-main-container'>
                    <div>
                        <span className='subheading3'>Do you want to redeem 4,050 points for this transaction?</span>
                    </div>
                    <Link to="/rewards-successful" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium text={"Redeem"} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RewardsDetails;
