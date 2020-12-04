FROM node:12.19.0-alpine3.12

LABEL org.opencontainers.image.source https://github.com/mzrimsek/drunk-bot

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package.json /usr/src/bot
RUN npm install

COPY . /usr/src/bot

CMD ["npm", "run", "forever"]