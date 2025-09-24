import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getJobVacancies, submitJobApplication } from '../lib/sanity';
import { showNotification } from '../components/Notification';
import SEO from '../components/SEO';

const CareersContainer = styled.div`
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

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const JobCard = styled(motion.article)`
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 137, 6, 0.2);
  }
  
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    
    .job-info {
      flex: 1;
      
      .job-department {
        color: var(--primary-orange);
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      h3 {
        color: var(--text-primary);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        line-height: 1.3;
      }
      
      .job-location {
        color: var(--text-secondary);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
    
    .job-type {
      background: rgba(255, 137, 6, 0.1);
      color: var(--primary-orange);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
    }
  }
  
  .job-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .job-requirements {
    margin-bottom: 2rem;
    
    h4 {
      color: var(--text-primary);
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    
    ul {
      list-style: none;
      
      li {
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        i {
          color: var(--primary-orange);
          font-size: 0.8rem;
        }
      }
    }
  }
  
  .job-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .job-salary {
      color: var(--primary-orange);
      font-weight: 600;
    }
    
    .apply-btn {
      background: var(--primary-orange);
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--secondary-orange);
        transform: translateY(-2px);
      }
    }
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
`;

const NoJobsState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
  
  .contact-btn {
    background: var(--primary-orange);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--secondary-orange);
      transform: translateY(-2px);
    }
  }
`;

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleApplyClick = (jobId, jobTitle) => {
    // Create a proper modal instead of using prompt
    const name = window.prompt('Enter your full name:');
    if (!name) return;
    
    const email = window.prompt('Enter your email:');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    const phone = window.prompt('Enter your phone number:');
    
    if (name && email) {
      // Create file input for CV upload
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.pdf,.doc,.docx';
      fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          try {
            const applicationData = {
              jobId,
              name,
              email,
              phone,
              coverLetter: prompt('Brief cover letter (optional):') || '',
              resume: file
            };
            
            await submitJobApplication(applicationData);
            showNotification(`Thank you for applying to ${jobTitle}! We will review your application and get back to you soon.`, 'success');
          } catch (error) {
            console.error('Error submitting application:', error);
            showNotification('Sorry, there was an error submitting your application. Please try again.', 'error');
          }
        }
      };
      fileInput.click();
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await getJobVacancies();
        setJobs(jobsData || []);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <CareersContainer>
        <LoadingState>
          <h2>Loading career opportunities...</h2>
        </LoadingState>
      </CareersContainer>
    );
  }

  return (
    <>
      <SEO 
        title="Careers - Join Our Team"
        description="Join GoWide and build your career with us. Explore exciting job opportunities in technology, marketing, design, and more."
        keywords="careers, jobs, employment, technology jobs, marketing jobs, remote work, GoWide careers"
        url="https://gowide.in/careers"
      />
      <CareersContainer>
      <HeroSection>
        <Title>
          Join Our <span className="highlight">Team</span>
        </Title>
        <Description>
          Build your career with us and help create amazing digital experiences for clients worldwide.
        </Description>
      </HeroSection>

      <section style={{ padding: '0 0 6rem' }}>
        {jobs.length > 0 ? (
          <JobsGrid>
            {jobs.map((job, index) => (
              <JobCard
                key={job._id || job.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="job-header">
                  <div className="job-info">
                    <div className="job-department">{job.department}</div>
                    <h3>{job.title}</h3>
                    <div className="job-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {job.location}
                    </div>
                  </div>
                  <div className="job-type">{job.jobType}</div>
                </div>
                
                <div className="job-description">
                  {job.description}
                </div>
                
                {job.requirements && (
                  <div className="job-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.slice(0, 4).map((req, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="job-footer">
                  <div className="job-salary">{job.salaryRange}</div>
                  <button 
                    className="apply-btn"
                    onClick={() => handleApplyClick(job._id, job.title)}
                  >
                    Apply Now
                  </button>
                </div>
              </JobCard>
            ))}
          </JobsGrid>
        ) : (
          <NoJobsState>
            <h3>No Open Positions</h3>
            <p>We don't have any open positions right now, but we're always looking for talented people!</p>
            <button className="contact-btn">
              Send Us Your Resume
            </button>
          </NoJobsState>
        )}
      </section>
    </CareersContainer>
    </>
  );
};

export default Careers;