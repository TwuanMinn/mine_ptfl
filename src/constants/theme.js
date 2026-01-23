/**
 * Design Tokens & Theme Constants
 * Centralized configuration for consistent styling across the portfolio
 */

// Color Palette
export const colors = {
    // Primary Blues
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
    },
    // Cyan Accents
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
    },
    // Purple/Violet
    violet: {
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
    },
    // Neutrals (Dark Theme)
    dark: {
        bg: '#050508',
        bgSecondary: '#0a0a10',
        bgTertiary: '#070709',
        surface: 'rgba(15, 23, 42, 0.8)',
        surfaceHover: 'rgba(30, 41, 59, 0.9)',
        border: 'rgba(51, 65, 85, 0.5)',
        borderHover: 'rgba(71, 85, 105, 0.7)',
    },
    // Neutrals (Light Theme)
    light: {
        bg: '#ffffff',
        bgSecondary: '#f8fafc',
        bgTertiary: '#f1f5f9',
        surface: 'rgba(255, 255, 255, 0.9)',
        surfaceHover: 'rgba(248, 250, 252, 0.95)',
        border: 'rgba(203, 213, 225, 0.8)',
        borderHover: 'rgba(148, 163, 184, 0.9)',
    },
    // Semantic Colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
};

// Gradients
export const gradients = {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)',
    primaryReverse: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
    accent: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    dark: 'linear-gradient(135deg, #050508 0%, #0a0a10 50%, #070709 100%)',
    light: 'linear-gradient(135deg, #eff6ff 0%, #ecfeff 50%, #ffffff 100%)',
    text: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
    glow: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
};

// Typography
export const typography = {
    fontFamily: {
        primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
        mono: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
    },
    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
};

// Spacing
export const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
};

// Animation Timings
export const animations = {
    duration: {
        instant: 0,
        fast: 150,
        normal: 300,
        slow: 500,
        slower: 700,
        slowest: 1000,
    },
    easing: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        linear: 'linear',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
};

// Framer Motion Variants
export const motionVariants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    },
    staggerItem: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
    pageTransition: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
    },
};

// Shadows
export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: {
        blue: '0 0 20px rgba(59, 130, 246, 0.5)',
        cyan: '0 0 20px rgba(34, 211, 238, 0.5)',
        purple: '0 0 20px rgba(139, 92, 246, 0.5)',
    },
};

// Breakpoints
export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

// Z-Index Scale
export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
    toast: 80,
    cursor: 9999,
};

// Border Radius
export const borderRadius = {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
};

export default {
    colors,
    gradients,
    typography,
    spacing,
    animations,
    motionVariants,
    shadows,
    breakpoints,
    zIndex,
    borderRadius,
};
