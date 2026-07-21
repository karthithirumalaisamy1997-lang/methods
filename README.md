# SMV Insight

SMV Cost Engineering app, packaged as a React + Vite project for deployment
(e.g. to Vercel or Netlify).

## Project structure

```
sgps-deploy/
├─ index.html          # Vite entry HTML
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx         # React entry point
│  ├─ App.jsx          # Mounts the app markup + runs its logic
│  ├─ app.css           # App styling
│  ├─ appHtml.js        # App markup (as a string)
│  ├─ appScript.js      # App logic (as a string, executed on mount)
│  └─ storage.js        # localStorage-based data persistence
```

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site, ready to deploy anywhere
(Vercel, Netlify, GitHub Pages, S3, your own server, etc.).

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, "New Project", import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy — Vercel gives you a live link (e.g. `smv-insight.vercel.app`).

Or from the CLI:

```bash
npm install -g vercel
vercel
```

## Data storage

Data (operations, macros, styles, folders, recent items) is saved in the
visitor's own browser using `localStorage`, under keys prefixed with
`smv_insight::`. This means:

- Data persists between visits on the same browser/device.
- Data is **not** shared between different browsers or devices.
- Clearing browser data/cache will erase it.

If you need data to be shared across users/devices (a real multi-user
database), the `src/storage.js` file is the only place that needs to
change — swap its `localStorage` calls for calls to a backend (e.g.
Firebase, Supabase, or your own API), keeping the same
`get/set/delete/list` function signatures so the rest of the app keeps
working unchanged.
