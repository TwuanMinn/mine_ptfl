/**
 * Constants Index
 * Central export point for all constants
 */

export * from './theme';

// Navigation sections
export const NAV_SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

// Social Links Configuration
export const SOCIAL_LINKS = {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    email: 'mailto:',
    figma: 'https://figma.com/',
};

// API Endpoints
export const API_ENDPOINTS = {
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/',
    devicons: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/',
};

// Timing Constants
export const TIMING = {
    debounce: 150,
    throttle: 100,
    typingSpeed: 50,
    deletingSpeed: 25,
    pauseDuration: 2000,
    popupInterval: 3000,
    popupTransition: 400,
    scrollThreshold: 300,
    scrollJitterThreshold: 10,
    toolbarHideThreshold: 80,
};

// LocalStorage Keys
export const STORAGE_KEYS = {
    heartedProjects: 'heartedProjects',
    theme: 'theme',
    language: 'language',
};

// Error Messages
export const ERROR_MESSAGES = {
    clipboardFailed: 'Failed to copy to clipboard',
    shareFailed: 'Failed to share',
    qrDownloadFailed: 'Failed to download QR code',
    loadFailed: 'Failed to load data',
    networkError: 'Network error occurred',
    unknownError: 'An unexpected error occurred',
};

// Success Messages
export const SUCCESS_MESSAGES = {
    copied: 'Link copied to clipboard!',
    shared: 'Shared successfully!',
    downloaded: 'Downloaded successfully!',
};
