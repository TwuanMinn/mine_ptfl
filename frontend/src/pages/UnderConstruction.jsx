import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Rocket, Code2 } from 'lucide-react';

export default function UnderConstruction({ darkMode }) {
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-[#050508]' : 'bg-slate-50'}`}>
            {/* Ambient background glow effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center px-6"
            >
                <div className="relative inline-block mb-8 sm:mb-12">
                    {/* Premium Construction Loader Container */}
                    <motion.div
                        animate={{
                            borderColor: ["rgba(255,255,255,0.1)", "rgba(251,191,36,0.8)", "rgba(255,255,255,0.1)"],
                            boxShadow: [
                                "0 0 50px rgba(0,0,0,0.3)",
                                "0 0 80px rgba(251,191,36,0.5)",
                                "0 0 50px rgba(0,0,0,0.3)"
                            ],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-40 h-40 sm:w-56 sm:h-56 rounded-[2.5rem] sm:rounded-[3.5rem] bg-slate-900/40 backdrop-blur-2xl border-2 flex items-center justify-center relative overflow-hidden group"
                    >
                        {/* Ambient Internal Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-yellow-500/20" />

                        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                            {/* Outer Hyper-Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[3px] border-transparent border-t-orange-400 border-l-orange-300/40 rounded-full"
                            />

                            {/* Middle Counter-Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 sm:inset-3 border-[3px] border-transparent border-b-yellow-400 border-r-yellow-300/40 rounded-full"
                            />

                            {/* Inner Energy Pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 0.9, 0.4],
                                    boxShadow: [
                                        "0 0 20px rgba(251,191,36,0.4)",
                                        "0 0 70px rgba(251,191,36,0.8)",
                                        "0 0 20px rgba(251,191,36,0.4)"
                                    ]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-6 sm:inset-8 bg-gradient-to-tr from-orange-300 to-yellow-500 rounded-full blur-[2px] z-10"
                            />

                            {/* Orbiting Particles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1 + i * 0.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_20px_#fff]"
                                        style={{
                                            background: i === 0 ? '#f97316' : i === 1 ? '#fbbf24' : '#22d3ee',
                                            boxShadow: `0 0 25px ${i === 0 ? '#f97316' : i === 1 ? '#fbbf24' : '#22d3ee'}`
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Icon Badge */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 10px 30px rgba(251,191,36,0.4)",
                                "0 10px 70px rgba(251,191,36,0.9)",
                                "0 10px 30px rgba(251,191,36,0.4)"
                            ],
                            borderColor: ["rgba(255,255,255,0.2)", "rgba(251,191,36,1)", "rgba(255,255,255,0.2)"],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-600 flex items-center justify-center border-2 z-20"
                    >
                        <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Construction size={24} className="text-white sm:hidden" />
                            <Construction size={32} className="text-white hidden sm:block" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 uppercase">
                        Under Construction
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex items-center justify-center gap-2 mb-4"
                >
                    <Rocket size={20} className="text-cyan-400" />
                    <span className="text-cyan-400 font-semibold tracking-wide text-sm sm:text-base">Coming Soon</span>
                    <Code2 size={20} className="text-cyan-400" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12 font-medium opacity-60 ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
                >
                    This project is currently being built and will be available soon. Check back later for the live demo!
                </motion.p>

                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => navigate(-1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl mx-auto overflow-hidden shadow-2xl cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-600" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    <ArrowLeft size={18} className="relative z-10 text-white group-hover:-translate-x-1 transition-transform sm:w-[20px] sm:h-[20px]" />
                    <span className="relative z-10 font-bold text-white uppercase tracking-widest text-xs sm:text-sm">Go Back</span>
                </motion.button>
            </motion.div>

            {/* Animated bottom border */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 opacity-20`}
                style={{
                    background: 'linear-gradient(90deg, transparent, #f97316, #fbbf24, #22d3ee, transparent)',
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
