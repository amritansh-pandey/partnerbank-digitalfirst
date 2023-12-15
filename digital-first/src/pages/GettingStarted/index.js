import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Title2 from '../../components/Title/Title2';
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import data from '../../assets/data/data.json';
import { importImage } from '../../utils';

const GettingStarted = ({ brand, theme, lang = "en" }) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);
  

  return (
    <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>
      <div className='getting-started-container'>
        <Title2 text={data['getting-started-title'][lang]} />

        <div className='mt-56 getting-started-image-container'>
          <img src={importImage(brand, theme, "getting-started")} alt="getting started" />
        </div>

        <div className='mt-32 getting-started-body-container'>
          <span className="body1">To open an account, we need a few details. Please have your photo ID on-hand. This should only take a few minutes.</span>
        </div>

        <div className='getting-started-caption-container'>
          <span className="caption">By continuing, you agree to our Terms and understand your data will be processed according to the <span className='highlighted'>Privacy Notice.</span> </span>
        </div>

        <div className='mt-56'>
          <Link to="/enter-detail" style={{ textDecoration: "none" }}>
            <PrimaryButtonMedium text={"Apply for Digital Debit account"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;