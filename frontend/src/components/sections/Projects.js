import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Heart } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { GithubActivity } from '../common/GithubActivity.jsx';
import { TypingSpeed } from '../common/TypingSpeed.jsx';

// Tech stack icon URLs mapping
const techIcons = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Stripe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'REST API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Chart.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
};



export const Projects = ({ portfolioData, darkMode, isHearted, handleHeartClick, heartAnimating }) => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? portfolioData.projects : portfolioData.projects.slice(0, 4);

    const handleCardClick = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <section id="projects" className="py-16 px-2">
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>Projects</h2>
                    <div
                        className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
                        style={{
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {visibleProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="relative group perspective-1000 h-full"
                            >
                                <div className="relative h-full transform-style-3d transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50 blur-sm group-hover:opacity-100 transition duration-500 z-0`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite',
                                        animationDelay: `${index * 0.3}s`
                                    }}></div>
                                    <div className={`relative z-10 glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(255,255,255,0.5)] border ${darkMode ? 'border-white/10 bg-[#0a0a10]' : 'border-blue-100 bg-white'} group-hover:border-cyan-400 group-hover:-translate-y-2`}>

                                        {/* Project Image */}
                                        <div className="relative h-32 sm:h-48 w-full overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Heart Button Top Right */}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleHeartClick(project.id); }}
                                                className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full border ${isHearted(project.id) ? 'border-pink-400/80 text-pink-500 bg-pink-500/20' : 'border-white/25 text-white/90 bg-black/30 backdrop-blur-md'} flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer group/heart`}
                                                aria-label="heart-project"
                                            >
                                                {/* Heart burst particles when hearted */}
                                                {isHearted(project.id) && heartAnimating[project.id] && (
                                                    <>
                                                        <span className="absolute w-2 h-2 bg-pink-400 rounded-full animate-heart-burst-1" />
                                                        <span className="absolute w-1.5 h-1.5 bg-red-400 rounded-full animate-heart-burst-2" />
                                                        <span className="absolute w-2 h-2 bg-pink-300 rounded-full animate-heart-burst-3" />
                                                        <span className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-heart-burst-4" />
                                                        <span className="absolute w-1 h-1 bg-pink-500 rounded-full animate-heart-burst-5" />
                                                        <span className="absolute w-1.5 h-1.5 bg-red-300 rounded-full animate-heart-burst-6" />
                                                    </>
                                                )}
                                                <Heart
                                                    size={18}
                                                    className={`hidden sm:block ${isHearted(project.id) ? 'fill-pink-500 text-pink-500' : ''} ${heartAnimating[project.id] ? 'animate-heart-pop' : ''} transition-transform group-hover/heart:scale-110 sm:w-5 sm:h-5`}
                                                />
                                                <Heart
                                                    size={14}
                                                    className={`sm:hidden ${isHearted(project.id) ? 'fill-pink-500 text-pink-500' : ''} ${heartAnimating[project.id] ? 'animate-heart-pop' : ''} transition-transform group-hover/heart:scale-110`}
                                                />
                                            </button>

                                            {/* Link Button positioned at intersection of image and content */}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleCardClick(project.id); }}
                                                className={`absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white text-black transition-transform duration-300 hover:scale-110 hover:rotate-45 shadow-lg`}
                                                aria-label="view project details"
                                            >
                                                <ExternalLink size={16} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="p-3 sm:p-5 flex flex-col flex-grow">

                                            {/* Category */}
                                            <div className="mb-2">
                                                <span className={`text-[10px] font-bold tracking-wider uppercase ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                    {project.category || "Development"}
                                                </span>
                                            </div>

                                            <h3 className={`text-sm sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1 sm:mb-2 leading-tight line-clamp-1 sm:line-clamp-none`}>{project.title}</h3>

                                            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-[10px] sm:text-sm mb-2 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-3 leading-relaxed`}>
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Badges */}
                                            {project.techStack && (
                                                <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto pt-2 border-t border-white/5">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <div
                                                            key={techIndex}
                                                            className={`flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-xs font-medium px-1.5 py-0.5 sm:px-2.5 sm:py-1.5 rounded-full ${darkMode ? 'bg-white/5 text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}
                                                        >
                                                            {techIcons[tech] && (
                                                                <img
                                                                    src={techIcons[tech]}
                                                                    alt={tech}
                                                                    className="w-3 h-3 sm:w-5 sm:h-5 object-contain"
                                                                    loading="lazy"
                                                                />
                                                            )}
                                                            <span>{tech}</span>
                                                        </div>
                                                    ))}

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {portfolioData.projects.length > 4 && (
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
                                    {showAll ? 'Show Less' : 'Show More Projects'}
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

                    <div className="mt-16 space-y-12">
                        <GithubActivity darkMode={darkMode} />
                        <TypingSpeed darkMode={darkMode} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
