import React, { useState } from 'react';
import atlasData from '../../data/atlasIssues.json';
import { AtlasIssue } from '../../types';
import { Drawer } from '../ui/Drawer';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export const SocialAtlasSection: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<AtlasIssue | null>(null);

  return (
    <section id="atlas" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="label-caps text-ember block mb-2">SECTION 10 — THE BROADER ATLAS</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Related Social Issues Almanac
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            Climate vulnerability does not exist in isolation. It intersects with systemic crises across gender equity, digital infrastructure, public health, education, and shelter. Explore each field card to inspect verified statistics and policy levers.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atlasData.map((issue) => (
            <div
              key={issue.id}
              onClick={() => setSelectedIssue(issue as AtlasIssue)}
              className="p-6 rounded border border-rule bg-paper-elevated hover:border-ink-muted/50 cursor-pointer flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xs group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIssue(issue as AtlasIssue);
                }
              }}
              aria-label={`Open dossier for ${issue.title}`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-rule text-xs text-ink-faint">
                  <span className="label-caps text-ember">{issue.theme}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint group-hover:text-ember group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-ember transition-colors">
                  {issue.title}
                </h3>

                <p className="font-serif italic text-xs text-ink-muted leading-relaxed mb-4">
                  “{issue.question}”
                </p>

                {/* 3 Sourced Numbers Preview */}
                <div className="space-y-2 py-3 border-t border-b border-rule/50 my-3">
                  {issue.stats.map((st, i) => (
                    <div key={i} className="flex justify-between items-baseline text-xs">
                      <span className="font-mono font-bold text-ink">{st.value}</span>
                      <span className="text-[11px] text-ink-faint text-right line-clamp-1 ml-2">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs text-ink-muted mt-2">
                  <span className="font-semibold text-ink">What helps:</span>{' '}
                  <span className="line-clamp-2">{issue.whatHelps}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-rule/40 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-ember">
                  <span>Read Full Dossier</span>
                  <BookOpen size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide-over Drawer for Issue Detail */}
        <Drawer
          isOpen={!!selectedIssue}
          onClose={() => setSelectedIssue(null)}
          title={selectedIssue?.title || ''}
          category={selectedIssue?.theme}
        >
          {selectedIssue && (
            <div className="space-y-6">
              <div className="p-4 rounded bg-paper-subtle border-l-4 border-ember">
                <span className="label-caps text-ember block mb-1">CENTRAL QUESTION</span>
                <p className="font-serif italic text-base text-ink font-medium">
                  “{selectedIssue.question}”
                </p>
              </div>

              <div>
                <h4 className="label-caps text-ink-muted mb-3">KEY EMPIRICAL METRICS:</h4>
                <div className="space-y-3">
                  {selectedIssue.stats.map((stat, i) => (
                    <div key={i} className="p-3 rounded border border-rule bg-paper">
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono font-bold text-xl text-ink">{stat.value}</span>
                        <span className="text-[11px] font-mono text-ink-faint">{stat.source}</span>
                      </div>
                      <p className="text-xs text-ink-muted mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="label-caps text-ink-muted mb-2">SYSTEMIC ANALYSIS & OVERVIEW:</h4>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {selectedIssue.overview}
                </p>
              </div>

              <div className="p-4 rounded bg-ember-tint/50 border border-ember/20">
                <h4 className="label-caps text-ember mb-1">WHAT HELPS:</h4>
                <p className="text-sm text-ink font-medium leading-relaxed">
                  {selectedIssue.whatHelps}
                </p>
              </div>

              <div className="pt-4 border-t border-rule">
                <h4 className="label-caps text-ink-faint mb-2">PRIMARY SOURCE CITATIONS:</h4>
                <ul className="space-y-1 text-xs text-ink-muted font-mono">
                  {selectedIssue.citations.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Drawer>
      </div>
    </section>
  );
};
