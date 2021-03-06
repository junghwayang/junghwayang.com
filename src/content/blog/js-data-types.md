---
title: '[JS이론] 데이터 타입'
date: '2020-12-16'
tags: ['javascript']
---

## 원시타입 (primitive type)

- <span>number</span>: 모든 수를 실수로 처리 (정수만을 위한 데이터타입은 따로 없음)
- <span>string</span>
- <span>boolean</span>
- <span>undefined</span>: `var` 키워드로 선언된 변수에 암묵적으로 할당되는 값
- <span>null</span>: 값이 없다는 것을 의도적으로 명시할때 사용
- <span>symbol</span>: 다른 값과 중복되지 않는 유니크한 값

## 객체타입 (object/reference type) : 객체, 함수, 배열 등

변수가 타입을 갖는게 아니라, 변수에 할당된 값이 타입을 갖는다. → 그 값에 의해 변수의 타입이 동적으로 결정됨

## 데이터 타입이 필요한 이유

1. 메모리에 값을 저장할때: 값의 데이터 타입에 따라 먼저 **확보해야할 메모리 공간의 크기를 결정하기 위함**
2. 메모리에 저장된 값을 참조할때: 한번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위함

→ 숫자타입이 할당된 변수를 참조하면 숫자타입에 맞게 8바이트 단위로 값을 읽어들임

3. 메모리에서 읽어들인 2진수 데이터를 어떻게 해석할지 결정하기 위함

→ 숫자로 해석할지, string으로 해석할지? 같은 2진수라도 뭘로 해석하냐에 따라 값이 다르니까.

## 동적 타이핑 (Dynamic typing)

- JS의 변수는 선언이 아닌 할당에 의해 타입이 결정됨 = <span>타입 추론</span> (type inference)
- 그리고 재할당에 의해 변수 타입은 언제든지 동적으로 변할 수 있음
- 동적타입 언어(dynamic/weak type) 언어: JavaScript, Python, Ruby 등등

### 정적 타입 (static/strong type) 언어

- e.g. C, C++, Java, Go 등등
- 변수 선언할때 변수에 할당할 수 있는 값의 데이터타입을 사전에 선언해야함
- 변수의 타입을 변경할 수 없음. 선언된 타입에 맞는 값만 할당할 수 있음.
- 컴파일 시점에 type check를 수행

### 동적타입 언어의 특징

- 데이터 타입에 대해 무감각해질 정도로 편리하다는 장점이 있지만, 모든 SW 아키텍처에는 trade-off가 존재함
- 단점은?
  - 값의 변경에 의해 타입도 언제든지 변함 → 값을 확인하기 전에는 타입을 확신할 수 없음
  - → 유연성은 높지만 신뢰성은 떨어진다.
- 단점을 최대한 줄이기 위해 주의할 사항
  - 변수는 꼭 필요한 경우에만 제한적으로 생성하기 (너무 많으면 관리하기 힘들어짐)
  - 변수의 스코프를 최대한 좁게 만들기
  - 전역 변수는 최대한 사용하지 않도록 하기
  - 변수보다는 상수를 사용해 값의 변경을 막기
  - 변수의 목적이나 의미를 파악할수 있도록 네이밍하기