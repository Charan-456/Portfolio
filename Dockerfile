FROM node:20.19.1 as build
# got this node 20 image from docker

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.21-slim

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]