import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-rule bg-paper-subtle text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-rule/60">
          {/* Colophon & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-ember inline-block" />
              <span className="font-serif font-bold text-xl text-ink">
                The Warming Divide
              </span>
            </div>
            <p className="font-serif text-sm text-ink-muted leading-relaxed">
              A public interest digital editorial feature exploring climate change as a structural social crisis. Published under open research principles for educators, students, and citizens worldwide.
            </p>
            <div className="text-[11px] font-mono text-ink-faint">
              COORDINATES: LAT 00°00′ N / LON 00°00′ E • EDITION 2024.1
            </div>
          </div>

          {/* Editorial Standards & Licensing */}
          <div className="md:col-span-4 space-y-3">
            <span className="label-caps text-ink">EDITORIAL ARCHITECTURE</span>
            <p className="text-xs text-ink-muted leading-relaxed">
              Synthesized from IPCC Sixth Assessment Reports (WGI, WGII, WGIII), World Health Organization, International Labour Organization, and peer-reviewed climate inequality datasets.
            </p>
            <p className="text-xs text-ink-faint">
              Released under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). All data sources remain copyright of their respective authors and UN bodies.
            </p>
          </div>

          {/* Quick Return & Colophon */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink bg-paper px-4 py-2.5 rounded border border-rule hover:border-ember hover:text-ember transition-colors shadow-2xs"
              aria-label="Return to top of document"
            >
              <span>Return to Top</span>
              <ArrowUp size={14} />
            </button>

            <div className="text-left md:text-right text-[11px] font-mono text-ink-faint mt-6 md:mt-0">
              <div>VITE + REACT + TYPESCRIPT</div>
              <div>DESIGNED FOR FIELD CLARITY</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-faint gap-4">
          <p>© {new Date().getFullYear()} The Warming Divide Project. In the public interest.</p>
          <div className="flex gap-6">
            <a href="#why-social" className="hover:text-ink transition-colors">The 3 Tests</a>
            <a href="#scale" className="hover:text-ink transition-colors">Scale</a>
            <a href="#pressure-points" className="hover:text-ink transition-colors">Pressure Points</a>
            <a href="#sources" className="hover:text-ink transition-colors">Bibliography</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
