# Next.js in container

## Create

1. Create project

```bash
npx create-next-app@latest
```

2. Add Dockerfile docker-compose.yml

3. Hot reload configuration
   next.config.js
   `webpackDevMiddleware()`

## Getting Started

```bash
cp .env.example .env
```

First, run the development server:

```bash
docker compose up -d --build
```
