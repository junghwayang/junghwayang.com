---
title: 'Object'
date: '2020-05-02'
---

## 1. 객체란?

- JS는 객체 기반의 프로그래밍 언어
- JS를 구성하는 거의 모든것이 객체 → 원시값을 제외한 나머지(함수, 배열, Date 등)는 모두 객체
- 원시타입은 단 하나의 값만 나타내지만, 객체타입(object/reference type)은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조.
- 원시값은 변경 불가능(immutable) / 객체는 변경 가능(mutable)
- object안의 값: property / 함수: method
  - <span>property</span> = 객체의 **상태**를 나타내는 값
  - <span>method</span> = property를 참조하고 조작할 수 있는 **동작**
  - → 객체는 상태와 동작을 하나의 단위로 구조화할 수 있어 유용함!

## 2. 객체 리터럴에 의한 객체 생성

- Class기반 객체지향 언어 (e.g. C++, Java)
  - Class를 사전에 정의하고 필요한 시점에 `new` 연산자와 함께 생성자(constructor)를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성함.
  - 인스턴스 : 클래스에 의해 생성되어 메모리에 저장된 실체. (메모리에 실제로 존재하는 것에 초점을 맞춘 용어)
      - OOP에서 객체는 클래스와 인스턴스를 포함한 개념
      - 클래스는 인스턴스를 생성하기 위한 템플릿 역할
- JS는 <span>프로토타입 기반 객체지향 언어</span>
  - → 다양한 객체 생성 방법을 지원하는데 그 중 가장 일반적이고 간단한 방법이 객체 리터럴을 사용하는 것.
- 리터럴(literal) = 사람이 이해할 수 있는 문자 or 약속된 기호를 사용해 값을 생성하는 표기법
- 객체 리터럴 : `{ }` 내에 property를 정의. 변수에 할당되는 시점에 객체 리터럴을 해석해 객체가 생성됨.
  - 객체 리터럴 외의 객체 생성 방식들은 모두 **함수**를 이용해 객체 생성함.

## 3. Property

- 객체는 프로퍼티의 집합, 프로퍼티는 `key: value`로 구성됨.
  - `key` (property name) : string (or symbol)
  - `value` : can be any type
- key값으로 JS에서 사용가능한 유효한 이름이면 따옴표 생략
  - 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표 사용 (e.g. `'last-name'`)
- 빈 문자열 `''`, 예약어(`let`, `function` 등)도 key값으로 사용할 수는 있지만, 권장 X
- 이미 존재하는 key를 중복 선언하면 → 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씀.

## 4. Property 접근

- 프로퍼티에 접근하는 2가지 방법
  - **마침표** 표기법 `obj.name`
  - **대괄호** 표기법 `obj['name']`
- key값이 식별자 네이밍 규칙을 준수하는 이름이면 : 마침표, 대괄호 둘다 ok
- 준수하지 않는 이름이면 : 대괄호만 가능.
- 객체에 존재하지 않는 프로퍼티에 접근하면 `ReferenceError`가 아니라 `undefined`를 리턴함
- `person.last-name` 실행 결과는 Node.js에선 `ReferenceError: name is not defined` 이고, 브라우저 환경에서는 `NaN`인 이유는?
  - `person.last`를 먼저 평가하는데, last라는 프로퍼티가 없기 때문에 undefined로 평가됨
  - Node.js에선 name이라는 변수가 없으니까 ReferenceError가 발생하는 거지만,
  - 브라우저 환경에서는 name이라는 전역 객체 window의 프로퍼티가 존재하는데, 빈 문자열이 기본값임. 즉 `person.last-name`은 `undefined - ''`가 되어 NaN이 된다.

## 5. Property 삭제

`delete person.age;` → age 프로퍼티를 삭제. 존재하지 않는 프로퍼티를 삭제해도 에러 발생 X

## 6. ES6에서 추가된 객체 리터럴의 확장 기능

### 프로퍼티 축약 표현

```js
const number = 1;
const fruit = 'mango';

const favorite = { number, fruit };

console.log(favorite);     // {number: 1, fruit: "mango"}
```

### 계산된 프로퍼티 이름

```js
const prefix = 'user';
let i = 0;

const user = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(user);       // {user-1: 1, user-2: 2}
```

## 7. Primitive type vs Reference type

### Primitive type

- immutable
- 원시값을 변수에 할당하면 변수에는 실제 값이 저장된다.
- 원시값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. = **call by value**

### Object(Reference) type

- mutable
- 객체를 변수에 할당하면 변수에는 참조값이 저장된다.
- 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. = **call by reference**

### 값에 의한 전달

```jsx
const number = 10;
const copy = number;

number = 50;

console.log(number);   // 50
console.log(copy);     // 10 (number 변수의 값을 변경해도 copy값에는 영향X)
```

변수 `copy`에 원시값 `10`을 갖는 변수 `number`를 할당할 때? →  copy에는 원시값 10이 전달됨! = **call by value**

(값은 10으로 같지만, 다른 메모리 공간에 저장된 별개의 값임)

### 참조에 의한 전달

- 객체 관리하는 데는 메모리비용이 많이 듦 → 이러한 구조적인 단점으로 여러개의 식별자가 하나의 객체를 공유할수있다.

```jsx
const user = {
	name: 'Rosie'
};

const copy = user;

user.name = 'Junghwa';

console.log(user.name);   // Junghwa
console.log(copy.name);   // Junghwa
```

- `copy`에는 원본 `user`의 참조값이 복사되어 전달된다. = **call by reference**
- 객체가 메모리공간 A에 저장되어 있으면, `user`도 메모리공간 A의 주소를 값으로 가지며 메모리 B에 저장되고, `copy`에 복사되면서 `copy`도 객체의 메모리공간 A의 주소를 값으로 가지며 메모리 C에 저장됨. = user, copy는 저장된 메모리 주소는 다르지만, 똑같이 객체의 메모리 주소 A를 가리킴
    - = 두 개의 식별자가 하나의 객체를 공유한다.
    - → 원본 or 사본 중 어느 한쪽에서 객체를 변경하면, 다른 변수도 영향받음.

### call by value vs call by reference

- 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에선 동일하다.
- 다만, 식별자가 기억하는 메모리 공간 (변수)에 저장되어 있는 값이 원시 값이냐 참조 값이냐의 차이만 있을 뿐.
- → JS에는 '참조에 의한 전달'은 존재하지 않고, '값에 의한 전달'만 존재한다.
- But, JS에서도 전달되는 값의 종류가 원시값인지 참조값인지 구별해서 강조하는 의미로 구분해서 쓰기도 함.
  
## 8. 객체 생성하기

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

## 9. 프로퍼티가 존재하는지 체크하기: `in`

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

## 10. Object의 모든 key값들을 loop: `for...in`

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

## 11. Object 복사하기

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

## 12. Object Cloning & Merging: `.assign`

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

## 13. Object Methods : `this`

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

## 14. Constructor Function

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

이런 식으로 함수를 만들 경우, 새로운 bellBoy를 추가할 때마다 key값들을 계속 써줘야함

→ 이렇게 같은 key값들을 반복적으로 써주지 않기 위해 **Constructor function** 사용!

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