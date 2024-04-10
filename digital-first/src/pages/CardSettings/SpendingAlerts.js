import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import Wallet from "../../assets/icons/home-primary.svg";
import OnlineShoping from '../../assets/images/online-shoping.svg'
import International from '../../assets/images/international.svg'
import Alerts from '../../assets/images/alert.svg'
import ATMCash from '../../assets/images/atm.svg'
import Edit from '../../assets/images/pencil-square.svg'
import Toggle from '../../components/Toggle'
import CustomHeightBottomSheet from "../../components/BottomSheet/CustomHeightBottomSheet";
import SuccessAlert from '../../components/Alerts/SuccessAlert';

function SpendingAlerts() {
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [transactionAmount, setTransactionAmount] = useState("$0.00");
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [contentChanged, setContentChanged] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowBottomSheet(true);
        }, 3000); // Show after 3 seconds

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTransactionAmount("$50.00");
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    const handleCloseBottomSheet = () => {
        setShowBottomSheet(false);
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleSave = () => {
        setShowBottomSheet(false);
        setContentChanged(true); 

        
        setTimeout(() => {
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 2500);
        }, 1500);
    };

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Spend alerts"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

                <div className='card-setting-list-container'>
                    <div className='setting-title-contatiner'>
                        <img src={Alerts} className='settings-icon64' />
                        <span className='subheading2'>Get notified when my card is used </span>
                    </div>

                    <div className='spend-alerts-settings-list-container'>
                        {contentChanged ? (
                            <div className='changed-spend-alert'>
                                <div className='spend-alerts-settings-list-item2'>
                                    <div className='spend-alerts-settings-item-info'>
                                        <div className='spend-alerts-settings-item-title'>
                                            <img src={Wallet} alt="Wallet icon" />
                                            <span className='body2'>All Payments</span>
                                        </div>
                                        <div><span className='caption'>Notify me of every transaction</span></div>
                                    </div>
                                    <div>
                                    <Toggle isChecked={true} onToggle={handleToggle} />
                                    </div>
                                </div>
                                <div className='transaction-info'>
                                        <span className='caption'>Transactions higher than: $50.00</span>
                                        <img src={Edit} alt="Edit icon" />
                                    </div>
                            </div>
                        ) : (
                            <div className='change-spend-alert'>
                                <div className='spend-alerts-settings-list-item'>
                                    <div className='spend-alerts-settings-item-info'>
                                        <div className='spend-alerts-settings-item-title'>
                                            <img src={Wallet} alt="Wallet icon" />
                                            <span className='body2'>All Payments</span>
                                        </div>
                                        <div><span className='caption'>Notify me of every transaction</span></div>
                                    </div>
                                    <div>
                                        <Toggle isChecked={isChecked} onToggle={handleToggle} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='spend-alerts-settings-list-item'>
                        <div className='spend-alerts-settings-item-info'>
                            <div className='spend-alerts-settings-item-title'>
                                <img src={International} alt="International icon" />
                                <span className='body2'>International payments</span>
                            </div>
                            <div><span className='caption'>Let me know when my card is used in another country</span></div>
                        </div>
                        <div>
                            <Toggle isChecked={isChecked} onToggle={handleToggle} />
                        </div>
                    </div>

                    <div className='spend-alerts-settings-list-item'>
                        <div className='spend-alerts-settings-item-info'>
                            <div className='spend-alerts-settings-item-title'>
                                <img src={ATMCash} alt="ATM icon" />
                                <span className='body2'>ATM withdrawals</span>
                            </div>
                            <div><span className='caption'>Notify me when cash is withdrawn using my card </span></div>
                        </div>
                        <div>
                            <Toggle isChecked={isChecked} onToggle={handleToggle} />
                        </div>
                    </div>

                    <div className='spend-alerts-settings-list-item2'>
                        <div className='spend-alerts-settings-item-info'>
                            <div className='spend-alerts-settings-item-title'>
                                <img src={OnlineShoping} alt="Online shopping icon" />
                                <span className='body2'>Online shopping</span>
                            </div>
                            <div><span className='caption'>Notify when card is used online</span></div>
                        </div>
                        <div>
                            <Toggle isChecked={isChecked} onToggle={handleToggle} />
                        </div>
                    </div>
                </div>

                {showSuccessAlert && (
                    <div className={`fade-in`} style={{ animationDuration: '0.5s' }}>
                        <SuccessAlert
                        text={"Spend alert limit updated"} />
                    </div>
                )}
                
                <CustomHeightBottomSheet
                    show={showBottomSheet}
                    onClose={handleCloseBottomSheet}
                >
                    <div className='save-card-button-pop-up'>
                        <div className='save-card-button-pop-up-info'>
                            <span className='subheading2'> Notify me of every transaction</span>
                            <span className='body1'>Transactions higher than:</span>
                            <span className='title1'>{transactionAmount}</span>
                        </div>
                        <div>
                            <div className='save-card-button-container'>
                                <button
                                    className={transactionAmount !== "$0.00" ? 'primary-button-medium' : 'disabled-button-medium'}
                                    onClick={handleSave}
                                >
                                    <span className='button-text-white'>Save</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </CustomHeightBottomSheet>
                <div style={{ height: "100px" }}></div>
            </div>
        </div>
    )
}

export default SpendingAlerts;
