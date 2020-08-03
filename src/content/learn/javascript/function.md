---
title: 'Function'
date: '2020-04-27'
---

- Structure the code, make it readable, and reuse them without repeat.
- name starts with a **verbal** prefix
  - e.g. showMessage, getAge, calcSum, createForm, checkPermission
- Higher order functions
  - functions that can take other functions as inputs.
- Function안에서 `this` 쓸땐 arrow function 쓸 수 없음
  - arrow functions do not have their own 'this' context.
  - 대신 `function() { }` 써주기

## Function Declaration

```js
const username = 'Rosie';

function showMessage () {
  const message = `Hi, ${username}`;    // can access global variable 'username'
  console.log(message);
}

showMessage();                         // Hi, Rosie
console.log(message);                  // ReferenceError (only accessed inside function)
```

```js
let username = 'Rosie';

function showMessage () {
  username = 'Junghwa';                // also can modify global variable
  const message = `Hi, ${username}`;
  return message;
}

console.log(username);                 // Rosie
console.log(showMessage());            // Hi, Junghwa
console.log(username);                 // Junghwa (value was changed by function)
```

## Function declaration vs Function expression

- Function <span>declaration</span>

```js
sum(1, 2);                         // 3
function sum1 (a, b) {
  return a + b;
}
```

- Function <span>expression</span> is created when the execution reaches it and can be used only after creation

```js
sum(1, 2);                 // ReferenceError: Cannot access 'sum' before initialization
const sum = function (a, b) {
  return a + b;
}

// Use arrow function
const sum = (a, b) => a + b;

// 1 arg (can omit '()')
const double = n => n * 2;

// no arg (cannot omit '()')
const sayHi = () => alert('Hi');
```

- When JavaScript prepares to run the script, it first looks for **global Function Declarations** in it and creates the functions. We can think of it as an <span>initialization stage</span>.
- Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

## Parameters, Arguments

```js
// if 'from' parameter is not passed, get default value 'stranger'
function showMessage (message, from = 'stranger') {
  console.log(`${message} from ${from}`);
}

showMessage('Hi');                // Hi from stranger
```

- `message`, `from` = <span>parameters</span> : variables in the function declaration
- `'Hi'` = <span>arguments</span> : values passed to function when function is called

## Arrow function

- No function body + only a return value → omit the keyword `return` and `{ }` surrounding the code.
- Simplify smaller functions into one-line statements
- e.g. `const func = () => console.log('Hello');`

## Callback functions

```js
function ask (question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  'Do you agree?',
  () => console.log('You agreed.'),
  () => console.log("You didn't agree.")
);
```