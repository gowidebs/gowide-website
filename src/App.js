import React, { useState, useEffect } from 'react';
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
import Home from './pages/Home';
import About from './pages/About';
import Branding from './pages/Branding';
import Advertising from './pages/Advertising';
import Marketing from './pages/Marketing';
import Technology from './pages/Technology';
import Rendre from './pages/Rendre';
import UpFlyOver from './pages/UpFlyOver';
import Gymestry from './pages/Gymestry';

import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';

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
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
          {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Header />
              <main>
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