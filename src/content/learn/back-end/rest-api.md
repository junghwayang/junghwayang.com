---
title: 'REST API'
date: '2020-07-17'
---

- REST = **RE**presentational **S**tate **T**ransfer
- Architectural style for distributed hypermedia systems.

## Guiding Principles

6 guiding principles must be followed to become **RESTful**.

1. Client-server
2. Stateless
3. Cacheable
4. Uniform interface
5. Layered system
6. Code on demand

> Find out details [here](https://restfulapi.net/rest-architectural-constraints/)

## Caching in REST APIs

To become RESTful, API should be <span>cacheable</span>.

- `GET` requests should be cacheable by default.
- `POST` requests are not cacheable by default.
  - But can be made cacheable if either an `Expires` header or a `Cache-Control` header with a directive is added to the response to explicitly allow caching.
- Responses to `PUT` and `DELETE` requests are not cacheable at all.

### HTTP response headers to control caching

- `Expires` : specify an absolute expiry time
  - `Expires: Fri, 17 Jul 2020 10:19:00 GMT`
- `Cache-Control` : holds directives for caching
  - `Cache-Control: max-age=3600`

### Validator

> Cacheable responses (to `GET` or to `POST` request) should also include a validator

- `ETag` : opaque string token. When the resource changes, the ETag changes accordingly.
  - `ETag: "abcd1234567n34jv"`
- `Last-Modified` : indicates when the associated resource last changed.
  - `Last-Modified: Fri, 17 Jul 2020 10:19:00 GMT`
  - `Date` header indicates when the response was generated.