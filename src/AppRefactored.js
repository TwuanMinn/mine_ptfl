import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './ChatBot';

const AppContent = () => {
  const { 
    darkMode, 
    setDarkMode, 
    isMenuOpen, 
    setIsMenuOpen, 
    activeSection, 
    chatOpen, 
    setChatOpen, 
    showScrollTop, 
    displayedText, 
    scrollToSection, 
    scrollToTop, 
    portfolioData 
  } = usePortfolio();

  // Refs for intersection observers
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // State for visibility animations
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(false);

  // Intersection observer for experience section
  useEffect(() => {
    const expObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setExperienceVisible(true);
          } else {
            setExperienceVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentExpRef = experienceRef.current;
    if (currentExpRef) {
      expObserver.observe(currentExpRef);
    }

    return () => {
      if (currentExpRef) {
        expObserver.unobserve(currentExpRef);
      }
    };
  }, []);

  // Intersection observer for projects section
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects(true);
          } else {
            setVisibleProjects(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentProjectsRef = projectsRef.current;
    if (currentProjectsRef) {
      projectObserver.observe(currentProjectsRef);
    }

    return () => {
      if (currentProjectsRef) {
        projectObserver.unobserve(currentProjectsRef);
      }
    };
  }, []);

  // Intersection observer for skills section
  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(true);
          } else {
            setVisibleSkills(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentSkillsRef = skillsRef.current;
    if (currentSkillsRef) {
      skillObserver.observe(currentSkillsRef);
    }

    return () => {
      if (currentSkillsRef) {
        skillObserver.unobserve(currentSkillsRef);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
      {/* Navigation */}
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        portfolioData={portfolioData}
      />

      {/* Hero Section */}
      <Hero
        darkMode={darkMode}
        displayedText={displayedText}
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        scrollToSection={scrollToSection}
        portfolioData={portfolioData}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-40 ${darkMode
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
              : 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-400/50'
            } text-white`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* About Section */}
      <AboutSection
        darkMode={darkMode}
        portfolioData={portfolioData}
      />

      {/* Skills Section */}
      <SkillsSection
        darkMode={darkMode}
        visibleSkills={visibleSkills}
        portfolioData={portfolioData}
        ref={skillsRef}
      />

      {/* Projects Section */}
      <ProjectsSection
        darkMode={darkMode}
        visibleProjects={visibleProjects}
        portfolioData={portfolioData}
        ref={projectsRef}
      />

      {/* Experience Section */}
      <ExperienceSection
        darkMode={darkMode}
        experienceVisible={experienceVisible}
        portfolioData={portfolioData}
        ref={experienceRef}
      />

      {/* Contact Section */}
      <ContactSection
        darkMode={darkMode}
        portfolioData={portfolioData}
      />

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        portfolioData={portfolioData}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes borderFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -300;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes shadowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(96, 165, 250, 0.2);
          }
          50% {
            box-shadow: 0 0 15px rgba(96, 165, 250, 0.3), 0 0 20px rgba(34, 211, 238, 0.15);
          }
        }
        
        @keyframes pulse-custom {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .ripple-button:hover::before,
        .ripple-button:hover::after {
          animation: ripple 1.5s ease-out infinite;
        }
        
        .ripple-button::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, transparent 70%);
          opacity: 0;
          z-index: 0;
        }
        
        .ripple-button::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%);
          opacity: 0;
          animation-delay: 0.5s;
          z-index: 0;
        }
        
        .ripple-button:hover::before {
          opacity: 1;
        }
        
        .ripple-button:hover::after {
          opacity: 1;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
};

export default App;