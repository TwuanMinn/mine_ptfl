import React, { useRef, useEffect, useState } from 'react';
import { Reveal } from './Reveal';

const skillsLogos = [
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'ReactJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'NextJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'NodeJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Machine Learning', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Vercel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'ExpressJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Supabase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'ViteJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Nginx', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Apache', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Antigravity', url: '/gg_anitigravity.png' }
];

export const Skills = ({ portfolioData, darkMode }) => {
    const skillsRef = useRef(null);
    const [visibleSkills, setVisibleSkills] = useState(false);

    useEffect(() => {
        const skillObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSkills(true);
                    } else {
                        setVisibleSkills(false);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentSkillsRef = skillsRef.current;
        if (currentSkillsRef) {
            skillObserver.observe(currentSkillsRef);
        }

        return () => {
            if (currentSkillsRef) {
                skillObserver.unobserve(currentSkillsRef);
            }
        };
    }, []);

    return (
        <section id="skills" className={`relative overflow-hidden py-16 px-2 ${darkMode ? 'bg-[#08080b]/50' : 'bg-blue-50/50'}`} ref={skillsRef} style={{maxWidth: '100vw'}}>
            {/* Flowing Liquid Blur Background (Skills only) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-[18rem] h-[18rem] sm:w-[26rem] sm:h-[26rem] rounded-full blur-[70px] sm:blur-[90px] opacity-85" style={{
                    background: darkMode ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.45)',
                    animation: 'liquidFloat1 12s ease-in-out infinite'
                }} />
                <div className="absolute top-6 -right-20 sm:top-10 sm:-right-32 w-[16rem] h-[16rem] sm:w-[24rem] sm:h-[24rem] rounded-full blur-[75px] sm:blur-[95px] opacity-85" style={{
                    background: darkMode ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.45)',
                    animation: 'liquidFloat2 14s ease-in-out infinite'
                }} />
                <div className="absolute -bottom-24 left-10 sm:-bottom-32 sm:left-1/4 w-[20rem] h-[20rem] sm:w-[28rem] sm:h-[28rem] rounded-full blur-[80px] sm:blur-[100px] opacity-80" style={{
                    background: darkMode ? 'rgba(99, 102, 241, 0.55)' : 'rgba(99, 102, 241, 0.4)',
                    animation: 'liquidFloat3 16s ease-in-out infinite'
                }} />
            </div>
            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full" style={{padding: '0 0.5rem'}}>
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{fontSize: '2rem'}}>Skills</h2>

                    {/* Progress Bars */}
                    <div className="mb-12">
                        <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`} style={{fontSize: '1.1rem'}}>Key Technologies</h3>
                        <div className="space-y-6">
                            {portfolioData.skillsProgress.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${visibleSkills
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-10'
                                        }`}
                                    style={{
                                        transitionDelay: visibleSkills ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className={`font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>{skill.name}</p>
                                        <span className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{skill.level}%</span>
                                    </div>
                                    <div className={`w-full h-3 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-blue-200'} overflow-hidden border ${darkMode ? 'border-blue-700/50' : 'border-blue-300/50'}`}>
                                        <div
                                            className={`h-full ${darkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-blue-500 to-blue-600'} transition-all duration-1000 ease-out`}
                                            style={{
                                                width: visibleSkills ? `${skill.level}%` : '0%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Logo Marquee */}
                    <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`} style={{fontSize: '1.1rem'}}>Other Skills</h3>
                    <div className={`relative overflow-hidden rounded-3xl glass-panel ${darkMode ? '' : 'shadow-blue-200'}`}>
                        <div className={`skills-marquee flex flex-col gap-6 py-4 sm:py-6 px-3 sm:px-4 ${visibleSkills ? 'opacity-100' : 'opacity-0'}`}>
                            {[0, 1].map(row => (
                                <div key={row} className="flex gap-6 sm:gap-8 w-max" style={{ animation: 'marquee-rtl 60s linear infinite reverse' }}>
                                    {[...skillsLogos, ...skillsLogos].filter((_, i) => i % 2 === row).map((skill, index) => (
                                        <div
                                            key={`${skill.name}-${row}-${index}`}
                                            className={`group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border ${darkMode ? 'border-blue-700/60 bg-slate-900/70' : 'border-blue-500 border-2 bg-white'} shadow-[0_10px_22px_rgba(59,130,246,0.12)] hover:-translate-y-2 hover:shadow-[0_14px_28px_rgba(59,130,246,0.2)] transition duration-300`}
                                            title={skill.name}
                                            style={{
                                                background: darkMode
                                                    ? 'linear-gradient(160deg, rgba(12, 20, 37, 0.85), rgba(30, 58, 138, 0.22))'
                                                    : 'linear-gradient(160deg, rgba(255, 255, 255, 1), rgba(219, 234, 254, 0.85))',
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            <div
                                                className="absolute -inset-0.5 rounded-2xl opacity-50 blur-sm"
                                                style={{
                                                    background: darkMode
                                                        ? 'linear-gradient(120deg, rgba(59,130,246,0.24), rgba(96,165,250,0.2), rgba(59,130,246,0.24))'
                                                        : 'linear-gradient(120deg, rgba(59,130,246,0.2), rgba(147,197,253,0.22), rgba(59,130,246,0.2))'
                                                }}
                                            />
                                            <img
                                                src={skill.url}
                                                alt={skill.name}
                                                className="relative w-8 h-8 sm:w-11 sm:h-11 object-contain drop-shadow-[0_10px_16px_rgba(59,130,246,0.28)] group-hover:drop-shadow-[0_14px_20px_rgba(59,130,246,0.38)]"
                                                loading="lazy"
                                                style={{ transform: 'translateZ(20px)', filter: darkMode ? 'brightness(1.12) saturate(1.05)' : 'brightness(1.25) saturate(1.1) drop-shadow(0 2px 2px rgba(30,64,175,0.2))' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={`absolute inset-y-0 left-0 w-16 sm:w-24 ${darkMode ? 'from-slate-900/90' : 'from-white'} bg-gradient-to-r to-transparent pointer-events-none`} />
                        <div className={`absolute inset-y-0 right-0 w-16 sm:w-24 ${darkMode ? 'from-slate-900/90' : 'from-white'} bg-gradient-to-l to-transparent pointer-events-none`} />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
