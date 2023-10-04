import React from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import PrimaryBase from '../../components/Base/PrimaryBase';
import PartnerBankWhite from '../../assets/images/PartnerBank/Light/logo-light.png'
import WhiteFilledBellIcon from '../../assets/icons/bell-filled-white.svg'

function NewHomePage() {
    return (
        <div className='new-home-container'>
            <GradientBase>
                <div>
                    <div>
                        <img src={PartnerBankWhite} alt="logo" className="home-logo-white" />
                    </div>
                    <div>
                        <img src={WhiteFilledBellIcon} alt="icon" className="icon24" />
                    </div>
                </div>
            </GradientBase>
            <PrimaryBase > </PrimaryBase>
        </div>
    )
}

export default NewHomePage