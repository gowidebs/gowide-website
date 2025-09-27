import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Newsletter from './Newsletter';
import LanguageSwitcher from './LanguageSwitcher';
import { MainFooter } from '../styles/GlobalStyles';

// Styled components are now imported from GlobalStyles

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <MainFooter>
      <Newsletter />
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-column company-info">
            <div className="footer-logo">
              <Link to="/" className="logo-text">
                <span className="go">Go</span><span className="wide">Wide</span>
              </Link>
            </div>
            <p>
              {t('footer.description')}
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
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/team">{t('nav.ourTeams')}</Link></li>
              <li><Link to="/blog">{t('nav.blog')}</Link></li>
              <li><Link to="/case-studies">{t('nav.caseStudies')}</Link></li>
              <li><Link to="/careers">{t('nav.careers')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-column services-links">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><Link to="/branding">{t('nav.branding')}</Link></li>
              <li><Link to="/advertising">{t('nav.advertising')}</Link></li>
              <li><Link to="/marketing">{t('nav.marketing')}</Link></li>
              <li><Link to="/technology">{t('nav.technology')}</Link></li>
            </ul>
          </div>

          <div className="footer-column products-links">
            <h4>{t('footer.products')}</h4>
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
            <p>{t('footer.copyright')}</p>
          </div>
          <div className="footer-right">
            <div className="legal-links">
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;