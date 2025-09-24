import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
      color: var(--primary-orange);
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const ValueCard = styled.div`
  background: var(--bg-primary);
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .value-icon {
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
    border: 2px solid rgba(255, 137, 6, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
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
  const steps = [
    {
      number: "01",
      title: "Learn",
      description: "We begin by understanding your unique needs and goals."
    },
    {
      number: "02",
      title: "Research",
      description: "Our team conducts in-depth research to determine the most effective strategy."
    },
    {
      number: "03",
      title: "Discuss",
      description: "We collaborate with you to discuss the proposed solution and ensure alignment."
    },
    {
      number: "04",
      title: "Solution",
      description: "We present a customized solution tailored to your specific requirements."
    },
    {
      number: "05",
      title: "Implement",
      description: "Our team executes the solution, bringing the strategy to life."
    },
    {
      number: "06",
      title: "Invoice",
      description: "We provide a transparent billing process based on the services delivered."
    },
    {
      number: "07",
      title: "Analyze",
      description: "We review the results and make necessary adjustments to ensure ongoing success."
    }
  ];

  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in all our relationships."
    },
    {
      icon: "fas fa-star",
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary results."
    }
  ];

  const impacts = [
    { number: "100+", title: "Projects Completed", percentage: 85 },
    { number: "50+", title: "Happy Clients", percentage: 75 },
    { number: "5+", title: "Years Experience", percentage: 60 },
    { number: "24/7", title: "Support Available", percentage: 100 }
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who <span className="highlight">We Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are GoWide , a creative digital agency. We specialize in branding, advertising, marketing, and technology solutions that help businesses grow and thrive in the digital landscape.
          </motion.p>
          <ScrollIndicator>
            <div className="mouse"></div>
            <p>Scroll to explore</p>
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>

      <VisionMissionSection>
        <VMContainer>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VMCard>
              <h2>Our Vision</h2>
              <p>To be the leading force in digital innovation, creating transformative solutions that inspire and elevate businesses worldwide. We envision a future where technology and creativity converge to create unprecedented value for our clients.</p>
            </VMCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VMCard>
              <h2>Our Mission</h2>
              <p>To deliver exceptional digital solutions through innovative thinking, cutting-edge technology, and unwavering commitment to client success.</p>
            </VMCard>
          </motion.div>
        </VMContainer>
      </VisionMissionSection>

      <StepsSection>
        <Container>
          <SectionHeader>
            <h2>Our <span className="highlight">Tailored Solution</span></h2>
            <p>A systematic approach to <span className="highlight">deliver exceptional results</span></p>
          </SectionHeader>
          <StepsGrid>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            <h2>Our <span className="highlight">Core Values</span></h2>
            <p>The principles that <span className="highlight">guide everything we do</span></p>
          </SectionHeader>
          <ValuesGrid>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueCard>
                  <div className="value-icon">
                    <i className={value.icon}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              </motion.div>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>

      <ImpactSection>
        <Container>
          <SectionHeader>
            <h2>Our Impact</h2>
            <p>Numbers that <span className="highlight">speak for themselves</span></p>
          </SectionHeader>
          <ImpactGrid>
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ImpactCard>
                  <CircularProgress percentage={impact.percentage}>
                    <div className="progress-circle">
                      <div className="progress-inner">
                        <span>{impact.number}</span>
                      </div>
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