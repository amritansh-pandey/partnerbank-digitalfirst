
import React from 'react';
const ContactList = ({ contacts }) => (
  <div className='contact-list'>
    {contacts.map((contact) => (
      <div className='contact' key={contact.id}>
        <div className='contact-image-info'>
          <div>
            <img src={contact.profileImg} alt={contact.name} className='contact-image' />
          </div>
          <div className='contact-detail'>
            <div className='contact-name'>
              <span className='subheading2'>{contact.name}</span>
            </div>
            <div className='contact-date'>
              <span className='caption'>Sent: {contact.sent}</span>
            </div>
          </div>
        </div>
        <div className='contact-amount-info'>
          <div>
            <span className='subheading3'>{contact.money}</span>
          </div>
          <div className={`contact-status ${contact.stat === 'Pending' ? 'pending' : 'completed'}`}>
            <span style={{ fontSize: '12px' }}>{contact.stat}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ContactList;
