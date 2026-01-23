import React, { useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Reveal } from './Reveal';
import { GithubActivity } from './GithubActivity.jsx';
import { TypingSpeed } from './TypingSpeed.jsx';

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
};



export const Projects = ({ portfolioData, darkMode, isHearted, handleHeartClick, heartAnimating }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? portfolioData.projects : portfolioData.projects.slice(0, 6);

    return (
        <section id="projects" className="py-16 px-2">
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Heart Button Top Right */}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleHeartClick(project.id); }}
                                                className={`absolute top-3 right-3 z-30 w-9 h-9 rounded-full border ${isHearted(project.id) ? 'border-pink-300/70 text-pink-200 bg-pink-400/15' : 'border-white/25 text-white/90 bg-black/30 backdrop-blur-md'} flex items-center justify-center transition-all duration-200 hover:scale-110 ${heartAnimating[project.id] ? 'animate-heartbeat' : ''}`}
                                                aria-label="heart-project"
                                            >
                                                <Heart size={18} className={isHearted(project.id) ? 'fill-current' : ''} />
                                            </button>

                                            {/* Link Button positioned at intersection of image and content */}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`absolute bottom-3 right-3 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-white text-black transition-transform duration-300 hover:scale-110 hover:rotate-45 shadow-lg`}
                                                aria-label="view project"
                                            >
                                                <ExternalLink size={20} strokeWidth={2.5} />
                                            </a>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">

                                            {/* Category */}
                                            <div className="mb-2">
                                                <span className={`text-[10px] font-bold tracking-wider uppercase ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                    {project.category || "Development"}
                                                </span>
                                            </div>

                                            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2 leading-tight`}>{project.title}</h3>

                                            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-4 flex-grow line-clamp-3 leading-relaxed`}>
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Badges */}
                                            {project.techStack && (
                                                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <div
                                                            key={techIndex}
                                                            className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-full ${darkMode ? 'bg-white/5 text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}
                                                        >
                                                            {techIcons[tech] && (
                                                                <img
                                                                    src={techIcons[tech]}
                                                                    alt={tech}
                                                                    className="w-5 h-5 object-contain"
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

                    {portfolioData.projects.length > 6 && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className={`group px-8 py-3 rounded-full font-bold transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center gap-3 relative overflow-hidden ${darkMode
                                    ? 'bg-slate-900 text-blue-400 border border-blue-500/30'
                                    : 'bg-white text-blue-600 border border-blue-200'
                                    }`}
                            >
                                <span className="relative z-10">{showAll ? 'Show Less' : 'Show More Projects'}</span>
                                <svg
                                    className={`w-5 h-5 relative z-10 transition-transform duration-500 ${showAll ? 'rotate-180' : ''} group-hover:translate-y-1`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'}`} />
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
