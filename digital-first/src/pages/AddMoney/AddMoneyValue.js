import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import './style.css';
import { Link } from 'react-router-dom';
import CardActive from '../../assets/images/credit-card-active.svg'
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';


function AddMoneyValue() {


    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        setShouldAnimate(false);
    }, []);




    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Add money"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                <div className='sub-title-container1 text-center' style={{ margin: "32px 70px 16px" }}>
                    <span className='body1'>How much would you like to add to your account? </span>
                </div>

                <div className='add-money-value-container'>
                    <span className='headline2'>$1,000.00</span>
                    <div className='add-money-value-subtext'>
                        <span>Available balance: $0.00</span>
                    </div>
                </div>


                <div className='card-detail-container'>
                    <div className='add-money-card-detail'>
                        <div> <img src={CardActive} alt="photo-id" className='' /></div>
                        <div><span className='body1'>Available balance: $0.00</span></div>
                    </div>


                    <div>
                        <TextButtonSmall text={"Change"}
                        />
                    </div>

                </div>




                <div style={{ textAlign: "center", margin: "24px" }}>
                    <Link to="/add-money-verification" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium
                            text={"Add money"} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default AddMoneyValue;
