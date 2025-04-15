
import React, { useState } from 'react';
import { MapPin, Anchor, Clock, ExternalLink, BadgeCheck } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Intern",
    company: "IBM",
    period: "2021 - Present",
    url: "https://www.ibm.com/",
    logo: "../src/assets/Company/ibm-logo.png",
    description: "Leading a team of 9 students to develop responsive website for a food donation NGO. ",
    achievements: [
      "Implemented essential functionalities, including secure login/signup, donation options (one-time/monthly) with stripe payment interface.",
      " Created an interactive gallery to showcase recent events and initiatives visually.Organized events page with a user friendly filter option, allowing visitors to explore events by year and participate in their causes.",
    ]
  },
  {
    id: 2,
    title: "Project Intern",
    company: "Oracle Financial Services Software",
    period: "June 2024 - Aug 2024",
    url: "https://www.oracle.com/",
    logo: "../src/assets/Company/oracle-logo.svg",
    description: "Developed responsive UI components and implemented complex business logic for banking platform. Worked closely with UX designers to create intuitive user interfaces.",
    achievements: [
      "Developed a website builder from scratch",
      "Created and managed tasks in a Netflix Conductor workflow for a banking application",
    ]
  },
  {
    id: 3,
    title: "SDE Intern",
    company: "Rashtriya Chemicals and Fertilizers Limited",
    period: "Dec 2024 -  Present",
    url: "https://rcfltd.com/",
    logo: "../src/assets/Company/rcf.png",
    description: "Worked on ASP.NET, C#, Active Directory, Oracle Toad, and databases through demo projects and live codebase optimization. Focused on development, debugging, and performance tuning.",
    achievements: [
      "Completely developed a Video Conference Management System from scratch.",
      "Reduced data fetching time with caching.",
      "Automated repetitive tasks, minimizing manual effort.",
    ]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section id="experience" className="relative pb-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8 pb-10">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center">Previous Voyages</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold/60 rounded"></div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-pirate-wood-dark/30"></div>

          {/* Experience markers */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-16">
                {/* Timeline marker */}
                <div
                  className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeExp.id === exp.id ? 'scale-125' : 'scale-100'}`}
                  onClick={() => setActiveExp(exp)}
                >
                  <div className="absolute w-14 h-14 bg-pirate-parchment-dark rounded-full border-2 border-pirate-gold flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-8 w-8 text-pirate-wood-dark rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Content card - alternate left and right */}
                <div className={`w-full md:w-5/12 pirate-section ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} ${activeExp.id === exp.id ? 'border-pirate-gold/70' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-pirate">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-pirate-wood-dark/70">
                        <Anchor className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-pirate-wood-dark/70 whitespace-nowrap">
                      <Clock className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="scroll-text mb-4">{exp.description}</p>

                  <div className="mt-4">
                    <h4 className="font-pirate text-lg mb-2">Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <BadgeCheck className="h-5 w-5 text-pirate-gold shrink-0 mt-0.5" />
                          <span className="scroll-text">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" >
                      <ExternalLink className="h-5 w-5 text-pirate-ocean-deep/50" />
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative ship at the end of timeline */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-24 h-24 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../src/assets/ship.png')" }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
