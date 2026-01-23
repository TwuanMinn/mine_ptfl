import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, Code2, MapPin, Languages, Sparkles, Play, Terminal } from 'lucide-react';

// Code tokens for the interactive code block - 16 lines
const aboutCodeTokens = [
    [
        { text: "import ", className: "text-purple-400" },
        { text: "{ ", className: "text-white" },
        { text: "Developer", className: "text-yellow-300" },
        { text: " } ", className: "text-white" },
        { text: "from ", className: "text-purple-400" },
        { text: '"life"', className: "text-green-400" },
        { text: ";", className: "text-white" }
    ],
    [
        { text: "", className: "" }
    ],
    [
        { text: "const ", className: "text-purple-400" },
        { text: "aboutMe ", className: "text-cyan-300" },
        { text: "= ", className: "text-white" },
        { text: "{", className: "text-white" }
    ],
    [
        { text: "  name", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Minh Tuấn"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  role", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Software Engineer"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  passion", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Building clean UIs"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  skills", className: "text-blue-300" },
        { text: ": [", className: "text-white" },
        { text: '"React"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"Node"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"TypeScript"', className: "text-green-400" },
        { text: "],", className: "text-white" }
    ],
    [
        { text: "  location", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Vietnam"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  status", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Open for work"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  hobbies", className: "text-blue-300" },
        { text: ": [", className: "text-white" },
        { text: '"Photography"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"Gaming"', className: "text-green-400" },
        { text: "],", className: "text-white" }
    ],
    [
        { text: "  hardWorker", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  hireable", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [
        { text: "  problemSolver", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" }
    ],
    [
        { text: "};", className: "text-white" }
    ],
    [
        { text: "", className: "" }
    ],
    [
        { text: "console", className: "text-cyan-300" },
        { text: ".", className: "text-white" },
        { text: "log", className: "text-yellow-300" },
        { text: "(", className: "text-white" },
        { text: '"Ready to build!"', className: "text-green-400" },
        { text: ");", className: "text-white" }
    ]
];




const TiltCard = ({ children, className, style }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 10 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

export const About = ({ portfolioData, darkMode, aboutHeadingVisible, aboutWordsVisible }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [outputText, setOutputText] = useState('');

    const infoItems = [
        { icon: GraduationCap, label: 'Education', value: 'TDTU - Ton Duc Thang University (2021 - 2025)', delay: 0 },
        { icon: Code2, label: 'Major', value: 'Software Engineering', delay: 0.1 },
        { icon: MapPin, label: 'Location', value: 'District 7, Ho Chi Minh City, Vietnam', delay: 0.2 },
        { icon: Languages, label: 'IELTS', value: '7.0 (L: 7.5, R: 6.0, S: 6.0, W: 7.0)', delay: 0.3 }
    ];

    const handleRunCode = () => {
        if (isRunning) return;

        setIsRunning(true);
        setShowOutput(true);
        setOutputText('');

        // Fixed typing animation - using ref-like approach to avoid stale closure
        const message = "✨ Ready to build amazing things together!";
        const chars = message.split('');
        let currentIndex = 0;

        const typeInterval = setInterval(() => {
            if (currentIndex < chars.length) {
                const charToAdd = chars[currentIndex];
                setOutputText(prev => prev + charToAdd);
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                setIsRunning(false);
            }
        }, 40);
    };

    // Render code tokens
    const renderLine = (tokens) => {
        return tokens.map((token, idx) => (
            <span key={idx} className={token.className}>
                {token.text}
            </span>
        ));
    };

    return (
        <section id="about" className="py-20 px-2 relative overflow-hidden" style={{ maxWidth: '100vw' }}>
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-[100px] ${darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'}`} />
                <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-[120px] ${darkMode ? 'bg-cyan-600/8' : 'bg-cyan-400/15'}`} />
            </div>

            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full relative" style={{ padding: '0 0.5rem' }}>
                    {/* Section Header with sparkle */}
                    <div className="flex items-center gap-3 mb-8">
                        <Sparkles className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} style={{
                            animation: 'pulse-custom 2s ease-in-out infinite'
                        }} />
                        <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>
                            {"About Me".split('').map((char, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block"
                                    style={{
                                        opacity: aboutHeadingVisible ? 1 : 0,
                                        transform: aboutHeadingVisible
                                            ? 'translateY(0px) rotateX(0deg) scale(1)'
                                            : 'translateY(-40px) rotateX(90deg) scale(0.5)',
                                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s`,
                                        display: char === ' ' ? 'inline' : 'inline-block',
                                        width: char === ' ' ? '0.3em' : 'auto',
                                        transformOrigin: 'bottom center'
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <motion.div
                        className={`border-trace rounded-3xl ${darkMode ? 'bg-[#0f111a]' : 'bg-white'} shadow-2xl cursor-pointer`}
                        whileHover={{
                            scale: 1.01,
                            boxShadow: darkMode
                                ? '0 0 50px rgba(34, 211, 238, 0.12), 0 0 100px rgba(59, 130, 246, 0.08)'
                                : '0 25px 60px -15px rgba(59, 130, 246, 0.2)'
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className={`relative border-trace-inner p-6 sm:p-10 ${darkMode ? 'bg-[#0f111a]/90' : 'bg-white/90'} rounded-3xl`}>
                            {/* Bio text */}
                            <p
                                className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-lg sm:text-xl mb-8`}
                                style={{ fontFamily: "'Google Sans Code', 'Fira Code', monospace" }}
                            >
                                {portfolioData.bio.split(' ').map((word, idx) => (
                                    <span key={idx} className="inline-block mr-1.5" style={{
                                        opacity: aboutWordsVisible[idx] ? 1 : 0,
                                        transform: aboutWordsVisible[idx] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
                                        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
                                    }}>
                                        {word}
                                    </span>
                                ))}
                            </p>

                            {/* Interactive Code Block */}
                            <div className={`rounded-2xl overflow-hidden border mb-8 ${darkMode ? 'border-slate-700/50' : 'border-blue-200'}`}
                                style={{
                                    opacity: aboutWordsVisible[0] ? 1 : 0,
                                    transform: aboutWordsVisible[0] ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'all 0.6s ease 0.3s'
                                }}
                            >
                                {/* Code Editor Header */}
                                <div className={`flex items-center justify-between px-4 py-3 ${darkMode ? 'bg-slate-800/80' : 'bg-blue-50'} border-b ${darkMode ? 'border-slate-700/50' : 'border-blue-200'}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <span className={`text-xs font-mono ml-3 ${darkMode ? 'text-slate-400' : 'text-blue-600'}`}>about.js</span>
                                    </div>
                                    <button
                                        onClick={handleRunCode}
                                        disabled={isRunning}
                                        className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${isRunning
                                            ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                            : darkMode
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105'
                                                : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-400 hover:to-cyan-500 shadow-lg shadow-blue-500/30'
                                            }`}
                                    >
                                        <Play size={14} fill="currentColor" />
                                        {isRunning ? 'Running...' : 'Run Code'}
                                    </button>
                                </div>

                                {/* Code Content */}
                                <div className={`p-4 font-mono text-xs sm:text-sm ${darkMode ? 'bg-[#0d1117]' : 'bg-slate-900'}`}>
                                    {aboutCodeTokens.map((tokens, idx) => (
                                        <div key={idx} className="flex min-h-[1.5em]">
                                            <span className="text-slate-600 w-6 text-right mr-4 select-none flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <div>
                                                {renderLine(tokens)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Console Output */}
                                {showOutput && (
                                    <div className={`border-t ${darkMode ? 'border-slate-700/50 bg-[#0a0a0f]' : 'border-slate-700 bg-slate-950'} p-4`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Terminal size={14} className="text-slate-500" />
                                            <span className="text-xs text-slate-500 font-mono">Console</span>
                                        </div>
                                        <div className="font-mono text-sm text-green-400">
                                            <span className="text-slate-500">{">"}</span> {outputText}
                                            {isRunning && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Info cards grid */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t ${darkMode ? 'border-white/10' : 'border-blue-100'}`}>
                                {infoItems.map((item, index) => (
                                    <TiltCard
                                        key={index}
                                        className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode
                                            ? 'bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 hover:border-cyan-400/50 hover:shadow-cyan-500/20'
                                            : 'bg-blue-50/50 hover:bg-white border border-blue-100 hover:border-blue-400 hover:shadow-blue-500/20'
                                            }`}
                                        style={{
                                            opacity: aboutWordsVisible[0] ? 1 : 0,
                                            transform: aboutWordsVisible[0] ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `all 0.5s ease ${item.delay + 0.5}s`
                                        }}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${darkMode
                                            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30'
                                            : 'bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/50'
                                            }`} style={{ transform: "translateZ(30px)" }}>
                                            <item.icon className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                                        </div>
                                        <div className="flex-1 min-w-0" style={{ transform: "translateZ(20px)" }}>
                                            <p className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.label}
                                            </p>
                                            <p className={`text-base font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-900'} truncate`}>
                                                {item.value}
                                            </p>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Reveal>
        </section>
    );
};

