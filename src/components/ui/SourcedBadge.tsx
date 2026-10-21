import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SourcedBadgeProps {
  sourceId: string;
  sourceName?: string;
  year?: number | string;
  onClickSource?: (sourceId: string) => void;
  className?: string;
}

export const SourcedBadge: React.FC<SourcedBadgeProps> = ({
  sourceId,
  sourceName = 'Verified Source',
  year,
  onClickSource,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClickSource) {
      e.preventDefault();
      onClickSource(sourceId);
    } else {
      // Default to scrolling to sources section
      const target = document.getElementById('sources');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // highlight source row if possible
        const row = document.getElementById(`source-item-${sourceId}`);
        if (row) {
          row.classList.add('bg-ember-tint');
          setTimeout(() => row.classList.remove('bg-ember-tint'), 2500);
        }
      }
    }
  };

  return (
    <a
      href={`#source-item-${sourceId}`}
      onClick={handleClick}
      className={`inline-flex items-center gap-1 text-[11px] font-sans font-medium px-2 py-0.5 rounded border border-rule/50 bg-paper-subtle/70 text-ink-muted hover:text-ember hover:border-ember/40 transition-colors ${className}`}
      title={`Inspect verified reference: ${sourceName}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-ember inline-block" />
      <span>{sourceName}</span>
      {year && <span className="text-ink-faint">({year})</span>}
      <ExternalLink size={10} className="opacity-60 ml-0.5" aria-hidden="true" />
    </a>
  );
};
