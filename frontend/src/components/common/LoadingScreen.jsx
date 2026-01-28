import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined tokens for exact syntax highlighting and typing control
const codeTokens = [
    [ // Line 1
        { text: "import ", className: "text-purple-400" },
        { text: "{ ", className: "text-white" },
        { text: "Bio", className: "text-yellow-300" },
        { text: ", ", className: "text-white" },
        { text: "Skill", className: "text-yellow-300" },
        { text: " } ", className: "text-white" },
        { text: "from ", className: "text-purple-400" },
        { text: '"life"', className: "text-green-400" },
        { text: ";", className: "text-white" }
    ],
    [ // Line 2 (Empty)
        { text: "", className: "" }
    ],
    [ // Line 3
        { text: "const ", className: "text-purple-400" },
        { text: "developer ", className: "text-cyan-300" },
        { text: "= ", className: "text-white" },
        { text: "{", className: "text-white" }
    ],
    [ // Line 4
        { text: "  name", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Minh Tuấn"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 5
        { text: "  age", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "23", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 6
        { text: "  role", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Software Engineer"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 7
        { text: "  email", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"tuandev@gmail.com"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 8
        { text: "  location", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Vietnam"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 9
        { text: "  skills", className: "text-blue-300" },
        { text: ": [", className: "text-white" },
        { text: '"React"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"Node"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"Design"', className: "text-green-400" },
        { text: "],", className: "text-white" }
    ],
    [ // Line 10
        { text: "  hardWorker", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 11
        { text: "  quickLearner", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 12
        { text: "  problemSolver", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 13
        { text: "  coffee", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 14
        { text: "  sleep", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "false", className: "text-orange-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 15
        { text: "  passion", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: '"Crafting intuitive and"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 16
        { text: "           ", className: "text-white" },
        { text: '"visually appealing UI/UX"', className: "text-green-400" },
        { text: ",", className: "text-white" }
    ],
    [ // Line 17
        { text: "  hobbies", className: "text-blue-300" },
        { text: ": [", className: "text-white" },
        { text: '"Coding"', className: "text-green-400" },
        { text: ", ", className: "text-white" },
        { text: '"Writing"', className: "text-green-400" },
        { text: "],", className: "text-white" }
    ],
    [ // Line 18
        { text: "  hireable", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "function", className: "text-purple-400" },
        { text: "() {", className: "text-white" }
    ],
    [ // Line 19
        { text: "    return this", className: "text-purple-400" },
        { text: ".hardWorker;", className: "text-white" }
    ],
    [ // Line 20
        { text: "  },", className: "text-white" }
    ],
    [ // Line 21
        { text: "  start", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "() ", className: "text-purple-400" },
        { text: "=> ", className: "text-purple-400" },
        { text: "{", className: "text-white" }
    ],
    [ // Line 22
        { text: "    console.", className: "text-white" },
        { text: "log", className: "text-yellow-300" },
        { text: "(", className: "text-white" },
        { text: '"Ready!"', className: "text-green-400" },
        { text: ");", className: "text-white" }
    ],
    [ // Line 23
        { text: "  }", className: "text-white" }
    ],
    [ // Line 24
        { text: "};", className: "text-white" }
    ],
    [ // Line 25
        { text: "developer.", className: "text-cyan-300" },
        { text: "init", className: "text-yellow-300" },
        { text: "();", className: "text-white" }
    ]
];

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    // Blinking cursor independent of typing
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing Logic
    useEffect(() => {
        if (!isLoading) return;

        // If all lines typed
        if (lineIndex >= codeTokens.length) {
            const completeTimer = setTimeout(() => {
                setIsLoading(false);
            }, 800); // Pause before fading out

            const callbackTimer = setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 1300); // Wait for exit animation

            return () => {
                clearTimeout(completeTimer);
                clearTimeout(callbackTimer);
            };
        }

        const currentLineTokens = codeTokens[lineIndex];
        const currentLineText = currentLineTokens.map(t => t.text).join('');

        // Typing speed
        const typingSpeed = 1; // ms per char (faster typing)

        const timeout = setTimeout(() => {
            if (charIndex < currentLineText.length) {
                setCharIndex(prev => prev + 1);
            } else {
                // Line complete, move to next
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [lineIndex, charIndex, isLoading, onLoadingComplete]);


    // Helper to render partial tokens based on char limit
    const renderLine = (tokens, limit) => {
        let currentCount = 0;
        return tokens.map((token, idx) => {
            if (currentCount >= limit) return null; // Fully hidden token

            const remaining = limit - currentCount;
            const textToShow = token.text.slice(0, remaining);
            currentCount += token.text.length;

            return (
                <span key={idx} className={token.className}>
                    {textToShow}
                </span>
            );
        });
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a12]"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.2,
                        filter: "blur(10px)"
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                            }}
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Main content - Code editor style */}
                    <motion.div
                        className="relative z-10 w-full max-w-lg mx-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Terminal window */}
                        <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
                            {/* Window header */}
                            <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-xs text-slate-400 font-mono">portfolio.js</span>
                                </div>
                            </div>

                            {/* Code content */}
                            <div className="bg-[#0d1117] p-6 font-mono text-xs sm:text-sm min-h-[320px] overflow-hidden whitespace-pre">
                                {codeTokens.map((tokens, idx) => {
                                    // Only render lines up to current index
                                    if (idx > lineIndex) return null;

                                    const isCurrentLine = idx === lineIndex;
                                    const limit = isCurrentLine ? charIndex : 9999;

                                    return (
                                        <div key={idx} className="flex min-h-[1.5em]">
                                            <span className="text-slate-600 w-6 text-right mr-4 select-none flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <div>
                                                {renderLine(tokens, limit)}
                                                {isCurrentLine && showCursor && (
                                                    <span className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Loading bar at bottom */}
                            <div className="bg-slate-800/50 px-4 py-2 border-t border-slate-700/50">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden"
                                    >
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                                            }}
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 8.5, ease: 'easeInOut' }}
                                        />
                                    </motion.div>
                                    <div className="flex items-center gap-2">
                                        {/* 3D Atom Animation */}
                                        <div className="relative w-12 h-12 flex items-center justify-center perspective-500">
                                            {/* Nucleus */}
                                            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.9)] z-10" />

                                            {/* 3 Intersecting Orbits */}
                                            {[0, 60, 120].map((angle, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute inset-0"
                                                    style={{ transform: `rotateZ(${angle}deg)` }}
                                                >
                                                    {/* Orbit Ring Container - Tilted to create ellipse */}
                                                    <div className="w-full h-full" style={{ transform: 'rotateX(70deg)' }}>
                                                        {/* Spinning Path */}
                                                        <motion.div
                                                            className="absolute inset-0 rounded-full border-[1.5px] border-cyan-400/60"
                                                            animate={{ rotate: 360 }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "linear",
                                                                delay: i * -1 // Desynchronize electrons
                                                            }}
                                                            style={{ transformStyle: "preserve-3d" }}
                                                        >
                                                            {/* Electron - Counter-rotated to stay round */}
                                                            <div
                                                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
                                                                style={{ transform: 'rotateX(-70deg)' }}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <motion.span
                                            className="text-sm text-slate-300 font-mono tracking-wider"
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            Loading...
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating code symbols */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {['</', '/>', '{', '}', '()', '=>', '[]', '&&'].map((symbol, i) => (
                            <motion.span
                                key={i}
                                className="absolute text-cyan-500/20 font-mono text-2xl"
                                style={{
                                    left: `${10 + (i * 12)}%`,
                                    top: `${20 + (i % 3) * 25}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            >
                                {symbol}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
