import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MarketingContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
`;

const Marketing = () => {
  return (
    <MarketingContainer>
      <HeroSection>
        <Title>
          Digital <span className="highlight">Marketing</span> Excellence
        </Title>
        <Description>
          Comprehensive digital marketing strategies that drive growth, engagement, and measurable results for your business.
        </Description>
      </HeroSection>

      <ServicesGrid>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>SEO Optimization</h3>
          <p>Boost your search rankings with proven SEO strategies</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Content Marketing</h3>
          <p>Engaging content that attracts and converts your target audience</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Email Marketing</h3>
          <p>Personalized email campaigns that nurture leads and drive sales</p>
        </ServiceCard>
      </ServicesGrid>
    </MarketingContainer>
  );
};

export default Marketing;