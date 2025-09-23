import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdvertisingContainer = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  return (
    <AdvertisingContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>Advertising Solutions</span>
          </div>
          
          <Title>
            <span className="title-main">Amplify Your</span>
            <span className="title-highlight">Brand Reach</span>
          </Title>
          
          <Description>
            Strategic advertising campaigns that drive results and maximize your ROI through targeted digital marketing solutions.
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">300%</span>
              <span className="stat-label">Avg ROI Increase</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">50M+</span>
              <span className="stat-label">Impressions Generated</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">95%</span>
              <span className="stat-label">Client Satisfaction</span>
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
              <span>Campaign Performance</span>
            </div>
            <div className="metric-chart">
              <div className="chart-bar chart-bar-1"></div>
              <div className="chart-bar chart-bar-2"></div>
              <div className="chart-bar chart-bar-3"></div>
              <div className="chart-bar chart-bar-4"></div>
            </div>
            <div className="metric-value">
              <span className="value-number">+245%</span>
              <span className="value-label">Growth</span>
            </div>
          </MetricsCard>
        </HeroVisual>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Services</span>
          </div>
          <h2>Advertising Services</h2>
          <p className="section-subtitle">Comprehensive advertising solutions that <span className="highlight">drive growth</span> and maximize your marketing impact</p>
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
            <h3>Google Ads</h3>
            <p>Strategic Google Ads campaigns that target the right audience and maximize your advertising spend.</p>
            <div className="service-features">
              <span>Search Ads</span>
              <span>Display Ads</span>
              <span>Shopping Ads</span>
              <span>Video Ads</span>
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
            <h3>Social Media Advertising</h3>
            <p>Engaging social media campaigns across all major platforms to build brand awareness and drive conversions.</p>
            <div className="service-features">
              <span>Facebook Ads</span>
              <span>Instagram Ads</span>
              <span>LinkedIn Ads</span>
              <span>Twitter Ads</span>
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
            <h3>Targeted Campaigns</h3>
            <p>Precision-targeted advertising campaigns that reach your ideal customers at the right time and place.</p>
            <div className="service-features">
              <span>Audience Targeting</span>
              <span>Retargeting</span>
              <span>Lookalike Audiences</span>
              <span>Behavioral Targeting</span>
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
            <h3>Performance Tracking</h3>
            <p>Comprehensive analytics and reporting to measure campaign success and optimize for better results.</p>
            <div className="service-features">
              <span>Real-time Analytics</span>
              <span>Conversion Tracking</span>
              <span>ROI Reporting</span>
              <span>Custom Dashboards</span>
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
            <h3>Creative Design</h3>
            <p>Eye-catching ad creatives and compelling copy that capture attention and drive action.</p>
            <div className="service-features">
              <span>Banner Design</span>
              <span>Video Creatives</span>
              <span>Copywriting</span>
              <span>Brand Consistency</span>
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
            <h3>Campaign Optimization</h3>
            <p>Continuous optimization and A/B testing to improve campaign performance and maximize ROI.</p>
            <div className="service-features">
              <span>A/B Testing</span>
              <span>Bid Optimization</span>
              <span>Keyword Research</span>
              <span>Landing Page Optimization</span>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Process</span>
          </div>
          <h2>Advertising Process</h2>
          <p className="section-subtitle">Strategic approach to <span className="highlight">maximize your advertising ROI</span></p>
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
            <h3>Research & Analysis</h3>
            <p>Deep market research and competitor analysis to identify opportunities.</p>
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
            <h3>Strategy Development</h3>
            <p>Creating targeted advertising strategies aligned with your business goals.</p>
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
            <h3>Campaign Launch</h3>
            <p>Executing campaigns across multiple platforms with precision timing.</p>
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
            <h3>Optimize & Track</h3>
            <p>Continuous monitoring and optimization for maximum performance.</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Why Choose Us</span>
          </div>
          <h2>Advertising Advantages</h2>
          <p className="section-subtitle">What makes us your <span className="highlight">ideal advertising partner</span></p>
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
            <h3>Data-Driven Results</h3>
            <p>Strategic campaigns backed by comprehensive analytics and performance insights.</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> Real-time Analytics</li>
              <li><i className="fas fa-check"></i> Performance Tracking</li>
              <li><i className="fas fa-check"></i> ROI Optimization</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">300%</span>
              <span className="metric-label">Avg ROI Increase</span>
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
            <h3>Expert Team</h3>
            <p>Certified advertising professionals with years of experience across all major platforms.</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> Google Certified</li>
              <li><i className="fas fa-check"></i> Facebook Blueprint</li>
              <li><i className="fas fa-check"></i> 5+ Years Experience</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">50M+</span>
              <span className="metric-label">Impressions Managed</span>
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
            <h3>Quick Results</h3>
            <p>Fast campaign setup and optimization to start seeing results within the first week.</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> 24-48hr Setup</li>
              <li><i className="fas fa-check"></i> Instant Optimization</li>
              <li><i className="fas fa-check"></i> Weekly Reports</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">7</span>
              <span className="metric-label">Days to Results</span>
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
            <h3>Dedicated Support</h3>
            <p>Personal account manager and 24/7 support for all your advertising needs.</p>
            <ul className="advantage-features">
              <li><i className="fas fa-check"></i> Account Manager</li>
              <li><i className="fas fa-check"></i> 24/7 Chat Support</li>
              <li><i className="fas fa-check"></i> Monthly Reviews</li>
            </ul>
            <div className="advantage-metric">
              <span className="metric-number">24/7</span>
              <span className="metric-label">Support Available</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <PlatformsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Platforms</span>
          </div>
          <h2>Advertising Platforms</h2>
          <p className="section-subtitle">We manage campaigns across all major advertising platforms for <span className="highlight">maximum reach</span></p>
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
            <h3>Google Ads</h3>
            <p>Reach customers when they search for your products and services on Google.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">8.5B+</span>
                <span className="stat-label">Daily Searches</span>
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
            <h3>Facebook Ads</h3>
            <p>Connect with your audience on the world's largest social media platform.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2.9B+</span>
                <span className="stat-label">Monthly Users</span>
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
            <h3>Instagram Ads</h3>
            <p>Engage with visual content that captures attention and drives action.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">Monthly Users</span>
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
            <h3>LinkedIn Ads</h3>
            <p>Target professionals and decision-makers in your industry.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">900M+</span>
                <span className="stat-label">Professionals</span>
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
            <h3>YouTube Ads</h3>
            <p>Reach your audience with compelling video content and advertisements.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">2B+</span>
                <span className="stat-label">Monthly Users</span>
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
            <h3>Twitter Ads</h3>
            <p>Join conversations and promote your brand in real-time discussions.</p>
            <div className="platform-stats">
              <div className="stat">
                <span className="stat-value">450M+</span>
                <span className="stat-label">Monthly Users</span>
              </div>
            </div>
          </PlatformCard>
        </PlatformsGrid>
      </PlatformsSection>
    </AdvertisingContainer>
  );
};

export default Advertising;