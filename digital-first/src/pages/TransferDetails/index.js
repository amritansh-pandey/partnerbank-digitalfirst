
import React, { useState, useEffect, useRef } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TransferDetailForm from '../../components/TransferDetailForm';
import contactsData from '../../assets/data/contact';


function TransferDetails() {
    const [shouldAnimate, setShouldAnimate] = useState(true);


    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);

   
  

   
  


    return (
        <div>
            <TopNavigation4
                leftIcon={<ChevronLeftIcon />}
                pageTitle={"Select transfer details"}
                rightIcon={<img src={InfoActive} alt="info" />}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>


<TransferDetailForm contacts={contactsData} />



                <div className='mt-32' style={{textAlign: "center"}}>
                    <Link to="/video-selfie" style={{ textDecoration: "none" }}>
                        <PrimaryButtonMedium text={"Next"} />
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default TransferDetails;