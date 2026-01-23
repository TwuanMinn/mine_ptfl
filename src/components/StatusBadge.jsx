import React, { useState, useEffect } from 'react';

const StatusBadge = ({ darkMode }) => {
    const [status, setStatus] = useState('Open for work');
    const [isBlue, setIsBlue] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Swap text every 2 seconds for better readability
        const interval = setInterval(() => {
            setStatus(prev => prev === 'Open for work' ? 'Available' : 'Open for work');
        }, 2000);

        // Pulse color - smoother interval
        const colorInterval = setInterval(() => {
            setIsBlue(prev => !prev);
        }, 1500);

        return () => {
            clearInterval(interval);
            clearInterval(colorInterval);
        };
    }, []);

    // Hide badge on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-16 sm:top-20 left-4 sm:left-8 z-[9990] flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-500 ${darkMode
                ? 'bg-slate-900/60 border-cyan-500/30 hover:bg-slate-800/70 hover:border-cyan-400/50'
                : 'bg-white/70 border-blue-300/60 hover:bg-white/90'
                } shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group cursor-default select-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
            style={{
                boxShadow: darkMode
                    ? '0 4px 20px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
                    : '0 4px 20px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}
        >

            {/* Radar Dot Container */}
            <div className="relative flex items-center justify-center w-4 h-4">
                {/* Ping Animation */}
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping duration-1000 ${isBlue ? 'bg-cyan-400' : 'bg-white'
                    }`}></span>

                {/* Main Dot */}
                <span className={`relative inline-flex rounded-full h-3 w-3 transition-colors duration-1000 ${isBlue ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    }`}></span>
            </div>

            {/* Swapping Text Container */}
            <div className="relative w-28 h-5 overflow-hidden">
                <div className={`absolute w-full h-full flex items-center text-sm font-semibold tracking-wide transition-all duration-700 transform ${status === 'Open for work' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Open for Work
                </div>

                <div className={`absolute w-full h-full flex items-center text-sm font-semibold tracking-wide transition-all duration-700 transform ${status === 'Available' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    } ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Available
                </div>
            </div>
        </div>
    );
};

export default StatusBadge;
