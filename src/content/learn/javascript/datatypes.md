---
title: 'Data Types'
date: '2020-04-22'
---

## 1. Number

- integer or floating-point
- special numeric values : `Infinity`(0으로 나눌때), `-Infinity`, `NaN`(숫자가 아닌걸 연산할때)

## 2. BigInt

- integers of arbitrary(임의의) length
- created by appending `n` to the end

## 3. String

- surrounded by quotes - `' '`, `" "`
- template literals

```js
const name = 'Rosie';
const letter = `Dear ${name}
Hello, ${name}. How are you?`;
```

## 4. Boolean

- false : 0, `null`, `undefined`, `NaN`, `''`(no space)
- true : any other value

## 5. null

- represents 'nothing', 'empty' or 'value unknown'.

## 6. undefined

- represents 'value is not assigned after declaration'.

## 7. Object

- store collections of data and more complex entities.
- `const user = { name: 'Junghwa', email: 'junghwa@gmail.com' }`
- object를 const로 할당해도 object안에 들어있는 변수는 변경가능. → `user.name = 'Rosie'`

## 8. Symbol

- create unique identifiers for objects

# 🔄 Type Conversions

```js
String(10)                          // '10'

Number('123')                       // 123
const num = '5' * 1;                // 숫자 5 (string -> number로 쉽게 바꾸는 trick)
Number('Hi') or Number(undefined)   // NaN
Number(false) or Number(null)       // 0
Number(true)                        // 1

parseFloat(30)                      // 30 (string to floating-point number)

Boolean(1) or Boolean('Hi' or '0' or ' ')               // true
Boolean(0) or Boolean('' or null or undefined or NaN)   // false
```