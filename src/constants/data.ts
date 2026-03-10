import type { PersonalInfo, NavLink, TechItem, Experience, Project, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
    name: 'Dilan González Vidal',
    title: 'Ingeniero de Sistemas & Desarrollador Full Stack',
    description:
        'Más de 4 años de experiencia en desarrollo backend, frontend y liderazgo técnico. Especializado en construir soluciones escalables, optimizar rendimiento y migrar sistemas legacy hacia arquitecturas modernas.',
    location: 'Barranquilla, Colombia',
    email: 'dilangvidal@gmail.com',
    linkedin: 'https://linkedin.com/in/dilangvidal/',
    github: 'https://github.com/dilangvidal',
};

export const navLinks: readonly NavLink[] = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
] as const;

export const techStack: readonly TechItem[] = [
    // Backend
    { name: 'PHP Laravel', icon: 'server', category: 'Backend' },
    { name: 'C# .NET', icon: 'code', category: 'Backend' },
    { name: 'Node.js', icon: 'hexagon', category: 'Backend' },
    { name: 'Java Spring', icon: 'coffee', category: 'Backend' },
    { name: 'Python', icon: 'terminal', category: 'Backend' },
    // Frontend
    { name: 'React', icon: 'atom', category: 'Frontend' },
    { name: 'Next.js', icon: 'layout', category: 'Frontend' },
    { name: 'Angular', icon: 'triangle', category: 'Frontend' },
    { name: 'React Native', icon: 'smartphone', category: 'Frontend' },
    { name: 'TypeScript', icon: 'file-code', category: 'Frontend' },
    // DevOps
    { name: 'Azure DevOps', icon: 'cloud', category: 'DevOps & Cloud' },
    { name: 'GitHub Actions', icon: 'git-branch', category: 'DevOps & Cloud' },
    { name: 'Docker', icon: 'container', category: 'DevOps & Cloud' },
    { name: 'AWS', icon: 'cloud-cog', category: 'DevOps & Cloud' },
    { name: 'CI/CD', icon: 'refresh-cw', category: 'DevOps & Cloud' },
    // Databases
    { name: 'MySQL', icon: 'database', category: 'Bases de datos' },
    { name: 'PostgreSQL', icon: 'database', category: 'Bases de datos' },
    { name: 'SQL Server', icon: 'database', category: 'Bases de datos' },
    { name: 'MongoDB', icon: 'leaf', category: 'Bases de datos' },
] as const;

export const experiences: readonly Experience[] = [
    {
        company: 'Universidad de La Guajira',
        role: 'Desarrollador Mobile / Backend / Web',
        period: '2025 — 2026',
        description:
            'Desarrollo de aplicaciones del sector público incluyendo una app móvil en tiempo real y un sistema ERP para administración universitaria.',
        achievements: [
            'App React Native con funcionalidades en tiempo real para gestión académica',
            'Sistema ERP completo para administración universitaria (sector público)',
            'Integración con APIs gubernamentales y sistemas de pagos',
        ],
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'React'],
    },
    {
        company: 'Covisian',
        role: 'Desarrollador Backend',
        period: '2025',
        description:
            'Creación y refactorización de módulos empresariales con reducción significativa de incidencias en producción.',
        achievements: [
            'Desarrollo de módulos empresariales para gestión de clientes',
            'Refactorización de código logrando -25% de incidencias en producción',
            'Mejora de rendimiento en entornos de producción',
        ],
        technologies: ['PHP Laravel', 'MySQL', 'Node.js', 'React'],
    },
    {
        company: 'MRS Tecnología',
        role: 'Líder Técnico & Desarrollador Backend',
        period: '2022 — 2025',
        description:
            'Liderazgo técnico de equipos de desarrollo. Optimización de rendimiento SQL, migración de sistemas legacy y despliegues en producción.',
        achievements: [
            'Optimización de consultas SQL logrando +80% de mejora en rendimiento',
            'Migración exitosa de sistemas legacy a arquitectura de microservicios',
            'Implementación de pipelines CI/CD y despliegues en producción',
            'Liderazgo de equipo de 3 desarrolladores con metodología ágil',
        ],
        technologies: ['PHP Laravel', 'C# .NET', 'Angular', 'SQL Server', 'Azure DevOps', 'Docker'],
    },
    {
        company: 'Fundación Educativa Danza Juacar',
        role: 'Desarrollador Web',
        period: '2020 — 2021',
        description:
            'Desarrollo de la plataforma institucional web para la fundación educativa.',
        achievements: [
            'Diseño y desarrollo de plataforma institucional completa',
            'Implementación de sitio responsivo con gestión de contenido',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
] as const;

export const projects: readonly Project[] = [
    {
        title: 'Sistema ERP Universitario',
        description:
            'Sistema de planificación de recursos empresariales para la Universidad de La Guajira. Gestión integral de procesos administrativos, académicos y financieros del sector público.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
        title: 'App Móvil Tiempo Real',
        description:
            'Aplicación móvil con funcionalidades en tiempo real para gestión académica. Notificaciones push, chat integrado y seguimiento de procesos.',
        technologies: ['React Native', 'Firebase', 'Node.js', 'WebSockets'],
    },
    {
        title: 'Módulos Empresariales Covisian',
        description:
            'Suite de módulos para gestión de clientes en el sector de telecomunicaciones. APIs RESTful con integraciones a sistemas legados.',
        technologies: ['PHP Laravel', 'MySQL', 'React', 'REST APIs'],
    },
    {
        title: 'Migración Legacy a Microservicios',
        description:
            'Migración completa de sistemas monolíticos legacy hacia arquitectura de microservicios. Optimización de rendimiento SQL con +80% de mejora.',
        technologies: ['C# .NET', 'Docker', 'Azure DevOps', 'SQL Server'],
    },
    {
        title: 'Plataforma Fundación Danza Juacar',
        description:
            'Plataforma institucional web para la Fundación Educativa Danza Juacar. Sitio responsivo con gestión de contenido para la comunidad educativa.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
] as const;

export const socialLinks: readonly SocialLink[] = [
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/dilangvidal/',
        icon: 'linkedin',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/dilangvidal',
        icon: 'github',
    },
    {
        label: 'Email',
        href: 'mailto:dilangvidal@gmail.com',
        icon: 'mail',
    },
] as const;

export const softSkills: readonly string[] = [
    'Liderazgo técnico',
    'Resolución de problemas',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Mentoría',
    'Metodologías ágiles',
    'Pensamiento analítico',
    'Adaptabilidad',
] as const;
