# TechMex Austin — Design System (v2.0)

Living style guide for techmexaustin.org. Open `index.html` in a browser.

## Package layout

```
design-system/
├── index.html            The style guide (every component, live + View code)
├── css/
│   ├── techmex.css       ← PORTABLE: tokens, type, buttons, hexagons, cards…
│   └── styleguide.css    Page chrome only (sg- classes) — do not copy
├── js/
│   ├── techmex.js        ← PORTABLE: animated counters + countdown
│   └── styleguide.js     Snippet viewer / COPY buttons — do not copy
└── images/
    ├── techmex-logo-header.svg      Full horizontal (6.2:1) — heroes, headers
    ├── techmex-logo-condensed.svg   Condensed (3.4:1) — navbars, footers
    ├── techmex-logo-vertical.svg    Square (1:1) — avatars, social, favicon
    └── techmex-logo-email.png       1600×260 transparent PNG — email / no-SVG
```

## Using it on another HTML platform

1. Copy `css/techmex.css`, `js/techmex.js`, and the logos you need from `images/`.
2. Add the Google Fonts link (Inter, Space Grotesk, JetBrains Mono) — see the
   `<head>` of `index.html`.
3. If the page uses hexagons, paste the hidden `<svg><defs>` block (top of
   `index.html`'s `<body>`) **once** per page — it holds the shared gradient
   (`#tmx-hex-grad`) and glow (`#tmx-hex-glow`).
4. Copy any component's markup from a "View code" panel in the guide.

No frameworks, no build step. Everything is vanilla CSS/JS with the `tmx-`
prefix; the `sg-` prefixed files style the guide page itself only.
