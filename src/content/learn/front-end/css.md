---
title: 'CSS'
date: '2020-06-29'
---

> [CSS Cheatsheet](https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf)

## CSS 적용하기

- `<head>` 태그 안에 `<link rel="stylesheet" href="styles/style.css">`

- CSS 바꿀때 : [Browser default Values](https://www.w3schools.com/cssref/css_default_values.asp) 각 항목을 바꿔주기

- CSS가 적용되는 우선순위 : inline > internal > external
  - external 파일로 웹사이트 전체의 스타일을 적용하고, 특별히 따로 스타일 정할때만 inline으로 따로 지정해주기
  - inline: `<body style="background-color: red">`
  - internal: 같은 파일의 `<head>` 태그 안에 `<style></style>`로 넣어줌

- 웹사이트의 모든 element들은 <span>Box</span>형태로 이루어져 있음
  - `<hr>`도 얇은 박스형태. 굵기 정하려면 `height: 2px;` 식으로.
  - `width: 30%;`처럼 px가 아니라 %로 정해줘서, 모든 디바이스에서도 잘 보이게 하기 = responsive web

- favicon 적용: `<link rel="icon" href="favicon.ico">`

## Selector

![selector](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)

- [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- `.class` vs `#id`
  - <span>class</span>: 여러 군데에서 계속 사용가능
    - `<h1 class="heading circular">`처럼 한 element에 class 두개 중복 적용가능
  - <span>id</span>: 한 페이지에서 딱 한 element에만 사용가능
    - `<h1 id="heading circular">`처럼 두개 같이 못씀
- Attribute selector: `img[src]`
- 태그 안의 태그에 적용하기
  - `<li><span>ABC</span></li>` 여기서 ABC 스타일링 하려면 - `li span { }`
  - `<ul class="bar"><li>ABC</li></ul>` 여기서 ABC 스타일링 하려면 - `.bar li { }`

## Box Model

- <span>margin</span> = 해당 요소랑 다른 요소와의 거리
- <span>border</span> = `border: 10px solid black;`

![boxmodel](https://miro.medium.com/max/1400/1*gq1B7v2_gDEi3jkAwAvZNQ.png)

## Display

### block

스크린의 whole width를 차지 - `p`, `h1`, `div`, ...

### inline

한줄에 여러개 - `span`, `img`, `a`, ...

- `span` = inline container
  - 줄을 바꾸지 않고 같은 줄에 다른 요소 삽입
  - 뜻은 없고 그냥 그룹지어 스타일링하기 위함
  - div랑 비슷하게 그룹핑하기 위한건데, div는 block, span은 inline element

> p에 `p {display: inline;}`해주면 inline으로 변환. 마찬가지로 span에 `span {display: block;}`해주면 block인 p처럼 변함

### inline-block

inline은 width설정을 못함. inline-block해주면 inline처럼 한줄에 여러개 오는데 width 설정 가능.

### none

아예 사라짐. 원래 있던 자리도 사라짐.

↔︎ `visibility: hidden;`은 원래 있던 공간에 그대로 있는데 안보이는거.

## Text-align

텍스트 가운데정렬

```css
body {
  text-align: center;
}
```

이미지 가운데정렬

```css
img {
  display: block;
  margin: 0 auto;
}
```

## Fonts

`font-family: 'Open Sans', sans-serif;`

- sans-serif : 고딕체
- serif : 명조체처럼 커브가있음
- cursive : 필기체

- `text-shadow: 3px 2px 1px black;`
  - `3px` = **horizontal** offset from the text (how far it moves across.)
  - `2px` = **vertical** offset from the text (how far it moves down.)
  - `1px` = **blur radius** (클수록 더 fuzzy-looking shadow)
  - `black` = base **color** of the shadow

## Units

`font-size: 2rem;`

- 2em = 부모 element의 폰트사이즈의 2배. (2em = 200%)
- 2rem = Root element `<html>`의 폰트사이즈의 2배

> `<body>`에 2em, body안의 `<div>`에도 2em해주면 결국 4배가 됨. 이렇게 계속 꼬리를 물면 나중엔 몇배가 됐는지 헷갈려 버그생김 → 그럴땐 rem써주면 무조건 루트의 x배가 되니깐 헷갈릴일 없음!

- = font-size에는 px/em말고 **rem**을 써주기!!!
  - em,rem은 유저가 브라우저에서 text size를 따로 설정할 경우 유연하게 변함. px로 설정하면 유저가 기본 text size를 바꿔도 변하지않음.
- 브라우저 기본 폰트사이즈는 16px. 만약 40px 크기로 설정하고 싶으면 2.5rem해주면됨

## Float

- container 왼쪽 or 오른쪽에 위치시킴.
- 텍스트 wrapping할때만!!
  - positioning에는 쓰지말것.

```css
.container {
  float: left;
  margin-right: 30px;         /* float된 이미지 오른쪽에 여백줌 */
}

.text {
  clear: left;       /* 텍스트의 왼쪽에 이미지나 그 어떤것에 wrap 당하지 않고 밑으로내려감 */
}
```