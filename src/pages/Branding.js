import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BrandingContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroBanner = styled.section`
  position: relative;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
    animation: float 6s ease-in-out infinite;
  }
  
  .shape-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation-delay: 2s;
  }
  
  .shape-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  
  .title-main {
    color: var(--text-primary);
    display: block;
  }
  
  .title-highlight {
    color: var(--primary-orange);
    display: block;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const HeroActions = styled.div`
  .cta-primary {
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(255, 137, 6, 0.4);
    }
    
    i {
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-5px); }
      60% { transform: translateY(-3px); }
    }
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  transform: rotate(-10deg);
  
  .showcase-item {
    width: 80px;
    height: 80px;
    background: var(--card-bg);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 137, 6, 0.2);
    transition: all 0.3s ease;
    animation: brandFloat 3s ease-in-out infinite;
    
    &:hover {
      transform: scale(1.1);
      border-color: var(--primary-orange);
    }
    
    .brand-logo {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-orange);
    }
  }
  
  .item-1 { animation-delay: 0s; }
  .item-2 { animation-delay: 0.5s; }
  .item-3 { animation-delay: 1s; }
  .item-4 { animation-delay: 1.5s; }
  .item-5 { animation-delay: 2s; }
  
  @keyframes brandFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.05), rgba(255, 137, 6, 0.02));
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .section-badge {
    display: inline-block;
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary-orange);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
  
  .services-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .services-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    
    .highlight {
      color: var(--primary-orange);
      font-weight: 600;
    }
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCardNew = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &.featured {
    border-color: var(--primary-orange);
    box-shadow: 0 10px 30px rgba(255, 137, 6, 0.2);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .card-top {
    padding: 2rem 2rem 1rem;
    position: relative;
    
    .service-icon-new {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      
      i {
        font-size: 2rem;
        color: white;
      }
    }
    
    .popular-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--primary-orange);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  
  .card-content {
    padding: 0 2rem 2rem;
    
    h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .service-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      span {
        background: rgba(255, 137, 6, 0.1);
        color: var(--primary-orange);
        padding: 0.5rem 1rem;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
`;

const ProcessTimeline = styled.section`
  padding: 6rem 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .section-badge {
    display: inline-block;
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary-orange);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    
    .highlight {
      color: var(--primary-orange);
      font-weight: 600;
    }
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  .branding-timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-orange), rgba(255, 137, 6, 0.3));
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .branding-timeline-content {
      text-align: right;
    }
    
    @media (max-width: 768px) {
      flex-direction: row;
      
      .branding-timeline-content {
        text-align: left;
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  
  .branding-timeline-marker {
    width: 60px;
    height: 60px;
    background: var(--primary-orange);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    margin: 0 2rem;
    
    @media (max-width: 768px) {
      margin: 0 2rem 0 0;
      flex-shrink: 0;
    }
    
    .branding-step-number {
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
  
  .branding-timeline-content {
    flex: 1;
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 137, 6, 0.2);
    
    .branding-timeline-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      
      i {
        font-size: 1.5rem;
        color: white;
      }
    }
    
    h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .branding-timeline-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      
      span {
        background: rgba(255, 137, 6, 0.1);
        color: var(--primary-orange);
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
`;

const AdvantagesSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.05), rgba(255, 137, 6, 0.02));
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .step-number {
    position: absolute;
    top: -15px;
    right: 2rem;
    background: var(--primary-orange);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
  }
  
  .advantage-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    
    i {
      font-size: 2rem;
      color: white;
    }
  }
  
  h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .advantage-highlight {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    span {
      color: var(--primary-orange);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;

const Branding = () => {
  const { t } = useTranslation();
  
  return (
    <BrandingContainer>
      <HeroBanner>
        <HeroBackground>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </HeroBackground>
        
        <HeroContent>
          <HeroTitle>
            <span className="title-main">{t('branding.heroTitle').split(' ').slice(0, 2).join(' ')}</span>
            <span className="title-highlight">{t('branding.heroTitle').split(' ').slice(2).join(' ')}</span>
          </HeroTitle>
          
          <HeroDescription>
            {t('branding.heroSubtitle')}
          </HeroDescription>
          
          <HeroActions>
            <button className="cta-primary">
              <span>{t('branding.startJourney')}</span>
              <i className="fas fa-arrow-down"></i>
            </button>
          </HeroActions>
        </HeroContent>
        
        <HeroVisual>
          <BrandShowcase>
            <div className="showcase-item item-1">
              <div className="brand-logo">B</div>
            </div>
            <div className="showcase-item item-2">
              <div className="brand-logo">R</div>
            </div>
            <div className="showcase-item item-3">
              <div className="brand-logo">A</div>
            </div>
            <div className="showcase-item item-4">
              <div className="brand-logo">N</div>
            </div>
            <div className="showcase-item item-5">
              <div className="brand-logo">D</div>
            </div>
          </BrandShowcase>
        </HeroVisual>
      </HeroBanner>

      <ServicesSection>
        <ServicesHeader>
          <div className="section-badge">
            <span>{t('branding.whatWeOffer')}</span>
          </div>
          <h2 className="services-title">{t('branding.ourServices')}</h2>
          <p className="services-subtitle">{t('branding.servicesSubtitle').split('elevate your brand')[0]}<span className="highlight">elevate your brand</span>{t('branding.servicesSubtitle').split('elevate your brand')[1]}</p>
        </ServicesHeader>
        
        <ServicesContainer>
          <ServiceCardNew
            className="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-top">
              <div className="service-icon-new">
                <i className="fas fa-paint-brush"></i>
              </div>
              <span className="popular-badge">{t('branding.mostPopular')}</span>
            </div>
            <div className="card-content">
              <h3>{t('branding.visualIdentityDesignTitle')}</h3>
              <p>{t('branding.visualIdentityDesignDesc')}</p>
              <div className="service-list">
                <span>{t('branding.logoDesignVariations')}</span>
                <span>{t('branding.brandGuidelines')}</span>
                <span>{t('branding.colorPaletteTypography')}</span>
              </div>
            </div>
          </ServiceCardNew>
          
          <ServiceCardNew
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-top">
              <div className="service-icon-new">
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
            <div className="card-content">
              <h3>{t('branding.brandStrategyTitle')}</h3>
              <p>{t('branding.brandStrategyTitleDesc')}</p>
              <div className="service-list">
                <span>{t('branding.marketResearch')}</span>
                <span>{t('branding.competitorAnalysis')}</span>
                <span>{t('branding.brandPositioning')}</span>
              </div>
            </div>
          </ServiceCardNew>
          
          <ServiceCardNew
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-top">
              <div className="service-icon-new">
                <i className="fas fa-comments"></i>
              </div>
            </div>
            <div className="card-content">
              <h3>{t('branding.brandVoiceMessagingTitle')}</h3>
              <p>{t('branding.brandVoiceMessagingTitleDesc')}</p>
              <div className="service-list">
                <span>{t('branding.voiceGuidelines')}</span>
                <span>{t('branding.contentStrategy')}</span>
                <span>{t('branding.messagingFramework')}</span>
              </div>
            </div>
          </ServiceCardNew>
          
          <ServiceCardNew
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-top">
              <div className="service-icon-new">
                <i className="fas fa-users"></i>
              </div>
            </div>
            <div className="card-content">
              <h3>{t('branding.brandImplementationTitle')}</h3>
              <p>{t('branding.brandImplementationTitleDesc')}</p>
              <div className="service-list">
                <span>{t('branding.teamTraining')}</span>
                <span>{t('branding.assetCreation')}</span>
                <span>{t('branding.launchStrategy')}</span>
              </div>
            </div>
          </ServiceCardNew>
        </ServicesContainer>
      </ServicesSection>

      <ProcessTimeline>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('branding.howWeWork')}</span>
          </div>
          <h2>{t('branding.provenProcess')}</h2>
          <p className="section-subtitle">{t('branding.processSubtitle').split('exceptional brands')[0]}<span className="highlight">exceptional brands</span></p>
        </SectionHeader>
        
        <TimelineContainer>
          <div className="branding-timeline-line"></div>
          
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="branding-timeline-marker">
              <span className="branding-step-number">01</span>
            </div>
            <div className="branding-timeline-content">
              <div className="branding-timeline-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>{t('branding.discoveryResearchTitle')}</h3>
              <p>{t('branding.discoveryResearchTitleDesc')}</p>
              <div className="branding-timeline-features">
                <span>{t('branding.marketAnalysis')}</span>
                <span>{t('branding.competitorResearch')}</span>
                <span>{t('branding.brandAudit')}</span>
              </div>
            </div>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="branding-timeline-marker">
              <span className="branding-step-number">02</span>
            </div>
            <div className="branding-timeline-content">
              <div className="branding-timeline-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>{t('branding.strategyDevelopmentTitle')}</h3>
              <p>{t('branding.strategyDevelopmentTitleDesc')}</p>
              <div className="branding-timeline-features">
                <span>{t('branding.brandPositioning')}</span>
                <span>{t('branding.messagingStrategy')}</span>
                <span>{t('branding.brandArchitecture')}</span>
              </div>
            </div>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="branding-timeline-marker">
              <span className="branding-step-number">03</span>
            </div>
            <div className="branding-timeline-content">
              <div className="branding-timeline-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>{t('branding.creativeDesignTitle')}</h3>
              <p>{t('branding.creativeDesignTitleDesc')}</p>
              <div className="branding-timeline-features">
                <span>{t('branding.logoDesign')}</span>
                <span>{t('branding.visualIdentity')}</span>
                <span>{t('branding.brandGuidelines')}</span>
              </div>
            </div>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="branding-timeline-marker">
              <span className="branding-step-number">04</span>
            </div>
            <div className="branding-timeline-content">
              <div className="branding-timeline-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>{t('branding.launchImplementationTitle')}</h3>
              <p>{t('branding.launchImplementationTitleDesc')}</p>
              <div className="branding-timeline-features">
                <span>{t('branding.brandRollout')}</span>
                <span>{t('branding.teamTraining')}</span>
                <span>{t('branding.ongoingSupport')}</span>
              </div>
            </div>
          </TimelineItem>
        </TimelineContainer>
      </ProcessTimeline>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('branding.whyGoWide')}</span>
          </div>
          <h2>{t('branding.whatSetsUsApart')}</h2>
          <p className="section-subtitle">{t('branding.advantagesSubtitle').split('ideal branding partner')[0]}<span className="highlight">ideal branding partner</span></p>
        </SectionHeader>
        
        <AdvantagesGrid>
          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="step-number">01</div>
            <div className="advantage-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>{t('branding.creativeExcellenceTitle')}</h3>
            <p>{t('branding.creativeExcellenceTitleDesc')}</p>
            <div className="advantage-highlight">
              <span>{t('branding.awardWinningDesigns')}</span>
              <span>{t('branding.creativeIndustryRecognition')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-number">02</div>
            <div className="advantage-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>{t('branding.dataDrivenStrategyTitle')}</h3>
            <p>{t('branding.dataDrivenStrategyTitleDesc')}</p>
            <div className="advantage-highlight">
              <span>{t('branding.marketResearchAnalysis')}</span>
              <span>{t('branding.performanceTracking')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="step-number">03</div>
            <div className="advantage-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>{t('branding.partnershipApproachTitle')}</h3>
            <p>{t('branding.partnershipApproachTitleDesc')}</p>
            <div className="advantage-highlight">
              <span>{t('branding.dedicatedAccountManager')}</span>
              <span>{t('branding.support247Available')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="step-number">04</div>
            <div className="advantage-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>{t('branding.futureReadySolutionsTitle')}</h3>
            <p>{t('branding.futureReadySolutionsTitleDesc')}</p>
            <div className="advantage-highlight">
              <span>{t('branding.scalableBrandSystems')}</span>
              <span>{t('branding.futureProofDesign')}</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>
    </BrandingContainer>
  );
};

export default Branding;