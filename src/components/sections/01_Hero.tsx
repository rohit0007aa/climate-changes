import React from 'react';
import { WarmingStripes } from '../visual/WarmingStripes';
import { ContourArt } from '../visual/ContourArt';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-rule overflow-hidden">
      {/* Background Topographic Texture */}
      <ContourArt className="absolute top-0 right-0 w-full md:w-2/3 h-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Field Plate Header / Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 pb-6 mb-8 border-b border-rule/50 text-[11px] font-mono text-ink-faint">
          <div className="flex items-center gap-3">
            <span className="text-ember font-bold">PLATE 01.A</span>
            <span>//</span>
            <span>SOCIAL EPIDEMIOLOGY OF THE BIOSPHERE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UNFCCC / IPCC CONSENSUS DOSSIER</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">READING TIME ~14 MIN</span>
          </div>
        </div>

        {/* Main Display Title & Thesis */}
        <div className="max-w-4xl">
          <span className="label-caps text-ember tracking-widest inline-block mb-3">
            A DIGITAL MAGAZINE FEATURE & SOCIAL ISSUE INFOGRAPHIC
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
            Climate change is a people problem.
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ink-muted leading-relaxed max-w-3xl font-light">
            Climate change is not only an environmental problem. It is a social issue that decides who has food, water, safe homes, health and work, and who can afford to recover from disaster.
          </p>
        </div>

        {/* Warming Stripes Visual Component */}
        <div className="mt-12 max-w-5xl">
          <WarmingStripes />
        </div>

        {/* Editorial Sub-deck & Scroll Cue */}
        <div className="mt-12 pt-8 border-t border-rule/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-4 text-ink-muted text-sm sm:text-base leading-relaxed">
            <p>
              For decades, public discourse portrayed global warming as a distant ecological abstraction: melting polar caps, parts per million of carbon dioxide, and computer-modeled temperature averages for the year 2100.
            </p>
            <p className="text-ink font-medium">
              On the ground, climate change is already an inequality engine. It concentrates its lethal shocks on communities that contributed least to atmospheric heating, while shielding the wealthy behind insurance policies, air filtration systems, and fortified seawalls.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="#why-social"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted hover:text-ember transition-colors py-2 px-3 rounded border border-rule hover:border-ember/40 bg-paper-subtle/50"
            >
              <span>Explore the Evidence</span>
              <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
