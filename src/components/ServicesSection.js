import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../styles/GlobalStyles';

const ServicesContainer = styled.section`
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
    background: radial-gradient(circle at 30% 70%, rgba(255, 137, 6, 0.03), transparent 50%);
    pointer-events: none;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  body.light-theme & {
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-primary);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: transparent;
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 137, 6, 0.2);
  position: relative;
  overflow: hidden;
  min-height: 280px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 137, 6, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 137, 6, 0.2);
    border-color: rgba(255, 137, 6, 0.5);
  }

  body.light-theme & {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-orange);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;

  body.light-theme & {
    color: var(--bg-primary);
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  text-align: left;
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    color: var(--text-primary);
    font-size: 0.9rem;

    body.light-theme & {
      color: var(--bg-primary);
    }

    i {
      color: var(--primary-orange);
      font-size: 0.8rem;
    }
  }
`;

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Branding",
      icon: "fas fa-palette",
      features: [
        "Logo Design",
        "Brand Identity",
        "Visual Guidelines",
        "Brand Strategy"
      ]
    },
    {
      id: 2,
      title: "Technology",
      icon: "fas fa-code",
      features: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Integration"
      ]
    },
    {
      id: 3,
      title: "Marketing",
      icon: "fas fa-bullhorn",
      features: [
        "Digital Marketing",
        "Content Strategy",
        "Social Media",
        "SEO Optimization"
      ]
    },
    {
      id: 4,
      title: "Advertising",
      icon: "fas fa-ad",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Campaign Management",
        "Analytics & Reporting"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Container>
      <ServicesContainer id="services">
        <SectionHeader>
          <SectionTitle>Our <span className="highlight">Services</span></SectionTitle>
          <SectionSubtitle>
            Comprehensive digital solutions to grow your business
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ServiceIcon>
                  <i className={service.icon}></i>
                </ServiceIcon>
                <ServiceTitle>
                  {service.title.split(' ').map((word, index) => 
                    index === service.title.split(' ').length - 1 ? 
                    <span key={index} className="highlight">{word}</span> : 
                    word + ' '
                  )}
                </ServiceTitle>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </ServicesContainer>
    </Container>
  );
};

export default ServicesSection;