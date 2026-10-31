---
title: "Two New FORTES Tools: the Fallout Clock and the Depth Explorer"
slug: fallout-clock-and-depth-explorer
date: 2026-10-31
category: BUNKER INTELLIGENCE
reading_minutes: 6
excerpt: "Two new free tools: the Fallout Clock shows when it is safe to come out, and the Depth Explorer shows what 30, 50 and 100 metres of earth survive."
meta_description: "Two free FORTES tools: the Fallout Clock shows when it is safe to leave a shelter, and the Depth Explorer shows what 30, 50 and 100 metres of earth survive."
site_url: https://fortesbunkers.com/intelligence/fallout-clock-and-depth-explorer
site_source: jkay007/fortes-bunker-web, src/content/falloutClockDepthExplorer.ts
---

# Two New FORTES Tools: the Fallout Clock and the Depth Explorer

*Fallout decides how long you stay down. Depth decides whether the shelter is still there when you come up. Two new free tools let you see both for yourself.*

Two questions come up in almost every FORTES consultation. How long would we have to stay underground? And how deep is deep enough?

We have built a free tool for each. Both run in your browser, and every number in them moves when you move a slider, so you can test the answers yourself rather than take our word for them.

## The Fallout Clock: how long do you stay down?

[Open the Fallout Clock](/simulators/fallout-clock)

Fallout is the radioactive dust a ground burst throws into the air. It falls back over hours and drifts downwind for miles. The good news is that it fades on a fixed schedule. For every sevenfold increase in time, the radiation falls tenfold. That is the 7–10 rule, and the Fallout Clock is built on it.

You set two things: how heavy the fallout is, from Light to Severe, and how soon it reaches you. Then you run the clock.

Take the tool's starting scenario: heavy fallout, 1,000 rem an hour outside one hour after the blast, landing within the hour. Seven hours later the rate outside is about 97 rem an hour. After two days it is about 9. It takes roughly 13 days to fall below 1 rem an hour.

Where you wait that out is what matters most. Here is the dose each kind of shelter takes over the first two weeks in that scenario:

| Where you wait | Dose over two weeks |
| --- | --- |
| Out in the open | about 3,400 rem |
| Ground-floor room of a brick house | about 1,150 rem |
| House basement | about 170 rem |
| Backyard shelter under 1 m of earth | about 5 rem |
| FORTES shelter, 30 m or deeper | about 0.03 rem |

For scale, the tool marks 600 rem as likely fatal, 200 rem as severe harm and 50 rem as the point where harm becomes likely.

The clock also prices a trip outside. In the same scenario, a 15-minute trip costs less than 5 rem (the annual limit for US radiation workers) from about a day after the blast. A one-hour trip has to wait about three and a half days, and a four-hour trip about 11.

One honest point the tool makes for us: past a couple of metres of earth, fallout protection stops depending on depth. A backyard shelter under a metre of earth already cuts the dose more than 600 times. What decides how well a deep shelter keeps fallout out is the design of the entrance and the filtration on the air supply. Depth is for something else.

## The Depth Explorer: how deep is deep enough?

[Open the Depth Explorer](/simulators/depth-explorer)

Depth is for the blast itself. The Depth Explorer is an earth cutaway. You drop a ground burst directly on top of a shelter, watch the crater dig, then slide down through the earth to see where the damage stops.

The rule it uses is simple: the ground is badly damaged down to about twice the depth of the crater. A shelter below that line survives a direct hit in the model. A shelter above it does not.

| Weapon | Crater depth | Damage reaches down to |
| --- | --- | --- |
| 15 kt, Hiroshima size | about 20 m | about 40 m |
| 100 kt, submarine warhead | about 35 m | about 70 m |
| 300 kt, ICBM warhead | about 48 m | about 96 m |
| 1 Mt | about 69 m | about 137 m |

Turn that round and you get what each FORTES depth survives directly overhead in the model:

- **30 m** survives a direct hit up to about 6 kt.
- **50 m** survives a direct hit up to about 30 kt, a Hiroshima-sized bomb with room to spare.
- **100 m** survives a direct hit up to about 340 kt, more than a 300 kt ICBM warhead.

These are model results for depth alone, with the weapon directly overhead and the local geology ignored. FORTES rates its shelters for blast protection up to 100 PSI, and no depth is a guarantee of survival.

To give those depths a feel, the tool sets them against real places. Hampstead, the deepest station on the London Underground, is 58.5 m down. Arsenalna in Kyiv, listed as the deepest metro station in the world, is 105.5 m down.

The Depth Explorer is just as clear about what depth does not do. Any covering of earth stops the heat flash. Depth does nothing for fallout drawn in through the air supply, which is the job of NBC and CBRN filtration. It does nothing against an electromagnetic pulse, which needs Faraday shielding, or for the months underground, which depend on independent power, water purification and satellite communications.

That leads to the point we make most often in consultations. Filtration, power and shielding can all be upgraded later. The earth above the shelter is fixed on the day it is built. Depth is the one thing you cannot add afterwards.

## How the tools fit together

The new tools use the same model as our existing simulators, so the numbers agree across all of them.

- Start with the [Blast Impact Simulator](/simulators/blast-impact) to see what happens at your distance from ground zero.
- The [Nuclear Fallout Simulator](/simulators/nuclear-fallout) adds the wind and shows fallout reaching your position. It gives a figure called "Fallout at H+1". Put that figure into the [Fallout Clock](/simulators/fallout-clock) to see how long you would stay down and what a trip outside would cost.
- Use the [Depth Explorer](/simulators/depth-explorer) to see which depth would survive a direct hit at the yield you are worried about.
- The [WW3 Family Survival Simulator](/simulators/ww3-scenario) puts it all on one timeline, from two weeks before a war to three years after.

## Try them, then talk to us

All of our tools are in the [FORTES Threat Lab](/simulators). If the results raise questions about your own plans, [apply for a private consultation](/apply). We will talk through location, depth and the systems that keep a shelter running.

*These are educational models, not forecasts. They assume a ground burst directly overhead and fallout that lands all at once, and they ignore local geology. The figures are illustrative and are not a FORTES guarantee. Real shelters need real dosimeters. In an emergency, follow your local authorities: get inside, stay inside, and stay tuned.*
