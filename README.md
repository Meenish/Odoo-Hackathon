# EcoSphere AI — ESG Management Platform

A modern, enterprise-grade frontend for an AI-powered ESG (Environmental, Social, Governance) management platform. Built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS v4**, charts by **Recharts**, icons by **lucide-react**.

This is a **frontend-only** build — no backend, no authentication. All data is served from a mock service layer (`src/services/esgService.ts`) so it can be swapped for real API calls later without touching any components.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  assets/            static assets
  components/
    common/          generic reusable UI primitives (Card, Button, Badge, Avatar, ProgressBar, RadialScore, ...)
    cards/            reusable stat/metric cards (MetricCard, PillarScoreCard)
    charts/           Recharts-based chart components
    dashboard/        dashboard-specific composite widgets (alerts, activity feed, leaderboard, etc.)
    layout/           Sidebar, Navbar, Logo, icon map
  pages/
    Dashboard/        main ESG overview dashboard
    Environmental/    environmental pillar deep-dive
    Social/           social pillar deep-dive
    Governance/       governance pillar deep-dive
    Gamification/     leaderboard, badges, challenges
    Reports/          report list + AI report builder
    AI/               AI Copilot chat interface
    Settings/         profile, org, notifications, appearance, security
  layouts/            DashboardLayout (sidebar + navbar shell)
  routes/             react-router route definitions
  services/           mock async "API" layer
  hooks/              useTheme, useSidebar
  utils/              cn(), formatting helpers
  types/               shared TypeScript types
  data/               mock/sample data
```

## Design system

- **Palette:** Green (`brand-*`), white, and slate — enterprise, calm, and trustworthy.
- **Type:** Manrope for display/headings, Inter for body/UI, JetBrains Mono for numeric data (scores, metrics, points) — a small signature touch that gives the data a "measured" feel appropriate to an ESG platform.
- **Surfaces:** rounded-2xl cards, subtle layered shadows, soft hover states.
- **Motion:** fade-up entrances, smooth sidebar collapse, animated radial score ring, shimmering skeleton loaders — all respect `prefers-reduced-motion`.
- **Dark mode:** fully supported via a `dark` class on `<html>`, toggled from the navbar and persisted to `localStorage`.

## Notes for backend integration

- Swap the resolved mock data in `src/services/esgService.ts` for real `fetch`/API calls — page components already consume it asynchronously and render loading skeletons.
- Authentication was intentionally left out per requirements; `Settings → Security` has a placeholder noting this.
