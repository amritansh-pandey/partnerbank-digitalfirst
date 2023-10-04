import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import GetStarted from '../../assets/images/PartnerBank/Light/getting-started.png';



function GettingStarted() {

  return (
    <div className='page-container'>


      <div className='getting-started-main-container'>
        <div className='getting-started-title-container'>
          <span className="title2">Getting started is easy</span>
        </div>

        <div className='getting-started-image-container'>
          <img src={GetStarted} alt="getting started" />
        </div>

        <div className='getting-started-body-container'>
          <span className="body1">To open an account, we need a few details. Please have your photo ID on-hand. This should only take a few minutes.</span>
        </div>

        <div className='getting-started-caption-container'>
          <span className="caption">By continuing, you agree to our Terms and understand your data will be processed according to the <span className='highlighted'>Privacy Notice.</span> </span>
        </div>

      

       
            <Link to="/getting-started" style={{ textDecoration: "none" }}>
              <button className='primary-button-medium button-text-white'>
              Apply for Digital Debit account
              </button>
            </Link>
        

       
      </div>


    </div>
  );
};


export default GettingStarted;