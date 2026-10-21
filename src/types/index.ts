export interface SourceItem {
  id: string;
  title: string;
  publisher: string;
  year: number;
  url: string;
  keyFindings: string;
  section: string;
}

export interface ScaleMetric {
  id: string;
  value: number;
  displayValue: string;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  sourceId: string;
  sourceName: string;
  year: number;
  confidence: string;
}

export interface FrontlineGroup {
  id: string;
  name: string;
  subtitle: string;
  mechanism: string;
  fact: string;
  sourceId: string;
  sourceName: string;
  quote: string;
  keyMetrics: { label: string; value: string }[];
}

export interface PressurePoint {
  id: string;
  theme: string;
  headline: string;
  summary: string;
  sourceId: string;
  sourceName: string;
  statHighlight: string;
  statLabel: string;
  chartType: string;
  unit: string;
  data: any[];
  socialImplication: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  category: string;
  summary: string;
  significance: string;
  source: string;
}

export interface LeverItem {
  id: string;
  leverNumber: string;
  name: string;
  focus: string;
  impact: string;
  keyEfficacyStat: string;
  examples: string[];
  equityAngle: string;
  source: string;
}

export interface AtlasIssue {
  id: string;
  title: string;
  theme: string;
  status: 'verified' | 'coming-soon';
  question: string;
  stats: { value: string; label: string; source: string }[];
  whatHelps: string;
  overview: string;
  citations: string[];
}
