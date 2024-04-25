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
import contacts from '../../assets/data/contact';
import { useParams } from 'react-router-dom';

function SentMoney() {


  const { id } = useParams();


  const selectedItem = contacts.find((item) => item.id === parseInt(id, 10));



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
<div>
<div className='contact'>
        <div className='contact-image-info'>
          <div>
            <img src={selectedItem.profileImg} alt={selectedItem.name} className='contact-image' />
          </div>
          <div className='contact-detail'>
            <div className='contact-name'>
              <span className='subheading2'>{selectedItem.name}</span>
            </div>
            <div className='contact-date'>
              <span className='caption'>Sent: {selectedItem.sent}</span>
            </div>
          </div>
        </div>
        <div className='contact-amount-info'>
          <div>
            <span className='subheading3'>{selectedItem.money}</span>
          </div>
          <div style={{textAlign: "right"}}>
            <span style={{ fontSize: '12px', color: "#FB853C" }}>Pending</span>
          </div>
        </div>
      </div>
</div>
          <ContactList contacts={contactsData} />
        </div>
      </div>

      <BottomNavigationSend />
    </div>
  );
}

export default SentMoney;
