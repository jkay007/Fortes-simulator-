# Fortes simulators

Self-contained simulators and tools for Fortes underground bunkers. Each folder is one static page (`index.html`) with inline CSS and JavaScript. The only external request is Google Fonts.

| Folder | What it shows |
| --- | --- |
| `ww3-simulator` | One family through a third world war, from day -14 to year 3, next to Fortes members sheltering 30, 50 or 100 m down |
| `nuclear-simulator` | Blast rings, fallout plume and two-week radiation dose for a chosen weapon, wind and position |
| `blast-simulator` | Blast, heat and radiation at a chosen distance, in the open, in a brick house and in a Fortes shelter |
| `location-checker` | Pick a UK town and see the nearest likely targets, fallout odds for each wind direction, a risk rating and a recommended shelter depth |
| `shelter-walkthrough` | Clickable cutaway of a shelter at 30, 50 or 100 m, with room details, air, water and power systems, and a direct-hit test |
| `air-power-simulator` | CO₂, oxygen, temperature, battery and fuel hour by hour for a sealed shelter |
| `threat-simulator` | Pandemic, grid collapse, chemical release and civil unrest, day by day at home and in a Fortes shelter |

## Shelter depth

Fortes shelters are modelled at 30, 50 and 100 m. A shelter survives a direct hit from a ground burst when twice the crater depth (Glasstone & Dolan scaling) stays above the shelter depth. That is about 6 kt at 30 m, 30 kt at 50 m and 340 kt at 100 m. Fallout radiation roughly halves with every 10 cm of earth.

## Running

Open any `index.html` in a browser, or serve the folder with any static host.

## Notes

Educational scenario models, not forecasts. Shelter figures are illustrative, not a Fortes guarantee.
