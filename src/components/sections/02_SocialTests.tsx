import React from 'react';
import { Users, Layers, ShieldCheck } from 'lucide-react';

export const SocialTestsSection: React.FC = () => {
  const tests = [
    {
      number: '01',
      title: 'It Affects Vast Numbers of People',
      subtitle: 'Beyond an isolated individual plight',
      icon: Users,
      thesis:
        'A private misfortune happens to one household; a social issue alters the baseline security of billions.',
      body: 'Climate disruption is no longer a localized catastrophe. Droughts compound across international grain belts simultaneously, heatwaves engulf entire subcontinents, and sea-level rise threatens hundreds of coastal cities. When over three billion human beings inhabit regions classified as acutely vulnerable, risk is systemic, structural, and universal in scope.',
      evidenceNote: 'IPCC AR6 documents that 3.3 to 3.6 billion people currently live in highly vulnerable regions.',
    },
    {
      number: '02',
      title: 'It Is Shaped by How Society Is Organized',
      subtitle: 'Social structures dictate exposure & survival',
      icon: Layers,
      thesis:
        'A storm is meteorological; who drowns in it is sociological.',
      body: 'The damage caused by a tropical cyclone or heatwave is never evenly spread by atmospheric chance. It follows historical lines of economic class, racial zoning, colonial exploitation, precarious housing, and unequal labor protections. Those with capital purchase air filtration, emergency generators, and private reinsurance; informal workers and tenant farmers bear unbuffered physiological shock.',
      evidenceNote: 'Mortality from storms and floods between 2010–2020 was 15× higher in vulnerable vs resilient nations.',
    },
    {
      number: '03',
      title: 'It Demands Collective, Systemic Action',
      subtitle: 'Individual virtue cannot repair the atmospheric commons',
      icon: ShieldCheck,
      thesis:
        'No person can purchase their own stable climate at a grocery store.',
      body: 'Individual consumer choices (biking to work, switching lightbulbs) are meaningful personal signals, but they cannot re-engineer national power grids, regulate industrial methane flares, fund municipal stormwater diversions, or establish international loss-and-damage treaties. Resolving the crisis demands public policy, state fiscal mobilization, institutional accountability, and collective governance.',
      evidenceNote: 'Over 70% of historical fossil emissions trace to state utilities and multinational corporations.',
    },
  ];

  return (
    <section id="why-social" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-rule">
          <div className="md:col-span-4">
            <span className="label-caps text-ember block mb-2">SECTION 02 — SOCIOLOGICAL CRITERIA</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
              The Three Tests of a Social Issue
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-lg sm:text-xl text-ink-muted leading-relaxed">
              Sociologists define a social issue as a condition that harms substantial segments of society, is rooted in the institutional arrangements of power and resources, and cannot be solved by individual consumer choices alone.
            </p>
            <p className="text-sm text-ink-faint mt-3">
              By every established sociological benchmark, climate change is among the defining social crises in modern history.
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="mt-14 space-y-16">
          {tests.map((test) => {
            const Icon = test.icon;
            return (
              <div
                key={test.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 first:pt-0 border-t border-rule/50 first:border-0"
              >
                {/* Left Column: Number, Title, Thesis Accent */}
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-ember px-2 py-0.5 rounded bg-ember-tint">
                      TEST {test.number}
                    </span>
                    <Icon size={16} className="text-ink-muted" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-wider text-ink-faint">
                      {test.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4 leading-snug">
                    {test.title}
                  </h3>
                  <blockquote className="border-l-2 border-ember pl-4 py-1 italic font-serif text-lg text-ink">
                    “{test.thesis}”
                  </blockquote>
                </div>

                {/* Right Column: In-depth narrative & field evidence */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
                    {test.body}
                  </p>
                  <div className="p-3 bg-paper-subtle rounded border border-rule text-xs text-ink-muted flex items-center justify-between">
                    <span className="font-semibold text-ink">Empirical Verification:</span>
                    <span className="text-ink-muted">{test.evidenceNote}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
