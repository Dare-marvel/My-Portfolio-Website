import { lazy, Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 
import Footer from '../components/Footer';
import LazyLoadWrapper from '../components/LazyLoadWrapper';

// Lazy-loaded components
const About = lazy(() => import('../components/About'));
const Experience = lazy(() => import('../components/Experience'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));

const Index = () => {
  useEffect(() => {
    const fogElements = 2;
    for (let i = 0; i < fogElements; i++) {
      const fogElement = document.createElement('div');
      fogElement.className = 'fog';
      fogElement.style.animationDelay = `${i * 30}s`;
      document.body.appendChild(fogElement);
    }

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
      <Hero /> {/* Eager-loaded */}

      <Suspense fallback={<div className="text-center py-10">Loading section...</div>}>
        <LazyLoadWrapper><About /></LazyLoadWrapper>
        <LazyLoadWrapper><Experience /></LazyLoadWrapper>
        <LazyLoadWrapper><Skills /></LazyLoadWrapper>
        <LazyLoadWrapper><Projects /></LazyLoadWrapper>
        <LazyLoadWrapper><Contact /></LazyLoadWrapper>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;
