'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/constants/data';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const progress = useScrollProgress();

    const sectionIds = useMemo(
        () => navLinks.map((link) => link.href.replace('#', '')),
        []
    );
    const activeSection = useActiveSection(sectionIds);

    const handleLinkClick = useCallback(
        (href: string) => {
            setMobileOpen(false);
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: 'smooth' });
        },
        []
    );

    return (
        <header className="navbar">
            {/* Scroll progress bar */}
            <motion.div
                className="scroll-progress"
                style={{ scaleX: progress / 100 }}
            />

            <nav className="navbar-inner">
                <a href="#hero" className="navbar-logo" onClick={() => handleLinkClick('#hero')}>
                    DGV<span className="navbar-logo-dot">.</span>
                </a>

                {/* Desktop links */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <button
                                onClick={() => handleLinkClick(link.href)}
                                className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''
                                    }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <ThemeToggle />
                    <button
                        className="navbar-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menú"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleLinkClick(link.href)}
                                        className={`navbar-mobile-link ${activeSection === link.href.replace('#', '') ? 'active' : ''
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
