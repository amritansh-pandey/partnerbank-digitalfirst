import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import './style.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Southbank from '../../assets/images/south-bank.png'
import SonicAnimation from '../../components/SonicAnimation';
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import Close from '../../assets/images/x-mark.svg'


function AddMoneyDone() {


    const navigate = useNavigate();


    useEffect(() => {
        const navigationTimeout = setTimeout(() => {
            navigate("/old-home", { replace: true });
        }, 3000);

        return () => {
            clearTimeout(navigationTimeout);
        };
    }, [navigate]);



    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation4
                pageTitle={"Confirmation"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                <div className='amount-confirmation-container'>
                    <div>
                        <SonicAnimation />
                    </div>

                    <div className=''>
                        <span className='payee-info'>Money added</span>
                    </div>

                </div>

                <div className='confirmation-info-container'>
                    <div>
                        <span className='title1'>€1,000.00</span>
                    </div>
                    <div style={{width: "70%"}}>
                        <span className='body1'>This money should appear in your account instantly</span>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default AddMoneyDone;
