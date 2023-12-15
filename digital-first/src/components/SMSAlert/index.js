import React, { useState, useEffect } from 'react';
import './style.css';
import SMSImage from '../../assets/images/alert.png';

const SMSAlert = ({ message_title, message_text, onClose, initialSlideIn }) => {
  const [visible, setVisible] = useState(initialSlideIn);

  useEffect(() => {
    console.log('SMSAlert component mounted'); // Check if the component is being mounted

    const timerToShow = setTimeout(() => {
      setVisible(true);
    }, 2000);

    const timerToHide = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2000); 

    return () => {
      clearTimeout(timerToShow);
      clearTimeout(timerToHide);
    };
  }, [onClose]);

  return (
    <div className={`alert-container ${visible ? 'slide-in' : 'slide-out'}`}>
      <img src={SMSImage} alt="Notification" className="alert-image" />
      <div className="alert-content">
        <div className="alert-title">{message_title}</div>
        <div className="alert-text">{message_text}</div>
      </div>
    </div>
  );
};

export default SMSAlert;