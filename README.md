
## nestjs crud mongodb

This repository is created with the purpose of creating a basic API with NestJS, its use is recommended for a small project and to be able to test some important features of NestJS

## Tech Stack

**Server:** NestJS, OpenApi, Express, MongoDB, Mongoose

## API Reference

## Get all items

Retrieves all items.

| Method | Endpoint       |
| ------ | -------------- |
| GET    | `/api/todo`    |

## Get item

Retrieves a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to fetch |

## Create item

Creates a new item.

| Method | Endpoint       |
| ------ | -------------- |
| POST   | `/api/todo`    |

| Body Parameters | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `name`          | `string` | **Required**. Name of the item    |
| `isActive`      | `boolean`| Indicates if the item is active   |

## Update item

Updates a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| PUT    | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to update |

| Body Parameters | Type     | Description                          |
| :-------------- | :------- | :------------------------------------ |
| `name`          | `string` | Name of the item (optional)           |
| `isActive`      | `boolean`| Indicates if the item is active       |

## Partial Update item

Partially updates a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| PATCH  | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to update |

| Body Parameters | Type     | Description                          |
| :-------------- | :------- | :------------------------------------ |
| `name`          | `string` | Name of the item (optional)           |
| `isActive`      | `boolean`| Indicates if the item is active       |

## Delete item

Deletes a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| DELETE | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to delete |

## Installation

Install nestjs-crud-mongodb with npm

```bash
  cd nestjs-crud-mongodb
  npm i
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`
`BASE_URL=http://localhost:3000`
`DATABASE_URL='mongodb://admin:admin@localhost:27017/todo?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1'`

## Run Locally

Clone the project

```bash
  git clone https://github.com/sumeriocode/NestJS-Crud-MongoDB 
```

Go to the project directory

```bash
  cd nestjs-crud-mongodb
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

Build

```bash
  npm run build
```

## Authors

- [@sumeriocode](https://www.github.com/sumeriocode)
