---
title: 'Basics of programming'
date: '2020-12-03'
---

## 1. 프로그래밍이란?

- 프로그래밍이란 <span>프로그래밍 언어를 사용해 컴퓨터에게 실행을 요구</span>하는 일종의 커뮤니케이션.
- 프로그래밍에 앞서 해결해야 할 문제나 요구사항을 명확히 이해한 후 적절한 문제 해결 방안을 정의해야 한다.

→ 이 때 요구되는 것이 문제 해결 능력.

- 복잡한 문제(요구사항)를 단순하게 분해하고 자료를 정리하고 구분(modeling)해야 하며, 순서에 맞게 행위를 배열해야 한다.

→ 즉, 프로그래밍이란 0과 1밖에 알지 못하는 기계가 실행할 수 있을 정도로 정확하고 상세하게 요구사항을 설명하는 작업 ⇒ 그 결과물이 코드!

- 문제 해결방안을 고려할 때 컴퓨터의 입장에서 문제를 바라봐야 한다.
- 이때 필요한 것이 Computational thinking(컴퓨팅 사고) = 컴퓨터의 관점에서 문제를 사고하는 것 🤔

## 2. 프로그래밍 언어

- 컴퓨터가 실행할 명령을 전달할 땐, 컴퓨터가 이해할 수 있는 언어인 기계어(machine code)로.
- 하지만 기계어는 비트 단위 → 사람이 직접 기계어로 코딩하기엔 어려움 → 기계어 대신 프로그래밍 언어로 작성한 코드를 기계어로 변환
- 프로그래밍 언어: <span>사람이 이해할 수 있는 약속된 문법으로 구성된 언어</span>

→ <span>구문(syntax)</span>과 <span>의미(semantics)</span>의 조합으로 표현됨

- 프로그래밍 언어를 기계어로 변환해주는 일종의 번역기 같은 것 = compiler(컴파일러) or interpreter(인터프리터)
- (사람) ——— 프로그래밍 언어 ———> (컴파일러) ——— 기계어 ———> (컴퓨터)

## 3. 구문과 의미

> 구문, 문법: syntax / 의미: semantics

- 문법에 맞는 문장을 구성하는 것은 물론, 의미를 가지고 있어야 함
- `const number = 'hello';` 는 문법적으론 괜찮지만, number라는 이름의 변수에 string이 할당됐으므로 의미적으로는 옳지 않다.

## Conclusion

프로그래밍 언어가 제공하는 문법을 사용하여 변수를 통해 값을 저장하고 참조하며, 연산자로 값을 연산/평가하고,

조건문과 반복문에 의한 흐름제어로 코드의 실행 순서를 제어하고,

함수로 재사용 가능한 문의 집합을 만들며, 객체/배열 등으로 자료를 구조화한다.

→ 프로그래밍은 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 후, 그 흐름을 제어하는 것이다.