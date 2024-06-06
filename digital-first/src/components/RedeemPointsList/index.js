import React, { useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import ABC from '../../assets/images/merchants/city-energy.png'
import GoodFood from '../../assets/images/merchants/fresh-street.png'
import Spa from '../../assets/images/merchants/spa.png'
import Apparel from '../../assets/images/merchants/trendz.png'
import StyleHome from '../../assets/images/merchants/style-home.png'
import Vacation from '../../assets/images/merchants/vacation-escape.png'
import Webflix from '../../assets/images/merchants/stream-watch.png'
import Logo from '../../assets/images/logo.svg';
import PrimaryFullWidthButton from '../../components/Buttons/PrimaryFullWidthButton';
import Map from '../../assets/images/map.png'
import Share from '../../assets/images/share.svg';
import FullHeightBottomSheet2 from '../BottomSheet/FullHeightBottomSheet/FullHeightBottomSHeet2';

function RedeemPointsList() {

    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setBottomSheetOpen(false);
    };

    return (
        <div>

            <div className='redeem-list-container' onClick={handleOpenBottomSheet}>
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
                            <span className='subheading3'>€40.50</span>
                        </div>
                        <div>
                            <span className='caption-orrange'>Eligible for redemption</span>
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
                            <span className='subheading3'>€52.48</span>
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
                            <span className='subheading3'>€80.00</span>
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
                            <span className='subheading3'>€55.00</span>
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
                            <span className='subheading3'>€165.00</span>
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
                            <span className='subheading3'>€45.00</span>
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
                            <span className='subheading3'>€100.00</span>
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
                            <span className='subheading3'>€75.00</span>
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
                            <span className='subheading3'>€95.00</span>
                        </div>
                        <div>
                            <span className='caption-green'>Redeemed 9,500 points</span>
                        </div>
                    </div>
                </div>
            </div>


            <FullHeightBottomSheet2
                show={bottomSheetOpen}
                onClose={handleCloseBottomSheet}
            >

                <div className='transaction-popup-info'>
                    <div className='transaction-heading-container'>
                        <img src={GoodFood} className='transaction-list-logo' alt="goodfood" />
                        <span className='title3'>Good food club</span>
                    </div>
                    <div className='transaction-popup-info-container'>
                        <div className='transaction-info-list-container'>
                            <span className='body3'>Order</span>
                            <span className='body2'>ETHHTGR894144114</span>
                        </div>



                        <div className='transaction-info-list-container'>
                            <span className='body3'>Ordered</span>
                            <span className='body2'>6th May 2024</span>
                        </div>

                        <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                        <div className='transaction-info-list-container'>
                            <span className='body3'>Item</span>
                            <span className='body3'>Price</span>
                        </div>
                        <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>


                        <div className='transaction-info-list-container'>
                            <div>
                                <div>
                                    <span className='body1'>Apples</span>
                                </div>
                                <div>
                                    <span className='caption'>250g</span>
                                </div>
                            </div>
                            <span className='body1'>€12.50</span>

                        </div>

                        <div className='transaction-info-list-container'>
                            <div>
                                <div>
                                    <span className='body1'>Milk</span>
                                </div>
                                <div>
                                    <span className='caption'>1l</span>
                                </div>
                            </div>
                            <span className='body1'>€12.50</span>

                        </div>


                        <div className='transaction-info-list-container'>
                            <div>
                                <div>
                                    <span className='body1'>Eggs</span>
                                </div>
                                <div>
                                    <span className='caption'>12</span>
                                </div>
                            </div>
                            <span className='body1'>€3.50</span>

                        </div>


                        <div className='transaction-info-list-container'>
                            <div>
                                <div>
                                    <span className='body1'>Chicken</span>
                                </div>
                                <div>
                                    <span className='caption'>500g</span>
                                </div>
                            </div>
                            <span className='body1'>€5.50</span>

                        </div>

                        <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                        <div className='transaction-info-list-container'>
                            <span className='body3'>Subtotal</span>
                            <span className='body3'>€33.00</span>
                        </div>
                        <div className='transaction-info-list-container'>
                            <span className='body1'>Discount</span>
                            <span className='body5'>-€5.50</span>
                        </div>
                        <div className='transaction-info-list-container'>
                            <span className='body1'>Tax & Fees</span>
                            <span className='body1'>€4.00</span>
                        </div>

                        <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>

                        <div className='transaction-info-list-container'>
                            <span className='body3'>Total</span>
                            <span className='body3'>€22.50</span>
                        </div>
                        <div className='transaction-info-list-container'>
                            <span className='body3'>Payment method</span>
                            <div className='card-transaction-detail'>
                                <span className='body1'>•••• 1234</span>
                                <img src={Logo} />
                            </div>

                        </div>
                        <div style={{ height: "1px", backgroundColor: "#EBEBEB" }}></div>
                    </div>
                    <div className='logo-address-share-map'>
                        <div className='logo-address-share'>
                            <div className='logo-address'>
                                <img src={GoodFood} className='merchant-transaction-logo' />
                                <span className='body3'>25 Madison Ave, Paris, NY 10010, USA</span>
                            </div>
                            <div>
                                <img src={Share} />
                            </div>
                        </div>
                        <img src={Map} className='map-image' />
                    </div>
                    <div className='reward-container'>
                        <span className='subheading3'>Do you want to redeem4,050 points for this transaction?</span>
                        <Link to="/rewards-successful" style={{ textDecoration: "none" }}>
                            <PrimaryFullWidthButton text={"Redeem"} />
                        </Link>
                    </div>

                    <div style={{ marginBottom: "48px" }}  >




                    </div>

                </div>

            </FullHeightBottomSheet2>



        </div>
    )
}

export default RedeemPointsList