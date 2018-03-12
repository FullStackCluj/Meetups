FROM node:9

LABEL maintainer="Darius Cupsa <cupsadarius@gmail.com>"

RUN mkdir -p /usr/app/src

WORKDIR /usr/app/src

ENV PORT 80
ENV API_HOST ''
ENV TOKEN_SECRET ''

COPY package.json /usr/app/src/package.json

RUN npm install

COPY . /usr/app/src

CMD [ "npm", "run", "-s", "start"]
