FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock* .

# install yarn
RUN apk add --no-cache yarn

# install deps
RUN yarn install

# install serve
RUN yarn global add serve

# copy files
COPY . .

# build
RUN yarn build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]