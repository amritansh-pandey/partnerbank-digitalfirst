import React, { useState, useEffect } from 'react';
import './style.css';
import RefreshIcon from '../../assets/images/arrow-path.svg';
import GreenLock from '../../assets/images/green-lock-closed.svg';
import Globe from '../../assets/images/globe-alt.svg';
import C2PLogo from '../../assets/images/c2p-mc.svg'
import CloseIcon from '../../assets/images/black-close.svg'
import TopNavigation7 from '../../components/TopNavigation/TopNavigation7';
import MCLogo from '../../assets/images/mc-logo.svg'
import { useNavigate } from 'react-router-dom';


function C2PLoader() {
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);


    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/c2p-done", { replace: true });
        }, 3000);
    }, []);



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
              
            />
            <div style={{ height: "2px", width: "100%", backgroundColor: "#BCBCBC" }}></div>
            <div>
                <div className='c2p-globe-close-icon-container'>
                    <div> <img src={C2PLogo} className='icon24' alt='wallet-banner' /></div>


                </div>

                <div className='c2p-mc-loader'> 
                
                <img src={MCLogo} className='mc-logo48' alt='wallet-banner' />
                <div className='c2p-loader-text'><span>Adding your card to Click to Pay</span></div>
                
                </div>
                
               
                </div>
           
        </div>



    );
};

export default C2PLoader;