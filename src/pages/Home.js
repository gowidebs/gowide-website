import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const ServicesPreview = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.05), rgba(255, 137, 6, 0.02));
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  h3 {
    color: var(--primary-orange);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ProductsPreview = styled.section`
  padding: 6rem 2rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 3rem 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 137, 6, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(255, 137, 6, 0.3);
  }
  
  h3 {
    color: var(--primary-orange);
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--primary-orange);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e67e00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 137, 6, 0.4);
  }
`;

const StatsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 800px;
  margin: 3rem auto 0;
`;

const StatItem = styled(motion.div)`
  .number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-orange);
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
      <ServicesPreview>
        <SectionTitle>
          Our <span className="highlight">Services</span>
        </SectionTitle>
        <ServicesGrid>
          <ServiceCard
            as={Link}
            to="/branding"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Branding</h3>
            <p>Create memorable brand identities that resonate with your audience and drive business growth.</p>
            <CTAButton to="/branding">Learn More</CTAButton>
          </ServiceCard>
          
          <ServiceCard
            as={Link}
            to="/advertising"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Advertising</h3>
            <p>Strategic advertising campaigns that amplify your brand reach and maximize ROI.</p>
            <CTAButton to="/advertising">Learn More</CTAButton>
          </ServiceCard>
          
          <ServiceCard
            as={Link}
            to="/marketing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Marketing</h3>
            <p>Comprehensive digital marketing strategies that drive growth and engagement.</p>
            <CTAButton to="/marketing">Learn More</CTAButton>
          </ServiceCard>
          
          <ServiceCard
            as={Link}
            to="/technology"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Technology</h3>
            <p>Cutting-edge technology solutions that transform your business operations.</p>
            <CTAButton to="/technology">Learn More</CTAButton>
          </ServiceCard>
        </ServicesGrid>
      </ServicesPreview>
      
      <ProductsPreview>
        <SectionTitle>
          Our <span className="highlight">Products</span>
        </SectionTitle>
        <ProductsGrid>
          <ProductCard
            as={Link}
            to="/rendre"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Rendre</h3>
            <p>Professional 3D rendering and visualization platform for architects and designers.</p>
            <CTAButton to="/rendre">Explore Rendre</CTAButton>
          </ProductCard>
          
          <ProductCard
            as={Link}
            to="/upflyover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>UpFlyOver</h3>
            <p>Advanced drone fleet management and aerial photography platform.</p>
            <CTAButton to="/upflyover">Explore UpFlyOver</CTAButton>
          </ProductCard>
          
          <ProductCard
            as={Link}
            to="/gymestry"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Gymestry</h3>
            <p>Complete gym and fitness center management solution with member tracking.</p>
            <CTAButton to="/gymestry">Explore Gymestry</CTAButton>
          </ProductCard>
          
          <ProductCard
            as={Link}
            to="/gowidecrm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>GoWideCRM</h3>
            <p>Powerful CRM solution to manage customer relationships and sales pipeline.</p>
            <CTAButton to="/gowidecrm">Explore GoWideCRM</CTAButton>
          </ProductCard>
          
          <ProductCard
            as={Link}
            to="/hotelpro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3>HotelPro</h3>
            <p>Complete hotel management system with booking and guest services.</p>
            <CTAButton to="/hotelpro">Explore HotelPro</CTAButton>
          </ProductCard>
        </ProductsGrid>
      </ProductsPreview>
      
      <StatsSection>
        <SectionTitle>
          Our <span className="highlight">Impact</span>
        </SectionTitle>
        <StatsGrid>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="number">500+</div>
            <div className="label">Projects Completed</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="number">200+</div>
            <div className="label">Happy Clients</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="number">5+</div>
            <div className="label">Years Experience</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="number">24/7</div>
            <div className="label">Support Available</div>
          </StatItem>
        </StatsGrid>
      </StatsSection>
    </>
  );
};

export default Home;