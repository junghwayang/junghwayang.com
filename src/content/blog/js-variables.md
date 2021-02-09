---
title: '[JS이론] JavaScript의 변수'
date: '2020-12-14'
tags: ['javascript']
---

## 1. 변수란 무엇인가? 왜 필요한가?

`10 + 20`을 계산할때, 컴퓨터는 연산과 기억을 수행하는 부품이 나눠져 있다.

- CPU를 사용해 연산하고,
- 메모리를 사용해 데이터를 기억한다.

### 메모리

- 데이터를 저장할 수 있는 memory cell의 집합체
- Memory cell 하나의 크기 = 1byte = 8bit
- 컴퓨터는 메모리셀의 크기인 1byte 단위로 데이터를 write, read
- 각 셀은 고유의 메모리 주소를 가짐
- **메모리 주소** = 메모리 공간의 위치, 0부터 시작해 메모리 크기만큼 정수로 표현
- 컴퓨터는 모든 데이터를 **2진수**로 처리 → 메모리에 모두 2진수로 저장됨 (데이터 종류와 상관없음)

### 변수가 필요한 이유

- 10, 20은 임의의 메모리 주소에 저장되고, CPU는 이 값을 읽어들여 연산을 수행
- 연산 결과인 숫자값 30도 메모리 상의 임의의 주소에 저장됨
- 연산 결과인 30을 재사용하고 싶을때, 메모리 주소를 통해 직접 접근해야하는데, 이건 매우 위험함
  - 치명적인 오류를 발생시킬 수 있어 JS는 개발자의 직접적인 메모리 제어를 허용하지 않음
  - 허용된다 하더라도, 코드가 실행될때마다 메모리 주소가 변경되니까 코드를 실행하기 전에는 값이 저장된 메모리 주소를 알 방법이 없음
- → 기억하고 싶은 값을 메모리에 저장하고, <span>저장된 값을 읽어 들여 재사용</span>하기 위해 변수를 사용!

### 변수란?

- 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 or 그 메모리 공간을 식별하기 위해 붙인 이름
- → 프로그래밍 언어에서 값을 저장하고 참조하는 메커니즘
- 사람이 이해할 수 있는 언어로 <span>값의 위치를 가리키는 상징적인 이름</span>
- 하나의 값만 저장가능. 여러개의 값 저장하려면 여러개의 변수 사용.
- But, 배열이나 객체 같은걸 사용하면 관련있는 여러개를 그룹화해서 하나의 값처럼 사용가능
- 변수에 값을 저장하는것 = **할당** (assignment)
- 변수에 저장된 값을 읽어들이는 것 = **참조** (reference)

## 2. 식별자 (identifier)

- 메모리에 존재하는 어떤 값을 구별해서 식별할 수 있는 고유한 이름 (변수, 함수, 클래스 등의 이름=식별자)
- 식별자는 값이 아니라 값이 저장되어 있는 메모리 주소를 기억함 = 메모리 주소와 매핑 관계를 맺으며, 이 매핑 정보도 메모리에 저장되어야함
- → 식별자 = 메모리 주소에 붙인 이름
- 선언(declaration)에 의해 자바스크립트 엔진에 식별자의 존재를 알림
- 모든 식별자는 실행 컨텍스트(execution context)에 등록됨
  - 변수 이름, 변수 값이 `key: value` 형식인 객체 형태로.

## 3. 변수 선언 (Variable Declaration)

- 변수를 생성하는 것 (변수 사용하기 위해 반드시 선언 필요)
- = 값을 저장하기 위한 메모리 공간을 확보하고, 변수 이름과 확보된 메모리공간의 주소를 연결(name binding)해서 값을 저장할 수 있게 준비하는 것
- 변수 선언에 의해 확보된 메모리 공간은 확보가 해제되기 전까진 그 공간을 사용 못하게 보호되므로 안전함
- 선언되지 않은 식별자에 접근하면 `ReferenceError` 발생
- ES6이전 - `var` / ES6 이후 - `let`, `const` 도입
- `var`의 단점
  - 블록레벨 scope 대신 함수레벨 scope를 지원 → 전역 변수가 선언되는 부작용
- 변수 선언
  - 1단계) <span>선언 단계</span>: 변수 이름을 등록해 자바스크립트 엔진에 변수의 존재를 알린다.
  - 2단계) <span>초기화 단계</span>: 값을 저장하기 위한 메모리 공간을 확보하고, 암묵적으로 `undefined` 를 할당해 초기화한다.
      - 초기화 = 변수가 선언된 이후 최초로 값을 할당하는 것
      - 초기화 단계를 거치지 않으면 확보된 메모리 공간엔 전에 다른 애플리케이션이 사용했던 값이 그대로 남아있을 수 있음
      - → 이런 값을 쓰레기 값(garbage value)이라 한다.
      - → 메모리 공간을 확보한 후, 초기화를 하지 않고 변수값을 참조하면 쓰레기값이 나올 수 있음!
  - e.g. `var result;`: 변수 이름 result를 등록하고, 확보된 메모리 공간에는 `undefined`로 값이 할당됨

## 4. 변수 선언의 실행 시점과 변수 호이스팅

```js
console.log(result);  // ReferenceError가 아니라 undefined 출력

var result;
```

- 변수를 참조하는 코드가 변수 선언보다 앞에 있음 → 그래도 result를 참조할 수 있음
- 왜?
  - 변수 선언이 런타임 이전 단계에서 먼저 실행되기 때문
  - 런타임 = 소스코드가 한줄씩 순차적으로 실행되는 시점
  - JS엔진은 소스코드를 한줄씩 순차적으로 실행하기 이전에, 소스코드의 평가과정을 거치면서 소스코드를 실행하기 위한 준비를 한다.
  - 이때, 모든 선언문을 찾아 먼저 실행한다.
  - 모든 평가과정이 끝나면 나머지 코드를 한줄씩 순차적으로 실행한다.
  - → 변수 선언이 소스코드 어디에 위치하는지 상관없이 어디서든지 변수를 참조할 수 있다.
- <span>Variable hoisting</span> (호이스팅=끌어올리기): 모든 식별자의 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 JS 고유의 특징

## 5. 값의 할당

- 변수 선언과 값의 할당(assignment)를 하나의 statement로 → `var result = 100;`
- 하나의 statement로 써도, 변수 선언과 값의 할당의 실행시점이 다름
  - 변수 선언은 런타임 이전에 실행되지만, 값의 할당은 런타임에 실행됨

```js
console.log(result);   // undefined

var result = 100;

console.log(result);   // 100
```

### 변수 vs 값

- 변수: 값을 저장하기 위해 확보한 메모리 공간 or 메모리 공간의 이름
- 값: 변수에 저장된 데이터 (표현식이 평가되어 생성된 결과)

## 6. 값의 재할당

- 재할당 = 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것
- 변수에 값을 할당/재할당할땐 선언할때 저장됐던 `undefined`가 지워지고 그 메모리공간에 새롭게 값이 저장되는게 아니라, **새로운 메모리 공간을 확보**하고 그곳에 할당 값을 저장함!
  - 원시값이 immutable하기 때문에, 값 자체를 바꾸지 못하니까 새로운 곳에 새로운 값을 저장하는 것.
- 재할당되면서 쓸모없어진 이전에 할당됐던 값들은 메모리에서 없어지는게 아니라 아무런 식별자를 갖지 않은채 메모리 공간에 남아있음. = 쓸모없는 메모리
- → **Garbage collector**에 의해 메모리에서 자동 해제됨
- But, 메모리에서 언제 해제될지는 예측 불가능
- <span>Garbage collector</span>
  - 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 더이상 사용되지 않는 메모리를 해제하는 기능
  - 더이상 사용되지 않는 메모리 = 어떤 식별자도 참조하지 않는 메모리 공간
  - JS는 가비지 콜렉터를 내장하고 있는 **managed 언어** → 가비지 콜렉터를 통해 memory leak를 방지함
  - ↔ unmanaged 언어 (e.g. C언어) : 개발자가 직접 메모리를 할당하고 해제. 개발자 역량에 따라 최적의 성능을 확보할 수 있지만, 반대로 치명적인 오류 생산할수도.

## 7. 식별자 네이밍 규칙

- 문자 (특수문자X), 숫자, `_`, `$`
- 숫자로 시작하면 안됨
- 예약어는 식별자로 사용 불가 (e.g. const, class, function, return, if, default, this 등등)
- 유니코드 문자도 가능. (알파벳 외에 한글도 쓸 수 있지만 되도록이면 알파벳으로!)
- 대소문자를 구별함
- 보통은 <span>camelCase</span>로 / 생성자함수, 클래스 이름은 PascalCase로