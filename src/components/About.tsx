import { Scroll, Feather, Compass, Anchor } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import pirateShip from '../assets/pirate-ship.png';
import adwaitProfile from '../assets/adwait-profile.jpg';
import flag from '../assets/flag.png'
import map from '../assets/map.png'
import parchmentTexture from '../assets/parchment-texture.png'
import Resume from '../assets/Resume/Adwait_Purao_Resume.pdf'

const About = () => {
  return (
    <section id="about" className="relative pb-16 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center relative z-10 text-pirate-wood-dark">
              Captain's Log
              <span className="absolute -top-3 -right-6 text-pirate-gold text-2xl">✵</span>
              <span className="absolute -bottom-3 -left-6 text-pirate-gold text-2xl">✵</span>
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold rounded"></div>
          </div>
        </div>

        <div className="pirate-section max-w-4xl mx-auto">
          {/* Decorations */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-contain bg-no-repeat animate-float hidden lg:block"
            style={{ backgroundImage: `url(${pirateShip})` }}>
          </div>


          {/* Parchment paper with torn edges */}
          <div className="relative mb-12">

            {/* Main content with parchment background */}
            <div
              className="relative bg-pirate-parchment p-8 rounded shadow-lg border-pirate-wood-light/20 bg-blend-overlay"
              style={{ backgroundImage: `url(${parchmentTexture})` }}
            >
              {/* Coffee stain decoration */}
              <div className="absolute top-4 right-8 w-24 h-24 bg-pirate-wood-dark/10 rounded-full blur-md"></div>
              <div className="absolute bottom-12 left-16 w-32 h-16 bg-pirate-wood-dark/5 rounded-full blur-md rotate-45"></div>

              {/* Profile Section with Name and Title */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                {/* Avatar with Animation */}
                <div className="relative flex-shrink-0">
                  {/* Animated background */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pirate-gold/40 to-pirate-ocean-light/40 blur-md animate-spin-slow"></div>
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-l from-pirate-wood-light/30 to-pirate-ocean-deep/30 blur-sm animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

                  {/* Profile image */}
                  <Avatar className="h-32 w-32 border-4 border-pirate-gold/50 relative z-10 shadow-lg">
                    <AvatarImage src={adwaitProfile} alt="Captain's portrait" className="object-cover object-top" />
                    <AvatarFallback className="bg-pirate-parchment text-pirate-wood-dark text-4xl font-pirate">CC</AvatarFallback>
                  </Avatar>

                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-contain bg-no-repeat z-20 animate-float"
                    style={{ backgroundImage: `url(${flag})`, animationDelay: '1s' }}>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center md:text-left relative">
                  <h3 className="text-3xl font-pirate text-pirate-wood-dark mb-2">Captain Adwait</h3>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Anchor className="h-5 w-5 text-pirate-gold" />
                    <p className="text-lg italic text-pirate-wood-dark/80">Master of the Digital Seas</p>
                  </div>
                  <div className="absolute -bottom-4 left-0 right-0 md:right-12 h-px bg-pirate-gold/50"></div>
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

              {/* Content with sepia and aged look */}
              <div className="scroll-text space-y-6 text-pirate-wood-dark/90 relative z-10">
                <p className="first-letter:text-4xl first-letter:font-pirate first-letter:text-pirate-wood-dark first-letter:float-left first-letter:mr-1">
                  Ahoy there! I be a seasoned code pirate sailing the treacherous seas of web development for over 5 years now. Me journey began in the calm waters of HTML and CSS, but I soon found meself venturing into deeper territories.
                </p>

                <div className="bg-pirate-parchment-dark/30 p-4 border-l-4 border-pirate-gold italic rounded relative">
                  <div className="absolute -left-1 -top-1 text-pirate-gold text-xl">"</div>
                  <div className="absolute -right-1 -bottom-1 text-pirate-gold text-xl">"</div>
                  <p className="ml-2">There be two things a pirate developer needs - a sharp mind for solving problems and a sturdy keyboard that can withstand the occasional frustrated slam.</p>
                </div>

                <p>
                  Me specialties lie in crafting responsive websites that perform well on all devices, be they grand galleons or tiny rowboats. I've mastered the arts of React, TypeScript, and Node.js, using them to build impressive digital treasures for clients across the seven seas.
                </p>

                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-pirate-gold/30"></div>
                  <Compass className="h-6 w-6 text-pirate-gold animate-pulse" />
                  <div className="flex-1 h-px bg-pirate-gold/30"></div>
                </div>

                <p>
                  When not coding, ye might find me exploring new technologies, reading tales of software architecture, or enjoying a bottle o' rum (aka coffee) while contemplating the next big project.
                </p>

                <p>
                  I believe in clean, maintainable code and creating user experiences that make landlubbers go "Arrr!" with delight. If ye be looking for a developer who can navigate the stormiest coding challenges, then look no further!
                </p>

                {/* Signature */}
                <div className="text-right mt-8 font-pirate text-xl text-pirate-wood-dark italic">
                  - Capt. Adwait
                </div>

                {/* Download Resume Button */}
                <div className="mt-6 flex justify-center ">
                  <a
                    href={Resume} // adjust this path if needed
                    download="Captain-Adwait-Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-pirate-gold/90 hover:bg-pirate-gold text-pirate-wood-dark font-semibold font-pirate shadow-md transition-transform transform hover:scale-105"
                  >
                    <Feather className="w-5 h-5" />
                    Download Logbook
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Map decoration */}
          <div className="absolute -bottom-9 -left-8 w-24 h-24 bg-contain bg-no-repeat opacity-70 hidden lg:block"
            style={{ backgroundImage: `url(${map})` }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;