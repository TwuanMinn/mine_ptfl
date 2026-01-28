import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, Loader2 } from 'lucide-react';

export default function Pending({ darkMode }) {
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-[#050508]' : 'bg-slate-50'}`}>
            {/* Ambient background glow effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center px-6"
            >
                <div className="relative inline-block mb-8 sm:mb-12">
                    {/* Premium Cyber-Flux Loader Container */}
                    <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-[2.5rem] sm:rounded-[3.5rem] bg-slate-900/40 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)] sm:shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                        {/* Ambient Internal Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

                        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                            {/* Outer Hyper-Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-transparent border-t-cyan-500 border-l-cyan-400/30 rounded-full"
                            />

                            {/* Middle Counter-Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 sm:inset-3 border-2 border-transparent border-b-blue-500 border-r-blue-400/30 rounded-full"
                            />

                            {/* Inner Energy Pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.7, 0.3],
                                    boxShadow: [
                                        "0 0 15px rgba(34,211,238,0.2)",
                                        "0 0 50px rgba(34,211,238,0.5)",
                                        "0 0 15px rgba(34,211,238,0.2)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-6 sm:inset-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full blur-[2px]"
                            />

                            {/* Orbiting Particles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1.5 + i, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-lg"
                                        style={{
                                            background: i === 0 ? '#22d3ee' : i === 1 ? '#3b82f6' : '#a855f7',
                                            boxShadow: `0 0 10px ${i === 0 ? '#22d3ee' : i === 1 ? '#3b82f6' : '#a855f7'}`
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 flex items-center justify-center border border-white/20 shadow-xl z-20">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Clock size={24} className="text-white sm:hidden" />
                            <Clock size={32} className="text-white hidden sm:block" />
                        </motion.div>
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase">
                        Pending
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12 font-medium opacity-60 ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
                >
                    This certification is currently being processed or the verification is in progress. Check back soon for the verified credential.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl mx-auto overflow-hidden shadow-2xl cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    <ArrowLeft size={18} className="relative z-10 text-white group-hover:-translate-x-1 transition-transform sm:w-[20px] sm:h-[20px]" />
                    <span className="relative z-10 font-bold text-white uppercase tracking-widest text-xs sm:text-sm">Return Back</span>
                </motion.button>
            </motion.div>

            {/* Background elements */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 opacity-20`}
                style={{
                    background: 'linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderFlow 3s linear infinite'
                }}
            />

            <style>{`
                @keyframes borderFlow {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
            `}</style>
        </div>
    );
}
