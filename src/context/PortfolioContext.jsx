import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [chatOpen, setChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Typing effect texts
  const texts = [
    "A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
    "I am committed to continually setting higher standards for myself to expand my knowledge and expertise in this domain. I am willing to learn new technology stacks or take on different roles as needed. I look forward to the opportunity to join your team and contribute with full dedication."
  ];

  // Typing effect
  useEffect(() => {
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

  // Intersection observer for active section
  useEffect(() => {
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
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Portfolio data
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

  const value = {
    darkMode,
    setDarkMode,
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    setActiveSection,
    chatOpen,
    setChatOpen,
    showScrollTop,
    setShowScrollTop,
    displayedText,
    scrollToSection,
    scrollToTop,
    portfolioData
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;