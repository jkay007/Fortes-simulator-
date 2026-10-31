# Fortes simulators

Seven self-contained tools for Fortes underground bunkers. Each folder is one static page (`index.html`) with inline CSS and JavaScript. The only external request is Google Fonts.

| Folder | What it shows |
| --- | --- |
| `ww3-simulator` | One family through a third world war, from day -14 to year 3, next to Fortes members sheltering 30, 50 or 100 m down |
| `nuclear-simulator` | Blast rings, fallout plume and two-week radiation dose for a chosen weapon, wind and position |
| `blast-simulator` | Blast, heat and radiation at a chosen distance, in the open, in a brick house and in a Fortes shelter |
| `fallout-simulator` | Fallout Clock: how heavy and how soon, then run the clock to see when it is safe to come out, what a trip outside costs, and how five kinds of shelter compare |
| `depth-explorer` | Depth Explorer: an earth cutaway with a ground-burst crater, the damage zone, and the three Fortes depths against a direct hit |
| `time-to-shelter` | Time to Shelter: a missile's flight time against the alert, getting out of the door, travelling and sealing in, and how close a shelter has to be for each way of travelling |
| `blast-ratings` | Blast Ratings: peak blast pressure against distance with the five FORTES tier ratings (15 to 100 PSI), and how close each weapon can land before each rating is passed |

## Blog

`blog/` holds copies of posts published on the Fortes Bunkers site, in Markdown with front matter. The live versions are TypeScript files in the site repo (`jkay007/fortes-bunker-web`, `src/content/`). Figures in each post come from the tools' own models with their default settings.

| File | Post |
| --- | --- |
| `blog/2026-10-31-fallout-clock-and-depth-explorer.md` | Launch post for the Fallout Clock and the Depth Explorer, at `/intelligence/fallout-clock-and-depth-explorer`. The tools are at `/simulators/fallout-clock` and `/simulators/depth-explorer` |
| `blog/2026-10-31-time-to-shelter.md` | Launch post for Time to Shelter, at `/intelligence/time-to-shelter-how-close-does-a-bunker-need-to-be` |
| `blog/2026-10-31-blast-ratings-explained.md` | Launch post for Blast Ratings Explained, at `/intelligence/blast-ratings-explained-15-to-100-psi` |

## Shelter depth

Fortes shelters are modelled at 30, 50 and 100 m. A shelter survives a direct hit from a ground burst when twice the crater depth (Glasstone & Dolan scaling) stays above the shelter depth. That is about 6 kt at 30 m, 30 kt at 50 m and 340 kt at 100 m. Fallout radiation halves with every 12 cm of earth in the model, capped at a protection factor of 100,000, so past about 2 m of earth the limit is the entrance and the air supply, not the rock. Depth matters most for cratering and ground shock.

## Running

Open any `index.html` in a browser, or serve the folder with any static host.

## Notes

The Fallout Clock and Depth Explorer use the same decay law (dose rate falls as t^-1.2), protection factors and crater scaling as the Nuclear simulator, so the numbers agree across tools. Both were checked in a real browser at widths from 360 px to 1440 px.


Educational scenario models, not forecasts. Shelter figures are illustrative, not a Fortes guarantee.
