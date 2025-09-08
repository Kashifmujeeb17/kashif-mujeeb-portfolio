import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then fade out loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Page Loader */}
      {isLoading && (
        <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
          <div className="text-center">
            <div className="loader-spinner mb-4"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Kashif Mujeeb</h2>
            <p className="text-blue-100">Loading Portfolio...</p>
          </div>
        </div>
      )}
      
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;