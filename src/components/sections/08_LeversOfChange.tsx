import React, { useState } from 'react';
import leversData from '../../data/leversData.json';
import { LeverItem } from '../../types';
import { Sliders, CheckCircle2 } from 'lucide-react';

export const LeversOfChangeSection: React.FC = () => {
  const [activeLeverId, setActiveLeverId] = useState<string>(leversData[0].id);

  const activeLever: LeverItem =
    leversData.find((l) => l.id === activeLeverId) || leversData[0];

  return (
    <section id="levers" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="label-caps text-ember block mb-2">SECTION 08 — SYSTEMIC INTERVENTION</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Five Levers of Social Resilience
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            Addressing climate inequality requires shifting institutional levers rather than urging private moral discipline. These five systemic interventions provide the highest verified returns in protecting human lives.
          </p>
        </div>

        {/* Levers Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Levers Stack */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2 pb-2 text-xs text-ink-faint border-b border-rule font-mono">
              <Sliders size={14} />
              <span>SELECT SYSTEM LEVER [01 — 05]</span>
            </div>

            {leversData.map((lever) => {
              const isActive = lever.id === activeLeverId;
              return (
                <button
                  key={lever.id}
                  onClick={() => setActiveLeverId(lever.id)}
                  className={`w-full text-left p-4 rounded border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-paper-elevated border-ember shadow-xs'
                      : 'bg-paper border-rule hover:border-ink-muted/40 hover:bg-paper-subtle/50'
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                      isActive ? 'bg-ember text-paper' : 'bg-paper-subtle text-ink-muted'
                    }`}
                  >
                    {lever.leverNumber}
                  </span>
                  <div>
                    <h3
                      className={`font-serif text-base font-bold transition-colors ${
                        isActive ? 'text-ember' : 'text-ink'
                      }`}
                    >
                      {lever.name}
                    </h3>
                    <p className="text-xs text-ink-muted mt-0.5 line-clamp-1">{lever.focus}</p>
                    <span className="inline-block mt-2 font-mono text-[11px] text-ink-faint">
                      Efficacy: {lever.keyEfficacyStat}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Lever Operational Specification */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-rule bg-paper-elevated shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-rule">
              <div>
                <span className="font-mono text-xs font-bold text-ember">
                  LEVER SPECIFICATION // {activeLever.leverNumber}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                  {activeLever.name}
                </h3>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-paper-subtle border border-rule text-ink-muted">
                {activeLever.source}
              </span>
            </div>

            {/* Impact Statement */}
            <div className="space-y-4 mb-6">
              <h4 className="label-caps text-ink-muted">Core Objective & Societal Impact:</h4>
              <p className="font-serif text-lg text-ink leading-relaxed">
                {activeLever.impact}
              </p>
            </div>

            {/* Concrete Levers / Examples */}
            <div className="space-y-3 mb-8">
              <h4 className="label-caps text-ink-muted">High-Yield Concrete Implementations:</h4>
              <ul className="space-y-2">
                {activeLever.examples.map((ex, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <CheckCircle2 size={16} className="text-ember shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equity Dimension */}
            <div className="p-4 rounded bg-paper-subtle border-l-4 border-ink space-y-1">
              <span className="label-caps text-ink font-semibold">THE SOCIAL EQUITY PREREQUISITE</span>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {activeLever.equityAngle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
