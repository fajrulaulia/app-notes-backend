FROM alpine:edge
RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main nodejs=12.16.3-r0
RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main npm=12.16.3-r0

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY src/ src/
COPY index.js .
COPY .env .

EXPOSE 8080
CMD [ "npm", "start" ]
