FROM node:alpine

WORKDIR /app
COPY . /app
COPY package.json ./
RUN npm install 
RUN npm install -g serve
RUN npm run build

COPY ./ ./

CMD ["serve", "-s", "build"]