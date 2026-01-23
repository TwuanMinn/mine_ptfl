import React, { useState, useMemo, useEffect, lazy, Suspense, useCallback, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Error Boundary
import ErrorBoundary, { SectionErrorBoundary } from './components/ErrorBoundary';

// Utilities
import { initCodeProtection } from './utils/codeProtection';
import { storage, copyToClipboard, shareContent, downloadFile } from './utils/helpers';
import { STORAGE_KEYS, TIMING, NAV_SECTIONS, API_ENDPOINTS } from './constants';

// Critical components loaded immediately
import LoadingScreen from './components/LoadingScreen.jsx';
import { Toolbar } from './components/Toolbar.jsx';
import { QrModal } from './components/QrModal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';

// Data
import { getPortfolioData, texts, popupMessages } from './data/portfolioData';

// Styles
import './App.css';
import './glass.css';
import './i18n';

// Lazy loaded components for performance (non-critical, below the fold)
const Skills = lazy(() => import('./components/Skills.jsx').then(m => ({ default: m.Skills })));
const Certificates = lazy(() => import('./components/Certificates').then(m => ({ default: m.Certificates })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer.jsx').then(m => ({ default: m.Footer })));
const HeartedProjectsPage = lazy(() => import('./components/HeartedProjectsPage.jsx').then(m => ({ default: m.HeartedProjectsPage })));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const StatusBadge = lazy(() => import('./components/StatusBadge.jsx'));

// Loading fallback component
const SectionLoader = memo(({ height = '200px' }) => (
  <div
    className="flex items-center justify-center"
    style={{ minHeight: height }}
  >
    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
  </div>
));
SectionLoader.displayName = 'SectionLoader';

// Memoized scroll to top button
const ScrollToTopButton = memo(({ show, onClick, darkMode }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-16 sm:bottom-8 right-4 sm:right-8 left-auto p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-[60] animate-bounce ${darkMode
        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
        : 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/60 ring-2 ring-blue-200/80'
        } text-white`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
});
ScrollToTopButton.displayName = 'ScrollToTopButton';

export default function Portfolio() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Core state
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // UI state
  const [chatOpen, setChatOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [isReading, setIsReading] = useState(false);

  // About section animation state
  const [aboutWordsVisible, setAboutWordsVisible] = useState({});
  const [aboutHeadingVisible, setAboutHeadingVisible] = useState(false);

  // Popup state
  const [popupMessageIndex, setPopupMessageIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);

  // Feedback state
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Hearted projects state
  const [heartedProjects, setHeartedProjects] = useState([]);
  const [heartAnimating, setHeartAnimating] = useState({});

  // Refs
  const lastScrollY = React.useRef(0);
  const aboutTimeoutsRef = React.useRef([]);

  // Computed values
  const isHeartedPage = location.pathname === '/hearted';
  const bioText = t('hero.description');
  const portfolioData = useMemo(() => getPortfolioData(bioText), [bioText]);

  const portfolioUrl = useMemo(
    () => (typeof window !== 'undefined' ? window.location.origin : 'https://example.com'),
    []
  );

  const qrCodeUrl = useMemo(
    () => `${API_ENDPOINTS.qrCode}?size=280x280&data=${encodeURIComponent(portfolioUrl)}`,
    [portfolioUrl]
  );

  // Initialize code protection on mount
  useEffect(() => {
    initCodeProtection();
  }, []);

  // Section observer for active section tracking
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

    NAV_SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Load hearted projects from storage
  useEffect(() => {
    const saved = storage.get(STORAGE_KEYS.heartedProjects, []);
    if (Array.isArray(saved)) {
      setHeartedProjects(saved);
    }
  }, []);

  // Save hearted projects to storage
  useEffect(() => {
    storage.set(STORAGE_KEYS.heartedProjects, heartedProjects);
  }, [heartedProjects]);

  // Popup message rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPopupVisible(false);
      setTimeout(() => {
        setPopupMessageIndex((prev) => (prev + 1) % popupMessages.length);
        setPopupVisible(true);
      }, TIMING.popupTransition);
    }, TIMING.popupInterval);

    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), TIMING.pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        const nextLength = displayedText.length + (isDeleting ? -1 : 1);
        setDisplayedText(currentText.substring(0, Math.max(nextLength, 0)));
      }, isDeleting ? TIMING.deletingSpeed : TIMING.typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  // Toolbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < TIMING.scrollJitterThreshold) {
        return;
      }

      if (currentScrollY < TIMING.toolbarHideThreshold) {
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

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > TIMING.scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // About section word animation
  useEffect(() => {
    if (isHeartedPage) return;

    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutTimeoutsRef.current.forEach(t => clearTimeout(t));
            aboutTimeoutsRef.current = [];

            setAboutHeadingVisible(true);
            const wordCount = bioText?.split(' ').length || 50;
            for (let idx = 0; idx < wordCount; idx++) {
              const timeout = setTimeout(() => {
                setAboutWordsVisible(prev => ({ ...prev, [idx]: true }));
              }, idx * 80);
              aboutTimeoutsRef.current.push(timeout);
            }
          } else {
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
      aboutTimeoutsRef.current.forEach(t => clearTimeout(t));
    };
  }, [bioText, isHeartedPage]);

  // Callbacks
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((id) => {
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
  }, [isHeartedPage, navigate]);

  const handleCopyLink = useCallback(async () => {
    const url = window.location.href;
    const success = await copyToClipboard(url);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    }
  }, []);

  const handleShareLink = useCallback(async () => {
    const url = window.location.href;
    const result = await shareContent({ title: document.title, url });

    if (result.success) {
      if (result.method === 'share') {
        setShareSuccess(true);
      } else {
        setCopySuccess(true);
      }
      setTimeout(() => {
        setCopySuccess(false);
        setShareSuccess(false);
      }, 3000);
    }
  }, []);

  const handleDownloadQr = useCallback(async () => {
    await downloadFile(qrCodeUrl, 'portfolio-qr.png');
  }, [qrCodeUrl]);

  const toggleReadAloud = useCallback(() => {
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
  }, [isReading]);

  const isHearted = useCallback((id) => heartedProjects.includes(id), [heartedProjects]);

  const toggleHeart = useCallback((id) => {
    setHeartedProjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleHeartClick = useCallback((id) => {
    setHeartAnimating((prev) => ({ ...prev, [id]: true }));
    toggleHeart(id);
    setTimeout(() => {
      setHeartAnimating((prev) => ({ ...prev, [id]: false }));
    }, 600);
  }, [toggleHeart]);

  return (
    <ErrorBoundary>
      {/* Loading Screen */}
      <LoadingScreen />

      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#050508] via-[#0a0a10] to-[#070709]' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
        <ScrollProgress darkMode={darkMode} />
        <CustomCursor darkMode={darkMode} />

        {/* Status Badge - Only show on main page */}
        {!isHeartedPage && (
          <Suspense fallback={null}>
            <StatusBadge darkMode={darkMode} />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <ParticleBackground darkMode={darkMode} />
        </Suspense>

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
              <Suspense fallback={<SectionLoader height="100vh" />}>
                <SectionErrorBoundary sectionName="Hearted Projects">
                  <HeartedProjectsPage
                    darkMode={darkMode}
                    navigate={navigate}
                    portfolioData={portfolioData}
                    isHearted={isHearted}
                    handleHeartClick={handleHeartClick}
                    heartAnimating={heartAnimating}
                  />
                </SectionErrorBoundary>
              </Suspense>
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
              <SectionErrorBoundary sectionName="Hero">
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
              </SectionErrorBoundary>

              {/* Scroll to Top Button */}
              <ScrollToTopButton
                show={showScrollTop}
                onClick={scrollToTop}
                darkMode={darkMode}
              />

              {/* About Section */}
              <SectionErrorBoundary sectionName="About">
                <About
                  portfolioData={portfolioData}
                  darkMode={darkMode}
                  aboutHeadingVisible={aboutHeadingVisible}
                  aboutWordsVisible={aboutWordsVisible}
                />
              </SectionErrorBoundary>

              {/* Skills Section */}
              <Suspense fallback={<SectionLoader />}>
                <SectionErrorBoundary sectionName="Skills">
                  <Skills portfolioData={portfolioData} darkMode={darkMode} />
                </SectionErrorBoundary>
              </Suspense>

              {/* Certificates Section */}
              <Suspense fallback={<SectionLoader />}>
                <SectionErrorBoundary sectionName="Certificates">
                  <Certificates portfolioData={portfolioData} darkMode={darkMode} />
                </SectionErrorBoundary>
              </Suspense>

              {/* Projects Section */}
              <Suspense fallback={<SectionLoader />}>
                <SectionErrorBoundary sectionName="Projects">
                  <Projects
                    portfolioData={portfolioData}
                    darkMode={darkMode}
                    isHearted={isHearted}
                    handleHeartClick={handleHeartClick}
                    heartAnimating={heartAnimating}
                  />
                </SectionErrorBoundary>
              </Suspense>

              {/* Experience Section */}
              <Suspense fallback={<SectionLoader />}>
                <SectionErrorBoundary sectionName="Experience">
                  <Experience portfolioData={portfolioData} darkMode={darkMode} />
                </SectionErrorBoundary>
              </Suspense>

              {/* Contact Section */}
              <Suspense fallback={<SectionLoader />}>
                <SectionErrorBoundary sectionName="Contact">
                  <Contact portfolioData={portfolioData} darkMode={darkMode} />
                </SectionErrorBoundary>
              </Suspense>

              {/* Footer */}
              <Suspense fallback={<SectionLoader height="100px" />}>
                <SectionErrorBoundary sectionName="Footer">
                  <Footer portfolioData={portfolioData} darkMode={darkMode} />
                </SectionErrorBoundary>
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}
