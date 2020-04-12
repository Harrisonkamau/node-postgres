# Node Sequelize
### Table of contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Generating new migrations](#generating-new-migrations)
4. [Running migrations](#running-migrations)
5. [Creating new models](#create-new-models)
6. [Running seeds](#running-seeds)
7. [Running dev server](#running-dev-server)
8. [Migrations troubleshooting](#migration-troubleshooting-and-scripts)

### Introduction
Basic setup for a Node.js project using PostgreSQL database and Sequelize as the ORM

### Prerequisites
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

### Generating new Migrations
To generate a new migration file, run:
```sh
# pass the right migration name here
yarn migration:generate --name migrationFileName
```

### Running Migrations
To create tables in your Dev DB, there are migrations in the `migrations` folder to help with this.

Run:
```sh
# create tables
yarn db:migrate
```

**Querying all migrations already run**

Sequelize keeps track of all migrations that have been run. This information is saved in the `SequelizeMeta` table.

Run this command to view them:
```sh
psql -h localhost -d node-sequel_development -q -f sql/migrations.sql
```

### Create new Models
You may wish to create your own model(s) out of curiosity. Well, there's a command for you in place:

```sh
# provide the appropriate names here. Avoid space between attribute names
yarn model:generate --name ModelName --attributes attrOne:string
```

### Running seeds
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

### Running dev server
To start the dev server run:
```sh
# if you have yarn installed
yarn dev

# else - for NPM users
npm run dev
```

### Migration troubleshooting and scripts
There are several yarn scripts to undo migrations:
To revert the last migration run, use this command:
```sh
# reverts the last migration run
yarn db:migrate:undo
```

To undo upto a given migration use:
```sh
# provide the migration file name
yarn db:migrate:undo:all --to migrationFileName

# Example
db:migrate:undo:all --to 20200213212819-create-user.js
```
**If you want to manually create users table**

```sh
# in case you need to manually create 'users' table
psql -h localhost -d node-sequel_development -q -f sql/create-users-table.sql
```
The `sql` folder located at the root of the app has more SQL commands.

[SCROLL TO TOP](#node-sequelize)