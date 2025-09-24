import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Keyframe animations
const twinkle = keyframes`
  0%, 100% { 
    opacity: 0.4;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.2);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const logoColorChangeDark = keyframes`
  0% { color: #ff8906; }
  100% { color: #fffffe; }
`;

const logoColorChangeLight = keyframes`
  0% { color: #ff8906; }
  100% { color: #0f0e17; }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-orange: #ff8906;
    --secondary-orange: #ff9a1a;
    --tertiary-orange: #ffb347;
    --text-primary: #fffffe;
    --text-secondary: #a7a9be;
    --bg-primary: #0f0e17;
    --bg-secondary: #1a1825;
    --bg-light: #fffffe;
    --card-bg: #1a1825;
  }

  body.light-theme {
    --text-primary: #0f0e17;
    --text-secondary: #666666;
    --bg-primary: #fffffe;
    --bg-secondary: #f8f9fa;
    --card-bg: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Catamaran', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
    transition: all 0.3s ease;
  }

  .highlight {
    color: var(--primary-orange);
  }

  /* Stars Background */
  .stars-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: var(--bg-primary);
    transition: all 0.3s ease;
  }

  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 6px #ffffff, 0 0 12px #ffffff;
    animation: ${twinkle} 2s infinite;
  }

  .star:nth-child(1) { top: 15%; left: 25%; animation-delay: 0s; }
  .star:nth-child(2) { top: 85%; left: 75%; animation-delay: 0.3s; }
  .star:nth-child(3) { top: 35%; left: 65%; animation-delay: 0.6s; }
  .star:nth-child(4) { top: 65%; left: 25%; animation-delay: 0.9s; }
  .star:nth-child(5) { top: 5%; left: 75%; animation-delay: 1.2s; }
  .star:nth-child(6) { top: 95%; left: 35%; animation-delay: 1.5s; }
  .star:nth-child(7) { top: 25%; left: 5%; animation-delay: 1.8s; }
  .star:nth-child(8) { top: 75%; left: 95%; animation-delay: 0.2s; }
  .star:nth-child(9) { top: 45%; left: 45%; animation-delay: 0.7s; }
  .star:nth-child(10) { top: 10%; left: 90%; animation-delay: 1.1s; }
  .star:nth-child(11) { top: 55%; left: 15%; animation-delay: 0.4s; }
  .star:nth-child(12) { top: 30%; left: 85%; animation-delay: 1.4s; }
  .star:nth-child(13) { top: 80%; left: 55%; animation-delay: 0.8s; }
  .star:nth-child(14) { top: 20%; left: 50%; animation-delay: 1.6s; }
  .star:nth-child(15) { top: 70%; left: 10%; animation-delay: 0.1s; }
  .star:nth-child(16) { top: 40%; left: 30%; animation-delay: 1.3s; }
  .star:nth-child(17) { top: 90%; left: 20%; animation-delay: 0.5s; }
  .star:nth-child(18) { top: 60%; left: 80%; animation-delay: 1.7s; }
  .star:nth-child(19) { top: 12%; left: 40%; animation-delay: 0.9s; }
  .star:nth-child(20) { top: 88%; left: 60%; animation-delay: 1.0s; }

  body.light-theme .stars-container {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  /* Animated Heading */
  .animated-heading {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #ff8906, #fffffe, #ff8906);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 3s ease-in-out infinite;
    position: relative;
  }

  body.light-theme .animated-heading {
    background: linear-gradient(45deg, #ff8906, #0f0e17, #ff8906);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 3s ease-in-out infinite;
  }

  /* Section Styles */
  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: var(--text-primary);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Utility Classes */
  .mb-1 { margin-bottom: 1rem; }
  .mb-2 { margin-bottom: 2rem; }
  .mb-3 { margin-bottom: 3rem; }
  .mb-4 { margin-bottom: 4rem; }

  .p-1 { padding: 1rem; }
  .p-2 { padding: 2rem; }
  .p-3 { padding: 2.5rem; }

  .text-center { text-align: center; }
  .flex { display: flex; }
  .grid { display: grid; }
  .relative { position: relative; }
  .absolute { position: absolute; }

  .transition { transition: all 0.3s ease; }
  .transition-slow { transition: all 0.4s ease; }

  /* Common hover effects */
  .hover-lift:hover {
    transform: translateY(-8px);
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }

  .hover-glow:hover {
    box-shadow: 0 0 20px rgba(255, 137, 6, 0.3);
  }

  /* Common gradients */
  .gradient-orange {
    background: linear-gradient(135deg, #ff8906, #ff9a1a);
  }

  .gradient-text {
    background: linear-gradient(45deg, #ff8906, #ff9a1a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2.5rem;
  }
  
  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 0 3rem;
  }
  
  @media (min-width: 1920px) {
    max-width: 1800px;
    padding: 0 4rem;
  }
  
  @media (min-width: 2560px) {
    max-width: 2200px;
    padding: 0 6rem;
  }
`;

export const Button = styled.button`
  background: ${props => props.primary ? 'var(--primary-orange)' : 'transparent'};
  color: ${props => props.primary ? 'var(--text-primary)' : 'var(--primary-orange)'};
  border: ${props => props.primary ? 'none' : '2px solid var(--primary-orange)'};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  box-shadow: ${props => props.primary ? '0 4px 20px rgba(255, 137, 6, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.primary ? 'var(--secondary-orange)' : 'rgba(255, 137, 6, 0.1)'};
    transform: translateY(-3px);
    box-shadow: ${props => props.primary ? '0 8px 30px rgba(255, 137, 6, 0.4)' : '0 5px 15px rgba(255, 137, 6, 0.4)'};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ServiceBox = styled.div`
  background: transparent;
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 137, 6, 0.2);
  position: relative;
  overflow: hidden;
  min-height: 280px;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 137, 6, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 137, 6, 0.2);
    border-color: rgba(255, 137, 6, 0.5);
  }

  body.light-theme & {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const BoxIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-orange);
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${ServiceBox}:hover & {
    transform: scale(1.1) rotate(5deg);
    text-shadow: 0 0 20px rgba(255, 137, 6, 0.5);
  }
`;

export const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .floating-card {
    position: absolute;
    background: rgba(255, 137, 6, 0.1);
    border: 1px solid rgba(255, 137, 6, 0.3);
    border-radius: 15px;
    padding: 1rem;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--primary-orange);
    font-weight: 600;
    font-size: 0.9rem;
    animation: ${float} 6s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(255, 137, 6, 0.2);

    i {
      font-size: 1.2rem;
    }
  }

  .card-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .card-2 {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
  }

  .card-3 {
    bottom: 30%;
    left: 20%;
    animation-delay: 4s;
  }
`;

export const SplitSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 80vh;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: transparent;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 1.5rem;
  }
`;

export const ContentSide = styled.div`
  padding: 1rem;

  .highlight-text {
    color: var(--primary-orange);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin: 1rem 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .main-text {
    color: var(--text-primary);
    font-size: 1.1rem;
    margin: 1rem 0;
    line-height: 1.6;
    opacity: 0.8;
  }

  .feature-list {
    margin: 2rem 0;

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin: 1rem 0;
      color: var(--text-primary);
      font-weight: 500;

      body.light-theme & {
        color: var(--bg-primary);
      }

      i {
        color: var(--primary-orange);
        font-size: 1.1rem;
        width: 20px;
        text-align: center;
      }
    }
  }

  .cta-buttons-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const ImageSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1920px) {
    max-width: 1800px;
    gap: 3rem;
  }
  
  @media (min-width: 2560px) {
    max-width: 2200px;
    gap: 4rem;
  }
`;

export const PricingAmount = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 1rem 0;

  .currency {
    font-size: 1.2rem;
    color: var(--primary-orange);
    font-weight: 600;
  }

  .price {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-orange);
    margin: 0 0.2rem;
  }

  .period {
    font-size: 1rem;
    color: var(--text-primary);
    opacity: 0.8;

    body.light-theme & {
      color: var(--bg-primary);
    }
  }

  .custom-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-orange);
  }
`;

export const HomeServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 1rem 0;

  li {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    color: var(--text-primary);
    font-size: 0.9rem;
    gap: 0.5rem;

    body.light-theme & {
      color: var(--bg-primary);
    }

    i {
      color: var(--primary-orange);
      font-size: 0.8rem;
      width: 16px;
      text-align: center;
    }
  }
`;

export const PricingCta = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

export const FeaturedPlan = styled.div`
  position: relative;
  border-color: var(--primary-orange) !important;
  background: rgba(255, 137, 6, 0.05) !important;
  transform: scale(1.05);

  &::before {
    content: 'Most Popular';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
    color: var(--text-primary);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
  }

  @media (max-width: 768px) {
    transform: none;

    &:hover {
      transform: translateY(-8px);
    }
  }
`;

export const ContactBtn = styled(Button)`
  &.primary {
    background: var(--primary-orange);
    color: var(--text-primary);
  }

  &.secondary {
    background: transparent;
    color: var(--primary-orange);
    border: 2px solid var(--primary-orange);
  }

  &.primary:hover {
    background: var(--secondary-orange);
  }

  &.secondary:hover {
    background: var(--primary-orange);
    color: var(--text-primary);
  }
`;

export const NewsletterSection = styled.div`
  background: transparent;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 137, 6, 0.2);

  body.light-theme & {
    background: rgba(255, 137, 6, 0.1);
  }

  h3 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-primary);
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .email-input-group {
    flex: 1;

    input {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid rgba(255, 137, 6, 0.3);
      border-radius: 8px;
      background: transparent;
      color: var(--text-primary);
      font-family: inherit;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--primary-orange);
        box-shadow: 0 0 10px rgba(255, 137, 6, 0.2);
      }

      &::placeholder {
        color: var(--text-primary);
        opacity: 0.5;
      }

      body.light-theme & {
        background: rgba(255, 255, 255, 0.8);
        color: var(--bg-primary);

        &::placeholder {
          color: var(--bg-primary);
          opacity: 0.5;
        }
      }
    }
  }

  .subscribe-btn {
    background: var(--primary-orange);
    color: var(--text-primary);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      background: var(--secondary-orange);
      transform: translateY(-2px);
    }
  }
`;

export const MainFooter = styled.footer`
  background: transparent;
  color: var(--text-primary);
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(255, 137, 6, 0.2);

  body.light-theme & {
    color: var(--bg-primary);
  }

  .footer-content {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 480px) {
      padding: 0 1rem;
    }
    
    @media (min-width: 1440px) {
      max-width: 1400px;
      padding: 0 3rem;
    }
    
    @media (min-width: 1920px) {
      max-width: 1800px;
      padding: 0 4rem;
    }
    
    @media (min-width: 2560px) {
      max-width: 2200px;
      padding: 0 6rem;
    }

    .footer-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      
      @media (min-width: 1920px) {
        gap: 3rem;
      }
    }
  }

  .footer-column {
    h4 {
      color: var(--primary-orange);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      
      li {
        margin-bottom: 0.5rem;
        
        a {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s;
          
          &:hover {
            color: var(--primary-orange);
          }
        }
      }
    }

    p {
      color: var(--text-primary);
      opacity: 0.8;
      line-height: 1.6;
    }
  }

  .company-info {
    .footer-logo {
      margin-bottom: 1rem;
      
      img {
        height: 60px;
        width: auto;
        transition: all 0.3s ease;
        
        &:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 480px) {
          height: 50px;
        }
      }
      
      .go {
        color: var(--primary-orange);
      }
      
      .wide {
        color: var(--text-primary);
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      
      @media (max-width: 480px) {
        justify-content: center;
      }

      a {
        width: 40px;
        height: 40px;
        background: rgba(255, 137, 6, 0.1);
        border: 1px solid rgba(255, 137, 6, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-orange);
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          background: var(--primary-orange);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 137, 6, 0.2);
    margin-top: 2rem;
    padding-top: 2rem;
    text-align: center;

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 2rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
        padding: 0 1rem;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
      
      @media (min-width: 1440px) {
        max-width: 1400px;
        padding: 0 3rem;
      }
      
      @media (min-width: 1920px) {
        max-width: 1800px;
        padding: 0 4rem;
      }
      
      @media (min-width: 2560px) {
        max-width: 2200px;
        padding: 0 6rem;
      }
    }

    .copyright p {
      color: var(--text-primary);
      opacity: 0.8;
    }

    .footer-right {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .legal-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;

      @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
      }

      a {
        color: var(--text-primary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s;

        &:hover {
          color: var(--primary-orange);
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 137, 6, 0.2);
  border-top: 2px solid var(--primary-orange);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const NotificationSuccess = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 137, 6, 0.9);
  border: 1px solid rgba(255, 137, 6, 0.5);
  color: var(--text-primary);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 10001;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  animation: slideInRight 0.3s ease;
  max-width: 400px;

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  i {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    font-weight: 500;
    line-height: 1.4;
  }

  button {
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 50%;
    transition: background 0.3s;
    flex-shrink: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;

// Export keyframes for use in components
export { twinkle, float, gradientShift, logoColorChangeDark, logoColorChangeLight };