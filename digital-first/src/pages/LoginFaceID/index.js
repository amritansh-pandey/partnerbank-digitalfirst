import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import Lottie from "lottie-react";
import FaceIDPartial from "../../assets/animation/FaceIDPartial.json";
import FaceIDLogin from "../../assets/animation/FaceID.json";
import { Link } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import { useNavigate } from 'react-router-dom';


const LoginFaceID = ({ brand, theme, lang = "en" }) => {

    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/old-home", { replace: true });
      }, 5000);
    }, []);
  
  

    return (

        <div>
              <div className='face-id-container'>
                <div className='face-id-animation-container'>
                <Lottie animationData={FaceIDLogin} loop={false} />
                </div>
              
                </div>
     
        <div className='login-background'>
           
            </div>
        </div >
    );
};

export default LoginFaceID;