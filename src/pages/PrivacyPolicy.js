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

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - GoWide"
        description="Privacy policy explaining how GoWide collects, uses, and protects your personal information"
        url="https://gowide.in/privacy-policy"
      />
      <Container>
        <ParticleBackground />
        <Content>
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as:</p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Company details and project requirements</li>
            <li>Payment and billing information</li>
            <li>Communication preferences</li>
            <li>Job application materials (CV, cover letters)</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate about projects and services</li>
            <li>Process payments and billing</li>
            <li>Send marketing communications (with consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2>3. Information Sharing</h2>
          <p>We do not sell or rent your personal information. We may share information:</p>
          <ul>
            <li>With service providers who assist our operations</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights and safety</li>
            <li>With your explicit consent</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h2>5. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Improve website functionality</li>
            <li>Analyze website usage</li>
            <li>Personalize your experience</li>
            <li>Provide targeted advertising</li>
          </ul>
          
          <h2>6. Data Retention</h2>
          <p>We retain your information for as long as necessary to provide services and comply with legal obligations. You may request deletion of your data at any time.</p>
          
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
          
          <h2>8. International Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.</p>
          
          <h2>9. Children's Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          
          <h2>10. Contact Us</h2>
          <p>For privacy-related questions or requests:</p>
          <p>Email: privacy@gowide.in<br />
          Phone: +971 XX XXX XXXX</p>
        </Content>
      </Container>
    </>
  );
};

export default PrivacyPolicy;