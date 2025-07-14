import React from 'react';


const PaymentSuccess = () => {
  const whatsappLink = "https://chat.whatsapp.com/your-group-link"; // Replace with actual WhatsApp group link

  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="check-circle">
          <svg viewBox="0 0 24 24" className="check-icon">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </div>
        
        <h1>Payment Successful!</h1>
        <p className="success-message">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>

        <div className="payment-details">
          <p>Transaction ID: #PAY-{Math.random().toString(36).substr(2, 9)}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Time: {new Date().toLocaleTimeString()}</p>
        </div>

        <div className="whatsapp-section">
          <p>Join our community for updates and support:</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <svg className="whatsapp-icon" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.58 3.39 1.56 4.72L2 22l5.39-1.68c1.32.74 2.8 1.17 4.65 1.17 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.75 14.31c-.21.59-.86 1-1.47 1.06-.51.05-.96-.11-1.67-.53-.88-.51-1.62-1.13-2.35-1.86-.73-.73-1.35-1.47-1.86-2.35-.42-.71-.58-1.16-.53-1.67.06-.61.47-1.26 1.06-1.47.25-.1.53-.13.78-.06.27.08.58.28.66.56.08.29.17.58.25.87.08.29.04.61-.13.87-.17.25-.42.47-.67.71-.08.08-.17.17-.25.25.33.83.96 1.51 1.8 1.84l.25-.25c.25-.25.47-.5.71-.67.25-.17.58-.21.87-.13.29.08.58.17.87.25.29.08.48.39.56.66.07.25.04.53-.06.78z"/>
            </svg>
            Join WhatsApp Group
          </a>
        </div>

        <button 
          className="home-button"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;