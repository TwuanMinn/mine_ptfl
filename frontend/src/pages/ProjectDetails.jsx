import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, ExternalLink, Sparkles, Layers, Code2 } from 'lucide-react';

// Tech stack icon URLs mapping
const techIcons = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Stripe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Chart.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
};

export default function ProjectDetails({ portfolioData, darkMode }) {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll to top when component mounts - runs BEFORE browser paint
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Find the project by ID
    const project = portfolioData?.projects?.find(p => p.id === projectId);

    // Navigate back to projects section
    const handleBackToProjects = () => {
        // Navigate with hash so Home component can scroll to projects section
        navigate('/#projects');
    };

    // If project not found
    if (!project) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#050508]' : 'bg-blue-50'}`}>
                <div className="text-center">
                    <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                        Project Not Found
                    </h1>
                    <p className={`mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        The project you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={handleBackToProjects}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    // Use fullDescription if available, otherwise fall back to description
    const longDescription = project.fullDescription || project.description;

    const renderProjectContent = () => {
        const paragraphs = longDescription.split('\n\n');
        const gallery = project.gallery || [];
        const introSize = 2; // First 2 paragraphs as intro
        const perImage = 3; // 3 paragraphs per image section
        const sections = [];

        // Intro section
        sections.push({
            type: 'intro',
            paragraphs: paragraphs.slice(0, introSize)
        });

        // Image sections
        let currentPara = introSize;
        for (let i = 0; i < gallery.length && currentPara < paragraphs.length; i++) {
            sections.push({
                type: 'image-text',
                image: gallery[i],
                imageOnRight: i % 2 === 0,
                paragraphs: paragraphs.slice(currentPara, currentPara + perImage)
            });
            currentPara += perImage;
        }

        // Remaining paragraphs
        if (currentPara < paragraphs.length) {
            sections.push({
                type: 'outro',
                paragraphs: paragraphs.slice(currentPara)
            });
        }

        return sections.map((section, idx) => {
            // Intro/Outro sections (text only)
            if (section.type === 'intro' || section.type === 'outro') {
                return (
                    <div key={idx} className="space-y-4">
                        {section.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
                                {para}
                            </p>
                        ))}
                    </div>
                );
            }

            // Image-text section (side by side)
            return (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${section.imageOnRight ? '' : 'md:flex-row-reverse'}`}
                >
                    {/* Text side - 50% */}
                    <div className="w-full md:w-1/2 space-y-4">
                        {section.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-300 font-light">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Image side - 50% */}
                    <div className="w-full md:w-1/2 relative group/img">
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />

                        <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-cyan-500/10">
                            <img
                                src={section.image}
                                alt={`${project.title} - Feature`}
                                className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover/img:scale-105"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </motion.div>
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative overflow-hidden"
        >
            {/* Ambient background glow effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
            </div>

            {/* Hero Section with Full-Width Image */}
            <div className="relative">
                {/* Full-width image with gradient overlay */}
                <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
                    {/* Multiple gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/40 z-10" />

                    {/* Animated gradient border at bottom */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1 z-20"
                        style={{
                            background: 'linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent)',
                            backgroundSize: '200% 100%',
                            animation: 'borderFlow 3s linear infinite'
                        }}
                    />

                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Category Badge - Floating on image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-24 left-6 sm:left-12 z-20"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                            <Layers size={14} />
                            {project.category || "Development"}
                        </span>
                    </motion.div>

                    {/* Title overlaying image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="absolute bottom-6 left-6 sm:left-12 right-6 sm:right-12 z-20"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {project.title.split(' ').map((word, i) => (
                                <span
                                    key={i}
                                    className={i % 2 === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400' : ''}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-8 sm:py-12">

                {/* Back Button - Below the title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                    className="mb-8"
                >
                    <motion.button
                        onClick={handleBackToProjects}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer overflow-hidden"
                    >
                        {/* Animated border */}
                        <div
                            className="absolute inset-0 rounded-full p-[2px]"
                            style={{
                                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                                backgroundSize: '200% 100%',
                                animation: 'borderFlow 3s linear infinite'
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-xl" />
                        </div>

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                        {/* Arrow with slide animation */}
                        <div className="relative z-10 w-5 h-5 overflow-hidden">
                            <ArrowLeft
                                size={18}
                                className="text-cyan-400 transition-transform duration-300 group-hover:-translate-x-6"
                            />
                            <ArrowLeft
                                size={18}
                                className="absolute top-0 left-6 text-cyan-400 transition-transform duration-300 group-hover:-translate-x-6"
                            />
                        </div>
                        <span className="relative z-10 font-medium text-sm text-white">Back to Projects</span>
                    </motion.button>
                </motion.div>

                {/* Description Card with Visit Project Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative group mb-12"
                >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl bg-slate-900/60 border border-white/10">
                        {/* Header with Title and Visit Project Button */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                                    <Sparkles size={20} className="text-cyan-400" />
                                </div>
                                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    About This Project
                                </h2>
                            </div>

                            {/* Visit Button - Clean and simple */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white cursor-pointer shrink-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300"
                            >
                                <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform" />
                                <span className="font-bold">Visit</span>
                            </motion.a>
                        </div>

                        {/* Long description with images side-by-side */}
                        {/* Long description with images side-by-side */}
                        <div className="space-y-8">
                            {renderProjectContent()}
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative group"
                >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl bg-slate-900/60 border border-white/10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                                <Code2 size={20} className="text-purple-400" />
                            </div>
                            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Tech Stack
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {project.techStack?.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group/tech relative cursor-pointer"
                                >
                                    {/* Hover glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover/tech:opacity-30 blur-lg transition-opacity duration-300" />

                                    <div className="relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 group-hover/tech:border-cyan-500/50 transition-all duration-300">
                                        {techIcons[tech] && (
                                            <img
                                                src={techIcons[tech]}
                                                alt={tech}
                                                className="w-10 h-10 object-contain group-hover/tech:scale-110 transition-transform duration-300"
                                            />
                                        )}
                                        <span className="font-medium text-sm text-slate-300 group-hover/tech:text-white transition-colors text-center">
                                            {tech}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes borderFlow {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes shimmer {
                    0% { transform: skewX(-20deg) translateX(-200%); }
                    100% { transform: skewX(-20deg) translateX(200%); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.3); opacity: 0; }
                    100% { transform: scale(1); opacity: 0; }
                }
                @keyframes bounce-arrow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                @keyframes rotate-gradient {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-around {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes orbit-light {
                    0% { 
                        transform: rotate(0deg) translateX(calc(100% + 8px)) rotate(0deg);
                    }
                    100% { 
                        transform: rotate(360deg) translateX(calc(100% + 8px)) rotate(-360deg);
                    }
                }
            `}</style>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group"
                        aria-label="Scroll to top"
                    >
                        {/* Animated pulsing ring */}
                        <div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                            style={{ animation: 'pulse-ring 2s ease-out infinite' }}
                        />

                        {/* Rotating gradient border */}
                        <div
                            className="absolute inset-0 rounded-full p-[2px]"
                            style={{
                                background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
                                animation: 'rotate-gradient 3s linear infinite'
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-slate-900" />
                        </div>

                        {/* Button background */}
                        <div
                            className="absolute inset-[3px] rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300"
                            style={{
                                backgroundSize: '200% 200%',
                                animation: 'gradientShift 3s ease infinite'
                            }}
                        />

                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-cyan-500/50 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                        {/* Arrow icon with bounce */}
                        <ArrowUp
                            size={22}
                            className="relative z-10 text-white drop-shadow-lg"
                            style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
