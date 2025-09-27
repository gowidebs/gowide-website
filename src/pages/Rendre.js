import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProductContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
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
  
  .recycling-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    
    .recycling-icon {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(255, 137, 6, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: float 6s ease-in-out infinite;
      
      i {
        font-size: 1.5rem;
        color: var(--primary-orange);
      }
      
      &:nth-child(1) {
        top: 20%;
        left: 10%;
        animation-delay: 0s;
      }
      
      &:nth-child(2) {
        top: 60%;
        right: 15%;
        animation-delay: 2s;
      }
      
      &:nth-child(3) {
        bottom: 30%;
        left: 20%;
        animation-delay: 4s;
      }
      
      &:nth-child(4) {
        top: 40%;
        right: 30%;
        animation-delay: 1s;
      }
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  
  .product-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
    
    i {
      font-size: 1rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  
  .brand-name {
    color: var(--text-primary);
  }
  
  .brand-highlight {
    color: #4CAF50;
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
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #4CAF50;
    display: block;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const CountdownContainer = styled.div`
  background: linear-gradient(135deg, #4CAF50, rgba(76, 175, 80, 0.8));
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  
  .countdown {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.8rem;
      max-width: 200px;
      margin: 0 auto 1rem;
    }
    
    .time-unit {
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 10px;
      min-width: 60px;
      
      @media (max-width: 768px) {
        padding: 1rem;
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .number {
        font-size: 2rem;
        font-weight: 700;
        display: block;
        
        @media (max-width: 768px) {
          font-size: 1.8rem;
          display: inline;
        }
      }
      
      .label {
        font-size: 0.8rem;
        opacity: 0.9;
        
        @media (max-width: 768px) {
          font-size: 0.9rem;
          display: inline;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

const HeroActions = styled.div`
  .hero-btn {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: #45a049;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(76, 175, 80, 0.4);
    }
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashboardMockup = styled(motion.div)`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(76, 175, 80, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    
    .dashboard-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-primary);
      font-weight: 600;
      
      i {
        color: #4CAF50;
      }
    }
    
    .dashboard-time {
      color: var(--text-secondary);
      font-size: 0.8rem;
    }
  }
  
  .recycling-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .recycling-card {
      background: rgba(76, 175, 80, 0.05);
      padding: 1rem;
      border-radius: 10px;
      border-left: 4px solid #4CAF50;
      
      .recycling-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        
        .vehicle-id {
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .recycling-status {
          background: #4CAF50;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 10px;
          font-size: 0.7rem;
        }
      }
      
      .vehicle-info {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
      
      .recycling-value {
        color: #4CAF50;
        font-weight: 600;
        font-size: 0.8rem;
      }
      
      &.pending {
        border-left-color: var(--primary-orange);
        
        .recycling-status {
          background: var(--primary-orange);
        }
        
        .recycling-value {
          color: var(--primary-orange);
        }
      }
    }
  }
`;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  
  &:nth-child(even) {
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.02));
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .section-badge {
    display: inline-block;
    background: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
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
      color: #4CAF50;
      font-weight: 600;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const Card = styled(motion.div)`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(76, 175, 80, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #4CAF50, rgba(76, 175, 80, 0.8));
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
  }
`;

const SolutionSection = styled.section`
  padding: 6rem 2rem;
  
  .solution-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .solution-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    
    .feature {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(76, 175, 80, 0.05);
      border-radius: 10px;
      
      i {
        color: #4CAF50;
        font-size: 1.5rem;
      }
      
      span {
        color: var(--text-primary);
        font-weight: 500;
      }
    }
  }
  
  .process-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
    
    .process-step {
      text-align: center;
      
      .step-number {
        width: 60px;
        height: 60px;
        background: #4CAF50;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      
      h4 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }
    
    .process-arrow {
      font-size: 2rem;
      color: #4CAF50;
      
      @media (max-width: 768px) {
        transform: rotate(90deg);
      }
    }
  }
`;

const Rendre = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-06-15T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ProductContainer>
      <HeroSection>
        <HeroBackground>
          <div className="recycling-elements">
            <div className="recycling-icon"><i className="fas fa-recycle"></i></div>
            <div className="recycling-icon"><i className="fas fa-car"></i></div>
            <div className="recycling-icon"><i className="fas fa-leaf"></i></div>
            <div className="recycling-icon"><i className="fas fa-industry"></i></div>
          </div>
        </HeroBackground>
        
        <HeroContent>
          <div className="product-badge">
            <i className="fas fa-recycle"></i>
            <span>{t('rendre.sustainableInnovation')}</span>
          </div>
          
          <Title>
            <span className="brand-name">{t('rendre.heroTitle').split(' ')[0]}</span>
            <span className="brand-highlight">{t('rendre.heroTitle').split(' ')[1]}</span>
          </Title>
          
          <Description>
            {t('rendre.heroSubtitle')}
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">1.5M+</span>
              <span className="stat-label">{t('rendre.abandonedVehicles')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">85%</span>
              <span className="stat-label">{t('rendre.recyclingRate')}</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('rendre.monitoring')}</span>
            </StatItem>
          </StatsContainer>
          
          <CountdownContainer>
            <h3>{t('rendre.launchingMid2026')}</h3>
            <div className="countdown">
              <div className="time-unit">
                <span className="number">{timeLeft.days}</span>
                <span className="label">{t('rendre.days')}</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.hours}</span>
                <span className="label">{t('rendre.hours')}</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.minutes}</span>
                <span className="label">{t('rendre.minutes')}</span>
              </div>
              <div className="time-unit">
                <span className="number">{timeLeft.seconds}</span>
                <span className="label">{t('rendre.seconds')}</span>
              </div>
            </div>
          </CountdownContainer>
          
          <HeroActions>
            <button className="hero-btn primary">
              <i className="fas fa-bell"></i>
              <span>{t('rendre.getNotified')}</span>
            </button>
          </HeroActions>
        </HeroContent>
        
        <HeroVisual>
          <DashboardMockup
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="dashboard-header">
              <div className="dashboard-title">
                <i className="fas fa-recycle"></i>
                <span>{t('rendre.recyclingDashboard')}</span>
              </div>
              <div className="dashboard-time">{t('rendre.liveData')}</div>
            </div>
            <div className="recycling-cards">
              <div className="recycling-card processed">
                <div className="recycling-header">
                  <span className="vehicle-id">#V001</span>
                  <span className="recycling-status">{t('rendre.processed')}</span>
                </div>
                <div className="vehicle-info">{t('rendre.sedan2015Complete')}</div>
                <div className="recycling-value">95% {t('rendre.materials')}</div>
              </div>
              <div className="recycling-card pending">
                <div className="recycling-header">
                  <span className="vehicle-id">#V002</span>
                  <span className="recycling-status">{t('rendre.pending')}</span>
                </div>
                <div className="vehicle-info">{t('rendre.suv2018Collection')}</div>
                <div className="recycling-value">{t('rendre.scheduledToday')}</div>
              </div>
            </div>
          </DashboardMockup>
        </HeroVisual>
      </HeroSection>

      <SectionContainer>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('rendre.currentProblems')}</span>
          </div>
          <h2>{t('rendre.challengeTitle')}</h2>
          <p className="section-subtitle">{t('rendre.challengeSubtitle').split('urban challenges')[0]}<span className="highlight">urban challenges</span></p>
        </SectionHeader>

        <Grid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>{t('rendre.environmentalPollution')}</h3>
            <p>{t('rendre.environmentalPollutionDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="icon">
              <i className="fas fa-eye-slash"></i>
            </div>
            <h3>{t('rendre.visualBlight')}</h3>
            <p>{t('rendre.visualBlightDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>{t('rendre.safetyHazards')}</h3>
            <p>{t('rendre.safetyHazardsDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>{t('rendre.resourceWastage')}</h3>
            <p>{t('rendre.resourceWastageDesc')}</p>
          </Card>
        </Grid>
      </SectionContainer>

      <SolutionSection>
        <div className="solution-content">
          <div className="solution-text">
            <SectionHeader style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <div className="section-badge">
                <span>{t('rendre.ourSolution')}</span>
              </div>
              <h2>{t('rendre.solutionTitle')}</h2>
              <p className="section-subtitle">{t('rendre.solutionSubtitle').split('sustainable practices')[0]}<span className="highlight">sustainable practices</span>{t('rendre.solutionSubtitle').split('sustainable practices')[1]}</p>
            </SectionHeader>
            <div className="solution-features">
              <div className="feature">
                <i className="fas fa-mobile-alt"></i>
                <span>{t('rendre.mobilePlatform')}</span>
              </div>
              <div className="feature">
                <i className="fas fa-cogs"></i>
                <span>{t('rendre.automatedProcesses')}</span>
              </div>
              <div className="feature">
                <i className="fas fa-chart-line"></i>
                <span>{t('rendre.dataAnalytics')}</span>
              </div>
            </div>
          </div>
          <div className="solution-visual">
            <div className="process-flow">
              <div className="process-step">
                <div className="step-number">1</div>
                <h4>{t('rendre.identify')}</h4>
                <p>{t('rendre.smartDetection')}</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h4>{t('rendre.collect')}</h4>
                <p>{t('rendre.efficientRetrieval')}</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h4>{t('rendre.process')}</h4>
                <p>{t('rendre.refurbishOrRecycle')}</p>
              </div>
            </div>
          </div>
        </div>
      </SolutionSection>

      <SectionContainer>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('rendre.ourServices')}</span>
          </div>
          <h2>{t('rendre.servicesTitle')}</h2>
          <p className="section-subtitle">{t('rendre.servicesSubtitle').split('solutions')[0]}<span className="highlight">solutions</span></p>
        </SectionHeader>

        <Grid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>{t('rendre.vehicleIdentification')}</h3>
            <p>{t('rendre.vehicleIdentificationDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="icon">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3>{t('rendre.collectionServices')}</h3>
            <p>{t('rendre.collectionServicesDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="icon">
              <i className="fas fa-recycle"></i>
            </div>
            <h3>{t('rendre.materialProcessing')}</h3>
            <p>{t('rendre.materialProcessingDesc')}</p>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>{t('rendre.impactTracking')}</h3>
            <p>{t('rendre.impactTrackingDesc')}</p>
          </Card>
        </Grid>
      </SectionContainer>
    </ProductContainer>
  );
};

export default Rendre;