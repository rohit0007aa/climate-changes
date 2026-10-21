import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  onToggleTheme,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#why-social', label: 'The Social Issue' },
    { href: '#scale', label: 'Scale' },
    { href: '#frontline', label: 'Who Is Hit' },
    { href: '#pressure-points', label: 'Pressure Points' },
    { href: '#justice', label: 'Justice' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#levers', label: 'Levers' },
    { href: '#footprint', label: 'Footprint' },
    { href: '#atlas', label: 'Social Atlas' },
    { href: '#sources', label: 'Sources' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-rule transition-colors duration-300">
      {/* Scroll Progress Indicator Line */}
      <div
        className="h-[2px] bg-ember absolute top-0 left-0 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page reading progress"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand / Colophon Stamp */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="The Warming Divide — Return to top"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-ember inline-block group-hover:scale-125 transition-transform" />
            <span className="font-serif font-bold text-lg tracking-tight text-ink">
              The Warming Divide
            </span>
          </a>
          <span className="hidden md:inline-block text-rule">|</span>
          <span className="hidden md:inline-block label-caps text-ink-muted text-[10px]">
            FIELD ALMANAC • SOCIAL ISSUE INFOGRAPHIC
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-ink-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ember transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Theme Switcher & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 text-ink-muted hover:text-ink hover:bg-paper-subtle rounded-full border border-rule/50 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light paper theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light paper theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-muted hover:text-ink hover:bg-paper-subtle rounded-md lg:hidden border border-rule/50"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-rule bg-paper px-4 py-4 space-y-2 animate-fadeIn">
          <p className="label-caps text-ink-faint text-[10px] mb-2 px-2">Table of Contents</p>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-paper-subtle text-ink-muted hover:text-ember transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
