---
title: 'Object'
date: '2020-05-02'
---

> Used to store keyed collections of various data and more complex entities.

- **OOP** (Object-Oriented Programming) : Code using objects to represent entities.
- created with `{ }` with list of properties.
- **Property** = 'key: value' pair
  - `key` (property name) : string (or symbol)
  - `value` : can be any type
- Other kinds of objects : `Array`, `Date`, `Error`, ...

```js
// 'object constructor' syntax
const user = new Object();

// 'object literal' syntax (more common)
const user = {
  name: 'Junghwa',
  age: 30,
  isAdmin: true,
  'likes dancing': true,         // To use multiword, must be quoted
};

console.log(user.age);                   // 30
console.log(user.likes dancing);         // SyntaxError
console.log(user['likes dancing']);      // true

let key = 'name';
console.log(user.key);          // undefined
console.log(user[key]);         // Junghwa
```

```js
let fruit = 'apple';

const groceryList = {
  [fruit]: 6,
  ['pine' + fruit]: 1,
};

console.log(groceryList.apple);             // 6
console.log(groceryList.pineapple);         // 1

// To remove a property
delete user.age;
```

> When property names are known and simple, `.` is used. And if we need something more complex, then we switch to `[ ]`.

## Test property existence : `in`

```js
const user = {
  name: 'Junghwa',
};

console.log('name' in user);              // true

console.log(user.age === undefined);      // true
console.log('age' in user);               // false
```

- `undefined`과 비교하면 되는데 `in` operator가 필요한 이유
  - `name: undefined`인 경우,
  - `user.name === undefined`도 true지만,
  - `'name' in user`이 true라 'name' property가 존재하는걸 확실히 알 수 있음
  - value값이 `undefined`인 경우는 드물지만 그래도 알아두면 좋음

## Loop all keys of an object : `for...in`

```js
const user = {
  name: 'Junghwa',
  age: 30,
  isAdmin: true,
};

// can use any name instead of key. (e.g. let prop in obj)
for (let key in user) {
  console.log(key);             // name, age, isAdmin
  console.log(user[key]);       // Junghwa, 30, true
}
```

- `for...in` loop으로 key값을 불러올때,
  - integer는 sort되고, 다른 data type은 object에 정의된 순서대로 불러옴
  - integer도 object에 정의된 순서대로 불러오고 싶으면, key값 앞에 `+`를 붙여 string으로 만들기 (e.g. '+61': 'Australia')

```js
const countryCodes = {
  '61': 'Australia',
  '1': 'USA',
  '44': 'United Kingdom',
  '33': 'France',
  '82': 'South Korea',
};

for (let code in countryCodes) {
  console.log(code);                // 1, 33, 44, 61, 82
}
```

## Object copying

- Objects are stored and copied **by reference**
- Variable이 object 자체를 저장하는게 아니라, "메모리 안에서의 위치"를 저장함
- Object variable을 복사하면, object가 복사되는게 아니라 **reference가 복사**되는것

```js
const user = {
  name: 'Junghwa',
};

const admin = user;

admin.name = 'Rosie';

console.log(user.name);           // Rosie

console.log(user === admin);      // true
```

- 메모리 상에서 value값을 갖는 `name` 서랍이 어딘가에 저장되고, user object는 `name` 서랍이 저장된 위치를 저장함.
- user object를 카피하면 admin이라는 object가 새로 생성되는게 아니라, '`name`값이 저장된 위치'를 admin object도 똑같이 갖게 됨.
- `admin.name`으로 서랍의 value값을 바꾸면 `name` 서랍은 그대로지만 서랍이 갖는 value값이 바뀌는 것이기 때문에, user와 admin object 둘다 `name = 'Rosie'`가 됨

```js
// a, b are two independent objects
let a = {};
let b = {};

console.log(a == b);             // false
```

## Object Cloning & Merging : `.assign`

`Object.assign(dest, [src1, src2, src3...])`

```js
const user = {
  name: 'Junghwa',
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// Copy all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user);    // { name: "Junghwa", canView: true, canEdit: true }

// Copy exactly same
const clone = Object.assign({}, user);
```

## Object Methods : `this`

- A **function** which is an object's property = object's method
- To access other properties in the object, a method use `this`

```js
const user = {
  name: 'Junghwa',
  age: 30,
  role: 'user',
  sayHi() {                 // Create method
    alert(`Hello, ${this.name}!`);
  },
  setRole(newRole) {
    this.role = newRole;
  }
};

user.setRole('admin');
console.log(user.role);          // admin
```

```js
const user = { name: 'Junghwa' };
const admin = { name: 'Admin' };

function sayHi() {
  alert(this.name);
}

user.func = sayHi();
admin.func = sayHi();

user.func();           // Junghwa
admin.func();          // Admin
admin['func']();       // Admin
```

- `user.name` is also possible, but always use `this.name` in case copy object to another variable.
- Can't use `this` in **arrow** functions

## Constructor Function

- To make multiple similar objects and implement **reusable** object creation code.
- **Any** function can be used as a constructor.
- Name starts with Capital letter.
- Executed only with `new` operator.
- No return value usually

```js
const bellBoy1 = {
  name: 'Timmy',
  age: 19,
  hasWorkPermit: true,
  languages: ['French', 'English']
}
```

이런 식으로 함수를 만들 경우, 새로운 bellBoy를 추가할 때마다 key값들을 계속 써줘야함 → 이렇게 같은 key값들을 반복적으로 써주지 않기 위해 **Constructor function** 사용!

```js
// Create constructor function
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;                         // property (constructor안의 값)
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.sayHi = () => {                      // method (constructor안의 함수)
    console.log(`Hi, my name is ${this.name}!`);
  }
}

// Create new objects (only with 'new' operator)
const bellBoy1 = new BellBoy('Timmy', 19, true, ['French', 'English']);
const bellBoy2 = new BellBoy('Jimmy', 21, false, ['English', 'German']);

console.log(bellBoy1.name);                 // Timmy
console.log(bellBoy2.hasWorkPermit);        // false
bellBoy2.sayHi();                           // Hi, my name is Jimmy!
```