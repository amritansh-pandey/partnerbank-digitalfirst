
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import './style.css';
import { useParams, useNavigate } from 'react-router-dom';
import bills from '../../assets/data/bill';
import Lottie from "lottie-react";
import DoneAnimation from "../../assets/animation/LoadingDone.json";
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
function BillAdded() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        // Disable animation after the initial render
        setShouldAnimate(false);
    }, []);


    const { id } = useParams();
    const navigate = useNavigate();

    const selectedItem = bills.find((item) => item.id === parseInt(id, 10));



    return (
        <div>
            <TopNavigation4
                pageTitle={"Confirmation"}
            />

            <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`} >




                <div style={{ height: "124px" }}></div>
                <div className='animation-container64'>
                    <Lottie animationData={DoneAnimation} loop={false} />
                </div>
                <div className='biller-added-text-container'>
                    <div>
                        <span className='title1'>Biller added</span>
                    </div>
                    <div>
                        <span className='Body1'>{selectedItem.name}</span>
                    </div>

                </div>

                <div style={{ textAlign: "center", marginTop: "128px" }}>
                    <div onClick={() => navigate(`/paybill-added/${id}`)}>
                        <PrimaryButtonMedium text={"Done"} />
                    </div>
                </div>



            </div>
        </div>

    );
}

export default BillAdded;
