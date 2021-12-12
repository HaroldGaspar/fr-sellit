# About the project

This project is displayed in http://sellit.hakhi.xyz/ for your test view

# Frontend project for the sellit aplication

This project considers to have active the API of sellit.
--root
|
|--api =[npm run development], run the API in the port 8000
|--sellit =[npm start], run the react app in the port 3000

## Available Scripts

For the data persistence it was considered to run a container with postgres

docker run -dp 5432:5432 \
 --name postgrespjti \
 -e POSTGRES_PASSWORD=mysecretpassword \
 -e PGDATA=/var/lib/postgresql/data/pgdata \
 -v /custom/mount:/var/lib/postgresql/data \
 postgres

### `yarn start`

docker-compose run --rm app yarn install
docker-compose up

### `build and run a image`

docker build -f Dockerfile -t reactdev .

docker run --rm -it -p 3000:3000 reactdev

### `build and run a image for production`

sudo update-rc.d nginx disable -> disable nginx local service

docker build -f Dockerfile.prod -t reactprod .

docker run --rm -it -p 80:80 reactprod

### `raise`

docker-compose app exec sh
