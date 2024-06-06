import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '../../components/Icons';
import ForwardArrow from '../../assets/images/chevron-right-black.svg';
import bills from '../../assets/data/bill';
import './style.css';


function BillReviewPay() {

    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));



    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);




    return (
        <div>
            <TopNavigation4
               leftIcon={<ChevronLeftIcon />}
                pageTitle={"Review & pay"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>


                <div className='amount-grey-container'>
                    <div className='amount-info-container'>
                        <div>
                            <img src={selectedItem.billImg} alt={selectedItem.name} className='payee-image' />
                        </div>

                        <div>
                            <span className='payee-name'>{selectedItem.name}</span>
                        </div>


                    </div>


                    <div className='enter-amount-container'>
                        <span className='enter-amount'>{selectedItem.money}</span>
                    </div>
                </div>
                <div className='payment-info-container'>
                    <div className='add-note-container'>
                        <span className='subheading3'>Add note (optional)</span>
                    </div>

                    <div className='pay-with-container'>
                        <div className='pay-with'>
                            <div>
                                <span className='subheading3'>Pay with</span>
                            </div>
                            <div>
                                <span className='caption'>Digital Debit Card •••• 1234</span>
                            </div>
                        </div>
                        <div>
                            <img src={ForwardArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
              
                <div className='mt-32' style={{ textAlign: "center" }}>
                    <div onClick={() => navigate(`/paybill-confrimation/${id}`)}>
                        <PrimaryButtonMedium text={"Send money"} />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default BillReviewPay;
