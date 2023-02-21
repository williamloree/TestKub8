FROM node:16.15-alpine3.14

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "dev" ]