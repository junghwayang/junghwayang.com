---
title: 'Promise'
date: '2020-08-04'
---

use it to make a promise to do something, usually asynchronously. 
Promise is a <span>constructor</span> function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`. These are methods used to determine the outcome of the promise.

A promise has three states: `pending`, `fulfilled`, and `rejected`.
`resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

## Handle a Fulfilled Promise with `then`

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with `resolve`. 

```js
myPromise.then(result => {
  console.log(result);
});
```

`result` comes from the argument given to the `resolve` method.

## Handle a Rejected Promise with `catch`

`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's `reject` method is called. 

```js
myPromise.catch(error => {
  console.log(error);
});
```

> the `then` and `catch` methods can be chained to the promise declaration if you choose.

