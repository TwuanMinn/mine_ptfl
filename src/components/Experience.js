import React from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
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
                        <div className={`absolute left-10 top-0 bottom-20 w-2 ${darkMode ? 'bg-slate-800/20' : 'bg-blue-200/20'}`}></div>

                        {/* Illuminated scrolling line - Smoothed with Framer Motion */}
                        <motion.div
                            className={`absolute left-[38px] top-0 w-2 ${darkMode
                                ? 'bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-500 shadow-[0_0_40px_rgba(34,211,238,0.9),0_0_20px_rgba(255,255,255,0.4)]'
                                : 'bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)]'
                                }`}
                            style={{
                                height: 'calc(100% - 80px)',
                                scaleY,
                                transformOrigin: 'top'
                            }}
                        />

                        <div className="space-y-0">
                            {portfolioData.experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="relative flex gap-6 pb-12"
                                >
                                    <div className="relative z-10 flex-shrink-0 perspective-1000">
                                        <div className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 transform-style-3d hover:rotate-y-12 hover:rotate-x-12`}>

                                            {/* Neon Glow Container */}
                                            <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: darkMode
                                                        ? 'radial-gradient(circle, rgba(34,211,238,0.8) 0%, rgba(59,130,246,0.4) 100%)'
                                                        : 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.4) 100%)',
                                                    animation: 'pulse-custom 2s infinite'
                                                }}
                                            />

                                            {/* Core Orb */}
                                            <div className={`absolute inset-1 rounded-full z-10 transition-all duration-500 border-2 ${darkMode ? 'border-cyan-400 bg-slate-900' : 'border-blue-500 bg-white'}`}
                                                style={{
                                                    boxShadow: darkMode
                                                        ? 'inset 0 0 15px rgba(34,211,238,0.3)'
                                                        : 'inset 0 0 15px rgba(59,130,246,0.2)'
                                                }}
                                            >
                                                {/* Central Dot */}
                                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'}`}
                                                    style={{
                                                        boxShadow: darkMode
                                                            ? '0 0 10px #22d3ee, 0 0 20px #22d3ee'
                                                            : '0 0 10px #3b82f6, 0 0 20px #3b82f6'
                                                    }}
                                                />
                                            </div>

                                            {/* Rotating Rings */}
                                            <div className={`absolute -inset-2 rounded-full border border-dashed ${darkMode ? 'border-cyan-500/30' : 'border-blue-400/30'} animate-spin-slow`}
                                                style={{ animationDuration: '10s' }}
                                            />
                                            <div className={`absolute -inset-2 rounded-full border border-dashed ${darkMode ? 'border-purple-500/30' : 'border-indigo-400/30'} animate-spin-reverse-slow`}
                                                style={{ animationDuration: '15s' }}
                                            />
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
