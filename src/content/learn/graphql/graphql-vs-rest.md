---
title: 'GraphQL vs REST'
date: '2020-08-06'
---

> Learned from [How to GraphQL official tutorial](https://www.howtographql.com).

GraphQL is a <span>query language</span> for APIs, not databases.

## GraphQL vs REST

- <span>REST</span>
  - stateless servers & structured access to resources
  - too inflexible to keep up with the rapidly changing requirements of the clients that access them.
- <span>GraphQL</span>
  - more flexibility and efficiency
  - uses a strong type system to define the capabilities of an API.
      - All the types are written down in a **schema** using the GraphQL Schema Definition Language (SDL).
      - Schema serves as the contract between the client and the server to define how a client can access the data.

### With REST

![](https://imgur.com/VRyV7Jh.png)

- Gather the data by accessing multiple endpoints.
  - `/users/<id>` : fetch the initial user data
  - `/users/<id>/posts` : fetch all the posts for a user
  - `/users/<id>/followers` : fetch a list of followers per user.
- Have to make **3 requests** to different endpoints to fetch the required data.
- <span>Overfetching</span> : Endpoints return additional information that’s not needed.
  - Because the only way for a client to download data is by hitting endpoints that return **fixed** data structures.
  - Imagine for example : Need to display a list of users only with their names.
      - Hit the `/users` endpoint and receive a JSON array with user data.
      - Response might contain more info about the users (e.g. birthdays or addresses), which is useless.
- <span>Underfetching</span> and the <span>n+1 problem</span> : A specific endpoint doesn’t provide enough of the required information.
  - The client will have to make additional requests to fetch everything it needs.
  - This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.
  - e.g. To display the last three followers per user
      - Make one request to the `/users` endpoint to get a list of users.
      - and then hit the `/users/<user-id>/followers` endpoint for **each** user.

### With GraphQL

![](https://imgur.com/z9VKnHs.png)

- Simply send a **single** query to the GraphQL server that includes the concrete data requirements.
- Server responds with a **JSON object** where these requirements are met.
  - structure of the server’s response follows precisely the **nested structure** defined in the query.