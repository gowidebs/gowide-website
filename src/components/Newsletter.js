import React, { useState } from 'react';
import { NewsletterSection, NewsletterForm, NotificationSuccess } from '../styles/GlobalStyles';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setShowNotification(true);
      setEmail('');
      setIsSubmitting(false);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 1000);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <NewsletterSection>
        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated with our latest news and updates</p>
        
        <NewsletterForm onSubmit={handleSubmit}>
          <div className="email-input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button 
            type="submit" 
            className="subscribe-btn"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
            <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
          </button>
        </NewsletterForm>
      </NewsletterSection>

      {showNotification && (
        <NotificationSuccess>
          <i className="fas fa-check-circle"></i>
          <span>Successfully subscribed to our newsletter!</span>
          <button onClick={closeNotification}>
            <i className="fas fa-times"></i>
          </button>
        </NotificationSuccess>
      )}
    </>
  );
};

export default Newsletter;