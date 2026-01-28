import React, { useState } from 'react';
import { GraduationCap, Code2, MapPin, Languages, Sparkles, Play, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

// Exactly 17 lines of code for the About section (Python Version)
const aboutCodeTokens = [
    [ // Line 1
        { text: "class ", className: "text-purple-400" },
        { text: "Developer", className: "text-yellow-300" },
        { text: "(", className: "text-white" },
        { text: "Human", className: "text-green-400" },
        { text: "):", className: "text-white" }
    ],
    [ // Line 2
        { text: "    def ", className: "text-purple-400" },
        { text: "__init__", className: "text-blue-300" },
        { text: "(", className: "text-white" },
        { text: "self", className: "text-orange-300" },
        { text: "):", className: "text-white" }
    ],
    [ // Line 3
        { text: "        super", className: "text-blue-300" },
        { text: "().", className: "text-white" },
        { text: "__init__", className: "text-blue-300" },
        { text: "()", className: "text-white" }
    ],
    [ // Line 4
        { text: "        self", className: "text-orange-300" },
        { text: ".name ", className: "text-white" },
        { text: "= ", className: "text-purple-400" },
        { text: '"Minh Tuấn"', className: "text-green-300" }
    ],
    [ // Line 5
        { text: "        self", className: "text-orange-300" },
        { text: ".role ", className: "text-white" },
        { text: "= ", className: "text-purple-400" },
        { text: '"Software Engineer"', className: "text-green-300" }
    ],
    [ // Line 6
        { text: "        self", className: "text-orange-300" },
        { text: ".skills ", className: "text-white" },
        { text: "= [", className: "text-white" },
        { text: '"React"', className: "text-green-300" },
        { text: ", ", className: "text-white" },
        { text: '"Node"', className: "text-green-300" },
        { text: "]", className: "text-white" }
    ],
    [ // Line 7
        { text: "        self", className: "text-orange-300" },
        { text: ".traits ", className: "text-white" },
        { text: "= [", className: "text-white" },
        { text: '"Passion"', className: "text-green-300" },
        { text: ", ", className: "text-white" },
        { text: '"Curiosity"', className: "text-green-300" },
        { text: "]", className: "text-white" }
    ],
    [ // Line 8
        { text: "", className: "" }
    ],
    [ // Line 9
        { text: "    def ", className: "text-purple-400" },
        { text: "say_hello", className: "text-blue-300" },
        { text: "(", className: "text-white" },
        { text: "self", className: "text-orange-300" },
        { text: "):", className: "text-white" }
    ],
    [ // Line 10
        { text: "        print", className: "text-yellow-300" },
        { text: "(", className: "text-white" }
    ],
    [ // Line 11
        { text: "            ", className: "text-white" },
        { text: '"Ready to build amazing things together!"', className: "text-green-300" }
    ],
    [ // Line 12
        { text: "        )", className: "text-white" }
    ],
    [ // Line 13
        { text: "        return ", className: "text-purple-400" },
        { text: "self", className: "text-orange-300" },
        { text: ".smile()", className: "text-white" }
    ],
    [ // Line 14
        { text: "", className: "" }
    ],
    [ // Line 15
        { text: "if ", className: "text-purple-400" },
        { text: "__name__ ", className: "text-blue-300" },
        { text: "== ", className: "text-purple-400" },
        { text: '"__main__"', className: "text-green-300" },
        { text: ":", className: "text-white" }
    ],
    [ // Line 16
        { text: "    me ", className: "text-white" },
        { text: "= ", className: "text-purple-400" },
        { text: "Developer", className: "text-yellow-300" },
        { text: "()", className: "text-white" }
    ],
    [ // Line 17
        { text: "    me.", className: "text-white" },
        { text: "say_hello", className: "text-blue-300" },
        { text: "()", className: "text-white" }
    ]
];

export const About = ({ portfolioData, darkMode }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [showOutput, setShowOutput] = useState(false);
    const [outputText, setOutputText] = useState('');

    const infoItems = [
        { icon: GraduationCap, label: 'Education', value: 'TDTU - Ton Duc Thang University (2021 - 2025)' },
        { icon: Code2, label: 'Major', value: 'Software Engineering' },
        { icon: MapPin, label: 'Location', value: 'District 7, Ho Chi Minh City, Vietnam' },
        { icon: Languages, label: 'IELTS', value: 'Overall 7.0 ( L: 7.5 , R: 6.0 , W: 7.0 , S: 6.0)' }
    ];

    const handleRunCode = () => {
        if (isRunning) return;
        setIsRunning(true);
        setShowOutput(true);

        const message = "Ready to build amazing things together!";
        let currentIndex = 0;

        const typeInterval = setInterval(() => {
            currentIndex++;
            setOutputText(message.slice(0, currentIndex));

            if (currentIndex >= message.length) {
                clearInterval(typeInterval);
                setIsRunning(false);
            }
        }, 40);
    };

    const renderLine = (tokens) => {
        return tokens.map((token, idx) => (
            <span key={idx} className={token.className}>
                {token.text}
            </span>
        ));
    };

    return (
        <section id="about" className="py-20 px-4 relative">
            {/* Increased max-width to allow more wide content */}
            <div className="max-w-5xl mx-auto w-full">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Sparkles className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} />
                    <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
                        About Me
                    </h2>
                </div>

                {/* Main Card */}
                <div
                    className={`rounded-3xl p-6 sm:p-10 border ${darkMode ? 'bg-[#0f111a] border-white/10' : 'bg-white border-blue-100'} shadow-xl`}
                    style={{
                        animation: 'aboutPulse 4s ease-in-out infinite',
                        boxShadow: darkMode
                            ? '0 0 30px rgba(34, 211, 238, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            : '0 0 30px rgba(59, 130, 246, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                    }}
                >

                    {/* Bio text - Extra Light 200 Font - Wider */}
                    <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-xl sm:text-2xl mb-8 font-extralight max-w-4xl`} style={{ fontWeight: 200 }}>
                        {portfolioData.bio}
                    </p>

                    {/* Interactive Code Block */}
                    <div className={`rounded-2xl overflow-hidden border mb-8 transform transition-all hover:scale-[1.01] duration-500 ${darkMode ? 'border-slate-700/50 shadow-2xl shadow-cyan-900/10 hover:shadow-cyan-500/30 hover:border-cyan-500/50' : 'border-blue-200 shadow-xl hover:shadow-blue-400/40 hover:border-blue-400'}`}>
                        {/* Code Editor Header */}
                        <div className={`flex items-center justify-between px-4 py-3 ${darkMode ? 'bg-slate-800/80' : 'bg-blue-50'} border-b ${darkMode ? 'border-slate-700/50' : 'border-blue-200'}`}>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
                                </div>
                                {/* Corrected File Extension for Python */}
                                <span className={`text-xs font-mono ml-3 ${darkMode ? 'text-slate-400' : 'text-blue-600'} opacity-70`}>about.py</span>
                            </div>
                            <button
                                onClick={handleRunCode}
                                disabled={isRunning}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${isRunning
                                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg hover:shadow-cyan-500/25'
                                    }`}
                            >
                                <Play size={14} fill="currentColor" />
                                {isRunning ? 'Running...' : 'Run Code'}
                            </button>
                        </div>

                        {/* Code Content */}
                        <div className={`p-6 font-mono text-xs sm:text-sm ${darkMode ? 'bg-[#0d1117]' : 'bg-slate-900'}`}>
                            {aboutCodeTokens.map((tokens, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex min-h-[1.5em]"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                >
                                    <span className="text-slate-600 w-6 text-right mr-4 select-none flex-shrink-0 font-light opacity-50">
                                        {idx + 1}
                                    </span>
                                    {/* Standard font weight */}
                                    <div className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {renderLine(tokens)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Console Output */}
                        {showOutput && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className={`border-t ${darkMode ? 'border-slate-700/50 bg-[#0a0a0f]' : 'border-slate-700 bg-slate-950'} p-4`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal size={14} className="text-slate-500" />
                                    <span className="text-xs text-slate-500 font-mono">Console</span>
                                </div>
                                <div className="font-mono text-sm text-green-400 font-light flex items-center">
                                    <span className="text-slate-500 mr-2">{">"}</span>
                                    {outputText}
                                    {!isRunning && outputText && <Sparkles size={14} className="text-lime-400 ml-2 flex-shrink-0 animate-pulse" />}
                                    {isRunning && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle" />}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Info cards grid */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t ${darkMode ? 'border-white/10' : 'border-blue-100'}`}>
                        {infoItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${darkMode
                                    ? 'bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 hover:border-cyan-500/20'
                                    : 'bg-blue-50/50 hover:bg-white border border-blue-100 hover:border-blue-300'
                                    }`}
                            >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${darkMode
                                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30'
                                    : 'bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/50'
                                    }`}>
                                    <item.icon className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                        {item.label}
                                    </p>
                                    <p className={`text-sm ${darkMode ? 'text-blue-100' : 'text-blue-900'} font-extralight`} style={{ fontWeight: 200 }}>
                                        {item.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
