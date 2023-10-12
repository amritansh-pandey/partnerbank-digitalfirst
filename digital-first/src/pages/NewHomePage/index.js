import React from 'react';
import "./style.css";
import GradientBase from '../../components/Base/GradientBase';
import PrimaryBase from '../../components/Base/PrimaryBase';
import PartnerBankWhite from '../../assets/images/partnerbank/light/logo-light.png'
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className="custom-icon">
                            <g id="bell">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.24903 8.9998C5.24914 5.27197 8.27118 2.25 11.999 2.25C15.727 2.25 18.749 5.27208 18.749 9L18.7488 9.04919V9.75C18.7488 11.8731 19.5499 13.8074 20.8674 15.2699C21.0339 15.4547 21.0979 15.71 21.0383 15.9516C20.9787 16.1931 20.8033 16.3893 20.5699 16.4755C19.0259 17.0455 17.4096 17.4659 15.7386 17.7192C15.7455 17.812 15.749 17.9056 15.749 18C15.749 20.0711 14.0701 21.75 11.999 21.75C9.92797 21.75 8.24903 20.0711 8.24903 18C8.24903 17.9056 8.25254 17.812 8.25942 17.7192C6.58836 17.4659 4.9719 17.0455 3.42777 16.4755C3.19441 16.3893 3.01895 16.1931 2.95935 15.9516C2.89976 15.71 2.96379 15.4547 3.13029 15.2699C4.44782 13.8074 5.24884 11.8731 5.24884 9.75L5.24903 8.9998ZM9.75124 17.8993C9.74977 17.9326 9.74903 17.9662 9.74903 18C9.74903 19.2426 10.7564 20.25 11.999 20.25C13.2417 20.25 14.249 19.2426 14.249 18C14.249 17.9662 14.2483 17.9326 14.2468 17.8992C13.5063 17.9659 12.7564 18 11.9988 18C11.2414 18 10.4917 17.966 9.75124 17.8993Z" fill="var(--icon-color)" />
                            </g>
                        </svg>
                    </div>
                </div>
            </GradientBase>
            <PrimaryBase > </PrimaryBase>
        </div>
    )
}

export default NewHomePage