import React, { useEffect, useRef } from 'react';
import { Anchor, Compass } from 'lucide-react';
import shipImage from '../assets/black-pearl.png'; // Adjust the path as needed
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import starryNightConfig from './starryNightConfig';
import rudder from '../assets/rudder.png'
import waveSrc from "../assets/wave.svg";

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
            src={rudder}
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
      </div>

      {/* Wave animations */}
      <div className="absolute bottom-0 left-0 w-full z-20 opacity-40">
        <img src={waveSrc} alt="Wave Animation" />
      </div>
      
    </section>
  );
};

export default Hero;