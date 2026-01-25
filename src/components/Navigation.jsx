import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = ({ 
  darkMode, 
  setDarkMode, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  portfolioData 
}) => {
  return (
    <header>
      <nav 
        className={`fixed top-0 w-full ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md z-50 border-b ${darkMode ? 'border-blue-600/20' : 'border-blue-200/50'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={portfolioData.profileImage}
                alt={`${portfolioData.name} profile picture`}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                  {portfolioData.name}
                </span>
                <p className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'} flex items-center gap-1`}>
                  <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true"></span>
                  Open for work
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 items-center flex-1 justify-end list-none m-0 p-0" role="menubar">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item} className="relative group pb-1">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }} aria-hidden="true">
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="8"
                      fill="none"
                      stroke="url(#gradient-nav)"
                      strokeWidth="2"
                      strokeDasharray="300"
                      strokeDashoffset="0"
                      style={{
                        animation: 'dash 3s linear infinite'
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient-nav" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor={darkMode ? "rgba(96, 165, 250, 1)" : "rgba(37, 99, 235, 1)"} />
                        <stop offset="100%" stopColor={darkMode ? "rgba(255, 255, 255, 1)" : "rgba(34, 211, 238, 1)"} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`relative px-4 py-2 ${darkMode ? 'bg-black' : 'bg-white'} rounded-lg backdrop-blur`}
                    aria-current={activeSection === item ? 'page' : undefined}
                  >
                    <span className={`capitalize font-semibold transition-colors duration-200 ease-out ${activeSection === item
                        ? darkMode ? 'text-white' : 'text-blue-600'
                        : darkMode ? 'text-blue-300 group-hover:text-white' : 'text-blue-500 group-hover:text-blue-600'
                      }`}>
                      {item}
                    </span>
                  </button>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-200 ease-out ${activeSection === item
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}
                    aria-hidden="true"
                  />
                </li>
              ))}

              {/* Theme Toggle Button */}
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 hover:bg-blue-800/40' : 'bg-blue-100 hover:bg-blue-200'} transition-all`}
                  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                >
                  {darkMode ? <Sun className="text-blue-300" size={20} /> : <Moon className="text-blue-600" size={20} />}
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul 
              id="mobile-menu" 
              className="md:hidden pb-4 list-none m-0 p-0" 
              role="menu"
            >
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-blue-300 hover:text-white hover:bg-blue-900/50' : 'text-blue-600 hover:text-cyan-600 hover:bg-blue-100'} capitalize`}
                    role="menuitem"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-full text-left px-4 py-2 flex items-center gap-2 ${darkMode ? 'text-blue-300 hover:bg-blue-900/50' : 'text-blue-600 hover:bg-blue-100'}`}
                  role="menuitem"
                >
                  {darkMode ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;