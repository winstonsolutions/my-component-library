FROM node:20 AS build
WORKDIR /zhao_wentao_ui_garden
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /zhao_wentao_ui_garden/dist /usr/share/nginx/html
RUN sed -i 's/listen 80/listen 8083/' /etc/nginx/conf.d/default.conf
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]