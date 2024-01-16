import React from 'react'
import './style.css'
import Luxury from '../../assets/images/luxury.png'
import Bag from '../../assets/images/bags.png'
import Laptop from '../../assets/images/laptop.png'

function OffersList() {
    return (
        <div>
            <div className='offer-item-container'>
                <div className='offer-image-container'>
                    <img src={Luxury} alt='' className='offer-image' />
                </div>
                <div className='offer-info-container'>
                    <div>
                        <span className='grey-caption'>Luxury Inn & Suites</span>
                    </div>
                    <div>
                        <span className='offer-body-text'>10% off Fully Flexible Rate, complimentary breakfast for 2</span>
                    </div>
                    <div>
                        <span className='offer-button'>View hotel locations</span>
                    </div>
                </div>
            </div>


            <div className='offer-item-container'>
                <div className='offer-image-container'>
                    <img src={Bag} alt='' className='offer-image' />
                </div>
                <div className='offer-info-container'>
                    <div>
                        <span className='grey-caption'>Glamour gems</span>
                    </div>
                    <div>
                        <span className='offer-body-text'>7% cashback with Glamour gems online store</span>
                    </div>
                    <div>
                        <span className='offer-button'>glamourgems.com</span>
                    </div>
                </div>
            </div>


            <div className='offer-item-container'>
                <div className='offer-image-container'>
                    <img src={Laptop} alt='' className='offer-image' />
                </div>
                <div className='offer-info-container'>
                    <div>
                        <span className='grey-caption'>Computech Laptops</span>
                    </div>
                    <div>
                        <span className='offer-body-text'>1.5% cashback with online
                            purchases</span>
                    </div>
                    <div>
                        <span className='offer-button'>computech.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersList