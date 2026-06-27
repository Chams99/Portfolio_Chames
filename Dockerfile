FROM oven/bun:1-debian AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun scripts/generate-image-derivatives.cjs && bunx --bun astro build

FROM oven/bun:1-debian

WORKDIR /app

COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80

CMD ["bun", "run", "dist/server/entry.mjs"]
