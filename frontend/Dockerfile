FROM node:14-alpine3.10

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
RUN npm install react-scripts -g --silent
COPY package*.json ./
RUN npm install --silent

COPY . .

EXPOSE 9050
CMD ["npm", "start"]
