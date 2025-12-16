# Todo Frontend (React)

A small React frontend for a Todo application created with Create React App.

Quick overview

- Built with React and Create React App.
- Source files are in `src/`. Static assets and app shell live in `public/`.

Local development

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm start
```

Production build

```powershell
npm run build
# serve the build locally (optional): npm install -g serve; serve -s build
```

Customizing title and icons

- App title: edit `public/index.html` <title> or change `manifest.json` `name`/`short_name` and then rebuild.
- Favicon & icons: replace files in `public/` (`favicon.ico`, `logo192.png`, `logo512.png`) and rebuild. Browsers cache favicons aggressively — use incognito or versioned filenames to force refresh.

Notes

- The `build/` folder is the generated production output (safe to delete and re-generate with `npm run build`).
- Files use `.js` for React components by design; renaming to `.jsx` is optional.

If you want any changes (icons, title, rename files to .jsx), tell me and I will apply them and run a quick verification.
