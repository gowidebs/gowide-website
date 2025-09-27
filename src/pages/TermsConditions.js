import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: var(--text-primary);
  
  h1 {
    color: var(--primary-orange);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  h2 {
    color: var(--primary-orange);
    margin: 2rem 0 1rem;
  }
  
  p, li {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
  
  ul {
    padding-left: 2rem;
  }
`;

const TermsConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions - GoWide"
        description="Terms and conditions for using GoWide services and website"
        url="https://gowide.in/terms-conditions"
      />
      <Container>
        <ParticleBackground />
        <Content>
          <h1>Terms & Conditions</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using GoWide's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2>2. Services</h2>
          <p>GoWide provides digital marketing, web development, branding, and technology consulting services. We reserve the right to modify or discontinue services at any time.</p>
          
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Use services in compliance with applicable laws</li>
            <li>Not engage in any harmful or illegal activities</li>
          </ul>
          
          <h2>4. Intellectual Property</h2>
          <p>All content, designs, and materials created by GoWide remain our intellectual property unless otherwise agreed in writing. Clients receive usage rights as specified in project agreements.</p>
          
          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payment terms are specified in individual project contracts</li>
            <li>Late payments may incur additional charges</li>
            <li>Refunds are subject to our refund policy</li>
          </ul>
          
          <h2>6. Limitation of Liability</h2>
          <p>GoWide shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
          
          <h2>7. Privacy</h2>
          <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.</p>
          
          <h2>8. Termination</h2>
          <p>Either party may terminate services with appropriate notice as specified in individual agreements. GoWide reserves the right to terminate services for violation of these terms.</p>
          
          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of UAE and India, depending on the jurisdiction of service delivery.</p>
          
          <h2>10. Contact Information</h2>
          <p>For questions about these Terms & Conditions, contact us at:</p>
          <p>Email: legal@gowide.in<br />
          Phone: +971 XX XXX XXXX</p>
        </Content>
      </Container>
    </>
  );
};

export default TermsConditions;