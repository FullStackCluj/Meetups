FROM node:9

LABEL maintainer="Darius Cupsa <cupsadarius@gmail.com>"

RUN mkdir -p /usr/app/src

WORKDIR /usr/app/src

ENV PORT 80
ENV APP_ENV ''
ENV TOKEN_SECRET ''
ENV MYSQL_DB ''
ENV MYSQL_PORT ''
ENV MYSQL_HOST ''
ENV MYSQL_PASSWORD ''
ENV MYSQL_USER ''

COPY package.json /usr/app/src/package.json
COPY package-lock.json /usr/app/src/package-lock.json

RUN npm install

COPY . /usr/app/src

RUN npm run lint

RUN npm test

CMD [ "npm", "run", "-s", "start:migrate"]
