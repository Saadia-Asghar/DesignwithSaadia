# Design with Saadia

The design portfolio of **Saadia Asghar**, product & visual designer. Figma product work and Canva campaign design, in one place.

Layout: a paper-and-ink site with four flat colours (blue, yellow, green, red) and handwritten headings.

- **Home:** a hand-drawn desk scene with four app tiles on the monitor (Work, Play, Me, Résumé). Click the lamp for dark mode; open the desk drawer for a note. A live Islamabad clock sits in the top bar.
- **Projects:** square cards for Vyrothon, CallPilot, ChaInTicket+, PrivyHealth, MoodMaze, and the Canva poster wall, each with coloured tags. Each product opens a case page at `/work/<slug>/`.
- **Areas of interest:** a green section with a "currently obsessed with" card and a random fact.
- **Play** (`/play/`): the Canva gallery with team filters and a full-size viewer.
- **About Me** (`/about/`): design roles, results, process, toolbox, certifications, and 2026 so far.
- **Footer:** a message box that opens your email app, plus links.
- **Motion:** the desk scene draws itself in line by line, the tiles pop onto the monitor and blink, the greeting writes itself on with a waving hand, a sticker strip slides past, headings get a hand-drawn underline as they scroll in, project cards tilt toward the pointer, clicks leave doodle sparkles, a pencil draws the scroll progress across the top, pages slide in, and the lamp turns the lights off with a circle that grows out of it. All of it switches off for visitors who ask for reduced motion.

Stack: Next.js (static export), TypeScript, hand-written CSS, self-hosted fonts (Gochi Hand, Work Sans, DM Mono).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

### Vercel (recommended)

1. Go to [vercel.com/new](https://vercel.com/new) and import `Saadia-Asghar/DesignwithSaadia`.
2. Leave every setting on its default (framework: Next.js, build: `npm run build`). Click **Deploy**.

The site is served at `/`. Every push to `main` redeploys.

### GitHub Pages (alternative)

1. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/pages.yml` builds with `GITHUB_PAGES=true` so assets live under `/DesignwithSaadia`.

The site will be at https://saadia-asghar.github.io/DesignwithSaadia/.

## Edit the content

Everything lives in `src/lib/data.ts`:

- `cases`: the Figma product case studies (title, award, Figma link, problem, what you designed, screens).
- `visuals`: the Canva gallery. Add an image to `public/work/` (WebP, ~1600px wide) and an entry here. Then add its size to `src/lib/image-sizes.ts`.
- `moreTemplates`: Canva links that don't have a preview image yet.
- `designRoles`, `tools`, `certifications`, `stats`, `awards`: the about section and the strips.

## Contact

saadianigah@gmail.com · [LinkedIn](https://www.linkedin.com/in/saadia-asghar) · [Instagram](https://www.instagram.com/saadiaasghar_) · [GitHub](https://github.com/Saadia-Asghar)
