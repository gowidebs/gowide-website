import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { submitContactForm } from '../lib/sanity';
import { showNotification } from '../components/Notification';
import SEO from '../components/SEO';

const ContactPage = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const ContactHero = styled.section`
  position: relative;
  padding: 120px 0 80px;
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

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .floating-element {
    position: absolute;
    color: var(--primary);
    font-size: 2rem;
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;

    &:nth-child(1) {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }
    &:nth-child(3) {
      bottom: 30%;
      left: 20%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      top: 40%;
      right: 30%;
      animation-delay: 1s;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 137, 6, 0.1);
  color: var(--primary);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 137, 6, 0.2);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  .highlight {
    color: var(--primary);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;

  .highlight {
    color: var(--primary);
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .stat-icon {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &.primary {
    background: var(--primary);
    color: white;

    &:hover {
      background: #e67c00;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);

    &:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const LocationsSection = styled.section`
  padding: 80px 0;
  background: var(--bg-secondary);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

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
      color: var(--primary);
      font-weight: 600;
    }
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const LocationCard = styled.div`
  background: var(--bg-primary);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &.active {
    border-color: var(--primary);
    background: linear-gradient(135deg, rgba(255, 137, 6, 0.1) 0%, var(--bg-primary) 100%);
  }

  &.upcoming {
    opacity: 0.8;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary), #e67c00);
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  }

  .location-icon {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .location-address {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .location-contact {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      color: var(--text-secondary);

      i {
        color: var(--primary);
        width: 16px;
      }
    }
  }

  .location-status {
    margin-top: 15px;

    .status-badge {
      background: var(--primary);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  .location-website {
    margin-top: 15px;
    
    a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const CompaniesSection = styled.section`
  padding: 80px 0;
  background: var(--bg-primary);
`;

const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const CompanyCard = styled.div`
  background: var(--bg-secondary);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .company-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--primary);
  }

  .company-description {
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .company-website {
    a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactFormSection = styled.section`
  padding: 80px 0;
  background: var(--bg-secondary);
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FormLeft = styled.div`
  .form-header {
    margin-bottom: 40px;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 15px;
    }

    p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  .benefit-icon {
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary);
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .benefit-content {
    h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 5px;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.5;
    }
  }
`;

const FormCard = styled.div`
  background: var(--bg-primary);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  position: relative;

  input, select, textarea {
    width: 100%;
    padding: 15px;
    background: var(--bg-secondary);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }

  label {
    position: absolute;
    top: 15px;
    left: 15px;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  select:focus + label,
  select:not([value=""]) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 0.8rem;
    color: var(--primary);
    background: var(--bg-primary);
    padding: 0 5px;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: #e67c00;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const DirectContactSection = styled.section`
  padding: 80px 0;
  background: var(--bg-primary);
`;

const DirectContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const DirectContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background: var(--bg-secondary);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: var(--primary);
  }

  .contact-icon {
    background: rgba(255, 137, 6, 0.1);
    color: var(--primary);
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .contact-content {
    flex: 1;

    h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 5px;
    }

    span {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  }

  .contact-arrow {
    color: var(--primary);
    font-size: 1.2rem;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover .contact-arrow {
    opacity: 1;
    transform: translateX(5px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.service,
        message: formData.message
      });
      
      showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Get In Touch"
        description="Ready to transform your business? Contact GoWide for innovative digital solutions. Get free consultation and expert advice."
        keywords="contact, consultation, digital agency, business solutions, get quote, contact GoWide"
        url="https://gowide.in/contact"
      />
      <ContactPage>
      <ContactHero>
        <FloatingElements>
          <div className="floating-element">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="floating-element">
            <i className="fas fa-phone"></i>
          </div>
          <div className="floating-element">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="floating-element">
            <i className="fas fa-comments"></i>
          </div>
        </FloatingElements>

        <Container>
          <HeroContent>
            <Badge>
              <i className="fas fa-handshake"></i>
              Let's Connect
            </Badge>
            <HeroTitle>
              Ready to Transform Your <span className="highlight">Business?</span>
            </HeroTitle>
            <HeroSubtitle>
              From innovative technology solutions to creative branding strategies, we're here to help your business thrive and <span className="highlight">bring your vision to life</span>
            </HeroSubtitle>
          </HeroContent>

          <StatsGrid>
            <StatItem>
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </StatItem>
            <StatItem>
              <div className="stat-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects</span>
            </StatItem>
            <StatItem>
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </StatItem>
          </StatsGrid>

          <HeroActions>
            <HeroButton href="#contact-form" className="primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </HeroButton>
            <HeroButton href="tel:+917559988886" className="secondary">
              <i className="fas fa-phone"></i>
              Call Now
            </HeroButton>
          </HeroActions>
        </Container>
      </ContactHero>

      <LocationsSection>
        <Container>
          <SectionHeader>
            <Badge>
              <i className="fas fa-globe"></i>
              Global Presence
            </Badge>
            <h2>Our Locations</h2>
            <p>Find us across multiple locations <span className="highlight">worldwide</span></p>
          </SectionHeader>

          <LocationsGrid>
            <LocationCard className="active">
              <div className="location-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Head Office - GoWide</h3>
              <p className="location-address">
                KM XIII/292, WMO APS Building<br />
                PWD Road, Kalpetta<br />
                Wayanad, Kerala - 673121
              </p>
              <div className="location-contact">
                <span><i className="fas fa-phone"></i> +91 7559988886</span>
                <span><i className="fas fa-envelope"></i> contact@gowide.in</span>
              </div>
            </LocationCard>

            <LocationCard className="active">
              <div className="location-icon">
                <i className="fas fa-city"></i>
              </div>
              <h3>Kochi Branch</h3>
              <p className="location-address">
                60/39 Ground Floor<br />
                Karthika Apartment, Panampilly Nagar<br />
                Kochi - 682036
              </p>
              <div className="location-contact">
                <span><i className="fas fa-phone"></i> Coming Soon</span>
                <span><i className="fas fa-envelope"></i> contact@gowide.in</span>
              </div>
            </LocationCard>

            <LocationCard className="active">
              <div className="location-icon">
                <i className="fas fa-globe-asia"></i>
              </div>
              <h3>Dubai Office - Global Trade Allies LLC FZ</h3>
              <p className="location-address">
                Meydan Grandstand<br />
                6th Floor, Meydan Road, Nad Al Sheba<br />
                Dubai, UAE
              </p>
              <div className="location-contact">
                <span><i className="fas fa-envelope"></i> info@globaltradeallies.com</span>
              </div>
              <div className="location-website">
                <a href="https://globaltradeallies.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> globaltradeallies.com
                </a>
              </div>
            </LocationCard>

            <LocationCard className="upcoming">
              <div className="location-icon">
                <i className="fas fa-globe-europe"></i>
              </div>
              <h3>London Office</h3>
              <p className="location-address">
                Prime Business Location<br />
                Central London<br />
                United Kingdom
              </p>
              <div className="location-status">
                <span className="status-badge">Opening Q4 2025</span>
              </div>
            </LocationCard>
          </LocationsGrid>
        </Container>
      </LocationsSection>

      <CompaniesSection>
        <Container>
          <SectionHeader>
            <Badge>
              <i className="fas fa-network-wired"></i>
              Our Companies
            </Badge>
            <h2>Group of Companies</h2>
            <p>Diverse portfolio of <span className="highlight">innovative solutions</span></p>
          </SectionHeader>

          <CompaniesGrid>
            <CompanyCard>
              <div className="company-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>GoWide</h3>
              <p className="company-description">
                Technology solutions, branding, advertising, and digital marketing services to transform your business.
              </p>
              <div className="company-website">
                <a href="https://gowide.in" target="_blank" rel="noopener noreferrer">
                  gowide.in
                </a>
              </div>
            </CompanyCard>

            <CompanyCard>
              <div className="company-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3>Global Trade Allies LLC FZ</h3>
              <p className="company-description">
                International trading company based in Dubai, facilitating global business connections and trade opportunities.
              </p>
              <div className="company-website">
                <a href="https://globaltradeallies.com" target="_blank" rel="noopener noreferrer">
                  globaltradeallies.com
                </a>
              </div>
            </CompanyCard>

            <CompanyCard>
              <div className="company-icon">
                <i className="fas fa-chair"></i>
              </div>
              <h3>Ergo-Edge Experience</h3>
              <p className="company-description">
                Premium ergonomic products designed to enhance workplace comfort and productivity for modern professionals.
              </p>
              <div className="company-website">
                <a href="https://ergo-edge.com" target="_blank" rel="noopener noreferrer">
                  ergo-edge.com
                </a>
              </div>
            </CompanyCard>
          </CompaniesGrid>
        </Container>
      </CompaniesSection>

      <ContactFormSection id="contact-form">
        <Container>
          <FormWrapper>
            <FormLeft>
              <div className="form-header">
                <Badge>
                  <i className="fas fa-paper-plane"></i>
                  Get In Touch
                </Badge>
                <h2>Send Us a Message</h2>
                <p>Tell us about your project and we'll get back to you within 24 hours</p>
              </div>

              <BenefitsList>
                <BenefitItem>
                  <div className="benefit-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Fast Response</h4>
                    <p>We respond to all inquiries within 24 hours</p>
                  </div>
                </BenefitItem>

                <BenefitItem>
                  <div className="benefit-icon">
                    <i className="fas fa-shield-check"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Secure & Private</h4>
                    <p>Your information is completely confidential</p>
                  </div>
                </BenefitItem>

                <BenefitItem>
                  <div className="benefit-icon">
                    <i className="fas fa-gift"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>Free Consultation</h4>
                    <p>No cost initial discussion about your project</p>
                  </div>
                </BenefitItem>
              </BenefitsList>
            </FormLeft>

            <FormCard>
              <ContactForm onSubmit={handleSubmit}>
                <InputRow>
                  <InputGroup>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label>First Name</label>
                  </InputGroup>
                  <InputGroup>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label>Last Name</label>
                  </InputGroup>
                </InputRow>

                <InputGroup>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                  />
                  <label>Email Address</label>
                </InputGroup>

                <InputGroup>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="technology">Technology Development</option>
                    <option value="branding">Branding & Design</option>
                    <option value="advertising">Advertising & Campaigns</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="products">Product Solutions</option>
                    <option value="consultation">Business Consultation</option>
                    <option value="other">Other Services</option>
                  </select>
                  <label>Service Required</label>
                </InputGroup>

                <InputGroup>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                  />
                  <label>Tell us about your project</label>
                </InputGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </SubmitButton>
              </ContactForm>
            </FormCard>
          </FormWrapper>
        </Container>
      </ContactFormSection>

      <DirectContactSection>
        <Container>
          <SectionHeader>
            <h2>Prefer Direct Contact?</h2>
            <p>Choose the method that works best for you</p>
          </SectionHeader>

          <DirectContactGrid>
            <DirectContactCard href="mailto:contact@gowide.in">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h4>Email Us</h4>
                <span>contact@gowide.in</span>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </DirectContactCard>

            <DirectContactCard href="tel:+917559988886">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <h4>Call Us</h4>
                <span>+91 7559988886</span>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </DirectContactCard>

            <DirectContactCard href="https://calendly.com/gowide" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="contact-content">
                <h4>Schedule Call</h4>
                <span>Book a consultation</span>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </DirectContactCard>
          </DirectContactGrid>
        </Container>
      </DirectContactSection>
    </ContactPage>
    </>
  );
};

export default Contact;