---
title: 'API (4) - Add a Database'
date: '2020-08-11'
---

> Learned how to build a GraphQL API from scratch from [How to GraphQL official tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

- Set up a **SQLite** to persist the data.
- Instead of writing SQL directly, will use Prisma to access the database.
- <span>Prisma</span>
  - An open source database toolkit
  - Provide a clean and type-safe API for submitting database queries.

## Set up the project with Prisma and SQLite

- Install : `npm i -D @prisma/cli`
- Create `prisma/schema.prisma` file = **Database schema**

```js
// prisma/schema.prisma

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Link {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  description String
  url         String
}
```

- Components of Prisma's schema
  - <span>Data source</span> : Specifies database connection.
      - = Tells Prisma you’ll be using SQLite for your database connection.
  - <span>Generator</span> : Indicates that you want to generate Prisma Client.
  - <span>Data model</span> : Defines application models.
      - Each model will be mapped to a table in the underlying database.
      - The `Link` model defines the structure of the `Link` database table.

## Create SQLite database

- <span>SQLite</span>
  - An in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine.
  - No separate server process.
  - Reads and writes directly to ordinary disk files.
  - A complete SQL database with multiple tables, indices, triggers, and views, is contained in a single disk file.

- **Create** a migration from the root directory of your project.
  - `npx prisma migrate save --experimental`
  - Select 'Yes', and type `init` for the 'Name of migration' when getting a prompt asking to create a new database.
  - `prisma/migrations` folder is created.
- **Execute** the migration against your database.
  - `npx prisma migrate up --experimental`

## Generate Prisma Client

`npx prisma generate`
- Now have `/node_modules/@prisma/client` which can be imported and used in the code.
- Create a new file `src/script.js` and run `node src/script.js`

```js
// src/script.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// To send queries to the database
async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'Fullstack tutorial for GraphQL',
      url: 'www.howtographql.com',
    },
  });

  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

// Call the main function
main()
  .catch(e => {
    throw e;
  })
  // Close the database connections when the script terminates.
  .finally(async () => {
    await prisma.disconnect();
  });
```

## Workflow of Prisma to update the data

1. Manually adjust Prisma data model.
2. Migrate database using the `prisma migrate` CLI commands.
3. (Re-)generate Prisma Client.
4. Use Prisma Client in the application code to access the database.