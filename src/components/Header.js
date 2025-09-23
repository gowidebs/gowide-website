import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(15, 14, 23, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 137, 6, 0.2);
  z-index: 1000;
  padding: 1rem 2rem;

  body.light-theme & {
    background: rgba(255, 255, 255, 0.95);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  
  .go {
    color: var(--primary-orange);
  }
  
  .wide {
    color: var(--text-primary);
  }

  body.light-theme & .wide {
    color: var(--bg-primary);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(15, 14, 23, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 5rem 1.5rem 1.5rem;
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 999;

    &.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }

    body.light-theme & {
      background: rgba(255, 255, 255, 0.95);
    }
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary-orange);
    text-shadow: 0 0 5px rgba(255, 137, 6, 0.3);
  }

  body.light-theme & {
    color: var(--bg-primary);
  }

  body.light-theme &:hover {
    color: var(--primary-orange);
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 80px;
  height: 80px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  .moon, .sun {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  .moon {
    background: radial-gradient(circle at 30% 30%, #454545, #fffffe);
    box-shadow: 0 0 30px rgba(255, 137, 6, 0.3);
    opacity: 1;
    z-index: 1;
  }

  .moon-crater {
    position: absolute;
    background: rgba(200, 200, 200, 0.3);
    border-radius: 50%;
    z-index: 2;
  }

  .crater-1 { width: 12px; height: 12px; top: 25%; left: 40%; }
  .crater-2 { width: 8px; height: 8px; top: 60%; left: 30%; }
  .crater-3 { width: 6px; height: 6px; top: 45%; left: 65%; }

  .sun {
    background: radial-gradient(circle, #ffeb3b, #ff8906);
    box-shadow: 0 0 50px rgba(255, 235, 59, 0.8);
    opacity: 0;
    z-index: 1;
  }

  body.light-theme & .moon {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  body.light-theme & .sun {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    .moon, .sun {
      width: 45px;
      height: 45px;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    transform-origin: center;

    body.light-theme & {
      background: var(--bg-primary);
    }
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <span className="go">Go</span><span className="wide">Wide</span>
        </Logo>
        
        <NavLinks className={isMenuOpen ? 'active' : ''}>
          <li><NavLink as={Link} to="/">Home</NavLink></li>
          <li><NavLink as={Link} to="/services">Services</NavLink></li>
          <li><NavLink as={Link} to="/products">Products</NavLink></li>
          <li><NavLink as={Link} to="/team">Team</NavLink></li>
          <li><NavLink as={Link} to="/contact">Contact</NavLink></li>
        </NavLinks>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="moon">
              <div className="moon-crater crater-1"></div>
              <div className="moon-crater crater-2"></div>
              <div className="moon-crater crater-3"></div>
            </div>
            <div className="sun"></div>
          </ThemeToggle>
          
          <Hamburger className={isMenuOpen ? 'active' : ''} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </div>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;