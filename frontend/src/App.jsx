import React, { useState, useMemo, useEffect, lazy, Suspense, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Error Boundary
import ErrorBoundary from './components/common/ErrorBoundary';

// Utilities
import { initCodeProtection } from './utils/codeProtection';
import { storage, copyToClipboard, shareContent, downloadFile } from './utils/helpers';
import { STORAGE_KEYS, TIMING, API_ENDPOINTS } from './constants';

// Critical components loaded immediately
import LoadingScreen from './components/common/LoadingScreen.jsx';
import { Toolbar } from './components/layout/Toolbar.jsx';
import { QrModal } from './components/common/QrModal.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import CustomCursor from './components/common/CustomCursor.jsx';
import { AppRoutes } from './routes/AppRoutes';
import { SmoothScroll } from './components/layout/SmoothScroll';

// Data
import { getPortfolioData } from './data/portfolioData';

// Styles
import './styles/App.css';
import './styles/glass.css';
import './i18n';

// Lazy loaded components
const ParticleBackground = lazy(() => import('./components/common/ParticleBackground'));
const StatusBadge = lazy(() => import('./components/common/StatusBadge.jsx'));

export default function Portfolio() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Core state
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // UI state
  const [qrOpen, setQrOpen] = useState(false);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [isReading, setIsReading] = useState(false);

  // Feedback state
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Hearted projects state
  const [heartedProjects, setHeartedProjects] = useState([]);
  const [heartAnimating, setHeartAnimating] = useState({});

  // Refs
  const lastScrollY = useRef(0);

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

  // Combined scroll handler for toolbar visibility and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll-to-top button visibility
      setShowScrollTop(currentScrollY > TIMING.scrollThreshold);

      // Toolbar visibility with jitter prevention
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
      <SmoothScroll>
        {/* Loading Screen */}
        <LoadingScreen />

        <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#050508] via-[#0a0a10] to-[#070709]' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
          <ScrollProgress darkMode={darkMode} />
          <CustomCursor darkMode={darkMode} />

          {/* Status Badge - Only show on main home page */}
          {location.pathname === '/' && (
            <Suspense fallback={null}>
              <StatusBadge darkMode={darkMode} />
            </Suspense>
          )}

          <Suspense fallback={null}>
            <ParticleBackground darkMode={darkMode} />
          </Suspense>

          <AppRoutes
            portfolioData={portfolioData}
            darkMode={darkMode}
            bioText={bioText}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            scrollToTop={scrollToTop}
            showScrollTop={showScrollTop}
            isHearted={isHearted}
            handleHeartClick={handleHeartClick}
            heartAnimating={heartAnimating}
            navigate={navigate}
            location={location}
          />

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
        </div>
      </SmoothScroll>
    </ErrorBoundary>
  );
}
