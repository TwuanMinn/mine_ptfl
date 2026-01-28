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
                <div className="relative inline-block mb-12">
                    {/* Pulsing rings */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl -z-10"
                    />
                    <div className="w-24 h-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl">
                        <Loader2 size={48} className="text-cyan-400 animate-spin" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center border border-white/20 shadow-lg">
                        <Clock size={20} className="text-white" />
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        PENDING
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-lg md:text-xl max-w-md mx-auto mb-12 font-medium opacity-60 ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
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
                    className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl mx-auto overflow-hidden shadow-2xl cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    <ArrowLeft size={20} className="relative z-10 text-white group-hover:-translate-x-1 transition-transform" />
                    <span className="relative z-10 font-bold text-white uppercase tracking-widest text-sm">Return Back</span>
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
