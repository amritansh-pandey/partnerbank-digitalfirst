import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useParams, useNavigate } from 'react-router-dom';
import contacts from '../../assets/data/contact';
import './style.css';
import SonicAnimation from '../../components/SonicAnimation';
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';

function AmountSendConfirmation() {
    const { id } = useParams();
    const navigate = useNavigate(); // Place the useNavigate hook before using it

    useEffect(() => {
        const navigationTimeout = setTimeout(() => {
            navigate(`/amount-sent/${id}`, { replace: true }); // Use backticks for string interpolation
        }, 3000);

        return () => {
            clearTimeout(navigationTimeout);
        };
    }, [id, navigate]);

    const selectedItem = contacts.find((item) => item.id === parseInt(id, 10));
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
                        <span className='payee-info'>You sent {selectedItem.money} to {selectedItem.name}</span>
                    </div>
                </div>
                <div className='confirmation-info-container'>
                    <div>
                        <span>You can expect the funds to arrive same day if accepted before 5pm.</span>
                    </div>
                    <div>
                        <span>Your reference is: 12123478</span>
                    </div>
                </div>
                <div className='mt-32' style={{ textAlign: "center" }}>
                    <div onClick={() => navigate(`/amount-sent/${id}`)}>
                        <PrimaryButtonMedium text={"Done"} />
                    </div>
                </div>
                <div className='confirmation-button-container'>
                    <TextButtonSmall text={"Make this a recurring payment"} />
                </div>
            </div>
        </div>
    );
}

export default AmountSendConfirmation;
