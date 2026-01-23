import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Toolbar } from './components/Toolbar.jsx';
import { QrModal } from './components/QrModal.jsx';
import { HeartedProjectsPage } from './components/HeartedProjectsPage.jsx';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import { getPortfolioData, texts, popupMessages } from './data/portfolioData';
import './App.css';
import './glass.css';
import './i18n';

export default function Portfolio() {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('about');


  const [darkMode, setDarkMode] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [aboutWordsVisible, setAboutWordsVisible] = useState({});
  const [aboutHeadingVisible, setAboutHeadingVisible] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [heartedProjects, setHeartedProjects] = useState([]);
  const [heartAnimating, setHeartAnimating] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const isHeartedPage = location.pathname === '/hearted';

  const portfolioUrl = useMemo(
    () => (typeof window !== 'undefined' ? window.location.origin : 'https://example.com'),
    []
  );
  const qrCodeUrl = useMemo(
    () => `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(portfolioUrl)}`,
    [portfolioUrl]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('heartedProjects');
      if (saved) {
        const parsed = JSON.parse(saved);
        setHeartedProjects(Array.isArray(parsed) ? parsed : []);
      }
    } catch (error) {
      console.error('Failed to load hearted projects:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('heartedProjects', JSON.stringify(heartedProjects));
    } catch (error) {
      console.error('Failed to save hearted projects:', error);
    }
  }, [heartedProjects]);

  const isHearted = (id) => heartedProjects.includes(id);

  const toggleHeart = (id) => {
    setHeartedProjects((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const [popupMessageIndex, setPopupMessageIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);
  const [isReading, setIsReading] = useState(false);

  const bioText = t('hero.description');

  const portfolioData = getPortfolioData(bioText);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPopupVisible(false);
      setTimeout(() => {
        setPopupMessageIndex((prev) => (prev + 1) % popupMessages.length);
        setPopupVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // popupMessages is a constant import, dependency not needed or can include if constant

  React.useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        const nextLength = displayedText.length + (isDeleting ? -1 : 1);
        setDisplayedText(currentText.substring(0, Math.max(nextLength, 0)));
      }, isDeleting ? 20 : 45);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]); // Removed 'texts' as it's an imported constant

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ignore minimal scroll changes (prevent "jitter" hiding during horizontal swipes)
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      if (currentScrollY < 80) {
        setToolbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setToolbarVisible(false);
      } else {
        setToolbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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







  // About section word animation effect
  const aboutTimeoutsRef = React.useRef([]);

  React.useEffect(() => {
    if (isHeartedPage) {
      return;
    }

    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any existing timeouts
            aboutTimeoutsRef.current.forEach(t => clearTimeout(t));
            aboutTimeoutsRef.current = [];

            // Animate heading first
            setAboutHeadingVisible(true);
            // Animate words one by one with staggered delay
            const wordCount = bioText?.split(' ').length || 50;
            for (let idx = 0; idx < wordCount; idx++) {
              const timeout = setTimeout(() => {
                setAboutWordsVisible(prev => ({ ...prev, [idx]: true }));
              }, idx * 80);
              aboutTimeoutsRef.current.push(timeout);
            }
          } else {
            // Clear timeouts and reset when scrolling away
            aboutTimeoutsRef.current.forEach(t => clearTimeout(t));
            aboutTimeoutsRef.current = [];
            setAboutHeadingVisible(false);
            setAboutWordsVisible({});
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    return () => {
      aboutObserver.disconnect();
      if (aboutSection) {
        aboutObserver.unobserve(aboutSection);
      }
    };
  }, [bioText, isHeartedPage]);

  const scrollToSection = (id) => {
    if (isHeartedPage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const handleShareLink = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        setShareSuccess(true);
      } else {
        await handleCopyLink();
        setCopySuccess(true);
      }
      setTimeout(() => {
        setCopySuccess(false);
        setShareSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  const handleDownloadQr = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'portfolio-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error('QR download failed:', error);
    }
  };

  const toggleReadAloud = () => {
    if (!window.speechSynthesis) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const sections = Array.from(document.querySelectorAll('section'));
    const text = sections.map((section) => section.innerText).join('\n\n').trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.cancel();
    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleHeartClick = (id) => {
    setHeartAnimating((prev) => ({ ...prev, [id]: true }));
    toggleHeart(id);
    setTimeout(() => {
      setHeartAnimating((prev) => ({ ...prev, [id]: false }));
    }, 600); // Animation duration
  };

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#050508] via-[#0a0a10] to-[#070709]' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
        <ScrollProgress darkMode={darkMode} />
        <CustomCursor darkMode={darkMode} />
        {/* Status Badge - Only show on main page */}
        {!isHeartedPage && <StatusBadge darkMode={darkMode} />}
        <ParticleBackground darkMode={darkMode} />





        {/* Floating Toolbar */}
        <Toolbar
          toolbarVisible={toolbarVisible}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          toggleReadAloud={toggleReadAloud}
          isReading={isReading}
          handleCopyLink={handleCopyLink}
          copySuccess={copySuccess}
          handleShareLink={handleShareLink}
          shareSuccess={shareSuccess}
          setQrOpen={setQrOpen}
        />

        <QrModal
          qrOpen={qrOpen}
          setQrOpen={setQrOpen}
          portfolioUrl={portfolioUrl}
          qrCodeUrl={qrCodeUrl}
          handleDownloadQr={handleDownloadQr}
        />

        <AnimatePresence mode="wait">
          {isHeartedPage && (
            <motion.div
              key="hearted-page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <HeartedProjectsPage
                darkMode={darkMode}
                navigate={navigate}
                portfolioData={portfolioData}
                isHearted={isHearted}
                handleHeartClick={handleHeartClick}
                heartAnimating={heartAnimating}
              />
            </motion.div>
          )}

          {!isHeartedPage && (
            <motion.div
              key="main-page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Hero Section */}
              <Hero
                portfolioData={portfolioData}
                darkMode={darkMode}
                displayedText={displayedText}
                popupVisible={popupVisible}
                popupMessages={popupMessages}
                popupMessageIndex={popupMessageIndex}
                chatOpen={chatOpen}
                setChatOpen={setChatOpen}
                scrollToSection={scrollToSection}
              />

              {/* Scroll to Top Button */}
              {showScrollTop && (
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
              )}

              {/* About Section */}
              <About
                portfolioData={portfolioData}
                darkMode={darkMode}
                aboutHeadingVisible={aboutHeadingVisible}
                aboutWordsVisible={aboutWordsVisible}
              />

              {/* Skills Section */}
              <Skills portfolioData={portfolioData} darkMode={darkMode} />

              {/* Projects Section */}
              <Projects
                portfolioData={portfolioData}
                darkMode={darkMode}
                isHearted={isHearted}
                handleHeartClick={handleHeartClick}
                heartAnimating={heartAnimating}
              />

              {/* Certificates Section */}
              <Certificates portfolioData={portfolioData} darkMode={darkMode} />

              {/* Experience Section */}
              <Experience portfolioData={portfolioData} darkMode={darkMode} />

              {/* Contact Section */}
              <Contact portfolioData={portfolioData} darkMode={darkMode} />

              {/* Footer */}
              <Footer portfolioData={portfolioData} darkMode={darkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
