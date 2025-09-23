import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CaseStudiesContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 137, 6, 0.1), rgba(255, 137, 6, 0.05));
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CaseCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 137, 6, 0.2);
  }
`;

const CaseTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CaseClient = styled.span`
  color: var(--primary-orange);
  font-size: 0.9rem;
  font-weight: 500;
`;

const CaseDescription = styled.p`
  color: var(--text-secondary);
  margin: 1rem 0;
  line-height: 1.6;
`;

const CaseResults = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const ResultItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-orange);
  }
  
  .label {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`;

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Platform Redesign",
      client: "TechStore Inc.",
      description: "Complete redesign and development of an e-commerce platform resulting in significant improvements in user experience and sales.",
      results: [
        { number: "150%", label: "Sales Increase" },
        { number: "65%", label: "User Engagement" }
      ]
    },
    {
      title: "Digital Marketing Campaign",
      client: "Local Restaurant Chain",
      description: "Comprehensive digital marketing strategy including social media, SEO, and paid advertising campaigns.",
      results: [
        { number: "300%", label: "Online Orders" },
        { number: "85%", label: "Brand Awareness" }
      ]
    },
    {
      title: "Mobile App Development",
      client: "Fitness Startup",
      description: "Native mobile app development for iOS and Android with real-time tracking and social features.",
      results: [
        { number: "50K+", label: "Downloads" },
        { number: "4.8", label: "App Rating" }
      ]
    }
  ];

  return (
    <CaseStudiesContainer>
      <HeroSection>
        <Title>
          Our <span className="highlight">Case Studies</span>
        </Title>
        <Description>
          Real results from real clients. See how we've helped businesses achieve their goals.
        </Description>
      </HeroSection>

      <CasesGrid>
        {cases.map((caseStudy, index) => (
          <CaseCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CaseTitle>{caseStudy.title}</CaseTitle>
            <CaseClient>{caseStudy.client}</CaseClient>
            <CaseDescription>{caseStudy.description}</CaseDescription>
            <CaseResults>
              {caseStudy.results.map((result, idx) => (
                <ResultItem key={idx}>
                  <div className="number">{result.number}</div>
                  <div className="label">{result.label}</div>
                </ResultItem>
              ))}
            </CaseResults>
          </CaseCard>
        ))}
      </CasesGrid>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;