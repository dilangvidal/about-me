export interface NavLink {
    readonly label: string;
    readonly href: string;
}

export interface TechItem {
    readonly name: string;
    readonly icon: string;
    readonly category: TechCategory;
}

export type TechCategory = 'Backend' | 'Frontend' | 'DevOps & Cloud' | 'Bases de datos';

export interface Experience {
    readonly company: string;
    readonly role: string;
    readonly period: string;
    readonly description: string;
    readonly achievements: readonly string[];
    readonly technologies: readonly string[];
}

export interface Project {
    readonly title: string;
    readonly description: string;
    readonly technologies: readonly string[];
    readonly link?: string;
    readonly github?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface SocialLink {
    readonly label: string;
    readonly href: string;
    readonly icon: string;
}

export interface PersonalInfo {
    readonly name: string;
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly email: string;
    readonly linkedin: string;
    readonly github: string;
}
