# Priti Alapure — Portfolio
live = https://pritialapure.github.io/mineportfolio/


A React + Vite + Tailwind CSS + Framer Motion portfolio, built from the
attached design specification.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel usually detects these automatically).
4. Deploy.

## Before you publish — replace placeholders

All placeholder data lives in `src/data/`, clearly marked. Nothing has been
invented — missing items just render as "pending" / "coming soon" states
in the UI until you fill them in.

| What | File | Field |
|---|---|---|
| Email | `src/data/config.js` | `profile.email` |
| Resume link | `src/data/config.js` | `profile.resumeUrl` |
| GitHub / LinkedIn / LeetCode / HackerRank URLs | `src/data/profiles.js` | `url` on each entry |
| Project GitHub repos & live demo links | `src/data/projects.js` | `githubUrl`, `liveUrl` per project |
| Verified internship/experience details | `src/data/journey.js` | add entries if applicable |

## Project structure

```
src/
  components/   Navbar, Hero, About, Skills, SkillCategory, Projects,
                ProjectCard, ProjectModal, Journey, Achievements,
                Profiles, Contact, Footer, ThemeToggle, SectionHeading
  data/         config.js, skills.js, projects.js, journey.js,
                achievements.js, profiles.js
  hooks/        useReveal.js (scroll-reveal), useActiveSection.js (nav)
  App.jsx
  index.css
  main.jsx
```

## Design notes

- Dark-first, with a light-mode toggle (top right).
- Typeface: IBM Plex Sans (UI) + IBM Plex Mono (labels, code, chips) —
  chosen for a technical, engineering feel rather than a generic default.
- Accent: teal (`#4FD1C5`), used sparingly; amber reserved for rare emphasis.
- Motion is intentionally restrained: one orchestrated hero entrance,
  gentle scroll-reveals elsewhere, and `prefers-reduced-motion` is respected
  throughout.
