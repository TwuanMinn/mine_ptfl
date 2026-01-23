import React from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
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
        <section id="experience" className={`py-16 px-2 ${darkMode ? 'bg-gradient-to-b from-[#020203] via-[#08080b] to-[#020203]' : 'bg-blue-50/50'}`} style={{ maxWidth: '100vw' }}>
            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>Work Experience</h2>
                    <div className="relative" ref={timelineRef}>
                        {/* Base dimmed line */}
                        <div className={`absolute left-[39px] top-2 bottom-0 w-[2px] ${darkMode ? 'bg-slate-800/40' : 'bg-blue-200/40'} rounded-full`}></div>

                        {/* Illuminated scrolling line - Smoothed with Framer Motion */}
                        <motion.div
                            className={`absolute left-[39px] top-2 w-[2px] rounded-full ${darkMode
                                ? 'bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.3)]'
                                : 'bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)]'
                                }`}
                            style={{
                                height: 'calc(100% - 20px)',
                                scaleY,
                                transformOrigin: 'top'
                            }}
                        />

                        <div className="space-y-0">
                            {portfolioData.experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="relative flex gap-8 pb-16 group/item"
                                >
                                    {/* Timeline Node/Connector */}
                                    <div className="absolute left-[28px] top-8 z-20 flex items-center justify-center">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#0a0a0f] border border-cyan-400' : 'bg-white border border-blue-500'} shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 group-hover/item:scale-125 transition-transform duration-500`}>
                                            <Briefcase size={12} className={darkMode ? 'text-cyan-400' : 'text-blue-600'} />
                                        </div>
                                        <div className={`absolute w-10 h-10 rounded-full border ${darkMode ? 'border-cyan-500/50' : 'border-blue-400/50'} opacity-0 group-hover/item:opacity-100 animate-ping`} />
                                        <div className={`absolute w-14 h-14 rounded-full border ${darkMode ? 'border-cyan-500/20' : 'border-blue-400/20'} opacity-0 group-hover/item:opacity-100 transition-all duration-500 scale-0 group-hover/item:scale-100`} />
                                    </div>

                                    <div className="relative z-10 flex-shrink-0 perspective-1000 pl-4">
                                        <div className={`group relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 transform-style-3d hover:rotate-y-20 hover:rotate-x-20`}>
                                            {/* Spherical Base */}
                                            <div className={`absolute inset-0 rounded-full transition-all duration-700 animate-icon-flash ${darkMode
                                                ? 'bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,#1e3a8a_40%,#000000_100%)] shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.8),inset_5px_5px_15px_rgba(255,255,255,0.1)]'
                                                : 'bg-[radial-gradient(circle_at_30%_30%,#60a5fa_0%,#2563eb_50%,#1e3a8a_100%)] shadow-[inset_-3px_-3px_10px_rgba(0,0,0,0.4),inset_3px_3px_10px_rgba(255,255,255,0.2)]'}`}
                                            />

                                            {/* Gloss Reflection Layer */}
                                            <div className="absolute inset-2 rounded-full bg-gradient-to-b from-white/20 to-transparent h-1/2 w-4/5 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none" />

                                            {/* Outer Glass Ring */}
                                            <div className={`absolute inset-0 rounded-full border-2 ${darkMode ? 'border-white/10' : 'border-black/5'} transition-transform duration-700 group-hover:scale-110`} />

                                            <svg
                                                className={`w-9 h-9 relative z-20 transition-all duration-700 transform group-hover:translate-z-12 text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
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

                            <div className="relative flex gap-6">
                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-20 h-20 rounded-full border-4 ${darkMode ? 'border-blue-900/30 bg-neutral-900 hover:border-blue-500/30' : 'border-blue-400/30 bg-white hover:border-blue-400/50'} transition-all duration-300`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
