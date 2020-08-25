---
title: 'Express - Static Files'
date: '2020-08-24'
---

### `express.static`

- To serve static files such as images, CSS files, and JavaScript files.
  - e.g. `http://localhost:3000/css/style.css`

```js
// Serve static files in a directory named 'public'
app.use(express.static('public'));
```

- To use **multiple static assets directories**, use `express.static` multiple times.
- Express looks up the files in the order in which you set the static directories.

```js
app.use(express.static('public'));
app.use(express.static('files'));
```

- To create a **virtual path prefix** where the path does not actually exist in the file system, specify a **mount path** for the static directory.
- Load the files from the `/static` path prefix.
  - e.g. `http://localhost:3000/static/css/style.css`

```js
app.use('/static', express.static('public'));
```

- The path is relative to the directory.
- It’s safer to use the **absolute path** of the directory.

```js
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));
```