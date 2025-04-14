
import React from 'react';
import { Code, Database, PenTool, Globe, ChartArea, Brain } from 'lucide-react';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'OJET', level: 85 },
      { name: 'Material UI', level: 80 },
      { name: 'Chakra UI', level: 90 },
      { name: 'Bootstrap CSS', level: 80 },
      { name: 'Three.js', level: 90 },
      { name: 'Redux', level: 90 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Database className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Flask', level: 80 },
      { name: 'Django', level: 80 },
      { name: 'ASP.NET', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'SQLite', level: 70 },
      { name: 'OracleDB', level: 70 },
      { name: 'Toad', level: 70 },
      { name: 'Postman', level: 70 },
      { name: 'Windows Active Directory', level: 70 },
      { name: 'Firebase', level: 65 }
    ]
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    icon: <PenTool className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'Figma', level: 70 },
      { name: 'UI Design', level: 75 },
      { name: 'User Experience', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Animation', level: 65 }
    ]
  },
  {
    id: 'other',
    title: 'Other Skills',
    icon: <Globe className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'CI/CD', level: 75 },
      { name: 'Testing', level: 70 },
      { name: 'Performance Optimization', level: 80 },
      { name: 'Docker', level: 60 }
    ]
  },
  {
    id: 'BDA',
    title: 'Big Data Analytics',
    icon: <ChartArea className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'Hadoop', level: 85 },
      { name: 'Hive', level: 75 },
      { name: 'Spark', level: 70 },
      { name: 'PowerBI', level: 80 },
      { name: 'Tableau', level: 60 }
    ]
  },
  {
    id: 'AIML',
    title: 'Artificial Intelligence and Machine Learning',
    icon: <Brain className="h-8 w-8 text-pirate-gold" />,
    skills: [
      { name: 'Numpy', level: 85 },
      { name: 'Pandas', level: 75 },
      { name: 'Matplotlib', level: 70 },
      { name: 'Scikit-Learn', level: 80 },
      { name: 'Seaborn', level: 60 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative pb-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-pirate text-center">Pirate Abilities</h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-pirate-gold/60 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.id} className="pirate-section">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-pirate-wood-dark/30">
                {category.icon}
                <h3 className="text-2xl font-pirate">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {category.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-pirate-parchment-dark/70 border-pirate-gold/50 text-pirate-wood-dark px-3 py-1.5 text-sm font-scroll"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
