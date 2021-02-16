---
title: '[JS이론] Primitive type vs Reference type'
date: '2020-12-20'
tags: ['javascript']
---

## 원시 값 (primitive type)

- immutable(변경 불가능) → 한번 생성된 원시값은 **read only**
- → 예기치 못한 변경으로부터 안전 = 데이터의 신뢰성을 보장함

> immutable한건 변수가 아니라 값! = 원시값 자체를 변경할 수 없다(O) 변수값을 변경할 수 없다(X)

- 변수는 언제든지 재할당해서 변수 값을 바꿀 수 있다. 그래서 변수라고 부름.
- 변수값을 바꿀 수 없게 재할당이 금지된 변수 = 상수

### 문자열과 불변성

- 문자열: 1개의 문자당 2byte의 메모리 공간 (e.g. 5개의 문자 = 10byte)
- 숫자: 어떤 숫자든지 무조건 8byte (e.g. 1 = 8byte, 100000 = 8byte)
- JS에서 문자열은 유사 배열 객체(array-like object)
  - = array처럼 index로 접근가능하고, `length` 프로퍼티를 갖는 객체
- `str[0] = S`처럼 문자열의 일부를 변경해도 반영안됨.

### 값에 의한 전달

```js
const number = 10;
const copy = number;

number = 50;

console.log(number);   // 50
console.log(copy);     // 10 (number 변수의 값을 변경해도 copy값에는 영향X)
```

변수 `copy`에 원시값 `10`을 갖는 변수 `number`를 할당할 때? → copy에는 원시값 10이 전달됨! = <span>call by value</span>

(값은 10으로 같지만, 다른 메모리 공간에 저장된 별개의 값임)

## 객체

- property 개수가 정해져 있지 않고, 동적으로 추가/삭제할 수 있다.
- JS의 객체는 property key를 index로 사용하는 Hash table과 비슷.
- 다른 class기반 객체지향언어와는 달리, class없이 객체를 생성할 수 있고, 객체가 생성된 이후에도 동적으로 property, method를 추가할 수 있다.
- `const user = { };`처럼 객체를 변수에 할당하면, 변수에는 객체가 저장된 **메모리공간의 주소**가 저장된다.
  - → 이 메모리 주소를 **참조값**(reference value)이라고 한다.
  - e.g. 객체 { }가 메모리공간 A에 저장되어 있다고 하면, 변수 `user`에는 객체의 주소인 'A'가 저장됨.
  - 변수 `user`는 이 참조값을 통해 객체에 접근할 수 있다.
  - "변수가 어떤 값을 갖는다" (X)
  - "변수는 객체를 참조하고 있다" or "변수는 객체를 가리키고(point) 있다" (O)
- mutable → 재할당 없이 객체를 변경(추가/갱신/삭제)할 수 있음
    - 객체를 변경해도 객체의 주소를 저장하는 변수가 변하는게 아니니까.

### 참조에 의한 전달

- 객체 관리하는 데는 메모리비용이 많이 듦 → 이러한 구조적인 단점으로 여러개의 식별자가 하나의 객체를 공유할수있다.

```js
const user = {
	name: 'Rosie'
};

const copy = user;

user.name = 'Junghwa';

console.log(user.name);   // Junghwa
console.log(copy.name);   // Junghwa
```

- `copy`에는 원본 `user`의 참조값이 복사되어 전달된다. = <span>call by reference</span>
- 객체가 메모리공간 A에 저장되어 있으면, `user`도 메모리공간 A의 주소를 값으로 가지며 메모리 B에 저장되고, `copy`에 복사되면서 `copy`도 객체의 메모리공간 A의 주소를 값으로 가지며 메모리 C에 저장됨. = user, copy는 저장된 메모리 주소는 다르지만, 똑같이 객체의 메모리 주소 A를 가리킴
  - = 두 개의 식별자가 하나의 객체를 공유한다.
  - → 원본 or 사본 중 어느 한쪽에서 객체를 변경하면, 다른 변수도 영향받음.

### call by value vs call by reference

- 식별자가 기억하는 메모리 공간에 저장되어 있는 값을 복사해서 전달한다는 면에선 동일하다.
- 다만, 식별자가 기억하는 메모리 공간 (변수)에 저장되어 있는 값이 원시 값이냐 참조 값이냐의 차이만 있을 뿐.
- → JS에는 '참조에 의한 전달'은 존재하지 않고, '값에 의한 전달'만 존재한다.
- But, JS에서도 전달되는 값의 종류가 원시값인지 참조값인지 구별해서 강조하는 의미로 구분해서 쓰기도 함.
