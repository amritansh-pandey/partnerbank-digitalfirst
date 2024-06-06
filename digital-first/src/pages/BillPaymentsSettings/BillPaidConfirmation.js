import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useParams, useNavigate } from 'react-router-dom';
import bills from '../../assets/data/bill';
import './style.css';
import SonicAnimation from '../../components/SonicAnimation';
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import Logo from "../../assets/images/logo.svg"

function BillPaidConfirmation() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const navigationTimeout = setTimeout(() => {
            navigate(`/paybill-added3/${id}`, { replace: true });
        }, 3000);

        return () => {
            clearTimeout(navigationTimeout);
        };
    }, [id, navigate]);

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));
    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

    return (
        <div>
            <TopNavigation4
                pageTitle={"Confirmation"}
            />
            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
                <div className='amount-confirmation-container'>
                    <div>
                        <SonicAnimation />
                    </div>
                    <div className=''>
                        <span className='payee-info'>Bill Paid</span>
                    </div>
                </div>
                <div className='confirmation-info-container'>
                    <div style={{ width: "70%" }}>
                        <span>Your payment has been made successfully.</span>
                    </div>

                </div>
                <div className='confirmation-bill-info-container'>
                    <div className='bill-deatil-info-container'>
                        <div className='bill-period-container'>
                            <span className='caption'>Paid</span>
                            <span className='bill-period-text'>{selectedItem.name}</span>
                        </div>
                        <div style={{ height: "1px", backgroundColor: "#F0F0F0" }}></div>
                        <div className='bill-period-container'>
                            <span className='caption'>Paid from</span>
                            <div className='logo-card-info-container'>
                                <img src={Logo} />
                                <span className='bill-period-text'>Digital Debit Card •••• 1234</span>
                            </div>
                        </div>
                        <div style={{ height: "1px", backgroundColor: "#F0F0F0" }}></div>
                        <div className='bill-period-container'>
                            <span className='caption'>Amount</span>
                            <span className='bill-period-text'>{selectedItem.money}</span>
                        </div>
                        <div style={{ height: "1px", backgroundColor: "#F0F0F0" }}></div>
                        <div className='bill-period-container'>
                            <span className='caption'>Paid on</span>
                            <span className='bill-period-text'>May 05, 2024</span>
                        </div>
                    </div>
                </div>
                <div className='mt-32' style={{ textAlign: "center" }}>
                    
                        <PrimaryButtonMedium text={"Done"} />
                    
                </div>
                
            </div>
        </div>
    );
}

export default BillPaidConfirmation;
