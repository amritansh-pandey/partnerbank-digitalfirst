import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import './style.css';
import ChangePin from '../../assets/images/passcode.svg'
import Terms from '../../assets/images/terms&conditions.svg'
import Damage from '../../assets/images/damage.svg'
import Support from '../../assets/images/support.svg'
import setting_data from '../../assets/data/settings'
import ChevronRight from '../../assets/images/chevron-right-black.svg'
import BottomNavigationDefault from '../../components/BottomNavigation/BottomNavigationDefault';
import { Link } from 'react-router-dom';




function TermsCondition() {



  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);




  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Terms and Conditions"}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

<div className='terms-heading-container'>
  <span className='title3'>Digital Debit Card Terms & Conditions</span>
</div>

<div className='terms-body-container'>

  <div className='terms-para-container'>
    <span className='subheading3'>1. Introduction</span>
    <span className='body1'>These Terms and Conditions govern the use of the Digital First Bank mobile application (the "App"). By accessing or using the App, you agree to be bound by these Terms and Conditions.</span>
  </div>

  <div className='terms-para-container'>
    <span className='subheading3'>2. Acceptance of Terms</span>
    <span className='body1'>By using the App, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you must not use the App.

</span>
  </div>

  <div className='terms-para-container'>
    <span className='subheading3'>3. Eligibility</span>
    <span className='body1'>You must be at least 18 years old and capable of forming a binding contract to use the App. By using the App, you represent and warrant that you meet these eligibility requirements.

</span>
  </div>

  <div className='terms-para-container'>
    <span className='subheading3'>4. Account Registration</span>
    <span className='body1'>To access certain features of the App, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update this information to keep it accurate and current.</span>
  </div>


  <div className='terms-para-container'>
    <span className='subheading3'>5. Use of the App</span>
    <span className='body1'>You agree to use the App only for lawful purposes and in accordance with these Terms and Conditions. You must not use the App in any way that violates any applicable laws or regulations.</span>
  </div>

</div>
   
        <div style={{ height: "100px" }}></div>

      </div>
    
    </div>
  )
}

export default TermsCondition