import React from 'react';
import styled from 'styled-components';
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
              <span className="go">Go</span><span className="wide">Wide</span>
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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column services-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#branding">Branding</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#advertising">Advertising</a></li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h4>Company</h4>
            <ul>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-column products-links">
            <h4>Products</h4>
            <ul>
              <li><a href="/rendre">Rendre</a></li>
              <li><a href="/upflyover">UpFlyOver</a></li>
              <li><a href="/gymestry">Gymestry</a></li>
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
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/refund">Refund Policy</a>
              <a href="/cookie">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;