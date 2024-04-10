import React from 'react';
import "./style.css";
import C2PLogo from '../../assets/images/c2p-mc.svg'
import CloseIcon from '../../assets/images/black-close.svg'
import { Link } from 'react-router-dom';

const C2PPopup = ({ onClose }) => {
    return (
        <div className="custom-popup-overlay" onClick={onClose}>
            <div className="custom-popup">
                <div className='c2p-pop-up-close-container' onClick={onClose}>
                    <img src={CloseIcon} className='icon24' alt='wallet-banner' />
                </div>

                <div className='c2p-logo-container'>
                    <img src={C2PLogo} className='' alt='wallet-banner' />
                </div>
                <div className='c2p-info-container'>
                    <span className='click-to-pay-title'>Click to Pay</span>
                    <span className='body1'>Smart security, simple checkout.</span>
                </div>

                <div className='c2p-body-text-container'>
                    <span className='caption'>Change the way you pay online with intelligent, password-free checkout.</span>

                    <span className='caption'>Store your payment information in one place and speed through checkout where you see the Click to Pay icon.</span>
                    <Link to="/c2p-info" style={{ textDecoration: "none" }}>
                    <button>Get started</button>
                    </Link>
                </div>

              
            </div>
        </div>
    );
}

export default C2PPopup;