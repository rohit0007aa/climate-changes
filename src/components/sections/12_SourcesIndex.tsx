import React, { useState } from 'react';
import sourcesData from '../../data/sources.json';
import { SourceItem } from '../../types';
import { Search, ExternalLink, BookmarkCheck } from 'lucide-react';

export const SourcesIndexSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSources: SourceItem[] = sourcesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.keyFindings.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="sources" className="py-20 md:py-28 border-b border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-rule gap-6">
          <div className="max-w-2xl">
            <span className="label-caps text-ember block mb-2">SECTION 12 — CANONICAL BIBLIOGRAPHY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-3">
              Sources & References
            </h2>
            <p className="font-serif text-lg text-ink-muted leading-relaxed">
              Every quantitative figure in this dossier is anchored in verified institutional reports. Direct links to original scientific publications, DOIs, and institutional data portals are cataloged below.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search by report, author, keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-paper-subtle border border-rule rounded focus:border-ember focus:outline-none text-ink placeholder:text-ink-faint"
              aria-label="Filter sources"
            />
          </div>
        </div>

        {/* Sources List */}
        <div className="space-y-6">
          {filteredSources.length === 0 ? (
            <div className="p-12 text-center text-ink-muted border border-dashed border-rule rounded">
              <p>No verified sources match the query "{searchTerm}".</p>
            </div>
          ) : (
            filteredSources.map((source, index) => (
              <div
                key={source.id}
                id={`source-item-${source.id}`}
                className="p-6 rounded border border-rule bg-paper-elevated transition-colors duration-300 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-ink-faint">
                        REF [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                      </span>
                      <span className="text-rule">•</span>
                      <span className="label-caps text-ember">{source.section}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink hover:text-ember transition-colors">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        <span>{source.title}</span>
                        <ExternalLink size={14} className="shrink-0 text-ink-muted" />
                      </a>
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-ink-muted bg-paper-subtle px-2.5 py-1 rounded shrink-0 border border-rule/50">
                    {source.publisher} ({source.year})
                  </span>
                </div>

                <div className="p-3.5 rounded bg-paper-subtle border-l-2 border-ink space-y-1 my-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-ink uppercase tracking-wider">
                    <BookmarkCheck size={13} className="text-ember" />
                    <span>Key Verified Findings / Exact Quote:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted italic leading-relaxed">
                    “{source.keyFindings}”
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-ink-faint">
                  <span className="truncate max-w-md">{source.url}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ember hover:underline font-sans font-semibold uppercase tracking-wider shrink-0"
                  >
                    Open Document →
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
