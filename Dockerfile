FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN if [ -f package-lock.json ]; then npm ci; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && npm install; \
    fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

CMD ["npm", "run", "dev"]
