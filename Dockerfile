FROM node:16.4-alpine as build

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE ${NODE_PORT}

CMD ["npm", "start"]