import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ darkMode }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, radius: 120 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Mouse move handler for interactive effect
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        // Reset mouse position when leaving window
        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.size = Math.random() * 2.5 + 1;
                this.baseSize = this.size;
            }

            update() {
                const mouse = mouseRef.current;

                // Always move particles (floating animation)
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Keep within bounds
                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y));

                // Mouse interaction - push particles away
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        // Calculate push force
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);

                        // Push particle away from mouse
                        this.x += Math.cos(angle) * force * 3;
                        this.y += Math.sin(angle) * force * 3;

                        // Grow particle size when near mouse
                        this.size = this.baseSize + force * 2;
                    } else {
                        // Reset size when not near mouse
                        this.size = this.baseSize;
                    }
                } else {
                    this.size = this.baseSize;
                }
            }

            draw() {
                const mouse = mouseRef.current;
                let alpha = 0.6;

                // Increase brightness when near mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        alpha = 0.6 + (1 - distance / mouse.radius) * 0.4;
                    }
                }

                ctx.fillStyle = darkMode
                    ? `rgba(56, 189, 248, ${alpha})`
                    : `rgba(59, 130, 246, ${alpha * 0.8})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Add subtle glow for larger particles
                if (this.size > 2.5) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = darkMode ? 'rgba(56, 189, 248, 0.5)' : 'rgba(59, 130, 246, 0.3)';
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
        }

        const init = () => {
            particles = [];
            // Good number of particles for the effect
            const numberOfParticles = Math.min(50, Math.floor((canvas.width * canvas.height) / 30000));

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            // Draw connections between nearby particles
            const mouse = mouseRef.current;
            let lineCount = 0;
            const maxLines = 100;
            const connectionDistance = 100;

            for (let i = 0; i < particles.length && lineCount < maxLines; i++) {
                for (let j = i + 1; j < particles.length && lineCount < maxLines; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connectionDistance * connectionDistance) {
                        const distance = Math.sqrt(distSq);
                        let lineAlpha = 0.25 - distance / 500;

                        // Brighter lines near mouse
                        if (mouse.x !== null && mouse.y !== null) {
                            const midX = (particles[i].x + particles[j].x) / 2;
                            const midY = (particles[i].y + particles[j].y) / 2;
                            const mouseDist = Math.sqrt(
                                (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                            );
                            if (mouseDist < mouse.radius * 1.5) {
                                lineAlpha += (1 - mouseDist / (mouse.radius * 1.5)) * 0.3;
                            }
                        }

                        if (lineAlpha > 0.02) {
                            ctx.beginPath();
                            ctx.strokeStyle = darkMode
                                ? `rgba(56, 189, 248, ${lineAlpha})`
                                : `rgba(59, 130, 246, ${lineAlpha})`;
                            ctx.lineWidth = 0.6;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                            lineCount++;
                        }
                    }
                }
            }

            // Draw lines connecting particles to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                for (let i = 0; i < particles.length; i++) {
                    const dx = mouse.x - particles[i].x;
                    const dy = mouse.y - particles[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const alpha = (1 - distance / mouse.radius) * 0.5;
                        ctx.beginPath();
                        ctx.strokeStyle = darkMode
                            ? `rgba(139, 92, 246, ${alpha})`  // Purple for mouse connections
                            : `rgba(124, 58, 237, ${alpha})`;
                        ctx.lineWidth = 1.2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;
