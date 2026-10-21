import React, { useState } from 'react';
import footprintData from '../../data/footprintFactors.json';
import { Info, Calculator } from 'lucide-react';

export const FootprintSimpleSection: React.FC = () => {
  const [electricityKwh, setElectricityKwh] = useState<number>(350);
  const [carKmPerWeek, setCarKmPerWeek] = useState<number>(120);
  const [flightsPerYear, setFlightsPerYear] = useState<number>(1);
  const [dietChoice, setDietChoice] = useState<string>('average-omnivore');

  const selectedDiet =
    footprintData.parameters.diet.options.find((d) => d.id === dietChoice) ||
    footprintData.parameters.diet.options[1];

  // Mathematical Calculations
  // Electricity: kWh/mo * 12 * 0.385 / 1000
  const electricityTons = (electricityKwh * 12 * footprintData.parameters.electricity.emissionFactorKgPerKwh) / 1000;

  // Car travel: km/wk * 52 * 0.175 / 1000
  const carTons = (carKmPerWeek * 52 * footprintData.parameters.transport.carKmPerWeek.emissionFactorKgPerKm) / 1000;

  // Flights: flights * 900 / 1000
  const flightTons = (flightsPerYear * footprintData.parameters.transport.flightsPerYear.emissionFactorKgPerFlight) / 1000;

  // Diet tons
  const dietTons = selectedDiet.annualTonsCO2e;

  // Total
  const totalTons = electricityTons + carTons + flightTons + dietTons;

  return (
    <section id="footprint" className="py-20 md:py-28 border-b border-rule bg-paper-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="label-caps text-ember block mb-2">SECTION 09 — LIFESTYLE IN PERSPECTIVE</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
            Your Footprint, Simply
          </h2>
          <p className="font-serif text-lg text-ink-muted leading-relaxed">
            An illustrative educational calculator to contextualize household energy, travel, and food emissions against global equity targets.
          </p>
        </div>

        {/* Clear Educational Badge / Disclaimer */}
        <div className="p-4 mb-10 rounded border border-ember/30 bg-ember-tint/50 flex items-start gap-3 text-xs sm:text-sm text-ink">
          <Info size={18} className="text-ember shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold uppercase tracking-wider text-ember block text-xs">
              Illustrative Estimate & Systemic Caveat
            </span>
            <p className="text-ink-muted mt-0.5 leading-relaxed">
              {footprintData.disclaimer}
            </p>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-rule bg-paper shadow-xs space-y-8">
            <div className="flex items-center gap-2 pb-3 border-b border-rule text-xs font-mono text-ink-muted">
              <Calculator size={15} />
              <span>ESTIMATOR INPUTS</span>
            </div>

            {/* Slider 1: Electricity */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="input-electricity" className="text-sm font-semibold text-ink">
                  Monthly Home Electricity Consumption
                </label>
                <span className="font-mono text-sm font-bold text-ember">
                  {electricityKwh} kWh / month
                </span>
              </div>
              <input
                id="input-electricity"
                type="range"
                min={footprintData.parameters.electricity.min}
                max={footprintData.parameters.electricity.max}
                step={footprintData.parameters.electricity.step}
                value={electricityKwh}
                onChange={(e) => setElectricityKwh(Number(e.target.value))}
                className="w-full accent-ember cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-ink-faint">
                <span>Minimal (50 kWh)</span>
                <span>Suburban avg (750 kWh)</span>
                <span>High (1,500 kWh)</span>
              </div>
              <p className="text-[11px] text-ink-faint italic">
                Yields ~{electricityTons.toFixed(2)} t CO₂e/yr. {footprintData.parameters.electricity.assumptionNote}
              </p>
            </div>

            {/* Slider 2: Car travel */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="input-car" className="text-sm font-semibold text-ink">
                  Personal Vehicle Travel
                </label>
                <span className="font-mono text-sm font-bold text-ember">
                  {carKmPerWeek} km / week
                </span>
              </div>
              <input
                id="input-car"
                type="range"
                min={footprintData.parameters.transport.carKmPerWeek.min}
                max={footprintData.parameters.transport.carKmPerWeek.max}
                step={footprintData.parameters.transport.carKmPerWeek.step}
                value={carKmPerWeek}
                onChange={(e) => setCarKmPerWeek(Number(e.target.value))}
                className="w-full accent-ember cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-ink-faint">
                <span>0 km (Public transit / cycling)</span>
                <span>250 km / wk</span>
                <span>800 km / wk</span>
              </div>
              <p className="text-[11px] text-ink-faint italic">
                Yields ~{carTons.toFixed(2)} t CO₂e/yr. {footprintData.parameters.transport.carKmPerWeek.assumptionNote}
              </p>
            </div>

            {/* Slider 3: Flights */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor="input-flights" className="text-sm font-semibold text-ink">
                  Commercial Flights (Medium-Haul Round Trips)
                </label>
                <span className="font-mono text-sm font-bold text-ember">
                  {flightsPerYear} flights / year
                </span>
              </div>
              <input
                id="input-flights"
                type="range"
                min={footprintData.parameters.transport.flightsPerYear.min}
                max={footprintData.parameters.transport.flightsPerYear.max}
                step={footprintData.parameters.transport.flightsPerYear.step}
                value={flightsPerYear}
                onChange={(e) => setFlightsPerYear(Number(e.target.value))}
                className="w-full accent-ember cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-ink-faint">
                <span>0 (Train / No flying)</span>
                <span>3 flights</span>
                <span>10 flights / yr</span>
              </div>
              <p className="text-[11px] text-ink-faint italic">
                Yields ~{flightTons.toFixed(2)} t CO₂e/yr. Includes radiative forcing multiplier.
              </p>
            </div>

            {/* Diet Pattern Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-ink block">
                Dietary Pattern
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {footprintData.parameters.diet.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDietChoice(opt.id)}
                    className={`p-3 text-left rounded border text-xs transition-colors ${
                      dietChoice === opt.id
                        ? 'bg-paper-subtle border-ember font-semibold text-ink'
                        : 'bg-paper border-rule text-ink-muted hover:border-ink/40'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif">{opt.label.split('(')[0]}</span>
                      <span className="font-mono font-bold text-ember">{opt.annualTonsCO2e} t</span>
                    </div>
                    <p className="text-[11px] text-ink-faint line-clamp-1">{opt.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Global Comparison Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded border border-rule bg-paper shadow-xs">
              <span className="label-caps text-ink-faint">ESTIMATED ANNUAL OUTPUT</span>
              <div className="my-3 flex items-baseline gap-2">
                <span className="font-mono font-bold text-5xl text-ink tabular-nums">
                  {totalTons.toFixed(1)}
                </span>
                <span className="text-lg font-serif text-ember font-semibold">
                  tonnes CO₂e / year
                </span>
              </div>

              {/* Emissions Breakdown Table */}
              <div className="py-4 border-t border-b border-rule/60 space-y-2 text-xs">
                <div className="flex justify-between text-ink-muted">
                  <span>Household Electricity:</span>
                  <span className="font-mono font-bold text-ink">{electricityTons.toFixed(2)} t</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Vehicle Travel:</span>
                  <span className="font-mono font-bold text-ink">{carTons.toFixed(2)} t</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Aviation Travel:</span>
                  <span className="font-mono font-bold text-ink">{flightTons.toFixed(2)} t</span>
                </div>
                <div className="flex justify-between text-ink-muted">
                  <span>Food & Dietary System:</span>
                  <span className="font-mono font-bold text-ink">{dietTons.toFixed(2)} t</span>
                </div>
              </div>

              {/* Global Benchmarks Comparison */}
              <div className="pt-4 space-y-3">
                <span className="label-caps text-ink-muted block">GLOBAL BENCHMARKS:</span>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        1.5°C Paris 2030 Target (Equitable Cap):
                      </span>
                      <span className="font-mono font-bold">
                        {footprintData.benchmarks.parisTargetPerCapitaTons} t
                      </span>
                    </div>
                    <div className="w-full bg-paper-subtle rounded h-2 overflow-hidden border border-rule/40">
                      <div
                        className="bg-emerald-600 h-full"
                        style={{
                          width: `${(footprintData.benchmarks.parisTargetPerCapitaTons / 16) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-ink-muted">
                      <span>World Average (Today):</span>
                      <span className="font-mono font-bold">
                        {footprintData.benchmarks.worldAveragePerCapitaTons} t
                      </span>
                    </div>
                    <div className="w-full bg-paper-subtle rounded h-2 overflow-hidden border border-rule/40">
                      <div
                        className="bg-ink-muted h-full"
                        style={{
                          width: `${(footprintData.benchmarks.worldAveragePerCapitaTons / 16) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-ink-muted">
                      <span>North America Average:</span>
                      <span className="font-mono font-bold">
                        {footprintData.benchmarks.northAmericaAverageTons} t
                      </span>
                    </div>
                    <div className="w-full bg-paper-subtle rounded h-2 overflow-hidden border border-rule/40">
                      <div
                        className="bg-ember h-full"
                        style={{
                          width: `${(footprintData.benchmarks.northAmericaAverageTons / 16) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formula and Assumptions Card */}
            <div className="p-4 rounded border border-rule bg-paper-subtle text-xs text-ink-muted space-y-2">
              <span className="label-caps text-ink block font-semibold">FORMULA SPECIFICATION</span>
              <p className="font-mono text-[11px] bg-paper p-2 rounded border border-rule/50">
                {footprintData.formulaDescription}
              </p>
              <p className="text-[11px] text-ink-faint">
                Sources: Poore & Nemecek (Science 2018); US EPA eGRID factors; ICAO carbon calculation model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
