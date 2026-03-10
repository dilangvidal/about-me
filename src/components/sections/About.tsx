'use client';

import { User, MapPin } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { softSkills, personalInfo } from '@/constants/data';

export function About() {
    return (
        <SectionWrapper id="about">
            <span className="section-label">
                <User size={16} />
                Sobre mí
            </span>
            <h2 className="section-title">
                Construyendo soluciones que{' '}
                <span className="hero-name-accent">marcan la diferencia</span>
            </h2>

            <div className="about-grid">
                <div className="about-text">
                    <p>
                        Soy Ingeniero de Sistemas con más de 4 años de experiencia en desarrollo
                        de software, liderando equipos y construyendo productos que resuelven
                        problemas reales. Mi enfoque combina la solidez técnica con una visión
                        estratégica del negocio.
                    </p>
                    <p>
                        Me especializo en arquitecturas escalables, optimización de rendimiento
                        y migración de sistemas legacy. He trabajado con equipos a nivel regional,
                        nacional e internacional, adaptándome a diferentes culturas de desarrollo
                        y contextos técnicos.
                    </p>
                    <p>
                        Actualmente estoy explorando programación reactiva con WebFlux, servicios
                        AWS (DynamoDB, SQS, EventBridge) y automatización con n8n. Siempre busco
                        mantenerme a la vanguardia de las tecnologías que pueden generar mayor
                        impacto.
                    </p>
                </div>

                <div className="about-sidebar">
                    <div className="about-card">
                        <h3 className="about-card-title">Habilidades blandas</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill) => (
                                <span key={skill} className="soft-skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="about-card">
                        <h3 className="about-card-title">Ubicación</h3>
                        <div className="location-badge">
                            <MapPin size={18} />
                            <span>{personalInfo.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
