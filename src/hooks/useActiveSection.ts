'use client';

import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the ID of the active section for navbar highlighting.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return activeSection;
}
