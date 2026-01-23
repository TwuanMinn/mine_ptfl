import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer = ({ portfolioData, darkMode }) => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className={`relative overflow-hidden py-12 px-4 border-t ${darkMode ? 'border-cyan-500/10 bg-gradient-to-b from-[#0a0a0f] to-black' : 'border-blue-200 bg-gradient-to-b from-blue-50/80 to-white'}`} style={{ maxWidth: '100vw' }}>
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-[80px] ${darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'}`} />
                <div className={`absolute -bottom-10 right-20 w-40 h-40 rounded-full blur-[60px] ${darkMode ? 'bg-cyan-600/10' : 'bg-cyan-400/15'}`} />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Top section with links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Brand column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} />
                            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                                {portfolioData.name}
                            </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Building exceptional digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className={`text-sm flex items-center gap-1 transition-all duration-200 hover:translate-x-1 ${darkMode
                                            ? 'text-slate-400 hover:text-cyan-400'
                                            : 'text-slate-600 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {[
                                { icon: Github, href: portfolioData.github, label: 'GitHub' },
                                { icon: Linkedin, href: portfolioData.linkedin, label: 'LinkedIn' },
                                { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                                        ? 'bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-700/60 text-slate-300 hover:text-cyan-400'
                                        : 'bg-blue-100/60 border border-blue-200/50 hover:border-blue-400/50 hover:bg-blue-200/60 text-blue-600 hover:text-blue-700'
                                        }`}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${darkMode ? 'bg-gradient-to-r from-transparent via-slate-700 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent'}`} />

                {/* Bottom section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                        © {currentYear} {portfolioData.name}. All rights reserved.
                    </p>
                    <p className={`text-sm flex items-center gap-1.5 ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                        Made with
                        <Heart className={`w-4 h-4 ${darkMode ? 'text-pink-500' : 'text-pink-600'} fill-current animate-pulse`} />
                        in Vietnam
                    </p>
                </div>
            </div>
        </footer>
    );
};
