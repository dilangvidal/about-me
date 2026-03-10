'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { projects } from '@/constants/data';

export function Projects() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <SectionWrapper id="projects">
            <span className="section-label">
                <FolderOpen size={16} />
                Proyectos
            </span>
            <h2 className="section-title">Proyectos destacados</h2>
            <p className="section-subtitle">
                Una selección de los proyectos más representativos en los que he trabajado.
            </p>

            <div className="projects-grid" ref={ref}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="project-number">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-techs">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="timeline-tech">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
