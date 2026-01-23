import React from 'react';
import { Keyboard, Timer, Target, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const TypingSpeed = ({ darkMode }) => {
    return (
        <motion.div
            className={`glass-card rounded-[2.5rem] p-8 max-w-2xl mx-auto relative overflow-hidden backdrop-blur-xl transition-all duration-500 cursor-pointer ${darkMode ? 'bg-white/[0.03] border-white/15 white-glow' : 'bg-white border-blue-100 shadow-xl'}`}
            whileHover={{
                scale: 1.02,
                boxShadow: darkMode
                    ? '0 0 40px rgba(34, 211, 238, 0.15), 0 0 80px rgba(59, 130, 246, 0.1)'
                    : '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
                borderColor: darkMode ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.5)'
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Background Large Number for depth */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold select-none pointer-events-none transition-opacity duration-700 ${darkMode ? 'text-white/[0.05]' : 'text-blue-900/[0.03]'}`}>
                101
            </div>

            {/* Header Badge */}
            <div className="flex mb-12">
                <div className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-white/10 text-white' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                    <Keyboard size={18} strokeWidth={2.5} />
                    <span className="font-bold text-sm tracking-tight">Typing speed</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex items-baseline gap-3 mb-12 relative z-10">
                <span className={`text-[7rem] font-bold leading-none tracking-tighter ${darkMode ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-blue-900'}`}>
                    101
                </span>
                <span className={`text-3xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-500'}`}>
                    wpm
                </span>
            </div>

            {/* Stats Footer */}
            <div className="flex items-center gap-8 relative z-10">
                <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-slate-600'}`}>
                    <Timer size={20} className={darkMode ? "text-white/60" : "text-slate-400"} />
                    <span className="text-xl font-bold">15s</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-slate-600'}`}>
                    <Target size={20} className={darkMode ? "text-white/60" : "text-slate-400"} />
                    <span className="text-xl font-bold">100%</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-slate-600'}`}>
                    <Languages size={20} className={darkMode ? "text-white/60" : "text-slate-400"} />
                    <span className="text-xl font-bold uppercase tracking-widest">en</span>
                </div>
            </div>
        </motion.div>
    );
};
