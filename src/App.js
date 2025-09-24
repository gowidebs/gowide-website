import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles } from './styles/GlobalStyles';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';

import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Notification from './components/Notification';
// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Branding = React.lazy(() => import('./pages/Branding'));
const Advertising = React.lazy(() => import('./pages/Advertising'));
const Marketing = React.lazy(() => import('./pages/Marketing'));
const Technology = React.lazy(() => import('./pages/Technology'));
const Rendre = React.lazy(() => import('./pages/Rendre'));
const UpFlyOver = React.lazy(() => import('./pages/UpFlyOver'));
const Gymestry = React.lazy(() => import('./pages/Gymestry'));
const Team = React.lazy(() => import('./pages/Team'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = React.lazy(() => import('./pages/CaseStudyDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
        <GlobalStyles />
        <div className="App">
          <div className="stars-container">
            <div className="stars">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="star"></div>
              ))}
            </div>
          </div>
          {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Header />
              <main>
                <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--primary-orange)'}}><i className="fas fa-spinner fa-spin fa-2x"></i></div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/branding" element={<Branding />} />
                    <Route path="/advertising" element={<Advertising />} />
                    <Route path="/marketing" element={<Marketing />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/rendre" element={<Rendre />} />
                    <Route path="/upflyover" element={<UpFlyOver />} />
                    <Route path="/gymestry" element={<Gymestry />} />

                    <Route path="/team" element={<Team />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <ScrollToTop />
              <Notification />
              <SpeedInsights />
            </>
          )}
        </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;