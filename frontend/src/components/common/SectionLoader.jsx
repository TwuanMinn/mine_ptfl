import React, { memo } from 'react';

/**
 * Shared loading spinner for lazy-loaded sections
 * Used as Suspense fallback across the app
 */
export const SectionLoader = memo(({ height = '200px' }) => (
    <div
        className="flex items-center justify-center"
        style={{ minHeight: height }}
    >
        <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
));

SectionLoader.displayName = 'SectionLoader';

export default SectionLoader;
