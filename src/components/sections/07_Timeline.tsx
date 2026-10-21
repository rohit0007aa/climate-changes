import React, { useState } from 'react';
import timelineData from '../../data/timelineData.json';
import { TimelineEvent } from '../../types';

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Science', 'Policy', 'Justice & Finance'];

  const filteredEvents: TimelineEvent[] =
    filter === 'All'
      ? timelineData
      : timelineData.filter((e) =>
          e.category.toLowerCase().includes(filter.toLowerCase().split(' ')[0])
        );

  return (
    <section id="timeline" className="py-20 md:py-28 border-b border-rule bg-paper-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-rule">
          <div className="max-w-2xl">
            <span className="label-caps text-ember block mb-2">SECTION 07 — HISTORICAL MILESTONES</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-3">
              Chronology of Knowledge & Treaty
            </h2>
            <p className="font-serif text-lg text-ink-muted leading-relaxed">
              From Svante Arrhenius’s 19th-century pen-and-paper atmospheric calculations to the establishment of the UN Loss and Damage Fund.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                  filter === cat
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink-muted border-rule hover:border-ink/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-rule/70 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {filteredEvents.map((evt) => (
            <div key={evt.year} className="relative group">
              {/* Year Marker on Left (Desktop) */}
              <div className="hidden md:block absolute -left-40 top-0 text-right w-28">
                <span className="font-mono text-xl font-bold text-ink tabular-nums">
                  {evt.year}
                </span>
                <span className="block text-[10px] uppercase font-semibold text-ember">
                  {evt.category}
                </span>
              </div>

              {/* Pin on timeline axis */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-paper border-2 border-ember group-hover:scale-125 transition-transform" />

              {/* Card Body */}
              <div className="p-6 rounded border border-rule bg-paper group-hover:border-ink-muted/50 transition-colors shadow-xs">
                {/* Mobile Year Badge */}
                <div className="flex md:hidden items-center gap-2 mb-2">
                  <span className="font-mono font-bold text-ink text-lg">{evt.year}</span>
                  <span className="text-[10px] font-semibold text-ember uppercase bg-ember-tint px-2 py-0.5 rounded">
                    {evt.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
                  {evt.title}
                </h3>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4">
                  {evt.summary}
                </p>

                <div className="pt-3 border-t border-rule/50 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-ink-faint gap-1">
                  <div>
                    <span className="font-semibold text-ink-muted">Significance:</span>{' '}
                    <span>{evt.significance}</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-faint shrink-0">
                    Source: {evt.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
