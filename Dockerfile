# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:20
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]