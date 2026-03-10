'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * Custom cursor that follows the mouse with smooth lag.
 * Only visible on desktop (min-width: 1024px).
 */
export function CustomCursor() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [visible, setVisible] = useState(false);

    const cursorX = useSpring(0, { stiffness: 300, damping: 30 });
    const cursorY = useSpring(0, { stiffness: 300, damping: 30 });

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!visible) setVisible(true);
        },
        [cursorX, cursorY, visible]
    );

    const handleMouseLeave = useCallback(() => {
        setVisible(false);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDesktop, handleMouseMove, handleMouseLeave]);

    if (!isDesktop) return null;

    return (
        <motion.div
            className="custom-cursor"
            style={{
                x: cursorX,
                y: cursorY,
                opacity: visible ? 1 : 0,
            }}
        />
    );
}
