import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import { MainFooter } from '../styles/GlobalStyles';

// Styled components are now imported from GlobalStyles

const Footer = () => {
  return (
    <MainFooter>
      <Newsletter />
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-column company-info">
            <div className="footer-logo">
              <img src="/gowide-logo.png" alt="GoWide Logo" />
            </div>
            <p>
              We are a creative agency focused on growing brands through 
              innovative digital solutions and memorable experiences.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/people/Gowide/100086573702193/" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/79442116/admin/dashboard/" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/go.wide/?next=%2F" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-column quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column services-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/branding">Branding</Link></li>
              <li><Link to="/advertising">Advertising</Link></li>
              <li><Link to="/marketing">Marketing</Link></li>
              <li><Link to="/technology">Technology</Link></li>
            </ul>
          </div>

          <div className="footer-column products-links">
            <h4>Products</h4>
            <ul>
              <li><Link to="/rendre">Rendre</Link></li>
              <li><Link to="/upflyover">UpFlyOver</Link></li>
              <li><Link to="/gymestry">Gymestry</Link></li>
            </ul>
          </div>


        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; 2025 Gowide Business Services Pvt Ltd. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <div className="legal-links">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/cookie">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;