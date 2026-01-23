import React, { useRef, useState, useEffect } from 'react';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect touch device on mount
    useEffect(() => {
        const checkTouchDevice = () => {
            setIsTouchDevice(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            );
        };
        checkTouchDevice();

        // Also listen for resize in case device changes orientation or mode
        window.addEventListener('resize', checkTouchDevice);
        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    const handleMouseMove = (e) => {
        // Skip magnetic effect on touch devices
        if (isTouchDevice) return;

        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const moveX = (clientX - centerX) * 0.4;
        const moveY = (clientY - centerY) * 0.4;
        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        if (isTouchDevice) return;
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isTouchDevice ? 'none' : `translate(${x}px, ${y}px)`,
                transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    );
}
