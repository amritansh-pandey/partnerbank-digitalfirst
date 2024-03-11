import React from 'react'
import "./style.css";
import Wallet from "../../assets/icons/home-primary.svg";
import Bank from "../../assets/images/bank-active.svg";
import Card from "../../assets/images/credit-card-active.svg";
import ChevronRight from "../../assets//images/chevron-right-black.svg";
import { Link } from 'react-router-dom';

function AddMoneyOptions() {
    return (
        <div className='add-money-option-container'>
            <Link to="/add-money-card" style={{ textDecoration: "none" }}>
                <div className='add-money-option-item-container'>
                    <div className='add-money-option-item-text-container'>
                        <div> <img src={Card} alt="home" className="add-money-icon" /></div>
                        <div>
                            <div>
                                <span className='body2'>Bank card</span>
                            </div>
                            <div>
                                <span className='caption'>Add a card to instantly add money</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div> <img src={ChevronRight} alt="home" className="" /></div>
                    </div>
                </div>
            </Link>

            <div className='add-money-option-item-container'>
                <div className='add-money-option-item-text-container'>
                    <div> <img src={Bank} alt="home" className="add-money-icon" /></div>
                    <div>
                        <div>
                            <span className='body2'>Bank account</span>
                        </div>
                        <div>
                            <span className='caption'>Connect to an external bank account
                                to transfer money from another bank</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div> <img src={ChevronRight} alt="home" className="" /></div>
                </div>
            </div>


            <div className='add-money-option-item-container2'>
                <div className='add-money-option-item-text-container'>
                    <div> <img src={Wallet} alt="home" className="add-money-icon" /></div>
                    <div>
                        <div>
                            <span className='body2'>Salary deposit</span>
                        </div>
                        <div>
                            <span className='caption'>Automatically deposit your salary
                                directly to your account</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div> <img src={ChevronRight} alt="home" className="" /></div>
                </div>
            </div>
        </div>
    )
}

export default AddMoneyOptions