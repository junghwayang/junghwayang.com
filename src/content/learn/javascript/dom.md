---
title: 'DOM (Document Object Model)'
date: '2020-07-19'
---

## getElements

```js
// return array of all elements
document.getElementsByTagName('li');
document.getElementsByClassName('btn');

// return length of array
document.getElementsByTagName('li').length;  

// 바꾸려면 array[index]로 설정해야함
document.getElementsByTagName('li')[2].style.color = 'red';

// id는 무조건 하나이니까 array가 아니라 바로 객체 반환
document.getElementById('title'); 
document.getElementById('title').innerHTML = 'Welcome'; // 인덱스설정 필요X
```

- `getElements` : more broad, more difficult to target individual objects
- `querySelector` : allow for more complex queries (id, class, element, tag names, 등등으로 target element를 특정할수있음)

> querySelector를 더 많이 사용함

## querySelector

```js
// 해당 되는게 여러개여도 array반환이 아니라 제일 처음꺼만 반환
document.querySelector('#title');  // by id
document.querySelector('li.item');  // select <li class='item'>
document.querySelector('.list a');  // a inside class 'list'

// array반환
document.querySelectorAll('li.item');

// manipulate
// use camelCase, put '' for value
document.querySelector('h1').style.fontSize = '2rem'; 

// button태그 안에 속한 모든 class들의 DOMTokenList를 리턴
document.querySelector('button').classList;
document.querySelector('button').classList.add('invisible');
document.querySelector('button').classList.remove('invisible');
document.querySelector('button').classList.toggle('invisible');
// <button class='btn invisible'>
```

## Element property

```js
// <h1 id='title'><strong>Hello</strong></h1>

document.querySelector('h1').innerHTML;
// <strong>Hello</strong> (all of the HTML that is inside)
document.querySelector('h1').innerHTML = '<em>Good Bye</em>';

document.querySelector('h1').textContent;
// Hello  (only text)
```

## Element Attributes

`<h1 class='title'>`에서 class, `<a href='url'>`에서 href 등등이 attributes.

```js
document.querySelector('a').attributes;
// list of all the attributes that are currently attached to 'a' tag

document.querySelector('a').getAttribute('href');
// https://www.google.com

document.querySelector('a').setAttribute('href', 'https://www.bing.com/');
// 링크가 bing으로 바뀜
```

## AddEventListener

- Callback 함수에 handleClick() 대신 ()없이 handleClick 쓰는 이유
  - `handleClick` : 버튼이 “클릭”됐을때 실행됨
  - `handleClick()` : 버튼 클릭안해도 페이지가 로딩되자마자 실행됨

```js
// anonymous function
document.querySelector('button').addEventListener('click', () => {
  alert('Clicked');
});

// or

// 함수를 나중에 재사용해야할때
document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
  alert('Clicked');
}

// class가 drum인 모든거에 이벤트추가
const allButtons = document.querySelectorAll('.drum');

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', () => {
    alert('Clicked');
  });
}

// this쓸땐 arrow function쓰면 작동안됨. function() 써줘야함.
// arrow functions do not have their own 'this' context.
const allButtons = document.querySelectorAll('.drum');

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function() {
    console.log(this.innerHTML);
  });
}
```