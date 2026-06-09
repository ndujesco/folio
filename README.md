# folio — Peter Ndujekwu's portfolio

Personal portfolio for **Peter Ndujekwu**, full-stack software engineer. Built with
Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Motion. Dark theme with a
violet + warm-amber accent palette inspired by the previous portfolio.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (Turbopack)
npm run start    # serve the production build
```

## Where things live

| Path | What |
|------|------|
| `src/app/page.tsx` | Page composition (Hero → Marquee → About → Wins → Experience → Work → Contact) |
| `src/data/content.ts` | **Single source of truth** — edit all copy, projects, experience and achievements here |
| `src/components/` | Section components + `BrandIcons` (inline GitHub/LinkedIn/X — lucide v1 dropped brand logos) |
| `src/app/globals.css` | Design tokens, grid/glow background, card + tag styles |
| `public/*.pdf` | The two generated résumés (served at `/Peter-Ndujekwu-…​.pdf`) |
| `resumes/*.html` | Print-styled source for the résumés |
| `scripts/` | Puppeteer responsive-audit + screenshot helpers |

## Résumés

Two résumés are generated from print-styled HTML in `resumes/` via headless Chrome:

- **`public/Peter-Ndujekwu-Software-Engineer.pdf`** — tech-centred (linked across the site)
- **`public/Peter-Ndujekwu-Academic-CV.pdf`** — school/academic-centred

Regenerate after editing the HTML:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --no-pdf-header-footer \
  --print-to-pdf="public/Peter-Ndujekwu-Software-Engineer.pdf" \
  "file://$PWD/resumes/tech-resume.html"
"$CHROME" --headless --no-pdf-header-footer \
  --print-to-pdf="public/Peter-Ndujekwu-Academic-CV.pdf" \
  "file://$PWD/resumes/school-resume.html"
```

## Responsive testing

`scripts/shots.mjs` captures full-page screenshots at 320/375/414/768/1024/1440 and
flags any horizontal overflow; `scripts/sections.mjs` captures readable per-section
shots. Run with the prod server up:

```bash
PORT=4317 npm run start &
node scripts/shots.mjs        # overflow audit + screenshots → /tmp/shots
```

Verified clean (no horizontal overflow) at every breakpoint, with a working mobile menu.
