// pages/Index.tsx
import { lazy, Suspense, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // Eager load
import Footer from '../components/Footer';
import LazyLoadWrapper from '../components/LazyLoadWrapper';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy-loaded sections
const About = lazy(() => import('../components/About'));
const Experience = lazy(() => import('../components/Experience'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));

const Index = () => {
  useEffect(() => {
    // Fog animation elements
    const fogElements = 2;
    for (let i = 0; i < fogElements; i++) {
      const fogElement = document.createElement('div');
      fogElement.className = 'fog';
      fogElement.style.animationDelay = `${i * 30}s`;
      document.body.appendChild(fogElement);
    }

    return () => {
      const fogs = document.querySelectorAll('.fog');
      fogs.forEach(fog => document.body.removeChild(fog));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero /> {/* Eager load */}

      <Suspense fallback={<Skeleton />}>
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
