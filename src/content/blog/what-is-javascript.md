---
title: '[JS이론] JavaScript란?'
date: '2020-12-04'
tags: ['javascript']
---

## 1. 자바스크립트의 탄생

- 1995년: Netscape에서 웹페이지의 보조적인 기능을 수행하기 위해 브라우저에서 동작하는 경량 프로그래밍 언어인 JavaScript를 개발 (by Brendan Eich)

## 2. 자바스크립트의 표준화

- 곧 JS의 파생 버전인 JScript가 출시됐다.
- 1996년 8월: Microsoft는 JScript를 IE에 탑재
- 문제는 JavaScript와 JScript가 표준화되지 못해, Netscape와 Microsoft가 자사 브라우저의 시장 점유율을 높이기 위해 자사 브라우저에서만 동작하는 기능을 경쟁적으로 추가하기 시작.
- 이로 인해 브라우저에 따라 웹페이지가 정상적으로 동작하지 않는 **Cross browsing 이슈**가 발생
- 모든 브라우저에서 정상 동작하는 웹페이지 개발하기가 어려워져서, JS의 파편화를 방지하고 표준화된 JS의 필요성이 대두되기 시작함.
- 1996년 11월: Netscape는 ECMA international (컴퓨터 시스템의 표준을 관리하는 비영리 표준화 기구)에 JS의 표준화를 요청.
- 1997년 7월: 표준화된 JS초판의 스펙이 완성되고, 상표권 문제로 JS 대신 <span>ECMAScript</span>로 명명됨
- 2015년 ES6가 발표되고 그 후부터 매년 발표되어 2020년엔 ES11이 발표됨.

## 3. 자바스크립트 성장의 역사

- 초창기 JS는 웹페이지의 보조적인 기능을 수행하기 위해 한정적인 용도로 사용됨
- 대부분의 로직은 주로 웹 서버에서 실행되었고, 브라우저는 서버로부터 전달받은 HTML, CSS를 단순히 렌더링하는 수준

### 1. Ajax

- 1999년, Ajax가 XMLHttpRequest라는 이름으로 등장
- Ajax = Asynchronous JavaScript and XML
- Ajax: JS를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능
- Ajax 이전에는
  - HTML코드를 처음부터 끝까지 서버로부터 전송받아 웹페이지 전체를 렌더링함
  - 화면이 전환되면 서버로부터 새로운 HTML을 전송받아 웹페이지 전체를 처음부터 다시 렌더링함
  - 변경할 필요가 없는 부분까지 포함된 HTML 코드를 서버로부터 다시 전송받음 → 불필요한 데이터 통신 발생 & 변경 안해도 되는 부분까지 다시 렌더링해야 하니까 성능 면에서도 불리함
  - 이 때문에 화면이 전환되면 화면이 순간적으로 깜박이는 현상이 발생
- Ajax 등장으로 이전의 패러다임을 획기적으로 전환!
- Ajax 이후에는
  - 바꿀 필요 없는 부분은 다시 렌더링하지 않고, 필요한 데이터만 서버로부터 전송받아 변경해야 하는 부분만 한정적으로 렌더링할 수 있게 됨.

### 2. jQuery

- 2006년, jQuery 등장 → DOM을 더 쉽게 제어할 수 있게 되고, 크로스 브라우징 이슈도 어느 정도 해결됨

### 3. V8 자바스크립트 엔진

- 자바스크립트 엔진: 자바스크립트 코드를 실행하는 프로그램
- 2008년, 구글의 V8 자바스크립트 엔진 → 빠른 성능 보여줌 → Desktop 앱과 유사한 UX를 제공할 수 있는 웹 애플리케이션 프로그래밍 언어로 정착하게 됨
- V8 엔진은 Chrome과 Node.js에서 사용함.
- 엔진의 두 구성요소는 <span>Memory heap</span>, <span>Call stack</span>
- JS의 발전으로 이전에는 웹 서버에서 수행되던 로직들이 대거 클라이언트로 이동 → Front-end 영역이 주목받게 됨

### 4. Node.js

- 2009년, **V8 JavaScript 엔진으로 빌드**된 JS 런타임 환경 (by Ryan Dahl)
- 브라우저의 JS엔진에서만 동작하던 JS를 브라우저 이외의 환경에서도 동작할 수 있도록 JS 엔진을 브라우저에서 독립시킨 JS 실행환경
- 다양한 플랫폼에 적용할 수 있지만, 주로 서버 사이드 어플리케이션 개발에 사용됨
- 비동기 I/O를 지원하며 single thread 이벤트 루프 기반으로 동작함 → 리퀘스트 처리 성능이 좋음 → 데이터를 실시간으로 처리하기 위해 I/O가 빈번하게 발생하는 SPA에 적합함
- CPU 사용률이 높은 앱에는 권장 X

## 4. 자바스크립트와 ECMAScript

- ECMAScript는 JS의 핵심 문법을 규정 → 각 브라우저 제조사는 ECMAScript 사양을 준수해서 브라우저에 내장되는 자바스크립트 엔진을 구현함
- 자바스크립트 > ECMAScript
- JS는 일반적으로 기본 core를 이루는 ECMAScript에 + 브라우저가 별도 지원하는 client-side Web API를 아우르는 개념
- Client-side Web API: ECMAScript와는 별도로 W3C(World Wide Web Consortium)에서 별도의 사양으로 관리하고 있음
- 최신 ES버전을 브라우저가 지원하지 않는 경우, Babel 같은 트랜스파일러를 사용해 버전 조정하기

## 5. 자바스크립트의 특징

- 웹 브라우저에서 동작하는 유일한 프로그래밍 언어
- 기존의 프로그래밍 언어에서 많은 영향을 받음
  - 기본 문법은 C, Java와 유사
  - Self에선 Prototype 기반 상속을,
  - Scheme에선 일급 함수의 개념을 차용함
- 자바스크립트는 <span>Interpreter 언어</span>
  - = 개발자가 별도의 컴파일 작업을 수행하지 않음
- 멀티 패러다임 프로그래밍 언어
  - 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍을 지원
- 객체지향 언어가 아니라고 오해를 많이 받지만, JS는 클래스 기반 객체지향 언어보다 효율적이면서 강력한 <span>Prototype 기반의 객체지향 언어</span>이다.

### 컴파일러 vs 인터프리터

- 컴파일러
  - 코드를 실행하기 전에 컴파일 타임에 소스코드 전체를 한번에 머신코드로 변환한 후 실행함
      - → 빠르게 동작하는 머신코드를 생성하고 최적화함
  - 실행 파일을 생성함
  - 컴파일 단계와 실행 단계가 분리되어 있음
      - 명시적인 컴파일 단계를 거치고, 명시적으로 실행파일을 실행함
      - 코드 실행 속도가 빠름
  - 실행 전에 컴파일은 단 한번 수행됨
- 인터프리터
  - 코드가 실행되는 단계인 runtime에 문 단위로 한 줄씩 중간코드인 바이트코드로 변환한 후 실행함
  - 실행 파일을 생성하지 않음
  - interpret 단계와 실행 단계가 분리되어 있지 않음
      - 한줄씩 바이트코드로 변환하고 즉시 실행함
      - 코드 실행 속도가 비교적 느림
  - 코드가 실행될 때마다 interpret 과정이 반복 수행됨

→ But 대부분의 모던 브라우저에서 사용되는 인터프리터는 명시적인 컴파일 단계를 거치지는 않지만, 복잡한 과정을 거치며 일부 소스코드를 컴파일하고 실행함

→ 인터프리터 언어의 장점인 동적 기능 지원을 살리면서 실행 속도가 느리다는 단점을 극복.