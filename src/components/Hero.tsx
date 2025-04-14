import React, { useEffect, useRef } from 'react';
import { Anchor, Compass } from 'lucide-react';
import shipImage from '../assets/black-pearl.png'; // Adjust the path as needed
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import starryNightConfig from './starryNightConfig';

const Hero = () => {
  const compassRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize particles
    loadFull(tsParticles).then(() => {
      tsParticles.load({
        id: "starry-night-particles",
        options: starryNightConfig,
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!compassRef.current) return;

      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate rotation based on mouse position
      const rotateX = (clientY / windowHeight - 0.5) * 20;
      const rotateY = (clientX / windowWidth - 0.5) * -20;

      compassRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-15 pb-12 overflow-hidden">
      {/* Starry Night Background */}
      <div className="absolute inset-0 z-0">
        <div id="starry-night-particles" ref={particlesContainerRef} className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pirate-ocean-deep/50"></div>
      </div>

      {/* Fog Animation (you can keep or remove this based on preference) */}
      {/* <div className="fog"></div>
      <div className="fog" style={{ animationDelay: '20s' }}></div> */}

      {/* Ship Silhouette */}
      <div className="absolute bottom-0 w-full h-2/5 bg-contain bg-bottom bg-no-repeat z-10 opacity-60 animate-wave"
        style={{ backgroundImage: `url(${shipImage})` }}>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20 px-4 flex flex-col items-center">
        <div ref={compassRef} className="perspective-900 mb-8">
          {/* <Compass className="h-24 w-24 text-pirate-gold animate-spin-slow" /> */}
          <img
            src="../src/assets/rudder.png"
            alt="Compass"
            className="h-24 w-24 text-pirate-gold animate-spin-slow"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-pirate text-pirate-parchment text-center mb-5 drop-shadow-md">
          Ahoy, Brave Adventurer!
        </h1>

        <p className="text-xl md:text-xl font-scroll text-pirate-parchment-dark text-center max-w-3xl mb-12 drop-shadow-sm">
          Step aboard me portfolio, where code and adventure collide. Hunt for treasures and see what this pirate coder brings to yer crew!
        </p>

        {/* <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="pirate-button group"
        >
          <span>Set Sail on My Journey</span>
          <Anchor className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pirate-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button> */}
      </div>

      {/* Wave animations */}
      <div className="absolute bottom-0 left-0 w-full z-20 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
          <path fill="#0c4160" fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
          <path fill="#1a6ca5" fillOpacity="0.5" d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,181.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;