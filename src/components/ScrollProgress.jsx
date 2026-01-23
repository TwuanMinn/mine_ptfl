import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ darkMode }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
            <motion.div
                className="h-full origin-left"
                style={{
                    scaleX,
                    background: darkMode
                        ? 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)'
                        : 'linear-gradient(90deg, #3b82f6, #60a5fa, #0ea5e9)',
                    boxShadow: darkMode
                        ? '0 0 10px rgba(34, 211, 238, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)'
                        : '0 0 8px rgba(59, 130, 246, 0.5)'
                }}
            />
        </div>
    );
};

export default ScrollProgress;
