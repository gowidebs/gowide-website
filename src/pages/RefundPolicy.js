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

const RefundPolicy = () => {
  return (
    <>
      <SEO 
        title="Refund Policy - GoWide"
        description="GoWide refund policy for services and project cancellations"
        url="https://gowide.in/refund-policy"
      />
      <Container>
        <ParticleBackground />
        <Content>
          <h1>Refund Policy</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h2>1. General Policy</h2>
          <p>GoWide is committed to client satisfaction. Our refund policy varies based on the type of service and project stage.</p>
          
          <h2>2. Project-Based Services</h2>
          <h3>Before Project Commencement:</h3>
          <ul>
            <li>Full refund available within 48 hours of contract signing</li>
            <li>50% refund available within 7 days if no work has begun</li>
          </ul>
          
          <h3>After Project Commencement:</h3>
          <ul>
            <li>Refunds calculated based on work completed</li>
            <li>Client retains rights to completed deliverables</li>
            <li>Minimum 25% of project value is non-refundable for setup and planning</li>
          </ul>
          
          <h2>3. Monthly Retainer Services</h2>
          <ul>
            <li>30-day notice required for cancellation</li>
            <li>No refund for current month's services</li>
            <li>Unused prepaid months are refundable</li>
          </ul>
          
          <h2>4. Digital Products</h2>
          <ul>
            <li>Website templates: 7-day refund if not downloaded</li>
            <li>Digital assets: No refund after download</li>
            <li>Software licenses: Subject to vendor terms</li>
          </ul>
          
          <h2>5. Non-Refundable Items</h2>
          <ul>
            <li>Third-party costs (domains, hosting, licenses)</li>
            <li>Completed and delivered work</li>
            <li>Consultation fees</li>
            <li>Setup and onboarding costs</li>
          </ul>
          
          <h2>6. Refund Process</h2>
          <ul>
            <li>Submit refund request via email to billing@gowide.in</li>
            <li>Include project details and reason for refund</li>
            <li>Refunds processed within 10-15 business days</li>
            <li>Refunds issued to original payment method</li>
          </ul>
          
          <h2>7. Exceptional Circumstances</h2>
          <p>We may provide refunds outside this policy for:</p>
          <ul>
            <li>Service failures on our part</li>
            <li>Technical issues preventing service delivery</li>
            <li>Mutual agreement to terminate project</li>
          </ul>
          
          <h2>8. Dispute Resolution</h2>
          <p>If you're unsatisfied with our refund decision, we encourage discussion to reach a mutually acceptable solution.</p>
          
          <h2>9. Contact for Refunds</h2>
          <p>For refund requests or questions:</p>
          <p>Email: billing@gowide.in<br />
          Phone: +971 XX XXX XXXX<br />
          Include: Project ID, payment reference, and detailed reason</p>
        </Content>
      </Container>
    </>
  );
};

export default RefundPolicy;