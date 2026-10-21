import React from 'react';
import { ShieldCheck, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';

export const MethodDisclosureSection: React.FC = () => {
  return (
    <section id="methodology" className="py-20 md:py-28 border-b border-rule bg-paper-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="label-caps text-ember block mb-2">SECTION 11 — TRANSPARENCY & RIGOR</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Methodology & AI Disclosure
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            In keeping with modern editorial standards for computational journalism, this dossier maintains full transparency regarding research tools, verification protocols, design choices, and scientific limitations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: AI Assistance & Collaboration */}
          <div className="p-6 rounded border border-rule bg-paper space-y-4 shadow-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-rule text-xs font-mono text-ink">
              <Cpu size={16} className="text-ember" />
              <span className="font-bold">01. ARTIFICIAL INTELLIGENCE TOOLS USED</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">
              Research Synthesis & Engineering Scaffolding
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Large language models (including Gemini and Antigravity assistant frameworks) were utilized for:
            </p>
            <ul className="space-y-1.5 text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>Extracting and indexing cross-chapter findings from multi-thousand-page IPCC AR6 technical reports.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>Translating complex econometric inequalities into clean, accessible prose for non-specialist readers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>Authoring accessible React, TypeScript, and SVG visual components tailored to the field atlas design tokens.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Fact Verification Protocol */}
          <div className="p-6 rounded border border-rule bg-paper space-y-4 shadow-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-rule text-xs font-mono text-ink">
              <ShieldCheck size={16} className="text-ember" />
              <span className="font-bold">02. VERIFICATION & SOURCE HIERARCHY</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">
              Strict Consensus Data Policy
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              No statistical claim was incorporated without direct verification against original institutional sources:
            </p>
            <ul className="space-y-1.5 text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Primary Consensus Sources:</strong> IPCC AR6 (Working Groups I, II, III), WMO, WHO, World Bank, and IDMC.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Secondary Summaries Excluded:</strong> Press releases and secondary news articles were avoided in favor of original technical tables.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Uncertainty Preserved:</strong> Ranges (e.g. 3.3–3.6 billion; 800M–3.0B) and confidence levels are stated faithfully without rounding into false certainty.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Accessibility & Design Ethics */}
          <div className="p-6 rounded border border-rule bg-paper space-y-4 shadow-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-rule text-xs font-mono text-ink">
              <span className="font-bold text-ember">03.</span>
              <span className="font-bold">DESIGN PHILOSOPHY & ACCESSIBILITY</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">
              Calm, Tactile Editorial Design
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              The interface rejects alarmist flashing red alerts, doom-scrolling layouts, and stock photography cliches in favor of:
            </p>
            <ul className="space-y-1.5 text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>WCAG AA contrast compliant color tokens with dual light/dark paper palettes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>Full keyboard navigation, semantic ARIA landmarks, and tabular fallback tables for all chart data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span>Strict adherence to <code>prefers-reduced-motion</code> for users sensitive to animations.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Inherent Limitations */}
          <div className="p-6 rounded border border-rule bg-paper space-y-4 shadow-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-rule text-xs font-mono text-ink">
              <AlertTriangle size={16} className="text-ember" />
              <span className="font-bold">04. LIMITATIONS & BOUNDARIES</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">
              Acknowledged Scientific Caveats
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Readers should consider these structural modeling constraints:
            </p>
            <ul className="space-y-1.5 text-xs text-ink-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Country-Level Aggregation:</strong> National vulnerability rankings mask pockets of profound poverty and exposure within high-income nations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Under-Reported Informal Losses:</strong> Economic damage data routinely underestimates loss of unrecorded informal livelihoods, mental trauma, and indigenous cultural lands.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-ember shrink-0 mt-0.5" />
                <span><strong>Compound Events:</strong> Simultaneous breadbasket shocks remain difficult to model with pinpoint geographical precision.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
