FROM strapi/base

WORKDIR /cms

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]