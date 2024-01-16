import React from 'react'
import './style.css'


function RedeemPointsList() {
    return (
        <div>
        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-container'>
                    <div>
                        <span className='subheading2'>Good food club</span>
                    </div>

                    <div>
                        <span className='caption'>15/02</span>
                    </div>
                </div>

                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$40.50</span>
                    </div>
                    <div>
                        <span className='caption-orrange'>Eligible for redemption</span>
                    </div>
                </div>
            </div>
        </div>




        <div className='redeem-list-container'>
            <div className='redeem-list-item'>
                <div className='purchase-name-container'>
                    <div>
                        <span className='subheading2'>Just Retail Store</span>
                    </div>

                    <div>
                        <span className='caption'>31/01</span>
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
                <div className='purchase-name-container'>
                    <div>
                        <span className='subheading2'>Authentic Food Co.</span>
                    </div>

                    <div>
                        <span className='caption'>28/01</span>
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
                <div className='purchase-name-container'>
                    <div>
                        <span className='subheading2'>Webflix</span>
                    </div>

                    <div>
                        <span className='caption'>22/01</span>
                    </div>
                </div>

                <div>
                    <div className='purchase-amount-container'>
                        <span className='subheading3'>$55.50</span>
                    </div>
                    <div>
                        <span className='caption-green'>Redeemed 5,550 points</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RedeemPointsList