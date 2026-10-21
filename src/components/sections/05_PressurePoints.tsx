import React, { useState } from 'react';
import pressurePointsData from '../../data/pressurePoints.json';
import { SourcedBadge } from '../ui/SourcedBadge';
import { Utensils, Droplets, Activity, Home } from 'lucide-react';

export const PressurePointsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('food');

  const icons: Record<string, React.ElementType> = {
    food: Utensils,
    water: Droplets,
    health: Activity,
    displacement: Home,
  };

  const currentPoint =
    pressurePointsData.find((p) => p.id === activeTab) || pressurePointsData[0];

  return (
    <section id="pressure-points" className="py-20 md:py-28 border-b border-rule bg-paper-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="label-caps text-ember block mb-2">SECTION 05 — BIOPHYSICAL PRESSURES</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Four Pressure Points
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            Climate impacts do not occur in an atmospheric vacuum. They translate directly into four human necessities: the food we eat, the water we drink, the physical capacity to labor safely, and having a secure roof overhead.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-rule mb-8 overflow-x-auto no-scrollbar gap-2 sm:gap-6">
          {pressurePointsData.map((point) => {
            const Icon = icons[point.id] || Utensils;
            const isActive = point.id === activeTab;
            const isWater = point.id === 'water';

            return (
              <button
                key={point.id}
                onClick={() => setActiveTab(point.id)}
                className={`flex items-center gap-2 pb-3 px-1 sm:px-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? isWater
                      ? 'border-teal-sea text-teal-sea font-bold'
                      : 'border-ember text-ember font-bold'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                <Icon size={16} />
                <span>{point.theme.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Point Editorial Display */}
        <div className="p-6 sm:p-10 rounded border border-rule bg-paper shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="label-caps text-ink-faint">SYSTEMIC VULNERABILITY MECHANISM</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                  {currentPoint.headline}
                </h3>
              </div>

              <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                {currentPoint.summary}
              </p>

              {/* Stat Highlight Box */}
              <div
                className={`p-4 rounded border ${
                  currentPoint.id === 'water'
                    ? 'bg-teal-sea-tint border-teal-sea/40 text-teal-sea'
                    : 'bg-ember-tint border-ember/40 text-ember'
                }`}
              >
                <span className="font-sans font-bold text-3xl block tabular-nums">
                  {currentPoint.statHighlight}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-ink-muted mt-1 block">
                  {currentPoint.statLabel}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="label-caps text-ink-muted">Social & Inequality Implication:</h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {currentPoint.socialImplication}
                </p>
              </div>

              <div className="pt-4 border-t border-rule/50">
                <SourcedBadge
                  sourceId={currentPoint.sourceId}
                  sourceName={currentPoint.sourceName}
                />
              </div>
            </div>

            {/* Right Chart / Diagram Column */}
            <div className="lg:col-span-7 bg-paper-subtle/70 p-6 rounded border border-rule">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-rule">
                <span className="label-caps text-ink-muted">
                  {currentPoint.theme} — EMPIRICAL PROJECTION
                </span>
                <span className="text-xs text-ink-faint font-mono">
                  {currentPoint.unit}
                </span>
              </div>

              {/* Chart 1: Food Crop Yield Decline */}
              {currentPoint.id === 'food' && (
                <div className="space-y-5">
                  <p className="text-xs text-ink-faint mb-2">
                    Projected global yield change per 1°C temperature increase (without rapid genetic/irrigation adaptation):
                  </p>
                  {currentPoint.data.map((item: any) => {
                    const widthPct = Math.abs(item.lossPerDegree) * 11; // scale for visualization
                    return (
                      <div key={item.crop} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-ink">
                          <span>{item.crop} <span className="text-ink-faint font-normal">({item.stapleRegion})</span></span>
                          <span className="font-mono font-bold text-ember">{item.lossPerDegree}% / °C</span>
                        </div>
                        <div className="w-full bg-paper rounded h-5 p-0.5 border border-rule/50 flex">
                          <div
                            className="bg-ember rounded-xs h-full transition-all duration-700"
                            style={{ width: `${widthPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-between text-[11px] text-ink-faint pt-2 border-t border-rule/30 font-mono">
                    <span>0% (No change)</span>
                    <span>-4.0%</span>
                    <span>-8.0% (Severe deficit)</span>
                  </div>
                </div>
              )}

              {/* Chart 2: Water Scarcity Tiers (Strict Sea-Teal Palette) */}
              {currentPoint.id === 'water' && (
                <div className="space-y-5">
                  <p className="text-xs text-ink-faint mb-2">
                    Global population enduring chronic water scarcity across prospective global warming horizons:
                  </p>
                  {currentPoint.data.map((tier: any) => {
                    const maxBillion = 4.0;
                    const lowPct = (tier.scarcityLow / maxBillion) * 100;
                    const highPct = (tier.scarcityHigh / maxBillion) * 100;

                    return (
                      <div key={tier.warmingLevel} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-ink">
                          <span>{tier.warmingLevel}</span>
                          <span className="font-mono font-bold text-teal-sea">
                            {tier.scarcityLow}–{tier.scarcityHigh} Billion
                          </span>
                        </div>
                        <div className="w-full bg-paper rounded h-5 p-0.5 border border-rule/50 relative overflow-hidden">
                          <div
                            className="absolute top-0.5 bottom-0.5 bg-teal-sea/40 rounded-xs transition-all duration-700"
                            style={{
                              left: `${lowPct}%`,
                              width: `${highPct - lowPct}%`,
                            }}
                          />
                          <div
                            className="absolute top-0.5 bottom-0.5 bg-teal-sea rounded-xs transition-all duration-700"
                            style={{
                              left: `${(tier.midpoint / maxBillion) * 100 - 1.5}%`,
                              width: '3%',
                            }}
                            title={`Midpoint estimate: ${tier.midpoint}B`}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-between text-[11px] text-ink-faint pt-2 border-t border-rule/30 font-mono">
                    <span>0B</span>
                    <span>1.0B</span>
                    <span>2.0B</span>
                    <span>3.0B</span>
                    <span>4.0 Billion People</span>
                  </div>
                </div>
              )}

              {/* Chart 3: Health & Lost Labor Hours by Sector */}
              {currentPoint.id === 'health' && (
                <div className="space-y-5">
                  <p className="text-xs text-ink-faint mb-2">
                    Projected annual percentage of working hours lost to heat stress by 2030 (ILO global model):
                  </p>
                  {currentPoint.data.map((item: any) => {
                    const widthPct = (item.hoursLostPct / 6.0) * 100;
                    return (
                      <div key={item.sector} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-ink">
                          <span>
                            {item.sector}{' '}
                            <span className="text-ink-faint font-normal">
                              (~{item.jobEquivMillions}M full-time jobs equivalent)
                            </span>
                          </span>
                          <span className="font-mono font-bold text-ember">{item.hoursLostPct}%</span>
                        </div>
                        <div className="w-full bg-paper rounded h-5 p-0.5 border border-rule/50 flex">
                          <div
                            className="bg-ember/90 rounded-xs h-full transition-all duration-700"
                            style={{ width: `${widthPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-between text-[11px] text-ink-faint pt-2 border-t border-rule/30 font-mono">
                    <span>0%</span>
                    <span>2.0%</span>
                    <span>4.0%</span>
                    <span>6.0% Hours Lost</span>
                  </div>
                </div>
              )}

              {/* Chart 4: Climate Displacement by Hazard */}
              {currentPoint.id === 'displacement' && (
                <div className="space-y-5">
                  <p className="text-xs text-ink-faint mb-2">
                    Breakdown of 31.8 million internal disaster displacements triggered by weather hazards in 2022:
                  </p>
                  {currentPoint.data.map((item: any) => {
                    return (
                      <div key={item.hazard} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-ink">
                          <span>
                            {item.hazard}{' '}
                            <span className="text-ink-faint font-normal">({item.trend})</span>
                          </span>
                          <span className="font-mono font-bold text-ink">
                            {item.displacementsMillions}M ({item.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-paper rounded h-5 p-0.5 border border-rule/50 flex">
                          <div
                            className="bg-ink/80 rounded-xs h-full transition-all duration-700"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-between text-[11px] text-ink-faint pt-2 border-t border-rule/30 font-mono">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100% of Weather Displacements</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
