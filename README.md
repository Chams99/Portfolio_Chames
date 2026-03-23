# portfolio v3

Editorial portfolio built with Next.js.

## Local workflow

```bash
npm install
npm run dev
```

## Production

This repo now includes the same VPS deployment pattern used in `portfolio v2`:

- `Dockerfile`
- `docker-compose.yml`
- `deploy.sh`

Target host:

```bash
https://v1.chames.dhibi.tn
```

Set your server `.env` like this:

```bash
NEXT_PUBLIC_SITE_URL=https://v1.chames.dhibi.tn
```

Then deploy on the VPS with:

```bash
chmod +x deploy.sh
./deploy.sh
```
