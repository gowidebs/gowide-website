import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getJobVacancies, submitJobApplication } from '../lib/sanity';
import { showNotification } from '../components/Notification';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';

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
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 1rem;
    }
    
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
        
        @media (max-width: 480px) {
          font-size: 1.3rem;
        }
      }
      
      .job-location, .job-experience {
        color: var(--text-secondary);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
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
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }
    
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
      
      @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid rgba(255, 137, 6, 0.3);
      border-radius: 10px;
      background: var(--input-bg);
      color: white;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: var(--primary-orange);
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 100px;
    }
    
    .file-input {
      position: relative;
      
      input[type="file"] {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      
      .file-label {
        display: block;
        padding: 0.8rem;
        border: 2px dashed rgba(255, 137, 6, 0.3);
        border-radius: 10px;
        text-align: center;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          border-color: var(--primary-orange);
          color: var(--primary-orange);
        }
        
        &.has-file {
          border-color: var(--primary-orange);
          color: var(--primary-orange);
        }
      }
    }
  }
  
  .modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    
    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &.cancel {
        background: transparent;
        color: white;
        border: 1px solid rgba(255, 137, 6, 0.3);
        
        &:hover {
          background: rgba(255, 137, 6, 0.1);
        }
      }
      
      &.submit {
        background: var(--primary-orange);
        color: white;
        
        &:hover {
          background: var(--secondary-orange);
        }
        
        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
  }
`;

const Careers = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });
  const [submitting, setSubmitting] = useState(false);

  const handleApplyClick = (jobId, jobTitle) => {
    setSelectedJob({ id: jobId, title: jobTitle });
    setShowModal(true);
    setFormData({ name: '', email: '', phone: '', coverLetter: '', resume: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.resume) {
      showNotification('Please fill in all required fields and upload your CV', 'error');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    setSubmitting(true);
    
    try {
      const applicationData = {
        jobId: selectedJob.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        resume: formData.resume
      };
      
      await submitJobApplication(applicationData);
      showNotification(`Thank you for applying to ${selectedJob.title}! We will review your application and get back to you soon.`, 'success');
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      showNotification('Sorry, there was an error submitting your application. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await getJobVacancies();
        console.log('Jobs fetched:', jobsData);
        setJobs(Array.isArray(jobsData) ? jobsData : []);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);





  return (
    <>
      <SEO 
        title="Careers - Join Our Team"
        description="Join GoWide and build your career with us. Explore exciting job opportunities in technology, marketing, design, and more."
        keywords="careers, jobs, employment, technology jobs, marketing jobs, remote work, GoWide careers"
        url="https://gowide.in/careers"
      />
      <CareersContainer>
        <ParticleBackground />
        
        {showModal && (
          <ModalOverlay onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h3>Apply for {selectedJob?.title}</h3>
              <form onSubmit={handleSubmitApplication}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
                
                <div className="form-group">
                  <label>Upload CV/Resume *</label>
                  <div className="file-input">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                    <div className={`file-label ${formData.resume ? 'has-file' : ''}`}>
                      {formData.resume ? formData.resume.name : 'Click to upload CV (PDF, DOC, DOCX)'}
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button type="button" className="cancel" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      <HeroSection>
        <Title>
          Join Our <span className="highlight">Team</span>
        </Title>
        <Description>
          Build your career with us and be part of something amazing
        </Description>
      </HeroSection>

      <section style={{ padding: '0 0 6rem' }}>
        {loading ? (
          <LoadingState>
            <h2>{t('careers.loading')}</h2>
          </LoadingState>
        ) : jobs.length > 0 ? (
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
                    <div className="job-experience">
                      <i className="fas fa-briefcase"></i>
                      {job.experienceLevel}
                    </div>
                  </div>
                  <div className="job-type">{job.jobType}</div>
                </div>
                
                <div className="job-description">
                  {job.description}
                </div>
                
                {job.requirements && (
                  <div className="job-requirements">
                    <h4>Requirements</h4>
                    <ul>
                      {(Array.isArray(job.requirements) 
                        ? job.requirements 
                        : job.requirements.split('\n').filter(req => req.trim())
                      ).slice(0, 4).map((req, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          {req.trim()}
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
                    {t('careers.applyNow')}
                  </button>
                </div>
              </JobCard>
            ))}
          </JobsGrid>
        ) : (
          <NoJobsState>
            <h3>No Open Positions</h3>
            <p>We don't have any open positions at the moment, but we're always looking for talented individuals.</p>
            <button className="contact-btn">
              Send Resume
            </button>
          </NoJobsState>
        )}
      </section>
    </CareersContainer>
    </>
  );
};

export default Careers;