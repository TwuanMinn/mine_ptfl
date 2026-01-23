import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const HeartedProjectsPage = ({
    darkMode,
    navigate,
    portfolioData,
    isHearted,
    handleHeartClick,
    heartAnimating
}) => {
    return (
        <section className={`min-h-screen px-4 py-16 heart-page ${darkMode ? 'bg-black/80' : 'bg-blue-50/70'}`}>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between gap-4 flex-wrap heart-page-header">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center heart-badge">
                            <Heart size={20} className="fill-current" />
                        </div>
                        <div>
                            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-blue-900'}`}>Hearted Projects</h2>
                            <p className={`${darkMode ? 'text-white/70' : 'text-blue-700/80'} text-sm`}>Only projects you hearted will appear here.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className={`px-4 py-2 rounded-full border ${darkMode ? 'border-white/20 text-white/80 hover:text-white' : 'border-blue-200 text-blue-700 hover:text-blue-900'} transition`}
                    >
                        Back to main
                    </button>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    {portfolioData.projects.filter((p) => isHearted(p.id)).map((project, index) => (
                        <div key={project.id} className={`glass-card rounded-2xl p-6 h-full flex flex-col relative animate-card-wave`} style={{ animationDelay: `${index * 0.4}s` }}>
                            <div className="flex items-start justify-between gap-3 flex-grow">
                                <div>
                                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-blue-900'}`}>{project.title}</h3>
                                    <p className={`${darkMode ? 'text-white/70' : 'text-blue-700'} text-sm mt-2`}>{project.description}</p>
                                </div>
                                <button
                                    onClick={() => handleHeartClick(project.id)}
                                    className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full border ${isHearted(project.id) ? 'border-pink-300/70 text-pink-200 bg-pink-400/15' : 'border-white/25 text-white/90 bg-white/10'} flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_20px_rgba(236,72,153,0.35)] ${heartAnimating[project.id] ? 'animate-heartbeat' : ''}`}
                                    aria-label="heart-project"
                                >
                                    <Heart size={16} className={isHearted(project.id) ? 'fill-current' : ''} />
                                </button>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center text-sm mt-auto ${darkMode ? 'text-pink-200 hover:text-pink-100' : 'text-blue-600 hover:text-blue-800'}`}
                            >
                                View Project <ExternalLink size={14} className="ml-2" />
                            </a>
                        </div>
                    ))}
                    {portfolioData.projects.filter((p) => isHearted(p.id)).length === 0 && (
                        <div className="col-span-full py-12 text-center">
                            <p className={`${darkMode ? 'text-white/60' : 'text-blue-700'} text-sm`}>No hearted projects yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
