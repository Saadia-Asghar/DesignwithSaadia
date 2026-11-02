# Design with Saadia

The design portfolio of **Saadia Asghar**, product & visual designer. Figma product work and Canva campaign design, in one place.

- **Product design (Figma):** Vyrothon (1st, product design), CallPilot (Top 10, MIT Hack-Nation), ChaInTicket+ (3rd, BASED Pakistan), PrivyHealth, MoodMaze. Each has its own case-study page at `/work/<slug>/`.
- **Visual design (Canva):** posters, banners, signage, and lesson decks for Microsoft Club GIKI, UROG, ACM GIKI, and PreMed.PK, with team filters and a full-size viewer.
- Process, design roles, tools, certifications, and contact.

Stack: Next.js (static export), TypeScript, hand-written CSS, self-hosted fonts (Bricolage Grotesque, Instrument Serif, Inter).

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
