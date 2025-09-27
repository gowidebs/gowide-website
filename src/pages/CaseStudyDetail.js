import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { writeClient } from '../lib/sanity';
import ParticleBackground from '../components/ParticleBackground';

const CaseStudyContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .client-info {
    color: var(--primary-orange);
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .project-meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    
    .meta-item {
      text-align: center;
      
      .label {
        color: var(--text-secondary);
        font-size: 0.9rem;
        display: block;
      }
      
      .value {
        color: var(--text-primary);
        font-weight: 600;
        font-size: 1.1rem;
      }
    }
  }
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
  
  h2 {
    color: var(--primary-orange);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--primary-orange);
    padding-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-primary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:before {
        content: '✓';
        color: var(--primary-orange);
        font-weight: bold;
      }
    }
  }
`;

const ResultsSection = styled.section`
  background: rgba(255, 137, 6, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin: 3rem 0;
  
  h2 {
    color: var(--primary-orange);
    margin-bottom: 1.5rem;
  }
  
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
    
    .metric-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
      
      .metric-name {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .metric-improvement {
        color: var(--primary-orange);
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      
      .metric-values {
        color: var(--text-primary);
        font-size: 0.9rem;
      }
    }
  }
`;

const TestimonialSection = styled.section`
  background: var(--card-bg);
  border-left: 4px solid var(--primary-orange);
  padding: 2rem;
  margin: 3rem 0;
  border-radius: 10px;
  
  .quote {
    font-style: italic;
    color: var(--text-primary);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .author {
    color: var(--primary-orange);
    font-weight: 600;
  }
  
  .position {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  .tech-tag {
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary-orange);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-orange);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
`;

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const caseStudyData = await writeClient.fetch(
          `*[_type == "caseStudy" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            clientName,
            industry,
            companySize,
            location,
            "clientLogo": clientLogo.asset->url,
            "featuredImage": featuredImage.asset->url,
            challenge,
            objectives,
            solution,
            technologiesUsed,
            "projectGallery": projectGallery[].asset->url,
            websiteUrl,
            appStoreUrl,
            playStoreUrl,
            instagramUrl,
            results,
            metricsImproved,
            testimonial,
            testimonialAuthor,
            testimonialPosition,
            keyTakeaways,
            projectDuration,
            teamSize,
            completedDate,
            category
          }`,
          { slug }
        );
        setCaseStudy(caseStudyData);
      } catch (error) {
        console.error('Error fetching case study:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <CaseStudyContainer>
        <ParticleBackground />
        <Container><h2>Loading...</h2></Container>
      </CaseStudyContainer>
    );
  }
  
  if (!caseStudy) {
    return (
      <CaseStudyContainer>
        <ParticleBackground />
        <Container><h2>Case study not found</h2></Container>
      </CaseStudyContainer>
    );
  }

  return (
    <CaseStudyContainer>
      <ParticleBackground />
      <Container>
        <BackButton to="/case-studies">
          <i className="fas fa-arrow-left"></i> Back to Case Studies
        </BackButton>
        
        <HeroSection>
          <h1>{caseStudy.title}</h1>
          <div className="client-info">
            {caseStudy.clientName} • {caseStudy.industry}
          </div>
          <div className="project-meta">
            <div className="meta-item">
              <span className="label">Duration</span>
              <span className="value">{caseStudy.projectDuration}</span>
            </div>
            <div className="meta-item">
              <span className="label">Team Size</span>
              <span className="value">{caseStudy.teamSize}</span>
            </div>
            <div className="meta-item">
              <span className="label">Category</span>
              <span className="value">{caseStudy.category}</span>
            </div>
          </div>
        </HeroSection>

        {caseStudy.challenge && (
          <ContentSection>
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </ContentSection>
        )}

        {caseStudy.objectives && caseStudy.objectives.length > 0 && (
          <ContentSection>
            <h2>Objectives</h2>
            <ul>
              {caseStudy.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </ContentSection>
        )}

        {caseStudy.solution && (
          <ContentSection>
            <h2>Our Solution</h2>
            <p>{caseStudy.solution}</p>
          </ContentSection>
        )}

        {caseStudy.technologiesUsed && caseStudy.technologiesUsed.length > 0 && (
          <ContentSection>
            <h2>Technologies Used</h2>
            <TechStack>
              {caseStudy.technologiesUsed.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </TechStack>
          </ContentSection>
        )}

        {caseStudy.results && (
          <ResultsSection>
            <h2>Results & Impact</h2>
            <p>{caseStudy.results}</p>
            
            {caseStudy.metricsImproved && caseStudy.metricsImproved.length > 0 && (
              <div className="metrics-grid">
                {caseStudy.metricsImproved.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <div className="metric-name">{metric.metric}</div>
                    <div className="metric-improvement">{metric.improvement}</div>
                    <div className="metric-values">
                      {metric.beforeValue} → {metric.afterValue}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ResultsSection>
        )}

        {caseStudy.testimonial && (
          <TestimonialSection>
            <div className="quote">"{caseStudy.testimonial}"</div>
            <div className="author">{caseStudy.testimonialAuthor}</div>
            <div className="position">{caseStudy.testimonialPosition}</div>
          </TestimonialSection>
        )}

        {caseStudy.keyTakeaways && caseStudy.keyTakeaways.length > 0 && (
          <ContentSection>
            <h2>Key Takeaways</h2>
            <ul>
              {caseStudy.keyTakeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </ContentSection>
        )}
      </Container>
    </CaseStudyContainer>
  );
};

export default CaseStudyDetail;