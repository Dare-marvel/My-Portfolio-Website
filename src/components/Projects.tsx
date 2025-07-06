
import { useState } from 'react';
import { Github, ExternalLink, Bookmark, Sparkles } from 'lucide-react';
import compass from '../assets/pirate-compass.png';
import davyOpen from '../assets/davy-chest-open.png'
import davyClosed from '../assets/davy-chest-closed.png'
import aarogyaData from '../assets/Projects/AarogyaData.jpg'
import sangrah from '../assets/Projects/InventoryManagement2.jpg'
import codeRed from "../assets/Projects/CodeRed.jpg"
import crackopoly from '../assets/Projects/Crackopoly.jpg'
import davyKey from '../assets/davy-jones-key.png'
import codeEditor from '../assets/Projects/codeEditor.png'
import notesGalaxy from '../assets/Projects/notesGalaxy.png'

const projects = [
  {
    id: 1,
    title: "AarogyaData - Enhancing Healthcare Access",
    description: "Created an AI-powered healthcare app to improve patient care through real-time predictions, medical insights, disease detection, and digital prescriptions. Integrated a centralized database for seamless access to patient records, enabling better decision-making and enhanced healthcare delivery. Built with Tensorflow,OpenCV,Keras,Scikit-learn,Google Dialogflow",
    image: aarogyaData,
    tags: ["NLP", "Image Classification", "Prediction", "QR Encoding"],
    github: "https://github.com/Dare-marvel/AarogyaData-Enhancing-Healthcare-Access",
    demo: "",
    bgPosition: "top"
  },
  {
    id: 2,
    title: "NotesGalaxy - All Engineering Notes at one Place ",
    description: " Notes-Galaxy, Your one-stop destination for all engineering notes!  Dive into well-organized, comprehensive content for a smoother learning journey. Join our community, share insights, and stay updated with the latest trends.",
    image: notesGalaxy,
    tags: ["Community Platform", "Engineering Notes", "Gamified Learning Platform"],
    github: "https://github.com/Dare-marvel/NotesGalaxy-Engineering-Made-Effortless",
    demo: "https://notes-galaxy.vercel.app/",
    bgPosition: "50% 36%"
  },
  {
    id: 3,
    title: "CodeEditor with Judge0",
    description: "A powerful, modern code editor featuring multi-language support with syntax highlighting, real-time code execution, interactive test case management, and a clean UI with theme switching. Designed for seamless problem-solving, it includes a dedicated problem description panel and comprehensive output handling, making it ideal for developers.",
    image: codeEditor,
    tags: ["Code Execution", "Compiling", "Judge0", "ReactJSX"],
    github: "https://github.com/Dare-marvel/Code-Editor-with-Monaco-React-and-Judge-0-API",
    demo: "https://www.youtube.com/watch?v=QOmc3u1Aev8",
    bgPosition: "top"
  },
  {
    id: 4,
    title: "Sangrah - Inventory Management System",
    description: "Built an intuitive interface for vendors and companies to manage inventory efficiently, with sales and product analytics, and low stock alerts. Also created a marketplace for companies to list products and integrated Stripe Payment Gateway for seamless transactions.Built with React.js ,Node.js, Material UI, Cheerio, Stripe ,Firebase.",
    image: sangrah,
    tags: ["Web Crawlers", "Data Analysis", "Inventory and Price Analytics"],
    github: "https://github.com/Dare-marvel/inventory_management",
    demo: "https://rohit-sangrah.netlify.app/",
    bgPosition: "50% 33%"
  },
  {
    id: 5,
    title: "Code Red - A Story Based Game",
    description: "Developed an interactive 3D model of a bomb with functional buttons and customizable wire colors, enhancing user engagement through realistic simulation features, and created a human vs. AI Connect 4 game utilizing the Minimax algorithm.Built with React.js, NodesJS, Redux, React Three Fiber,React three drei, React-terminal",
    image: codeRed,
    tags: ["Minimax Algorithm", "3D", "Game", "AI"],
    github: "https://github.com/Hitstar53/Code-Red-Tempest-Of-Timelines",
    demo: "",
    bgPosition: "50% 30%"
  },
  {
    id: 6,
    title: "Crackopoly - Monopoly with a twist",
    description: "Developed an interactive Monopoly game featuring real-time multiplayer capabilities, room joining, chat functionality, game history, and a leaderboard. The game introduces a unique twist where players buy properties by solving riddles, adding a challenging element to the classic game. Built with React.js,Node.js, Socket.io",
    image: crackopoly,
    tags: ["Multiplayer game", "Realtime updates", "Socket.io"],
    github: "https://github.com/Dare-marvel/business-game",
    demo: "",
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
          <div
            className="relative w-64 h-40 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${davyClosed})` }}
            onClick={(e) => {
              e.currentTarget.style.backgroundImage.includes(davyClosed)
                ? (e.currentTarget.style.backgroundImage = `url(${davyOpen})`)
                : (e.currentTarget.style.backgroundImage = `url(${davyClosed})`);
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
                  src={davyKey} // Replace with the actual path to your key image
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-pirate-gold rounded-full hover:bg-amber-500 text-pirate-wood-dark transition-colors duration-300"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}

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

              {/* Decorative Compass */}
              <div className={`absolute bottom-3 right-3 w-10 h-10 bg-contain bg-center bg-no-repeat transition-all duration-500 ${hoveredId === project.id ? 'rotate-[360deg]' : 'rotate-0'}`}
                style={{ backgroundImage: `url(${compass})` }}>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/dare-marvel" // replace with your actual GitHub profile or repo link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-pirate-wood-dark font-semibold font-pirate shadow-md transition-transform transform hover:scale-105"
          >
            <Github className="h-5 w-5" />
            More Treasures
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
