import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
`;

const GoWideCRM = () => {
  return (
    <ProductContainer>
      <HeroSection>
        <Title>
          <span className="highlight">GoWideCRM</span> - Customer Management
        </Title>
        <Description>
          Powerful CRM solution to manage customer relationships, sales pipeline, and business growth.
        </Description>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Lead Management</h3>
          <p>Comprehensive lead tracking and conversion optimization</p>
        </FeatureCard>
        
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Sales Pipeline</h3>
          <p>Visual sales pipeline with automated workflow management</p>
        </FeatureCard>
        
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Customer Analytics</h3>
          <p>Advanced analytics and reporting for data-driven decisions</p>
        </FeatureCard>
      </FeaturesGrid>
    </ProductContainer>
  );
};

export default GoWideCRM;