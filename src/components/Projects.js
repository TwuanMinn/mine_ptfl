import React from 'react';
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

// Get gradient color based on tech name
const getTechColor = (tech, darkMode) => {
    const colors = {
        'React': darkMode ? 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40' : 'from-cyan-100 to-cyan-200 border-cyan-300',
        'React Native': darkMode ? 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40' : 'from-cyan-100 to-cyan-200 border-cyan-300',
        'Firebase': darkMode ? 'from-amber-500/20 to-orange-600/10 border-amber-500/40' : 'from-amber-100 to-orange-200 border-amber-300',
        'JavaScript': darkMode ? 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/40' : 'from-yellow-100 to-yellow-200 border-yellow-300',
        'TypeScript': darkMode ? 'from-blue-500/20 to-blue-600/10 border-blue-500/40' : 'from-blue-100 to-blue-200 border-blue-300',
        'Python': darkMode ? 'from-blue-500/20 to-yellow-600/10 border-blue-500/40' : 'from-blue-100 to-yellow-200 border-blue-300',
        'PyTorch': darkMode ? 'from-orange-500/20 to-red-600/10 border-orange-500/40' : 'from-orange-100 to-red-200 border-orange-300',
        'Machine Learning': darkMode ? 'from-orange-500/20 to-orange-600/10 border-orange-500/40' : 'from-orange-100 to-orange-200 border-orange-300',
        'Tailwind CSS': darkMode ? 'from-teal-500/20 to-cyan-600/10 border-teal-500/40' : 'from-teal-100 to-cyan-200 border-teal-300',
        'Node.js': darkMode ? 'from-green-500/20 to-green-600/10 border-green-500/40' : 'from-green-100 to-green-200 border-green-300',
        'Vercel': darkMode ? 'from-slate-400/20 to-slate-500/10 border-slate-400/40' : 'from-slate-100 to-slate-200 border-slate-300',
        'Next.js': darkMode ? 'from-slate-400/20 to-slate-500/10 border-slate-400/40' : 'from-slate-100 to-slate-200 border-slate-300',
        'MongoDB': darkMode ? 'from-green-500/20 to-green-600/10 border-green-500/40' : 'from-green-100 to-green-200 border-green-300',
        'PostgreSQL': darkMode ? 'from-blue-500/20 to-blue-600/10 border-blue-500/40' : 'from-blue-100 to-blue-200 border-blue-300',
        'Vue.js': darkMode ? 'from-emerald-500/20 to-green-600/10 border-emerald-500/40' : 'from-emerald-100 to-green-200 border-emerald-300',
        'Stripe': darkMode ? 'from-purple-500/20 to-indigo-600/10 border-purple-500/40' : 'from-purple-100 to-indigo-200 border-purple-300',
        'Socket.io': darkMode ? 'from-slate-400/20 to-slate-500/10 border-slate-400/40' : 'from-slate-100 to-slate-200 border-slate-300',
        'REST API': darkMode ? 'from-teal-500/20 to-emerald-600/10 border-teal-500/40' : 'from-teal-100 to-emerald-200 border-teal-300',
        'Chart.js': darkMode ? 'from-pink-500/20 to-rose-600/10 border-pink-500/40' : 'from-pink-100 to-rose-200 border-pink-300',
    };
    return colors[tech] || (darkMode ? 'from-blue-500/20 to-purple-600/10 border-blue-500/40' : 'from-blue-100 to-purple-200 border-blue-300');
};

export const Projects = ({ portfolioData, darkMode, isHearted, handleHeartClick, heartAnimating }) => {
    return (
        <section id="projects" className="py-16 px-2" style={{ maxWidth: '100vw' }}>
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="relative group perspective-1000 h-full"
                            >
                                <div className="relative h-full transform-style-3d transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-lg opacity-50 blur-sm group-hover:opacity-100 transition duration-500`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite',
                                        animationDelay: `${index * 0.3}s`
                                    }}></div>
                                    <div className={`relative glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(255,255,255,0.5)] border ${darkMode ? 'border-white/10 bg-[#0a0a10]' : 'border-blue-100 bg-white'} group-hover:border-cyan-400 group-hover:-translate-y-2`}>

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
                                                className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full border ${isHearted(project.id) ? 'border-pink-300/70 text-pink-200 bg-pink-400/15' : 'border-white/25 text-white/90 bg-black/30 backdrop-blur-md'} flex items-center justify-center transition-all duration-200 hover:scale-110 ${heartAnimating[project.id] ? 'animate-heartbeat' : ''}`}
                                                aria-label="heart-project"
                                            >
                                                <Heart size={14} className={isHearted(project.id) ? 'fill-current' : ''} />
                                            </button>

                                            {/* Link Button positioned at intersection of image and content */}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white text-black transition-transform duration-300 hover:scale-110 hover:rotate-45 shadow-lg`}
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
                                                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className={`text-[10px] font-medium px-2 py-1 rounded-full ${darkMode ? 'bg-white/5 text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.techStack.length > 3 && (
                                                        <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${darkMode ? 'bg-white/5 text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                                                            +{project.techStack.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
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
