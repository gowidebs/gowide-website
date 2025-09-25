import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingButton = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(255, 137, 6, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 137, 6, 0.4);
  }
  
  i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <FloatingButton
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <CTAButton to="/contact">
            <i className="fas fa-rocket"></i>
            Start Project
          </CTAButton>
        </FloatingButton>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;