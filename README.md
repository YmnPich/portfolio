# Yun Monypich — Portfolio

A static website: plain HTML + CSS + JavaScript. **No npm, no build step, no framework.**
(If your copy contains a `package-lock.json`, delete it — nothing here uses npm.)

## Structure

```
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── cv/Yun_Monypich_CV.pdf
│   ├── img/            profile photo + project covers
│   └── favicon.svg
├── css/style.css
└── js/
    ├── main.js         interactions, animations, project data (the `P` array)
    └── theme-init.js   applies the saved light/dark theme before first paint
```

All paths are relative (`./css/...`, `./js/...`, `./assets/...`), so the site works from any folder or sub-path.

## Test locally

Option 1 — just double-click `index.html` (works offline).

Option 2 — a local server (closest to real hosting):

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

**GitHub Pages**
1. Upload the *contents* of `portfolio/` to a repository so `index.html` is at the root.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. Live at `https://<username>.github.io/<repository>/`.

**Vercel**
1. Add New → Project → import the repository (or drag the folder in).
2. Framework Preset: **Other**. Build Command: *empty*. Output Directory: *empty / root*.

**Netlify**
1. Add new site → *Deploy manually* → drag the `portfolio` folder in (or connect the repository).
2. Build command: *empty*. Publish directory: *root* (`.`).

## Edit

- **Projects:** edit the `P` array at the top of `js/main.js`. Put new images in `assets/img/` and use `im:"./assets/img/your-file.jpg"`.
- **CV:** replace `assets/cv/Yun_Monypich_CV.pdf` (keep the filename).
- **Text, links, social profiles:** edit `index.html`.
- **Accent color / theme colors:** CSS variables at the top of `css/style.css` (`--acc`, `--bg`, `--ink`).
- **Social preview image (optional):** after you know your final domain, change the `og:image` URL in `index.html` to a full URL, e.g. `https://yourname.github.io/portfolio/assets/img/profile.png`.

## Notes

- The Email buttons open the visitor's mail app and also copy the address.
- Motion respects the visitor's *reduce motion* setting; the custom cursor is desktop-only.
- The CV contains a home address and a reference's contact details — remove them from the PDF if you don't want them public.
