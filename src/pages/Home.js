import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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
  
  @media (min-width: 1920px) {
    max-width: 1200px;
  }
  
  @media (min-width: 2560px) {
    max-width: 1400px;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 1.2;
    background: linear-gradient(135deg, var(--text-primary), var(--primary-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    line-height: 1.6;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
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
  
  @media (min-width: 1920px) {
    gap: 40px;
  }
  
  @media (min-width: 2560px) {
    gap: 50px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;

    .highlight {
      color: var(--primary);
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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 400px;
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
    background: conic-gradient(var(--primary-orange) ${props => props.percentage}%, rgba(255, 255, 255, 0.1) 0%);
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
    color: var(--primary-orange);
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
  const services = [
    {
      title: "Branding",
      subtitle: "Transform Your Brand Identity With Our Expertise",
      icon: "fas fa-palette",
      items: [
        { icon: "fas fa-chess", title: "Brand Strategy", features: ["Market Research", "Brand Positioning", "Target Audience Analysis", "Competitive Analysis"] },
        { icon: "fas fa-palette", title: "Visual Identity", features: ["Logo Design", "Color Schemes", "Typography", "Brand Guidelines"] },
        { icon: "fas fa-comment-dots", title: "Brand Voice", features: ["Tone Development", "Messaging Strategy", "Content Guidelines", "Brand Story"] },
        { icon: "fas fa-star", title: "Brand Experience", features: ["Customer Journey", "Touchpoint Design", "Brand Interaction", "Experience Mapping"] }
      ],
      link: "/branding"
    },
    {
      title: "Technology",
      subtitle: "Powering Innovation with Advanced Solutions",
      icon: "fas fa-code",
      items: [
        { icon: "fas fa-code", title: "Web Development", features: ["Custom Web Applications", "Responsive Design", "E-commerce Solutions", "API Integration"] },
        { icon: "fas fa-mobile-alt", title: "Mobile Development", features: ["iOS Applications", "Android Applications", "Cross-Platform Apps", "Mobile UI/UX"] },
        { icon: "fas fa-cloud", title: "Cloud Services", features: ["Cloud Migration", "AWS Solutions", "Cloud Security", "Scalable Infrastructure"] },
        { icon: "fas fa-brain", title: "AI & Machine Learning", features: ["Data Analytics", "Predictive Models", "AI Integration", "Machine Learning Models"] }
      ],
      link: "/technology"
    },
    {
      title: "Marketing",
      subtitle: "Drive Growth with Strategic Marketing Solutions",
      icon: "fas fa-bullhorn",
      items: [
        { icon: "fas fa-bullhorn", title: "Digital Marketing", features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Digital Advertising"] },
        { icon: "fas fa-search", title: "Search Engine Optimization", features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"] },
        { icon: "fas fa-pen-fancy", title: "Content Marketing", features: ["Blog Writing", "Video Production", "Infographics", "Content Strategy"] },
        { icon: "fas fa-chart-line", title: "Marketing Analytics", features: ["Performance Tracking", "Data Analysis", "ROI Measurement", "Market Research"] }
      ],
      link: "/marketing"
    },
    {
      title: "Advertisement",
      subtitle: "Create Impactful Ad Campaigns That Convert",
      icon: "fas fa-ad",
      items: [
        { icon: "fas fa-ad", title: "Digital Advertising", features: ["Google Ads Management", "Social Media Ads", "Display Advertising", "Retargeting Campaigns"] },
        { icon: "fas fa-mouse-pointer", title: "PPC Management", features: ["Keyword Optimization", "Bid Management", "A/B Testing", "Conversion Tracking"] },
        { icon: "fas fa-palette", title: "Creative Design", features: ["Banner Design", "Ad Creatives", "Video Ads", "Rich Media Ads"] },
        { icon: "fas fa-chart-pie", title: "Campaign Analytics", features: ["Performance Metrics", "ROI Analysis", "Audience Insights", "Campaign Optimization"] }
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
    { icon: "fas fa-rocket", title: "Fast Delivery", description: "Quick turnaround times without compromising quality" },
    { icon: "fas fa-shield-alt", title: "Reliable Solutions", description: "Trusted by businesses worldwide for consistent results" },
    { icon: "fas fa-lightbulb", title: "Innovative Approach", description: "Cutting-edge solutions tailored to your needs" },
    { icon: "fas fa-headset", title: "24/7 Support", description: "Round-the-clock assistance for all your queries" }
  ];

  const process = [
    { number: 1, icon: "fas fa-search", title: "Discover", description: "Understanding your needs and goals" },
    { number: 2, icon: "fas fa-lightbulb", title: "Design", description: "Creating tailored solutions" },
    { number: 3, icon: "fas fa-cogs", title: "Develop", description: "Building with precision" },
    { number: 4, icon: "fas fa-rocket", title: "Deploy", description: "Launching your success" }
  ];

  const impacts = [
    { number: "100+", title: "Projects Completed", percentage: 85 },
    { number: "50+", title: "Happy Clients", percentage: 75 },
    { number: "5+", title: "Years Experience", percentage: 60 },
    { number: "24/7", title: "Support Available", percentage: 100 }
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
            Transforming Ideas Into Digital Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're more than just a digital agency. We're your partners in growth, dedicated to turning your vision into impactful digital solutions that drive results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButtons>
              <HeroButton to="/contact" className="primary">
                <i className="fas fa-rocket"></i>
                Get Started
              </HeroButton>
              <HeroButton to="/about" className="secondary">
                <i className="fas fa-info-circle"></i>
                Learn More
              </HeroButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <SplitSection>
        <Container>
          <SplitContent>
            <ContentSide>
              <span className="highlight-text">Who We Are</span>
              <h2>Transforming Ideas Into Digital Reality</h2>
              <p className="main-text">
                We're more than just a digital agency. We're your partners in growth, 
                dedicated to turning your vision into impactful digital solutions that drive results.
              </p>
              <FeatureList>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>Strategic Digital Solutions</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>Expert Team of Professionals</span>
                </FeatureItem>
                <FeatureItem>
                  <i className="fas fa-check-circle"></i>
                  <span>Innovative Technology Approach</span>
                </FeatureItem>
              </FeatureList>
              <CTAButton to="/contact">
                <i className="fas fa-handshake"></i>
                Let's Work Together
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
            <SectionHeader>
              <h2>{service.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: service.subtitle }}></p>
            </SectionHeader>
            <ServicesGrid>
              {service.items.map((item, itemIndex) => (
                <ServiceBox key={itemIndex}>
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
              ))}
            </ServicesGrid>
            <CTAContainer>
              <CTAButton to={service.link}>
                Learn More About Our {service.title} Services
              </CTAButton>
            </CTAContainer>
          </Container>
        </ServicesSection>
      ))}

      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>Our Products</h2>
            <p>Explore our innovative <span className="highlight">software solutions</span> designed to meet your needs.</p>
          </SectionHeader>
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
                    <Link to={product.link} className="learn-more-btn">Learn More</Link>
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
            <h2>Ready to Get Started?</h2>
            <p>Let us know your needs and we'll <span className="highlight">get back to you</span></p>
          </SectionHeader>
          <div>
            <h3>Tell Us About Your Project</h3>
            <p>Whether you need branding, technology solutions, marketing strategies, or any of our products, we're here to help. Share your requirements with us and our expert team will get back to you with the perfect solution.</p>
          </div>
          <ContactButtons>
            <ContactBtn to="/contact">
              <i className="fas fa-phone"></i>
              Schedule a Call
            </ContactBtn>
            <ContactBtn to="/contact">
              <i className="fas fa-envelope"></i>
              Contact Us
            </ContactBtn>
          </ContactButtons>
        </Container>
      </ContactSection>

      <ServicesSection>
        <Container>
          <SectionHeader>
            <h2>Why Choose GoWide?</h2>
            <p>We deliver <span className="highlight">exceptional results</span> through innovation and expertise</p>
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
            <h2>Our Process</h2>
            <p>How we <span className="highlight">deliver success</span></p>
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
            <h2>Our Impact</h2>
            <p>Numbers that <span className="highlight">speak for themselves</span></p>
          </SectionHeader>
          <ImpactGrid>
            {impacts.map((impact, index) => (
              <ImpactCard key={index}>
                <CircularProgress percentage={impact.percentage}>
                  <div className="progress-circle">
                    <div className="progress-inner">
                      <span>{impact.number}</span>
                    </div>
                  </div>
                </CircularProgress>
                <h3>{impact.title}</h3>
              </ImpactCard>
            ))}
          </ImpactGrid>
        </Container>
      </ImpactSection>
    </HomePage>
    </>
  );
};

export default Home;