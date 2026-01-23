import React from 'react';
import { ChevronDown, BotMessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import ChatBot from '../ChatBot';

export const Hero = ({
    portfolioData,
    darkMode,
    displayedText,
    popupVisible,
    popupMessages,
    popupMessageIndex,
    chatOpen,
    setChatOpen,
    scrollToSection
}) => {
    const { t, i18n } = useTranslation();

    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 sm:pt-48">
            <div className="text-center max-w-4xl w-full" style={{ padding: '0 0.5rem' }}>
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Popup Message Bubbles */}
                        <div
                            className={`absolute -top-2 left-full ml-2 sm:top-1 sm:ml-4 z-10 transition-all duration-400 ease-in-out ${popupVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'}`}
                        >
                            <div
                                className="relative rounded-2xl shadow-lg text-left break-words"
                                style={{
                                    background: darkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(239, 246, 255, 0.95)',
                                    color: darkMode ? '#93c5fd' : '#1e40af',
                                    fontWeight: '600',
                                    fontSize: 'clamp(0.8rem, 0.9vw + 0.35rem, 1.02rem)',
                                    lineHeight: '1.35',
                                    padding: 'clamp(0.5rem, 1.2vw, 0.75rem) clamp(0.7rem, 1.6vw, 1.25rem)',
                                    maxWidth: 'clamp(340px, 60vw, 640px)',
                                    border: darkMode ? '2px solid rgba(96, 165, 250, 0.5)' : '2px solid rgba(59, 130, 246, 0.4)',
                                    boxShadow: darkMode ? '0 0 18px rgba(59, 130, 246, 0.35), 0 0 30px rgba(96, 165, 250, 0.18)' : '0 4px 12px rgba(59, 130, 246, 0.25)'
                                }}
                            >
                                {popupMessages[popupMessageIndex]}
                                <div
                                    className="absolute top-1/2 -left-2 w-4 h-4"
                                    style={{
                                        background: darkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(239, 246, 255, 0.95)',
                                        borderLeft: darkMode ? '2px solid rgba(96, 165, 250, 0.5)' : '2px solid rgba(59, 130, 246, 0.4)',
                                        borderBottom: darkMode ? '2px solid rgba(96, 165, 250, 0.5)' : '2px solid rgba(59, 130, 246, 0.4)',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        borderRadius: '2px'
                                    }}
                                />
                            </div>
                        </div>

                        <div className={`absolute -inset-1 bg-gradient-to-r ${darkMode ? 'from-blue-400 via-cyan-300 to-white' : 'from-blue-500 via-blue-400 to-blue-500'} rounded-full blur-xl ${darkMode ? 'opacity-80' : 'opacity-60'}`} style={{ animation: `pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` }}></div>
                        <div className={`absolute -inset-2 bg-gradient-to-r ${darkMode ? 'from-blue-600 via-cyan-500 to-blue-600' : 'from-blue-600 via-blue-500 to-blue-600'} rounded-full blur-2xl ${darkMode ? 'opacity-60' : 'opacity-40'}`} style={{ animation: `pulse-custom 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite` }}></div>
                        <div className={`relative w-36 h-36 sm:w-48 sm:h-48 rounded-full ${darkMode ? 'bg-gradient-to-br from-[#0c0c0e] via-[#08080b] to-[#010101] border-4 border-[#0a0a0c] white-glow' : 'bg-gradient-to-br from-white via-blue-50 to-blue-100 border-4 border-blue-200'} flex items-center justify-center shadow-2xl overflow-hidden`}>
                            <img src="/jonasptfl.jpg" alt="Profile" className="w-full h-full object-cover" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
                        </div>
                    </div>
                </div>

                <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-blue-200 via-white to-blue-200' : 'from-blue-700 via-blue-500 to-blue-700'} bg-clip-text text-transparent`} style={{ animation: `pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` }}>
                    {portfolioData.name}
                </h1>
                <p className={`text-xl sm:text-2xl md:text-3xl ${darkMode ? 'text-blue-300' : 'text-blue-600'} mb-8 font-semibold`}>
                    {t('hero.title')}
                </p>
                <p
                    className={`text-base sm:text-lg ${darkMode ? 'text-blue-200' : 'text-blue-700'} mb-12 max-w-2xl mx-auto min-h-24 sm:min-h-32`}
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)', lineHeight: '1.8' }}
                >
                    {displayedText}
                    <span className={`inline-block w-1.5 h-6 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} ml-1`} style={{ animation: `pulse-custom 1s cubic-bezier(0.4, 0, 0.6, 1) infinite`, verticalAlign: 'middle' }}></span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`btn-ripple relative overflow-visible ${darkMode ? 'bg-[#08080b]/70 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50 text-white' : 'bg-blue-200/80 border-2 border-blue-500/60 shadow-lg shadow-blue-400/30 text-blue-800'} px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300' : 'hover:shadow-blue-500/60 hover:border-blue-500'}`}
                        style={{ transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = darkMode ? 'rgb(15, 40, 140)' : 'rgb(25, 70, 200)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)' }}></span>
                        <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)' }}></span>
                        <span className="relative z-10">{t('hero.getInTouch')}</span>
                    </button>
                    <a
                        href="/dev.cv.pdf"
                        download
                        className={`btn-ripple relative overflow-visible ${darkMode ? 'bg-slate-900/40 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50 text-white' : 'bg-white/90 border-2 border-blue-500/70 shadow-lg shadow-blue-500/40 text-blue-900'} px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300 hover:shadow-2xl' : 'hover:shadow-blue-600/60 hover:border-blue-600 hover:shadow-xl'}`}
                        style={{ transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = darkMode ? 'rgba(88, 28, 135, 0.55)' : 'rgba(237, 233, 254, 0.95)';
                            e.currentTarget.style.borderColor = darkMode ? 'rgb(196, 181, 253)' : 'rgb(167, 139, 250)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = darkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.9)';
                            e.currentTarget.style.borderColor = darkMode ? 'rgba(96, 165, 250, 0.7)' : 'rgba(59, 130, 246, 0.6)';
                        }}
                    >
                        <span className="ripple-wave-1 absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)' }}></span>
                        <span className="ripple-wave-2 absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 70%)' }}></span>
                        <span className={`relative z-10 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                            {i18n.t('hero.downloadCV')}
                            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="flex justify-center mt-8">
                    {!chatOpen && (
                        <button
                            onClick={() => setChatOpen(true)}
                            className={`relative overflow-hidden ${darkMode ? 'bg-slate-900/40 border-2 border-blue-400/70 shadow-2xl shadow-blue-400/50 text-white' : 'bg-blue-200/80 border-2 border-blue-500/60 shadow-lg shadow-blue-400/30 text-blue-800'} px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? 'hover:shadow-blue-400/80 hover:border-blue-300 hover:shadow-2xl' : 'hover:shadow-blue-500/60 hover:shadow-xl hover:border-blue-500'}`}
                            style={{ animation: darkMode ? 'shadowPulse 3s ease-in-out infinite, fadePulse 2.5s ease-in-out infinite' : 'fadePulse 2.5s ease-in-out infinite' }}
                            onMouseEnter={(e) => {
                                const icon = e.currentTarget.querySelector('.chat-robot-icon');
                                e.currentTarget.style.background = darkMode ? 'rgba(192, 132, 252, 0.95)' : 'rgba(233, 213, 255, 1)';
                                e.currentTarget.style.borderColor = darkMode ? 'rgb(233, 213, 255)' : 'rgb(216, 180, 254)';
                                e.currentTarget.style.boxShadow = darkMode ? '0 0 40px rgba(192, 132, 252, 0.8), 0 0 80px rgba(167, 139, 250, 0.5)' : '0 0 30px rgba(192, 132, 252, 0.6)';
                                if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
                            }}
                            onMouseLeave={(e) => {
                                const icon = e.currentTarget.querySelector('.chat-robot-icon');
                                e.currentTarget.style.background = '';
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.boxShadow = '';
                                if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <BotMessageSquare className="chat-robot-icon w-6 h-6 transition-transform" />
                                Chat with My AI Agent
                            </span>
                        </button>
                    )}
                </div>

                <AnimatePresence>
                    {chatOpen && <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />}
                </AnimatePresence>

                <div className="mt-16 animate-bounce">
                    <ChevronDown className={`mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={48} strokeWidth={3} />
                </div>
            </div>
        </section>
    );
};
