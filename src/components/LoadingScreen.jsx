import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        // Animate 25 code lines appearing - fast typing over 3 seconds
        const lineTimers = [];
        // Calculate delays for 25 lines (approx 120ms per line)
        const delays = Array.from({ length: 26 }, (_, i) => i * 120);

        delays.forEach((delay, index) => {
            const timer = setTimeout(() => {
                setCurrentLine(index + 1);
            }, delay);
            lineTimers.push(timer);
        });

        // Complete loading after 8 seconds (3s typing + 5s pause)
        const completeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 8000);

        // Call onLoadingComplete after exit animation
        const callbackTimer = setTimeout(() => {
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 8500);

        return () => {
            lineTimers.forEach(t => clearTimeout(t));
            clearTimeout(completeTimer);
            clearTimeout(callbackTimer);
        };
    }, [onLoadingComplete]);

    // 25 lines of code
    const codeLines = [
        { text: 'import { Bio, Skill } from "life";' },
        { text: '' },
        { text: 'const developer = {' },
        { text: '  name: "Minh Tuấn",' },
        { text: '  age: 23,' },
        { text: '  role: "Software Engineer",' },
        { text: '  email: "tuandev@gmail.com",' },
        { text: '  location: "Vietnam",' },
        { text: '  skills: ["React", "Node", "Design"],' },
        { text: '  hardWorker: true,' },
        { text: '  quickLearner: true,' },
        { text: '  problemSolver: true,' },
        { text: '  coffee: true,' },
        { text: '  sleep: false,' },
        { text: '  passion: "Crafting intuitive and",' },
        { text: '           "visually appealing UI/UX",' },
        { text: '  hobbies: ["Coding", "Writing"],' },
        { text: '  hireable: function() {' },
        { text: '    return this.hardWorker;' },
        { text: '  },' },
        { text: '  start: () => {' },
        { text: '    console.log("Ready!");' },
        { text: '  }' },
        { text: '};' },
        { text: 'developer.init();' },
    ];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a12]"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -50,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                            <div className="bg-[#0d1117] p-6 font-mono text-xs sm:text-sm min-h-[320px] overflow-hidden">
                                {codeLines.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: index < currentLine ? 1 : 0,
                                            x: index < currentLine ? 0 : -10
                                        }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <span className="text-slate-600 w-6 text-right mr-4 select-none flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1 whitespace-pre">
                                            {line.text.includes('import') && (
                                                <>
                                                    <span className="text-purple-400">import </span>
                                                    <span className="text-white">{'{ '}</span>
                                                    <span className="text-yellow-300">Bio</span>
                                                    <span className="text-white">, </span>
                                                    <span className="text-yellow-300">Skill</span>
                                                    <span className="text-white">{' }'}</span>
                                                    <span className="text-purple-400"> from </span>
                                                    <span className="text-green-400">"life"</span>
                                                    <span className="text-white">;</span>
                                                </>
                                            )}
                                            {line.text.includes('const') && (
                                                <>
                                                    <span className="text-purple-400">const</span>
                                                    <span className="text-cyan-300"> developer</span>
                                                    <span className="text-white"> = {'{'}</span>
                                                </>
                                            )}
                                            {line.text.includes('name:') && (
                                                <>
                                                    <span className="text-blue-300">  name</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Minh Tuấn"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('role:') && (
                                                <>
                                                    <span className="text-blue-300">  role</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Software Engineer"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('skills:') && (
                                                <>
                                                    <span className="text-blue-300">  skills</span>
                                                    <span className="text-white">: [</span>
                                                    <span className="text-green-400">"React"</span>
                                                    <span className="text-white">, </span>
                                                    <span className="text-green-400">"Node"</span>
                                                    <span className="text-white">, </span>
                                                    <span className="text-green-400">"Design"</span>
                                                    <span className="text-white">],</span>
                                                </>
                                            )}
                                            {/* Generic Key-Value Handling */}
                                            {(line.text.includes('email:') || line.text.includes('location:')) && (
                                                <>
                                                    <span className="text-blue-300">  {line.text.split(':')[0].trim()}</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">{line.text.split(':')[1].trim().replace(',', '')}</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {(line.text.includes('passion:') && !line.text.includes('visually')) && (
                                                <>
                                                    <span className="text-blue-300">  passion</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Crafting intuitive and"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('visually appealing') && (
                                                <>
                                                    <span className="text-green-400">           "visually appealing UI/UX"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {(line.text.includes('hardWorker:') || line.text.includes('quickLearner:') || line.text.includes('problemSolver:') || line.text.includes('coffee:') || line.text.includes('sleep:') || line.text.includes('age:')) && (
                                                <>
                                                    <span className="text-blue-300">  {line.text.split(':')[0].trim()}</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-orange-400">{line.text.includes('true') || line.text.includes('false') ? (line.text.includes('true') ? 'true' : 'false') : line.text.match(/\d+/)[0]}</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('hobbies:') && (
                                                <>
                                                    <span className="text-blue-300">  hobbies</span>
                                                    <span className="text-white">: [</span>
                                                    <span className="text-green-400">"Coding"</span>
                                                    <span className="text-white">, </span>
                                                    <span className="text-green-400">"Writing"</span>
                                                    <span className="text-white">],</span>
                                                </>
                                            )}
                                            {line.text.includes('hireable:') && (
                                                <>
                                                    <span className="text-blue-300">  hireable</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-purple-400">function</span>
                                                    <span className="text-white">() {'{'}</span>
                                                </>
                                            )}
                                            {line.text.includes('start:') && (
                                                <>
                                                    <span className="text-blue-300">  start</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-purple-400">()</span>
                                                    <span className="text-purple-400"> {'=>'} </span>
                                                    <span className="text-white">{'{'}</span>
                                                </>
                                            )}
                                            {line.text.includes('console.log') && (
                                                <>
                                                    <span className="text-white">    console.</span>
                                                    <span className="text-yellow-300">log</span>
                                                    <span className="text-white">(</span>
                                                    <span className="text-green-400">"Ready!"</span>
                                                    <span className="text-white">);</span>
                                                </>
                                            )}
                                            {line.text.includes('return') && (
                                                <>
                                                    <span className="text-purple-400">    return this</span>
                                                    <span className="text-white">.hardWorker;</span>
                                                </>
                                            )}
                                            {line.text.trim() === '},' && (
                                                <span className="text-white">  {'},'}</span>
                                            )}
                                            {line.text.trim() === '}' && (
                                                <span className="text-white">  {'}'}</span>
                                            )}
                                            {line.text === '};' && (
                                                <span className="text-white">{'};'}</span>
                                            )}
                                            {line.text.includes('.init()') && (
                                                <>
                                                    <span className="text-cyan-300">developer</span>
                                                    <span className="text-white">.</span>
                                                    <span className="text-yellow-300">init</span>
                                                    <span className="text-white">();</span>
                                                </>
                                            )}
                                        </span>
                                    </motion.div>
                                ))}

                                {/* Blinking cursor */}
                                <motion.div
                                    className="flex mt-1"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    <span className="text-slate-600 w-6 text-right mr-4 select-none">
                                        {codeLines.length + 1}
                                    </span>
                                    <span className="w-2 h-5 bg-cyan-400" />
                                </motion.div>
                            </div>

                            {/* Loading bar at bottom */}
                            <div className="bg-slate-800/50 px-4 py-2 border-t border-slate-700/50">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden"
                                    >
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                                            }}
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 8.0, ease: 'easeInOut' }}
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
                                                                duration: 3,
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
