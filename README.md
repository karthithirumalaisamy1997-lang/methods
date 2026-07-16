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

```bash
npm install
npm run dev
```

Terminal-la kaanikura local link (example `http://localhost:5173`) open pannunga → website run aagum.

---

## 2. Production build panna (deploy-ku ready file)

```bash
npm run build
```

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
