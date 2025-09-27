import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GymestryPage = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const HeroSection = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
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
    color: #ff6b35;

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
      color: #ff6b35;
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

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const LaunchSection = styled.section`
  padding: 80px 0;
  background: var(--bg-secondary);
  text-align: center;
`;

const CountdownContainer = styled.div`
  background: var(--bg-primary);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CountdownTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--primary-orange);
`;

const CountdownSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-size: 1.2rem;
`;

const CountdownTimer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const TimeUnit = styled.div`
  background: var(--primary-orange);
  color: white;
  padding: 25px 15px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);

  .number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .label {
    font-size: 1rem;
    opacity: 0.9;
    font-weight: 500;
  }
`;

const LaunchDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const LaunchCard = styled.div`
  background: linear-gradient(135deg, #ff6b35 0%, #e67c00 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0 15px 30px rgba(255, 107, 53, 0.2);
  
  body.light-theme & {
    background: linear-gradient(135deg, #ff6b35 0%, #e67c00 100%);
    color: white;
  }

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
    color: var(--primary-orange);
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
    background: linear-gradient(90deg, var(--primary), #e67c00);
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
    color: var(--primary);
    border: 3px solid rgba(255, 137, 6, 0.2);
    transition: all 0.3s ease;
  }

  &:hover .feature-icon {
    background: var(--primary);
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

const BenefitsSection = styled.section`
  padding: 100px 0;
  background: var(--bg-secondary);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const BenefitItem = styled.div`
  background: var(--bg-primary);
  padding: 35px 25px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-orange);
  }

  .benefit-icon {
    width: 70px;
    height: 70px;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 1.8rem;
    color: var(--primary);
    border: 2px solid rgba(255, 137, 6, 0.2);
    transition: all 0.3s ease;
  }

  &:hover .benefit-icon {
    background: var(--primary);
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

const CTASection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ff6b35 0%, #e67c00 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  body.light-theme & {
    background: linear-gradient(135deg, #ff6b35 0%, #e67c00 100%);
    color: white;
  }

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

const Gymestry = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

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

  const features = [
    {
      icon: "fas fa-users",
      title: "Member Management",
      description: "Comprehensive member profiles with detailed fitness history, membership tracking with automated renewals, and intelligent billing systems with multiple payment options."
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Class Scheduling",
      description: "Advanced class booking system with waitlist management, instructor scheduling with availability tracking, and real-time capacity monitoring for all fitness programs."
    },
    {
      icon: "fas fa-chart-line",
      title: "Workout Tracking",
      description: "Personalized workout logs with exercise libraries, comprehensive progress tracking with visual charts, and detailed performance analytics for member motivation."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App",
      description: "Native iOS and Android applications for both gym staff and members with offline capabilities, real-time synchronization, and push notifications."
    },
    {
      icon: "fas fa-credit-card",
      title: "Payment Processing",
      description: "Secure integrated payment gateway supporting multiple currencies, automated billing for memberships, personal training sessions, and merchandise sales."
    },
    {
      icon: "fas fa-chart-pie",
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence with member retention analytics, revenue forecasting, peak hours analysis, and customizable reporting tools."
    },
    {
      icon: "fas fa-dumbbell",
      title: "Equipment Management",
      description: "Smart equipment tracking with maintenance schedules, usage analytics, and automated alerts for repairs and replacements."
    },
    {
      icon: "fas fa-user-tie",
      title: "Staff Management",
      description: "Complete staff scheduling system with payroll integration, performance tracking, and certification management for trainers and instructors."
    },
    {
      icon: "fas fa-bell",
      title: "Smart Notifications",
      description: "Automated SMS and email notifications for class reminders, membership renewals, payment due dates, and promotional campaigns."
    }
  ];

  const benefits = [
    {
      icon: "fas fa-clock",
      title: "Save Time",
      description: "Automate routine administrative tasks, streamline member check-ins, and reduce manual paperwork by up to 80%."
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Increase Revenue",
      description: "Optimize pricing strategies, reduce member churn by 35%, and identify new revenue opportunities through data insights."
    },
    {
      icon: "fas fa-heart",
      title: "Improve Experience",
      description: "Enhance member satisfaction with seamless digital experiences, personalized workout plans, and 24/7 access to services."
    },
    {
      icon: "fas fa-chart-bar",
      title: "Data-Driven Decisions",
      description: "Make informed business decisions with real-time analytics, predictive insights, and comprehensive performance metrics."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data encryption, regular backups, and 99.9% uptime guarantee for uninterrupted operations."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Round-the-clock customer support with dedicated account managers, comprehensive training, and ongoing technical assistance."
    }
  ];

  return (
    <GymestryPage>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroText>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t('gymestry.title')}
              </motion.h1>
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('gymestry.tagline')}
              </motion.p>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('gymestry.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <HeroButtons>
                  <CTAButton href="#contact" className="primary">
                    <i className="fas fa-rocket"></i>
                    {t('gymestry.joinWaitlist')}
                  </CTAButton>
                  <CTAButton href="#features" className="secondary">
                    <i className="fas fa-play-circle"></i>
                    {t('gymestry.watchDemo')}
                  </CTAButton>
                </HeroButtons>
              </motion.div>
            </HeroText>
            <HeroVisual>
              <div className="platform-preview">
                <i className="fas fa-dumbbell"></i>
              </div>
            </HeroVisual>
          </HeroContent>
        </Container>
      </HeroSection>

      <LaunchSection>
        <Container>
          <CountdownContainer>
            <CountdownTitle>{t('gymestry.launchDate')}</CountdownTitle>
            <CountdownSubtitle>{t('gymestry.launchSubtitle')}</CountdownSubtitle>
            <CountdownTimer>
              <TimeUnit>
                <span className="number">{timeLeft.days}</span>
                <span className="label">{t('gymestry.days')}</span>
              </TimeUnit>
              <TimeUnit>
                <span className="number">{timeLeft.hours}</span>
                <span className="label">{t('gymestry.hours')}</span>
              </TimeUnit>
              <TimeUnit>
                <span className="number">{timeLeft.minutes}</span>
                <span className="label">{t('gymestry.minutes')}</span>
              </TimeUnit>
              <TimeUnit>
                <span className="number">{timeLeft.seconds}</span>
                <span className="label">{t('gymestry.seconds')}</span>
              </TimeUnit>
            </CountdownTimer>
          </CountdownContainer>
          
          <LaunchDetails>
            <LaunchCard>
              <h3>🇦🇪 {t('gymestry.uaeLaunchStrategy')}</h3>
              <p>
                {t('gymestry.uaeLaunchDesc')}
              </p>
              <ul>
                <li>{t('gymestry.multiLanguage')}</li>
                <li>{t('gymestry.uaePayment')}</li>
                <li>{t('gymestry.localCompliance')}</li>
                <li>{t('gymestry.culturalCustomization')}</li>
              </ul>
            </LaunchCard>
            
            <LaunchCard>
              <h3>🎯 {t('gymestry.targetMarket')}</h3>
              <p>
                {t('gymestry.targetMarketDesc')}
              </p>
              <ul>
                <li>{t('gymestry.premiumCenters')}</li>
                <li>{t('gymestry.boutiqueStudios')}</li>
                <li>{t('gymestry.corporateWellness')}</li>
                <li>{t('gymestry.hotelFitness')}</li>
              </ul>
            </LaunchCard>
          </LaunchDetails>
        </Container>
      </LaunchSection>

      <FeaturesSection id="features">
        <Container>
          <SectionHeader>
            <h2>{t('gymestry.platformFeatures')}</h2>
            <p>{t('gymestry.platformFeaturesDesc')}</p>
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
                  <h3>{t(`gymestry.feature${index + 1}Title`)}</h3>
                  <p>{t(`gymestry.feature${index + 1}Desc`)}</p>
                </FeatureCard>
              </motion.div>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <BenefitsSection>
        <Container>
          <SectionHeader>
            <h2>{t('gymestry.whyChoose')}</h2>
            <p>{t('gymestry.whyChooseDesc')}</p>
          </SectionHeader>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BenefitItem>
                  <div className="benefit-icon">
                    <i className={benefit.icon}></i>
                  </div>
                  <h3>{t(`gymestry.benefit${index + 1}Title`)}</h3>
                  <p>{t(`gymestry.benefit${index + 1}Desc`)}</p>
                </BenefitItem>
              </motion.div>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      <CTASection id="contact">
        <Container>
          <CTAContent>
            <h2>{t('gymestry.readyTransform')}</h2>
            <p>{t('gymestry.readyTransformDesc')}</p>
            <CTAButtons>
              <CTAButton href="/contact" className="primary">
                <i className="fas fa-list-alt"></i>
                {t('gymestry.joinExclusiveWaitlist')}
              </CTAButton>
              <CTAButton href="/contact" className="secondary">
                <i className="fas fa-calendar-check"></i>
                {t('gymestry.scheduleDemo')}
              </CTAButton>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </GymestryPage>
  );
};

export default Gymestry;