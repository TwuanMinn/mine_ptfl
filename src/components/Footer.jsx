import React from 'react';

export const Footer = ({ portfolioData, darkMode }) => {
    return (
        <footer className={`py-6 px-2 border-t ${darkMode ? 'border-blue-900/30 bg-black/90' : 'border-blue-200 bg-blue-50/50'}`} style={{maxWidth: '100vw'}}>
            <p className={`text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} style={{fontSize: '0.95rem'}}>
                © 2025 {portfolioData.name}. All rights reserved.
            </p>
        </footer>
    );
};
