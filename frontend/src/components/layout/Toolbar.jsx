import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    User, Code2, Layers, Award, BriefcaseBusiness, Mail,
    Sun, Moon, Volume2, Copy, Check, Share2, Languages, QrCode, Heart
} from 'lucide-react';
import Magnetic from '../common/Magnetic';

export const Toolbar = ({
    toolbarVisible,
    activeSection,
    scrollToSection,
    darkMode,
    setDarkMode,
    toggleReadAloud,
    isReading,
    handleCopyLink,
    copySuccess,
    handleShareLink,
    shareSuccess,
    setQrOpen
}) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [toolbarExpanded, setToolbarExpanded] = useState(true);

    return (
        <div
            className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${toolbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className={`relative flex items-center ${toolbarExpanded ? 'gap-1.5 sm:gap-3' : ''} px-2.5 sm:px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] max-w-[94vw] overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x transition-all duration-500`}>
                {/* Profile Button with Effects */}
                <div className="profile-btn-wrapper flex-shrink-0" onClick={() => setToolbarExpanded(!toolbarExpanded)}>
                    <div className="profile-rotating-ring"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden cursor-pointer profile-btn-glow relative z-10 flex items-center justify-center bg-slate-800">
                        <img src="/jonasptfl.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all duration-500 ease-in-out origin-left ${toolbarExpanded
                    ? 'opacity-100 scale-x-100 max-w-[800px]'
                    : 'opacity-0 scale-x-0 max-w-0 overflow-hidden'
                    }`}>
                    {[
                        { id: 'about', icon: User, label: t('navigation.about') },
                        { id: 'skills', icon: Code2, label: t('navigation.skills') },
                        { id: 'certificates', icon: Award, label: t('navigation.certificates') },
                        { id: 'projects', icon: Layers, label: t('navigation.projects') },
                        { id: 'experience', icon: BriefcaseBusiness, label: t('navigation.experience') },
                        { id: 'contact', icon: Mail, label: t('navigation.contact') }
                    ].map(({ id, icon: Icon, label }) => (
                        <Magnetic key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${activeSection === id
                                    ? 'text-blue-200'
                                    : 'text-white/70 hover:text-white'
                                    } hover:scale-110`}
                                aria-label={id}
                            >
                                <Icon size={18} strokeWidth={1.75} className="sm:hidden" />
                                <Icon size={20} strokeWidth={1.75} className="hidden sm:block" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                    {label}
                                </span>
                            </button>
                        </Magnetic>
                    ))}

                    <Magnetic>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${darkMode ? 'text-blue-200' : 'text-white/70 hover:text-white'
                                } hover:scale-110`}
                            aria-label="theme"
                        >
                            {darkMode ? <Sun size={18} strokeWidth={1.75} className="sm:hidden" /> : <Moon size={18} strokeWidth={1.75} className="sm:hidden" />}
                            {darkMode ? <Sun size={20} strokeWidth={1.75} className="hidden sm:block" /> : <Moon size={20} strokeWidth={1.75} className="hidden sm:block" />}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                Theme
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={toggleReadAloud}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="sound"
                        >
                            <Volume2 size={18} strokeWidth={1.75} className="sm:hidden" />
                            <Volume2 size={20} strokeWidth={1.75} className="hidden sm:block" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                {isReading ? 'Stop Reading' : 'Read Aloud'}
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={handleCopyLink}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="copy-link"
                        >
                            <span className="icon-transition">
                                {copySuccess ? (
                                    <span key="check" className="icon-swap-enter">
                                        <Check size={18} strokeWidth={1.75} className="sm:hidden text-green-400" />
                                        <Check size={20} strokeWidth={1.75} className="hidden sm:block text-green-400" />
                                    </span>
                                ) : (
                                    <span key="copy" className="icon-swap-enter">
                                        <Copy size={18} strokeWidth={1.75} className="sm:hidden" />
                                        <Copy size={20} strokeWidth={1.75} className="hidden sm:block" />
                                    </span>
                                )}
                            </span>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                {copySuccess ? 'Copied!' : 'Copy Link'}
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={handleShareLink}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="share"
                        >
                            <span className="icon-transition">
                                {shareSuccess ? (
                                    <span key="check" className="icon-swap-enter">
                                        <Check size={18} strokeWidth={1.75} className="sm:hidden text-green-400" />
                                        <Check size={20} strokeWidth={1.75} className="hidden sm:block text-green-400" />
                                    </span>
                                ) : (
                                    <span key="share" className="icon-swap-enter">
                                        <Share2 size={18} strokeWidth={1.75} className="sm:hidden" />
                                        <Share2 size={20} strokeWidth={1.75} className="hidden sm:block" />
                                    </span>
                                )}
                            </span>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                {shareSuccess ? 'Shared!' : 'Share'}
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="translate"
                        >
                            <Languages size={18} strokeWidth={1.75} className="sm:hidden" />
                            <Languages size={20} strokeWidth={1.75} className="hidden sm:block" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                {i18n.language === 'en' ? t('toolbar.vietnamese') : t('toolbar.english')}
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={() => setQrOpen(true)}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="qr-code"
                        >
                            <QrCode size={18} strokeWidth={1.75} className="sm:hidden" />
                            <QrCode size={20} strokeWidth={1.75} className="hidden sm:block" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                Website QR
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button
                            onClick={() => {
                                navigate('/hearted');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="hearted-projects"
                        >
                            <Heart size={18} strokeWidth={1.75} className="sm:hidden" />
                            <Heart size={20} strokeWidth={1.75} className="hidden sm:block" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                Hearted Projects
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="github"
                        >
                            <span className="sr-only">GitHub</span>

                            <svg
                                className="sm:hidden w-[18px] h-[18px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <svg
                                className="hidden sm:block w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                GitHub
                            </span>
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="toolbar-btn group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                            aria-label="linkedin"
                        >
                            <svg
                                className="sm:hidden w-[18px] h-[18px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <svg
                                className="hidden sm:block w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 text-white border border-white/10 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                                LinkedIn
                            </span>
                        </a>
                    </Magnetic>
                </div>
            </div>
        </div>
    );
};
