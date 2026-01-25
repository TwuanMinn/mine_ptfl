import React from 'react';
import { Mail, Github, Linkedin, Figma, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const contactBadgeStyle = (isDark) => ({
    background: isDark
        ? 'linear-gradient(160deg, rgba(15,23,42,0.7), rgba(30,41,59,0.6))'
        : 'linear-gradient(160deg, rgba(239,246,255,0.9), rgba(219,234,254,0.75))',
    border: isDark ? '1px solid rgba(96,165,250,0.25)' : '1px solid rgba(59,130,246,0.25)',
    boxShadow: isDark
        ? 'inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 26px rgba(0,0,0,0.4), 0 0 22px rgba(59,130,246,0.2)'
        : 'inset 0 1px 0 rgba(255,255,255,0.85), 0 12px 26px rgba(30,64,175,0.15), 0 0 18px rgba(59,130,246,0.2)'
});

const contactIconStyle = (isDark) => ({
    background: isDark
        ? 'linear-gradient(145deg, rgba(10,14,24,0.95), rgba(27,35,52,0.95))'
        : 'linear-gradient(145deg, rgba(248,250,252,0.95), rgba(226,232,240,0.9))',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(148,163,184,0.35)',
    boxShadow: isDark
        ? 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -10px 16px rgba(0,0,0,0.6), 0 10px 0 rgba(0,0,0,0.35), 0 20px 30px rgba(0,0,0,0.5)'
        : 'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -10px 16px rgba(148,163,184,0.3), 0 10px 0 rgba(148,163,184,0.25), 0 20px 30px rgba(148,163,184,0.35)'
});

export const Contact = ({ portfolioData, darkMode }) => {
    return (
        <section id="contact" className="py-16 px-2" style={{maxWidth: '100vw'}}>
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto w-full" style={{padding: '0 0.5rem'}}>
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{fontSize: '2rem'}}>CONTACT</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite'
                                    }}></div>
                                    <div
                                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                                        style={contactBadgeStyle(darkMode)}
                                    >
                                        <Mail className={darkMode ? "text-cyan-400" : "text-blue-600"} size={28} />
                                    </div>
                                </div>
                                <div>
                                    <a href={`mailto:${portfolioData.email}`} className={`text-xl ${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} transition-colors`}>
                                        {portfolioData.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite',
                                        animationDelay: '0.3s'
                                    }}></div>
                                    <div
                                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                                        style={contactBadgeStyle(darkMode)}
                                    >
                                        <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <a href="tel:+84934159597" className={`${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} text-lg transition-colors`}>
                                        +84 93 415 9597
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                                        background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                                        backgroundSize: '200% 100%',
                                        animation: 'borderFlow 3s linear infinite',
                                        animationDelay: '0.6s'
                                    }}></div>
                                    <div
                                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                                        style={contactBadgeStyle(darkMode)}
                                    >
                                        <MapPin className={darkMode ? "text-cyan-400" : "text-blue-600"} size={28} />
                                    </div>
                                </div>
                                <div>
                                    <span className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg transition-colors`}>
                                        Ho Chi Minh City, Vietnam
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <a
                                    href={portfolioData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                    style={contactIconStyle(darkMode)}
                                >
                                    <Github className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
                                </a>
                                <a
                                    href={portfolioData.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                    style={contactIconStyle(darkMode)}
                                >
                                    <Linkedin className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
                                </a>
                                <a
                                    href={portfolioData.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                    style={contactIconStyle(darkMode)}
                                >
                                    <Figma className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
                                </a>
                                <a
                                    href={portfolioData.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                    style={contactIconStyle(darkMode)}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className={darkMode ? "text-cyan-400" : "text-blue-600"}
                                        aria-hidden="true"
                                    >
                                        <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.36 0 11.99c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.63a11.95 11.95 0 0 0 5.8 1.48h.01c6.63 0 11.99-5.37 11.99-12 0-3.2-1.24-6.2-3.48-8.37ZM12 21.85h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.58-.23-.37A9.9 9.9 0 1 1 21.9 11.85 9.9 9.9 0 0 1 12 21.85Zm5.44-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
                                    </svg>
                                </a>
                                <a
                                    href={portfolioData.discord}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl backdrop-blur flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                                    style={contactIconStyle(darkMode)}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className={darkMode ? "text-cyan-400" : "text-blue-600"}
                                        aria-hidden="true"
                                    >
                                        <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.074.035c-.21.375-.444.864-.608 1.249a18.36 18.36 0 0 0-5.487 0 12.61 12.61 0 0 0-.617-1.249.073.073 0 0 0-.074-.035 19.736 19.736 0 0 0-4.885 1.515.066.066 0 0 0-.03.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.046.074.074 0 0 0 .081-.027c.462-.63.874-1.295 1.226-1.994a.072.072 0 0 0-.038-.098 12.6 12.6 0 0 1-1.872-.9.073.073 0 0 1-.007-.122c.125-.094.25-.192.369-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.245.197.37.291a.073.073 0 0 1-.006.122 12.3 12.3 0 0 1-1.873.9.072.072 0 0 0-.038.098c.36.699.773 1.364 1.225 1.994a.073.073 0 0 0 .081.027 19.82 19.82 0 0 0 6.002-3.046.077.077 0 0 0 .031-.056c.5-5.177-.838-9.673-3.548-13.662a.061.061 0 0 0-.031-.027ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.095 2.157 2.419 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.095 2.157 2.419 0 1.334-.947 2.419-2.157 2.419Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={`glass-panel-illuminate rounded-3xl p-8 transition-all duration-300`} style={{
                            animation: 'levitateForm 4.5s ease-in-out infinite, levitateShadow 4.5s ease-in-out infinite'
                        }}>
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className={`w-full px-6 py-4 glass-input glass-input-glow rounded-2xl ${darkMode ? 'placeholder-white/50' : 'placeholder-slate-500'} focus:outline-none transition-colors`}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={`w-full px-6 py-4 glass-input glass-input-glow rounded-2xl ${darkMode ? 'placeholder-white/50' : 'placeholder-slate-500'} focus:outline-none transition-colors`}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className={`w-full px-6 py-4 glass-input glass-input-glow rounded-2xl ${darkMode ? 'placeholder-white/50' : 'placeholder-slate-500'} focus:outline-none transition-colors`}
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Message"
                                        rows={6}
                                        className={`w-full px-6 py-4 glass-input glass-input-glow rounded-2xl ${darkMode ? 'placeholder-white/50' : 'placeholder-slate-500'} focus:outline-none transition-colors resize-none`}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`btn-ripple relative overflow-visible w-full ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] ${darkMode ? 'shadow-lg shadow-cyan-500/30' : 'shadow-lg shadow-blue-400/30'}`}
                                    style={{
                                        transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease',
                                        boxShadow: darkMode
                                            ? 'inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 24px rgba(6,182,212,0.28)'
                                            : 'inset 0 1px 0 rgba(255,255,255,0.45), 0 10px 24px rgba(59,130,246,0.28)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = darkMode
                                            ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246))'
                                            : 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = darkMode
                                            ? 'linear-gradient(to right, rgb(37, 99, 235), rgb(34, 211, 238))'
                                            : 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))';
                                    }}
                                >
                                    <span className="ripple-wave-1 absolute inset-0 rounded-xl pointer-events-none" style={{
                                        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
                                    }}></span>
                                    <span className="ripple-wave-2 absolute inset-0 rounded-xl pointer-events-none" style={{
                                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
                                    }}></span>
                                    <span className="relative z-10">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
