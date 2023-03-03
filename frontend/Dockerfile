# -- BUILD --
FROM node:16-alpine as build
ENV REACT_APP_REST=/login

WORKDIR /app
COPY package* ./
RUN yarn

COPY . .
RUN npm run build

# -- RELEASE --
FROM nginx:stable-alpine as release
ENV REACT_APP_REST=/login

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx_default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .

