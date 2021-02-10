---
title: '[JS이론] 타입 변환과 단축 평가'
date: '2020-12-18'
tags: ['javascript']
---

## Type casting = 명시적 타입 변환

: 개발자가 의도적으로 값의 타입을 변환하는 것

e.g. `(10).toString()`

## Type coercion = 암묵적 타입 변환

: 표현식 평가하는 도중에 JS엔진에 의해 암묵적으로 타입이 자동 변환되는 것

e.g. `10 + ''` 는 string '10', `+'0'`는 숫자 0

> 암묵적 타입변환은 예측하지 못해 오류발생할 가능성이 큼. 하지만 무조건 명시적 타입변환만 사용하고 암묵적 타입변환은 발생하지 않게 코드 작성하는 것도 좋은 생각은 아님. 가독성 측면에서 고려하기!

## 단축 평가 (Short-circuit evaluation)

: 표현식 평가하는 도중에 평가결과가 확정된 경우 나머지 평가과정을 생략하는 것

- `true` || anything → `true`
- `false` || anything → anything
- `true` && anything → anything
- `false` && anything → `false`

- 응용

```js
if (true) result = 100;

// 위 if문을 단축평가로 대체
result = true && 100;

// object property 참조할때
const prop = null;
const value = prop && prop.value;
// prop.value만 하면 TypeError가 뜨는데, 단축평가로 에러없이 null로 평가됨
```

## ES11(ECMAScript2020)에서 새로 도입된 것들

### 1. Optional chaining: `?.`

좌항의 피연산자가 `null` or `undefined`인 경우 → `undefined`를 반환하고, 아니면 우항의 프로퍼티 참조

```js
const elem = null;
const value = elem?.value;
console.log(value);   // undefined
```

### 2. null 병합 (nullish coalescing): `??`

좌항의 피연산자가 `null` or `undefined`인 경우 → 우항의 피연산자를 반환하고, 아니면 좌항의 피연산자 반환

```js
const foo = null ?? 'default string';
console.log(foo);   // "default string"

const foo = '' ?? 'default string';
console.log(foo);   // ""
```