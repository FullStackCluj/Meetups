FROM node:6.5-slim
CMD [ "npm", "run", "-s", "start" ]
EXPOSE 80

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Set environment vars
ENV APP_ENV local
ENV PORT 80

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build && npm prune --production
