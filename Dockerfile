FROM node:12

WORKDIR /usr/src/

COPY . .

EXPOSE 3000

RUN yarn install

CMD ["yarn", "start"]