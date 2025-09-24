import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShowcaseContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const TechCard = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 137, 6, 0.2);
  border-radius: 20px;
  padding: 30px;
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
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const CodeBlock = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #00ff00;
  border-left: 4px solid var(--primary-orange);
  position: relative;
  
  &::before {
    content: '⚡ Live Code';
    position: absolute;
    top: -10px;
    right: 10px;
    background: var(--primary-orange);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.7rem;
  }
`;

const LiveCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  
  .dot {
    width: 8px;
    height: 8px;
    background: #00ff00;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const TechShowcase = () => {
  const [visitors, setVisitors] = useState(1247);
  const [apiCalls, setApiCalls] = useState(8934);
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      setApiCalls(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ShowcaseContainer>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}>
            🚀 Built with Cutting-Edge Technology
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Real-time data, advanced animations, and enterprise-grade architecture
          </p>
        </motion.div>

        <TechGrid>
          <TechCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: 'var(--primary-orange)', marginBottom: '15px' }}>
              ⚡ Real-Time Analytics
            </h3>
            <LiveCounter>
              <div className="dot"></div>
              <span style={{ color: 'var(--text-primary)' }}>Live Data Stream</span>
            </LiveCounter>
            <CodeBlock>
              {`// Live Website Stats
visitors: ${visitors.toLocaleString()}
apiCalls: ${apiCalls.toLocaleString()}
uptime: ${uptime}%
status: "ONLINE"`}
            </CodeBlock>
            <p style={{ color: 'var(--text-secondary)' }}>
              Real-time visitor tracking and performance monitoring
            </p>
          </TechCard>

          <TechCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ color: 'var(--primary-orange)', marginBottom: '15px' }}>
              🎨 Advanced Animations
            </h3>
            <CodeBlock>
              {`// Framer Motion Magic
<motion.div
  whileHover={{ scale: 1.1 }}
  whileInView={{ opacity: 1 }}
  transition={{ type: "spring" }}
>
  Smooth Animations
</motion.div>`}
            </CodeBlock>
            <p style={{ color: 'var(--text-secondary)' }}>
              60fps animations with physics-based transitions
            </p>
          </TechCard>

          <TechCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ color: 'var(--primary-orange)', marginBottom: '15px' }}>
              🌐 Multi-Language AI
            </h3>
            <CodeBlock>
              {`// i18n Implementation
languages: [
  'English', 'العربية', 'മലയാളം',
  'Français', 'Español', 'हिन्दी', 'தமிழ்'
]
autoDetect: true`}
            </CodeBlock>
            <p style={{ color: 'var(--text-secondary)' }}>
              Intelligent language detection and seamless switching
            </p>
          </TechCard>
        </TechGrid>
      </Container>
    </ShowcaseContainer>
  );
};

export default TechShowcase;