import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatsContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  padding: 20px;
  
  .stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    display: block;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  .stat-label {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    opacity: 0.8;
  }
`;

const CounterStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef(null);
  
  const finalCounts = {
    projects: 150,
    clients: 75,
    years: 5,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts({
        projects: Math.floor(finalCounts.projects * easeOut),
        clients: Math.floor(finalCounts.clients * easeOut),
        years: Math.floor(finalCounts.years * easeOut),
        satisfaction: Math.floor(finalCounts.satisfaction * easeOut)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepTime);
  };

  return (
    <StatsContainer ref={sectionRef}>
      <Container>
        <StatsGrid>
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="stat-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <span className="stat-number">{counts.projects}+</span>
            <div className="stat-label">Projects Completed</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <span className="stat-number">{counts.clients}+</span>
            <div className="stat-label">Happy Clients</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="stat-icon">
              <i className="fas fa-calendar"></i>
            </div>
            <span className="stat-number">{counts.years}+</span>
            <div className="stat-label">Years Experience</div>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <span className="stat-number">{counts.satisfaction}%</span>
            <div className="stat-label">Client Satisfaction</div>
          </StatItem>
        </StatsGrid>
      </Container>
    </StatsContainer>
  );
};

export default CounterStats;