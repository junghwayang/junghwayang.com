---
title: 'JSON'
date: '2020-05-06'
---

- JSON = JavaScript Object Notation
- JSON을 쓰는 이유
  - 사람이 읽기 쉬움
  - 최대한 적은 스페이스 차지하도록 single string으로 collapse down할 수 있음
  - 다른 format들(ex. XML, CSV, ..)보다 훨씬 가볍고, JS object로 변환하는게 쉬움
  - 이케아에서 사온 가구처럼 큰 가구가 작은 박스에 압축되어 있음

```js
// JS object
// need to declare variable, don't use "" for key
const user = {
  name: "Rosie",
  age: 30
}

// JSON
// JSON을 string으로 받아오고 난후 object처럼 원하는대로 백업 시킬수있음
{"name":"Rosie","age":30,"sex":"female"}
```

## JSON 변환

```js
JSON.parse(data);      // JSON -> object로 변환 (이케아 가구를 조립해서 큰 가구로 만들기)
JSON.stringify(user);  // JSON으로 변환 (큰 가구를 분해해 작은 박스에 넣기)
```