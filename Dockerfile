FROM node:latest
ENV NODE_ENV development

# Create app directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--host=0.0.0.0"]


