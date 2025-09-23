import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const UpFlyOverPage = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
    font-size: 1.3rem;
    font-weight: 600;
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
    color: #1e3a8a;

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
      color: #1e3a8a;
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

const StatusSection = styled.section`
  padding: 80px 0;
  background: var(--bg-secondary);
  text-align: center;
`;

const StatusContainer = styled.div`
  background: var(--bg-primary);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StatusTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #10b981;
`;

const StatusSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-size: 1.2rem;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #10b981;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 30px;

  i {
    font-size: 1.3rem;
  }
`;

const LaunchDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const LaunchCard = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0 15px 30px rgba(30, 58, 138, 0.2);

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.95;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      
      &::before {
        content: '✓';
        background: rgba(255, 255, 255, 0.2);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
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
    color: #1e3a8a;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: var(--bg-primary);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
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
    background: linear-gradient(90deg, #1e3a8a, #3b82f6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #1e3a8a;
    
    &::before {
      transform: scaleX(1);
    }
  }

  .feature-icon {
    width: 80px;
    height: 80px;
    background: rgba(30, 58, 138, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 2rem;
    color: #1e3a8a;
    border: 3px solid rgba(30, 58, 138, 0.2);
    transition: all 0.3s ease;
  }

  &:hover .feature-icon {
    background: #1e3a8a;
    color: white;
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #1e3a8a;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1rem;
  }
`;

const TechStackSection = styled.section`
  padding: 100px 0;
  background: var(--bg-secondary);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 60px;
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
    border-color: #1e3a8a;
  }

  i {
    font-size: 3rem;
    color: #1e3a8a;
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
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
                UpFlyOver
              </motion.h1>
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connecting Businesses Worldwide Through Intelligent Matching
              </motion.p>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A comprehensive B2B networking platform that connects companies worldwide with AI-powered matching, verified partnerships, and real-time collaboration tools.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <HeroButtons>
                  <CTAButton href="https://upflyover.vercel.app" target="_blank" rel="noopener noreferrer" className="primary">
                    <i className="fas fa-rocket"></i>
                    Launch Platform
                  </CTAButton>
                  <CTAButton href="#features" className="secondary">
                    <i className="fas fa-info-circle"></i>
                    Learn More
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

      <StatusSection>
        <Container>
          <StatusContainer>
            <StatusTitle>🚀 Platform Status: Live & Operational</StatusTitle>
            <StatusSubtitle>100% Production Ready - Fully Deployed and Operational</StatusSubtitle>
            <StatusBadge>
              <i className="fas fa-check-circle"></i>
              Live on Vercel & Railway
            </StatusBadge>
          </StatusContainer>
          
          <LaunchDetails>
            <LaunchCard>
              <h3>🌐 Production Deployment</h3>
              <p>
                UpFlyOver is fully deployed and operational with enterprise-grade infrastructure. The platform serves businesses worldwide with 99.9% uptime and real-time capabilities.
              </p>
              <ul>
                <li>Frontend: Live on Vercel (upflyover.vercel.app)</li>
                <li>Backend: Live on Railway with auto-scaling</li>
                <li>Database: MongoDB Atlas (AWS Bahrain)</li>
                <li>Real-time messaging with Socket.IO</li>
              </ul>
            </LaunchCard>
            
            <LaunchCard>
              <h3>💼 Business Model</h3>
              <p>
                Proven SaaS model with multiple pricing tiers designed for scalability and profitability. Currently serving companies and freelancers across the UAE and MENA region.
              </p>
              <ul>
                <li>Starter: Free (4 requirements/month)</li>
                <li>Professional: $99/month (20 requirements)</li>
                <li>Enterprise: $299/month (unlimited)</li>
                <li>98%+ profit margins with SaaS model</li>
              </ul>
            </LaunchCard>
          </LaunchDetails>
        </Container>
      </StatusSection>

      <FeaturesSection id="features">
        <Container>
          <SectionHeader>
            <h2>Comprehensive Platform Features</h2>
            <p>Everything you need for successful B2B networking and partnerships</p>
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
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <TechStackSection>
        <Container>
          <SectionHeader>
            <h2>Built with Modern Technology</h2>
            <p>Powered by cutting-edge technologies for optimal performance and scalability</p>
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
            <h2>Ready to Connect Globally?</h2>
            <p>Join thousands of businesses already networking on UpFlyOver and discover unlimited partnership opportunities</p>
            <CTAButtons>
              <CTAButton href="https://upflyover.vercel.app" target="_blank" rel="noopener noreferrer" className="primary">
                <i className="fas fa-rocket"></i>
                Get Started Now
              </CTAButton>
              <CTAButton href="/contact" className="secondary">
                <i className="fas fa-envelope"></i>
                Contact Sales
              </CTAButton>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </UpFlyOverPage>
  );
};

export default UpFlyOver;