'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true if the given media query matches.
 * Used for responsive behavior (e.g., disabling cursor on mobile).
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, [query]);

    return matches;
}
