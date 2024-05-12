import React from 'react'
import './style.css'
import ABC from '../../assets/images/merchants/city-energy.png'
import GoodFood from '../../assets/images/merchants/fresh-street.png'
import Spa from '../../assets/images/merchants/spa.png'
import Apparel from '../../assets/images/merchants/trendz.png'
import StyleHome from '../../assets/images/merchants/style-home.png'
import Vacation from '../../assets/images/merchants/vacation-escape.png'
import Webflix from '../../assets/images/merchants/stream-watch.png'

function RedeemPointsList2() {
    return (
        <div>
       
            <div className='redeem-list-container'>
                <div className='redeem-list-item'>
                    <div className='purchase-name-icon'>
                        <div>
                            <img src={GoodFood} className='transaction-list-logo' />
                        </div>
                        <div className='purchase-name-container'>
                            <div>
                                <span className='subheading2'>Good food club</span>
                            </div>

                            <div>
                                <span className='caption'>6th May 2024</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='purchase-amount-container'>
                            <span className='subheading3'>$40.50</span>
                        </div>
                        <div>
                        <span className='caption-green'>Redeemed 4,500 points</span>
                        </div>
                    </div>
                </div>
            </div>


        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={Apparel} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Apparel Clothing</span>
                        </div>

                        <div>
                            <span className='caption'>3rd May 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$52.48</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 5,248 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={ABC} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>ABC & Co.</span>
                        </div>

                        <div>
                            <span className='caption'>28th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$80.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 8,000 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={Webflix} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Webflix</span>
                        </div>

                        <div>
                            <span className='caption'>24th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$55.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 5,500 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={StyleHome} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Style Home</span>
                        </div>

                        <div>
                            <span className='caption'>18th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$165.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 16,500 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={Vacation} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Premium Hotel</span>
                        </div>

                        <div>
                            <span className='caption'>14th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$45.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 4,500 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={GoodFood} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Good Food Club</span>
                        </div>

                        <div>
                            <span className='caption'>12th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$100.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 10,000 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={Spa} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>HealthSpa</span>
                        </div>

                        <div>
                            <span className='caption'>11th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$75.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 7,500 points</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-icon'>
                    <div>
                        <img src={Apparel} className='transaction-list-logo' />
                    </div>
                    <div className='purchase-name-container'>
                        <div>
                            <span className='subheading2'>Apparel Clothing</span>
                        </div>

                        <div>
                            <span className='caption'>5th Apr 2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$95.00</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 9,500 points</span>
                    </div>
                </div>
            </div>
        </div>






    </div>
    )
}

export default RedeemPointsList2