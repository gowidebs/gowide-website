import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MarketingContainer = styled.div`
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
    margin-bottom: 2rem;
    color: var(--text-primary);
    font-weight: 600;
    
    i {
      color: var(--primary-orange);
    }
  }
  
  .metric-circles {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    justify-content: center;
  }
  
  .metric-circle {
    text-align: center;
    
    .circle-progress {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: conic-gradient(var(--primary-orange) 0deg, var(--primary-orange) 306deg, rgba(255, 137, 6, 0.2) 306deg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        width: 60px;
        height: 60px;
        background: var(--card-bg);
        border-radius: 50%;
      }
      
      .circle-value {
        position: relative;
        z-index: 1;
        font-weight: 700;
        color: var(--primary-orange);
      }
    }
    
    .circle-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
    }
  }
  
  .metric-value {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 137, 6, 0.2);
    
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

const AdvantagesSection = styled.section`
  padding: 6rem 2rem;
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
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .advantage-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    border-radius: 20px;
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
    margin-bottom: 2rem;
  }
  
  .advantage-metric {
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

const ProcessSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.05), rgba(255, 137, 6, 0.02));
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

const ToolsSection = styled.section`
  padding: 6rem 2rem;
`;

const ToolkitGrid = styled.div`
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

const ToolkitCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .card-icon {
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
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
  
  .tool-stack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    .stack-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem;
      background: rgba(255, 137, 6, 0.05);
      border-radius: 10px;
      color: var(--text-secondary);
      font-size: 0.9rem;
      
      i {
        color: var(--primary-orange);
        width: 20px;
      }
    }
  }
`;

const Marketing = () => {
  const { t } = useTranslation();
  
  return (
    <MarketingContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>{t('marketing.marketingSolutions')}</span>
          </div>
          
          <Title>
            <span className="title-main">{t('marketing.heroTitle').split(' ').slice(0, 2).join(' ')}</span>
            <span className="title-highlight">{t('marketing.heroTitle').split(' ').slice(2).join(' ')}</span>
          </Title>
          
          <Description>
            {t('marketing.heroSubtitle')}
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">250%</span>
              <span className="stat-label">{t('marketing.avgEngagementIncrease')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">100M+</span>
              <span className="stat-label">{t('marketing.reachGenerated')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">98%</span>
              <span className="stat-label">{t('marketing.clientRetention')}</span>
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
              <i className="fas fa-chart-pie"></i>
              <span>{t('marketing.marketingMetrics')}</span>
            </div>
            <div className="metric-circles">
              <div className="metric-circle">
                <div className="circle-progress">
                  <span className="circle-value">85%</span>
                </div>
                <span className="circle-label">{t('marketing.brandAwareness')}</span>
              </div>
              <div className="metric-circle">
                <div className="circle-progress">
                  <span className="circle-value">92%</span>
                </div>
                <span className="circle-label">{t('marketing.engagement')}</span>
              </div>
            </div>
            <div className="metric-value">
              <span className="value-number">+180%</span>
              <span className="value-label">{t('marketing.leadGeneration')}</span>
            </div>
          </MetricsCard>
        </HeroVisual>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('marketing.ourServices')}</span>
          </div>
          <h2>{t('marketing.marketingServices')}</h2>
          <p className="section-subtitle">{t('marketing.servicesSubtitle').split('drive growth')[0]}<span className="highlight">drive growth</span>{t('marketing.servicesSubtitle').split('drive growth')[1]}</p>
        </SectionHeader>

        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="service-icon">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3>{t('marketing.digitalMarketing')}</h3>
            <p>{t('marketing.digitalMarketingDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.socialMediaMarketing')}</span>
              <span>{t('marketing.contentStrategy')}</span>
              <span>{t('marketing.emailMarketing')}</span>
              <span>{t('marketing.influencerMarketing')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>{t('marketing.seoOptimization')}</h3>
            <p>{t('marketing.seoOptimizationDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.keywordResearch')}</span>
              <span>{t('marketing.onPageSEO')}</span>
              <span>{t('marketing.technicalSEO')}</span>
              <span>{t('marketing.linkBuilding')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="service-icon">
              <i className="fas fa-pen-fancy"></i>
            </div>
            <h3>{t('marketing.contentMarketing')}</h3>
            <p>{t('marketing.contentMarketingDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.blogWriting')}</span>
              <span>{t('marketing.videoProduction')}</span>
              <span>{t('marketing.infographics')}</span>
              <span>{t('marketing.contentPlanning')}</span>
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
            <h3>{t('marketing.marketingAnalytics')}</h3>
            <p>{t('marketing.marketingAnalyticsDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.performanceTracking')}</span>
              <span>{t('marketing.dataAnalysis')}</span>
              <span>{t('marketing.roiMeasurement')}</span>
              <span>{t('marketing.marketResearch')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="service-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>{t('marketing.emailCampaigns')}</h3>
            <p>{t('marketing.emailCampaignsDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.emailAutomation')}</span>
              <span>{t('marketing.listSegmentation')}</span>
              <span>{t('marketing.abTesting')}</span>
              <span>{t('marketing.campaignOptimization')}</span>
            </div>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="service-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3>{t('marketing.brandStrategy')}</h3>
            <p>{t('marketing.brandStrategyDesc')}</p>
            <div className="service-features">
              <span>{t('marketing.brandPositioning')}</span>
              <span>{t('marketing.messagingStrategy')}</span>
              <span>{t('marketing.competitiveAnalysis')}</span>
              <span>{t('marketing.brandGuidelines')}</span>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('marketing.whyChooseUs')}</span>
          </div>
          <h2>{t('marketing.marketingAdvantages')}</h2>
          <p className="section-subtitle">{t('marketing.advantagesSubtitle').split('ideal marketing partner')[0]}<span className="highlight">ideal marketing partner</span></p>
        </SectionHeader>

        <AdvantagesGrid>
          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>{t('marketing.dataDrivenStrategy')}</h3>
            <p>{t('marketing.dataDrivenStrategyDesc')}</p>
            <div className="advantage-metric">
              <span className="metric-number">250%</span>
              <span className="metric-label">{t('marketing.avgEngagementIncrease')}</span>
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
            <h3>{t('marketing.expertTeam')}</h3>
            <p>{t('marketing.expertTeamDesc')}</p>
            <div className="advantage-metric">
              <span className="metric-number">100M+</span>
              <span className="metric-label">{t('marketing.reachGenerated')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>{t('marketing.targetedApproach')}</h3>
            <p>{t('marketing.targetedApproachDesc')}</p>
            <div className="advantage-metric">
              <span className="metric-number">85%</span>
              <span className="metric-label">{t('marketing.conversionRate')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>{t('marketing.provenResults')}</h3>
            <p>{t('marketing.provenResultsDesc')}</p>
            <div className="advantage-metric">
              <span className="metric-number">98%</span>
              <span className="metric-label">{t('marketing.clientRetention')}</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('marketing.ourProcess')}</span>
          </div>
          <h2>{t('marketing.marketingProcess')}</h2>
          <p className="section-subtitle">{t('marketing.processSubtitle').split('measurable results')[0]}<span className="highlight">measurable results</span></p>
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
            <h3>{t('marketing.researchDiscovery')}</h3>
            <p>{t('marketing.researchDiscoveryDesc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="step-number">02</div>
            <h3>{t('marketing.strategyPlanning')}</h3>
            <p>{t('marketing.strategyPlanningDesc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="step-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <div className="step-number">03</div>
            <h3>{t('marketing.creativeExecution')}</h3>
            <p>{t('marketing.creativeExecutionDesc')}</p>
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
            <h3>{t('marketing.optimizeAnalyze')}</h3>
            <p>{t('marketing.optimizeAnalyzeDesc')}</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <ToolsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('marketing.ourTools')}</span>
          </div>
          <h2>{t('marketing.marketingTools')}</h2>
          <p className="section-subtitle">{t('marketing.toolsSubtitle').split('power our campaigns')[0]}<span className="highlight">power our campaigns</span>{t('marketing.toolsSubtitle').split('power our campaigns')[1]}</p>
        </SectionHeader>

        <ToolkitGrid>
          <ToolkitCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>{t('marketing.analytics')}</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fab fa-google"></i> {t('marketing.googleAnalytics')}</div>
              <div className="stack-item"><i className="fas fa-chart-pie"></i> {t('marketing.semrush')}</div>
              <div className="stack-item"><i className="fas fa-search"></i> {t('marketing.ahrefs')}</div>
              <div className="stack-item"><i className="fas fa-chart-bar"></i> {t('marketing.hotjar')}</div>
            </div>
          </ToolkitCard>

          <ToolkitCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-icon">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3>{t('marketing.socialMedia')}</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-calendar-alt"></i> {t('marketing.hootsuite')}</div>
              <div className="stack-item"><i className="fas fa-comments"></i> {t('marketing.sproutSocial')}</div>
              <div className="stack-item"><i className="fab fa-buffer"></i> {t('marketing.buffer')}</div>
              <div className="stack-item"><i className="fab fa-facebook"></i> {t('marketing.metaBusiness')}</div>
            </div>
          </ToolkitCard>

          <ToolkitCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>{t('marketing.automation')}</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-robot"></i> {t('marketing.hubspot')}</div>
              <div className="stack-item"><i className="fas fa-envelope"></i> {t('marketing.mailchimp')}</div>
              <div className="stack-item"><i className="fas fa-paper-plane"></i> {t('marketing.activeCampaign')}</div>
              <div className="stack-item"><i className="fas fa-cogs"></i> {t('marketing.zapier')}</div>
            </div>
          </ToolkitCard>

          <ToolkitCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>{t('marketing.contentCreation')}</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-pencil-alt"></i> {t('marketing.canva')}</div>
              <div className="stack-item"><i className="fas fa-video"></i> {t('marketing.adobeCreative')}</div>
              <div className="stack-item"><i className="fas fa-camera"></i> {t('marketing.figma')}</div>
              <div className="stack-item"><i className="fas fa-edit"></i> {t('marketing.grammarly')}</div>
            </div>
          </ToolkitCard>
        </ToolkitGrid>
      </ToolsSection>
    </MarketingContainer>
  );
};

export default Marketing;