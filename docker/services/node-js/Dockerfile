FROM node:22-alpine3.20

COPY package.json /node-app/
COPY src /node-app/

WORKDIR /node-app

RUN npm install

CMD [ "node", "server.js" ]
