# chames.tn

Portfolio website of Chames Eddine Dhibi, full-stack developer, in English and French. Live at [chames.tn](https://chames.tn).

## Stack

- [Astro](https://astro.build) 6: every page is prerendered, and only the contact form runs on the server through `@astrojs/node`
- Tailwind CSS 4 and the site's own stylesheet in `src/styles/global.css`
- GSAP for the reveal animations, with reduced motion respected
- Bun for installs and scripts
- Space Grotesk, DM Sans and Space Mono, self-hosted in `src/assets/fonts` under the SIL Open Font License

## Project layout

```
src/
  pages/      Routes: English at /, French at /fr, plus the sitemap, robots.txt, manifest, /health and /api/contact
  sections/   Home, work and contact page bodies, shared by both languages
  astro/      Header, footer, project rows and image components
  data/       Site details, projects and skills; generatedImages.ts is written by the image script
  i18n/       English and French copy
  scripts/    Navigation, contact form, scroll and type reveals, analytics
  styles/     Global styles and the font faces
scripts/
  generate-image-derivatives.cjs  Builds the WebP card, hero and gallery images in public/generated-images
  test-analytics.ts               Checks the analytics loader
```

## Local workflow

```bash
bun install
bun run dev              # http://localhost:3000
bun run build            # image derivatives, then the production build in dist/
bun run test:analytics
```

Copy `.env.example` to `.env` for local settings. `PUBLIC_GA4_MEASUREMENT_ID` is optional; without it no analytics load.

## Production

VPS deployment uses:

- `Dockerfile`
- `docker-compose.yml`
- `deploy.sh`

Target host:

```bash
https://chames.tn
```

Set your server `.env` like this:

```bash
PUBLIC_SITE_URL=https://chames.tn
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

The contact form sends submissions to the configured Telegram chat. If the Telegram variables are not set, the form returns a clear unavailable response and visitors can use the email fallback.

Then deploy on the VPS with:

```bash
chmod +x deploy.sh
./deploy.sh
```

To update the existing VPS deployment, run these commands from its portfolio checkout:

```bash
git switch New_Design
git pull --ff-only origin New_Design
bash deploy.sh
curl -fsS https://chames.tn/health
```

If you need to find that checkout, inspect the existing containers' Compose labels:

```bash
docker inspect --format '{{ index .Config.Labels "com.docker.compose.project.working_dir" }}' portfolio-v1-blue portfolio-v1-green 2>/dev/null
```

Keep the server's existing `.env`. The deployment script builds the inactive blue/green service, waits for its health check, and then stops the previous service.
