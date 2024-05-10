import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import Store from '../../assets/images/store.svg'
import Toggle from '../../components/Toggle';
import { Link } from 'react-router-dom';

function InStoreShopping() {
    const [isChecked, setIsChecked] = useState(true); // Set toggle on by default
    const [toggleState, setToggleState] = useState(true); // Set toggleState to true by default
    const [changeSettingAmountContainer, setChangeSettingAmountContainer] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        setToggleState(!toggleState);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setChangeSettingAmountContainer(true);
        }, 3000);

        return () => clearTimeout(timeout); // Clear the timeout on unmount
    }, []);

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"In-store shopping"}
            />

            <div className='page-container'>
                {toggleState ? (
                    <div className='card-setting-main-container'>

                        <div className='setting-title-contatiner'>
                            <img src={Store} className='settings-icon64' />
                            <span className='subheading2'>Manage transaction limits for In-store shopping</span>
                        </div>
                        <div className='info-toggle'>
                            <div><span className='subheading2'>Allow In-store shopping</span></div>
                            <div>
                                <Toggle isChecked={true} onToggle={handleToggle} />
                            </div>
                        </div>

                        {changeSettingAmountContainer ? (
                            <div className='setting-amount-container-value'>
                                <span className='body1'>Set per transaction limit ($0 - $2,000)</span>
                                <span className='title1'>$2,000.00</span>
                                <Link to="/card-setting-done" style={{ textDecoration: "none" }}>
                                <button className='primary-button-medium'>
                                    <span className='button-text-white'>Save</span>
                                </button>
                                </Link>
                            </div>
                        ) : (
                            <div className='setting-amount-container'>
                                <span className='body1'>Set per transaction limit ($0 - $2,000)</span>
                                <span className='title1'>$1,800.00</span>
                                <button className='disabled-button-medium'>
                                    <span className='button-text-white'>Save</span>
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='card-setting-main-container-changed'>

                        <div className='setting-title-contatiner'>
                            <img src={Store} className='settings-icon64' />
                            <span className='subheading2'>Manage transaction limits for In-store shopping</span>
                        </div>
                        <div className='info-toggle'>
                            <div><span className='subheading2'>Allow In-store shopping</span></div>
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

export default InStoreShopping;
