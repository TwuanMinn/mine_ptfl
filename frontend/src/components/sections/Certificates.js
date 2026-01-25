import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Award, BadgeCheck } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Certificates = ({ portfolioData, darkMode }) => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const visibleCertificates = showAll ? portfolioData.certificates : portfolioData.certificates.slice(0, 4);

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

                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        style={{
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {visibleCertificates.map((cert, index) => {
                            const issuerStyle = getIssuerStyle(cert.issuer);

                            return (
                                <div
                                    key={cert.id}
                                    onClick={() => navigate(`/certificate/${cert.id}`)}
                                    className={`relative glass-card overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.6),0_0_80px_rgba(255,255,255,0.2)] border border-transparent hover:border-cyan-400 hover:bg-cyan-900/30 h-full flex flex-col animate-card-wave cursor-pointer ${darkMode ? 'bg-[#0a0a0f]/80' : ''}`}
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
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/certificate/${cert.id}`);
                                            }}
                                            className={`flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${darkMode
                                                ? 'text-cyan-400 hover:text-white'
                                                : 'text-blue-600 hover:text-blue-800'
                                                }`}
                                        >
                                            View Credential <ExternalLink size={16} />
                                        </button>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                    {portfolioData.certificates.length > 4 && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="group relative px-10 py-4 rounded-full font-bold text-white transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden shadow-lg hover:shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)',
                                    backgroundSize: '200% 200%',
                                    animation: 'gradientShift 3s ease infinite'
                                }}
                            >
                                {/* Shimmer overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                        transform: 'skewX(-20deg)',
                                        animation: 'shimmer 2s infinite'
                                    }}
                                />

                                <span className="relative z-10 text-base tracking-wide">
                                    {showAll ? 'Show Less' : 'Show More Certificates'}
                                </span>
                                <svg
                                    className={`w-5 h-5 relative z-10 transition-transform duration-500 ${showAll ? 'rotate-180' : ''} group-hover:translate-y-1`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>

                                {/* Glow effect */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10"
                                    style={{
                                        background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6)'
                                    }}
                                />
                            </button>
                        </div>
                    )}
                </div>
            </Reveal>
        </section>
    );
};

