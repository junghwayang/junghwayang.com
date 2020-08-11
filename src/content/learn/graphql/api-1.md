---
title: 'API (1) - Create a Server and Build a Schema'
date: '2020-08-08'
---

> Learned how to build a GraphQL API from scratch from [How to GraphQL official tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

- First, create the project
  - Create the directory for GraphQL server
  - `npm init`

## Create a raw GraphQL server

- Install dependency : `npm i graphql-yoga`
- `graphql-yoga`
  - A fully-featured GraphQL server.
  - Based on Express.js and a few other libraries to help you build production-ready GraphQL servers.
- Create file `src/index.js` and run `node src/index.js`
- Open `localhost:4000` in a browser and check GraphQL playground.

```js
// src/index.js

const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  // schema goes here
`;

const resolvers = {
  Query: {
    info: () => `This is the API of tutorial`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
```

- `typeDefs` : defines GraphQL schema
- `resolvers` : actual implementation of the GraphQL schema.
  - its structure is identical to the structure of the type definition inside `typeDefs`.
- Schema and resolvers are bundled and passed to the `GraphQLServer` which is imported from `graphql-yoga`.
  - This tells the server what API operations are accepted and how they should be resolved.

## Build a schema

```js
// src/index.js

const typeDefs = `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }

  type User {
    id: ID!
    name: String!
  }
`;
```

- `[User!]!`
  - returns a **list** of `User` elements.
  - List cannot be `null` & `User` elements cannot be `null`.
  - = Always receive an empty list or a list containing non-null `User` objects.

```graphql
# Query for all users
query {
  users {
    id
    name
  }
}

# Query a single user by their id
query {
  user(id: "user-1") {
    id
    name
  }
}

# Create a new user
mutation {
  createUser(name: "Bob") {
    id
    name
  }
}
```