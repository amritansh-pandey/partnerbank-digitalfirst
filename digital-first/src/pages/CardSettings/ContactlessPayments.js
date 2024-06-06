import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import Wireless from '../../assets/images/wireless.svg';
import Toggle from '../../components/Toggle';
import { Link } from 'react-router-dom';

function ContactlessPayments() {
    const [isChecked, setIsChecked] = useState(false);
    const [toggleState, setToggleState] = useState(false);
    const [changeSettingAmountContainer, setChangeSettingAmountContainer] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        setToggleState(!toggleState);
        setTimeout(() => {
            setChangeSettingAmountContainer(true);
        }, 2000);
    };

    useEffect(() => {
        if (changeSettingAmountContainer) {
            setTimeout(() => {
                setChangeSettingAmountContainer(true);
            }, 3000);
        }
    }, [changeSettingAmountContainer]);

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Contactless payments"}
            />

            <div className='page-container'>
                {toggleState ? (
                    <div className='card-setting-main-container-changed'>

                        <div className='setting-title-contatiner'>
                            <img src={Wireless} className='settings-icon64' />
                            <span className='subheading2'>Manage transaction limits for contactless payments</span>
                        </div>
                        <div className='info-toggle'>
                            <div><span className='subheading2'>Notify me of every transaction</span></div>
                            <div>
                                <Toggle isChecked={isChecked} onToggle={handleToggle} />
                            </div>
                        </div>

                        {changeSettingAmountContainer ? (
                            <div className='setting-amount-container-value'>
                                <span className='body1'>Set per transaction limit (€0 - €250)</span>
                                <span className='title1'>€50.00</span>
                                <Link to="/card-setting-done" style={{ textDecoration: "none" }}>
                                <button className='primary-button-medium'>
                                    <span className='button-text-white'>Save</span>
                                </button>
                                </Link>
                            </div>
                        ) : (
                            <div className='setting-amount-container'>
                                <span className='body1'>Set per transaction limit (€0 - €250)</span>
                                <span className='title1'>€0.00</span>
                                <button className='disabled-button-medium'>
                                    <span className='button-text-white'>Save</span>
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='card-setting-main-container'>

                        <div className='setting-title-contatiner'>
                            <img src={Wireless} className='settings-icon64' />
                            <span className='subheading2'>Manage transaction limits for contactless payments</span>
                        </div>
                        <div className='info-toggle'>
                            <div><span className='subheading2'>Notify me of every transaction</span></div>
                            <div>
                                <Toggle isChecked={isChecked} onToggle={handleToggle} />
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactlessPayments;
