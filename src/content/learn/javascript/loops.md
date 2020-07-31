---
title: 'Loops'
date: '2020-04-25'
---

## while

While the condition is truthy, the code from the loop body is executed.

```js
let i = 0;
while (i < 3) {
  console.log(i);               // print 0, then 1, then 2
  i++;
}

let i = 3;
while (i) console.log(i--);     // {} are not required for a single-line body
```

## do ... while

- Check condition below the loop body
- Use when you want loop body to execute **at least once** regardless of the condition.

```js
let i = 0;

do {                      // execute body first, then check condition
  console.log(i);         // print 0, then 1, then 2
  i++;
} while (i < 3)
```

## for

for (`begin`; `condition`; `step`)

```js
let i = 0;
for (; i < 3; i++) {              // i is already assigned. no need for 'begin'
  console.log(i);                 // print 0, then 1, then 2
}
console.log(i);                   // 3 (step(i++) is executed after body)


let i = 0;
for (; i < 3;) {                  // same as while (i < 3)
  console.log(i++);               // print 0, then 1, then 2
}


for (let i = 0; i < 3; i++) {
  console.log(i);                 // print 0, then 1, then 2
}
console.log(i);                   // ReferenceError (i is not defined)
```

## forEach

```js
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// a
// b
// c
```

## break

stop the whole loop immediately

```js
let i = 0;

while (true) {           // infinite loop needs break
  if (i === 3) {
    break;
  }
  i++;
}

console.log(i);          // 3
```

## continue

stop the current iteration and force the loop to start a new iteration

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;               // skip the remaining part of the body
  console.log(i);                         // print 1, then 3, 5, 7, 9
}

(i > 0) ? console.log(i) : continue;      // SyntaxError (can't use with ?)
```