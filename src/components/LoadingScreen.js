import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LoadingLogo = styled(motion.div)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  animation: ${pulse} 2s ease-in-out infinite;

  .go {
    color: var(--primary-orange);
  }

  .wide {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const LoadingText = styled(motion.p)`
  color: var(--text-primary);
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  text-align: center;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(255, 137, 6, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
  border-radius: 2px;
  width: 0%;
`;

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer = null;
    
    const updateProgress = () => {
      setProgress(prev => {
        if (prev >= 100) {
          if (timer) clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              try {
                if (onLoadingComplete) onLoadingComplete();
              } catch (error) {
                console.error('Loading complete callback error:', error);
              }
            }, 500);
          }, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 15, 100);
      });
    };
    
    timer = setInterval(updateProgress, 100);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <LoadingContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingLogo
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="go">Go</span><span className="wide">Wide</span>
          </LoadingLogo>

          <LoadingText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Creating Digital Excellence...
          </LoadingText>

          <LoadingBar>
            <LoadingProgress
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </LoadingBar>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;