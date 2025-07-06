import { useEffect, useRef, useState } from 'react';
import shipImage from '../assets/black-pearl.png';
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import starryNightConfig from './starryNightConfig';
import rudder from '../assets/rudder.png';
import waveSrc from "../assets/wave.svg";
import pirateMusic from "../assets/Sound/pirate_music.mp3";

const Hero = () => {
  const compassRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const rudderRef = useRef<HTMLImageElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // For rudder dragging
  const isDragging = useRef(false);
  const startAngle = useRef(0);
  const currentAngle = useRef(0);
  const center = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles
    loadFull(tsParticles).then(() => {
      tsParticles.load({
        id: "starry-night-particles",
        options: starryNightConfig,
      });
    });

    // Initialize audio
    audioRef.current = new Audio(pirateMusic);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const rudderElement = rudderRef.current;
    if (!rudderElement) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (!rudderElement) return;
      
      const rect = rudderElement.getBoundingClientRect();
      center.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      
      startAngle.current = Math.atan2(
        e.clientY - center.current.y,
        e.clientX - center.current.x
      );
      
      isDragging.current = true;
      document.body.style.userSelect = 'none';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !rudderElement) return;
      
      const angle = Math.atan2(
        e.clientY - center.current.y,
        e.clientX - center.current.x
      );
      
      currentAngle.current = angle - startAngle.current;
      rudderElement.style.transform = `rotate(${currentAngle.current}rad)`;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = '';
    };

    rudderElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      rudderElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-15 pb-12 overflow-hidden">
      {/* Starry Night Background */}
      <div className="absolute inset-0 z-0">
        <div id="starry-night-particles" ref={particlesContainerRef} className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pirate-ocean-deep/50"></div>
      </div>

      {/* Ship Silhouette */}
      <div 
        ref={shipRef}
        className="absolute bottom-0 w-full h-2/5 bg-contain bg-bottom bg-no-repeat z-10 opacity-60 animate-wave"
        style={{ backgroundImage: `url(${shipImage})` }}
      >
        {/* Music toggle button - positioned over the ship but with controlled size */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 cursor-pointer"
          // onClick={toggleMusic}
        >
          {/* Visual indicator for music state */}
          {isPlaying && (
            <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20 px-4 flex flex-col items-center">
        <div ref={compassRef} className="perspective-900 mb-8">
          <img
            ref={rudderRef}
            src={rudder}
            alt="Rudder"
            className="h-24 w-24 text-pirate-gold cursor-grab active:cursor-grabbing"
            style={{ transform: 'rotate(0rad)' }}
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