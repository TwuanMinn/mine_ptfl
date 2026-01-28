import React, { useState } from 'react';
import { GraduationCap, Code2, MapPin, Languages, Sparkles, Play, Terminal } from 'lucide-react';

// Code tokens for the interactive code block
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
    [{ text: "", className: "" }],
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
        { text: "  hireable", className: "text-blue-300" },
        { text: ": ", className: "text-white" },
        { text: "true", className: "text-orange-400" }
    ],
    [{ text: "};", className: "text-white" }]
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
        setOutputText('');

        const message = "✨ Ready to build amazing things together!";
        let currentIndex = 0;

        const typeInterval = setInterval(() => {
            if (currentIndex < message.length) {
                setOutputText(prev => prev + message[currentIndex]);
                currentIndex++;
            } else {
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
            <div className="max-w-4xl mx-auto w-full">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Sparkles className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} />
                    <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>
                        About Me
                    </h2>
                </div>

                {/* Main Card */}
                <div className={`rounded-3xl p-6 sm:p-10 border ${darkMode ? 'bg-[#0f111a] border-white/10' : 'bg-white border-blue-100'} shadow-xl`}>

                    {/* Bio text */}
                    <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-lg mb-8`}>
                        {portfolioData.bio}
                    </p>

                    {/* Interactive Code Block */}
                    <div className={`rounded-2xl overflow-hidden border mb-8 ${darkMode ? 'border-slate-700/50' : 'border-blue-200'}`}>
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
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg'
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
                            <div
                                key={index}
                                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${darkMode
                                        ? 'bg-slate-800/40 hover:bg-slate-800/60 border border-white/5'
                                        : 'bg-blue-50/50 hover:bg-white border border-blue-100'
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
                                    <p className={`text-sm ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
