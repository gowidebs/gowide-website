import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutPage = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  overflow: hidden;
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .shape {
    position: absolute;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
      width: 100px;
      height: 100px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      width: 150px;
      height: 150px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }
    &:nth-child(3) {
      width: 80px;
      height: 80px;
      bottom: 30%;
      left: 70%;
      animation-delay: 4s;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  z-index: 2;

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 700;
    margin-bottom: 30px;
    color: var(--text-primary);
    
    .highlight {
      color: var(--primary);
    }
  }

  p {
    font-size: 1.3rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 60px;

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid var(--primary);
    border-radius: 12px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 8px;
      background: var(--primary);
      border-radius: 1px;
      animation: scroll 2s infinite;
    }
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
  }

  @keyframes scroll {
    0%, 20% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(16px); }
  }
`;

const VisionMissionSection = styled.section`
  padding: 100px 0;
  background: var(--bg-secondary);
`;

const VMContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VMCard = styled.div`
  background: var(--bg-primary);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 20px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.1rem;
  }
`;

const StepsSection = styled.section`
  padding: 100px 0;
  background: var(--bg-primary);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 20px;

    .highlight {
      color: var(--primary);
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;

    .highlight {
      color: var(--primary);
      font-weight: 600;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Step = styled.div`
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: var(--primary);
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .step-number {
    background: var(--primary);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const ValuesSection = styled.section`
  padding: 100px 0;
  background: var(--bg-secondary);
`;

const ValuesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
`;

const ValuesRow = styled.div`
  display: grid;
  gap: 30px;
  
  &.first-row {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  &.second-row {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ValueCard = styled.div`
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: 50px 30px;
  border-radius: 25px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 137, 6, 0.1), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(255, 137, 6, 0.3);
    border-color: var(--primary-orange);
    
    &::before {
      left: 100%;
    }
    
    .value-icon {
      transform: scale(1.1) rotate(5deg);
      background: var(--primary-orange);
      color: white;
    }
  }

  .value-icon {
    width: 100px;
    height: 100px;
    background: rgba(255, 137, 6, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    font-size: 2.5rem;
    color: var(--primary-orange);
    border: 3px solid rgba(255, 137, 6, 0.3);
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--primary-orange);
    position: relative;
    z-index: 2;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.1rem;
    position: relative;
    z-index: 2;
  }
  
  &.collaboration-card {
    background: linear-gradient(135deg, rgba(255, 137, 6, 0.1) 0%, var(--bg-primary) 50%, var(--bg-secondary) 100%);
    border: 2px solid var(--primary-orange);
    
    .value-icon {
      background: var(--primary-orange);
      color: white;
      box-shadow: 0 10px 30px rgba(255, 137, 6, 0.4);
    }
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const ImpactSection = styled.section`
  padding: 100px 0;
  background: var(--bg-primary);
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ImpactCard = styled.div`
  text-align: center;
  padding: 30px;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CircularProgress = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 25px;

  .progress-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(var(--primary) ${props => props.percentage}%, rgba(255, 255, 255, 0.1) 0%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 80%;
      height: 80%;
      background: var(--bg-secondary);
      border-radius: 50%;
    }
  }

  .progress-inner {
    position: relative;
    z-index: 2;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
  }
`;

const ImpactTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const About = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "01",
      title: t('about.stepLearn'),
      description: t('about.stepLearnDesc')
    },
    {
      number: "02",
      title: t('about.stepResearch'),
      description: t('about.stepResearchDesc')
    },
    {
      number: "03",
      title: t('about.stepDiscuss'),
      description: t('about.stepDiscussDesc')
    },
    {
      number: "04",
      title: t('about.stepSolution'),
      description: t('about.stepSolutionDesc')
    },
    {
      number: "05",
      title: t('about.stepImplement'),
      description: t('about.stepImplementDesc')
    },
    {
      number: "06",
      title: t('about.stepInvoice'),
      description: t('about.stepInvoiceDesc')
    },
    {
      number: "07",
      title: t('about.stepAnalyze'),
      description: t('about.stepAnalyzeDesc')
    }
  ];

  const values = [
    {
      icon: "💡",
      title: t('about.innovationValue'),
      description: t('about.innovationValueDesc')
    },
    {
      icon: "🤝",
      title: t('about.integrityValue'),
      description: t('about.integrityValueDesc')
    },
    {
      icon: "⭐",
      title: t('about.excellenceValue'),
      description: t('about.excellenceValueDesc')
    },
    {
      icon: "👥",
      title: t('about.collaborationValue'),
      description: t('about.collaborationValueDesc')
    }
  ];

  const impacts = [
    { number: "100+", title: t('common.projectsCompleted'), percentage: 85 },
    { number: "50+", title: t('common.happyClients'), percentage: 75 },
    { number: "5+", title: t('common.yearsExperience'), percentage: 60 },
    { number: "24/7", title: t('common.support'), percentage: 100 }
  ];

  return (
    <AboutPage>
      <HeroSection>
        <FloatingShapes>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </FloatingShapes>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('about.title')} <span className="highlight">GoWide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.description')}
          </motion.p>
          <ScrollIndicator>
            <div className="mouse"></div>
            <p>{t('about.scrollToExplore')}</p>
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>

      <VisionMissionSection>
        <VMContainer>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VMCard>
              <h2>{t('about.ourVision')}</h2>
              <p>{t('about.visionText')}</p>
            </VMCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VMCard>
              <h2>{t('about.ourMission')}</h2>
              <p>{t('about.missionText')}</p>
            </VMCard>
          </motion.div>
        </VMContainer>
      </VisionMissionSection>

      <StepsSection>
        <Container>
          <SectionHeader>
            <h2>{t('about.tailoredSolution')}</h2>
            <p>{t('about.tailoredSolutionDesc')}</p>
          </SectionHeader>
          <StepsGrid>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Step>
                  <h3>
                    <span className="step-number">{step.number}</span>
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </Step>
              </motion.div>
            ))}
          </StepsGrid>
        </Container>
      </StepsSection>

      <ValuesSection>
        <Container>
          <SectionHeader>
            <h2>{t('about.coreValues')}</h2>
            <p>{t('about.coreValuesDesc')}</p>
          </SectionHeader>
          <ValuesGrid>
            <ValuesRow className="first-row">
              {values.slice(0, 3).map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <ValueCard>
                    <div className="value-icon">
                      {value.icon}
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </ValueCard>
                </motion.div>
              ))}
            </ValuesRow>
            
            <ValuesRow className="second-row">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ValueCard className="collaboration-card">
                  <div className="value-icon">
                    {values[3].icon}
                  </div>
                  <h3>{values[3].title}</h3>
                  <p>{values[3].description}</p>
                </ValueCard>
              </motion.div>
            </ValuesRow>
          </ValuesGrid>
        </Container>
      </ValuesSection>

      <ImpactSection>
        <Container>
          <SectionHeader>
            <h2>{t('about.impact')}</h2>
            <p>{t('about.impactDesc')}</p>
          </SectionHeader>
          <ImpactGrid>
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ImpactCard>
                  <CircularProgress percentage={impact.percentage}>
                    <div className="progress-circle">
                      <div className="progress-inner">{impact.number}</div>
                    </div>
                  </CircularProgress>
                  <ImpactTitle>{impact.title}</ImpactTitle>
                </ImpactCard>
              </motion.div>
            ))}
          </ImpactGrid>
        </Container>
      </ImpactSection>
    </AboutPage>
  );
};

export default About;