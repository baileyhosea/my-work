# AGENT CONTRIBUTOR

## Purpose

This repo is a public resume site for Bailey Hosea. The product goal is simple: make the resume feel unmistakably developer-focused while staying polished, fast, accessible, and easy to maintain.

## Architecture Overview

- Frontend: Vite app with a single-page experience.
- Content model: one shared resume data source powers all visual modes.
- Visual modes:
  - `Terminal + Schema Hybrid`
  - `JSON Blueprint`
  - `Minimal Portfolio Classic`
- Behavior:
  - one URL
  - in-page mode selector
  - mode preference persisted in `localStorage`
- Deployment: GitHub Pages only, triggered from `main`.

## Coding And Visual Standards

- Keep the UI intentional, not generic.
- Use distinctive typography and a strong visual hierarchy.
- Prefer semantic HTML and accessible structure over clever markup.
- Keep the single source of truth for content data.
- Use CSS variables for shared tokens and per-mode overrides.
- Keep motion purposeful and subtle enough to feel premium.
- Optimize for both desktop and mobile.
- Avoid unnecessary dependencies.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use `npm run build` before any push that affects the site.

## Deployment Workflow

- Changes land directly on `main`.
- GitHub Actions builds the Vite app.
- The workflow publishes the `dist/` artifact to GitHub Pages.
- If the site does not publish, check the workflow run first before changing app code.

## QA Checklist

- Build succeeds locally.
- Mode selector switches all three views without reload.
- Mode preference persists after refresh.
- Content is readable and consistent in each mode.
- Layout works at mobile and desktop widths.
- Links, buttons, and downloads remain keyboard accessible.
- Reduced-motion behavior stays usable.
- GitHub Pages build succeeds from `main`.

## Contribution Protocol

- Keep changes focused to one concern when possible.
- Do not introduce parallel content sources or duplicate rendering paths.
- Preserve existing user-facing behavior unless the change explicitly calls for it.
- Update README or contributor guidance when workflow behavior changes.
- If a tradeoff affects maintainability, accessibility, or deployment, record it in the PR or commit notes.
