---
title: '[JS이론] 객체 리터럴'
date: '2020-12-19'
tags: ['javascript']
---

## 1. 객체란?

- JS는 객체 기반의 프로그래밍 언어
- JS를 구성하는 거의 모든것이 객체 → 원시값을 제외한 나머지(함수, 배열, 등)는 모두 객체
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