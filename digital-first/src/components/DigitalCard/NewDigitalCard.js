import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import MCLogo from '../../assets/images/logo.svg';
import { ChevronRightIcon, InfoIcon } from '../Icons';
import TextButtonSmall from '../Buttons/TextButtonSmall';


function NewDigitalCard({amount}) {
    return (
        <div className="digital_card">

            <div className="balance_container">
                <div className="balance_text_container">
                    <span className="white_card_title">Available balance</span>
                </div>
                <div>
                    <InfoIcon size={24} className="icon-white" />
                </div>
            </div>

            <div className="amount_text_container">
                <div>
                    <span className="title1 white_bold">{amount}</span>
                </div>
                <div>
                    <div className="card_detail_container">
                    <div>
                            <img src={MCLogo} alt="logo" className="logo16" />
                        </div>
                        <div className="balance_text_container">
                            <span className="white_card_text">Digital Debit •••• 1234</span>
                        </div>
                      
                    </div>

                </div>
            </div>






                <div className=" white_bg">
                    <div className="card_button_text_container">
                        <TextButtonSmall text={"View & manage"}
                        />
                    </div>
                    <div className='chevron-container'>
                    <ChevronRightIcon size={24} className="icon-white" />
                    </div>
                </div>


        </div>
    );
}


export default NewDigitalCard