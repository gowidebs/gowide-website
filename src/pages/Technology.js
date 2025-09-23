import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechnologyContainer = styled.div`
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

const Technology = () => {
  return (
    <TechnologyContainer>
      <HeroSection>
        <Title>
          Cutting-Edge <span className="highlight">Technology</span> Solutions
        </Title>
        <Description>
          Innovative technology solutions that transform your business operations and drive digital transformation.
        </Description>
      </HeroSection>

      <ServicesGrid>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Web Development</h3>
          <p>Custom web applications built with modern technologies</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Mobile Apps</h3>
          <p>Native and cross-platform mobile applications</p>
        </ServiceCard>
        
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Cloud Solutions</h3>
          <p>Scalable cloud infrastructure and migration services</p>
        </ServiceCard>
      </ServicesGrid>
    </TechnologyContainer>
  );
};

export default Technology;