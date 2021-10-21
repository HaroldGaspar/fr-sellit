FROM node:12

WORKDIR /usr/src/

COPY package.json ./usr/src

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]