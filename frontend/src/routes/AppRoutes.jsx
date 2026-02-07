import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionErrorBoundary } from '../components/common/ErrorBoundary';
import { SectionLoader } from '../components/common/SectionLoader';

// Pages
import Home from '../pages/Home';
import { HeartedProjectsPage } from '../pages/HeartedProjects';
import ProjectDetails from '../pages/ProjectDetails';
import CertificateDetails from '../pages/CertificateDetails';
import Pending from '../pages/Pending';
import UnderConstruction from '../pages/UnderConstruction';
import NotFound from '../pages/NotFound';
import TypingTest from '../pages/TypingTest';

export const AppRoutes = ({
    portfolioData,
    darkMode,
    bioText,
    setActiveSection,
    scrollToSection,
    scrollToTop,
    showScrollTop,
    isHearted,
    handleHeartClick,
    heartAnimating,
    navigate,
    location
}) => {
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Home
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
                        />
                    }
                />
                <Route
                    path="/project/:projectId"
                    element={
                        <ProjectDetails
                            portfolioData={portfolioData}
                            darkMode={darkMode}
                        />
                    }
                />
                <Route
                    path="/certificate/:certId"
                    element={
                        <CertificateDetails
                            portfolioData={portfolioData}
                            darkMode={darkMode}
                        />
                    }
                />
                <Route
                    path="/hearted"

                    element={
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
                    }
                />
                <Route
                    path="/pending"
                    element={<Pending darkMode={darkMode} />}
                />
                <Route
                    path="/under-construction"
                    element={<UnderConstruction darkMode={darkMode} />}
                />
                <Route
                    path="/typing-test"
                    element={<TypingTest darkMode={darkMode} />}
                />
                <Route
                    path="*"
                    element={<NotFound darkMode={darkMode} />}
                />
            </Routes>
        </AnimatePresence>
    );
};

