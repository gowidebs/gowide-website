import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import advertisingTranslations from '../translations/advertisingTranslations';

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
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
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
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
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
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
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
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
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
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const t = advertisingTranslations[currentLang] || advertisingTranslations.en;
  
  return (
    <AdvertisingContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>{t.advertisingSolutions}</span>
          </div>
          
          <Title>
            <span className="title-main">{t.heroTitle.split(' ').slice(0, 2).join(' ')}</span>
            <span className="title-highlight">{t.heroTitle.split(' ').slice(2).join(' ')}</span>
          </Title>
          
          <Description>
            {t.heroSubtitle}
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">300%</span>
              <span className="stat-label">{t.avgROIIncrease}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">50M+</span>
              <span className="stat-label">{t.impressionsGenerated}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">95%</span>
              <span className="stat-label">{t.clientSatisfaction}</span>
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
              <span>{t.campaignPerformance}</span>
            </div>
            <div className="metric-chart">
              <div className="chart-bar chart-bar-1"></div>
              <div className="chart-bar chart-bar-2"></div>
              <div className="chart-bar chart-bar-3"></div>
              <div className="chart-bar chart-bar-4"></div>
            </div>
            <div className="metric-value">
              <span className="value-number">+245%</span>
              <span className="value-label">{t.growth}</span>
            </div>
          </MetricsCard>
        </HeroVisual>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t.ourServices}</span>
          </div>
          <h2>{t.advertisingServices}</h2>
          <p className="section-subtitle">{t.servicesSubtitle.split('drive growth')[0]}<span className="highlight">drive growth</span>{t.servicesSubtitle.split('drive growth')[1]}</p>
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
            <h3>{t.googleAds}</h3>
            <p>{t.googleAdsDesc}</p>
            <div className="service-features">
              <span>{t.searchAds}</span>
              <span>{t.displayAds}</span>
              <span>{t.shoppingAds}</span>
              <span>{t.videoAds}</span>
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
            <h3>{t.socialMediaAdvertising}</h3>
            <p>{t.socialMediaAdvertisingDesc}</p>
            <div className="service-features">
              <span>{t.facebookAds}</span>
              <span>{t.instagramAds}</span>
              <span>{t.linkedinAds}</span>
              <span>{t.twitterAds}</span>
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
            <h3>{t.targetedCampaigns}</h3>
            <p>{t.targetedCampaignsDesc}</p>
            <div className="service-features">
              <span>{t.audienceTargeting}</span>
              <span>{t.retargeting}</span>
              <span>{t.lookalikeAudiences}</span>
              <span>{t.behavioralTargeting}</span>
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
            <h3>{t.performanceTracking}</h3>
            <p>{t.performanceTrackingDesc}</p>
            <div className="service-features">
              <span>{t.realTimeAnalytics}</span>
              <span>{t.conversionTracking}</span>
              <span>{t.roiReporting}</span>
              <span>{t.customDashboards}</span>
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
            <h3>{t.creativeDesign}</h3>
            <p>{t.creativeDesignDesc}</p>
            <div className="service-features">
              <span>{t.bannerDesign}</span>
              <span>{t.videoCreatives}</span>
              <span>{t.copywriting}</span>
              <span>{t.brandConsistency}</span>
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
            <h3>{t.campaignOptimization}</h3>
            <p>{t.campaignOptimizationDesc}</p>
            <div className="service-features">
              <span>{t.abTesting}</span>
              <span>{t.bidOptimization}</span>
              <span>{t.keywordResearch}</span>
              <span>{t.landingPageOptimization}</span>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t.ourProcess}</span>
          </div>
          <h2>{t.advertisingProcess}</h2>
          <p className="section-subtitle">{t.processSubtitle.split('maximize your advertising ROI')[0]}<span className="highlight">maximize your advertising ROI</span></p>
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
            <h3>{t.researchAnalysis}</h3>
            <p>{t.researchAnalysisDesc}</p>
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
            <h3>{t.strategyDevelopment}</h3>
            <p>{t.strategyDevelopmentDesc}</p>
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
            <h3>{t.campaignLaunch}</h3>
            <p>{t.campaignLaunchDesc}</p>
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
            <h3>{t.optimizeTrack}</h3>
            <p>{t.optimizeTrackDesc}</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t.whyChooseUs}</span>
          </div>
          <h2>{t.advertisingAdvantages}</h2>
          <p className="section-subtitle">{t.advantagesSubtitle.split('ideal advertising partner')[0]}<span className="highlight">ideal advertising partner</span></p>
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
            <h3>{t.dataDrivenResults}</h3>
            <p>{t.dataDrivenResultsDesc}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t.realTimeAnalytics}</li>
              <li><i className="fas fa-check"></i> {t.performanceTracking}</li>
              <li><i className="fas fa-check"></i> {t.roiOptimization}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">300%</span>
              <span className="metric-label">{t.avgROIIncrease}</span>
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
            <h3>{t.expertTeam}</h3>
            <p>{t.expertTeamDesc}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t.googleCertified}</li>
              <li><i className="fas fa-check"></i> {t.facebookBlueprint}</li>
              <li><i className="fas fa-check"></i> 5+ {t.yearsExperience}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">50M+</span>
              <span className="metric-label">{t.impressionsManaged}</span>
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
            <h3>{t.quickResults}</h3>
            <p>{t.quickResultsDesc}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t.setup24to48hr}</li>
              <li><i className="fas fa-check"></i> {t.instantOptimization}</li>
              <li><i className="fas fa-check"></i> {t.weeklyReports}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">7</span>
              <span className="metric-label">{t.daysToResults}</span>
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
            <h3>{t.dedicatedSupport}</h3>
            <p>{t.dedicatedSupportDesc}</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> {t.accountManager}</li>
              <li><i className="fas fa-check"></i> {t.chatSupport247}</li>
              <li><i className="fas fa-check"></i> {t.monthlyReviews}</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">24/7</span>
              <span className="metric-label">{t.supportAvailable}</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <PlatformsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t.ourPlatforms}</span>
          </div>
          <h2>{t.advertisingPlatforms}</h2>
          <p className="section-subtitle">{t.platformsSubtitle.split('maximum reach')[0]}<span className="highlight">maximum reach</span></p>
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
            <h3>{t.googleAdsTitle}</h3>
            <p>{t.googleAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">8.5B+</span>
                <span className="stat-label">{t.dailySearches}</span>
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
            <h3>{t.facebookAdsTitle}</h3>
            <p>{t.facebookAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2.9B+</span>
                <span className="stat-label">{t.monthlyUsers}</span>
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
            <h3>{t.instagramAdsTitle}</h3>
            <p>{t.instagramAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">{t.monthlyUsers}</span>
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
            <h3>{t.linkedinAdsTitle}</h3>
            <p>{t.linkedinAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">900M+</span>
                <span className="stat-label">{t.professionals}</span>
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
            <h3>{t.youtubeAdsTitle}</h3>
            <p>{t.youtubeAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">{t.monthlyUsers}</span>
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
            <h3>{t.twitterAdsTitle}</h3>
            <p>{t.twitterAdsDesc2}</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">450M+</span>
                <span className="stat-label">{t.monthlyUsers}</span>
              </div>
            </div>
          </PlatformCard>
        </PlatformsGrid>
      </PlatformsSection>
    </AdvertisingContainer>
  );
};

export default Advertising;