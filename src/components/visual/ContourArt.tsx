import React from 'react';

interface ContourArtProps {
  className?: string;
  variant?: 'subtle' | 'dense' | 'elevation';
}

export const ContourArt: React.FC<ContourArtProps> = ({
  className = '',
  variant = 'subtle',
}) => {
  return (
    <div className={`relative overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-30 dark:opacity-20"
        aria-hidden="true"
      >
        {/* Topographic Isolines */}
        <path
          d="M-20 60 C 120 40, 240 110, 360 80 C 480 50, 560 120, 620 90"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray={variant === 'elevation' ? '4 2' : 'none'}
        />
        <path
          d="M-20 110 C 140 85, 220 160, 380 120 C 500 90, 540 180, 620 140"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M-20 160 C 100 140, 260 210, 390 170 C 520 140, 580 220, 620 190"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M-20 210 C 130 190, 220 260, 370 220 C 490 190, 560 270, 620 240"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 4"
        />
        <path
          d="M-20 260 C 150 240, 280 290, 420 260 C 530 230, 590 290, 620 275"
          stroke="currentColor"
          strokeWidth="0.8"
        />

        {/* Cartographic Crosshair Register Marks */}
        <g stroke="currentColor" strokeWidth="0.6">
          <line x1="30" y1="20" x2="40" y2="20" />
          <line x1="35" y1="15" x2="35" y2="25" />

          <line x1="560" y1="20" x2="570" y2="20" />
          <line x1="565" y1="15" x2="565" y2="25" />

          <line x1="30" y1="270" x2="40" y2="270" />
          <line x1="35" y1="265" x2="35" y2="275" />

          <line x1="560" y1="270" x2="570" y2="270" />
          <line x1="565" y1="265" x2="565" y2="275" />
        </g>

        {/* Small coordinate stamp */}
        <text
          x="46"
          y="23"
          fill="currentColor"
          fontSize="8"
          fontFamily="monospace"
          className="tracking-widest"
        >
          GRID REF: 04-ISO
        </text>
      </svg>
    </div>
  );
};
