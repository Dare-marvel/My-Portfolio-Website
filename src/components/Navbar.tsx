import { useState, useEffect } from 'react';
import {
   Compass, MapPin, Skull,
  FlaskConical, Scroll, MessageSquare,
  Menu, X
} from 'lucide-react';
import medallion from '../assets/medallion.png';

const navItems = [
  { id: 'hero', label: 'Home', icon: <Compass className="h-5 w-5 text-pirate-gold" /> },
  { id: 'about', label: 'Log', icon: <Scroll className="h-5 w-5 text-pirate-gold" /> },
  { id: 'experience', label: 'Voyages', icon: <MapPin className="h-5 w-5 text-pirate-gold" /> },
  { id: 'skills', label: 'Abilities', icon: <FlaskConical className="h-5 w-5 text-pirate-gold" /> },
  { id: 'projects', label: 'Treasures', icon: <Skull className="h-5 w-5 text-pirate-gold" /> },
  { id: 'contact', label: 'Message', icon: <MessageSquare className="h-5 w-5 text-pirate-gold" /> },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section && scrollY >= section.offsetTop - 150) {
          currentSection = item.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 wood-bg z-50 transition-all duration-300 ${scrollPosition > 50 ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-pirate-parchment font-pirate text-2xl sm:text-md md:text-xl lg:text-2xl flex items-center gap-2">
          <img src={medallion} alt="Captain's Logo" className="h-14 w-14 text-pirate-gold animate-sway" />
          <span className="flex flex-col text-center sm:text-left">Captain's Portfolio</span>
        </div>


        {/* Desktop Navigation */}
        <div className="navbar-desktop hidden space-x-1 md:space-x-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`wooden-nav-item flex flex-col items-center relative ${activeSection === item.id ? 'text-pirate-gold' : ''
                }`}
            >
              {item.icon}
              <span className="text-sm md:text-base">{item.label}</span>
              {activeSection === item.id && (
                <div
                  className={`absolute left-0 bottom-0 h-[2px] bg-pirate-gold transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0'
                    }`}
                />
              )}

            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-mobile-toggle hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-pirate-gold h-6 w-6" /> : <Menu className="text-pirate-gold h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu px-4 py-2 flex flex-col space-y-2 wood-bg border-t border-pirate-gold">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`wooden-nav-item flex items-center gap-2 ${activeSection === item.id ? 'text-pirate-gold' : ''
                }`}
            >
              {item.icon}
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
