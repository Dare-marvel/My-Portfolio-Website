
import React, { useState, useEffect } from 'react';
import { Anchor, Compass, MapPin, Skull, FlaskConical, Scroll, MessageSquare } from 'lucide-react';
import medallion from '../assets/medallion.png'

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 wood-bg z-50 transition-all duration-300 ${scrollPosition > 50 ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-pirate-parchment font-pirate text-2xl flex items-center gap-2">
        <img src={medallion} alt="Captain's Logo" className="h-14 w-14 text-pirate-gold animate-sway" />
          <span className="hidden sm:inline">Captain's Portfolio</span>
        </div>
        
        <div className="flex space-x-1 md:space-x-4">
          <button onClick={() => scrollToSection('hero')} className="wooden-nav-item flex flex-col items-center">
            <Compass className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Home</span>
          </button>
          
          <button onClick={() => scrollToSection('about')} className="wooden-nav-item flex flex-col items-center">
            <Scroll className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Log</span>
          </button>
          
          <button onClick={() => scrollToSection('experience')} className="wooden-nav-item flex flex-col items-center">
            <MapPin className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Voyages</span>
          </button>
          
          <button onClick={() => scrollToSection('skills')} className="wooden-nav-item flex flex-col items-center">
            <FlaskConical className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Abilities</span>
          </button>
          
          <button onClick={() => scrollToSection('projects')} className="wooden-nav-item flex flex-col items-center">
            <Skull className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Treasures</span>
          </button>
          
          <button onClick={() => scrollToSection('contact')} className="wooden-nav-item flex flex-col items-center">
            <MessageSquare className="h-5 w-5 text-pirate-gold" />
            <span className="text-sm md:text-base">Message</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
