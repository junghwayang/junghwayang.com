---
title: 'Express'
date: '2020-07-24'
---

```js
const express = require('express');
const app = express();
```

## Routes

`app.METHOD(PATH, HANDLER)`

- METHOD : http method in lowercase
- PATH : relative path on the server (it can be a string, or even a regular expression)
- HANDLER : function that Express calls when the route is matched.
  - `(req, res) => { ... }`
  - `req` = request object
  - `res` = response object

## Serve an HTML file

```js
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
```

## Serve static assets

Place static assets (stylesheets, scripts, images). In Express, you can put in place this functionality using the middleware `express.static(path)`, where the `path` parameter is the absolute path of the folder containing the assets.

```js
app.use(express.static('public'));
```

## Serve JSON on a specific route

`res.json()`
- converts a valid JavaScript object into a string.
- sets the appropriate headers to tell your browser that you are serving JSON.
- sends the data back.

## `.env` file

- used to store data that you want to keep private or hidden.
- `process.env.VAR_NAME`
  - variable names are all uppercase
  - words separated by an underscore `_`.
- shell file : no need to wrap names/values in quotes.
- no space around `=`. e.g. `VAR_NAME=value`

## Implement a Root-Level Request Logger Middleware

- Middleware functions
  - Functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle.
  - Functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method `app.use(path, middlewareFunction)`. The first `path` argument is optional. If you don’t pass it, the middleware will be executed for all requests.
  - Add information to the request or response objects.
  - Also end the cycle by sending a response when some condition is met.
  - If they don’t send the response when they are done, they **start the execution of the next function in the stack**. - This triggers calling the 3rd argument, `next()`.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
```

- To mount a middleware function at root level : use `app.use(middleware)`
- If you want a function to be executed only for `POST` requests, you could use `app.post(middleware)`.
- Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.

can be mounted at a specific route using app.METHOD(path, middlewareFunction). Middleware can also be chained inside route definition.

### Chain middleware

```js
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time
  });
});
```

## Route Parameter : `req.params`

route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}

## Query Parameter : `req.query`

Encode the data after the route path, using a query string. 

The query string is delimited by a question mark (?), and includes field=value couples.  Each couple is separated by an ampersand (&). 

route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}

```js
app.get('/', (req, res) => {
  const { userId, bookId } = req.query;
  res.json({
    userId,       // userId: '546'
    bookId        // bookId: '6754'
  });
});
```

## Use body-parser to Parse POST Requests

`POST` : used to send client data with HTML forms.

- the data doesn’t appear in the URL, it is hidden in the request body.
- This is a part of the HTML request, also called payload.
- To parse the data coming from POST requests, you have to install the body-parser package. 