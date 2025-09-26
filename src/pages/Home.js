import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import TechShowcase from '../components/TechShowcase';
import CounterStats from '../components/CounterStats';


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
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-orange);
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
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
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
  }
  
  .impact-icon {
    font-size: 2rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
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

const Home = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('home.brandingTitle'),
      subtitle: t('home.brandingSubtitle'),
      icon: "fas fa-palette",
      items: [
        { icon: "fas fa-chess", title: t('branding.brandStrategyTitle'), features: [t('branding.marketResearch'), t('branding.brandPositioning'), t('branding.targetAudienceAnalysis'), t('branding.competitiveAnalysis')] },
        { icon: "fas fa-palette", title: t('branding.visualIdentityDesignTitle'), features: [t('branding.logoDesign'), t('branding.colorSchemes'), t('branding.typography'), t('branding.brandGuidelines')] },
        { icon: "fas fa-comment-dots", title: t('branding.brandVoiceMessagingTitle'), features: [t('branding.toneDevelopment'), t('branding.messagingStrategy'), t('branding.contentGuidelines'), t('branding.brandStory')] },
        { icon: "fas fa-star", title: t('branding.brandImplementationTitle'), features: [t('branding.customerJourney'), t('branding.touchpointDesign'), t('branding.brandInteraction'), t('branding.experienceMapping')] }
      ],
      link: "/branding"
    },
    {
      title: t('home.technologyTitle'),
      subtitle: t('home.technologySubtitle'),
      icon: "fas fa-code",
      items: [
        { icon: "fas fa-code", title: t('home.webDevelopment'), features: [t('home.customWebSolutions'), t('homeServices.responsiveDesign'), t('home.ecommerce'), t('homeServices.apiIntegration')] },
        { icon: "fas fa-mobile-alt", title: t('home.mobileDevelopment'), features: [t('home.ios'), t('home.android'), t('homeServices.crossPlatformApps'), t('homeServices.mobileUIUX')] },
        { icon: "fas fa-cloud", title: t('home.cloudSolutions'), features: [t('home.migration'), t('home.aws'), t('home.security'), t('homeServices.scalableInfrastructure')] },
        { icon: "fas fa-brain", title: t('homeServices.aiMachineLearning'), features: [t('homeServices.dataAnalytics'), t('homeServices.predictiveModels'), t('homeServices.aiIntegration'), t('homeServices.machineLearningModels')] }
      ],
      link: "/technology"
    },
    {
      title: t('home.marketingTitle'),
      subtitle: t('home.marketingSubtitle'),
      icon: "fas fa-bullhorn",
      items: [
        { icon: "fas fa-bullhorn", title: t('marketing.digitalMarketing'), features: [t('marketing.socialMediaMarketing'), t('marketing.contentStrategy'), t('marketing.emailMarketing'), t('advertising.digitalAdvertising')] },
        { icon: "fas fa-search", title: t('marketing.seoOptimization'), features: [t('marketing.keywordResearch'), t('marketing.onPageSEO'), t('marketing.technicalSEO'), t('marketing.linkBuilding')] },
        { icon: "fas fa-pen-fancy", title: t('marketing.contentMarketing'), features: [t('marketing.blogWriting'), t('marketing.videoProduction'), t('marketing.infographics'), t('marketing.contentStrategy')] },
        { icon: "fas fa-chart-line", title: t('marketing.marketingAnalytics'), features: [t('marketing.performanceTracking'), t('marketing.dataAnalysis'), t('marketing.roiMeasurement'), t('marketing.marketResearch')] }
      ],
      link: "/marketing"
    },
    {
      title: t('home.advertisingTitle'),
      subtitle: t('home.advertisingSubtitle'),
      icon: "fas fa-ad",
      items: [
        { icon: "fas fa-ad", title: t('advertising.googleAds'), features: [t('advertising.googleAdsManagement'), t('advertising.socialMediaAdvertising'), t('advertising.displayAds'), t('advertising.retargeting')] },
        { icon: "fas fa-mouse-pointer", title: t('home.ppcManagement'), features: [t('advertising.keywordResearch'), t('advertising.bidManagement'), t('advertising.abTesting'), t('advertising.conversionTracking')] },
        { icon: "fas fa-palette", title: t('advertising.creativeDesign'), features: [t('advertising.bannerDesign'), t('homeServices.adCreatives'), t('advertising.videoAds'), t('homeServices.richMediaAds')] },
        { icon: "fas fa-chart-pie", title: t('homeServices.campaignAnalytics'), features: [t('homeServices.performanceMetrics'), t('homeServices.roiAnalysis'), t('homeServices.audienceInsights'), t('advertising.campaignOptimization')] }
      ],
      link: "/advertising"
    }
  ];

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
    { icon: "fas fa-rocket", title: t('whyChoose.fastDelivery'), description: t('whyChoose.fastDeliveryDesc') },
    { icon: "fas fa-shield-alt", title: t('whyChoose.reliableSolutions'), description: t('whyChoose.reliableSolutionsDesc') },
    { icon: "fas fa-lightbulb", title: t('whyChoose.innovativeApproach'), description: t('whyChoose.innovativeApproachDesc') },
    { icon: "fas fa-headset", title: t('whyChoose.support247'), description: t('whyChoose.support247Desc') }
  ];

  const process = [
    { number: 1, icon: "fas fa-search", title: t('process.discover'), description: t('process.discoverDesc') },
    { number: 2, icon: "fas fa-lightbulb", title: t('process.design'), description: t('process.designDesc') },
    { number: 3, icon: "fas fa-cogs", title: t('process.develop'), description: t('process.developDesc') },
    { number: 4, icon: "fas fa-rocket", title: t('process.deploy'), description: t('process.deployDesc') }
  ];

  const impacts = [
    { number: "100+", title: t('common.projectsCompleted'), percentage: 85, icon: "fas fa-rocket" },
    { number: "50+", title: t('common.happyClients'), percentage: 75, icon: "fas fa-users" },
    { number: "5+", title: t('common.yearsExperience'), percentage: 60, icon: "fas fa-calendar-alt" },
    { number: "24/7", title: t('common.supportAvailable'), percentage: 100, icon: "fas fa-headset" }
  ];

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
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButtons>
              <HeroButton to="/contact" className="primary">
                <i className="fas fa-rocket"></i>
                {t('hero.getStarted')}
              </HeroButton>
              <HeroButton to="/about" className="secondary">
                <i className="fas fa-info-circle"></i>
                {t('hero.learnMore')}
              </HeroButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <SplitSection>
        <Container>
          <SplitContent>
            <ContentSide>
              <span className="highlight-text">{t('about.whoWeAre')}</span>
              <h2>{t('hero.title')}</h2>
              <p className="main-text">
                {t('hero.subtitle')}
              </p>
              <FeatureList>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{t('about.strategicDigitalSolutions')}</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{t('about.expertTeamProfessionals')}</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>{t('about.innovativeTechnologyApproach')}</span>
                </FeatureItem>
              </FeatureList>
              <CTAButton to="/contact">
                <i className="fas fa-handshake"></i>
                {t('common.contactUs')}
              </CTAButton>
            </ContentSide>
            <ImageSide>
              <FloatingCard className="card-1">
                <i className="fas fa-chart-line"></i>
                <span>{t('common.growthAnalytics')}</span>
              </FloatingCard>
              <FloatingCard className="card-2">
                <i className="fas fa-users"></i>
                <span>{t('common.teamCollaboration')}</span>
              </FloatingCard>
              <FloatingCard className="card-3">
                <i className="fas fa-rocket"></i>
                <span>{t('common.innovation')}</span>
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
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: itemIndex * 0.15,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ServiceBox>
                    <motion.div 
                      className="box-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: itemIndex * 0.15 + 0.3 }}
                    >
                      <i className={item.icon}></i>
                    </motion.div>
                    <motion.h3 
                      dangerouslySetInnerHTML={{ __html: item.title }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.15 + 0.4 }}
                    ></motion.h3>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: itemIndex * 0.15 + 0.5 }}
                    >
                      {item.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: itemIndex * 0.15 + 0.6 + featureIndex * 0.1 
                          }}
                        >
                          <i className="fas fa-check"></i>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </ServiceBox>
                </motion.div>
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
                    {t('common.learnMore')}
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
                {t('common.ourProducts')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
{t('about.exploreInnovativeSoftware')}
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
                    <Link to={product.link} className="learn-more-btn">{t('common.learnMore')}</Link>
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
            <h2>{t('about.readyToGetStarted')}</h2>
            <p>{t('about.letUsKnowNeeds')}</p>
          </SectionHeader>
          <div>
            <h3>{t('about.tellUsAboutProject')}</h3>
            <p>{t('about.projectDescription')}</p>
          </div>
          <ContactButtons>
            <ContactBtn to="/contact">
              <i className="fas fa-phone"></i>
              {t('about.scheduleACall')}
            </ContactBtn>
            <ContactBtn to="/contact">
              <i className="fas fa-envelope"></i>
              {t('common.contactUs')}
            </ContactBtn>
          </ContactButtons>
        </Container>
      </ContactSection>

      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>{t('about.whyChooseGoWide')}</h2>
            <p>{t('about.deliverExceptionalResults')}</p>
          </SectionHeader>
          <ServicesGrid>
            {whyChoose.map((item, index) => (
              <ServiceBox key={index}>
                <div className="box-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <p>{item.description}</p>
              </ServiceBox>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <ProcessSection>
        <Container>
          <SectionHeader>
            <h2>{t('common.ourProcess')}</h2>
            <p>{t('about.howWeDeliverSuccess')}</p>
          </SectionHeader>
          <ProcessTimeline>
            {process.map((step, index) => (
              <TimelineItem key={index}>
                <div className="timeline-marker">{step.number}</div>
                <div className="timeline-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </TimelineItem>
            ))}
          </ProcessTimeline>
        </Container>
      </ProcessSection>

      <ImpactSection>
        <Container>
          <SectionHeader>
            <h2>{t('common.ourImpact')}</h2>
            <p>{t('about.numbersThatSpeak')}</p>
          </SectionHeader>
          <ImpactGrid>
            {impacts.map((impact, index) => (
              <ImpactCard key={index}>
                <ProgressCard percentage={impact.percentage}>
                  <div className="impact-icon">
                    <i className={impact.icon}></i>
                  </div>
                  <span className="impact-number">{impact.number}</span>
                  <h3>{impact.title}</h3>
                </ProgressCard>
              </ImpactCard>
            ))}
          </ImpactGrid>
        </Container>
      </ImpactSection>

      <CounterStats />
      <TechShowcase />
    </HomePage>
    </>
  );
};

export default Home;