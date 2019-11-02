# dev

## Dockerfile

Dockerfile.dev

```docker
FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
```

## docker-compose.yml

```docker
version: "3"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app

  tests:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
    command: ["npm", "run", "test"]

```

# build

Dockerfile

```docker
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
```

# travis

.travis.yml

```
language: generic
sudo: required
services:
  - docker

before_install:
  - docker build -t jonsoku2/study_tamastudy_full_calendar -f Dockerfile.dev .

scripts:
  - docker run -e CI=true jonsoku2/study_tamastudy_full_calendar npm run test
```
