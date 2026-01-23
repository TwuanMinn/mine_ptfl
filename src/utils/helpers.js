/**
 * Utility Helper Functions
 * Centralized helper functions for common operations
 */

import { ERROR_MESSAGES, STORAGE_KEYS } from '../constants';

/**
 * Safe clipboard write with fallback
 * @param {string} text - Text to copy to clipboard
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        // Fallback for older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        return true;
    } catch (error) {
        console.error(ERROR_MESSAGES.clipboardFailed, error);
        return false;
    }
};

/**
 * Safe share API with clipboard fallback
 * @param {Object} shareData - Data to share
 * @returns {Promise<{success: boolean, method: string}>}
 */
export const shareContent = async (shareData) => {
    try {
        if (navigator.share) {
            await navigator.share(shareData);
            return { success: true, method: 'share' };
        }

        // Fallback to clipboard
        const copied = await copyToClipboard(shareData.url || shareData.text);
        return { success: copied, method: 'clipboard' };
    } catch (error) {
        // User cancelled share - not an error
        if (error.name === 'AbortError') {
            return { success: false, method: 'cancelled' };
        }
        console.error(ERROR_MESSAGES.shareFailed, error);
        return { success: false, method: 'error' };
    }
};

/**
 * Safe localStorage operations
 */
export const storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('LocalStorage get error:', error);
            return defaultValue;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('LocalStorage set error:', error);
            return false;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('LocalStorage remove error:', error);
            return false;
        }
    },
};

/**
 * Download file from URL
 * @param {string} url - File URL
 * @param {string} filename - Download filename
 * @returns {Promise<boolean>}
 */
export const downloadFile = async (url, filename) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up object URL
        setTimeout(() => URL.revokeObjectURL(objectUrl), 100);
        return true;
    } catch (error) {
        console.error(ERROR_MESSAGES.qrDownloadFailed, error);
        return false;
    }
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function}
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function}
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Smooth scroll to element
 * @param {string} elementId - Element ID to scroll to
 * @param {number} offset - Offset from top
 */
export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean}
 */
export const isInViewport = (element, threshold = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight / rect.height >= threshold;
};

/**
 * Generate random ID
 * @param {number} length - ID length
 * @returns {string}
 */
export const generateId = (length = 8) => {
    return Math.random().toString(36).substring(2, 2 + length);
};

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale string
 * @returns {string}
 */
export const formatDate = (date, locale = 'en-US') => {
    try {
        return new Date(date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error) {
        return date;
    }
};

/**
 * Clamp a number between min and max
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number}
 */
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * Check if running on mobile device
 * @returns {boolean}
 */
export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

/**
 * Get contrast color (black or white) for background
 * @param {string} hexColor - Hex color string
 * @returns {string} - 'black' or 'white'
 */
export const getContrastColor = (hexColor) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'black' : 'white';
};
