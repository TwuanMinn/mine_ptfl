import React from 'react';

const SkillsSection = ({ darkMode, visibleSkills, portfolioData }) => {
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-black/50' : 'bg-blue-50/50'}`} aria-labelledby="skills-title">
      <div className="max-w-4xl mx-auto">
          <h2 id="skills-title" className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Skills</h2>

        {/* Progress Bars */}
        <div className="mb-12">
          <h3 className={`text-xl font-semibold mb-8 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Key Technologies</h3>
          <div className="space-y-6">
            {portfolioData.skillsProgress.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${visibleSkills
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                  }`}
                style={{
                  transitionDelay: visibleSkills ? `${index * 50}ms` : '0ms'
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className={`font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>{skill.name}</p>
                  <span className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{skill.level}%</span>
                </div>
                <div className={`w-full h-3 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-blue-200'} overflow-hidden border ${darkMode ? 'border-blue-700/50' : 'border-blue-300/50'}`}>
                  <div
                    className={`h-full ${darkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-blue-500 to-blue-600'} transition-all duration-1000 ease-out`}
                    style={{
                      width: visibleSkills ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Skills */}
        <h3 className={`text-xl font-semibold mb-8 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Other Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${visibleSkills
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: visibleSkills ? `${(index + 4) * 100}ms` : '0ms'
              }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite',
                animationDelay: `${index * 0.2}s`
              }}></div>
              <div className={`relative ${darkMode ? 'bg-slate-900/60 hover:bg-slate-900/80' : 'bg-blue-50/80'} backdrop-blur rounded-lg p-6 border-2 ${darkMode ? 'border-blue-700/60 hover:border-cyan-400' : 'border-blue-300 hover:border-blue-500'} transition-all duration-300 hover:scale-105`}>
                <p className={`${darkMode ? 'text-blue-100' : 'text-blue-800'} font-semibold text-center`}>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;