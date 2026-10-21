import React, { useState } from 'react';
import frontlineData from '../../data/frontlineData.json';
import { SourcedBadge } from '../ui/SourcedBadge';
import { FrontlineGroup } from '../../types';
import { ChevronRight } from 'lucide-react';

export const FrontlineGroupsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(frontlineData[0].id);

  const selectedGroup: FrontlineGroup =
    frontlineData.find((g) => g.id === selectedId) || frontlineData[0];

  return (
    <section id="frontline" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="label-caps text-ember block mb-2">SECTION 04 — SOCIAL VULNERABILITY</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Who Is Hit Hardest?
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            Vulnerability is not an innate trait; it is constructed by social status, occupation, geography, and systemic marginalization. Select a frontline group to inspect the specific mechanism of exposure and empirical evidence.
          </p>
        </div>

        {/* Interactive Layout: Left Selector, Right Detailed Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Group List */}
          <div className="lg:col-span-5 space-y-2" role="tablist" aria-label="Frontline vulnerable groups">
            {frontlineData.map((group, index) => {
              const isSelected = group.id === selectedId;
              return (
                <button
                  key={group.id}
                  id={`tab-${group.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${group.id}`}
                  onClick={() => setSelectedId(group.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-paper-elevated border-ember shadow-xs'
                      : 'bg-paper border-rule hover:border-ink-muted/40 hover:bg-paper-subtle/50'
                  }`}
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-ink-faint">04.{index + 1}</span>
                      <h3
                        className={`font-serif text-lg font-bold transition-colors ${
                          isSelected ? 'text-ember' : 'text-ink group-hover:text-ember'
                        }`}
                      >
                        {group.name}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-muted line-clamp-1">{group.subtitle}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`shrink-0 transition-transform ${
                      isSelected ? 'text-ember translate-x-1' : 'text-ink-faint opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Field Dossier */}
          <div
            id={`panel-${selectedGroup.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${selectedGroup.id}`}
            className="lg:col-span-7 p-6 sm:p-8 rounded border border-rule bg-paper-elevated shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-rule">
              <div>
                <span className="label-caps text-ember tracking-wider">COMMUNITY DOSSIER</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                  {selectedGroup.name}
                </h3>
              </div>
              <SourcedBadge
                sourceId={selectedGroup.sourceId}
                sourceName={selectedGroup.sourceName}
              />
            </div>

            {/* Subtitle */}
            <p className="font-serif italic text-base sm:text-lg text-ink-muted mb-6">
              “{selectedGroup.subtitle}”
            </p>

            {/* Key Mechanism */}
            <div className="space-y-4 mb-8">
              <h4 className="label-caps text-ink-muted">Structural Mechanism of Exposure:</h4>
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                {selectedGroup.mechanism}
              </p>
            </div>

            {/* Sourced Fact Callout */}
            <div className="p-4 rounded bg-paper-subtle border-l-4 border-ember space-y-2 mb-8">
              <span className="label-caps text-ember">VERIFIED SCIENTIFIC FACT</span>
              <p className="text-sm font-medium text-ink leading-relaxed">
                {selectedGroup.fact}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-rule/50">
              {selectedGroup.keyMetrics.map((km, i) => (
                <div key={i} className="p-3 bg-paper rounded border border-rule/50">
                  <span className="text-[11px] uppercase tracking-wider text-ink-faint block mb-1">
                    {km.label}
                  </span>
                  <span className="font-sans font-bold text-lg text-ink">{km.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
