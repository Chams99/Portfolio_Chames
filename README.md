# portfolio v3

Editorial portfolio built with Astro.

## Local workflow

```bash
bun install
bun run dev
```

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
