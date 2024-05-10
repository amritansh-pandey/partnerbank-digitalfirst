// SendMoney.js
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import BottomNavigationSend from '../../components/BottomNavigation/BottomNavigationSend';
import contactsData from '../../assets/data/contact';
import AddNewButton from '../../components/Buttons/AddNewButton';
import ContactList from '../../components/ContactList';
import Person1 from '../../assets/images/p1.png'
import Person3 from '../../assets/images/p3.png'

function SendMoney() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Disable animation after the initial render
    setShouldAnimate(false);
  }, []);

  const firstThreeContacts = contactsData.slice(0, 3);

  return (
    <div>
      <TopNavigation4
        leftIcon={<ChevronLeftIcon />}
        pageTitle={"Send money"}
        rightIcon={<img src={InfoActive} alt="info" />}
      />

      <div className={`page-container ${shouldAnimate ? 'slide-enter' : ''}`}>

        <div className='add-new-button-background'>
          <AddNewButton
            title={'New payment'}
            to={"/select-recipient"}
          />
        </div>

        <div className='contact-list-container'>
          <div className='contact-list-title'>
            <span className='title3'>Payment activity</span>
          </div>


          <div className='contact'>
        <div className='contact-image-info'>
          <div>
            <img src={Person1} alt="John Doe" className='contact-image' />
          </div>
          <div className='contact-detail'>
            <div className='contact-name'>
              <span className='subheading2'>John Doe</span>
            </div>
            <div className='contact-date'>
              <span className='caption'>Sent: 18/02/24</span>
            </div>
          </div>
        </div>
        <div className='contact-amount-info'>
          <div>
            <span className='subheading3'>$173.68</span>
          </div>
          <div style={{textAlign: "right"}}>
            <span style={{ fontSize: '12px', color: "#FB853C" }}>Pending</span>
          </div>
        </div>
      </div>





      <div className='contact'>
        <div className='contact-image-info'>
          <div>
            <img src={Person3} alt="John Doe" className='contact-image' />
          </div>
          <div className='contact-detail'>
            <div className='contact-name'>
              <span className='subheading2'>Jane Johnson</span>
            </div>
            <div className='contact-date'>
              <span className='caption'>Sent: 16/02/24</span>
            </div>
          </div>
        </div>
        <div className='contact-amount-info'>
          <div>
            <span className='subheading3'>$245.12</span>
          </div>
          <div style={{textAlign: "right"}}>
            <span style={{ fontSize: '12px', color: "#FB853C" }}>Pending</span>
          </div>
        </div>
      </div>



          <ContactList contacts={contactsData} />
        </div>

        <div style={{ height: "200px" }}></div>
      </div>

      <BottomNavigationSend />
    </div>
  );
}

export default SendMoney;
