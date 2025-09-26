import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const UpFlyOverPage = styled.div`
  min-height: 100vh;
  background: transparent;
  color: var(--text-primary);
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-orange) 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .hero-tagline {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    opacity: 0.95;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    opacity: 0.9;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 40px;
    opacity: 0.8;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: white;
    color: var(--primary-orange);

    &:hover {
      background: #f0f0f0;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: var(--primary-orange);
      transform: translateY(-2px);
    }
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .platform-preview {
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    border: 3px solid rgba(255, 255, 255, 0.2);
    animation: float 6s ease-in-out infinite;
  }
`;

const LaunchSection = styled.section`
  padding: 80px 0;
  background: transparent;
  color: var(--text-primary);
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const LaunchBanner = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const LaunchTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const LaunchSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const LaunchOffer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const OfferBadge = styled.div`
  background: #ff6b35;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 15px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const OfferText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const OfferDetails = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatCard = styled.div`
  background: var(--bg-primary);
  padding: 40px 20px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const WhyChooseSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WhyChooseCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  
  .icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2rem;
    color: var(--primary-orange);
    transition: all 0.3s ease;
  }

  &:hover .icon {
    background: var(--primary-orange);
    color: white;
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const HowItWorksSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: var(--bg-primary);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const StepNumber = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const PricingSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const PricingNote = styled.p`
  color: var(--primary-orange);
  font-weight: 600;
  margin-top: 10px;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LaunchCTA = styled.div`
  padding: 20px 30px 0;
  text-align: center;
`;

const PricingCard = styled.div`
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &.popular {
    border-color: var(--primary-orange);
    transform: scale(1.05);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const PopularBadge = styled.div`
  background: var(--primary-orange);
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from { box-shadow: 0 0 5px var(--primary-orange); }
    to { box-shadow: 0 0 20px var(--primary-orange), 0 0 30px var(--primary-orange); }
  }
`;

const PricingHeader = styled.div`
  padding: 40px 30px 20px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--primary-orange);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 20px;
  }
`;

const PricingPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 10px;

  span {
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0 30px 40px;

  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-secondary);

    &::before {
      content: '✓';
      color: var(--primary-orange);
      font-weight: bold;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const MobileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MobileText = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--primary-orange);
  }

  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const MobileFeatures = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--text-secondary);
    font-size: 1.1rem;

    &::before {
      content: '📱';
      font-size: 1.2rem;
    }
  }
`;

const MobilePreview = styled.div`
  display: flex;
  justify-content: center;
`;

const PhoneMockup = styled.div`
  width: 280px;
  height: 560px;
  background: var(--primary-orange);
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 20px;
  color: #333;
  font-size: 0.9rem;

  .status-bar {
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .app-header {
    margin-bottom: 20px;
    
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-orange);
      margin-bottom: 5px;
    }
    
    p {
      margin: 2px 0;
      color: #666;
    }
  }

  .stats {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    
    .stat {
      background: #f0f0f0;
      padding: 10px 15px;
      border-radius: 10px;
      font-weight: 600;
      color: var(--primary-orange);
    }
  }

  .activity {
    .activity-item {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      font-size: 0.85rem;
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--bg-secondary);
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-orange);
    
    &::before {
      transform: scaleX(1);
    }
  }

  .feature-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 2rem;
    color: var(--primary-orange);
    border: 3px solid rgba(255, 137, 6, 0.2);
    transition: all 0.3s ease;
  }

  &:hover .feature-icon {
    background: var(--primary-orange);
    color: white;
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const TechStackSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TechItem = styled.div`
  background: var(--bg-primary);
  padding: 30px 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-orange);
  }

  i {
    font-size: 3rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const CTASection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-orange) 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  h2 {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 50px;
    opacity: 0.95;
    line-height: 1.6;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UpFlyOver = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: "fas fa-user-plus",
      title: "Company Registration",
      description: "Easy onboarding process with comprehensive company profile creation and verification system for businesses worldwide."
    },
    {
      icon: "fas fa-shield-check",
      title: "KYC Verification",
      description: "Secure identity verification system ensuring trusted business partnerships with multi-level document verification."
    },
    {
      icon: "fas fa-chart-line",
      title: "Real-time Dashboard",
      description: "Comprehensive analytics and insights for tracking business connections, opportunities, and performance metrics."
    },
    {
      icon: "fas fa-search",
      title: "Company Directory",
      description: "Advanced search and filtering capabilities to find the perfect business partners worldwide with AI-powered matching."
    },
    {
      icon: "fas fa-bullhorn",
      title: "Requirements Posting",
      description: "Post your business requirements and get matched with relevant companies through intelligent recommendation algorithms."
    },
    {
      icon: "fas fa-file-alt",
      title: "Document Management",
      description: "Secure document sharing and management system for business collaborations with version control and access permissions."
    },
    {
      icon: "fas fa-comments",
      title: "Real-time Messaging",
      description: "Instant communication system with file sharing, typing indicators, and message history for seamless business discussions."
    },
    {
      icon: "fas fa-star",
      title: "Portfolio Showcase",
      description: "Complete company portfolio management with project galleries, service offerings, and client testimonials."
    },
    {
      icon: "fas fa-credit-card",
      title: "Subscription Management",
      description: "Flexible pricing tiers with Stripe integration, usage tracking, and automated billing for scalable business growth."
    }
  ];

  const techStack = [
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fas fa-database", name: "MongoDB" },
    { icon: "fas fa-cloud", name: "Vercel" },
    { icon: "fas fa-train", name: "Railway" },
    { icon: "fas fa-lock", name: "JWT Auth" }
  ];

  return (
    <UpFlyOverPage>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t('upflyover.heroTitle')}
              </motion.h1>
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('upflyover.heroTagline')}
              </motion.p>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('upflyover.heroSubtitle')}
              </motion.p>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('upflyover.heroDescription')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <HeroButtons>
                  <CTAButton href="https://upflyover.vercel.app" target="_blank" rel="noopener noreferrer" className="primary">
                    <i className="fas fa-rocket"></i>
                    {t('upflyover.launchPlatform')}
                  </CTAButton>
                  <CTAButton href="#features" className="secondary">
                    <i className="fas fa-info-circle"></i>
                    {t('upflyover.learnMore')}
                  </CTAButton>
                </HeroButtons>
              </motion.div>
            </HeroText>
            <HeroVisual>
              <div className="platform-preview">
                <i className="fas fa-globe-americas"></i>
              </div>
            </HeroVisual>
          </HeroContent>
        </Container>
      </HeroSection>

      <LaunchSection>
        <Container>
          <LaunchBanner>
            <LaunchTitle>{t('upflyover.launchingUAE')}</LaunchTitle>
            <LaunchSubtitle>{t('upflyover.firstThousand')}</LaunchSubtitle>
            <LaunchOffer>
              <OfferBadge>{t('upflyover.limitedOffer')}</OfferBadge>
              <OfferText>{t('upflyover.firstYearFree')}</OfferText>
              <OfferDetails>{t('upflyover.offerDetails')}</OfferDetails>
            </LaunchOffer>
          </LaunchBanner>
          <StatsGrid>
            <StatCard>
              <StatNumber>{t('upflyover.uaeMarket')}</StatNumber>
              <StatLabel>{t('upflyover.launchMarket')}</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000</StatNumber>
              <StatLabel>{t('upflyover.earlyAdopters')}</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>{t('upflyover.freeFirstYear')}</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </LaunchSection>

      <WhyChooseSection>
        <Container>
          <SectionHeader>
            <h2>{t('upflyover.whyChoose')}</h2>
            <p>{t('upflyover.whyChooseDesc')}</p>
          </SectionHeader>
          <WhyChooseGrid>
            <WhyChooseCard>
              <div className="icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>{t('upflyover.dualRoleSystem')}</h3>
              <p>{t('upflyover.dualRoleSystemDesc')}</p>
            </WhyChooseCard>
            <WhyChooseCard>
              <div className="icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>{t('upflyover.aiDrivenMatching')}</h3>
              <p>{t('upflyover.aiDrivenMatchingDesc')}</p>
            </WhyChooseCard>
            <WhyChooseCard>
              <div className="icon">
                <i className="fas fa-shield-check"></i>
              </div>
              <h3>{t('upflyover.verifiedCompanies')}</h3>
              <p>{t('upflyover.verifiedCompaniesDesc')}</p>
            </WhyChooseCard>
            <WhyChooseCard>
              <div className="icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>{t('upflyover.globalReach')}</h3>
              <p>{t('upflyover.globalReachDesc')}</p>
            </WhyChooseCard>
          </WhyChooseGrid>
        </Container>
      </WhyChooseSection>

      <HowItWorksSection>
        <Container>
          <SectionHeader>
            <h2>{t('upflyover.howItWorks')}</h2>
            <p>{t('upflyover.howItWorksDesc')}</p>
          </SectionHeader>
          <StepsGrid>
            <StepCard>
              <StepNumber>🏢01</StepNumber>
              <h3>{t('upflyover.createProfile')}</h3>
              <p>{t('upflyover.createProfileDesc')}</p>
            </StepCard>
            <StepCard>
              <StepNumber>📋02</StepNumber>
              <h3>{t('upflyover.postRequirements')}</h3>
              <p>{t('upflyover.postRequirementsDesc')}</p>
            </StepCard>
            <StepCard>
              <StepNumber>🤖03</StepNumber>
              <h3>{t('upflyover.aiMatching')}</h3>
              <p>{t('upflyover.aiMatchingDesc')}</p>
            </StepCard>
            <StepCard>
              <StepNumber>🤝04</StepNumber>
              <h3>{t('upflyover.connectTrade')}</h3>
              <p>{t('upflyover.connectTradeDesc')}</p>
            </StepCard>
          </StepsGrid>
        </Container>
      </HowItWorksSection>

      <PricingSection>
        <Container>
          <SectionHeader>
            <h2>{t('upflyover.uaeLaunchPricing')}</h2>
            <p>{t('upflyover.pricingDesc')}</p>
            <PricingNote>{t('upflyover.pricingNote')}</PricingNote>
          </SectionHeader>
          <PricingGrid>
            <PricingCard className="popular">
              <PopularBadge>🇦🇪 {t('upflyover.uaeLaunchSpecial')}</PopularBadge>
              <PricingHeader>
                <h3>{t('upflyover.earlyAdopter')}</h3>
                <PricingPrice>{t('upflyover.free')}<span>{t('upflyover.firstYear')}</span></PricingPrice>
                <p>{t('upflyover.completeAccess')}</p>
              </PricingHeader>
              <PricingFeatures>
                <li>{t('upflyover.premiumProfile')}</li>
                <li>{t('upflyover.unlimitedUsers')}</li>
                <li>{t('upflyover.unlimitedRequirements')}</li>
                <li>{t('upflyover.browseUnlimited')}</li>
                <li>{t('upflyover.advancedMessaging')}</li>
                <li>{t('upflyover.aiMatching')}</li>
                <li>{t('upflyover.analyticsDashboard')}</li>
                <li>{t('upflyover.prioritySupport')}</li>
                <li>{t('upflyover.customIntegrations')}</li>
                <li>{t('upflyover.dedicatedManager')}</li>
              </PricingFeatures>
              <LaunchCTA>
                <CTAButton href="https://upflyover.vercel.app" target="_blank" className="primary">
                  🚀 {t('upflyover.joinFreeYear')}
                </CTAButton>
              </LaunchCTA>
            </PricingCard>
            
            <PricingCard>
              <PricingHeader>
                <h3>{t('upflyover.professional')}</h3>
                <PricingPrice>$99<span>{t('upflyover.perMonth')}</span></PricingPrice>
                <p>{t('upflyover.startingYear2')}</p>
              </PricingHeader>
              <PricingFeatures>
                <li>{t('upflyover.enhancedProfile')}</li>
                <li>{t('upflyover.fiveUsers')}</li>
                <li>{t('upflyover.fiftyRequirements')}</li>
                <li>{t('upflyover.browseUnlimited')}</li>
                <li>{t('upflyover.advancedMessaging')}</li>
                <li>{t('upflyover.aiMatching')}</li>
                <li>{t('upflyover.analyticsDashboard')}</li>
                <li>{t('upflyover.prioritySupport')}</li>
              </PricingFeatures>
            </PricingCard>
            
            <PricingCard>
              <PricingHeader>
                <h3>{t('upflyover.enterprise')}</h3>
                <PricingPrice>$299<span>{t('upflyover.perMonth')}</span></PricingPrice>
                <p>{t('upflyover.startingYear2')}</p>
              </PricingHeader>
              <PricingFeatures>
                <li>{t('upflyover.premiumProfileBadges')}</li>
                <li>{t('upflyover.unlimitedUsers')}</li>
                <li>{t('upflyover.unlimitedRequirements')}</li>
                <li>{t('upflyover.advancedTeamManagement')}</li>
                <li>{t('upflyover.customIntegrations')}</li>
                <li>{t('upflyover.advancedAnalytics')}</li>
                <li>{t('upflyover.dedicatedManager')}</li>
                <li>{t('upflyover.phoneSupport')}</li>
              </PricingFeatures>
            </PricingCard>
          </PricingGrid>
        </Container>
      </PricingSection>

      <MobileSection>
        <Container>
          <MobileContent>
            <MobileText>
              <h2>{t('upflyover.takeAnywhere')}</h2>
              <p>{t('upflyover.mobileDesc')}</p>
              <MobileFeatures>
                <li>{t('upflyover.realtimeNotifications')}</li>
                <li>{t('upflyover.browseOffline')}</li>
                <li>{t('upflyover.instantMessaging')}</li>
              </MobileFeatures>
            </MobileText>
            <MobilePreview>
              <PhoneMockup>
                <PhoneScreen>
                  <div className="status-bar">{t('upflyover.statusBar')}</div>
                  <div className="app-header">
                    <h3>UpFlyOver</h3>
                    <p>{t('upflyover.welcomeBack')}</p>
                    <p>{t('upflyover.connectionRequests')}</p>
                  </div>
                  <div className="stats">
                    <div className="stat">{t('upflyover.connections')}</div>
                    <div className="stat">{t('upflyover.messages')}</div>
                  </div>
                  <div className="activity">
                    <div className="activity-item">🏢 {t('upflyover.gulfTradingRequest')}</div>
                    <div className="activity-item">💬 {t('upflyover.newMessageTech')}</div>
                    <div className="activity-item">📋 {t('upflyover.requirementResponses')}</div>
                  </div>
                </PhoneScreen>
              </PhoneMockup>
            </MobilePreview>
          </MobileContent>
        </Container>
      </MobileSection>

      <FeaturesSection id="features">
        <Container>
          <SectionHeader>
            <h2>{t('upflyover.platformFeatures')}</h2>
            <p>{t('upflyover.featuresDesc')}</p>
          </SectionHeader>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard>
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3>{t(`upflyover.feature${index + 1}Title`)}</h3>
                  <p>{t(`upflyover.feature${index + 1}Desc`)}</p>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <TechStackSection>
        <Container>
          <SectionHeader>
            <h2>{t('upflyover.builtWithTech')}</h2>
            <p>{t('upflyover.techDesc')}</p>
          </SectionHeader>
          <TechGrid>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TechItem>
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </TechItem>
              </motion.div>
            ))}
          </TechGrid>
        </Container>
      </TechStackSection>

      <CTASection>
        <Container>
          <CTAContent>
            <h2>{t('upflyover.readyFoundingMember')}</h2>
            <p>{t('upflyover.foundingDesc')}</p>
            <CTAButtons>
              <CTAButton href="https://upflyover.vercel.app" target="_blank" rel="noopener noreferrer" className="primary">
                <i className="fas fa-rocket"></i>
                {t('upflyover.getStartedNow')}
              </CTAButton>
              <CTAButton href="/contact" className="secondary">
                <i className="fas fa-envelope"></i>
                {t('upflyover.contactSales')}
              </CTAButton>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </UpFlyOverPage>
  );
};

export default UpFlyOver;