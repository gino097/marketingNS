FROM node:16-alpine

WORKDIR /app

RUN yarn global add pm2

COPY package* ./
RUN yarn install --prod --frozen-lockfile --non-interactive --ignore-optional --link-duplicates
COPY . .

CMD ["pm2-runtime", "server.js"]