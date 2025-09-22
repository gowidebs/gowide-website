import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Button } from '../styles/GlobalStyles';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: transparent;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-primary);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const ContactContent = styled.div`
  background: transparent;
  border: 1px solid rgba(255, 137, 6, 0.3);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  margin-top: 2rem;
  max-width: 800px;
  margin: 2rem auto 0;

  body.light-theme & {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ContactText = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: var(--text-primary);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }

  p {
    color: var(--text-primary);
    opacity: 0.9;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactForm = styled(motion.form)`
  display: grid;
  gap: 1.5rem;
  margin-top: 3rem;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: var(--text-primary);
    font-weight: 500;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }

  input, textarea {
    padding: 1rem;
    border: 1px solid rgba(255, 137, 6, 0.3);
    border-radius: 8px;
    background: transparent;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary-orange);
      box-shadow: 0 0 10px rgba(255, 137, 6, 0.2);
    }

    &::placeholder {
      color: var(--text-primary);
      opacity: 0.5;
    }

    body.light-theme & {
      background: rgba(255, 255, 255, 0.8);
      color: var(--bg-primary);

      &::placeholder {
        color: var(--bg-primary);
        opacity: 0.5;
      }
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled(Button)`
  justify-self: center;
  margin-top: 1rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Container>
      <ContactContainer id="contact">
        <SectionHeader>
          <SectionTitle>Ready to <span className="highlight">Get Started?</span></SectionTitle>
          <SectionSubtitle>
            Let's discuss your project and bring your ideas to life
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactText>
            <h3>Start Your Digital Journey</h3>
            <p>
              Whether you need branding, technology solutions, marketing, or advertising, 
              we're here to help you achieve your business goals. Get in touch with our 
              team of experts today.
            </p>
          </ContactText>

          <ContactButtons>
            <Button as="a" href="mailto:contact@gowide.in" primary>
              <i className="fas fa-envelope"></i>
              Email Us
            </Button>
            <Button as="a" href="tel:+919876543210">
              <i className="fas fa-phone"></i>
              Call Us
            </Button>
          </ContactButtons>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormRow>
              <FormGroup>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              primary
              disabled={isSubmitting}
            >
              <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </Container>
  );
};

export default ContactSection;