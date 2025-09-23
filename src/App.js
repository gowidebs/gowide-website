import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Branding from './pages/Branding';
import Advertising from './pages/Advertising';
import Marketing from './pages/Marketing';
import Technology from './pages/Technology';
import Rendre from './pages/Rendre';
import UpFlyOver from './pages/UpFlyOver';
import Gymestry from './pages/Gymestry';
import GoWideCRM from './pages/GoWideCRM';
import HotelPro from './pages/HotelPro';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyles />
        <div className="App">
          {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/branding" element={<Branding />} />
                  <Route path="/advertising" element={<Advertising />} />
                  <Route path="/marketing" element={<Marketing />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/rendre" element={<Rendre />} />
                  <Route path="/upflyover" element={<UpFlyOver />} />
                  <Route path="/gymestry" element={<Gymestry />} />
                  <Route path="/gowidecrm" element={<GoWideCRM />} />
                  <Route path="/hotelpro" element={<HotelPro />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Newsletter />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;