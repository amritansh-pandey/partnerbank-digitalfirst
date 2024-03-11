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
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import Plus from '../../assets/images/plus.svg';
import ChevronRightIcon from '../../assets/images/chevron-right.svg';
import contacts from '../../assets/data/contact';
import Person1 from '../../assets/images/p1.png'
import Person2 from '../../assets/images/p2.png'
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
      <div className='send-again-container'>
    <div className='send-again-title-container'>
      <div>
        <span className='title3'>Send again</span>
      </div>
      <div>
        <TextButtonSmall
          text={"All contacts"}
          rightIcon={<img src={ChevronRightIcon} alt="right" className='icon16' />}
          to={"/select-recipient"}
        />
      </div>
    </div>

    <div className='send-again-contacts-container'>
  
        <div className='send-again-contact-container' >
          <div>
            <img src={selectedItem.profileImg} alt="person" className='send-again-contact-image' />
          </div>
          <div>
            <span className='caption'>{selectedItem.nickname}</span>
          </div>
        </div>


        <div className='send-again-contact-container' >
          <div>
            <img src={Person1} alt="person" className='send-again-contact-image' />
          </div>
          <div>
            <span className='caption'>J. Doe</span>
          </div>
        </div>


        <div className='send-again-contact-container' >
          <div>
            <img src={Person2} alt="person" className='send-again-contact-image' />
          </div>
          <div>
            <span className='caption'>J. Johnson</span>
          </div>
        </div>


      <div className='send-again-contact-container'>
        <div className='add-contact-container'>
          <img src={Plus} alt="person" className='icon32' />
        </div>
        <div>
          <span className='caption'>Add new</span>
        </div>
      </div>
    </div>
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
          <div className={`contact-status ${selectedItem.stat === 'Pending' ? 'pending' : 'completed'}`}>
            <span style={{ fontSize: '12px' }}></span>
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
