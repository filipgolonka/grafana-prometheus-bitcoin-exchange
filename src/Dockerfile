FROM node:12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i --production

EXPOSE 4000

CMD [ "npm", "start" ]
