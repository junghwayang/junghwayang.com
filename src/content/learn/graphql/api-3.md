---
title: 'API (3) - Add a Mutation'
date: '2020-08-10'
---

> Learned how to build a GraphQL API from scratch from [How to GraphQL official tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

## Add a mutation

### Extend the schema

- Add `Mutation` to post new links

```graphql
# src/schema.graphql

type Query {
  info: String!
  feed: [Link!]!         # To retrieve a list of `Link` elements
}

type Mutation {
  post(url: String!, description: String!): Link!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
```

### Implement the resolver function

- Add `Mutation` resolver to `resolvers`

```js
// src/index.js

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of tutorial`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    }
  },
};
```

- `args` : carries the arguments for the operation.

```graphql
# Send mutation
mutation {
  post(
    url: "www.prisma.io"
    description: "Prisma replaces traditional ORMs"
  ) {
    id
  }
}

# Get response
{
  "data": {
    "post": {
      "id": "link-1"
    }
  }
}
```

### Basic CRUD

```graphql
# src/schema.graphql

type Query {
  info: String!
  feed: [Link!]!         # To retrieve a list of `Link` elements
  link(id: ID!): Link    # To fetch a single link by its 'id'
}

type Mutation {
  # Post a new link
  post(url: String!, description: String!): Link!

  # Update a link
  updateLink(id: ID!, url: String, description: String): Link

  # Delete a link
  deleteLink(id: ID!): Link
}

type Link {
  id: ID!
  description: String!
  url: String!
}
```