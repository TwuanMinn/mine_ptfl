import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ darkMode, visibleProjects, portfolioData }) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${visibleProjects
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: visibleProjects ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite',
                animationDelay: `${index * 0.3}s`
              }}></div>
              <div className={`relative ${darkMode ? 'bg-slate-900/70 hover:bg-slate-900/90' : 'bg-white/90'} backdrop-blur rounded-lg p-6 border-2 ${darkMode ? 'border-blue-700/60 hover:border-cyan-400' : 'border-blue-300 hover:border-blue-500'} transition-all duration-300 hover:scale-105`}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'} mb-3`}>{project.title}</h3>
                <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4`}>{project.description}</p>
                <a
                  href={project.link}
                  className={`inline-flex items-center ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;