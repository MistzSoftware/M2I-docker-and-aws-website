FROM node:24-alpine

WORKDIR /app

COPY lorem-site/package*.json ./

RUN npm install

COPY lorem-site/ ./

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
