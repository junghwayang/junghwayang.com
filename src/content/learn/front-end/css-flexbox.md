---
title: 'CSS - Flexbox'
date: '2020-06-30'
---

- Flex container with three flex items

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Flex Container

```css
.flex-container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: column wrap;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
}
```

### flex-direction

: flexbox의 **메인축**을 결정. item들을 어떤 방향으로 놓을지.

- `flex-direction: row;` (default) : 수평방향. left → right
- `flex-direction: column;` : 수직방향. top → bottom
  
### flex-wrap

- `flex-wrap: nowrap;` (default) : 모든 item들이 한줄에
- `flex-wrap: wrap;` : item들이 여러줄로 나눠짐. (top → bottom)

### flex-flow

: shorthand for `flex-direction` + `flex-wrap`

### justify-content

: alignment along the **main** axis

- `justify-content: flex-start;` (default)
- `justify-content: space-between;` : 첫번째 item은 start, 마지막 item은 end에 있고, 공백을 균등하게.
- `justify-content: space-around;` : item마다 양옆으로 똑같은 사이즈의 공백. edge 공백은 각 item 사이보다 작음
- `justify-content: space-evenly;` : 두 item 사이 + edge 공백 모두 같음

<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" alt="justify-content" width="300px">

### align-items

: alignment along the **cross** axis

- `align-items: stretch;` (default) : container를 채우도록 늘림

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" alt="align-items" width="300px">

### align-content

: item들이 **여러 줄일때** 줄들을 어떻게 정렬할지 - item들이 한줄일땐 영향없음

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg" alt="align-content" width="300px"><br>

## Flex Items

### order

: 기본은 코드 순서대로 item들이 위치하지만, `order`로 container에서의 순서를 정할수있음 (잘 쓰이진 않음)

```html
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```

### flex

: shorthand for `flex-grow` + `flex-shrink` + `flex-basis`

- `flex-grow` : container 크기가 늘어날때 각 item이 어떤 비율로 커질지 결정
  - 모든 item들의 `flex-grow`가 1이면, 여분의 공간은 모든 item들이 똑같이 차지하지만,
  - 한 item이 2의 값을 가지면, 그 item은 다른 item들보다 2배만큼 더 차지함
- `flex-shrink` : container 크기가 줄어들때 각 item이 어떤 비율로 줄어들지 결정
- `flex-basis` : container 크기가 변하기 전인 기본 상태에서의 item length를 결정
  - e.g. `flex-basis: 60%;` = container width의 60% 차지

> 3개를 따로 쓰는것보다 `flex`에 합쳐서 쓸 것!

- **default**: `flex: 0 1 auto;` (2,3번째 param은 optional)

- e.g. `flex: 0 0 200px;` = flex item이 not growable, not shrinkable, initial length값이 200px

### align-self

: container에 지정된 `align-items`값을 무시하고 특정 item을 특별하게 정렬함

```html
<div class="flex-container">
  <!-- 1번 item은 가운데정렬, 2번 item은 윗쪽으로, 3번 item은 아랫쪽으로 정렬함 -->
  <div style="align-self: center">1</div>
  <div style="align-self: flex-start">2</div>
  <div style="align-self: flex-end">3</div>
  <div>4</div>
</div>
```