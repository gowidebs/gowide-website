import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getCaseStudies } from '../lib/sanity';

const CaseStudiesContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
  
  .highlight {
    color: var(--primary-orange);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 1440px) {
    max-width: 1400px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1600px;
    gap: 2.5rem;
  }
`;

const CaseStudyCard = styled(motion.article)`
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .case-image {
    width: 100%;
    height: 250px;
    background: linear-gradient(135deg, var(--primary-orange), rgba(255, 137, 6, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .placeholder {
      color: white;
      font-size: 3rem;
    }
    
    .case-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(255, 255, 255, 0.9);
      color: var(--primary-orange);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  
  .case-content {
    padding: 2rem;
    
    @media (max-width: 480px) {
      padding: 1.5rem;
    }
    
    .case-client {
      color: var(--primary-orange);
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    
    h3 {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
      
      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .case-results {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .result-item {
        text-align: center;
        
        .result-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-orange);
          display: block;
          
          @media (max-width: 480px) {
            font-size: 1.3rem;
          }
        }
        
        .result-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      }
    }
    
    .view-case {
      color: var(--primary-orange);
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
      }
    }
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
`;

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const caseStudiesData = await getCaseStudies();
        setCaseStudies(caseStudiesData || []);
      } catch (error) {
        console.error('Error fetching case studies:', error);
        setCaseStudies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <CaseStudiesContainer>
        <LoadingState>
          <h2>Loading case studies...</h2>
        </LoadingState>
      </CaseStudiesContainer>
    );
  }

  return (
    <CaseStudiesContainer>
      <HeroSection>
        <Title>
          Case <span className="highlight">Studies</span>
        </Title>
        <Description>
          Real results from real clients. Discover how we've helped businesses achieve their goals.
        </Description>
      </HeroSection>

      <section style={{ padding: '0 0 6rem' }}>
        <CaseStudiesGrid>
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="case-image">
                {caseStudy.projectImage ? (
                  <img src={caseStudy.projectImage} alt={caseStudy.projectTitle || 'Case study image'} />
                ) : (
                  <div className="placeholder">
                    <i className="fas fa-chart-line"></i>
                  </div>
                )}
                <div className="case-category">{caseStudy.industry}</div>
              </div>
              <div className="case-content">
                <div className="case-client">{caseStudy.clientName}</div>
                <h3>{caseStudy.projectTitle}</h3>
                <p>{caseStudy.projectDescription}</p>
                {caseStudy.results && (
                  <div className="case-results">
                    <div className="result-item">
                      <span className="result-number">{caseStudy.results}</span>
                      <span className="result-label">Results Achieved</span>
                    </div>
                  </div>
                )}
                <a href={`/case-studies/${caseStudy.slug?.current}`} className="view-case">
                  View Case Study <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </CaseStudyCard>
          ))}
        </CaseStudiesGrid>
      </section>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;