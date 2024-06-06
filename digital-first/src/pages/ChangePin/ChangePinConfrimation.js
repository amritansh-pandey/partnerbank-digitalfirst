import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import Lottie from "lottie-react";
import DoneAnimation from "../../assets/animation/LoadingDone.json";
import { useNavigate } from 'react-router-dom';

const ChangePinConfrimation = () => {

    const [titleText, setTitleText] = useState('You’re almost there');
  
  



    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/card-setting-done", { replace: true });
      }, 5000);
    }, []);



    return (
        <div>
            <TopNavigation1 />

            <div className='title-container1 text-center'>
                <span className='title3'>PIN changed successfully</span>
                <div style={{ height: "24px" }}></div>
                <div className='hiding_body_container'>
                  
                        <span className="body1">PIN for your card ending 1234 has been changed successfully</span>
                 
                </div>
            </div>

            <div style={{ height: "124px" }}></div>
            <div className='animation-container64'>
                <Lottie animationData={DoneAnimation} loop={false} />
            </div>

           
        </div >
    );
};

export default ChangePinConfrimation;