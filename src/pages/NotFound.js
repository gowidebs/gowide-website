import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  
  .error-code {
    font-size: 8rem;
    font-weight: 700;
    color: var(--primary-orange);
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 6rem;
    }
  }
  
  h1 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    
    .btn {
      padding: 1rem 2rem;
      border-radius: 25px;
      font-weight: 600;
      text-decoration: none;
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
        border: 1px solid var(--primary-orange);
        
        &:hover {
          background: var(--primary-orange);
          color: white;
          transform: translateY(-2px);
        }
      }
    }
  }
`;

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | GoWide"
        description="The page you're looking for doesn't exist. Return to GoWide homepage or explore our services."
        url="https://gowide.in/404"
      />
      <Container>
        <ParticleBackground />
        <Content>
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="actions">
            <Link to="/" className="btn primary">
              Go Home
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Us
            </Link>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default NotFound;