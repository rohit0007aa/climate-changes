import { useEffect, useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/01_Hero';
import { SocialTestsSection } from './components/sections/02_SocialTests';
import { TheScaleSection } from './components/sections/03_TheScale';
import { FrontlineGroupsSection } from './components/sections/04_FrontlineGroups';
import { PressurePointsSection } from './components/sections/05_PressurePoints';
import { ClimateJusticeSection } from './components/sections/06_ClimateJustice';
import { TimelineSection } from './components/sections/07_Timeline';
import { LeversOfChangeSection } from './components/sections/08_LeversOfChange';
import { FootprintSimpleSection } from './components/sections/09_FootprintSimple';
import { SocialAtlasSection } from './components/sections/10_SocialAtlas';
import { MethodDisclosureSection } from './components/sections/11_MethodDisclosure';
import { SourcesIndexSection } from './components/sections/12_SourcesIndex';
import { Footer } from './components/layout/Footer';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('twd_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('twd_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 selection:bg-ember/20 selection:text-ink">
      {/* Skip to Content for Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded focus:shadow-md text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      <Navigation theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* 01. Hero & Thesis */}
        <HeroSection />

        {/* 02. Why it is a Social Issue */}
        <SocialTestsSection />

        {/* 03. The Scale */}
        <TheScaleSection />

        {/* 04. Who is Hit Hardest */}
        <FrontlineGroupsSection />

        {/* 05. Four Pressure Points */}
        <PressurePointsSection />

        {/* 06. Climate Justice */}
        <ClimateJusticeSection />

        {/* 07. Timeline */}
        <TimelineSection />

        {/* 08. What Helps: Levers */}
        <LeversOfChangeSection />

        {/* 09. Your Footprint, Simply */}
        <FootprintSimpleSection />

        {/* 10. More Social Issues: The Atlas */}
        <SocialAtlasSection />

        {/* 11. Method & AI Disclosure */}
        <MethodDisclosureSection />

        {/* 12. Sources & References */}
        <SourcesIndexSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
