FROM node:alpine

#WORKDIR /app

## Copy package.json and yarn.lock before copy other files for better build caching
COPY ["./package.json", "./yarn.lock", "/app/"]
RUN yarn --prod
COPY "./" "/app/"

CMD ["npm", "start"]