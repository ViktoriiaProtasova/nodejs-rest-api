FROM node:18.16.0

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server"]