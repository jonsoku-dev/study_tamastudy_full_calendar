## docker build

```bash
docker build -f Dockerfile.dev .
```

## delete node_modules

```bash
rm -rf node_modules/
```

## docker run

```bash
docker run -p 3000:3000 fbec68cb5e1a
```

## docker volumes

```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app fbec68cb5e1a
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

```

# test

## docker build

```bash
docker build -f Dockerfile.dev .
```

## npm run test

```bash
docker run 1d921020aa81 npm run test
```

## docker run -it

```bash
docker run -it eea7809d8b38 npm run test
```

## docker-compose up

## docker ps

## docker exec -it d1a3c38f8233 npm run test

# docker compose for running tests

##
# study_tamastudy_full_calendar
