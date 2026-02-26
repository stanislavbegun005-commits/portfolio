# Stanislav Begun Portfolio

Premium multi-page portfolio built with **React + Vite + Tailwind CSS**, configured for **GitHub Pages** with `HashRouter`.

## Stack
- React 18
- Vite 5
- Tailwind CSS
- React Router (`HashRouter`)

## Project structure
- `public/photo.jpg` — personal photo used in the hero section
- `public/resume.pdf` — downloadable resume
- `content/portfolio-content.pdf` — primary content source document
- `src/data/content.js` — RU/EN site content map

## Local setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages deployment
1. Push to `main`.
2. In repository settings, set **Pages → Source** to **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` builds and deploys `dist` automatically.

## Base path
Vite base is configured for this repository:

`/portfolio/`

If repository path changes, update `base` in `vite.config.js`.
