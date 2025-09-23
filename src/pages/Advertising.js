import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdvertisingContainer = styled.div`
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

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-orange);
  }
  
  .label {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
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

const Advertising = () => {
  return (
    <AdvertisingContainer>
      <HeroSection>
        <Title>
          Amplify Your <span className="highlight">Brand Reach</span>
        </Title>
        <Description>
          Strategic advertising campaigns that drive results and maximize your ROI through targeted digital marketing solutions.
        </Description>
        
        <StatsContainer>
          <StatItem>
            <div className="number">300%</div>
            <div className="label">Avg ROI Increase</div>
          </StatItem>
          <StatItem>
            <div className="number">50M+</div>
            <div className="label">Impressions Generated</div>
          </StatItem>
        </StatsContainer>
      </HeroSection>

      <ServicesGrid>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Google Ads</h3>
          <p>Strategic Google Ads campaigns that maximize your visibility and conversions</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Social Media Ads</h3>
          <p>Targeted Facebook, Instagram, and LinkedIn advertising campaigns</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Display Advertising</h3>
          <p>Eye-catching display ads across premium publisher networks</p>
        </ServiceCard>
      </ServicesGrid>
    </AdvertisingContainer>
  );
};

export default Advertising;