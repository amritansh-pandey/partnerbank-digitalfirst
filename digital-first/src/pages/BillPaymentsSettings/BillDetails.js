
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useParams, useNavigate } from 'react-router-dom';
import bills from '../../assets/data/bill';
import BellAlert from '../../assets/images/bell-alert.svg'
import Setting from '../../assets/images/cog-6-tooth.svg'
import ChevronRight from '../../assets/images/chevron-right-black.svg'
import Document from '../../assets/images/document.svg'
import History from '../../assets/images/document-magnifying-glass.svg'

function BillDetails() {


    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {

        setShouldAnimate(false);
    }, []);





    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));

    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Bill Details"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`} >


                <div className='bill-info-card-background'>

                    <div className='bill-info-card-container'>

                        <div className='bill-card-container'>

                            <div className='bill-detail-info-icon-container'>
                                <div className='reward-card-image-container'>
                                    <img src={selectedItem.billImg} alt='card-image' className='bill-logo' />
                                </div>
                                <div className='name-id-container'>
                                    <div>
                                        <span className='Body1'>{selectedItem.name}</span>
                                    </div>
                                    <div>
                                        <span className='caption'>{selectedItem.billid}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='reward-card-image-container'>
                                <img src={BellAlert} alt='card-image' />
                            </div>


                        </div>

                        <div className='bill-amount-container'>
                            <span className='title1'>{selectedItem.money}</span>
                            <span className='amount-due-text'>Amount due</span>
                        </div>

                        <div className='bill-deatil-info-container'>
                            <div className='bill-period-container'>
                                <span className='caption'>Bill period</span>
                                <span className='bill-period-text'>Apr 08 - May 08 2024</span>
                            </div>
                            <div style={{ height: "1px", backgroundColor: "#F0F0F0" }}></div>
                            <div className='bill-period-container'>
                                <span className='caption'>Due date</span>
                                <span className='bill-period-text'>Apr 16 2024</span>
                            </div>
                        </div>


                        <div style={{ textAlign: "center" }}>
                            <div onClick={() => navigate(`/bill-review-pay/${id}`)}>
                                <PrimaryButtonMedium text={"Pay now"} />
                            </div>
                        </div>



                    </div>



                </div>

                <div className='biller-settings-container'>



                    <div className='bill-settings-list-container'>


                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text2'>
                                <div> <img src={Setting} alt='card-image' /></div>
                                <div>
                                    <div><span className='subheading2'>Alert settings</span></div>
                                </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>


                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text2'>
                                <div> <img src={Document} alt='card-image' /></div>
                                <div>
                                    <div><span className='subheading2'>Alert settings</span></div>
                                </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>


                        <div className='bill-settings-list-item'>
                            <div className='bill-setting-icon-text2'>
                                <div> <img src={History} alt='card-image' /></div>
                                <div>
                                    <div><span className='subheading2'>Alert settings</span></div>
                                </div>
                            </div>
                            <div>  <img src={ChevronRight} alt='card-image' /></div>
                        </div>
                    </div>
                </div>


                <div style={{ height: "150px" }}></div>
            </div>





        </div>


    );
}

export default BillDetails;
