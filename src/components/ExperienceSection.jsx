import React from 'react';

const ExperienceSection = ({ darkMode, experienceVisible, portfolioData }) => {
  return (
    <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-b from-slate-950/80 via-black/50 to-slate-950/80' : 'bg-blue-50/50'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Work Experience</h2>
        <div className="relative">
          <div className={`absolute left-10 top-0 bottom-20 w-0.5 ${darkMode ? 'bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500/50' : 'bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400/50'}`}></div>

          <div className="space-y-0">
            {portfolioData.experience.map((job, index) => (
              <div
                key={index}
                className={`relative flex gap-6 pb-12 transition-all duration-700 ${experienceVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-20'
                  }`}
                style={{
                  transitionDelay: experienceVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full ${darkMode ? 'bg-gradient-to-br from-blue-600 to-blue-900' : 'bg-gradient-to-br from-blue-500 to-blue-700'} flex items-center justify-center ${darkMode ? 'shadow-lg shadow-blue-500/50' : 'shadow-lg shadow-blue-400/50'} transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                    <svg className="w-9 h-9 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <div className={`${darkMode ? 'bg-gradient-to-br from-slate-900/60 to-black/40' : 'bg-blue-50/70'} rounded-2xl p-6 border-2 ${darkMode ? 'border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'border-blue-300/70 shadow-lg shadow-blue-400/30'} transition-all duration-300 hover:scale-[1.02] hover:translate-x-2`} style={{ animation: darkMode ? 'shadowPulse 3s ease-in-out infinite' : 'none' }}>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'} mb-1 transition-colors duration-300`}>{job.role}</h3>
                    <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} text-sm mb-4 transition-colors duration-300`}>{job.period}</p>
                    <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} leading-relaxed transition-colors duration-300`}>{job.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`relative flex gap-6 transition-all duration-700 ${experienceVisible
                  ? 'opacity-100'
                  : 'opacity-0'
                }`}
              style={{
                transitionDelay: experienceVisible ? `${portfolioData.experience.length * 200}ms` : '0ms'
              }}
            >
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-20 h-20 rounded-full border-4 ${darkMode ? 'border-blue-600/30 bg-slate-900/80 hover:border-blue-500/50' : 'border-blue-400/30 bg-white hover:border-blue-400/50'} transition-all duration-300`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;