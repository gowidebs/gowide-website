import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MarketingContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: rgba(15, 14, 23, 0.85);
  
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

const ToolsSection = styled.section`
  padding: 6rem 2rem;
`;

const ToolkitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  return (
    <MarketingContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>Marketing Solutions</span>
          </div>
          
          <Title>
            <span className="title-main">Elevate Your</span>
            <span className="title-highlight">Marketing Game</span>
          </Title>
          
          <Description>
            Strategic marketing campaigns that build brand awareness, engage audiences, and drive sustainable business growth through innovative digital strategies.
          </Description>
          
          <StatsContainer>
            <StatItem>
              <span className="stat-number">250%</span>
              <span className="stat-label">Avg Engagement Increase</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">100M+</span>
              <span className="stat-label">Reach Generated</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
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
              <span>Marketing Metrics</span>
            </div>
            <div className="metric-circles">
              <div className="metric-circle">
                <div className="circle-progress">
                  <span className="circle-value">85%</span>
                </div>
                <span className="circle-label">Brand Awareness</span>
              </div>
              <div className="metric-circle">
                <div className="circle-progress">
                  <span className="circle-value">92%</span>
                </div>
                <span className="circle-label">Engagement</span>
              </div>
            </div>
            <div className="metric-value">
              <span className="value-number">+180%</span>
              <span className="value-label">Lead Generation</span>
            </div>
          </MetricsCard>
        </HeroVisual>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Services</span>
          </div>
          <h2>Marketing Services</h2>
          <p className="section-subtitle">Comprehensive marketing solutions that <span className="highlight">drive growth</span> and build lasting brand connections</p>
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
            <h3>Digital Marketing</h3>
            <p>Comprehensive digital strategies that connect your brand with the right audience across all channels.</p>
            <div className="service-features">
              <span>Social Media Marketing</span>
              <span>Content Strategy</span>
              <span>Email Marketing</span>
              <span>Influencer Marketing</span>
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
            <h3>SEO Optimization</h3>
            <p>Strategic search engine optimization to improve your visibility and drive organic traffic growth.</p>
            <div className="service-features">
              <span>Keyword Research</span>
              <span>On-Page SEO</span>
              <span>Technical SEO</span>
              <span>Link Building</span>
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
            <h3>Content Marketing</h3>
            <p>Engaging content that tells your brand story and drives meaningful connections with your audience.</p>
            <div className="service-features">
              <span>Blog Writing</span>
              <span>Video Production</span>
              <span>Infographics</span>
              <span>Content Planning</span>
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
            <h3>Marketing Analytics</h3>
            <p>Data-driven insights and performance tracking to optimize your marketing campaigns and ROI.</p>
            <div className="service-features">
              <span>Performance Tracking</span>
              <span>Data Analysis</span>
              <span>ROI Measurement</span>
              <span>Market Research</span>
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
            <h3>Email Campaigns</h3>
            <p>Personalized email marketing campaigns that nurture leads and drive customer retention.</p>
            <div className="service-features">
              <span>Email Automation</span>
              <span>List Segmentation</span>
              <span>A/B Testing</span>
              <span>Campaign Optimization</span>
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
            <h3>Brand Strategy</h3>
            <p>Strategic brand positioning and messaging that differentiates you in the marketplace.</p>
            <div className="service-features">
              <span>Brand Positioning</span>
              <span>Messaging Strategy</span>
              <span>Competitive Analysis</span>
              <span>Brand Guidelines</span>
            </div>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Why Choose Us</span>
          </div>
          <h2>Marketing Advantages</h2>
          <p className="section-subtitle">What makes us your <span className="highlight">ideal marketing partner</span></p>
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
            <h3>Data-Driven Strategy</h3>
            <p>Strategic marketing campaigns backed by comprehensive analytics and market insights.</p>
            <div className="advantage-metric">
              <span className="metric-number">250%</span>
              <span className="metric-label">Avg Engagement Increase</span>
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
            <p>Certified marketing professionals with proven track records across all digital channels.</p>
            <div className="advantage-metric">
              <span className="metric-number">100M+</span>
              <span className="metric-label">Reach Generated</span>
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
            <h3>Targeted Approach</h3>
            <p>Precision-focused marketing strategies that reach the right audience at the right time.</p>
            <div className="advantage-metric">
              <span className="metric-number">85%</span>
              <span className="metric-label">Conversion Rate</span>
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
            <h3>Proven Results</h3>
            <p>Consistent delivery of measurable results and long-term client success stories.</p>
            <div className="advantage-metric">
              <span className="metric-number">98%</span>
              <span className="metric-label">Client Retention</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Process</span>
          </div>
          <h2>Marketing Process</h2>
          <p className="section-subtitle">Strategic approach to transform your marketing vision into <span className="highlight">measurable results</span></p>
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
            <h3>Research & Discovery</h3>
            <p>Deep market analysis and audience insights to build effective marketing strategies.</p>
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
            <h3>Strategy Planning</h3>
            <p>Developing comprehensive marketing strategies aligned with your business goals.</p>
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
            <h3>Creative Execution</h3>
            <p>Crafting compelling content and visuals that resonate with your target audience.</p>
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
            <h3>Optimize & Analyze</h3>
            <p>Continuous monitoring and optimization for maximum marketing performance.</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <ToolsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Tools</span>
          </div>
          <h2>Marketing Tools</h2>
          <p className="section-subtitle">Professional marketing tools that <span className="highlight">power our campaigns</span> and drive results</p>
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
            <h3>Analytics</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fab fa-google"></i> Google Analytics</div>
              <div className="stack-item"><i className="fas fa-chart-pie"></i> SEMrush</div>
              <div className="stack-item"><i className="fas fa-search"></i> Ahrefs</div>
              <div className="stack-item"><i className="fas fa-chart-bar"></i> Hotjar</div>
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
            <h3>Social Media</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-calendar-alt"></i> Hootsuite</div>
              <div className="stack-item"><i className="fas fa-comments"></i> Sprout Social</div>
              <div className="stack-item"><i className="fab fa-buffer"></i> Buffer</div>
              <div className="stack-item"><i className="fab fa-facebook"></i> Meta Business</div>
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
            <h3>Automation</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-robot"></i> HubSpot</div>
              <div className="stack-item"><i className="fas fa-envelope"></i> Mailchimp</div>
              <div className="stack-item"><i className="fas fa-paper-plane"></i> ActiveCampaign</div>
              <div className="stack-item"><i className="fas fa-cogs"></i> Zapier</div>
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
            <h3>Content Creation</h3>
            <div className="tool-stack">
              <div className="stack-item"><i className="fas fa-pencil-alt"></i> Canva</div>
              <div className="stack-item"><i className="fas fa-video"></i> Adobe Creative</div>
              <div className="stack-item"><i className="fas fa-camera"></i> Figma</div>
              <div className="stack-item"><i className="fas fa-edit"></i> Grammarly</div>
            </div>
          </ToolkitCard>
        </ToolkitGrid>
      </ToolsSection>
    </MarketingContainer>
  );
};

export default Marketing;