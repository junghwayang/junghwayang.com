---
title: 'Apollo GraphQL'
date: '2020-08-05'
---

> Learned from [Apollo official tutorial](https://www.apollographql.com/docs/tutorial/introduction).

# 1. Build a schema

Every data graph uses a <span>schema</span> to define the types of data it includes.

## Set up Apollo server

Apollo server helps you implement your data graph's API.

### Install

- `npm init`
- Change `package.json` same as below

```json
"main": "src/index.js",
"scripts": {
  "test": "jest",
  "start": "nodemon src/index.js",
  "start:ci": "node src/index.js"
},
"jest": {
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/__utils"
  ]
}
```

- Install all dependencies
- To start Apollo server : need `apollo-server` & `graphql`

```json
"dependencies": {
  "apollo-datasource": "^0.1.3",
  "apollo-datasource-rest": "^0.1.5",
  "dotenv": "^6.2.0",
  "apollo-server": "^2.15.0",
  "apollo-server-testing": "^2.15.0",
  "graphql": "^14.6.0",
  "isemail": "^3.1.3",
  "nodemon": "^1.18.4",
  "sequelize": "^4.39.0",
  "sqlite3": "^4.0.3"
},
"devDependencies": {
  "apollo-link": "^1.2.3",
  "apollo-link-http": "^1.5.5",
  "jest": "^23.6.0",
  "nock": "^10.0.2",
  "node-fetch": "^2.2.1"
},
```

### Create server

```js
// src/index.js

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });
```

## Define schema's types

- GraphQL schema defines what types of data a client can read and write to your data graph.
- Schemas are **strongly typed**, which unlocks powerful developer tooling.
- Schema's structure should support the actions that clients will take.

```js
// src/schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
  # schema goes here
`;

module.exports = typeDefs;
```

### Object types

Most of the definitions in a GraphQL schema are <span>object</span> types. Each object type you define should represent an object that an application client might need to interact with.

```graphql
const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission              # refer to other object types
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String       # takes 'size' argument
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;
```

- `Launch` object type has a collection of <span>fields</span>, and each field has a type of its own.
- A field's type can be either an **object** type or a **scalar** type.
  - Scalar type : a primitive (like `ID`, `String`, `Boolean`, or `Int`) that resolves to a single value.
- `!` after a field's type = this field's value can never be **null**.
- Type is in `[ ]` = it's an **array** of the specified type.
  - If `[ ]` has an `!` after it = the array cannot be null, but it **can** be empty.

### The `Query` type

Queries enable clients to <span>fetch</span> data. (not to *modify* data)

```graphql
# inside typeDefs

type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}
```

- This `Query` type defines three available queries for clients to execute.
  - `launches` query : will return an **array** of all upcoming Launches.
  - `launch` query : will return a single Launch that **corresponds to the id argument** provided to the query.
  - `me` query : will return details for the User that's currently logged in.

### The `Mutation` type

Mutations enable clients to <span>modify</span> data.

```graphql
# inside typeDefs

type Mutation {
  bookTrips(launchIds: [ID]!): TripUpdateResponse!
  cancelTrip(launchId: ID!): TripUpdateResponse!
  login(email: String): String                        # login token
}

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
```

- This `Mutation` type defines three available mutations for clients to execute.
  - `bookTrips` mutation : enables a logged-in user to book a trip on one or more Launches (specified by an array of launch IDs).
  - `cancelTrip` mutation : enables a logged-in user to cancel a trip that they previously booked.
  - `login` mutation : enables a user to log in by providing their email address.
- The `bookTrips` and `cancelTrip` mutations return the same object type: a `TripUpdateResponse`.
  - It is recommended to define special object types specifically for mutation responses.
- `TripUpdateResponse` contains an array of launches that were modified by the mutation.
  - It's good practice for a mutation to **return whatever objects it modifies**.
  - so the requesting client can update its cache and UI without needing to make a followup query.

## Run the server

```js
// src/index.js

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

- Run `npm start`
- Apollo server is running on port 4000.

### GraphQL playground

- `localhost:4000` to open GraphQL playground, an IDE that enables you to introspect schema and test out queries.
- Introspection should be **disabled** for a production GraphQL server.
  - Apollo Server disables introspection automatically when `process.env.NODE_ENV=production`.

# 2. Connect to data sources

- Connect data sources to Apollo Server.
- A <span>data source</span> is any database, service, or API that holds the data to populate schema's fields.
- GraphQL API can interact with **any combination** of data sources.
- Apollo provides a `DataSource` class that we can extend to handle interaction logic for a particular type of data source.

## Connect a REST API

To connect a REST API to Apollo server, use `RESTDataSource` class from `apollo-datasource-rest` package.

```js
// src/datasources/launch.js

const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }

  // Add methods here
}

module.exports = LaunchAPI;
```

- `RESTDataSource` : handles <span>fetch</span>ing data from a REST API
  - automatically caches responses from REST resources with no additional setup = **partial query caching**
  - It enables you to take advantage of the **caching logic** that the REST API already exposes.
  - provides **helper methods** that correspond to HTTP verbs like `GET` and `POST`.

### Write data-fetching methods

> `LaunchAPI` data source needs methods that enable it to fetch the data that incoming queries will request.

- `getAllLaunches` method : get a list of all launches.
  - `this.get('launches')` : sends a `GET` request to 'baseURL/launches' and stores the array of returned launches in `response` variable.
  - `this.launchReducer` : transforms each returned launch into the format expected by schema.
      - If there are no launches, an empty array is returned.
      - Using a reducer enables the `getAllLaunches` method to remain concise as a definition of a `Launch` potentially changes and grows over time.
      - also helps with testing the LaunchAPI class.

```js
// src/datasources/launch.js

async getAllLaunches() {
  const response = await this.get('launches');
  return Array.isArray(response)
    ? response.map(launch => this.launchReducer(launch))
    : [];
}

launchReducer(launch) {
  return {
    id: launch.flight_number || 0,
    cursor: `${launch.launch_date_unix}`,
    site: launch.launch_site && launch.launch_site.site_name,
    mission: {
      name: launch.mission_name,
      missionPatchSmall: launch.links.mission_patch_small,
      missionPatchLarge: launch.links.mission_patch,
    },
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type,
    },
  };
}
```

- `getLaunchById` method : fetch an individual launch by its ID.
  - takes a launch's flight number and returns the data for the associated launch.
- `getLaunchesByIds` method : returns the result of multiple calls to `getLaunchById`.

```js
async getLaunchById({ launchId }) {
  const response = await this.get('launches', { flight_number: launchId });
  return this.launchReducer(response[0]);
}

getLaunchesByIds({ launchIds }) {
  return Promise.all(
    launchIds.map(launchId => this.getLaunchById({ launchId })),
  );
}
```

## Connect a database

- <span>Writable</span> data source : store application data (e.g. user identities, reservations)
  - Connect to a SQLite database and use Sequelize for our ORM.
  - `npm i sqlite3 sequelize`
- Code is SQL-specific, not related to Apollo.
- Check code for `src/datasources/user.js` - [Link](https://github.com/apollographql/fullstack-tutorial/blob/master/start/server/src/datasources/user.js).

## Add data sources to Apollo Server

- If use `this.context` in a datasource, it's critical to create a `new` instance in the `dataSources` function to the `ApolloServer`, rather than sharing a single instance.
- Otherwise, `initialize` might be called during the execution of asynchronous code for a particular user, replacing `this.context` with the context of another user.

```js
// src/index.js

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');     // To set up SQLite database

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({
  typeDefs,

  // To connect instances of LaunchAPI and UserAPI to graph.
  // This option returns an object containing newly instantiated data sources.
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```