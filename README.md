# my-work

Developer-forward resume site for Bailey Hosea, built as a fast Vite app and deployed on GitHub Pages.

## What It Is

This site presents the same resume content through three visual modes:

- `Terminal + Schema Hybrid` - default mode with a code-like editorial feel
- `JSON Blueprint` - structured, data-first presentation
- `Minimal Portfolio Classic` - cleaner, more traditional portfolio layout

The selector stays on one URL and remembers your choice in `localStorage`.

## Local Development

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production build is expected in `dist/`.

## Deployment

Pushes to `main` deploy automatically through GitHub Pages.

Workflow file:

- `.github/workflows/deploy-pages.yml`

## Repo Layout

- `src/` - frontend app and resume rendering
- `public/` - static assets
- `dist/` - production build output

## Contributor Guide

See [`AGENT_CONTRIBUTOR.md`](./AGENT_CONTRIBUTOR.md) for the execution playbook, QA checklist, and deployment notes.
