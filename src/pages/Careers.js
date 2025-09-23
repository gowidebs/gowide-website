import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CareersContainer = styled.div`
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

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const JobCard = styled(motion.div)`
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

const JobTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const JobType = styled.span`
  color: var(--primary-orange);
  font-size: 0.9rem;
  font-weight: 500;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  margin: 1rem 0;
  line-height: 1.6;
`;

const ApplyButton = styled.button`
  background: var(--primary-orange);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e67e00;
    transform: translateY(-2px);
  }
`;

const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      description: "Join our team to build amazing user interfaces using React, TypeScript, and modern web technologies."
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      description: "Drive our digital marketing efforts across multiple channels and help businesses grow their online presence."
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      description: "Create beautiful and intuitive designs that enhance user experience across our products and client projects."
    }
  ];

  return (
    <CareersContainer>
      <HeroSection>
        <Title>
          Join Our <span className="highlight">Team</span>
        </Title>
        <Description>
          Be part of an innovative team that's shaping the future of digital solutions.
        </Description>
      </HeroSection>

      <JobsGrid>
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <JobTitle>{job.title}</JobTitle>
            <JobType>{job.type}</JobType>
            <JobDescription>{job.description}</JobDescription>
            <ApplyButton>Apply Now</ApplyButton>
          </JobCard>
        ))}
      </JobsGrid>
    </CareersContainer>
  );
};

export default Careers;