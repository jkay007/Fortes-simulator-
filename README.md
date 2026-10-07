# Fortes simulators

Self-contained simulators and tools for Fortes underground bunkers. The root `index.html` is the home page linking every tool. Each folder is one static page (`index.html`) with inline CSS and JavaScript, plus an `og.png` share image. The only external request is Google Fonts. Every page links back to the home page and to every other tool.

| Folder | What it shows |
| --- | --- |
| `ww3-simulator` | One family through a third world war, from day -14 to year 3, next to Fortes members sheltering 30, 50 or 100 m down |
| `nuclear-simulator` | Blast rings, fallout plume and two-week radiation dose for a chosen weapon, wind and position |
| `blast-simulator` | Blast, heat and radiation at a chosen distance, in the open, in a brick house and in a Fortes shelter |
| `location-checker` | Pick a town in the UK, Europe or the USA (or use your device location) and see the nearest likely targets, fallout odds for each wind direction, a risk rating and a recommended shelter depth |
| `shelter-walkthrough` | Clickable cutaway of a shelter at 30, 50 or 100 m, with room details, air, water and power systems, and a direct-hit test |
| `air-power-simulator` | CO₂, oxygen, temperature, battery and fuel hour by hour for a sealed shelter |
| `threat-simulator` | Pandemic, grid collapse, chemical release and civil unrest, day by day at home and in a Fortes shelter |
| `shelter-sizer` | Floor area by zone, air, water, power and food for a household, with an indicative budget |
| `supplies-calculator` | Water, food, medicine and kit for 3 days to a year, as a printable checklist |
| `readiness-quiz` | Ten questions giving a readiness score, the weakest areas and a recommended shelter |
| `depth-explained` | Damage depth against weapon yield, what each shelter depth survives, and earth against fallout |

## Shelter depth

Fortes shelters are modelled at 30, 50 and 100 m. A shelter survives a direct hit from a ground burst when twice the crater depth (Glasstone & Dolan scaling) stays above the shelter depth. That is about 6 kt at 30 m, 30 kt at 50 m and 340 kt at 100 m. Fallout radiation roughly halves with every 10 cm of earth.

## Running

Open any `index.html` in a browser, or serve the folder with any static host.

## Before publishing

- **Pricing.** `shelter-sizer` uses placeholder rates. Replace the numbers in the `PRICING` block near the top of its script with Fortes pricing.
- **Share images.** Each page sets `og:image` to `og.png`. Social sites need an absolute URL, so change it to the full address once the site's domain is known (for example `https://example.com/nuclear-simulator/og.png`).

## Adding to the Fortes website (Lovable)

The `lovable/` folder holds every tool laid out exactly as the **fortes-bunker-** Lovable project expects, so the files can be copied over path for path:

| Copy from this repo | To the Lovable project | Served at |
| --- | --- | --- |
| `lovable/public/simulators/*.html` | `public/simulators/` | `/simulators/<slug>` (inside the site's iframe) |
| `lovable/public/simulators/og/*.png` | `public/simulators/og/` | Share images |
| `lovable/src/content/tools/shelter-walkthrough.html` | `src/content/tools/` | `/simulators/shelter-walkthrough`, behind the access gate |
| `lovable/src/data/interactiveTools.ts` | `src/data/` | Adds the sizer, supplies, quiz and depth tools to the tool cards |

Slugs on the site: `blast-impact`, `nuclear-fallout`, `ww3-scenario`, `location-checker`, `air-and-power`, `multi-threat`, `shelter-walkthrough`, `shelter-sizer`, `supplies-calculator`, `readiness-quiz`, `depth-explained`. Links between tools open the matching `/simulators/<slug>` page in the full window.

After changing any page in this repo, run `python3 tools/build_lovable.py` to rebuild `lovable/`.

## Standalone Lovable projects

`lovable-routes/` has one TanStack route per page. To use them in the Lovable project:

1. Copy each page's `index.html` to `src/site/<folder>.html`, and the root page to `src/site/home.html` (the old `src/site/fortes.html` is the blast simulator; rename it `blast-simulator.html`).
2. Copy the route files into `src/routes/`. `index.tsx` serves the home page at `/`; the blast simulator moves from `/` to `/blast-simulator`.
3. Copy each `og.png` to `public/<folder>/og.png` (and the root one to `public/og.png`).

The routes rewrite the pages' `../folder/index.html` links to app routes such as `/nuclear-simulator`.

## Notes

Educational scenario models, not forecasts. Shelter figures are illustrative, not a Fortes guarantee.
