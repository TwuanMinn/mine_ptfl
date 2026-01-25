import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Reveal } from './Reveal';
import { GithubActivity } from './GithubActivity.jsx';
import { TypingSpeed } from './TypingSpeed.jsx';

export const Projects = ({ portfolioData, darkMode, isHearted, handleHeartClick, heartAnimating }) => {
    return (
        <section id="projects" className="py-16 px-2" style={{maxWidth: '100vw'}}>
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto w-full" style={{padding: '0 0.5rem'}}>
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{fontSize: '2rem'}}>Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="relative group perspective-1000"
                            >
                                <div className="relative transform-style-3d transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50 blur-sm group-hover:opacity-100 transition duration-500`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite',
                                        animationDelay: `${index * 0.3}s`
                                    }}></div>
                                    <div className={`relative glass-card rounded-lg p-4 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(255,255,255,0.5)] border ${darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-blue-100 bg-white/80'} hover:border-cyan-400 hover:bg-cyan-900/30`}>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleHeartClick(project.id); }}
                                            className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full border ${isHearted(project.id) ? 'border-pink-300/70 text-pink-200 bg-pink-400/15' : 'border-white/25 text-white/90 bg-white/10'} flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_20px_rgba(236,72,153,0.35)] ${heartAnimating[project.id] ? 'animate-heartbeat' : ''}`}
                                            aria-label="heart-project"
                                        >
                                            <Heart size={16} className={isHearted(project.id) ? 'fill-current' : ''} />
                                        </button>
                                        <h3 className={`text-lg font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'} mb-2`} style={{fontSize: '1.1rem'}}>{project.title}</h3>
                                        <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-3 flex-grow`} style={{fontSize: '0.95rem'}}>{project.description}</p>
                                        <a
                                            href={project.link}
                                            className={`inline-flex items-center ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} mt-auto`}
                                        >
                                            View Project <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 space-y-12">
                        <GithubActivity darkMode={darkMode} />
                        <TypingSpeed darkMode={darkMode} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
