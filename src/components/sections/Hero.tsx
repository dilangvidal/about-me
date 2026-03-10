'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/constants/data';

const nameWords = personalInfo.name.split(' ');

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export function Hero() {
    return (
        <section id="hero" className="hero section">
            <div className="hero-grid">
                <div>
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        Disponible para nuevos proyectos
                    </motion.div>

                    <motion.h1
                        className="hero-name"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {nameWords.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                className={i >= 2 ? 'hero-name-accent' : ''}
                                style={{ display: 'inline-block', marginRight: '0.35em' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="hero-title"
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.7}
                    >
                        {personalInfo.title}
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.9}
                    >
                        {personalInfo.description}
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1.1}
                    >
                        <a href="#contact" className="btn-primary">
                            <Mail size={18} />
                            Contactar
                        </a>
                        <a href="#projects" className="btn-secondary">
                            <FolderOpen size={18} />
                            Ver proyectos
                        </a>
                    </motion.div>

                    <motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        <span>Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        >
                            <ArrowDown size={16} />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                >
                    <div className="hero-image-glow" />
                    <div className="hero-image-container">
                        <Image
                            src="/profile.jpeg"
                            alt="Foto profesional de Dilan González Vidal, Ingeniero de Sistemas"
                            fill
                            priority
                            sizes="(max-width: 1024px) 280px, 320px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
