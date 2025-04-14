
import React, { useState } from 'react';
import { Skull, Github, ExternalLink, Bookmark, Key, Sparkles } from 'lucide-react';
import compass from '../assets/pirate-compass.png';

const projects = [
  {
    id: 1,
    title: "AarogyaData - Enhancing Healthcare Access",
    description: "Created an AI-powered healthcare app to improve patient care through real-time predictions, medical insights, disease detection, and digital prescriptions. Integrated a centralized database for seamless access to patient records, enabling better decision-making and enhanced healthcare delivery. Built with Tensorflow,OpenCV,Keras,Scikit-learn,Google Dialogflow",
    image: "../src/assets/Projects/AarogyaData.jpg",
    tags: ["NLP", "Image Classification", "Prediction", "QR Encoding"],
    github: "https://github.com/Dare-marvel/AarogyaData-Enhancing-Healthcare-Access",
    demo: "https://black-pearl-dashboard.demo.com",
    bgPosition: "top"
  },
  {
    id: 2,
    title: "Sangrah - Inventory Management System",
    description: "Built an intuitive interface for vendors and companies to manage inventory efficiently, with sales and product analytics, and low stock alerts. Also created a marketplace for companies to list products and integrated Stripe Payment Gateway for seamless transactions.Built with React.js ,Node.js, Material UI, Cheerio, Stripe ,Firebase.",
    image: "../src/assets/Projects/InventoryManagement2.jpg",
    tags: ["Web Crawlers", "Data Analysis", "Inventory and Price Analytics"],
    github: "https://github.com/Dare-marvel/inventory_management",
    demo: "https://rohit-sangrah.netlify.app/",
    bgPosition: "50% 33%"
  },
  {
    id: 3,
    title: "Code Red - A Story Based Game",
    description: "Developed an interactive 3D model of a bomb with functional buttons and customizable wire colors, enhancing user engagement through realistic simulation features, and created a human vs. AI Connect 4 game utilizing the Minimax algorithm.Built with React.js, NodesJS, Redux, React Three Fiber,React three drei, React-terminal",
    image: "../src/assets/Projects/CodeRed.jpg",
    tags: ["Minimax Algorithm", "3D", "Game", "AI"],
    github: "https://github.com/Hitstar53/Code-Red-Tempest-Of-Timelines",
    demo: "https://treasure-map.demo.com",
    bgPosition: "50% 30%"
  },
  {
    id: 4,
    title: "Crackopoly - Monopoly with a twist",
    description: "Developed an interactive Monopoly game featuring real-time multiplayer capabilities, room joining, chat functionality, game history, and a leaderboard. The game introduces a unique twist where players buy properties by solving riddles, adding a challenging element to the classic game. Built with React.js,Node.js, Socket.io",
    image: "../src/assets/Projects/Crackopoly.jpg",
    tags: ["Multiplayer game", "Realtime updates", "Socket.io"],
    github: "https://github.com/Dare-marvel/business-game",
    demo: "https://pirate-weather.demo.com",
    bgPosition: "50% 30%"
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative pb-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center">Treasure Chest</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold/60 rounded"></div>
          </div>
        </div>

        {/* Treasure chest image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-40 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../src/assets/davy-chest-closed.png')" }}
            onClick={(e) => {
              e.currentTarget.style.backgroundImage =
                e.currentTarget.style.backgroundImage.includes("davy-chest-closed.png")
                  ? "url('../src/assets/davy-chest-open.png')"
                  : "url('../src/assets/davy-chest-closed.png')";
            }}
          >
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Skull className="h-10 w-10 text-pirate-gold" />
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="treasure-item"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute -top-3 -right-3">
                <img
                  src="../src/assets/davy-jones-key.png" // Replace with the actual path to your key image
                  alt="Key"
                  className={`h-15 w-8 text-pirate-gold transition-all duration-300 ${hoveredId === project.id ? 'rotate-90' : 'rotate-0'
                    }`} />
              </div>

              <div
                className="w-full h-48 mb-4 rounded overflow-hidden bg-cover relative"
                style={{ backgroundImage: `url(${project.image})`, backgroundPosition: `${project.bgPosition}` }}
              >
                <div className="absolute inset-0 bg-pirate-ocean-deep/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pirate-wood-dark rounded-full hover:bg-pirate-wood text-pirate-parchment transition-colors duration-300"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pirate-gold rounded-full hover:bg-amber-500 text-pirate-wood-dark transition-colors duration-300"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-pirate flex items-center gap-2">
                  {project.title}
                  <Sparkles className="h-4 w-4 text-pirate-wood" />
                </h3>
                <p className="scroll-text mt-2">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-pirate-wood-dark/10 border border-pirate-gold/20 flex items-center gap-1"
                  >
                    <Bookmark className="h-3 w-3 text-pirate-wood" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative coin */}
              <div className={`absolute bottom-3 right-3 w-10 h-10 bg-contain bg-center bg-no-repeat transition-all duration-500 ${hoveredId === project.id ? 'rotate-[360deg]' : 'rotate-0'}`}
                style={{ backgroundImage: `url(${compass})` }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
