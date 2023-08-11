FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
    # && npm run build

# COPY ./src ./src
# COPY ./public ./public
COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 3000