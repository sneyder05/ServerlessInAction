FROM node:14.17.1-alpine

WORKDIR /usr/src

# Install dependencies
RUN npm install -g npm@6.14.13
RUN npm install -g typescript@4.5.5
RUN npm install -g serverless@2.64.1

# Copy sources
COPY . ./app

WORKDIR /usr/src/app

# Install NPM packages
RUN npm install

# Run the app
CMD [ "npm", "start" ]