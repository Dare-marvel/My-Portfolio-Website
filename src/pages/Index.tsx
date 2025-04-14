
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Create fog effect elements
    const fogElements = 2;
    for (let i = 0; i < fogElements; i++) {
      const fogElement = document.createElement('div');
      fogElement.className = 'fog';
      fogElement.style.animationDelay = `${i * 30}s`;
      document.body.appendChild(fogElement);
    }
    
    // Clean up fog elements when component unmounts
    return () => {
      const fogs = document.querySelectorAll('.fog');
      fogs.forEach(fog => {
        document.body.removeChild(fog);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
