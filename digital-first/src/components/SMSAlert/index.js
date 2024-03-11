import React, { useState, useEffect } from 'react';
import './style.css';
import SMSImage from '../../assets/images/alert.png';

const SMSAlert = ({ message_title, message_text, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('SMSAlert component mounted'); 

    const timerToShow = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const timerToHide = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); 

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
