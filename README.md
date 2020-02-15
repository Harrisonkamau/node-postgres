# Node Sequelize
Basic setup for a Node.js project using PostgreSQL database and Sequelize as the ORM

## Prerequisites
Firstly, install all dependencies with: `yarn install` or `npm install`.

Ensure you have PostgreSQL installed on your PC. The easiest way is to use the [Postgres app](https://postgresapp.com/) instead. Download it and start the server, by simply clicking `start` on the PG app itself.

Fire up `psql` and create the dev and test databases with the following commands:
```sh
# create dev DB
CREATE DATABASE node-sequel_development;

# create test DB
CREATE DATABASE node-sequel_test;

# connect to the dev DB
\c node-sequel_development;

# list all available tables
\dt;
```

## Running Migrations
To create tables in your Dev DB, there are migrations in the `migrations` folder to help with this.

Run:
```sh
# create tables
yarn db:migrate
```

## Generating new Migrations
To generate a new migration file, run:
```sh
# pass the right migration name here
yarn migration:generate --name migrationFileName
```

## Create new Models
You may wish to create your own model(s) out of curiosity. Well, there's a command for you in place:

```sh
# provide the appropriate names here. Avoid space between attribute names
yarn model:generate --name ModelName --attributes attrOne:string
```

## Running seeds
To create seed data into your DB, run:
```sh
# this command runs all JS files located in `seeders` folder
yarn db:seed
```

You may wish to create your own seeds data. Add them in the `seeders` by running the following command then run `yarn db:seed` to save them to the DB.
```sh
# generating new seeds - be sure to get the right model name from `models` folder
yarn seed:generate --name modelName
```

## Running server
To start the dev server run:
```sh
# if you have yarn installed
yarn dev

# else - for NPM users
npm run dev
```
