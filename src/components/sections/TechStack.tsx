'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Layers,
    Server,
    Code,
    Hexagon,
    Coffee,
    Terminal,
    Atom,
    Layout,
    Triangle,
    Smartphone,
    FileCode,
    Cloud,
    GitBranch,
    Container,
    CloudCog,
    RefreshCw,
    Database,
    Leaf,
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { techStack } from '@/constants/data';
import type { TechCategory } from '@/types';

const iconMap: Record<string, React.ElementType> = {
    server: Server,
    code: Code,
    hexagon: Hexagon,
    coffee: Coffee,
    terminal: Terminal,
    atom: Atom,
    layout: Layout,
    triangle: Triangle,
    smartphone: Smartphone,
    'file-code': FileCode,
    cloud: Cloud,
    'git-branch': GitBranch,
    container: Container,
    'cloud-cog': CloudCog,
    'refresh-cw': RefreshCw,
    database: Database,
    leaf: Leaf,
};

const categories: readonly TechCategory[] = [
    'Backend',
    'Frontend',
    'DevOps & Cloud',
    'Bases de datos',
];

export function TechStack() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <SectionWrapper id="stack">
            <span className="section-label">
                <Layers size={16} />
                Stack tecnológico
            </span>
            <h2 className="section-title">Herramientas que domino</h2>
            <p className="section-subtitle">
                Tecnologías con las que trabajo a diario para construir soluciones robustas y escalables.
            </p>

            <div className="stack-categories" ref={ref}>
                {categories.map((category, catIdx) => {
                    const items = techStack.filter((item) => item.category === category);
                    return (
                        <div key={category}>
                            <h3 className="stack-category-title">{category}</h3>
                            <div className="stack-grid">
                                {items.map((item, itemIdx) => {
                                    const Icon = iconMap[item.icon] ?? Code;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            className="stack-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{
                                                duration: 0.4,
                                                delay: catIdx * 0.15 + itemIdx * 0.06,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <Icon size={20} />
                                            <span className="stack-card-name">{item.name}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
