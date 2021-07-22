FROM node:14.16-alpine as build
WORKDIR /usr/src/app
COPY . .
COPY env-example ./.env
RUN npm install
RUN npm run build

FROM node:14.16-alpine
WORKDIR /usr/src/app
COPY package*.json tsconfig*.json babel.config.js webpack*.js ./
COPY env-example ./.env
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 4001
CMD ["npm", "start"]
