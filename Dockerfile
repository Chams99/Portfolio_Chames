# Use a more complete bun image or ensure build tools are present
FROM oven/bun:1.3.6 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
# Use bun to run the scripts for better compatibility in this image
RUN bun scripts/generate-image-derivatives.cjs && bunx --bun astro build

FROM nginx:1.27-alpine

# Install curl for reliable healthchecks if needed, or stick to wget if busybox is enough
# But Alpine's busybox wget is usually fine.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
