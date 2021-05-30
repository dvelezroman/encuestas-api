FROM node:14

WORKDIR /server

COPY /server/package.json .

RUN npm install

COPY /server .

# RUN npm install pm2 -g

EXPOSE 3000

CMD ["npm", "start"]
