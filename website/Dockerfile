FROM node:16.13
WORKDIR /website

COPY package.json .
RUN npm install --force

COPY . . 

CMD ["npm", "run", "develop"]