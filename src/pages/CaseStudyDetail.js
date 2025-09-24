import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { client } from '../lib/sanity';

const CaseStudyContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: transparent;
  
  body.light-theme & {
    background: rgba(255, 255, 254, 0.95);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const caseStudyData = await client.fetch(
          `*[_type == "caseStudy" && slug.current == $slug][0]`,
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

  if (loading) return <CaseStudyContainer><Container><h2>Loading...</h2></Container></CaseStudyContainer>;
  if (!caseStudy) return <CaseStudyContainer><Container><h2>Case study not found</h2></Container></CaseStudyContainer>;

  return (
    <CaseStudyContainer>
      <Container>
        <h1 style={{color: 'var(--text-primary)', marginBottom: '1rem'}}>{caseStudy.projectTitle}</h1>
        <p style={{color: 'var(--primary-orange)', fontWeight: '600', marginBottom: '1rem'}}>
          {caseStudy.clientName} • {caseStudy.industry}
        </p>
        <div style={{color: 'var(--text-primary)', lineHeight: '1.6', fontSize: '1.1rem'}}>
          <p>{caseStudy.projectDescription}</p>
          {caseStudy.results && (
            <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(255, 137, 6, 0.1)', borderRadius: '10px'}}>
              <h3 style={{color: 'var(--primary-orange)'}}>Results:</h3>
              <p>{caseStudy.results}</p>
            </div>
          )}
        </div>
      </Container>
    </CaseStudyContainer>
  );
};

export default CaseStudyDetail;