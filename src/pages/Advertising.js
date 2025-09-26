import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AdvertisingContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  .hero-badge {
    display: inline-block;
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary-orange);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
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

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-orange);
    display: block;
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MetricsCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  .metric-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    font-weight: 600;
    
    i {
      color: var(--primary-orange);
    }
  }
  
  .metric-chart {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .chart-bar {
    background: linear-gradient(to top, var(--primary-orange), rgba(255, 137, 6, 0.6));
    border-radius: 4px;
    flex: 1;
    animation: growUp 1.5s ease-out;
  }
  
  .chart-bar-1 { height: 30%; }
  .chart-bar-2 { height: 60%; }
  .chart-bar-3 { height: 100%; }
  .chart-bar-4 { height: 45%; }
  
  .metric-value {
    text-align: center;
    
    .value-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-orange);
    }
    
    .value-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  }
  
  @keyframes growUp {
    from { height: 0; }
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.05), rgba(255, 137, 6, 0.02));
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
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
  
  .service-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    
    span {
      background: rgba(255, 137, 6, 0.1);
      color: var(--primary-orange);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

const ProcessSection = styled.section`
  padding: 6rem 2rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
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

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;
  
  .step-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    
    i {
      font-size: 2rem;
      color: white;
    }
  }
  
  .step-number {
    position: absolute;
    top: -10px;
    right: calc(50% - 50px);
    background: var(--card-bg);
    color: var(--primary-orange);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    border: 2px solid var(--primary-orange);
  }
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
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
  
  .advantage-icon {
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
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .advantage-features {
    list-style: none;
    margin-bottom: 2rem;
    
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
      
      i {
        color: var(--primary-orange);
        font-size: 0.8rem;
      }
    }
  }
  
  .advantage-metric {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 137, 6, 0.2);
    
    .metric-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-orange);
      display: block;
    }
    
    .metric-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  }
`;

const PlatformsSection = styled.section`
  padding: 6rem 2rem;
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlatformCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 137, 6, 0.2);
  }
  
  .platform-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    i {
      font-size: 2rem;
      color: white;
    }
  }
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .platform-stats {
    .stat {
      text-align: center;
      
      .stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-orange);
        display: block;
      }
      
      .stat-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }
  }
`;

const Advertising = () => {
  const { t } = useTranslation();
  
  return (
    <AdvertisingContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>{t('advertising.advertisingSolutions')}</span>
          </div>
          
          <Title>
            <span className="title-main">{t('advertising.heroTitle').split(' ').slice(0, 2).join(' ')}</span>
            <span className="title-highlight">{t('advertising.heroTitle').split(' ').slice(2).join(' ')}</span>
          </Title>
          
          <Description>
            {t('advertising.heroSubtitle')}
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">300%</span>
              <span className="stat-label">{t('advertising.avgROIIncrease')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">50M+</span>
              <span className="stat-label">{t('advertising.impressionsGenerated')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">95%</span>
              <span className="stat-label">{t('advertising.clientSatisfaction')}</span>
            </StatItem>
          </StatsContainer>
        </HeroContent>
        
        <HeroVisual>
          <MetricsCard
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="metric-header">
              <i className="fas fa-chart-line"></i>
              <span>{t('advertising.campaignPerformance')}</span>
            </div>
            <div className="metric-chart">
              <div className="chart-bar chart-bar-1"></div>
              <div className="chart-bar chart-bar-2"></div>
              <div className="chart-bar chart-bar-3"></div>
              <div className="chart-bar chart-bar-4"></div>
            </div>
            <div className="metric-value">
              <span className="value-number">+245%</span>
              <span className="value-label">{t('advertising.growth')}</span>
            </div>
          </MetricsCard>
        </HeroVisual>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('advertising.ourServices')}</span>
          </div>
          <h2>{t('advertising.advertisingServices')}</h2>
          <p className="section-subtitle">{t('advertising.servicesSubtitle').split('drive growth')[0]}<span className="highlight">drive growth</span>{t('advertising.servicesSubtitle').split('drive growth')[1]}</p>
        </SectionHeader>

        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="service-icon">
              <i className="fab fa-google"></i>
            </div>
            <h3>{t('advertising.googleAds')}</h3>
            <p>{t('advertising.googleAdsDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.searchAds')}</span>
              <span>{t('advertising.displayAds')}</span>
              <span>{t('advertising.shoppingAds')}</span>
              <span>{t('advertising.videoAds')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="service-icon">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3>{t('advertising.socialMediaAdvertising')}</h3>
            <p>{t('advertising.socialMediaAdvertisingDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.facebookAds')}</span>
              <span>{t('advertising.instagramAds')}</span>
              <span>{t('advertising.linkedinAds')}</span>
              <span>{t('advertising.twitterAds')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="service-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>{t('advertising.targetedCampaigns')}</h3>
            <p>{t('advertising.targetedCampaignsDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.audienceTargeting')}</span>
              <span>{t('advertising.retargeting')}</span>
              <span>{t('advertising.lookalikeاudiences')}</span>
              <span>{t('advertising.behavioralTargeting')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="service-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>{t('advertising.performanceTracking')}</h3>
            <p>{t('advertising.performanceTrackingDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.realTimeAnalytics')}</span>
              <span>{t('advertising.conversionTracking')}</span>
              <span>{t('advertising.roiReporting')}</span>
              <span>{t('advertising.customDashboards')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="service-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>{t('advertising.creativeDesign')}</h3>
            <p>{t('advertising.creativeDesignDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.bannerDesign')}</span>
              <span>{t('advertising.videoCreatives')}</span>
              <span>{t('advertising.copywriting')}</span>
              <span>{t('advertising.brandConsistency')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>{t('advertising.campaignOptimization')}</h3>
            <p>{t('advertising.campaignOptimizationDesc')}</p>
            <div className="service-features">
              <span>{t('advertising.abTesting')}</span>
              <span>{t('advertising.bidOptimization')}</span>
              <span>{t('advertising.keywordResearch')}</span>
              <span>{t('advertising.landingPageOptimization')}</span>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('advertising.ourProcess')}</span>
          </div>
          <h2>{t('advertising.advertisingProcess')}</h2>
          <p className="section-subtitle">{t('advertising.processSubtitle').split('maximize your advertising ROI')[0]}<span className="highlight">maximize your advertising ROI</span></p>
        </SectionHeader>

        <ProcessSteps>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="step-icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="step-number">01</div>
            <h3>{t('advertising.researchAnalysis')}</h3>
            <p>{t('advertising.researchAnalysisDesc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <div className="step-number">02</div>
            <h3>{t('advertising.strategyDevelopment')}</h3>
            <p>{t('advertising.strategyDevelopmentDesc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="step-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="step-number">03</div>
            <h3>{t('advertising.campaignLaunch')}</h3>
            <p>{t('advertising.campaignLaunchDesc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="step-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="step-number">04</div>
            <h3>{t('advertising.optimizeTrack')}</h3>
            <p>{t('advertising.optimizeTrackDesc')}</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('advertising.whyChooseUs')}</span>
          </div>
          <h2>{t('advertising.advertisingAdvantages')}</h2>
          <p className="section-subtitle">{t('advertising.advantagesSubtitle').split('ideal advertising partner')[0]}<span className="highlight">ideal advertising partner</span></p>
        </SectionHeader>

        <AdvantagesGrid>
          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>{t('advertising.dataDrivenResults')}</h3>
            <p>{t('advertising.dataDrivenResultsDesc')}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t('advertising.realTimeAnalytics')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.performanceTracking')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.roiOptimization')}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">300%</span>
              <span className="metric-label">{t('advertising.avgROIIncrease')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>{t('advertising.expertTeam')}</h3>
            <p>{t('advertising.expertTeamDesc')}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t('advertising.googleCertified')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.facebookBlueprint')}</li>
              <li><i className="fas fa-check"></i> 5+ {t('advertising.yearsExperience')}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">50M+</span>
              <span className="metric-label">{t('advertising.impressionsManaged')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>{t('advertising.quickResults')}</h3>
            <p>{t('advertising.quickResultsDesc')}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t('advertising.setup24to48hr')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.instantOptimization')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.weeklyReports')}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">7</span>
              <span className="metric-label">{t('advertising.daysToResults')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>{t('advertising.dedicatedSupport')}</h3>
            <p>{t('advertising.dedicatedSupportDesc')}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t('advertising.accountManager')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.chatSupport247')}</li>
              <li><i className="fas fa-check"></i> {t('advertising.monthlyReviews')}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">24/7</span>
              <span className="metric-label">{t('advertising.supportAvailable')}</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <PlatformsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('advertising.ourPlatforms')}</span>
          </div>
          <h2>{t('advertising.advertisingPlatforms')}</h2>
          <p className="section-subtitle">{t('advertising.platformsSubtitle').split('maximum reach')[0]}<span className="highlight">maximum reach</span></p>
        </SectionHeader>

        <PlatformsGrid>
          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="platform-icon">
              <i className="fab fa-google"></i>
            </div>
            <h3>{t('advertising.googleAdsTitle')}</h3>
            <p>{t('advertising.googleAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">8.5B+</span>
                <span className="stat-label">{t('advertising.dailySearches')}</span>
              </div>
            </div>
          </PlatformCard>

          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="platform-icon">
              <i className="fab fa-facebook"></i>
            </div>
            <h3>{t('advertising.facebookAdsTitle')}</h3>
            <p>{t('advertising.facebookAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2.9B+</span>
                <span className="stat-label">{t('advertising.monthlyUsers')}</span>
              </div>
            </div>
          </PlatformCard>

          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="platform-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <h3>{t('advertising.instagramAdsTitle')}</h3>
            <p>{t('advertising.instagramAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">{t('advertising.monthlyUsers')}</span>
              </div>
            </div>
          </PlatformCard>

          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="platform-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <h3>{t('advertising.linkedinAdsTitle')}</h3>
            <p>{t('advertising.linkedinAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">900M+</span>
                <span className="stat-label">{t('advertising.professionals')}</span>
              </div>
            </div>
          </PlatformCard>

          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="platform-icon">
              <i className="fab fa-youtube"></i>
            </div>
            <h3>{t('advertising.youtubeAdsTitle')}</h3>
            <p>{t('advertising.youtubeAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">{t('advertising.monthlyUsers')}</span>
              </div>
            </div>
          </PlatformCard>

          <PlatformCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="platform-icon">
              <i className="fab fa-twitter"></i>
            </div>
            <h3>{t('advertising.twitterAdsTitle')}</h3>
            <p>{t('advertising.twitterAdsDesc2')}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">450M+</span>
                <span className="stat-label">{t('advertising.monthlyUsers')}</span>
              </div>
            </div>
          </PlatformCard>
        </PlatformsGrid>
      </PlatformsSection>
    </AdvertisingContainer>
  );
};

export default Advertising;