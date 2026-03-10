'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Tracks the page scroll progress as a percentage (0–100).
 * Used for the scroll progress bar in the navbar.
 */
export function useScrollProgress(): number {
    const [progress, setProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setProgress(scrollPercent);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return progress;
}
