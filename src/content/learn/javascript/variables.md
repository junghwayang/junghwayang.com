---
title: 'Variables'
date: '2020-04-21'
---

- `var`는 old한 문법. 쓰면 안되는 이유?
  - <span>var hoisting</span> = declaration을 밑에서 위로 옮겨줌 → declare 되기도 전에 값을 호출할 수 있음
  - block scope를 무시함 = block안에서 declare해도 block밖에서 호출이 됨

### Variable naming

- should have a clean, obvious meaning, describing the data that it stores.
- only contain - letters, digits, `$`, `_` (first character cannot be a digit)
- use <span>camelCase</span>
- case matters - `apple` and `AppLE` are different.

## `let` : changeable

```js
let message;               // can declare without assignment
console.log(message);      // undefined
message = 'Hello!';        // Hello!

let message = 'Hello!';
console.log(message);      // Hello!
message = 'Hi!';
console.log(message);      // Hi!
```

## `const` : unchanging

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