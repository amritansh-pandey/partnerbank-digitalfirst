import React from 'react'
import '../style.css'
import './style.css'
import CreditCard from '../../../assets/images/credit-card.svg'
import TextButtonSmall from '../../Buttons/TextButtonSmall';

function AccountReady() {

    return (
        <div className='card-container credit-card-space'>
            <div className='credit-card-container-home'>
                <img src={CreditCard} alt="credit-card" />
            </div>

            <div className='world_card_text_container'>
                <div>
                    <span className='body3'>Your account is ready</span>
                </div>
                <div style={{width: "90%"}}>
                    <span className='caption'>Add money to your account </span>
                </div>
                  </div>

                  <div>
                  <TextButtonSmall text={"Add now"} />
                  </div>
        </div>
    )
}


export default AccountReady;