
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

import compass from '../assets/compass.jpg';

const Footer = () => {
  return (
    <footer className="relative py-10 wood-bg text-pirate-parchment overflow-hidden">
      {/* Wave top decoration */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-12">
          <path fill="#e0c9a6" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,181.3C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-pirate mb-4 md:mb-0">Captain's Portfolio</div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pirate-gold transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pirate-gold transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pirate-gold transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:captain@pirateportfolio.com" className="hover:text-pirate-gold transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-pirate-parchment/20 pt-6 text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Crafted with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by a Code Pirate &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xs mt-2 text-pirate-parchment/70">
            All rights reserved. Handle this booty with care.
          </p>
        </div>
      </div>
      
      {/* Ship decoration */}
      <div className="absolute bottom-0 right-0 w-32 h-24 bg-contain bg-bottom bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${compass})` }}>
      </div>
    </footer>
  );
};

export default Footer;
