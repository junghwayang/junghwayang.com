---
title: '[JS이론] 함수'
date: '2020-12-22'
tags: ['javascript']
---

## 함수란?

- 일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것.
- JS의 특징: 함수는 객체(object)다.
- 함수 내부로 입력을 전달받는 변수 = 매개변수(parameter)
  - `function sum(a, b)`에서 a, b
- 입력 = 인수(argument)
  - 함수 호출 시 `sum(1, 3)`에서 1, 3
- 출력 = 반환값(return value)
- 함수를 사용하는 이유?
  - 코드의 재사용: 같은 코드를 반복하지 않고, 필요할때마다 여러번 사용가능.
  - 유지보수의 편의성 & 코드의 신뢰성: 여러곳을 일일이 고치는게 아니라 함수만 변경하면 되니 실수할 확률이 적음.
  - 코드의 가독성: 함수에 적절한 네이밍을 해서 함수의 역할을 바로 파악할 수 있음.

## 함수 정의 (Function Definition)

### 함수 선언문 (Function Declaration)

```js
function add(a, b) {
  return a + b;
}
```

- 함수 이름 `add`을 생략할 수 없음.
- expression이 아닌 문 → 변수에 할당할 수 없다.
- 함수 이름이 있는 함수 리터럴 `{ }`을 단독으로 사용: 함수 선언문으로 해석,
- 함수 리터럴 `{ }`을 변수에 할당하거나 피연산자로 사용: 함수 리터럴 표현식으로 해석.
- 함수 선언문으로 생성된 함수를 호출하기 위해, JS엔진은 함수 이름과 동일한 이름의 식별자 `add`을 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
  - = 함수 선언문을 함수 표현식으로 변환해 객체 생성하는 것과 비슷. (동작방식은 다름)
- 함수는 '함수 이름'으로 호출하는게 아니라, (JS엔진이 암묵적으로 생성한) 함수 객체를 가리키는 **식별자**로 호출.

### 함수 표현식 (Function Expression)

```js
// 기명 함수
const add = function foo(a, b) {
  return a + b;
};

// 익명 함수
const add = (a, b) {
  return a + b;
};
```

- JS에서의 함수는 일급 객체다.
  - 일급 객체: 값의 성질을 갖는 객체 (값처럼 변수에 할당할 수 있고, property 값 or 배열의 요소도 될 수 있음)
  - → 함수를 값처럼 자유롭게 사용할 수 있다!
- 함수 표현식: 함수 리터럴로 생성한 함수 객체를 변수에 할당하는 방식.
- 함수 이름 `foo`는 함수 몸체 내부에서만 유효한 식별자 → 함수 이름으로 함수를 호출할 수 없음.

## 함수 생성 시점과 함수 호이스팅

- 함수 선언문으로 정의한 함수: 정의 이전에 호출 가능.
- 함수 표현식으로 정의한 함수: 정의 이전에 호출 불가능.
- → 두 방법이 함수를 생성하는 시점이 다르기 때문!
- **함수 선언문**
  - 코드가 한 줄씩 순차적으로 실행되는 시점인 runtime 이전에 JS엔진에 의해 먼저 실행됨 → 함수 객체가 먼저 생성됨!
  - 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성해서 함수 객체를 할당함.
  - → runtime에는 이미 함수 객체가 생성되어 있음 → 함수 선언문 이전에 함수를 참조&호출할 수 있음. = <span>함수 hoisting</span>
  - 함수 hoisting: 함수 선언문이 코드의 처음으로 끌어올려진 것처럼 동작하는 JS의 특징
  - 변수 hoisting으로는 변수 선언 이전에 참조한 변수가 `undefined`로 평가되지만, 함수 hoisting으론 선언 이전에도 함수 호출이 가능함.
- **함수 표현식**
  - 함수를 변수에 할당하면 변수 선언은 런타임 이전에 실행되어 `undefined`로 초기화되지만,
  - 변수 할당문의 값은 할당문이 실행되는 시점(runtime)에 평가됨 → 함수 표현식도 그때 함수 객체가 됨.
  - 함수 hoisting이 아니라, **변수 hoisting**이 발생!
      - `const add = function (a, b) { }`에서 함수 표현식 이전에 add를 호출하면 `undefined`로 평가됨.
      - → 반드시 함수표현식 이후에 참조or호출해야함

> 함수 hoisting 문제로 함수 선언문 대신 **함수 표현식을 사용**하는 것을 권장!

### Function 생성자 함수

> 비추

```js
const add = new Function('a', 'b', 'return a + b');
```

### 화살표 함수

```js
// 항상 익명함수
const add = (a, b) => a + b;
```

- 함수 선언문, 함수 표현식에 비해 표현도 간략하고, 내부 동작 또한 간략화됨.
- 일반 함수와 다른 점
  - this 바인딩 방식이 다름
  - prototype 프로퍼티가 없음
  - arguments 객체를 생성하지 않음