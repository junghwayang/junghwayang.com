---
title: 'CSS - Grid'
date: '2020-07-03'
---

two-dimensional grid-based layout system

## Grid Container

```css
.container {
  display: grid | inline-grid;
  grid-template-columns: [line-name] track-size ...;
  grid-template-rows: [line-name] track-size ...;
  grid-template-areas:
    " | . | none | ..."
    "...";
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
  gap: <grid-row-gap> <grid-column-gap>;
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  place-items: <align-items> <justify-items>;
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  place-content: <align-content> <justify-content>;

  grid-auto-flow: row | column | row dense | column dense;


}
```

### display

- `grid` : **block**-level grid
- `inline-grid` : **inline**-level grid

### grid-template-columns / grid-template-rows

- track-size
  - length or percentage or fraction
- `fr` : fraction
  - `1fr 1fr 1fr` = 각 item이 화면의 1/3씩만큼 차지
  - non-flexible item들이 먼저 할당된 뒤에 free space를 flexible item들에 할당
  - `grid-template-columns: 1fr 50px 1fr 1fr;`인 경우 : 50px를 두번째 아이템에 할당한후, 남은 space를 셋이서 1/3씩 차지함
- 특정 column의 width값을 스크린 크기에 상관없이 고정하고 싶을땐 `px`, 스크린 크기에 따라 responsive할땐 `fr`나 `%`

> `%` 대신 **`fr`로 쓸것!** - `%`로 지정하면 gap을 넣을 경우 gap까지 포함돼서 좌우로 스크롤이 생기게 됨. 근데 `fr`로 하면 gap까지 포함해서 비율을 나눠갖기 때문에 좌우 스크롤이 없음.

- track values 사이마다 space를 두면 자동으로 grid lines에 +, -의 번호가 생성됨

```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg" alt="grid-template" width="400px">

- track values 사이마다 `[ ]`을 넣어 따로 line-name을 지정해줄 수 있음
- `grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];`처럼 여러 name을 가질수도 있음

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/template-column-rows-02.svg" alt="grid-template" width="400px">

- 반복되는 값에는 `repeat()`으로.

```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];

  /* 반복되는 부분을 repeat()으로 대체 */
  grid-template-columns: repeat(3, 20px [col-start]);
}
```

- 이렇게 `auto-fit` 넣어주면, 스크린 크기 바뀔때마다 알아서 column 크기를 맞춰줌

```css
grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
```

### grid-template-areas

`grid-area`로 정해놓은 이름으로 grid template을 시각적으로 structuring하기

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg" alt="grid-template-areas" width="300px">

- `.` : empty grid cell
- `none` : no grid areas are defined
- grid cell 갯수만큼 grid area를 지정해줘야함 (=column이 4개면 각 row마다 4개의 값이 있어야함)
- line이름을 따로 짓는게 아니라, grid area의 이름만 지정해주면, line이름은 저절로 생성됨
  - grid area 이름이 `header`면, starting line(row&column 방향 둘다)은 자동으로 `header-start`가 되고,
  - last line은 `header-end`가 됨
  - → 한 line이 여러개의 이름을 갖게 됨
  - 사진에서의 맨 왼쪽 수직선은 `header-start`, `main-start`, `footer-start`처럼 3개의 이름을 가짐.

### grid-template

Shorthand for setting `grid-template-rows` + `grid-template-columns` + `grid-template-areas` together

> `grid-template`은 주어진 auto값을 reset하지 않음 → auto값을 다 갈아엎는 `grid`를 대신 쓸 것

```css
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```

이 3개를 `grid-template` 하나로 줄이기

```css
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

### gap

- Shorthand for `row-gap` + `column-gap`
- gap은 column/row 사이에만 생김 (container 밖에는 X)
- `row-gap` 안 정해주면 `column-gap`이랑 같은값 지정됨

```css
.container {
  gap: 1.5rem 1rem;       /* row-gap column-gap */
}
```

### place-items

- Shorthand for `align-items` + `justify-items` together
- `place-items: <align-items> <justify-items>;`

#### justify-items

- item들을 column기준 좌우방향으로 정렬 (start는 왼쪽, end는 오른쪽)
- start | end | center | stretch

`justify-items: center;`

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg" alt="justify-items" width="200px">

#### align-items

- item들을 row기준 상하방향으로 정렬 (start는 윗쪽, end는 아랫쪽)
- start | end | center | stretch

`align-items: center;`

<img src="https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg" alt="align-items" width="200px">

### place-content

- Shorthand for `align-content` + `justify-content` together
- `place-content: <align-content> <justify-content>;`

#### justify-content

- start | end | center | stretch | space-around | space-between | space-evenly

`justify-content: space-around;`

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg" alt="justify-content" width="200px">

#### align-content

- start | end | center | stretch | space-around | space-between | space-evenly

`align-content: space-around;`

<img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg" alt="align-content" width="200px">

### grid-auto-flow

grid로 설정하지 않은 곳에 grid item이 생기면 자동으로 grid를 늘려 grid item을 생성해줌 = ***auto-placement***


### grid-auto-rows

- 각 row들의 높이가 다를때, `grid-auto-rows: 200px;`로 해주면 모든 row들의 높이가 200px로 똑같이 맞춰짐
- 근데 이럴경우, content가 200px안에 다 안들어가면 내용이 밖으로 삐져나감
- `grid-auto-rows: minmax(10em, auto);`로 해주면 content가 삐져나갈 경우 해당 row 높이만 content를 다 커버하도록 늘어남
  - 글씨에 따라 크기가 변하는 경우, `px`보다 `em`이나 `rem` 써주기
  



## Grid Items

### justify-self / align-self

container의 정렬값에 상관없이 특정 item만 특별하게 정렬할때