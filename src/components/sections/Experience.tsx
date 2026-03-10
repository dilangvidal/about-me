'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { experiences } from '@/constants/data';

export function Experience() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start 80%', 'end 60%'],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <SectionWrapper id="experience">
            <span className="section-label">
                <Briefcase size={16} />
                Experiencia
            </span>
            <h2 className="section-title">Mi trayectoria profesional</h2>
            <p className="section-subtitle">
                Un recorrido por las empresas y proyectos donde he dejado huella con resultados medibles.
            </p>

            <div className="timeline" ref={timelineRef}>
                {/* Static line (background) */}
                <div className="timeline-line" />
                {/* Animated line drawn on scroll */}
                <motion.div className="timeline-line-progress" style={{ height: lineHeight }} />

                {experiences.map((exp, index) => (
                    <TimelineItem key={exp.company} experience={exp} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}

interface TimelineItemProps {
    readonly experience: (typeof experiences)[number];
    readonly index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={`timeline-dot ${index === 0 ? 'active' : ''}`} />
            <div className="timeline-card">
                <div className="timeline-header">
                    <h3 className="timeline-company">{experience.company}</h3>
                    <span className="timeline-period">{experience.period}</span>
                </div>
                <p className="timeline-role">{experience.role}</p>
                <p className="timeline-description">{experience.description}</p>
                <ul className="timeline-achievements">
                    {experience.achievements.map((achievement) => (
                        <li key={achievement} className="timeline-achievement">
                            {achievement}
                        </li>
                    ))}
                </ul>
                <div className="timeline-techs">
                    {experience.technologies.map((tech) => (
                        <span key={tech} className="timeline-tech">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
