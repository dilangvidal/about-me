'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
    readonly id: string;
    readonly children: ReactNode;
    readonly className?: string;
    readonly delay?: number;
}

/**
 * Reusable section wrapper with scroll-triggered fade-in + slide-up animation.
 */
export function SectionWrapper({
    id,
    children,
    className = '',
    delay = 0,
}: SectionWrapperProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const }}
            className={`section ${className}`}
        >
            {children}
        </motion.section>
    );
}
