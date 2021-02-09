---
title: '[JS이론] 제어문: if else, switch, for, while, do while'
date: '2020-12-17'
tags: ['javascript']
---

> 제어문 = control flow statement

## 1. 블록문 (Block statement)

- 문들을 `{ }`로 묶은것 = a.k.a 코드블록 or 블록

## 2. 조건문 (Conditional statement)

- 조건식의 평가결과에 따라 블록문의 실행을 결정
- JS의 조건문은 2가지: `if ... else`, `switch`

### if ... else

```js
if (조건식1) {
  ...
} else if (조건식2) {
  ...
} else {
  ...
}
```

### switch

```js
switch (표현식) {
  case 표현식1:
    switch 실행;
    break;
  case 표현식2:
    switch 실행;
    break;
  default:
    switch 실행;
}
```

- `default`문은 맨 마지막에 위치하니까 자동으로 switch문을 빠져나감 → 따로 break 안해줘도됨
- 여러 케이스를 묶으면 유용할때가 있음

```js
switch (month) {
  case 1: case 3: case 5:
    days = 31;
    break;
  case 4: case 6:
    days = 30;
    break;
}
```

- case, default문은 label문!
  - label 문 = 식별자가 붙은 문 (e.g. `foo: { console.log('foo'); }`)

> if ... else문 쓰는게 가능하다면 되도록 if ... else문 쓰고, switch가 더 가독성 좋을때만 switch쓰기

## 3. 반복문 (Loop statement)

- JS의 반복문 3가지: `for`, `while`, `do ... while`
- 반복 횟수가 명확할땐 `for`문, 반복 횟수가 불명확할땐 `while`문

### for

```js
for (let i = 0; i < 10; i++) {
  ...
}

// 중첩된 for문의 내부 for문에서 break를 실행하면 내부 for문을 탈출하여 외부 for문으로 진입
// 외부 for문을 탈출하려면 label문을 사용하기
// label문은 이 경우에만 쓰기. 이외의 경우엔 권장X (프로그램 흐름이 복잡해져 가독성 나빠지니까)
outer: for (조건식1) {
  for (조건식2) {
    ...
    if (...) break outer;  // outer라는 식별자가 붙은 외부 for문을 탈출
  }
}
```

### while

```js
// 무한루프
while (true) {
}

// 무한루프 탈출하는법
while (true) {
  ...

  // if문으로 탈출 조건 만들고 break로 탈출
  if (count === 3) break;
}
```

### do ... while

코드블록을 먼저 실행하고 조건식을 평가 → 코드블록이 무조건 한번이상은 실행됨

```js
do {
  ...
} while (조건식);
```

## 4. break vs continue

- `break`: 코드블록 탈출
- `continue`: 현 시점에서만 반복문 실행을 멈추고 다음 반복으로 skip

```js
// continue 안쓸때: if문 내에서 실행할 코드 작성
for (조건식) {
  if (count == 5) {
    count++;
    ...다른 코드
  }
}

// if문 내에서 실행할 코드가 길면 indent가 한단 깊어지는거니까
// 이걸 밖으로 꺼내고 continue쓰는게 가독성 좋음!!

// continue 쓸때: if문이 true면 skip하고 실행할 코드는 if문 밖에 작성
for (조건식) {
  if (count !== 5) continue;

  count++;
  ...
}
```