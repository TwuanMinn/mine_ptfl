import React, { useState, useMemo } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, ChevronDown, Sun, Moon, ArrowUp } from 'lucide-react';
import ChatBot from './ChatBot';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [experienceVisible, setExperienceVisible] = useState(false);
  const experienceRef = React.useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(false);
  const projectsRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const [darkMode, setDarkMode] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const texts = useMemo(() => [
    "A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
    "I am committed to continually setting higher standards for myself to expand my knowledge and expertise in this domain. I am willing to learn new technology stacks or take on different roles as needed. I look forward to the opportunity to join your team and contribute with full dedication."
  ], []);

  React.useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 15 : 50;
    const pauseTime = isDeleting ? 500 : 3000;

    if (!isDeleting && displayedText === currentText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentText.substring(0, displayedText.length - 1)
          : currentText.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  React.useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          });
        },
        { threshold: 0.5 }
      );
      if (element) observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Scroll to top listener
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  const portfolioData = {
    name: "Nguyễn Huỳnh Minh Tuấn",
    title: "Software Engineer",
    bio: "A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
    email: "twuanminn47@gmail.com",
    github: "https://github.com/twuanmin",
    linkedin: "https://www.linkedin.com/in/twuan-min-a98356344/",

    skills: [
      "JavaScript", "TypeScript", "Java", "Python",
      "ReactJS", "NextJS",
      "NodeJS (Express, NestJS)", "PostgreSQL",
      "Git", "Firebase", "Machine Learning"
    ],

    skillsProgress: [
      { name: "React Native", level: 87 },
      { name: "GitHub", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Tailwind CSS", level: 93 }
    ],

    projects: [
      {
        title: "Habit Tracking Mobile Application",
        description: "Native Android app with Firebase backend. Features habit creation, monitoring, reminders, and progress visualization with intuitive UI design and real-time data sync.",
        link: "#"
      },
      {
        title: "LSTM Machine Translation (EN → FR)",
        description: "LSTM Encoder-Decoder with Attention mechanism for English-French translation using PyTorch. Handled ML workflow including preprocessing, model training, and performance evaluation.",
        link: "#"
      },
      {
        title: "Resume Portfolio Website",
        description: "Responsive portfolio built with React and Tailwind CSS. Features AI-powered chatbot for visitor engagement, smooth animations, dark/light mode, and backend API integration.",
        link: "#"
      }
    ],

    experience: [
      {
        role: "IT Support Volunteer",
        period: "February 2022 - May 2022",
        description: "Provided technical support for software and hardware issues. Assisted in setting up computer systems, network configurations, and created troubleshooting documentation."
      },
      {
        role: "English IELTS Teacher",
        period: "March 2023 - March 2024",
        description: "Delivered IELTS preparation lessons across all four skills. Developed exam-focused materials and provided personalized instruction to help students achieve higher band scores."
      }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-black via-slate-900 to-black' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md z-50 border-b ${darkMode ? 'border-blue-600/20' : 'border-blue-200/50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                  {portfolioData.name}
                </span>
                <p className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'} flex items-center gap-1`}>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Open for work
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center flex-1 justify-end">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <div key={item} className="relative group pb-1">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
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
                  />
                </div>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30 hover:bg-blue-800/40' : 'bg-blue-100 hover:bg-blue-200'} transition-all`}
              >
                {darkMode ? <Sun className="text-blue-300" size={20} /> : <Moon className="text-blue-600" size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 ${darkMode ? 'text-blue-300 hover:text-white hover:bg-blue-900/50' : 'text-blue-600 hover:text-cyan-600 hover:bg-blue-100'} capitalize`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 ${darkMode ? 'text-blue-300 hover:bg-blue-900/50' : 'text-blue-600 hover:bg-blue-100'}`}
              >
                {darkMode ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${darkMode ? 'from-blue-400 via-cyan-300 to-white' : 'from-blue-500 via-blue-400 to-blue-500'} rounded-full blur-xl ${darkMode ? 'opacity-80' : 'opacity-60'}`} style={{ animation: `pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, animationDelay: '0s' }}></div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${darkMode ? 'from-blue-600 via-cyan-500 to-blue-600' : 'from-blue-600 via-blue-500 to-blue-600'} rounded-full blur-2xl ${darkMode ? 'opacity-60' : 'opacity-40'}`} style={{ animation: `pulse-custom 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`, animationDelay: '0s' }}></div>
              <div className={`relative w-48 h-48 rounded-full ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black border-4 border-slate-950' : 'bg-gradient-to-br from-white via-blue-50 to-blue-100 border-4 border-blue-200'} flex items-center justify-center shadow-2xl overflow-hidden`}>
                <img src="/jonasptfl.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-blue-200 via-white to-blue-200' : 'from-blue-700 via-blue-500 to-blue-700'} bg-clip-text text-transparent`} style={{ animation: `pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, animationDelay: '0s' }}>
            {portfolioData.name}
          </h1>
          <p className={`text-2xl md:text-3xl ${darkMode ? 'text-blue-300' : 'text-blue-600'} mb-8 font-semibold`}>
            {portfolioData.title}
          </p>
          <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-12 max-w-2xl mx-auto min-h-32`}>
            {displayedText}
            <span className={`inline-block w-0.5 h-5 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} ml-1`} style={{ animation: `pulse-custom 1s cubic-bezier(0.4, 0, 0.6, 1) infinite`, animationDelay: '0s' }}></span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className={`btn-ripple relative overflow-visible ${darkMode ? 'bg-slate-950/70 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'bg-blue-50/70 border-2 border-blue-300/70 shadow-lg shadow-blue-400/30'} text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300' : 'hover:shadow-blue-500/60 hover:border-blue-400'}`}
              style={{
                transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode
                  ? 'linear-gradient(to left, rgb(15, 40, 140), rgb(15, 40, 140))'
                  : 'linear-gradient(to left, rgb(25, 70, 200), rgb(25, 70, 200))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
              }}></span>
              <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)'
              }}></span>
              <span className="relative z-10">Get In Touch</span>
            </button>
            <a
              href="/dev.cv.pdf"
              download
              className={`btn-ripple relative overflow-visible ${darkMode ? 'bg-slate-900/90 border-2 border-blue-600/50' : 'bg-white border-2 border-blue-400'} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur ${darkMode ? 'hover:shadow-lg hover:shadow-blue-500/50' : 'hover:shadow-lg hover:shadow-blue-400/50'}`}
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode
                  ? 'linear-gradient(to right, rgb(29, 78, 216), rgb(34, 211, 238))'
                  : 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))';
                e.currentTarget.style.borderColor = darkMode ? 'rgb(34, 211, 238)' : 'rgb(59, 130, 246)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgb(255, 255, 255)';
                e.currentTarget.style.borderColor = darkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgb(59, 130, 246)';
                e.currentTarget.style.color = darkMode ? 'white' : 'rgb(59, 130, 246)';
              }}
            >
              <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
              }}></span>
              <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
              }}></span>
              <span className={`relative z-10 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-blue-600'}`}>
                Download CV
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex justify-center mt-8">
            {!chatOpen && (
              <button
                onClick={() => setChatOpen(true)}
                className={`relative overflow-hidden ${darkMode ? 'bg-slate-900/40 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'bg-blue-50/70 border-2 border-blue-300/70 shadow-lg shadow-blue-400/30'} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300 hover:shadow-2xl' : 'hover:shadow-blue-500/60 hover:shadow-xl hover:border-blue-400'}`}
                style={{
                  animation: darkMode ? 'shadowPulse 3s ease-in-out infinite' : 'none'
                }}
              >
                <span className="relative z-10">Chat with My AI Agent</span>
              </button>
            )}
          </div>

          {/* Chat Widget Inline */}
          {chatOpen && <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />}

          <div className="mt-16 animate-bounce">
            <ChevronDown className={`mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={48} strokeWidth={3} />
          </div>
        </div>
      </section>

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
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>About Me</h2>
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

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-black/50' : 'bg-blue-50/50'}`} ref={skillsRef}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Skills</h2>

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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4" ref={projectsRef}>
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

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-b from-slate-950/80 via-black/50 to-slate-950/80' : 'bg-blue-50/50'}`} ref={experienceRef}>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>CONTACT</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                    background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderFlow 3s linear infinite'
                  }}></div>
                  <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                    <Mail className={darkMode ? "text-cyan-400" : "text-blue-600"} size={28} />
                  </div>
                </div>
                <div>
                  <a href={`mailto:${portfolioData.email}`} className={`text-xl ${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} transition-colors`}>
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                    background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderFlow 3s linear infinite',
                    animationDelay: '0.3s'
                  }}></div>
                  <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                    <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>District 7, Ho Chi Minh City</p>
                  <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>Vietnam</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                    background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderFlow 3s linear infinite',
                    animationDelay: '0.6s'
                  }}></div>
                  <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                    <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <a href="tel:+84934159597" className={`${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} text-lg transition-colors`}>
                    +84 93 415 9597
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} backdrop-blur flex items-center justify-center border ${darkMode ? 'border-blue-800/30 hover:border-cyan-600' : 'border-blue-200 hover:border-blue-400'} transition-all hover:scale-110`}
                >
                  <Github className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} backdrop-blur flex items-center justify-center border ${darkMode ? 'border-blue-800/30 hover:border-cyan-600' : 'border-blue-200 hover:border-blue-400'} transition-all hover:scale-110`}
                >
                  <Linkedin className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
                </a>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-900/60 border-blue-700/40' : 'bg-white/80 border-blue-300'} backdrop-blur rounded-2xl p-8 border-2 transition-all duration-300`}>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors resize-none`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn-ripple relative overflow-visible w-full ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white font-semibold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-[1.02] ${darkMode ? 'shadow-lg shadow-cyan-500/30' : 'shadow-lg shadow-blue-400/30'}`}
                  style={{
                    transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = darkMode
                      ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246))'
                      : 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = darkMode
                      ? 'linear-gradient(to right, rgb(37, 99, 235), rgb(34, 211, 238))'
                      : 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))';
                  }}
                >
                  <span className="ripple-wave-1 absolute inset-0 rounded-xl pointer-events-none" style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
                  }}></span>
                  <span className="ripple-wave-2 absolute inset-0 rounded-xl pointer-events-none" style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
                  }}></span>
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-blue-900/30 bg-black/90' : 'border-blue-200 bg-blue-50/50'}`}>
        <p className={`text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          © 2025 {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
} rgb(25, 70, 200)';
                  }}
onMouseLeave = {(e) => {
  e.currentTarget.style.background = 'transparent';
}}
                >
                  <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
                  }}></span>
                  <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)'
                  }}></span>
                  <span className="relative z-10">{t('hero.getInTouch')}</span>
                </button >
  <a
    href="/dev.cv.pdf"
    download
    className={`btn-ripple relative overflow-visible ${darkMode ? 'bg-slate-900/40 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50 text-white' : 'bg-white/90 border-2 border-blue-500/70 shadow-lg shadow-blue-500/40 text-blue-900'} px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300 hover:shadow-2xl' : 'hover:shadow-blue-600/60 hover:border-blue-600 hover:shadow-xl'}`}
    style={{
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = darkMode
        ? 'rgba(88, 28, 135, 0.55)'
        : 'rgba(237, 233, 254, 0.95)';
      e.currentTarget.style.borderColor = darkMode ? 'rgb(196, 181, 253)' : 'rgb(167, 139, 250)';
      const icon = e.currentTarget.querySelector('.robot-icon');
      if (icon) icon.style.color = darkMode ? 'rgb(196, 181, 253)' : 'rgb(124, 58, 237)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = darkMode
        ? 'rgba(15, 23, 42, 0.6)'
        : 'rgba(255, 255, 255, 0.9)';
      e.currentTarget.style.borderColor = darkMode ? 'rgba(96, 165, 250, 0.7)' : 'rgba(59, 130, 246, 0.6)';
      e.currentTarget.style.color = darkMode ? 'white' : 'rgb(30, 64, 175)';
      const icon = e.currentTarget.querySelector('.robot-icon');
      if (icon) icon.style.color = darkMode ? 'white' : 'rgb(30, 64, 175)';
    }}
  >
    <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)'
    }}></span>
    <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{
      background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 70%)'
    }}></span>
    <span className={`relative z-10 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
      {i18n.t('hero.downloadCV')}
      <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    </span>
  </a>
              </div >
  <div className="flex justify-center mt-8">
    {!chatOpen && (
      <button
        onClick={() => setChatOpen(true)}
        className={`relative overflow-hidden ${darkMode ? 'bg-slate-900/40 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50 text-white' : 'bg-blue-200/80 border-2 border-blue-500/60 shadow-lg shadow-blue-400/30 text-blue-800'} px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300 hover:shadow-2xl' : 'hover:shadow-blue-500/60 hover:shadow-xl hover:border-blue-500'}`}
        style={{
          animation: darkMode
            ? 'shadowPulse 3s ease-in-out infinite, fadePulse 2.5s ease-in-out infinite'
            : 'fadePulse 2.5s ease-in-out infinite'
        }}
        onMouseEnter={(e) => {
          const icon = e.currentTarget.querySelector('.chat-robot-icon');
          e.currentTarget.style.background = darkMode
            ? 'rgba(192, 132, 252, 0.95)'
            : 'rgba(233, 213, 255, 1)';
          e.currentTarget.style.borderColor = darkMode ? 'rgb(233, 213, 255)' : 'rgb(216, 180, 254)';
          e.currentTarget.style.boxShadow = darkMode ? '0 0 40px rgba(192, 132, 252, 0.8), 0 0 80px rgba(167, 139, 250, 0.5)' : '0 0 30px rgba(192, 132, 252, 0.6)';
          if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
        }}
        onMouseLeave={(e) => {
          const icon = e.currentTarget.querySelector('.chat-robot-icon');
          e.currentTarget.style.background = '';
          e.currentTarget.style.borderColor = '';
          e.currentTarget.style.boxShadow = '';
          if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <BotMessageSquare className="chat-robot-icon w-6 h-6 transition-transform" />
          Chat with My AI Agent
        </span>
      </button>
    )}
  </div>

{/* Chat Widget Inline */ }
{ chatOpen && <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} /> }

<div className="mt-16 animate-bounce">
  <ChevronDown className={`mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={48} strokeWidth={3} />
</div>
            </div >
          </section >

  {/* Scroll to Top Button */ }
{
  showScrollTop && (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 sm:bottom-8 right-4 sm:right-8 left-auto p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-[60] animate-bounce ${darkMode
        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
        : 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/60 ring-2 ring-blue-200/80'
        } text-white`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  )
}

{/* About Section */ }
          <section id="about" className="py-20 px-4">
            <Reveal width="100%">
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
                  {"About Me".split('').map((char, idx) => (
                    <span
                      key={idx}
                      className="inline-block"
                      style={{
                        opacity: aboutHeadingVisible ? 1 : 0,
                        transform: aboutHeadingVisible
                          ? 'translateY(0px) rotateX(0deg) scale(1)'
                          : 'translateY(-40px) rotateX(90deg) scale(0.5)',
                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s`,
                        display: char === ' ' ? 'inline' : 'inline-block',
                        width: char === ' ' ? '0.3em' : 'auto',
                        transformOrigin: 'bottom center'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
                <div className={`relative ${darkMode ? 'bg-slate-900/40' : 'bg-blue-50/70'} rounded-lg p-8 border-2 ${darkMode ? 'border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'border-blue-300/70 shadow-lg shadow-blue-400/30'} transition-all duration-500 hover:shadow-2xl ${darkMode ? 'hover:shadow-blue-300/80 hover:border-blue-300 hover:bg-slate-900/50' : 'hover:shadow-blue-400/50 hover:border-blue-400'}`} style={{ animation: 'shadowPulse 3s ease-in-out infinite' }}>
                  <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-lg mb-6`}>
                    {portfolioData.bio.split(' ').map((word, idx) => (
                      <span key={idx} className="inline-block mr-1" style={{
                        opacity: aboutWordsVisible[idx] ? 1 : 0,
                        transform: aboutWordsVisible[idx] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
                        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
                      }}>
                        {word}
                      </span>
                    ))}
                  </p>
                  <div className={`space-y-3 ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
                    <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Education:</strong> TDTU - Ton Duc Thang University (2021 - 2025)</p>
                    <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Major:</strong> Software Engineering</p>
                    <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Location:</strong> District 7, Ho Chi Minh City, Vietnam</p>
                    <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>IELTS:</strong> 7.0 (L: 7.5, R: 6.0, S: 6.0, W: 7.0)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

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

        @keyframes fadePulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.75;
          }
        }

        @keyframes liquidFloat1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(18%, -12%) scale(1.12); }
          66% { transform: translate(-14%, 14%) scale(0.92); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes liquidFloat2 {
          0% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-18%, 12%) scale(1.08); }
          60% { transform: translate(10%, -16%) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes liquidFloat3 {
          0% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(14%, -14%) scale(1.1); }
          70% { transform: translate(-16%, 10%) scale(0.94); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes skillsMarquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .skills-marquee {
          animation: skillsMarquee 7s linear infinite;
        }

        @keyframes levitateForm {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(6px, -12px) rotate(0.6deg); }
          50% { transform: translate(-6px, -26px) rotate(-0.6deg); }
          80% { transform: translate(4px, -10px) rotate(0.4deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        @keyframes levitateShadow {
          0% { box-shadow: 0 16px 32px rgba(0,0,0,0.35), 0 0 0 rgba(34,211,238,0.0); }
          50% { box-shadow: 0 36px 70px rgba(0,0,0,0.6), 0 0 55px rgba(34,211,238,0.55); }
          100% { box-shadow: 0 16px 32px rgba(0,0,0,0.35), 0 0 0 rgba(34,211,238,0.0); }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .toolbar-btn {
          border: 1px solid transparent;
        }

        .toolbar-btn:hover {
          color: #ffffff;
          background: rgba(34, 211, 238, 0.12);
          border-color: rgba(34, 211, 238, 0.6);
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.6), 0 0 18px rgba(255, 255, 255, 0.4);
        }



        @keyframes radarPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.7), 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(96, 165, 250, 0), 0 0 0 12px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(96, 165, 250, 0), 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes dotSwap {
          0%, 45% {
            opacity: 0;
            transform: scale(0.85);
          }
          50%, 95% {
            opacity: 1;
            transform: scale(1.15);
          }
          100% {
            opacity: 0;
            transform: scale(0.85);
          }
        }

        @keyframes labelSwap {
          0%, 45% {
            opacity: 0;
            transform: translateY(6px);
          }
          50%, 95% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-6px);
          }
        }

        @keyframes colorShift {
          0% {
            color: rgba(219, 234, 254, 1);
          }
          25% {
            color: rgba(34, 211, 238, 1);
          }
          50% {
            color: rgba(96, 165, 250, 1);
          }
          75% {
            color: rgba(59, 130, 246, 1);
          }
          100% {
            color: rgba(219, 234, 254, 1);
          }
        }

        @keyframes heartPageFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes heartBadgePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(236,72,153,0.0);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 22px rgba(236,72,153,0.35);
          }
        }

        @keyframes heartCardFloat {
          0% { transform: translateY(6px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }

        .heart-page {
          animation: heartPageFade 0.6s ease-out both;
        }

        .heart-page-header {
          animation: heartPageFade 0.7s ease-out both;
        }

        .heart-badge {
          animation: heartBadgePulse 2.2s ease-in-out infinite;
        }

        .heart-card {
          animation: heartCardFloat 0.6s ease-out both;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .heart-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 16px 40px rgba(236,72,153,0.2);
          border-color: rgba(236, 72, 153, 0.45);
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

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.2); }
          20%, 40% { transform: scale(0.95); }
          50% { transform: scale(1.1); }
          60%, 80% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 0.6s cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>

{/* Skills Section */ }
<section id="skills" className={`relative overflow-hidden py-20 px-4 ${darkMode ? 'bg-black/50' : 'bg-blue-50/50'}`} ref={skillsRef}>
  {/* Flowing Liquid Blur Background (Skills only) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-[18rem] h-[18rem] sm:w-[26rem] sm:h-[26rem] rounded-full blur-[70px] sm:blur-[90px] opacity-85" style={{
      background: darkMode ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.45)',
      animation: 'liquidFloat1 12s ease-in-out infinite'
    }} />
    <div className="absolute top-6 -right-20 sm:top-10 sm:-right-32 w-[16rem] h-[16rem] sm:w-[24rem] sm:h-[24rem] rounded-full blur-[75px] sm:blur-[95px] opacity-85" style={{
      background: darkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.45)',
      animation: 'liquidFloat2 14s ease-in-out infinite'
    }} />
    <div className="absolute -bottom-24 left-10 sm:-bottom-32 sm:left-1/4 w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem] rounded-full blur-[80px] sm:blur-[100px] opacity-80" style={{
      background: darkMode ? 'rgba(99, 102, 241, 0.55)' : 'rgba(99, 102, 241, 0.4)',
      animation: 'liquidFloat3 16s ease-in-out infinite'
    }} />
  </div>
  <Reveal width="100%">
    <div className="max-w-4xl mx-auto">
      <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Skills</h2>

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

      {/* Logo Marquee */}
      <h3 className={`text-xl font-semibold mb-8 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Other Skills</h3>
      <div className={`relative overflow-hidden rounded-3xl border ${darkMode ? 'border-blue-800/50' : 'border-blue-400'} ${darkMode ? 'bg-slate-900/55' : 'bg-white'} backdrop-blur shadow-sm ${darkMode ? '' : 'shadow-blue-200 ring-1 ring-blue-200/80'}`}>
        <div className={`skills-marquee flex flex-col gap-6 py-4 sm:py-6 px-3 sm:px-4 ${visibleSkills ? 'opacity-100' : 'opacity-0'}`}>
          {[0, 1].map(row => (
            <div key={row} className="flex gap-6 sm:gap-8 w-max" style={{ direction: 'rtl', animation: 'marquee-rtl 0.7s linear infinite' }}>
              {[...skillsLogos, ...skillsLogos].filter((_, i) => i % 2 === row).map((skill, index) => (
                <div
                  key={`${skill.name}-${row}-${index}`}
                  className={`group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border ${darkMode ? 'border-blue-700/60 bg-slate-900/70' : 'border-blue-500 border-2 bg-white'} shadow-[0_10px_22px_rgba(59,130,246,0.12)] hover:-translate-y-2 hover:shadow-[0_14px_28px_rgba(59,130,246,0.2)] transition duration-300`}
                  title={skill.name}
                  style={{
                    background: darkMode
                      ? 'linear-gradient(160deg, rgba(12, 20, 37, 0.85), rgba(30, 58, 138, 0.22))'
                      : 'linear-gradient(160deg, rgba(255, 255, 255, 1), rgba(219, 234, 254, 0.85))',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    className="absolute -inset-0.5 rounded-2xl opacity-50 blur-sm"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(120deg, rgba(59,130,246,0.24), rgba(96,165,250,0.2), rgba(59,130,246,0.24))'
                        : 'linear-gradient(120deg, rgba(59,130,246,0.2), rgba(147,197,253,0.22), rgba(59,130,246,0.2))'
                    }}
                  />
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="relative w-8 h-8 sm:w-11 sm:h-11 object-contain drop-shadow-[0_10px_16px_rgba(59,130,246,0.28)] group-hover:drop-shadow-[0_14px_20px_rgba(59,130,246,0.38)]"
                    loading="lazy"
                    style={{ transform: 'translateZ(20px)', filter: darkMode ? 'brightness(1.12) saturate(1.05)' : 'brightness(1.25) saturate(1.1) drop-shadow(0 2px 2px rgba(30,64,175,0.2))' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={`absolute inset-y-0 left-0 w-16 sm:w-24 ${darkMode ? 'from-slate-900/90' : 'from-white'} bg-gradient-to-r to-transparent pointer-events-none`} />
        <div className={`absolute inset-y-0 right-0 w-16 sm:w-24 ${darkMode ? 'from-slate-900/90' : 'from-white'} bg-gradient-to-l to-transparent pointer-events-none`} />
      </div>
    </div>
  </Reveal>
</section>

{/* Projects Section */ }
<section id="projects" className="py-20 px-4" ref={projectsRef}>
  <Reveal width="100%">
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative group perspective-1000 transition-all duration-700 ${visibleProjects
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
            style={{
              transitionDelay: visibleProjects ? `${index * 200}ms` : '0ms'
            }}
          >
            <div className="relative transform-style-3d transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50 blur-sm group-hover:opacity-100 transition duration-500`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite',
                animationDelay: `${index * 0.3}s`
              }}></div>
              <div className={`relative ${darkMode ? 'bg-slate-900/80 hover:bg-slate-900/95' : 'bg-white/90'} backdrop-blur-xl rounded-lg p-6 border-2 ${darkMode ? 'border-blue-700/60 hover:border-cyan-400' : 'border-blue-300 hover:border-blue-500'} h-full flex flex-col`}>
                <button
                  onClick={(e) => { e.stopPropagation(); handleHeartClick(project.id); }}
                  className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full border ${isHearted(project.id) ? 'border-pink-300/70 text-pink-200 bg-pink-400/15' : 'border-white/25 text-white/90 bg-white/10'} flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_20px_rgba(236,72,153,0.35)] ${heartAnimating[project.id] ? 'animate-heartbeat' : ''}`}
                  aria-label="heart-project"
                >
                  <Heart size={16} className={isHearted(project.id) ? 'fill-current' : ''} />
                </button>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'} mb-3`}>{project.title}</h3>
                <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4 flex-grow`}>{project.description}</p>
                <a
                  href={project.link}
                  className={`inline-flex items-center ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} mt-auto`}
                >
                  View Project <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
</section>

{/* Certificates Section */ }
<section id="certificates" className={`py-20 px-4 ${darkMode ? 'bg-black/40' : 'bg-blue-50/60'}`}>
  <Reveal width="100%">
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certificates.map((cert, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl border ${darkMode ? 'border-blue-500/40 bg-slate-900/70' : 'border-blue-200 bg-white/90'} backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:shadow-[0_16px_40px_rgba(34,211,238,0.35),0_0_18px_rgba(255,255,255,0.25)]`}
          >
            <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-200/50'} blur-2xl`} />
            <div className="relative">
              <p className={`text-sm font-semibold ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>{cert.issuer}</p>
              <h3 className={`mt-2 text-xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>{cert.title}</h3>
              <p className={`mt-2 text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{cert.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-xs font-semibold ${darkMode ? 'text-blue-200/80' : 'text-blue-600/80'}`}>{cert.date}</span>
                <a
                  href={cert.link}
                  className={`text-sm font-semibold ${darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-600 hover:text-blue-700'} inline-flex items-center gap-2`}
                >
                  View <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Reveal>
</section>

{/* Experience Section */ }
<section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-b from-slate-950/80 via-black/50 to-slate-950/80' : 'bg-blue-50/50'}`} ref={experienceRef}>
  <Reveal width="100%">
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
                <div className={`relative ${darkMode ? 'bg-gradient-to-br from-slate-900/60 to-black/40' : 'bg-blue-50/70'} rounded-2xl p-6 border-2 ${darkMode ? 'border-blue-400/70 shadow-2xl shadow-blue-400/50' : 'border-blue-300/70 shadow-lg shadow-blue-400/30'} transition-all duration-300 hover:scale-[1.02] hover:translate-x-2`} style={{ animation: darkMode ? 'shadowPulse 3s ease-in-out infinite' : 'none' }}>
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
  </Reveal>
</section>

{/* Contact Section */ }
<section id="contact" className="py-20 px-4">
  <Reveal width="100%">
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>CONTACT</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite'
              }}></div>
              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                style={contactBadgeStyle(darkMode)}
              >
                <Mail className={darkMode ? "text-cyan-400" : "text-blue-600"} size={28} />
              </div>
            </div>
            <div>
              <a href={`mailto:${portfolioData.email}`} className={`text-xl ${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} transition-colors`}>
                {portfolioData.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite',
                animationDelay: '0.3s'
              }}></div>
              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                style={contactBadgeStyle(darkMode)}
              >
                <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>District 7, Ho Chi Minh City</p>
              <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>Vietnam</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderFlow 3s linear infinite',
                animationDelay: '0.6s'
              }}></div>
              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                style={contactBadgeStyle(darkMode)}
              >
                <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div>
              <a href="tel:+84934159597" className={`${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} text-lg transition-colors`}>
                +84 93 415 9597
              </a>
            </div>
          </div>

          <div className="flex gap-4 pt-64 mt-36">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={contactIconStyle(darkMode)}
            >
              <Github className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={contactIconStyle(darkMode)}
            >
              <Linkedin className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
            </a>
            <a
              href={portfolioData.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={contactIconStyle(darkMode)}
            >
              <Figma className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
            </a>
            <a
              href={portfolioData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={contactIconStyle(darkMode)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                className={darkMode ? "text-cyan-400" : "text-blue-600"}
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.36 0 11.99c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63a11.95 11.95 0 0 0 5.8 1.48h.01c6.63 0 11.99-5.37 11.99-12 0-3.2-1.24-6.2-3.48-8.37ZM12 21.85h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.58-.23-.37A9.9 9.9 0 1 1 21.9 11.85 9.9 9.9 0 0 1 12 21.85Zm5.44-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
              </svg>
            </a>
            <a
              href={portfolioData.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
              style={contactIconStyle(darkMode)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                className={darkMode ? "text-cyan-400" : "text-blue-600"}
                aria-hidden="true"
              >
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.21.375-.444.864-.608 1.249a18.36 18.36 0 0 0-5.487 0 12.61 12.61 0 0 0-.617-1.249.073.073 0 0 0-.074-.035 19.736 19.736 0 0 0-4.885 1.515.066.066 0 0 0-.03.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.046.074.074 0 0 0 .081-.027c.462-.63.874-1.295 1.226-1.994a.072.072 0 0 0-.038-.098 12.6 12.6 0 0 1-1.872-.9.073.073 0 0 1-.007-.122c.125-.094.25-.192.369-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.245.197.37.291a.073.073 0 0 1-.006.122 12.3 12.3 0 0 1-1.873.9.072.072 0 0 0-.038.098c.36.699.773 1.364 1.225 1.994a.073.073 0 0 0 .081.027 19.82 19.82 0 0 0 6.002-3.046.077.077 0 0 0 .031-.056c.5-5.177-.838-9.673-3.548-13.662a.061.061 0 0 0-.031-.027ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.095 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-slate-900/70 border-blue-700/50' : 'bg-white/90 border-blue-300/70'} backdrop-blur rounded-3xl p-8 border-2 transition-all duration-300`} style={{
          background: darkMode
            ? 'linear-gradient(160deg, rgba(15,23,42,0.9), rgba(2,6,23,0.88))'
            : 'linear-gradient(160deg, rgba(255,255,255,0.95), rgba(239,246,255,0.85))',
          boxShadow: darkMode
            ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 36px rgba(0,0,0,0.4)'
            : 'inset 0 1px 0 rgba(255,255,255,0.7), 0 18px 36px rgba(59,130,246,0.16)',
          animation: 'levitateForm 4.5s ease-in-out infinite, levitateShadow 4.5s ease-in-out infinite'
        }}>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/70 border-blue-700/70' : 'bg-white/80 border-blue-400/70'} border-2 rounded-2xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-900 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-cyan-400' : 'focus:border-blue-600'} transition-colors`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(180deg, rgba(15,23,42,0.8), rgba(2,6,23,0.85))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,246,255,0.85))',
                  boxShadow: darkMode
                    ? 'inset 0 2px 6px rgba(0,0,0,0.45)'
                    : 'inset 0 2px 6px rgba(59,130,246,0.12)'
                }}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/70 border-blue-700/70' : 'bg-white/80 border-blue-400/70'} border-2 rounded-2xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-900 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-cyan-400' : 'focus:border-blue-600'} transition-colors`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(180deg, rgba(15,23,42,0.8), rgba(2,6,23,0.85))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,246,255,0.85))',
                  boxShadow: darkMode
                    ? 'inset 0 2px 6px rgba(0,0,0,0.45)'
                    : 'inset 0 2px 6px rgba(59,130,246,0.12)'
                }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/70 border-blue-700/70' : 'bg-white/80 border-blue-400/70'} border-2 rounded-2xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-900 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-cyan-400' : 'focus:border-blue-600'} transition-colors`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(180deg, rgba(15,23,42,0.8), rgba(2,6,23,0.85))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,246,255,0.85))',
                  boxShadow: darkMode
                    ? 'inset 0 2px 6px rgba(0,0,0,0.45)'
                    : 'inset 0 2px 6px rgba(59,130,246,0.12)'
                }}
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/70 border-blue-700/70' : 'bg-white/80 border-blue-400/70'} border-2 rounded-2xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-900 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-cyan-400' : 'focus:border-blue-600'} transition-colors resize-none`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(180deg, rgba(15,23,42,0.8), rgba(2,6,23,0.85))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,246,255,0.85))',
                  boxShadow: darkMode
                    ? 'inset 0 2px 6px rgba(0,0,0,0.45)'
                    : 'inset 0 2px 6px rgba(59,130,246,0.12)'
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn-ripple relative overflow-visible w-full ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] ${darkMode ? 'shadow-lg shadow-cyan-500/30' : 'shadow-lg shadow-blue-400/30'}`}
              style={{
                transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: darkMode
                  ? 'inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 24px rgba(6,182,212,0.28)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.45), 0 10px 24px rgba(59,130,246,0.28)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode
                  ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246))'
                  : 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode
                  ? 'linear-gradient(to right, rgb(37, 99, 235), rgb(34, 211, 238))'
                  : 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))';
              }}
            >
              <span className="ripple-wave-1 absolute inset-0 rounded-xl pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
              }}></span>
              <span className="ripple-wave-2 absolute inset-0 rounded-xl pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
              }}></span>
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Reveal>
</section>

{/* Footer */ }
<footer className={`py-8 px-4 border-t ${darkMode ? 'border-blue-900/30 bg-black/90' : 'border-blue-200 bg-blue-50/50'}`}>
  <p className={`text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
    © 2025 {portfolioData.name}. All rights reserved.
  </p>
</footer>
        </>
      )
      }
    </div >
  );
}