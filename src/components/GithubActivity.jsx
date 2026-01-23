import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const GithubActivity = ({ darkMode }) => {
    // Mock data for the 52 weeks (simplified grid)
    const weeks = 28; // showing about half year for the card
    const days = 7;

    // Contribution levels: 0 (none) to 4 (most)


    // Generate a random-looking but stable grid
    const gridData = Array.from({ length: weeks * days }, (_, i) => {
        // High activity clusters
        const seed = Math.sin(i * 0.1) + Math.random();
        if (seed > 1.2) return 4;
        if (seed > 0.8) return 3;
        if (seed > 0.4) return 2;
        if (seed > 0) return 1;
        return 0;
    });

    const getLevelColor = (level) => {
        if (darkMode) {
            switch (level) {
                case 4: return 'bg-[#39d353]'; // Brightest
                case 3: return 'bg-[#26a641]';
                case 2: return 'bg-[#006d32]';
                case 1: return 'bg-[#0e4429]';
                default: return 'bg-slate-800/40'; // Empty
            }
        } else {
            switch (level) {
                case 4: return 'bg-[#216e39]';
                case 3: return 'bg-[#30a14e]';
                case 2: return 'bg-[#40c463]';
                case 1: return 'bg-[#9be9a8]';
                default: return 'bg-slate-100';
            }
        }
    };

    return (
        <motion.div
            className={`glass-card rounded-3xl p-6 max-w-2xl mx-auto my-12 backdrop-blur-xl transition-all duration-500 cursor-pointer ${darkMode ? 'border-white/15 bg-white/[0.03] white-glow' : 'bg-white/90 border-blue-100 shadow-xl'}`}
            whileHover={{
                scale: 1.02,
                boxShadow: darkMode
                    ? '0 0 40px rgba(34, 211, 238, 0.15), 0 0 80px rgba(59, 130, 246, 0.1)'
                    : '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                borderColor: darkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.5)'
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className={`flex items-center gap-3 px-4 py-2 rounded-full border ${darkMode ? 'bg-slate-950/50 border-white/10' : 'bg-blue-50 border-blue-200'} `}>
                    <Github size={20} className={darkMode ? 'text-white' : 'text-blue-600'} />
                    <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-blue-900'} whitespace-nowrap`}>Github activity</span>
                </div>
                <div className={`text-sm font-bold tracking-tight ${darkMode ? 'text-white/90' : 'text-slate-600'}`}>
                    1,537 contributions in the last year
                </div>
            </div>

            {/* Contribution Grid */}
            <div className="relative overflow-x-auto no-scrollbar pb-6">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
                    {gridData.map((level, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-sm transition-all duration-500 hover:scale-125 hover:z-10 ${getLevelColor(level)} ${level > 0 ? 'shadow-[0_0_10px_currentColor]' : ''}`}
                            style={{ color: level > 0 ? 'rgba(57, 211, 83, 0.2)' : 'transparent' }}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className={`mt-8 text-sm font-bold ${darkMode ? 'text-white/40' : 'text-slate-500'}`}>
                Last pushed on Tuesday, January 20th 2026
            </div>
        </motion.div>
    );
};
