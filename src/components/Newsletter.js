import React, { useState } from 'react';
import styled from 'styled-components';
import { subscribeNewsletter } from '../lib/sanity';
import { showNotification } from './Notification';

const NewsletterSection = styled.section`
  background: linear-gradient(135deg, var(--primary-orange), #e67c00);
  padding: 4rem 2rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`;

const SubscribeButton = styled.button`
  background: white;
  color: var(--primary-orange);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await subscribeNewsletter(email);
      showNotification('Thank you for subscribing to our newsletter!', 'success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      showNotification('Sorry, there was an error. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NewsletterSection>
      <Container>
        <Title>Stay Updated</Title>
        <Description>
          Get the latest insights, tips, and updates delivered to your inbox
        </Description>
        <NewsletterForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubscribeButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </SubscribeButton>
        </NewsletterForm>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter;