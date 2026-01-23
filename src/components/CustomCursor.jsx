import React, { useEffect, useState } from 'react';

export default function CustomCursor({ darkMode }) {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);


    useEffect(() => {
        // Only enable custom cursor logic on non-touch/desktop devices
        const mediaQuery = window.matchMedia('(min-width: 768px) and (hover: hover)');
        if (!mediaQuery.matches) return;

        const handleMouseMove = (e) => {
            // Use requestAnimationFrame for smoother updates if possible, 
            // but for now direct state update is okay if optimized elsewhere.
            // Actually, let's keep it simple as the heavy part is the rendering.
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('button, a, .clickable')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-300 ease-out items-center justify-center translate-x-[-50%] translate-y-[-50%]"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
                }}
            >
                <div
                    className={`w-8 h-8 rounded-full border ${darkMode ? 'border-cyan-400/40' : 'border-blue-500/40'} ${isHovering ? 'bg-white/5' : ''} transition-all duration-300`}
                />
            </div>
            <div
                className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%]"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    backgroundColor: darkMode ? '#22d3ee' : '#3b82f6',
                    boxShadow: darkMode ? '0 0 10px #22d3ee' : '0 0 10px #3b82f6'
                }}
            />
        </>
    );
}
