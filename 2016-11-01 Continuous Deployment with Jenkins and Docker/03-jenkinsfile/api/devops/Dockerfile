FROM node:6.5-slim
CMD [ "npm", "run", "-s", "start" ]

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 80

# Set environment vars
ENV APP_ENV local
ENV TZ Europe/Bucharest

ENV DB_HOST rethinkdb
ENV DB_PORT 28015
ENV DB_NAME todoapp
ENV TOKEN_SECRET "adsfasytberjqnwvuhewqrhnqweohqmenuw"
ENV PORT 80

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
