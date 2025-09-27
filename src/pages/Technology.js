import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { technologyTranslations } from '../translations/technologyTranslations';

const TechnologyContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: var(--bg-primary);
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

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 300px;
  
  .tech-icon-item {
    width: 80px;
    height: 80px;
    background: var(--card-bg);
    border: 2px solid rgba(255, 137, 6, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    animation: techFloat 3s ease-in-out infinite;
    
    &:hover {
      border-color: var(--primary-orange);
      transform: scale(1.1);
    }
    
    i {
      font-size: 2rem;
      color: var(--primary-orange);
    }
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1s; }
    &:nth-child(4) { animation-delay: 1.5s; }
    &:nth-child(5) { animation-delay: 2s; }
    &:nth-child(6) { animation-delay: 2.5s; }
  }
  
  @keyframes techFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const SolutionsSection = styled.section`
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

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SolutionCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .solution-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .solution-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      i {
        font-size: 1.5rem;
        color: white;
      }
    }
    
    .solution-category {
      color: var(--primary-orange);
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
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
  
  .solution-tags {
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

const TechStackSection = styled.section`
  padding: 6rem 2rem;
`;

const StackCategories = styled.div`
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

const StackCategory = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  
  h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .tech-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    
    .tech-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem;
      background: rgba(255, 137, 6, 0.05);
      border-radius: 10px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 137, 6, 0.1);
        transform: translateY(-2px);
      }
      
      i {
        font-size: 1.5rem;
        color: var(--primary-orange);
        min-width: 24px;
      }
      
      span {
        color: var(--text-primary);
        font-weight: 500;
        font-size: 0.9rem;
      }
    }
  }
`;

const Technology = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const t = (key) => {
    const keys = key.split('.');
    let value = technologyTranslations[currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  
  return (
    <TechnologyContainer>
      <HeroSection>
        <HeroContent>
          <div className="hero-badge">
            <span>{t('solutionsSubtitle')}</span>
          </div>
          
          <Title>
            <span className="title-main">{t('heroTitle')}</span>
          </Title>
          
          <Description>
            {t('heroDescription')}
          </Description>
        </HeroContent>
        
        <HeroVisual>
          <TechIconGrid>
            <div className="tech-icon-item">
              <i className="fas fa-code"></i>
            </div>
            <div className="tech-icon-item">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="tech-icon-item">
              <i className="fas fa-cloud"></i>
            </div>
            <div className="tech-icon-item">
              <i className="fas fa-database"></i>
            </div>
            <div className="tech-icon-item">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="tech-icon-item">
              <i className="fas fa-cogs"></i>
            </div>
          </TechIconGrid>
        </HeroVisual>
      </HeroSection>

      <SolutionsSection>
        <SectionHeader>
          <div className="section-badge">
            <span>{t('solutionsTitle')}</span>
          </div>
          <h2>{t('solutionsSubtitle')}</h2>
          <p className="section-subtitle">{t('solutionsDescription')}</p>
        </SectionHeader>

        <SolutionsGrid>
          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="solution-category">Web Development</div>
            </div>
            <h3>{t('webTitle')}</h3>
            <p>{t('webDescription')}</p>
            <div className="solution-tags">
              {t('webTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="solution-category">Mobile Development</div>
            </div>
            <h3>{t('mobileTitle')}</h3>
            <p>{t('mobileDescription')}</p>
            <div className="solution-tags">
              {t('mobileTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="solution-category">Custom Software</div>
            </div>
            <h3>{t('softwareTitle')}</h3>
            <p>{t('softwareDescription')}</p>
            <div className="solution-tags">
              {t('softwareTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="solution-category">Cloud Solutions</div>
            </div>
            <h3>{t('cloudTitle')}</h3>
            <p>{t('cloudDescription')}</p>
            <div className="solution-tags">
              {t('cloudTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="solution-category">Cybersecurity</div>
            </div>
            <h3>{t('securityTitle')}</h3>
            <p>{t('securityDescription')}</p>
            <div className="solution-tags">
              {t('securityTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="solution-header">
              <div className="solution-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="solution-category">UI/UX Design</div>
            </div>
            <h3>{t('designTitle')}</h3>
            <p>{t('designDescription')}</p>
            <div className="solution-tags">
              {t('designTags').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </SolutionCard>
        </SolutionsGrid>
      </SolutionsSection>

      <ProcessSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Our Process</span>
          </div>
          <h2>{t('processTitle')}</h2>
          <p className="section-subtitle">{t('processDescription')}</p>
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
            <h3>{t('processStep1')}</h3>
            <p>{t('processStep1Desc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-icon">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <div className="step-number">02</div>
            <h3>{t('processStep2')}</h3>
            <p>{t('processStep2Desc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="step-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="step-number">03</div>
            <h3>{t('processStep3')}</h3>
            <p>{t('processStep3Desc')}</p>
          </ProcessStep>

          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="step-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="step-number">04</div>
            <h3>{t('processStep4')}</h3>
            <p>{t('processStep4Desc')}</p>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      <AdvantagesSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Why Choose Us</span>
          </div>
          <h2>{t('advantagesTitle')}</h2>
          <p className="section-subtitle">{t('advantagesDescription')}</p>
        </SectionHeader>

        <AdvantagesGrid>
          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>{t('rapidTitle')}</h3>
            <p>{t('rapidDescription')}</p>
            <div className="advantage-metric">
              <span className="metric-number">{t('rapidMetric')}</span>
              <span className="metric-label">{t('rapidLabel')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>{t('secureTitle')}</h3>
            <p>{t('secureDescription')}</p>
            <div className="advantage-metric">
              <span className="metric-number">{t('secureMetric')}</span>
              <span className="metric-label">{t('secureLabel')}</span>
            </div>
          </AdvantageCard>

          <AdvantageCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="advantage-icon">
              <i className="fas fa-expand-arrows-alt"></i>
            </div>
            <h3>{t('scalableTitle')}</h3>
            <p>{t('scalableDescription')}</p>
            <div className="advantage-metric">
              <span className="metric-number">{t('scalableMetric')}</span>
              <span className="metric-label">{t('scalableLabel')}</span>
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
            <h3>{t('supportTitle')}</h3>
            <p>{t('supportDescription')}</p>
            <div className="advantage-metric">
              <span className="metric-number">{t('supportMetric')}</span>
              <span className="metric-label">{t('supportLabel')}</span>
            </div>
          </AdvantageCard>
        </AdvantagesGrid>
      </AdvantagesSection>

      <TechStackSection>
        <SectionHeader>
          <div className="section-badge">
            <span>Tech Stack</span>
          </div>
          <h2>{t('techStackTitle')}</h2>
          <p className="section-subtitle">{t('techStackDescription')}</p>
        </SectionHeader>

        <StackCategories>
          <StackCategory
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>{t('frontendTitle')}</h3>
            <div className="tech-items">
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-angular"></i>
                <span>Angular</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-vuejs"></i>
                <span>Vue.js</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
              </div>
            </div>
          </StackCategory>

          <StackCategory
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>{t('backendTitle')}</h3>
            <div className="tech-items">
              <div className="tech-item">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-python"></i>
                <span>Python</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-php"></i>
                <span>PHP</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-java"></i>
                <span>Java</span>
              </div>
            </div>
          </StackCategory>

          <StackCategory
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>{t('mobileStackTitle')}</h3>
            <div className="tech-items">
              <div className="tech-item">
                <i className="fab fa-android"></i>
                <span>Android</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-apple"></i>
                <span>iOS</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>React Native</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-mobile-alt"></i>
                <span>Flutter</span>
              </div>
            </div>
          </StackCategory>

          <StackCategory
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>{t('cloudDevOpsTitle')}</h3>
            <div className="tech-items">
              <div className="tech-item">
                <i className="fab fa-aws"></i>
                <span>AWS</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-google"></i>
                <span>Google Cloud</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-microsoft"></i>
                <span>Azure</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-docker"></i>
                <span>Docker</span>
              </div>
            </div>
          </StackCategory>
        </StackCategories>
      </TechStackSection>
    </TechnologyContainer>
  );
};

export default Technology;