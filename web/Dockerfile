# set the base image
FROM node:alpine as build

WORKDIR /app

COPY /web/package.json .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY /web .

CMD ["npm", "run", "prod"]

# set up production environment
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY /web/nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]