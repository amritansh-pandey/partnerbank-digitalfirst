// SendMoney.js
import React, { useState, useEffect } from 'react';
import TopNavigation4 from '../../components/TopNavigation/TopNavigation4';
import { ChevronLeftIcon } from '../../components/Icons';
import InfoActive from '../../assets/images/info-active.svg';
import './style.css';
import BottomNavigationSend from '../../components/BottomNavigation/BottomNavigationSend';
import contactsData from '../../assets/data/contact';
import RecentContacts from '../../components/RecentContact';
import ContactList from '../../components/ContactList'; 

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
        <RecentContacts
          title="Send again"
          buttonText="All contacts"
          buttonTo="/select-recipient"
          contacts={firstThreeContacts}
        />

        <div className='contact-list-container'>
          <div className='contact-list-title'>
            <span className='title3'>Payment activity</span>
          </div>

          <ContactList contacts={contactsData} />
        </div>
      </div>

      <BottomNavigationSend />
    </div>
  );
}

export default SendMoney;
