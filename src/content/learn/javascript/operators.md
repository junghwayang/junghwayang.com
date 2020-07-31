---
title: 'Operators'
date: '2020-04-23'
---

## Arithmetic operators

### `+`

- If one of the operands is a string, the others are converted to a string too.

```js
'1' + 2                 // 12
12 + '3'                // 123
```

- The numbers will be added before being converted to a string.

```js
1 + 2 + '3'             // 33
1 + '2' + 3 + 4         // 1234
1 + 2 + 3 + '4'         // 64
```

- Use same as `Number(...)`

```js
+true             // 1
+''               // 0
+null             // 0

let two = '2'
let three = '3'

console.log(two + three);       // 23
console.log(+two + +three);     // 5
```

### `-`, `*`, `/`

work only with numbers and always convert operands to numbers.

```js
2 - '1'           // 1
'2' * '4'         // 8
'12' / '3'        // 4

let n = 2;
n += 3            // 5
n *= 2            // 10
n *= 1 + 2        // 30 (same as n *= 3)
```

> 이렇게 `'1'+2`는 string이 되고, `'12'/'3'`은 number가 되고, 변수의 data type이 유동적으로 계속 바뀜 = **Dynamic typing** → 이것 때문에 버그가 많이 생겨서 JavaScript에 Type이 더해진 TypeScript가 탄생함! 🎉

### `%` : remainder

```js
5 % 2         // 1
9 % 3         // 0
```

### `**` : exponentiation

```js
3 ** 2        // 9
4 ** (1/2)    // 2
8 ** (1/3)    // 2
```

### `++`, `--` : increment, decrement (by 1)

only applied to **variables**

```js
let counter = 1;

console.log(counter++);       // 1 (returns OLD value. 출력먼저하고 1증가시킴)
console.log(2 * counter++);   // 4 (counter++ returns 2)
console.log(counter);         // 3

console.log(++counter);       // 4 (returns NEW value. 1증가시키고나서 출력)
console.log(counter);         // 4
console.log(2 * ++counter);   // 10 (counter++ returns 5)
console.log(counter);         // 5

console.log(counter--);       // 5
console.log(counter);         // 4

console.log(2++);             // SyntaxError
```

## Assignment operators

### `=` : assignment

`x = value` writes the `value` into `x` and then returns a value.

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a);            // 3
console.log(c);            // 0
```

## Comparison operators

### `>`, `<`, `>=`, `<=`, `==`, `===`

```js
3 > 1                  // true
'Z' > 'A'              // true (in the dictionary order)
'Bee' > 'Be'           // true
'3' > 1                // true (if types are different, all become a number)
'2' > '12'             // true (dictionary comparison as both are strings)

1 == '01'              // true
0 == false             // true
null == undefined      // true (null and undefined equal each other only)

1 === '01'             // false (data type also should be same)
0 === false            // false
null === undefined     // false
```

## Conditional operators

### `?` : ternary operator

```js
let isSunny = true;
isSunny ? console.log('Yay!') : console.log('I miss blue sky..');     // Yay!

const marks = 90;
const result = (marks > 70) ? 'pass' : 'fail';       // "pass"

const result = (marks < 40) ? 'Unsatisfactory' :
              (marks < 60) ? 'Average' :
              (marks < 80) ? 'Good' :
              'Excellent';

function greeting (user) {
  const name = user ? user.name : 'stranger';
  console.log(`Hi, ${name}`);
}

greeting({ name: 'Rosie' });         // Hi, Rosie
greeting();                          // Hi, stranger
```

### switch

replace multiple `if` checks

```js
let a = '2';
let b = 0;

switch (+a) {
  case b + 2:                      // if (+a === b + 2)
    console.log('Right!');
    break;

  case b + 1:                      // grouped two cases
  case b + 3:
    console.log('Close!');
    break;

  default:                         // default is not necessary
    console.log('Try again');
}
```

## Logical operators

### `||` : OR

```js
true || false       // true
false || false      // false
1 || 0              // true (converted to a boolean)

let hour = 9;
if (hour < 10 || hour > 18) {
  console.log('Closed');
}
```

- Return the **first truthy value** or the last one if all falsy.

```js
null || 0 || 2 || true        // 2 (the first truthy value)
undefined || '' || null       // null (all falsy, returns the last value)

let x;
true || (x = 1);
console.log(x);               // undefined (because (x = 1) not evaluated)

let username = '';
let defaultName = username || 'guest';       // guest
```

### `&&` : AND

```js
true && false        // false
true && true         // true
```

- Return the **first falsy value** or the last one if all truthy.

```js
1 && 0                   // 0 (the first falsy value)
1 && 5                   // 5 (all truthy, returns the last value)
1 && 2 && null && 3      // null
```

- Below two are the same

```js
let x = 1;

// 1st
(x > 0) && console.log('Greater than zero!');

// 2nd
if (x > 0) {
  console.log('Greater than zero!');
}
```

- Precedence of `&&` is higher than `||`

`a && b || c && d` = `(a && b) || (c && d)`

### `!` : NOT

- Precedence of `!` is the highest of all logical operators, so it always executes first.

```js
!true            // false
!0               // true
!!'Hi'           // true (convert a value to boolean. same as Boolean('Hi'))
!!null           // false (same as Boolean(null))
```