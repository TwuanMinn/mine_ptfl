/**
 * Code Protection Utilities
 * Lightweight protection that doesn't break UX or accessibility
 */

/**
 * Initialize code protection measures
 * Toned down to avoid breaking screen readers, copy/paste, and general usability
 */
export const initCodeProtection = () => {
    if (typeof window === 'undefined') return;

    const isProduction = process.env.NODE_ENV === 'production';

    // Only apply lightweight protections
    disableImageDragging();

    if (isProduction) {
        addConsoleMessage();
    }
};

/**
 * Disable image dragging (non-intrusive)
 */
const disableImageDragging = () => {
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
};

/**
 * Add a friendly console message in production
 */
const addConsoleMessage = () => {
    console.log(
        '%c🚀 Welcome to my Portfolio!',
        'color: #22d3ee; font-size: 20px; font-weight: bold;'
    );
    console.log(
        '%cBuilt with React, Framer Motion & ❤️',
        'color: #60a5fa; font-size: 12px;'
    );
    console.log(
        '%c© 2025 Nguyen Huynh Minh Tuan — All Rights Reserved',
        'color: #a78bfa; font-size: 11px;'
    );
    console.log(
        '%cInterested in the code? Let\'s collaborate! Contact me via the site.',
        'color: #6bcb77; font-size: 11px;'
    );
};

/**
 * Cleanup function (kept for API compatibility)
 */
export const removeCodeProtection = () => {
    // No styles to remove in the toned-down version
};

export default initCodeProtection;
