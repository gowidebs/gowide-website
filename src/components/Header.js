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
  transition: all 0.3s ease;

  body.light-theme & {
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
  
  .logo-text {
    text-decoration: none;
    display: inline-block;
  }
  
  .go {
    color: var(--primary-orange);
    animation: goColorShift 4s ease-in-out infinite;
    transition: color 0.3s ease;
  }
  
  .wide {
    color: #ffffff;
    animation: wideColorShift 4s ease-in-out infinite;
    transition: color 0.3s ease;
  }

  body.light-theme & .go {
    animation: goColorShiftLight 4s ease-in-out infinite;
  }

  body.light-theme & .wide {
    animation: wideColorShiftLight 4s ease-in-out infinite;
  }

  /* Dark mode animations */
  @keyframes goColorShift {
    0%, 100% { 
      color: var(--primary-orange);
      text-shadow: 0 0 10px rgba(255, 137, 6, 0.5);
    }
    50% { 
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }

  @keyframes wideColorShift {
    0%, 100% { 
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
    50% { 
      color: var(--primary-orange);
      text-shadow: 0 0 10px rgba(255, 137, 6, 0.5);
    }
  }

  /* Light mode animations */
  @keyframes goColorShiftLight {
    0%, 100% { 
      color: var(--primary-orange);
      text-shadow: 0 0 10px rgba(255, 137, 6, 0.3);
    }
    50% { 
      color: #000000;
      text-shadow: none;
    }
  }

  @keyframes wideColorShiftLight {
    0%, 100% { 
      color: #000000;
      text-shadow: none;
    }
    50% { 
      color: var(--primary-orange);
      text-shadow: 0 0 10px rgba(255, 137, 6, 0.3);
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  .dropdown {
    position: relative;
    
    &:hover .dropdown-content {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg-primary);
    border: 1px solid rgba(255, 137, 6, 0.2);
    min-width: 200px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
    
    a {
      display: block;
      padding: 0.8rem 1.5rem;
      color: var(--text-primary);
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(255, 137, 6, 0.1);
        color: var(--primary-orange);
      }
    }
  }

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
    
    .dropdown-content {
      position: static;
      opacity: 1;
      visibility: visible;
      transform: none;
      box-shadow: none;
      background: transparent;
      padding: 0;
      margin-left: 1rem;
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
      background: var(--text-primary);
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
          <Link to="/" className="logo-text">
            <span className="go">Go</span><span className="wide">Wide</span>
          </Link>
        </Logo>
        
        <NavLinks className={isMenuOpen ? 'active' : ''}>
          <li><NavLink as={Link} to="/">Home</NavLink></li>
          <li><NavLink as={Link} to="/about">About</NavLink></li>
          <li className="dropdown">
            <NavLink>Services</NavLink>
            <div className="dropdown-content">
              <NavLink as={Link} to="/branding">Branding</NavLink>
              <NavLink as={Link} to="/advertising">Advertising</NavLink>
              <NavLink as={Link} to="/marketing">Marketing</NavLink>
              <NavLink as={Link} to="/technology">Technology</NavLink>
            </div>
          </li>
          <li className="dropdown">
            <NavLink>Products</NavLink>
            <div className="dropdown-content">
              <NavLink as={Link} to="/rendre">Rendre</NavLink>
              <NavLink as={Link} to="/upflyover">UpFlyOver</NavLink>
              <NavLink as={Link} to="/gymestry">Gymestry</NavLink>
            </div>
          </li>
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