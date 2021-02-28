---
title: 'What & Why is TypeScript?'
date: '2021-02-28'
---

> https://www.typescriptlang.org/

- 어느 브라우저나, 어느 OS나 JS를 사용할 수 있는 모든곳에 대체해서 TS를 쓸 수 있음.
  - TS 코드를 JS 코드로 transcompile하기 때문 (컴파일링할때 JS버전도 설정할수있음)
  - 컴파일러: TS 자체의 컴파일러 or Babel
  - 모든 프로젝트의 코드를 TS로 작성해도 되고, 기존의 프로젝트에 몇몇 파일에만 TS를 적용해도 됨.
- TS가 새로운 언어가 아니라, JS를 베이스로 하는 JS의 superset 언어이기 때문.
- JS vs TS
  - JS: dynamically typed, 런타임때 타입이 결정되고 에러발생 → 프로토타입을 기반으로 한 OOP. (완전한 OOP는 아님)
  - TS: statically typed, 컴파일때 타입이 결정되고 에러발생 → JS보다 강력한 OOP가 가능해짐

### Typed 언어

- Dynamically typed 언어
  - JS, Python, Ruby, PHP, ...
  - 변수에 처음 할당된 타입과 다른 타입을 재할당해도 문제없음
  - 프로그래밍, 컴파일링시 타입이 없음
  - 장점: easy, flexible, fast
  - 단점: 타입이 없어서 가독성이 떨어짐, 개발할때 미리 에러가 나는게 아니라 런타임때 에러가 나니까 유저가 어플리케이션을 사용할 때 에러가 남
- Statically typed 언어
  - TS, Java, C, C++, Kotlin, Swift, Go, Scala, ...
  - 변수 선언할때 타입을 명시해야함. 다른 타입으로 재할당하면 에러남
  - 컴파일링할때 타입이 결정됨
  - 장점
      - 개발하는 중간에 실시간으로 미리 에러가 나서 버그예방을 할 수 있음.
      - **안정적**이고 확장이 쉬운 프로그램을 만들수있음

## 왜 타입스크립트?

- <span>Type</span>
  - JS: 프로그램이 동작할때 타입이 결정돼서 위험.
  - TS: 코딩할때 타입이 결정돼서 잘못 코딩하면 type error를 미리 볼 수 있음
- <span>강력한 OOP가 가능</span>
  - OOP: 객체를 위주로 프로그래밍
      - Modularity: 객체 위주로 모듈성있는 코드 작성
      - Reusability: 모듈별로 재사용가능
      - Extensible: 객체 단위로 확장가능
      - Maintainability: 유지/보수성이 높음 (기존 코드의 문제해결이나 새로운 기능 추가가 쉬워짐)

## Compiler Tools

- `npm i -g ts-node`: TS코드를 JS코드로 변환해 노드에서 실행해주는 패키지
  - 설치 후 `ts-node main.ts`처럼 ts파일을 실행하면 js파일을 따로 만들지 않고 터미널에서 바로 실행시켜줌
- watch 모드
  - TS파일을 `tsc main.ts`로 컴파일링하면 JS파일을 생성. 그 후 TS파일을 수정할 때마다 매번 다시 컴파일해서 JS파일로 변환해줘야 하는 귀차니즘.
  - `tsc main.ts -w` 나 `tsc main.ts --watch`로 watch모드를 사용하면 TS파일이 업데이트 될때마다 자동으로 JS파일에도 반영이 됨.