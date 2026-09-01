# Vaishnavi N.G — Portfolio

A dark, terminal-inspired portfolio built with React + Vite, based on Vaishnavi's resume.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Edit content

All the resume content lives in plain data arrays at the top of each component file in `src/components/`:

- `Hero.jsx` — name, tagline, terminal lines
- `About.jsx` — bio paragraphs and the quick facts
- `Skills.jsx` — skill groups
- `Journey.jsx` — education + internship timeline
- `Projects.jsx` — project cards
- `Recognition.jsx` — certifications, achievements, workshops
- `Contact.jsx` — email, phone, and profile links

Change the text in those arrays and the page updates automatically — no need to touch the layout code.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (accept the defaults — Vercel auto-detects Vite). Run `vercel --prod` afterwards to push it live.

### Option B — GitHub + Vercel dashboard (recommended for future updates)

1. Create a new empty repo on GitHub.
2. From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to vercel.com/new, sign in with GitHub, and import the repo.
4. Vercel detects the Vite framework automatically (build command `npm run build`, output directory `dist` — already set in `vercel.json`). Click **Deploy**.
5. Every future `git push` to `main` auto-deploys.

## Tech

- React 19 + Vite
- Plain CSS (no framework) — design tokens in `src/index.css`
- No external dependencies beyond React
