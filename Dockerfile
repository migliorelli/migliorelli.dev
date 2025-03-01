FROM node:23-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG NO_CACHE
RUN if [ "$NO_CACHE" = "true" ]; then rm -rf /app/dist && yarn build; else yarn build; fi

FROM node:23-alpine AS production

WORKDIR /app

RUN yarn global add serve

COPY --from=build /app/dist ./

EXPOSE 80

CMD ["serve", "-s", ".", "-l", "80"]
