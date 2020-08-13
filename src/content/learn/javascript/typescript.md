---
title: 'TypeScript'
date: '2020-08-12'
---

> Learned from [TypeScript official tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

- TypeScript adds its own layer on top of JavaScript. This layer is the TypeScript <span>type system</span>.

## Types by Inference

- TypeScript builds a type-system which accepts JavaScript code but has types.
- This offers a type-system without needing to add extra characters to make types explicit in the code.
- Just by `let helloWorld = 'Hello World';`, TypeScript knows that `helloWorld` is a `string`.

## Defining Types

- Two syntaxes for building types: `interface` and `type`
  - Should prefer `interface`, and use `type` when you need specific features.
- `interface` declaration : An explicit way to describe this object’s shape.

```ts
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",     // cannot use other name for property like 'username'
  id: 0,
};
```

- `interface` declaration can also be used with classes.

```ts
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

- TypeScript has more primitive types than JavaScript.
  - `any` : allow anything
  - `unknown` : ensure someone using this type declares what the type is
  - `never` : not possible that this type could happen
  - `void` : a function which returns `undefined` or has no return value

## Composing Types

### Unions

Declare that a `type` could be one of many types.

```ts
// Describe a boolean type as being either true or false.
type MyBool = true | false;

// Describe a set of strings or numbers literal.
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Function accepts an array or a string.
function getLength(obj: string | string[]) {
  return obj.length;
}

// Use 'typeof' to differentiate between a string and an array.
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  } else {
    return obj;
  }
}
```

### Generics

e.g. for array,

- An array without generics could contain anything.
- An array **with generics** can describe what values are inside in the array.

```ts
type StringArray = Array<string>;     // only strings are allowed in the array
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Declare your own types which use generics.
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

// 'object' is a string
const object = backpack.get();

backpack.add(23);       // Cannot pass a number
```

## Structural Type System

- **duck typing** or **structural typing** : Type checking focuses on the shape which values have.
- If two objects have the same shape, they are considered the same.

```ts
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
printPoint(point);             // "12, 26"
```

- The `point` variable is never declared to be a `Point` type, but TypeScript compares the shape of `point` to the shape of `Point` in the type-check. Because they both have the same shape, then it passes.