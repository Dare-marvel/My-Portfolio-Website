import React, { useState, useRef } from 'react';
import splashSound from '../assets/Sound/water-splash.mp3';
import { Send, Mail, MessageSquare, User, Anchor, Skull } from 'lucide-react';
import rumBottle from '../assets/rum-bottle.png';
import swordMap from '../assets/sword-map.png';
import toast from 'react-hot-toast';

// Custom pirate toast components
const PirateToast = ({ message, type }) => {

  const icon = type === 'success' ? <Anchor className="h-5 w-5" /> : <Skull className="h-5 w-5" />;
  const bgColor = type === 'success' ? 'bg-green-800' : 'bg-red-800';

  return (
    <div className={`${bgColor} text-white font-pirate rounded-lg border-2 border-pirate-gold p-4 shadow-lg flex items-center gap-3`}>
      <div className="bg-pirate-gold p-2 rounded-full">
        {icon}
      </div>
      <p>{message}</p>
    </div>
  );
};

const Contact = () => {
  const [error, setError] = useState('');
  const splashRef = useRef<HTMLAudioElement | null>(null);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');



    // Get form values using document.getElementById and trim them
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = messageInput?.value.trim();

    // Validate form
    if (!name || !email || !message) {
      setError('All fields are required, matey!');
      return;
    }

    // Validate email
    if (!isValidEmail(email)) {
      setError('Arrr! That be not a valid email address!');
      return;
    }

    // Custom loading toast
    toast.custom((t) => (
      <div className={`bg-blue-800 text-white font-pirate rounded-lg border-2 border-pirate-gold p-4 shadow-lg flex items-center gap-3 ${t.visible ? 'animate-bounce' : 'opacity-0'
        }`}>
        <div className="bg-pirate-gold p-2 rounded-full animate-spin">
          <Anchor className="h-5 w-5" />
        </div>
        <p>Sending your message across the seven seas...</p>
      </div>
    ), { id: 'loading-toast', duration: Infinity });

    splashRef.current?.play();

    // Send form data to Formspree
    fetch(import.meta.env.VITE_FORMSPREE_URL, { // Replace with your actual Formspree ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(response => {
        toast.dismiss('loading-toast');
        if (response.ok) {
          // Success
          toast.custom((t) => (
            <PirateToast
              message="Message sent successfully! I'll respond faster than a frigate with the wind at its back!"
              type="success"
            />
          ), { duration: 5000 });

          // Reset form
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
        } else {
          // Error
          toast.custom((t) => (
            <PirateToast
              message="Blimey! There was an error sending your message. Try again, matey!"
              type="error"
            />
          ), { duration: 5000 });
        }
      })
      .catch(() => {
        toast.dismiss('loading-toast');
        toast.custom((t) => (
          <PirateToast
            message="Shiver me timbers! Connection failed. Check yer network and try again!"
            type="error"
          />
        ), { duration: 5000 });
      });
  };

  return (
    <section id="contact" className="relative pb-20 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center">Send a Message in a Bottle</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold/60 rounded"></div>
          </div>
        </div>

        <div className="pirate-section max-w-2xl mx-auto relative">
          {/* Bottle decoration - repositioned for mobile */}
          <div
            className="absolute -top-8 right-4 sm:right-10 w-12 sm:w-16 h-28 sm:h-32 bg-contain bg-no-repeat z-0 hide-bottle"
            style={{ backgroundImage: `url(${rumBottle})` }}
          ></div>


          <div className="flex items-center gap-3 mb-8 relative z-10">
            <Mail className="h-8 w-8 text-pirate-gold" />
            <h3 className="text-2xl font-pirate">Contact the Captain</h3>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-800 border-2 border-pirate-gold text-white px-4 py-3 rounded-lg relative mb-6 font-pirate" role="alert">
                <div className="flex items-center gap-2">
                  <Skull className="h-5 w-5 text-pirate-gold" />
                  <strong className="font-bold">Avast!</strong>
                </div>
                <span className="block sm:inline mt-1">{error}</span>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="block font-pirate text-lg mb-2 flex items-center gap-2">
                <User className="h-5 w-5 text-pirate-gold" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="pirate-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block font-pirate text-lg mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-pirate-gold" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="pirate-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-pirate text-lg mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-pirate-gold" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="pirate-input resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="text-center flex justify-center">
              <button
                type="submit"
                className="pirate-button group relative flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5 text-pirate-gold transition-transform group-hover:translate-x-1 duration-300" />
                <span>Throw the bottle in the Ocean</span>
              </button>
            </div>
          </form>

          {/* Map decoration - repositioned lower and more left for mobile */}
          <div className="absolute -bottom-9 sm:-bottom-10 -left-4 sm:-left-10 w-16 sm:w-20 h-16 sm:h-20 bg-contain bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(${swordMap})` }}>
          </div>

          {/* Splash sound audio */}
          <audio ref={splashRef} src={splashSound} preload="auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact;