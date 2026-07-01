import { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import HowWeDoIt from './components/HowWeDoIt';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Products from './components/Products';
import Consulting from './components/Consulting';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AnimatedSection from './components/AnimatedSection';
import RateCardPage from './pages/RateCardPage';
import HomeDesign from './pages/HomeDesign';
import AboutDesign from './pages/AboutDesign';
import ProductsDesign from './pages/ProductsDesign';
import ServicesDesign from './pages/ServicesDesign';
import ConsultationDesign from './pages/ConsultationDesign';
import ContactDesign from './pages/ContactDesign';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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

  const HomePage = () => (
    <>
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
    </>
  );

  return (
    <div className={`min-h-screen scroll-smooth ${darkMode ? 'dark' : ''}`}>
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Switch>
          <Route path="/" component={HomeDesign} />
          <Route path="/about" component={AboutDesign} />
          <Route path="/products" component={ProductsDesign} />
          <Route path="/services" component={ServicesDesign} />
          <Route path="/consulting" component={ConsultationDesign} />
          <Route path="/contact" component={ContactDesign} />
          <Route path="/old" component={HomePage} />
          <Route path="/rate-cards" component={RateCardPage} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
