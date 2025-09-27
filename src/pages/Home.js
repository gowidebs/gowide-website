import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { lazy, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { homeTranslations } from '../translations/homeTranslations';
import SEO from '../components/SEO';
import TechShowcase from '../components/TechShowcase';
import CounterStats from '../components/CounterStats';

// Import logos
import gowideLogo from '../logo/GW.png';
import ergoEdgeLogo from '../logo/logo.png';
import globalTradeLogo from '../logo/gta.png';

// Custom hooks for performance
const useTypingAnimation = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, start]);

  return { count, ref: countRef };
};


const HomePage = styled.div`
  min-height: 100vh;
  background: transparent;
  color: var(--text-primary);
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 137, 6, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 137, 6, 0.1) 0%, transparent 50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23ff8906" opacity="0.6"><animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/></circle><circle cx="80" cy="30" r="1.5" fill="%23ff8906" opacity="0.7"><animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/></circle><circle cx="60" cy="70" r="1" fill="%23ff8906" opacity="0.8"><animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/></circle></svg>') repeat;
    animation: float 20s linear infinite;
  }
  
  body.light-theme & {
    &::after {
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23e67e00" opacity="0.8"><animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/></circle><circle cx="80" cy="30" r="1.5" fill="%23e67e00" opacity="0.9"><animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite"/></circle><circle cx="60" cy="70" r="1" fill="%23e67e00" opacity="1"><animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/></circle></svg>') repeat;
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 1000px;
  padding: 0 20px;
  z-index: 2;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
  
  @media (min-width: 1440px) {
    max-width: 1100px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1200px;
  }
  
  @media (min-width: 2560px) {
    max-width: 1400px;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 1.2;
    background: linear-gradient(135deg, var(--text-primary), var(--primary-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 480px) {
      font-size: clamp(2rem, 8vw, 2.5rem);
      margin-bottom: 20px;
    }
    
    @media (min-width: 1920px) {
      font-size: clamp(3.5rem, 6vw, 5.5rem);
    }
  }

  p {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    line-height: 1.6;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (min-width: 1920px) {
      font-size: 1.4rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &.primary {
    background: var(--primary-orange);
    color: white;

    &:hover {
      background: var(--secondary-orange);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--primary-orange);
    border: 2px solid var(--primary-orange);

    &:hover {
      background: var(--primary-orange);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const SplitSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  
  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 0 30px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1800px;
    padding: 0 40px;
  }
  
  @media (min-width: 2560px) {
    max-width: 2200px;
    padding: 0 60px;
  }
`;

const SplitContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  @media (min-width: 1920px) {
    gap: 100px;
  }
`;

const ContentSide = styled.div`
  .highlight-text {
    color: var(--primary-orange);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 20px;
    display: block;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 25px;
    line-height: 1.3;
  }

  .main-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 30px;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  i {
    color: var(--primary-orange);
    font-size: 1.2rem;
  }

  span {
    font-size: 1rem;
    color: var(--text-primary);
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-orange);
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-orange);
    transform: translateY(-2px);
  }
`;

const ImageSide = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingCard = styled.div`
  position: absolute;
  background: var(--bg-primary);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;

  &.card-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  &.card-2 {
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }
  &.card-3 {
    bottom: 20%;
    left: 30%;
    animation-delay: 4s;
  }

  i {
    color: var(--primary-orange);
    font-size: 1.5rem;
  }

  span {
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const ServicesSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 350px;
    margin: 0 auto 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
    margin: 0 auto 50px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1920px) {
    gap: 40px;
  }
  
  @media (min-width: 2560px) {
    gap: 50px;
  }
`;

const ServiceBox = styled.div`
  background: var(--bg-secondary);
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(255, 137, 6, 0.2);
    border-color: var(--primary-orange);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }

  .box-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 137, 6, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 2rem;
    color: var(--primary-orange);
    border: 2px solid rgba(255, 137, 6, 0.2);
    
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
      margin: 0 auto 20px;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;

    .highlight {
      color: var(--primary);
    }
    
    @media (max-width: 480px) {
      font-size: 1.3rem;
      margin-bottom: 15px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      color: var(--text-secondary);

      i {
        color: var(--primary-orange);
        font-size: 0.9rem;
      }
    }
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 350px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }
  
  @media (min-width: 1440px) {
    max-width: 1200px;
    gap: 35px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1400px;
    gap: 40px;
  }
`;

const ProductCard = styled.div`
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  perspective: 1000px;
  height: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${ProductCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const ProductCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;

  .product-icon {
    font-size: 3rem;
    color: var(--primary-orange);
    margin-bottom: 20px;
  }

  .product-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  .product-tagline {
    color: var(--text-secondary);
    font-style: italic;
  }
`;

const ProductCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  .product-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
  }

  .product-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  .learn-more-btn {
    background: var(--primary-orange);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: var(--secondary-orange);
    }
  }
`;

const ProcessSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const ProcessTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 350px;
    margin: 60px auto 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 400px;
    margin: 60px auto 0;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
  
  @media (min-width: 1920px) {
    gap: 50px;
  }
`;

const TimelineItem = styled.div`
  text-align: center;
  position: relative;

  .timeline-marker {
    width: 60px;
    height: 60px;
    background: var(--primary-orange);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 20px;
  }

  .timeline-icon {
    font-size: 2rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const ImpactSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 300px;
    margin: 60px auto 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
  
  @media (min-width: 1920px) {
    gap: 50px;
  }
`;

const ImpactCard = styled.div`
  text-align: center;
  padding: 30px;
  background: transparent;
  border-radius: 20px;
  border: 2px solid var(--primary-orange);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.3);
    border-color: var(--secondary-orange);
  }
  
  h3 {
    color: var(--text-primary);
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 15px;
  }
`;

const ProgressCard = styled.div`
  position: relative;
  padding: 30px 20px;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.1) 0%, transparent 100%);
  border: 2px solid var(--primary-orange);
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  --progress-width: ${props => props.percentage}%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
    animation: progressAnimation 2s ease-in-out forwards;
  }
  
  @keyframes progressAnimation {
    to {
      width: var(--progress-width);
    }
  }
  
  .impact-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-orange);
    margin-bottom: 10px;
    display: block;
    font-family: 'Courier New', monospace;
  }
  
  .impact-icon {
    font-size: 2rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const ContactSection = styled.section`
  padding: 100px 0;
  background: transparent;
  text-align: center;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const ContactBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background: var(--primary-orange);
  color: white;

  &:hover {
    background: var(--secondary-orange);
    transform: translateY(-2px);
  }
`;

const GroupSection = styled.section`
  padding: 100px 0;
  background: transparent;
  
  body.light-theme & {
    background: rgba(248, 249, 250, 0.9);
  }
`;

const GroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 350px;
    margin: 60px auto 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 35px;
    max-width: 400px;
    margin: 60px auto 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
  
  @media (min-width: 1920px) {
    gap: 50px;
  }
`;

const GroupCard = styled.div`
  background: var(--bg-secondary);
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(255, 137, 6, 0.2);
    border-color: var(--primary-orange);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
    
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }

  .company-logo {
    width: 120px;
    height: 120px;
    margin: 0 auto 25px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgba(255, 137, 6, 0.2);
    transition: all 0.3s ease;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: white;
      padding: 10px;
    }
    
    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
      margin: 0 auto 20px;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary-orange);
    
    @media (max-width: 480px) {
      font-size: 1.3rem;
      margin-bottom: 12px;
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1rem;
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const GroupDescription = styled.div`
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const Home = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const ht = homeTranslations[currentLang] || homeTranslations.en;
  
  // Typing animation for hero title
  const heroText = ht.heroTitle.replace(/<[^>]*>/g, '');
  const { displayText } = useTypingAnimation(heroText, 80);
  const services = useMemo(() => [
    {
      title: ht.brandingTitle,
      subtitle: ht.brandingSubtitle,
      icon: "fas fa-palette",
      items: [
        { icon: "fas fa-lightbulb", title: ht.brandStrategy, features: ht.brandStrategyFeatures },
        { icon: "fas fa-eye", title: ht.visualIdentity, features: ht.visualIdentityFeatures },
        { icon: "fas fa-comment-dots", title: ht.brandVoice, features: ht.brandVoiceFeatures },
        { icon: "fas fa-star", title: ht.brandExperience, features: ht.brandExperienceFeatures }
      ],
      link: "/branding"
    },
    {
      title: ht.technologyTitle,
      subtitle: ht.technologySubtitle,
      icon: "fas fa-code",
      items: [
        { icon: "fas fa-code", title: ht.webDevelopment, features: ht.webDevFeatures },
        { icon: "fas fa-mobile-alt", title: ht.mobileDevelopment, features: ht.mobileDevFeatures },
        { icon: "fas fa-cloud", title: ht.cloudServices, features: ht.cloudServicesFeatures },
        { icon: "fas fa-brain", title: ht.aiMachineLearning, features: ht.aiMachineLearningFeatures }
      ],
      link: "/technology"
    },
    {
      title: ht.marketingTitle,
      subtitle: ht.marketingSubtitle,
      icon: "fas fa-bullhorn",
      items: [
        { icon: "fas fa-bullhorn", title: ht.digitalMarketing, features: ht.digitalMarketingFeatures },
        { icon: "fas fa-search", title: ht.seoOptimization, features: ht.seoFeatures },
        { icon: "fas fa-pen-fancy", title: ht.contentMarketing, features: ht.contentMarketingFeatures },
        { icon: "fas fa-chart-line", title: ht.marketingAnalytics, features: ht.marketingAnalyticsFeatures }
      ],
      link: "/marketing"
    },
    {
      title: ht.advertisingTitle,
      subtitle: ht.advertisingSubtitle,
      icon: "fas fa-ad",
      items: [
        { icon: "fas fa-ad", title: ht.digitalAdvertising, features: ht.digitalAdvertisingFeatures },
        { icon: "fas fa-mouse-pointer", title: ht.ppcManagement, features: ht.ppcManagementFeatures },
        { icon: "fas fa-palette", title: ht.creativeDesign, features: ht.creativeDesignFeatures },
        { icon: "fas fa-chart-pie", title: ht.campaignAnalytics, features: ht.campaignAnalyticsFeatures }
      ],
      link: "/advertising"
    }
  ], [ht]);

  const products = [
    {
      title: "Rendre",
      tagline: "Transforming Waste, Driving Sustainability.",
      description: "Rendre is an innovative platform revolutionizing the recycling of abandoned and end-of-life vehicles (ELVs). It streamlines the identification, collection, and recycling process while promoting environmental sustainability.",
      icon: "fas fa-recycle",
      link: "/rendre"
    },
    {
      title: "UpFlyOver",
      tagline: "Connecting Businesses Worldwide Through Intelligent Matching.",
      description: "UpFlyOver is a comprehensive B2B networking platform that connects companies worldwide with AI-powered matching and verified partnerships. Features include company registration, KYC verification, real-time dashboard, and intelligent business matching.",
      icon: "fas fa-globe-americas",
      link: "/upflyover"
    },
    {
      title: "Gymestry",
      tagline: "Revolutionizing Fitness Management.",
      description: "Gymestry is an innovative fitness management platform that streamlines gym operations, member management, and workout tracking. Perfect for fitness centers looking to enhance member experience and operational efficiency.",
      icon: "fas fa-dumbbell",
      link: "/gymestry"
    }
  ];

  const whyChoose = [
    { icon: "fas fa-users", title: ht.expertTeam, description: ht.expertTeamDesc },
    { icon: "fas fa-lightbulb", title: ht.innovativeSolutions, description: ht.innovativeSolutionsDesc },
    { icon: "fas fa-heart", title: ht.clientFocused, description: ht.clientFocusedDesc },
    { icon: "fas fa-shield-alt", title: ht.qualityAssurance, description: ht.qualityAssuranceDesc }
  ];

  const process = [
    { number: 1, icon: "fas fa-search", title: ht.discovery, description: ht.discoveryDesc },
    { number: 2, icon: "fas fa-clipboard-list", title: ht.planning, description: ht.planningDesc },
    { number: 3, icon: "fas fa-cogs", title: ht.development, description: ht.developmentDesc },
    { number: 4, icon: "fas fa-rocket", title: ht.delivery, description: ht.deliveryDesc }
  ];

  const impacts = [
    { number: 100, suffix: "+", title: ht.projectsCompleted, percentage: 85, icon: "fas fa-rocket" },
    { number: 50, suffix: "+", title: ht.clientsSatisfied, percentage: 75, icon: "fas fa-users" },
    { number: 5, suffix: "+", title: ht.yearsExperience, percentage: 60, icon: "fas fa-calendar-alt" },
    { number: 15, suffix: "+", title: ht.teamMembers, percentage: 100, icon: "fas fa-user-friends" }
  ];
  
  const groupCompanies = [
    {
      name: ht.goWideTitle,
      description: ht.goWideDesc,
      logo: gowideLogo
    },
    {
      name: ht.ergoEdgeTitle,
      description: ht.ergoEdgeDesc,
      logo: ergoEdgeLogo
    },
    {
      name: ht.globalTradeTitle,
      description: ht.globalTradeDesc,
      logo: globalTradeLogo
    }
  ];
  
  // Memoized components for performance
  const MemoizedServiceBox = useMemo(() => React.memo(({ item, itemIndex }) => (
    <motion.div
      key={itemIndex}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
    >
      <ServiceBox>
        <div className="box-icon">
          <i className={item.icon}></i>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
        <ul>
          {item.features.map((feature, featureIndex) => (
            <li key={featureIndex}>
              <i className="fas fa-check"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </ServiceBox>
    </motion.div>
  )), []);

  return (
    <>
      <SEO 
        title="GoWide - Creative Digital Solutions"
        description="Transform your business with innovative branding, advertising, marketing, and technology services. Your trusted digital partner for growth."
        keywords="digital marketing, web development, branding services, advertising agency, technology solutions, business growth"
      />
      <HomePage>
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              |
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {ht.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButtons>
              <HeroButton to="/contact" className="primary">
                <i className="fas fa-rocket"></i>
                {ht.getStarted}
              </HeroButton>
              <HeroButton to="/about" className="secondary">
                <i className="fas fa-info-circle"></i>
                {ht.learnMore}
              </HeroButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <SplitSection>
        <Container>
          <SplitContent>
            <ContentSide>
              <span className="highlight-text">{ht.ourServices}</span>
              <h2 dangerouslySetInnerHTML={{ __html: ht.heroTitle }}></h2>
              <p className="main-text">
                {ht.heroSubtitle}
              </p>
              <FeatureList>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{ht.expertTeam}</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{ht.innovativeSolutions}</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{ht.clientFocused}</span>
                </FeatureItem>
              </FeatureList>
              <CTAButton to="/contact">
                <i className="fas fa-handshake"></i>
                {ht.contactUs}
              </CTAButton>
            </ContentSide>
            <ImageSide>
              <FloatingCard className="card-1">
                <i className="fas fa-chart-line"></i>
                <span>Growth Analytics</span>
              </FloatingCard>
              <FloatingCard className="card-2">
                <i className="fas fa-users"></i>
                <span>Team Collaboration</span>
              </FloatingCard>
              <FloatingCard className="card-3">
                <i className="fas fa-rocket"></i>
                <span>Innovation</span>
              </FloatingCard>
            </ImageSide>
          </SplitContent>
        </Container>
      </SplitSection>

      {services.map((service, index) => (
        <ServicesSection key={index}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <SectionHeader>
                <motion.h2
                  initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotateY: 45 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 80
                  }}
                  style={{ perspective: "1000px" }}
                >
                  {service.title}
                </motion.h2>
                <motion.p 
                  dangerouslySetInnerHTML={{ __html: service.subtitle }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.p>
              </SectionHeader>
            </motion.div>
            <ServicesGrid>
              {service.items.map((item, itemIndex) => (
                <MemoizedServiceBox key={itemIndex} item={item} itemIndex={itemIndex} />
              ))}
            </ServicesGrid>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CTAContainer>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CTAButton to={service.link}>
                    {ht.learnMore}
                  </CTAButton>
                </motion.div>
              </CTAContainer>
            </motion.div>
          </Container>
        </ServicesSection>
      ))}

      <ServicesSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <SectionHeader>
              <motion.h2
                initial={{ opacity: 0, y: -100, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
                style={{ perspective: "1000px" }}
              >
                {ht.ourProducts}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {ht.productsSubtitle}
              </motion.p>
            </SectionHeader>
          </motion.div>
          <ProductsGrid>
            {products.map((product, index) => (
              <ProductCard key={index}>
                <ProductCardInner>
                  <ProductCardFront>
                    <div className="product-icon">
                      <i className={product.icon}></i>
                    </div>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-tagline">"{product.tagline}"</p>
                  </ProductCardFront>
                  <ProductCardBack>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <Link to={product.link} className="learn-more-btn">{ht.learnMore}</Link>
                  </ProductCardBack>
                </ProductCardInner>
              </ProductCard>
            ))}
          </ProductsGrid>
        </Container>
      </ServicesSection>

      <ContactSection>
        <Container>
          <SectionHeader>
            <h2>{ht.readyToStart}</h2>
            <p>{ht.readyToStartDesc}</p>
          </SectionHeader>
          <div>
            <h3>{ht.tellUsAboutProject}</h3>
            <p>{ht.projectDescription}</p>
          </div>
          <ContactButtons>
            <ContactBtn to="/contact">
              <i className="fas fa-phone"></i>
              {ht.scheduleCall}
            </ContactBtn>
            <ContactBtn to="/contact">
              <i className="fas fa-envelope"></i>
              {ht.contactUs}
            </ContactBtn>
          </ContactButtons>
        </Container>
      </ContactSection>

      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>{ht.whyChooseUs}</h2>
            <p>{ht.whyChooseSubtitle}</p>
          </SectionHeader>
          <ServicesGrid>
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceBox>
                  <div className="box-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  <p>{item.description}</p>
                </ServiceBox>
              </motion.div>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <ProcessSection>
        <Container>
          <SectionHeader>
            <h2>{ht.ourProcess}</h2>
            <p>{ht.processSubtitle}</p>
          </SectionHeader>
          <ProcessTimeline>
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem>
                  <div className="timeline-marker">{step.number}</div>
                  <div className="timeline-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </TimelineItem>
              </motion.div>
            ))}
          </ProcessTimeline>
        </Container>
      </ProcessSection>

      <ImpactSection>
        <Container>
          <SectionHeader>
            <h2>{ht.ourImpact}</h2>
            <p>{ht.impactSubtitle}</p>
          </SectionHeader>
          <ImpactGrid>
            {impacts.map((impact, index) => {
              const { count, ref } = useCountUp(impact.number, 2000);
              return (
                <ImpactCard key={index} ref={ref}>
                  <ProgressCard percentage={impact.percentage}>
                    <div className="impact-icon">
                      <i className={impact.icon}></i>
                    </div>
                    <span className="impact-number">{count}{impact.suffix}</span>
                    <h3>{impact.title}</h3>
                  </ProgressCard>
                </ImpactCard>
              );
            })}
          </ImpactGrid>
        </Container>
      </ImpactSection>

      <GroupSection>
        <Container>
          <SectionHeader>
            <h2>{ht.ourGroup}</h2>
            <p>{ht.groupSubtitle}</p>
          </SectionHeader>
          <GroupDescription>
            <p>{ht.groupDescription}</p>
          </GroupDescription>
          <GroupGrid>
            {groupCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GroupCard>
                  <div className="company-logo">
                    <img src={company.logo} alt={company.name} />
                  </div>
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                </GroupCard>
              </motion.div>
            ))}
          </GroupGrid>
        </Container>
      </GroupSection>

      <TechShowcase />
    </HomePage>
    </>
  );
};

export default Home;