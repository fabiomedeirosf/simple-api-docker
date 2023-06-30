FROM node:14.17.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/srcdoc/app

COPY . /usr/src/app/

RUN npm install --silent

EXPOSE 5000
CMD [ "node", "index.js" ]
