"""Build the lovable/ folder: every Fortes page laid out the way the fortes-bunker- Lovable site
expects them (public/simulators/<slug>.html, loaded in an iframe at /simulators/<slug>).

Run from the repo root:  python3 tools/build_lovable.py
"""
import os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "lovable")
# repo folder -> slug used on the Lovable site
SLUGS = {
    "blast-simulator": "blast-impact",
    "nuclear-simulator": "nuclear-fallout",
    "ww3-simulator": "ww3-scenario",
    "location-checker": "location-checker",
    "air-power-simulator": "air-and-power",
    "threat-simulator": "multi-threat",
    "shelter-walkthrough": "shelter-walkthrough",
    "shelter-sizer": "shelter-sizer",
    "supplies-calculator": "supplies-calculator",
    "readiness-quiz": "readiness-quiz",
    "depth-explained": "depth-explained",
}
# The site loads the walkthrough behind an access gate from src/content/tools/ instead of public/.
GATED = {"shelter-walkthrough"}


def convert(html, slug):
    # Links between tools point at sibling folders so the pages work from disk; on the site they
    # become /simulators/<slug>, and <base target="_top"> makes them leave the iframe.
    html = re.sub(r'(?:\.\./)?([a-z0-9-]+)/index\.html', lambda m: "/simulators/" + SLUGS.get(m.group(1), m.group(1)), html)
    html = re.sub(r'(?:\.\./)?index\.html', "/simulators", html)
    html = html.replace('content="og.png"', f'content="/simulators/og/{slug}.png"')
    html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<base target="_top">', 1)
    return html


if os.path.isdir(OUT):
    shutil.rmtree(OUT)
os.makedirs(os.path.join(OUT, "public", "simulators", "og"))
os.makedirs(os.path.join(OUT, "src", "content", "tools"))
for folder, slug in SLUGS.items():
    html = convert(open(os.path.join(ROOT, folder, "index.html"), encoding="utf-8").read(), slug)
    dest = os.path.join(OUT, "src", "content", "tools", slug + ".html") if folder in GATED else os.path.join(OUT, "public", "simulators", slug + ".html")
    open(dest, "w", encoding="utf-8").write(html)
    shutil.copy(os.path.join(ROOT, folder, "og.png"), os.path.join(OUT, "public", "simulators", "og", slug + ".png"))
# The tool list the site's /simulators pages read, with the new tools added.
os.makedirs(os.path.join(OUT, "src", "data"))
shutil.copy(os.path.join(ROOT, "tools", "interactiveTools.ts"), os.path.join(OUT, "src", "data", "interactiveTools.ts"))
print("built", OUT)
