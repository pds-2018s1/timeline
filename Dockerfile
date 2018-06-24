FROM node:9-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn install; \
    yarn global add serve

COPY . . 
RUN yarn build



EXPOSE 3000
CMD serve -p 3000 -s build