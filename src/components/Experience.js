import React from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Briefcase, Flag } from 'lucide-react';

import { Reveal } from './Reveal';


const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

    const handleInteraction = (clientX, clientY, rect) => {
        const width = rect.width;
        const height = rect.height;
        const xVal = clientX - rect.left;
        const yVal = clientY - rect.top;
        const xPct = xVal / width - 0.5;
        const yPct = yVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        handleInteraction(e.clientX, e.clientY, rect);
    };

    const handleTouchMove = (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            handleInteraction(touch.clientX, touch.clientY, rect);
        }
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};


export const Experience = ({ portfolioData, darkMode }) => {
    const timelineRef = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 20%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <section id="experience" className={`py-16 pb-32 px-2 ${darkMode ? 'bg-gradient-to-b from-[#020203] via-[#08080b] to-[#020203]' : 'bg-blue-50/50'}`} style={{ maxWidth: '100vw' }}>
            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>Work Experience</h2>

                    {/* SVG Gradient Definition for Icons */}
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                        <defs>
                            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="relative" ref={timelineRef}>
                        {/* Base dimmed line */}
                        <div className={`absolute left-[36px] top-2 w-[8px] ${darkMode ? 'bg-slate-800/40' : 'bg-blue-200/40'} rounded-full`} style={{ height: 'calc(100% - 60px)' }}></div>

                        {/* Illuminated scrolling line - Smoothed with Framer Motion */}
                        <motion.div
                            className="absolute left-[36px] top-2 w-[8px] rounded-full"
                            style={{
                                height: 'calc(100% - 60px)',
                                scaleY,
                                transformOrigin: 'top',
                                background: darkMode
                                    ? 'linear-gradient(180deg, #22d3ee 0%, #3b82f6 50%, #a855f7 100%)'
                                    : 'linear-gradient(180deg, #06b6d4 0%, #2563eb 50%, #7c3aed 100%)',
                                boxShadow: darkMode
                                    ? '0 0 25px rgba(34,211,238,0.7), 0 0 50px rgba(59,130,246,0.4), 0 0 75px rgba(168,85,247,0.3)'
                                    : '0 0 30px rgba(6,182,212,0.6), 0 0 50px rgba(37,99,235,0.4)'
                            }}
                        />

                        <div className="space-y-0">
                            {portfolioData.experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="relative flex gap-4 pb-16 group/item pl-32"
                                >
                                    {/* Timeline Node/Connector */}
                                    <div className="absolute left-0 top-2 z-20 flex items-center justify-center">
                                        {/* 3D Icon with Gradient Border */}
                                        <div className="relative w-20 h-20 group-hover/item:scale-110 transition-transform duration-500">
                                            {/* Gradient Border Ring */}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[3px]">
                                                <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
                                                    <Briefcase
                                                        className="w-10 h-10"
                                                        style={{
                                                            stroke: 'url(#iconGradient)',
                                                            fill: 'none'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            {/* Outer Glow */}
                                            <div className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.5),0_0_50px_rgba(59,130,246,0.3)]" />
                                        </div>

                                    </div>

                                    <div className="flex-1 perspective-1000">
                                        <TiltCard
                                            className={`relative glass-card rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 animate-card-wave overflow-hidden min-h-[220px] flex flex-col justify-center ${darkMode
                                                ? 'border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] bg-[#0f111a]/80'
                                                : 'hover:shadow-xl border-blue-100 hover:border-blue-300'}`}
                                        >
                                            {/* Decorative Background Blob */}
                                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70 ${darkMode ? 'bg-cyan-500/10 opacity-0' : 'bg-blue-200/40 opacity-0'}`} style={{ transform: "translateZ(-20px)" }} />

                                            {/* Content */}
                                            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                    <div className="w-fit">
                                                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 group-hover:from-cyan-300 group-hover:to-blue-300' : 'text-blue-900'} transition-all duration-300`}>
                                                            {job.role}
                                                        </h3>
                                                        <div className={`h-1 rounded-full mt-2 transition-all duration-300 w-12 group-hover:w-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600' : 'bg-blue-400'}`} />
                                                    </div>

                                                    <span className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border transition-all duration-300 ${darkMode
                                                        ? 'bg-slate-800/80 border-white/10 text-cyan-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30'
                                                        : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                                                        {job.period}
                                                    </span>
                                                </div>

                                                <p
                                                    className={`${darkMode ? 'text-slate-300/90' : 'text-slate-600'} leading-relaxed text-sm sm:text-base`}
                                                    style={{ fontFamily: "'Google Sans Code', 'Fira Code', monospace", fontWeight: 200 }}
                                                >
                                                    {job.description}
                                                </p>
                                            </div>
                                        </TiltCard>
                                    </div>
                                </div>
                            ))}

                            {/* Destination Marker */}
                            <div className="relative flex justify-start pt-4 mb-8" style={{ minHeight: '120px' }}>
                                <div className="relative flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                                    {/* Floating Animation Container */}
                                    <motion.div
                                        className="relative w-20 h-20 hover:scale-110 transition-transform duration-500"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {/* Gradient Border Ring */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[3px]">
                                            <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
                                                <Flag
                                                    className="w-10 h-10"
                                                    style={{
                                                        stroke: 'url(#iconGradient)',
                                                        fill: 'none'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {/* Outer Glow */}
                                        <div className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.5),0_0_50px_rgba(59,130,246,0.3)]" />
                                    </motion.div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
