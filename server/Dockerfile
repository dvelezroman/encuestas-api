FROM node:14

WORKDIR /server

COPY /server/package.json .

RUN npm install

COPY /server .

RUN npm install pm2

EXPOSE 3000

CMD ["npm", "prod"]
