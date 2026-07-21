<<<<<<< HEAD
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
=======
# GSD Studio — Vite React Project

Idhu proper Vite + React project structure (unga `sgps-deploy` folder mathiri exact structure):

```
sgps-deploy/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx      → app entry point
    └── App.jsx       → GSD Studio full component (original app logic)
```

---

## 1. Local-la run panna (test panna)

Terminal open pannunga, indha folder-ku poidunga, apparam:
>>>>>>> ed4923deff914a348861dc80e6fee1c7b16860f8

```bash
npm install
npm run dev
```

<<<<<<< HEAD
Then open the printed local URL (usually http://localhost:5173).

## Build for production
=======
Terminal-la kaanikura local link (example `http://localhost:5173`) open pannunga → website run aagum.

---

## 2. Production build panna (deploy-ku ready file)
>>>>>>> ed4923deff914a348861dc80e6fee1c7b16860f8

```bash
npm run build
```

<<<<<<< HEAD
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
=======
Idhu `dist` nu oru folder create pannum — adhu than **deploy-ku ready static website** (HTML/CSS/JS ellam optimized ah, fast ah irukum, CDN dependency edhuvum illa).

---

## 3. Free-ah live link vaanga

### Method A: Netlify (Easiest)
1. https://app.netlify.com/drop -ku poidunga
2. `npm run build` panna kidaikura `dist` folder-ah drag & drop pannunga
3. Instant live link kidaikum

### Method B: Vercel (Recommended for Vite/React)
1. https://vercel.com → New Project
2. GitHub repo connect pannunga (illa "Deploy without Git" option use pannunga, `dist` folder upload panni)
3. Vercel automatic ah Vite project ah detect panni build + deploy pannum
4. Live link kidaikum (example: `your-project.vercel.app`)

### Method C: GitHub Pages
1. GitHub-la repo create pannunga, indha whole folder-ah push pannunga
2. `npm run build` panni `dist` folder-oda content-ah `gh-pages` branch-la push pannunga (or GitHub Actions workflow use pannunga)
3. Settings → Pages → Source: `gh-pages` branch

---

## Notes
- `npm install` panra podhu internet connection thevai (packages download aaganum)
- Build aana apparam (`dist` folder) internet thevai illa — fully offline ah work aagum, edhuku CDN dependency illa
- Idhu unga original HTML file-oda **same exact functionality** — dashboard, code library, calculations, ellam same ah irukum, React wrapper mattum add panniruken
>>>>>>> ed4923deff914a348861dc80e6fee1c7b16860f8
