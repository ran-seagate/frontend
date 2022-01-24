FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add git
RUN git clone https://github.com/ran-seagate/frontend.git
WORKDIR /app/frontend
RUN npm install && npm install react-scripts -g

EXPOSE 3000

CMD ["npm", "start"]