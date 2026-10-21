import React from 'react';
import justiceData from '../../data/justiceData.json';
import { SourcedBadge } from '../ui/SourcedBadge';

export const ClimateJusticeSection: React.FC = () => {
  return (
    <section id="justice" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="label-caps text-ember block mb-2">SECTION 06 — STRUCTURAL DISTRIBUTION</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            The Arithmetic of Climate Justice
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            Climate justice is often framed through emotional slogans, but its strongest foundation is mathematical. When emissions data and vulnerability indexes are mapped together, they reveal an acute inverse relationship between responsibility and suffering.
          </p>
        </div>

        {/* Short Essay + Evidence Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Essay Column (Narrow Reading Column) */}
          <div className="lg:col-span-6 space-y-6 text-ink-muted text-base leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-ink">
              Who Caused Atmospheric Heating vs. Who Bears the Shock
            </h3>

            <p>
              Since the dawn of industrialization in 1750, humanity has released roughly 1.7 trillion tonnes of carbon dioxide into the global atmospheric envelope. Over half of that cumulative total was emitted by just two economic blocs: the United States and the European Union.
            </p>

            <p>
              By contrast, the entire continent of Africa—home to 1.4 billion people (nearly 18% of the world population)—accounts for less than 3% of cumulative historical carbon dioxide emissions. Yet, communities across the Sahel, the Horn of Africa, and Mozambique face some of the world’s most devastating droughts, cyclones, and food insecurity crises.
            </p>

            <blockquote className="border-l-2 border-ember pl-4 py-2 italic font-serif text-ink text-lg bg-paper-subtle/50 rounded-r">
              “The bottom 50% of the world’s population produces approximately 1.6 tonnes of CO₂ per capita annually—well below the 2.3-tonne planetary boundary for 1.5°C. The richest 10% generates 31 tonnes.”
            </blockquote>

            <p>
              This asymmetry extends inside domestic borders. In high-income countries, consumption by high-net-worth households (frequent private and commercial aviation, multi-home heating, luxury yachts, and emission-intensive asset portfolios) dwarfs the carbon footprint of domestic working-class households.
            </p>

            <div className="pt-2">
              <h4 className="font-serif text-xl font-bold text-ink mb-2">
                Loss and Damage: Restitution, Not Charity
              </h4>
              <p className="text-sm">
                At the UN Climate Summit in 2022 (COP27), vulnerable nations successfully established the Loss and Damage Fund. The legal and economic rationale is straightforward: when an island nation loses its freshwater lens to saltwater inundation or a low-income nation incurs storm damage exceeding 100% of its national GDP, these are non-recoverable losses caused by global emissions. Climate finance is not an act of benevolence; it is financial restitution for biophysical damage.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Evidence Panels */}
          <div className="lg:col-span-6 space-y-8">
            {/* Top 10% vs Bottom 50% Emissions Distribution */}
            <div className="p-6 rounded border border-rule bg-paper-elevated">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule">
                <span className="label-caps text-ink-muted">GLOBAL CONSUMPTION EMISSIONS SHARE (2020)</span>
                <SourcedBadge
                  sourceId="oxfam-carbon-inequality"
                  sourceName="Oxfam & SEI (2023)"
                />
              </div>

              <div className="space-y-4">
                {justiceData.topEmittersShare.map((item) => (
                  <div key={item.group} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-ink">
                      <span>{item.group}</span>
                      <span className="font-mono font-bold text-ember">
                        {item.emissionsSharePct}% of emissions (~{item.perCapitaTons} t/capita)
                      </span>
                    </div>
                    <div className="w-full bg-paper rounded h-4 p-0.5 border border-rule/50 flex">
                      <div
                        className="bg-ember rounded-xs h-full transition-all duration-700"
                        style={{ width: `${item.emissionsSharePct * 2}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-ink-faint">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Responsibility vs Vulnerability Table */}
            <div className="p-6 rounded border border-rule bg-paper-elevated">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-rule">
                <span className="label-caps text-ink-muted">HISTORIC CO₂ SHARE VS. VULNERABILITY</span>
                <SourcedBadge
                  sourceId="chancel-world-inequality"
                  sourceName="World Inequality Lab"
                />
              </div>

              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-rule text-ink-muted font-semibold">
                      <th className="py-2">Region</th>
                      <th className="py-2">Historic CO₂</th>
                      <th className="py-2">Pop. Share</th>
                      <th className="py-2">Vulnerability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {justiceData.historicalEmissions.map((row) => (
                      <tr key={row.region} className="border-b border-rule/30">
                        <td className="py-2 font-medium text-ink">{row.region}</td>
                        <td className="py-2 font-mono text-ember font-bold">
                          {row.shareOfHistoricCO2}%
                        </td>
                        <td className="py-2 font-mono text-ink-muted">{row.populationShare}%</td>
                        <td className="py-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase ${
                              row.vulnerabilityTier === 'Extreme' || row.vulnerabilityTier === 'Existential'
                                ? 'bg-ember-tint text-ember'
                                : 'bg-paper-subtle text-ink-muted'
                            }`}
                          >
                            {row.vulnerabilityTier}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* The Adaptation Finance Gap Callout */}
            <div className="p-5 rounded border border-rule bg-paper-subtle space-y-2">
              <div className="flex items-center justify-between">
                <span className="label-caps text-ink-muted">THE ANNUAL ADAPTATION FINANCE DEFICIT</span>
                <span className="font-mono text-xs text-ember font-bold">UNEP 2023</span>
              </div>
              <div className="grid grid-cols-3 gap-2 py-2 text-center">
                <div className="p-2 bg-paper rounded border border-rule/40">
                  <span className="text-[10px] uppercase text-ink-faint block">Promised</span>
                  <span className="font-mono font-bold text-ink text-sm sm:text-base">$100B / yr</span>
                </div>
                <div className="p-2 bg-paper rounded border border-rule/40">
                  <span className="text-[10px] uppercase text-ink-faint block">Actual Grants</span>
                  <span className="font-mono font-bold text-ember text-sm sm:text-base">~$28B / yr</span>
                </div>
                <div className="p-2 bg-paper rounded border border-rule/40">
                  <span className="text-[10px] uppercase text-ink-faint block">Needed by 2030</span>
                  <span className="font-mono font-bold text-ink text-sm sm:text-base">$387B / yr</span>
                </div>
              </div>
              <p className="text-[11px] text-ink-faint leading-relaxed">
                {justiceData.financeGap.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
