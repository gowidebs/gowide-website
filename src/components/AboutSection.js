import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SplitSection, ContentSide, ImageSide } from '../styles/GlobalStyles';

const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255, 137, 6, 0.03), transparent 50%);
    pointer-events: none;
  }
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  border: 1px solid rgba(255, 137, 6, 0.2);
  box-shadow: 0 0 30px rgba(255, 137, 6, 0.3);
  transition: box-shadow 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0 0 40px rgba(255, 137, 6, 0.5);
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const CompanyLogo = styled.div`
  font-size: 4rem;
  font-weight: 800;
  transition: all 0.3s ease;

  .go {
    color: var(--primary-orange);
  }

  .wide {
    color: var(--text-primary);

    body.light-theme & {
      color: var(--bg-primary);
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 137, 6, 0.05);
  border: 1px solid rgba(255, 137, 6, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 137, 6, 0.4);
    box-shadow: 0 10px 25px rgba(255, 137, 6, 0.2);
  }

  body.light-theme & {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-orange);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  color: var(--text-primary);
  font-weight: 500;
  opacity: 0.9;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' }
  ];

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
      <AboutContainer id="about">
        <SplitSection>
          <ContentSide>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span className="highlight-text" variants={itemVariants}>
                About Gowide
              </motion.span>
              
              <motion.h2 variants={itemVariants}>
                We Create <span className="highlight">Digital Excellence</span>
              </motion.h2>
              
              <motion.p className="main-text" variants={itemVariants}>
                At Gowide, we are passionate about transforming businesses through 
                innovative digital solutions. Our team of creative professionals and 
                technical experts work together to deliver exceptional results that 
                drive growth and success.
              </motion.p>

              <motion.div className="feature-list" variants={itemVariants}>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Creative Design Solutions</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Cutting-edge Technology</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Results-driven Approach</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 Support & Maintenance</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <StatsGrid>
                  {stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatCard>
                  ))}
                </StatsGrid>
              </motion.div>
            </motion.div>
          </ContentSide>

          <ImageSide>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LogoContainer>
                <CompanyLogo>
                  <span className="go">Go</span><span className="wide">Wide</span>
                </CompanyLogo>
              </LogoContainer>
            </motion.div>
          </ImageSide>
        </SplitSection>
      </AboutContainer>
    </Container>
  );
};

export default AboutSection;