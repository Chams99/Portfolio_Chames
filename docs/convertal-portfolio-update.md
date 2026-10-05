# Convertal portfolio update

Date: 2026-10-05.

Universal Convertal replaces the old Unit Converter entry while retaining its `unit-converter` identifier. It is fifth on the English/French homepage and fifth in the English/French work page's featured list. The other projects retain their relative order. The project links to https://units.chames.tn/.

## Real screenshots

Captured from the public HTTPS application in Chrome on Windows, with light color scheme, reduced motion, and a clean browser session. Desktop captures use a 1440×960 CSS viewport and full-page screenshots; mobile uses 390×844. Source files are in `public/images/projects/`:

| File | Screen |
| --- | --- |
| `convertal-units.png` | Live kilometer-to-mile conversion |
| `convertal-developer.png` | Browser-local JSON formatting with sample project data |
| `convertal-images.png` | Successful PNG-to-WebP server conversion of the public units screenshot |
| `convertal-currency.png` | Provider reference quote with visible source and timestamp |
| `convertal-mobile.png` | Full mobile unit workbench |

The currency quote is a screenshot of reference data at capture time. It is not a promised current exchange rate. No personal file was uploaded for the image demonstration.

`scripts/generate-image-derivatives.cjs` produces the card, hero, and gallery WebP derivatives and `src/data/generatedImages.ts`. The existing homepage/work layouts display the units screenshot as the project preview; the additional captures are available in the project's media data. The public source PNGs are not used as the card downloads.

## Responsive correction

The production homepage already overflowed horizontally by 20px at 320px because the portrait's decorative frame extended beyond its available space. The mobile portrait now reserves space for the frame, and its staged reveal uses vertical movement. This also prevents the French portrait's offscreen reveal from causing horizontal overflow during normal-motion navigation. No global overflow-hiding rule was added.

## Verification conditions

Result: the production build passed, all 34 targeted browser cases passed, and the changed cards had no axe violations in the 16 route/width combinations. Machine-readable results are in [convertal-portfolio-qa.json](convertal-portfolio-qa.json). [The desktop card capture](convertal-portfolio-card.png) shows the fifth-position label and preview.

Astro 6.4.5 production preview, Windows headless Chrome, Playwright 1.63.0, axe-core 4.13.0, locally installed Bun 1.4.2. The repository's declared package manager remains Bun 1.3.6. No dependencies or VPS deployment configuration were changed.

The browser checks cover `/`, `/fr`, `/work`, and `/fr/work`, with 320, 390, 768, and 1440px widths, normal/reduced motion, disabled JavaScript, image loading and dimensions, fifth position and absence of duplicate entries, keyboard focus and activation, ClientRouter navigation, browser back/forward, and changed reduced-motion preference. Automated accessibility checks are scoped to the changed project card, not a complete site audit.

The 200% zoom reflow check uses a 720×480 CSS viewport at device scale 2, equivalent to a 1440×960 physical viewport. Native browser zoom controls, screen-reader testing, field performance, and the VPS rebuild are not verified by this local browser run. The existing portfolio has no lint or full type-check script; the Astro build is not represented as either check.

See [the README deployment commands](../README.md#production) for updating the existing VPS checkout.
