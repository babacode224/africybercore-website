import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import HowWeDoIt from './components/HowWeDoIt';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Products from './components/Products';
// import Blog from './components/Blog';
import Consulting from './components/Consulting';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AnimatedSection from './components/AnimatedSection';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import DevToolsPanel from './components/DevToolsPanel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen scroll-smooth ${darkMode ? 'dark' : ''}`}>
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <AnimatedSection>
          <FourPillars />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <HowWeDoIt />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <WhatWeDo />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <Products />
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          {/* <Blog /> */}
        </AnimatedSection>
        <AnimatedSection delay={0.7}>
          <Consulting />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
      <DevToolsPanel />
    </div>
  );
}

export default App;
