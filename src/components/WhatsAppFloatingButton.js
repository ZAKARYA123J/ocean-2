// WhatsAppFloatingButton.js
import React from 'react';
import watssap from '../assets/images/WhatsApp.svg'

export const WhatsAppFloatingButton = () => {
  const phoneNumber = '+212684369940'; // Replace with your WhatsApp number
  const message = 'مرحبا Ocean Connecting أريد التقدم بطلب للحصول على عقد عمل بدولة إسبانيا https://oceanconnecting.ma/nos-services'; // Replace with your default message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <img 
        src={watssap}
        alt="WhatsApp" 
        style={styles.icon} 
      />
    </a>
  );
};

const styles = {
    button: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      padding: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'white',
      zIndex: '1000',
      transition: 'transform 0.3s ease-in-out',
      animation: 'pulse 2s infinite'
    },
    icon: {
      width: '40px',
      height: '40px',
    },
  };

export default WhatsAppFloatingButton;
