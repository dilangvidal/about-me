'use client';

import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/constants/data';

const iconMap: Record<string, React.ElementType> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-social">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon] ?? Mail;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                className="footer-social-link"
                                aria-label={link.label}
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>
                <p className="footer-text">
                    © {currentYear} {personalInfo.name}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
