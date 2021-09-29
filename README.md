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
