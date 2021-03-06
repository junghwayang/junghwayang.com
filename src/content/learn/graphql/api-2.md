---
title: 'API (2) - Implement a Query'
date: '2020-08-09'
---

> Learned how to build a GraphQL API from scratch from [How to GraphQL official tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

## Implement a query

- Implement a `feed` query to retrieve a list of `Link` elements.

- How to add a new feature to the API
  1. Extend the GraphQL schema definition with a <span>new root field</span>. (and new object types, if needed)
  2. Implement corresponding <span>resolver functions</span> for the added fields.

> This process is 'schema-driven' or 'schema-first' development.

### Extend the schema

- Move `typeDefs` to separate file `src/schema.graphql`

```graphql
# src/schema.graphql

type Query {
  info: String!
  feed: [Link!]!         # To retrieve a list of `Link` elements
}

type Link {
  id: ID!
  description: String!
  url: String!
}
```

```js
// src/index.js

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});
```

### Implement resolver functions

```js
// src/index.js

// To store the links at runtime
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

const resolvers = {
  Query: {
    info: () => `This is the API of tutorial`,
    // Add a new resolver (name 'feed' is same as in a schema)
    feed: () => links,
  },
  // This 'Link' is just for explanation. No need to write this.
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
};
```

- In `Query` : invokes the `feed` resolver and returns the entire data stored in `links`.
- `parent` (= `root`) : the result of the previous resolver execution level.
- In `Link`
  - `feed` returns a list of `Link` elements.
  - invoke the resolvers of the `Link` type for each element.
  - In all of the three `Link` resolvers, the incoming `parent` object is the element inside the `links` list.

```graphql
# Send query : invoke the resolver functions for the fields
query {
  feed {
    id
    url
    description
  }
}

# Get response
{
  "data": {
    "feed": [
      {
        "id": "link-0",
        "url": "www.howtographql.com",
        "description": "Fullstack tutorial for GraphQL"
      }
    ]
  }
}
```

