
import React from 'react';
import { Scroll, Feather, Compass } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import pirateShip from '../assets/pirate-ship.png';

const About = () => {
  return (
    <section id="about" className="relative pb-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center">Captain's Log</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold/60 rounded"></div>
          </div>
        </div>
        
        <div className="pirate-section max-w-4xl mx-auto">
          {/* Decoration */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-contain bg-no-repeat animate-float"
            style={{ backgroundImage: `url(${pirateShip})` }}>
          </div>

          {/* Profile Image with Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Animated background */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pirate-gold/40 to-pirate-ocean-light/40 blur-md animate-spin-slow"></div>
              <div className="absolute -inset-3 rounded-full bg-gradient-to-l from-pirate-wood-light/30 to-pirate-ocean-deep/30 blur-sm animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Profile image */}
              <Avatar className="h-40 w-40 border-4 border-pirate-gold/50 relative z-10">
                <AvatarImage src="../src/assets/adwait-profile.jpg" alt="Captain's portrait" className="object-cover" />
                <AvatarFallback className="bg-pirate-parchment text-pirate-wood-dark text-4xl font-pirate">CC</AvatarFallback>
              </Avatar>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-contain bg-no-repeat z-20 animate-float"
                style={{ backgroundImage: "url('../src/assets/flag.png')", animationDelay: '1s' }}>
              </div>
            </div>
          </div>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b-2 border-pirate-wood-dark/30 pb-4">
            <div className="flex items-center gap-3">
              <Scroll className="h-8 w-8 text-pirate-wood-dark" />
              <h3 className="text-2xl font-pirate">The Tale of a Code Buccaneer</h3>
            </div>
            <Feather className="h-6 w-6 text-pirate-gold animate-sway" />
          </div>
          
          {/* Content */}
          <div className="scroll-text space-y-6">
            <p>
              Ahoy there! I be a seasoned code pirate sailing the treacherous seas of web development for over 5 years now. Me journey began in the calm waters of HTML and CSS, but I soon found meself venturing into deeper territories.
            </p>
            
            <div className="bg-pirate-parchment-dark/30 p-4 border-l-4 border-pirate-gold italic rounded">
              "There be two things a pirate developer needs - a sharp mind for solving problems and a sturdy keyboard that can withstand the occasional frustrated slam."
            </div>
            
            <p>
              Me specialties lie in crafting responsive websites that perform well on all devices, be they grand galleons or tiny rowboats. I've mastered the arts of React, TypeScript, and Node.js, using them to build impressive digital treasures for clients across the seven seas.
            </p>
            
            <p>
              When not coding, ye might find me exploring new technologies, reading tales of software architecture, or enjoying a bottle o' rum (aka coffee) while contemplating the next big project.
            </p>
            
            <p>
              I believe in clean, maintainable code and creating user experiences that make landlubbers go "Arrr!" with delight. If ye be looking for a developer who can navigate the stormiest coding challenges, then look no further!
            </p>
          </div>
          
          {/* Map decoration */}
          <div className="absolute -bottom-9 -left-8 w-24 h-24 bg-contain bg-no-repeat opacity-70"
            style={{ backgroundImage: "url('../src/assets/map.png')" }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
