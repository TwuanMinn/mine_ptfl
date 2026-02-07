import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound({ darkMode = true }) {
    const navigate = useNavigate();

    return (
        <motion.div
            key="not-found-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <section
                className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-transparent' : 'bg-blue-50/70'}`}
            >
                <div className="text-center max-w-lg">
                    {/* Glowing 404 */}
                    <h1
                        className={`text-[8rem] sm:text-[10rem] font-black leading-none bg-gradient-to-r ${darkMode
                            ? 'from-blue-400 via-cyan-300 to-blue-500'
                            : 'from-blue-600 via-blue-400 to-blue-700'
                            } bg-clip-text text-transparent`}
                        style={{
                            filter: darkMode ? 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))' : 'none',
                            animation: 'pulse-custom 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                    >
                        404
                    </h1>

                    <h2
                        className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}
                    >
                        Page Not Found
                    </h2>

                    <p
                        className={`text-base mb-10 ${darkMode ? 'text-white/60' : 'text-blue-700/70'}`}
                        style={{ fontFamily: "'Google Sans Code', 'Fira Code', monospace" }}
                    >
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate(-1)}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full border font-semibold transition-all duration-300 hover:scale-105 ${darkMode
                                ? 'border-white/20 text-white/80 hover:text-white hover:border-white/40'
                                : 'border-blue-200 text-blue-700 hover:text-blue-900 hover:border-blue-400'
                                }`}
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${darkMode
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60'
                                }`}
                        >
                            <Home size={18} />
                            Home
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
