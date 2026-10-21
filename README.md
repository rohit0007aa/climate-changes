# The Warming Divide — A Climate Social Issue Almanac

> **Thesis:** Climate change is not only an environmental problem. It is a social issue that decides who has food, water, safe homes, health and work, and who can afford to recover from disaster.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
**Live Demo:** [https://the-warming-divide.vercel.app](https://the-warming-divide.vercel.app) *(Deploy your fork using the instructions below)*

---

## Overview

**The Warming Divide** is an editorial long-form digital magazine feature and social issue infographic website. Built with the quiet authority of a printed field atlas or scientific almanac, it presents peer-reviewed evidence (IPCC AR6, WHO, WMO, World Bank, ILO, IDMC) illustrating how planetary heating acts as an inequality multiplier across human societies.

### Key Sections (In Chronological Order)
1. **Hero & Warming Stripes:** HadCRUT5 temperature stripes (1850–2023) with interactive anomaly hover.
2. **Why It Is a Social Issue:** The 3 sociological tests (Scope, Social Structures, Collective Action).
3. **The Scale:** Four headline IPCC AR6 figures with count-up animations and methodological caveats.
4. **Who Is Hit Hardest:** Interactive directory exploring 5 frontline vulnerable groups.
5. **Four Pressure Points:** Bespoke data charts for Food security, Water scarcity, Health/work, and Climate displacement.
6. **The Arithmetic of Climate Justice:** Sourced essay and inequality matrix on historical responsibility vs vulnerability.
7. **Chronology of Knowledge & Treaty:** Filterable timeline from 1896 (Svante Arrhenius) to COP28 (UAE Consensus).
8. **Five Levers of Social Resilience:** Actionable systems intervention diagram (mitigation, adaptation, finance, land rights, just transition).
9. **Your Footprint, Simply:** Interactive household estimator displaying formulas, assumptions, and equity benchmarks.
10. **The Social Atlas:** 8 comparative cards linking to deep-dive dossiers on related issues (Gender Pay Gap, Clean Water, Digital Divide, etc.).
11. **Methodology & AI Disclosure:** Computational journalism disclosure of tools, verification protocols, and limitations.
12. **Sources & Canonical Bibliography:** Searchable and filterable reference catalog with direct links to primary UN/IPCC documents.

---

## Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with pure CSS custom property variables (`var(--color-paper)`, `var(--color-ink)`, `var(--color-ember)`, `var(--color-teal)`)
- **Icons:** [Lucide React](https://lucide.dev/) (clean vector marks, strictly zero emoji)
- **Typography:** Fraunces (Variable Display Serif), Newsreader (Editorial Serif), Inter Tight (Grotesque UI)
- **Data Architecture:** 100% static JSON datasets located in `/src/data/*.json` with verified citations
- **Deployment:** Zero-backend static build, optimized for Vercel / Netlify / GitHub Pages

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/the-warming-divide.git
cd the-warming-divide

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` (or the port specified in terminal) in your browser.

---

## Building & Testing

```bash
# Typecheck and create optimized production bundle in /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## Deploying to Vercel

This repository is pre-configured with a root `vercel.json` file including single-page app rewrites.

### Method 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally if needed
npm install -g vercel

# Run deployment
vercel

# For production deployment
vercel --prod
```

### Method 2: Deploy via Vercel Web Dashboard

1. Push your repository to GitHub or GitLab.
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your `the-warming-divide` repository.
4. Vercel will automatically detect the settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live on a global CDN in seconds.

---

## Environment Variables

This is a static, client-side educational website with zero external API dependencies or backend services. All data is packaged locally in `/src/data/*.json`.

An example file is provided at `.env.example`:
```env
VITE_SITE_URL=https://the-warming-divide.vercel.app
VITE_ENABLE_ANALYTICS=false
```

---

## Verification & Accuracy Rules

- **Zero Hallucinated Numbers:** Every statistic is sourced from official publications in `/src/data/sources.json`.
- **Primary Source Standard:** Consensus reports from IPCC (AR6 WGII, WGI, WGIII), WMO, WHO, World Bank, ILO, IDMC, and Oxford/SEI.
- **Uncertainty Preserved:** Range estimates and confidence levels are preserved.

---

## License

Content and editorial design are licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Source code is licensed under the MIT License.
