import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, ExternalLink, Award, Shield, Calendar, Globe, BookOpen, Users, Mic, PenTool } from 'lucide-react';

// Tech stack icon URLs mapping
const techIcons = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'JavaScript ES6+': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Google': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    'Microsoft': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
    'IBM': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
    'Coursera': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Placeholder
    'British': 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg',
    'freeCodeCamp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Deployment': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'Cloud Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
};

export default function CertificateDetails({ portfolioData, darkMode }) {
    const { certId } = useParams();
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll to top when component mounts
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [certId]);

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Find the certificate by ID or index
    const certificate = portfolioData?.certificates?.find((c, index) =>
        (c.id === certId) || (index.toString() === certId) || (c.title.toLowerCase().replace(/\s+/g, '-') === certId)
    );

    const handleBackToCertificates = () => {
        navigate('/#certificates');
    };

    if (!certificate) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#050508]' : 'bg-blue-50'}`}>
                <div className="text-center">
                    <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                        Certificate Not Found
                    </h1>
                    <p className={`mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        The certificate you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={handleBackToCertificates}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
                    >
                        Back to Certificates
                    </button>
                </div>
            </div>
        );
    }



    // Helper to get diverse icons for skills
    const getSkillIcon = (skillName) => {
        // First check if it's in our tech stack map
        if (techIcons[skillName]) {
            return <img src={techIcons[skillName]} alt={skillName} className="w-6 h-6 object-contain group-hover/skill:scale-110 transition-transform" />;
        }

        // Then check for keywords
        const s = skillName.toLowerCase();
        if (s.includes('write') || s.includes('writing')) return <PenTool size={16} className="text-cyan-500/50 group-hover/skill:text-cyan-400 transition-colors" />;
        if (s.includes('speak') || s.includes('communication')) return <Mic size={16} className="text-purple-500/50 group-hover/skill:text-purple-400 transition-colors" />;
        if (s.includes('team') || s.includes('user') || s.includes('proficien')) return <Users size={16} className="text-blue-500/50 group-hover/skill:text-blue-400 transition-colors" />;
        if (s.includes('english') || s.includes('language')) return <BookOpen size={16} className="text-pink-500/50 group-hover/skill:text-pink-400 transition-colors" />;
        if (s.includes('research') || s.includes('analysis')) return <Globe size={16} className="text-green-500/50 group-hover/skill:text-green-400 transition-colors" />;

        // Default
        return <Shield size={16} className="text-cyan-500/50 group-hover/skill:text-cyan-400 transition-colors" />;
    };


    const longDescription = certificate.fullDescription || certificate.description;

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

            {/* Hero Section */}
            <div className="relative">
                {/* Hero Section Container */}
                <div className="relative h-[40vh] sm:h-[50vh] md:h-[65vh] w-full overflow-hidden">
                    {/* 1. Base Image - Moved to first and improved layering */}
                    {certificate.image && (
                        <motion.img
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={certificate.image}
                            alt={certificate.title}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            style={{ transformOrigin: 'center' }}
                        />
                    )}

                    {/* 2. Multiple Overlays for Depth */}
                    <div className="absolute inset-0 bg-[#050508]/40 z-10" /> {/* Ambient Darkening */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/20 to-transparent z-20" />

                    {/* 3. Pattern/Background Layer */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none z-30"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '30px 30px' }} />



                    {/* 5. Animated Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 z-40"
                        style={{
                            background: 'linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent)',
                            backgroundSize: '200% 100%',
                            animation: 'borderFlow 3s linear infinite'
                        }}
                    />

                    {/* 6. Hero Text Content (Badge & Title) */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 z-50">
                        {/* Category Badge */}


                        {/* Title overlaying image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
                                {certificate.title.split(' ').map((word, i) => {
                                    const isHighlighted = ['design', 'full-stack', 'cloud', 'python', 'javascript', 'ielts'].includes(word.toLowerCase());
                                    return (
                                        <span
                                            key={i}
                                            className={isHighlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-black' : ''}
                                        >
                                            {word}{' '}
                                        </span>
                                    );
                                })}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 py-12">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                    className="mb-12"
                >
                    <motion.button
                        onClick={handleBackToCertificates}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 px-8 py-3.5 rounded-full cursor-pointer overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 rounded-full p-[2px]"
                            style={{
                                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                                backgroundSize: '200% 100%',
                                animation: 'borderFlow 3s linear infinite'
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-2xl" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <ArrowLeft size={20} className="relative z-10 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                        <span className="relative z-10 font-bold text-sm text-white tracking-wide">Back to Certificates</span>
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-[2rem] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="relative rounded-[2rem] p-8 sm:p-12 backdrop-blur-3xl bg-slate-900/80 border border-white/10 shadow-2xl">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                                        <Award size={24} className="text-cyan-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        Certificate Details
                                    </h2>
                                </div>

                                {/* Detailed Content with Interspersed Gallery Shots (Full Width) */}
                                <div className="space-y-10 mb-10">
                                    {(() => {
                                        const paragraphs = longDescription.split('\n\n');
                                        const gallery = certificate.gallery || [];
                                        const mainImage = gallery[0] || certificate.image; // Use gallery image 1, else fall back to main image

                                        if (mainImage) {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5 }}
                                                    className="block py-8 clearfix"
                                                >
                                                    {/* Image Content - Floated Right */}
                                                    <div className="w-full md:w-1/2 md:float-right md:pl-8 mb-8 md:mt-12">
                                                        <div className="relative group/img rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-md group-hover/img:opacity-40 transition-opacity duration-500" />
                                                            <img
                                                                src={mainImage}
                                                                alt="Certificate Detail"
                                                                className="relative w-full h-auto object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10" />
                                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-500">
                                                                <p className="text-sm font-medium text-white/90 glass-panel px-4 py-2 rounded-lg inline-block">
                                                                    View Gallery
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Text Content - Flows around image */}
                                                    <div className="text-base sm:text-lg leading-relaxed text-slate-300 font-light text-justify">
                                                        {paragraphs.map((para, idx) => (
                                                            <p key={idx} className="mb-6 last:mb-0">
                                                                {para}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            );
                                        }

                                        // Fallback if no images: just text
                                        return paragraphs.map((para, idx) => (
                                            <p key={`p-${idx}`} className="text-base sm:text-lg leading-relaxed text-slate-300 font-light py-2">
                                                {para}
                                            </p>
                                        ));
                                    })()}
                                </div>

                                {/* Skills Section - Merged Inside */}
                                {certificate.skills && (
                                    <div className="pt-8 border-t border-white/10">
                                        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                            <Shield size={18} className="text-cyan-400" />
                                            Skills & Topics Covered
                                        </h2>
                                        <div className="flex flex-wrap gap-4">
                                            {certificate.skills.map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -3, scale: 1.05 }}
                                                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 text-slate-200 text-sm font-semibold hover:border-cyan-500/50 hover:text-white transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 cursor-default group/skill"
                                                >
                                                    {getSkillIcon(skill)}
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>


                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-sm" />
                            <div className="relative rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 space-y-6">
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Credential Status</p>
                                    <div className="flex items-center gap-2 text-green-400 font-semibold">
                                        <Shield size={16} /> Verified
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Date Issued</p>
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Calendar size={16} className="text-cyan-400" /> {certificate.fullDate || certificate.date}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Organization</p>
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Globe size={16} className="text-cyan-400" /> {certificate.issuer}
                                    </div>
                                </div>

                                <motion.a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                                >
                                    <ExternalLink size={18} />
                                    View Credential
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <h3 className="text-sm font-semibold text-white mb-3">About this certification</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                This credential verifies the successful completion of all requirements for {certificate.title} as issued by {certificate.issuer}. Individual results and competencies may vary by candidate.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.5 }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                        <div className="absolute inset-0 rounded-full p-[2px]" style={{ background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)', animation: 'rotate-gradient 3s linear infinite' }}>
                            <div className="w-full h-full rounded-full bg-slate-900" />
                        </div>
                        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300" />
                        <ArrowUp size={22} className="relative z-10 text-white" />
                    </motion.button>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes borderFlow {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.3); opacity: 0; }
                    100% { transform: scale(1); opacity: 0; }
                }
                @keyframes rotate-gradient {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </motion.div>
    );
}
