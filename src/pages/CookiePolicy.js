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
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    
    th, td {
      border: 1px solid var(--primary-orange);
      padding: 0.5rem;
      text-align: left;
    }
    
    th {
      background: rgba(255, 137, 6, 0.1);
      color: var(--primary-orange);
    }
  }
`;

const CookiePolicy = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy - GoWide"
        description="Information about how GoWide uses cookies and tracking technologies"
        url="https://gowide.in/cookie-policy"
      />
      <Container>
        <ParticleBackground />
        <Content>
          <h1>Cookie Policy</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience and analyze website usage.</p>
          
          <h2>2. Types of Cookies We Use</h2>
          
          <table>
            <thead>
              <tr>
                <th>Cookie Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essential</td>
                <td>Website functionality and security</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Website usage and performance</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>Personalized advertising</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>Preferences</td>
                <td>Remember your settings</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
          
          <h2>3. Essential Cookies</h2>
          <p>These cookies are necessary for the website to function properly:</p>
          <ul>
            <li>Authentication and security</li>
            <li>Form submission and validation</li>
            <li>Shopping cart functionality</li>
            <li>Load balancing</li>
          </ul>
          
          <h2>4. Analytics Cookies</h2>
          <p>We use analytics cookies to understand how visitors interact with our website:</p>
          <ul>
            <li>Google Analytics - Website traffic analysis</li>
            <li>Vercel Analytics - Performance monitoring</li>
            <li>Hotjar - User behavior analysis</li>
          </ul>
          
          <h2>5. Marketing Cookies</h2>
          <p>These cookies help us deliver relevant advertisements:</p>
          <ul>
            <li>Facebook Pixel - Social media advertising</li>
            <li>Google Ads - Search and display advertising</li>
            <li>LinkedIn Insight Tag - Professional network advertising</li>
          </ul>
          
          <h2>6. Third-Party Cookies</h2>
          <p>Some cookies are set by third-party services:</p>
          <ul>
            <li>Social media platforms (Facebook, LinkedIn, Twitter)</li>
            <li>Video embedding (YouTube, Vimeo)</li>
            <li>Chat widgets and support tools</li>
            <li>Payment processors</li>
          </ul>
          
          <h2>7. Managing Cookies</h2>
          <p>You can control cookies through:</p>
          <ul>
            <li>Browser settings - Block or delete cookies</li>
            <li>Our cookie consent banner</li>
            <li>Opt-out links for specific services</li>
            <li>Privacy settings on third-party platforms</li>
          </ul>
          
          <h2>8. Cookie Consent</h2>
          <p>By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw consent at any time through your browser settings.</p>
          
          <h2>9. Updates to This Policy</h2>
          <p>We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.</p>
          
          <h2>10. Contact Us</h2>
          <p>For questions about our Cookie Policy:</p>
          <p>Email: contact@gowide.in<br />
          Phone: +917559988886</p>
        </Content>
      </Container>
    </>
  );
};

export default CookiePolicy;