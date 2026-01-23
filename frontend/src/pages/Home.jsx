import React, { useState, useEffect, useLayoutEffect, useRef, memo, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import { SectionErrorBoundary } from '../components/common/ErrorBoundary';
import { Hero } from '../components/sections/Hero.jsx';
import { About } from '../components/sections/About.jsx';
import { Projects } from '../components/sections/Projects';

// Data
import { texts, popupMessages } from '../data/portfolioData';
import { TIMING, NAV_SECTIONS } from '../constants';

// Lazy loaded components
const Skills = lazy(() => import('../components/sections/Skills.jsx').then(m => ({ default: m.Skills })));
const Certificates = lazy(() => import('../components/sections/Certificates').then(m => ({ default: m.Certificates })));
const Experience = lazy(() => import('../components/sections/Experience').then(m => ({ default: m.Experience })));
const Contact = lazy(() => import('../components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('../components/layout/Footer.jsx').then(m => ({ default: m.Footer })));

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

export default function Home({
    portfolioData,
    darkMode,
    bioText,
    setActiveSection,
    scrollToSection,
    scrollToTop,
    showScrollTop,
    isHearted,
    handleHeartClick,
    heartAnimating
}) {
    useTranslation();
    const location = useLocation();

    // Typing animation state
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    // UI state
    const [chatOpen, setChatOpen] = useState(false);

    // About section animation state
    const [aboutWordsVisible, setAboutWordsVisible] = useState({});
    const [aboutHeadingVisible, setAboutHeadingVisible] = useState(false);

    // Popup state
    const [popupMessageIndex, setPopupMessageIndex] = useState(0);
    const [popupVisible, setPopupVisible] = useState(true);

    // Refs
    const aboutTimeoutsRef = useRef([]);

    // Handle hash-based scrolling (e.g., /#projects) - runs BEFORE browser paint
    useLayoutEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');

            const scrollToSection = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                    // Immediately scroll to position
                    window.scrollTo({
                        top: element.offsetTop,
                        left: 0,
                        behavior: 'instant'
                    });
                    return true;
                }
                return false;
            };

            // Try immediately
            if (!scrollToSection()) {
                // If element not found, retry with increasing delays
                const retryTimeout1 = setTimeout(scrollToSection, 50);
                const retryTimeout2 = setTimeout(scrollToSection, 150);
                const retryTimeout3 = setTimeout(scrollToSection, 300);
                return () => {
                    clearTimeout(retryTimeout1);
                    clearTimeout(retryTimeout2);
                    clearTimeout(retryTimeout3);
                };
            }
        }
    }, [location.hash, location.key]); // Add location.key to trigger on every navigation

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
    }, [setActiveSection]);

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

    // About section word animation
    useEffect(() => {
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
    }, [bioText]);

    return (
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
            <SectionErrorBoundary sectionName="Projects">
                <Projects
                    portfolioData={portfolioData}
                    darkMode={darkMode}
                    isHearted={isHearted}
                    handleHeartClick={handleHeartClick}
                    heartAnimating={heartAnimating}
                />
            </SectionErrorBoundary>

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
    );
}
