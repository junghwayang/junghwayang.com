---
title: 'HTML'
date: '2020-06-25'
---

> [HTML Cheatsheet](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf)

## Semantic tag

- = **의미있는 태그**
- `<article>`, `<table>`: semantic태그
- `<div>`: non-semantic (태그만 보고 내용을 알 수 없음)
- 모든곳에 막무가내로 `div` 쓰지말고 각각 이름 정해주기
- section + article의 큰 부분 = `main`

## Metadata

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## Table

```html
<table>
  <thead>      <!-- table head -->
    <tr>      <!-- table row -->
      <th>Month</th>       <!-- table head --> 
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>     <!-- table body -->
    <tr>
      <td>January</td>      <!-- table data -->
      <td>$100</td>
    </tr>
  </tbody>
</table>
```

그냥 `<th>`, `<td>`로만 써도 되는데 `<thead>`, `<tbody>`로 구분하는 이유는?

→ `thead`를 따로 써서 행 전체를 그룹핑해 스크롤해도 헤더가 fix되는 등, CSS적용하기위함

## Form

```html
<form action="mailto:메일주소" method="POST" enctype="text/plain">
	<label>Your name: </label>
	<input type="text" name="name" value=""><br>
	<label>Your Email: </label>
	<input type="email" name="email" value=""><br>
	<label>Your Message: </label>
	<textarea name="message" rows="10" cols="30"></textarea><br>
	<input type="submit" name="" value="Send">
</form>
```

## 단축키

```html
<!-- "ol>li*3" 치고 tab누르면 다음처럼 자동완성됨 -->
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```