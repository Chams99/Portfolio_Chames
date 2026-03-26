FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN npm install

COPY . .
RUN node scripts/generate-image-derivatives.cjs && npx astro build

FROM nginx:1.27-alpine

# Install curl for reliable healthchecks if needed, or stick to wget if busybox is enough
# But Alpine's busybox wget is usually fine.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
