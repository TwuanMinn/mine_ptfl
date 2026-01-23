import React from 'react';
import { ExternalLink, Award, BadgeCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const Certificates = ({ portfolioData, darkMode }) => {
    const getIssuerStyle = (issuer) => {
        const i = issuer.toLowerCase();
        if (i.includes('google')) return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
        if (i.includes('microsoft')) return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
        if (i.includes('coursera')) return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
    };

    return (
        <section id="certificates" className={`py-20 px-4 relative overflow-hidden ${darkMode ? 'bg-[#030303]' : 'bg-blue-50/60'}`}>
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto relative z-10">
                    {/* SVG Gradient Definition */}
                    <svg width="0" height="0">
                        <linearGradient id="cert-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#22d3ee" offset="0%" />
                            <stop stopColor="#3b82f6" offset="50%" />
                            <stop stopColor="#8b5cf6" offset="100%" />
                        </linearGradient>
                    </svg>

                    <div className="flex items-center gap-3 mb-10">
                        <Award className="w-8 h-8" style={{ stroke: "url(#cert-gradient)" }} />
                        <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Certifications</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.certificates.map((cert, index) => {
                            const issuerStyle = getIssuerStyle(cert.issuer);

                            return (
                                <div
                                    key={index}
                                    // RESTORED: The glass-card, card-wave animation, and neon hover shadows
                                    className={`relative glass-card overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.6),0_0_80px_rgba(255,255,255,0.2)] border border-transparent hover:border-cyan-400 hover:bg-cyan-900/30 h-full flex flex-col animate-card-wave ${darkMode ? 'bg-[#0a0a0f]/80' : ''}`}
                                    style={{ animationDelay: `${index * 0.4}s` }}
                                >
                                    {/* RESTORED: The blurred glow blob */}
                                    <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-200/50'} blur-2xl`} />

                                    {/* Badge & Date */}
                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${issuerStyle} flex items-center gap-1.5`}>
                                            <BadgeCheck size={14} />
                                            {cert.issuer}
                                        </span>
                                        <span className={`text-xs font-mono opacity-60 ${darkMode ? 'text-cyan-200' : 'text-blue-900'}`}>
                                            {cert.date}
                                        </span>
                                    </div>

                                    {/* Watermark Icon */}
                                    <div className={`absolute -right-6 -top-6 opacity-5 pointer-events-none`}>
                                        <Award size={120} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow relative z-10">
                                        <h3 className={`text-xl font-bold mb-3 leading-tight ${darkMode ? 'text-blue-50' : 'text-blue-900'}`}>
                                            {cert.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-blue-200/80' : 'text-blue-800/80'}`}>
                                            {cert.description}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-dashed border-cyan-500/20 flex items-center justify-between relative z-10">
                                        <span className={`text-xs ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                                            Verified Credential
                                        </span>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${darkMode
                                                ? 'text-cyan-400 hover:text-white'
                                                : 'text-blue-600 hover:text-blue-800'
                                                }`}
                                        >
                                            View <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
