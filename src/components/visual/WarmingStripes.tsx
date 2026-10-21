import React, { useState } from 'react';
import stripesData from '../../data/warmingStripesData.json';

export const WarmingStripes: React.FC = () => {
  const [activeItem, setActiveItem] = useState<{ year: number; anomaly: number } | null>(
    stripesData[stripesData.length - 1]
  );
  const [showTable, setShowTable] = useState(false);

  // Map anomaly (-0.5°C to +1.2°C) to color spectrum
  // Deep cold blues -> neutral paper -> warm burnt ember
  const getColor = (anomaly: number) => {
    if (anomaly < -0.3) return '#26547C';
    if (anomaly < -0.15) return '#3E78B2';
    if (anomaly < 0.0) return '#7FA9C9';
    if (anomaly < 0.2) return '#D5B99A';
    if (anomaly < 0.5) return '#DF8A5A';
    if (anomaly < 0.8) return '#D2552B';
    return '#A83212';
  };

  return (
    <div className="w-full my-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 pb-1 border-b border-rule">
        <div>
          <span className="label-caps text-ink-muted">FIGURE 1.0 — GLOBAL TEMPERATURE STRIPES</span>
          <p className="text-xs text-ink-faint mt-0.5">
            HadCRUT5 annual global mean surface temperature anomalies (1850–2023)
          </p>
        </div>
        <div className="mt-2 sm:mt-0 flex items-center gap-3">
          {activeItem && (
            <div className="text-xs tabular-nums text-ink-muted bg-paper-subtle px-2 py-1 rounded">
              <span className="font-semibold">{activeItem.year}:</span>{' '}
              <span className={activeItem.anomaly > 0 ? 'text-ember font-semibold' : 'text-teal-sea font-semibold'}>
                {activeItem.anomaly > 0 ? `+${activeItem.anomaly.toFixed(2)}` : activeItem.anomaly.toFixed(2)}°C
              </span>{' '}
              anomaly
            </div>
          )}
          <button
            onClick={() => setShowTable(!showTable)}
            className="text-xs text-ink-muted hover:text-ember underline transition-colors"
            aria-expanded={showTable}
          >
            {showTable ? 'Hide data' : 'View data table'}
          </button>
        </div>
      </div>

      {/* SVG Warming Stripes Band */}
      <div
        className="relative w-full h-16 sm:h-20 rounded overflow-hidden shadow-inner cursor-crosshair border border-rule/40"
        role="img"
        aria-label="Warming stripes visualization showing global temperature anomalies from 1850 to 2023 shifting from deep blues to intense burnt reds"
      >
        <svg
          viewBox={`0 0 ${stripesData.length} 100`}
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          {stripesData.map((d, i) => (
            <rect
              key={d.year}
              x={i}
              y={0}
              width={1.05}
              height={100}
              fill={getColor(d.anomaly)}
              onMouseEnter={() => setActiveItem(d)}
              className="transition-opacity hover:opacity-80"
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between items-center text-[11px] text-ink-faint mt-1.5 tabular-nums">
        <span>1850 (−0.37°C baseline)</span>
        <span className="hidden sm:inline">1950 (Industrial Acceleration)</span>
        <span>2023 (+1.18°C above pre-industrial)</span>
      </div>

      {showTable && (
        <div className="mt-4 p-3 bg-paper-subtle rounded border border-rule max-h-48 overflow-y-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-rule text-ink-muted font-semibold">
                <th className="py-1">Year</th>
                <th className="py-1">Global Surface Anomaly (°C)</th>
                <th className="py-1">Relative Severity</th>
              </tr>
            </thead>
            <tbody>
              {stripesData.map((row) => (
                <tr key={row.year} className="border-b border-rule/30 hover:bg-paper">
                  <td className="py-1 tabular-nums">{row.year}</td>
                  <td className="py-1 tabular-nums font-mono">
                    {row.anomaly > 0 ? `+${row.anomaly.toFixed(2)}` : row.anomaly.toFixed(2)}°C
                  </td>
                  <td className="py-1">
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2 align-middle"
                      style={{ backgroundColor: getColor(row.anomaly) }}
                    />
                    {row.anomaly < 0 ? 'Below 20th C baseline' : 'Above 20th C baseline'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
