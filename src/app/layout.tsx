import type { Metadata } from 'next';
import { Outfit, Source_Serif_4 } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://dilangvidal.dev';

export const metadata: Metadata = {
  title: 'Dilan González Vidal — Ingeniero de Sistemas & Full Stack Developer',
  description:
    'Portfolio profesional de Dilan González Vidal. Ingeniero de Sistemas con +4 años de experiencia en desarrollo backend, frontend y liderazgo técnico. Especializado en Laravel, .NET, React, Next.js, y arquitecturas escalables.',
  keywords: [
    'Dilan González Vidal',
    'Ingeniero de Sistemas',
    'Full Stack Developer',
    'Backend Developer',
    'React',
    'Next.js',
    'Laravel',
    '.NET',
    'Node.js',
    'TypeScript',
    'Barranquilla',
    'Colombia',
  ],
  authors: [{ name: 'Dilan González Vidal' }],
  creator: 'Dilan González Vidal',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    title: 'Dilan González Vidal — Ingeniero de Sistemas & Full Stack Developer',
    description:
      'Portfolio profesional. +4 años construyendo soluciones escalables, optimizando rendimiento y liderando equipos de desarrollo.',
    siteName: 'Dilan González Vidal Portfolio',
    images: [
      {
        url: '/profile.jpeg',
        width: 800,
        height: 600,
        alt: 'Dilan González Vidal — Ingeniero de Sistemas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilan González Vidal — Ingeniero de Sistemas & Full Stack Developer',
    description:
      'Portfolio profesional. +4 años construyendo soluciones escalables, optimizando rendimiento y liderando equipos.',
    images: ['/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dilan González Vidal',
    jobTitle: 'Ingeniero de Sistemas & Full Stack Developer',
    url: siteUrl,
    image: `${siteUrl}/profile.jpeg`,
    email: 'mailto:dilangvidal@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barranquilla',
      addressCountry: 'CO',
    },
    sameAs: [
      'https://linkedin.com/in/dilangvidal/',
      'https://github.com/dilangvidal',
    ],
    knowsAbout: [
      'PHP Laravel',
      'C# .NET',
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'Docker',
      'AWS',
      'Microservices',
      'Clean Architecture',
    ],
  };

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${sourceSerif.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
