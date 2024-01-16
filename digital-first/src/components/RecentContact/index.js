
import React from 'react';
import TextButtonSmall from '../../components/Buttons/TextButtonSmall';
import Plus from '../../assets/images/plus.svg';
import ChevronRightIcon from '../../assets/images/chevron-right.svg';
import './style.css'

const RecentContacts = ({ title, buttonText, buttonTo, contacts }) => (
<div className='send-again-container'>
    <div className='send-again-title-container'>
      <div>
        <span className='title3'>{title}</span>
      </div>
      <div>
        <TextButtonSmall
          text={buttonText}
          rightIcon={<img src={ChevronRightIcon} alt="right" className='icon16' />}
          to={buttonTo}
        />
      </div>
    </div>

    <div className='send-again-contacts-container'>
      {contacts.map(contact => (
        <div className='send-again-contact-container' key={contact.id}>
          <div>
            <img src={contact.profileImg} alt="person" className='send-again-contact-image' />
          </div>
          <div>
            <span className='caption'>{contact.nickname}</span>
          </div>
        </div>
      ))}

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
);

export default RecentContacts;
