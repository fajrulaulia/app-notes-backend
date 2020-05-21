FROM alpine:3.8
RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY src/ src/
COPY index.js .
COPY .env .

EXPOSE 8080
CMD [ "npm", "start" ]
