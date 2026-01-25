import React from 'react';

const About = ({ darkMode, portfolioData }) => {
  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-title">
      <div className="max-w-4xl mx-auto">
        <h2 id="about-title" className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>About Me</h2>
        <div className={`relative ${darkMode ? 'bg-slate-900/40' : 'bg-blue-50/70'} rounded-lg p-8 border-2 ${darkMode ? 'border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'border-blue-300/70 shadow-lg shadow-blue-400/30'} transition-all duration-500 hover:shadow-2xl ${darkMode ? 'hover:shadow-blue-300/80 hover:border-blue-300 hover:bg-slate-900/50' : 'hover:shadow-blue-400/50 hover:border-blue-400'}`} style={{ animation: 'shadowPulse 3s ease-in-out infinite' }}>
          <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-lg mb-6`}>
            {portfolioData.bio}
          </p>
          <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
            <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Education:</strong> TDTU - Ton Duc Thang University (2021 - 2025)</p>
            <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Major:</strong> Software Engineering</p>
            <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Location:</strong> District 7, Ho Chi Minh City, Vietnam</p>
            <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>IELTS:</strong> 7.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;