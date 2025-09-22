import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button, Container } from '../styles/GlobalStyles';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 8rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 6rem 1.5rem 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 137, 6, 0.1);
  border: 1px solid rgba(255, 137, 6, 0.3);
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  
  .badge-text {
    color: var(--primary-orange);
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);

  .title-highlight {
    background: linear-gradient(45deg, var(--primary-orange), var(--secondary-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-primary);
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: 3rem;

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroActions = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroStats = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  min-width: 120px;

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary-orange);
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--text-primary);
    opacity: 0.8;
    font-weight: 500;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BrandShowcase = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ShowcaseItem = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 137, 6, 0.1);
  border: 2px solid rgba(255, 137, 6, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 137, 6, 0.2);
    border-color: var(--primary-orange);
    transform: scale(1.1);
  }

  .brand-logo {
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary-orange);
  }

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    top: 25%;
    right: 0;
  }

  &:nth-child(3) {
    bottom: 25%;
    right: 0;
  }

  &:nth-child(4) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(5) {
    top: 25%;
    left: 0;
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    
    .brand-logo {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    .brand-logo {
      font-size: 1.2rem;
    }
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
    animation: float 8s ease-in-out infinite;
  }

  .shape-1 {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 80px;
    height: 80px;
    top: 60%;
    right: 20%;
    animation-delay: 3s;
  }

  .shape-3 {
    width: 100px;
    height: 100px;
    bottom: 30%;
    left: 15%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Container>
      <HeroContainer>
        <FloatingShapes>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </FloatingShapes>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroContent>
            <HeroBadge variants={itemVariants}>
              <i className="fas fa-rocket"></i>
              <span className="badge-text">Creative Digital Solutions</span>
            </HeroBadge>

            <HeroTitle variants={itemVariants}>
              Growing Brands Through{' '}
              <span className="title-highlight">Innovation</span>
            </HeroTitle>

            <HeroDescription variants={itemVariants}>
              We are a creative agency focused on growing brands through 
              innovative digital solutions and memorable experiences. From branding 
              to technology, we deliver results that matter.
            </HeroDescription>

            <HeroActions variants={itemVariants}>
              <Button as="a" href="#contact" primary>
                <i className="fas fa-arrow-right"></i>
                Get Started
              </Button>
              <Button as="a" href="#services">
                <i className="fas fa-play"></i>
                Our Services
              </Button>
            </HeroActions>

            <HeroStats variants={itemVariants}>
              <StatItem>
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">25+</span>
                <span className="stat-label">Happy Clients</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </StatItem>
            </HeroStats>
          </HeroContent>
        </motion.div>

        <HeroVisual
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BrandShowcase>
            <ShowcaseItem
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="brand-logo">B</div>
            </ShowcaseItem>
            <ShowcaseItem
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="brand-logo">T</div>
            </ShowcaseItem>
            <ShowcaseItem
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="brand-logo">M</div>
            </ShowcaseItem>
            <ShowcaseItem
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="brand-logo">A</div>
            </ShowcaseItem>
            <ShowcaseItem
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="brand-logo">P</div>
            </ShowcaseItem>
          </BrandShowcase>
        </HeroVisual>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;