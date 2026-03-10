import nextDynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';

// Lazy load lower sections for performance
const Experience = nextDynamic(
  () => import('@/components/sections/Experience').then((mod) => ({ default: mod.Experience })),
  { ssr: true }
);
const Projects = nextDynamic(
  () => import('@/components/sections/Projects').then((mod) => ({ default: mod.Projects })),
  { ssr: true }
);
const Contact = nextDynamic(
  () => import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
  { ssr: true }
);
const Footer = nextDynamic(
  () => import('@/components/sections/Footer').then((mod) => ({ default: mod.Footer })),
  { ssr: true }
);

/**
 * Force dynamic rendering since the page depends on client-side
 * ThemeProvider context and localStorage.
 */
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Navbar />
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
