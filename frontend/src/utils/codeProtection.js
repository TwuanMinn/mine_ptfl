/**
 * Code Protection Utilities
 * Enhanced protection against source code copying and inspection
 */

/**
 * Initialize all code protection measures
 */
export const initCodeProtection = () => {
    if (typeof window === 'undefined') return;

    // Only apply in production
    const isProduction = process.env.NODE_ENV === 'production';

    disableContextMenu();
    disableKeyboardShortcuts();
    disableTextSelection();
    disableImageDragging();

    if (isProduction) {
        detectDevTools();
        disableViewSource();
        clearConsole();
    }
};

/**
 * Disable right-click context menu
 */
const disableContextMenu = () => {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
};

/**
 * Disable keyboard shortcuts for developer tools and view source
 */
const disableKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // F12 - Developer Tools
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I - Developer Tools
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J - Console
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C - Element Inspector
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }

        // Ctrl+U - View Source
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S - Save Page
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Ctrl+P - Print (can be used to save as PDF)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }

        // Ctrl+A - Select All (extra protection)
        if (e.ctrlKey && e.key === 'a') {
            // Allow in input/textarea
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        }

        // Ctrl+C - Copy (only block outside inputs)
        if (e.ctrlKey && e.key === 'c') {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        }
    });
};

/**
 * Disable text selection (except in inputs)
 */
const disableTextSelection = () => {
    const style = document.createElement('style');
    style.id = 'code-protection-styles';
    style.innerHTML = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    
    input, textarea, [contenteditable="true"] {
      -webkit-user-select: auto !important;
      -moz-user-select: auto !important;
      -ms-user-select: auto !important;
      user-select: auto !important;
    }
    
    /* Disable image dragging */
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: none;
    }
    
    /* Re-enable pointer events for clickable images */
    a img, button img {
      pointer-events: auto;
    }
  `;

    // Remove existing if present
    const existing = document.getElementById('code-protection-styles');
    if (existing) existing.remove();

    document.head.appendChild(style);
};

/**
 * Disable image dragging
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
 * Detect DevTools opening (production only)
 */
const detectDevTools = () => {
    const threshold = 160;
    let devtoolsOpen = false;

    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                onDevToolsOpen();
            }
        } else {
            devtoolsOpen = false;
        }
    };

    // Check periodically
    setInterval(checkDevTools, 1000);

    // Also check using debugger timing
    const detectDebugger = () => {
        const start = performance.now();
        // debugger; // Uncomment in production for aggressive protection
        const end = performance.now();
        if (end - start > 100) {
            onDevToolsOpen();
        }
    };

    // Run debugger check periodically (less frequently)
    setInterval(detectDebugger, 5000);
};

/**
 * Action when DevTools is detected
 */
const onDevToolsOpen = () => {
    console.clear();
    console.log(
        '%c⚠️ Developer Tools Detected',
        'color: #ff6b6b; font-size: 24px; font-weight: bold;'
    );
    console.log(
        '%cThis portfolio is protected. Please respect the creator\'s work.',
        'color: #ffd93d; font-size: 14px;'
    );
    console.log(
        '%c© 2024 - All Rights Reserved',
        'color: #6bcb77; font-size: 12px;'
    );
};

/**
 * Disable view source (only works partially)
 */
const disableViewSource = () => {
    // Blur window when losing focus (potential screenshot)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Could trigger protective measure here
        }
    });
};

/**
 * Clear console on load
 */
const clearConsole = () => {
    console.clear();

    // Custom console message
    console.log(
        '%c🚀 Welcome to my Portfolio!',
        'color: #22d3ee; font-size: 20px; font-weight: bold;'
    );
    console.log(
        '%cBuilt with React, Framer Motion & ❤️',
        'color: #60a5fa; font-size: 12px;'
    );
    console.log(
        '%cSource code is protected. Please contact me for collaboration!',
        'color: #a78bfa; font-size: 11px;'
    );
};

/**
 * Cleanup function to remove protection (if needed)
 */
export const removeCodeProtection = () => {
    const style = document.getElementById('code-protection-styles');
    if (style) style.remove();
};

export default initCodeProtection;
