FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

#COPY package.json ./
#COPY package-lock.json ./
RUN apk update && apk add git
RUN git clone https://github.com/ran-seagate/frontend.git
WORKDIR /app/frontend
RUN npm install && npm install react-scripts -g

#COPY . ./
EXPOSE 3000

CMD ["npm", "start"]