import React from 'react';
import scaleData from '../../data/scaleData.json';
import { AnimatedNumber } from '../visual/AnimatedNumber';
import { SourcedBadge } from '../ui/SourcedBadge';
import { Info } from 'lucide-react';

export const TheScaleSection: React.FC = () => {
  return (
    <section id="scale" className="py-20 md:py-28 border-b border-rule bg-paper-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="label-caps text-ember block mb-2">SECTION 03 — GLOBAL EXPOSURE</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            The Scale of Humanity at Risk
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            These four headline benchmarks, synthesized by hundreds of scientists across the Intergovernmental Panel on Climate Change (IPCC Sixth Assessment Report), map the sheer magnitude of human exposure.
          </p>
        </div>

        {/* 4 Headline Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scaleData.metrics.map((metric, idx) => (
            <div
              key={metric.id}
              className="p-6 rounded border border-rule bg-paper flex flex-col justify-between hover:border-ink-muted/50 transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-ink-faint mb-4 pb-2 border-b border-rule/50">
                  <span className="font-mono">INDEX 03.{idx + 1}</span>
                  <span className="font-medium text-[10px] uppercase tracking-wider text-ember">
                    {metric.confidence}
                  </span>
                </div>

                {/* Oversized Numeral with Count-up */}
                <div className="font-sans font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-2">
                  <AnimatedNumber
                    value={metric.value}
                    prefix={metric.prefix}
                    displayOverride={metric.displayValue}
                    decimals={1}
                  />
                  <span className="text-xl sm:text-2xl text-ember font-serif ml-1.5 font-normal">
                    {metric.suffix}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-ink leading-snug mb-3">
                  {metric.label}
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
                  {metric.description}
                </p>
              </div>

              <div className="pt-4 border-t border-rule/40">
                <SourcedBadge
                  sourceId={metric.sourceId}
                  sourceName={metric.sourceName}
                  year={metric.year}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Honest Methodological Note Box */}
        <div className="mt-12 p-6 rounded border border-rule bg-paper-subtle flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2 rounded bg-paper border border-rule/60 text-ember shrink-0">
            <Info size={18} aria-hidden="true" />
          </div>
          <div className="text-xs sm:text-sm text-ink-muted space-y-1">
            <h4 className="font-semibold text-ink uppercase tracking-wider text-xs">
              Honest Methodological Context & Caveat
            </h4>
            <p className="leading-relaxed">
              {scaleData.caveat}
            </p>
            <p className="text-ink-faint text-[11px] pt-1">
              Sources: IPCC AR6 Working Group II Summary for Policymakers (2022); Chapter 4 (Water); Chapter 5 (Food); Cross-Chapter Paper 2 (Coastal Cities).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
