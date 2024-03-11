import React from 'react';
import { Link } from 'react-router-dom';
import ForwardArrow from '../../assets/images/chevron-right-black.svg';

const ContactSearchList = ({ contacts, onItemClick }) => (
  <div className='contact-list'>
    {contacts.map((contact) => (
      <Link to={`/transfer-details/${contact.id}`} key={contact.id} onClick={() => onItemClick(contact)}>
        <div className='contact'>
          <div className='contact-image-info'>
            <div>
              <img src={contact.profileImg} alt={contact.name} className='contact-image' />
            </div>
            <div className='contact-detail'>
              <div className='contact-name'>
                <span className='subheading2'>{contact.name}</span>
              </div>
              <div className='contact-date'>
                <span className='caption'>{contact.detail}</span>
              </div>
            </div>
          </div>
          <div className='contact-amount-info'>
            <div>
              <img src={ForwardArrow} alt='arrow' className='arrow' />
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default ContactSearchList;
