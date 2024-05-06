import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import PhoneArrow from '../../assets/images/phone-arrow-up-right.svg'
import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium';
import TextField from '../../components/TextFields/TextField';
import { Link } from 'react-router-dom';
import DisabledButtonMedium from '../../components/Buttons/DisabledButtonMedium';




function Help() {



  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);




  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Help and support"}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>


        <div className='card-setting-list-container'>
          <div className='card-setting-main-item'>
            <div className='help-support-title-container'>
              <span className='subheading2'>Call the number below to speak with our team about your Mastercard</span>
              <div className='phone-icon-number'>
                <img src={PhoneArrow} />
                <span className='subheading4'>1234 - 567 - 8901</span>
              </div>
            </div>


          </div>

          <div>
            <span className='subheading3'>Request a callback</span>
          </div>
          <div className='form-container'>





            <div className='mt-32'>
              <TextField
                label={"Name"}
                value={""} />
            </div>


            <div className='mt-32'>
              <TextField
                label={"Phone number"}
                value={""} />
            </div>
            <div style={{marginTop: "48px", textAlign: "center"}}>
              <DisabledButtonMedium text={"Request callback"} />
            </div>
          </div>
          <div style={{ height: "32px" }}></div>

        </div>
      </div>
    </div>

  )
}

export default Help