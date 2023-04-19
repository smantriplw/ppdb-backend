FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Bundle app source
RUN npm run build

# Expose port
EXPOSE 3000

# Run app
CMD [ "npm", "start" ]