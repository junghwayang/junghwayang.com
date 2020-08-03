---
title: 'Variables'
date: '2020-04-21'
---

- `var`는 old한 문법. 쓰면 안되는 이유?
  - <span>var hoisting</span> = declaration을 밑에서 위로 옮겨줌 → declare 되기도 전에 값을 호출할 수 있음
  - block scope를 무시함 = block안에서 declare해도 block밖에서 호출이 됨
  - overwrite variable declarations without an error

### Variable naming

- should have a clean, obvious meaning, describing the data that it stores.
- only contain - letters, digits, `$`, `_` (first character cannot be a digit)
- use <span>camelCase</span>
- case matters - `apple` and `AppLE` are different.

## `let` : changeable

A variable with the same name can only be **declared** once, but value can be changed.

```js
let message;               // can declare without assignment
console.log(message);      // undefined
message = 'Hello!';        // Hello!

let message = 'Hello!';
console.log(message);      // Hello!
message = 'Hi!';
console.log(message);      // Hi!
```

## `const` : unchanging (read-only)

> 가능하면 `let` 대신 `const` 쓰기! (나중에 바꿔야할 필요 있을때만 `let` 쓰기)

```js
// Value must be assigned when declared.
const user;                // SyntaxError

// Cannot be reassigned
const user = 'Rosie';
user = 'Junghwa';          // TypeError

// Use capital letters and _ for difficult-to-remember values
const COLOR_RED = '#F00'
const COLOR_BLUE = '#00F'

let color = COLOR_RED      // easier to remember and more meaningful
```

- Objects, arrays, functions assigned to a variable using `const` are still mutable.
  - `const` doesn't protect data from mutation.
  - To prevent data mutation, use `Object.freeze`
  - Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```js
let fruits = {
  apple: 'red',
  banana: 'yellow'
};

Object.freeze(fruits);

fruits.apple = 'green';        // will be ignored. Mutation not allowed
fruits.mango = 'yellow';       // will be ignored. Mutation not allowed

console.log(fruits);           // {apple: "red", banana: "yellow"}
```