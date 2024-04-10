import React, { useState, useEffect } from 'react';
import './style.css';
import TopNavigation1 from '../../components/TopNavigation/TopNavigation1';
import Lottie from "lottie-react";
import FaceIDPartial from "../../assets/animation/FaceIDPartial.json";
import FaceIDLogin from "../../assets/animation/FaceID.json";
import { Link, useNavigate } from 'react-router-dom';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';



const UseFaceID2 = ({ brand, theme, lang = "en" }) => {

    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate("/faceidloader", { replace: true });
      }, 5000);
    }, []);
  
  

    return (

        <div>
              <div className='face-id-container'>
                <div className='face-id-animation-container'>
                <Lottie animationData={FaceIDLogin} loop={false} />
                </div>
              
                </div>
     
        <div className='face-id-blur'>
            <TopNavigation1 />

            <div className='title-container1 text-center'>
                <span className='title3'>Use Face ID</span>

                <div className='hiding_body_container'>

                    <span className="body1">Set up Face ID to experience faster login and safer checkouts</span>

                </div>
            </div>


            <div className='animation-container128'>
                <Lottie animationData={FaceIDPartial} loop={true} />
            </div>
           
            <div style={{ textAlign: "center" }}>
                <Link to="/transactions" style={{ textDecoration: "none" }}>
                    <PrimaryButtonMedium text={"Set up Face ID"} />
                </Link>
            </div>

            <div style={{ textAlign: "center", marginTop: "8px" }}>
                <Link to="/transactions" style={{ textDecoration: "none" }}>
                    <div className='text-center primary-text'>
                    <button className='text-button-small button-text-primary space8'>
                    Not now, maybe later
            </button>
                       
                    </div>
                </Link>
            </div>

          
            </div>
        </div >
    );
};

export default UseFaceID2;