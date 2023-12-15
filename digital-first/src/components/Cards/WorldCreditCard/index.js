import React from 'react'
import './style.css'
import '../style.css'
import WorldCard from '../../../assets/images/world-card.png'


function WordCreditCard() {


    return (
        <div className='card-container'>
            <div className='world_card'>
                <img src={WorldCard} alt="world card" className='world_card_image' />
            </div>

            <div className='world_card_text_container'>
                <div>
                    <span className='body3'>Discover the all new Digital World Credit Card</span>
                </div>
                <div>
                    <span className='caption'>Apply and get instant approval</span>
                </div>
                  </div>
        </div>
    )
}


export default WordCreditCard; 