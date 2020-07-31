---
title: 'Array'
date: '2020-04-28'
---

```js
// array에 새 요소를 추가/삭제하는거지, array자체를 바꾸는게 아니기 때문에 const 사용가능
const guestList = ['Rosie', 'Junghwa', 'Jennifer'];

guestList[1];                    // "Junghwa"
guestList.length;                // 3
guestList.includes('Ash');       // false (= Does guestList include 'Ash'?)
guestList.includes('Rosie');     // true
guestList.push('Ash');           // 4 (returns guestList.length after push 'Ash' to the end of array)
guestList;                       // ["Rosie", "Junghwa", "Jennifer", "Ash"]
guestList.pop();                 // "Ash" (returns removed element (last element))
guestList;                       // ["Rosie", "Junghwa", "Jennifer"]
```

## 1. forEach

```js
const numbers = [1, 2, 3, 4, 5];

const newNumbers = [];
numbers.forEach(num => newNumbers.push(num * 2));

console.log(newNumbers);                 // [2, 4, 6, 8, 10]
```

## 2. map

Array의 각 원소에 **함수**를 적용한 값을 새 array로 return

```js
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(num => num * 2);

console.log(newNumbers);                 // [2, 4, 6, 8, 10]
```

## 3. filter

Array 원소 중 **조건이 true**인 값들로만 새 array로 return

```js
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.filter(num => num > 2);

console.log(newNumbers);                 // [3, 4, 5]
```

## 4. reduce

Array 원소들을 하나씩 더해서 **accumulate**

```js
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newNumbers);                 // 15
```

## 5. find

- **조건을 충족하는 첫번째 item**을 return
- 조건 충족하는 item이 없으면 `undefined`를 return

```js
const numbers = [1, 2, 3, 4, 5];

const newNumber = numbers.find(num => num > 2);

console.log(newNumber);                 // 3
```

## 6. findIndex

- **조건을 충족하는 첫번째 item의 index**를 return
- 조건 충족하는 item이 없으면 `-1`을 return
  
```js
const numbers = [1, 2, 3, 4, 5];

const newNumber = numbers.findIndex(num => num > 2);

console.log(newNumber);                 // 2
```

## 7. concat

두개 이상의 **array를 합쳐서** 새로운 array로 리턴

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);                   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 8. slice

```js
const numbers = [0, 1, 2, 3, 4, 5];

console.log(numbers.slice(2));          // [2, 3, 4, 5] (index 2부터 끝까지)
console.log(numbers.slice(2, 4));       // [2, 3] (index 2부터 3까지. 4포함X)
console.log(numbers.slice(1, 5));       // [1, 2, 3, 4] (index 1부터 4까지. 5포함X)
```

## 9. splice

```js
const months = ['Jan', 'March', 'April', 'June'];

// index 1자리에 / 아무것도 없애지말고 / 'Feb' 삽입
months.splice(1, 0, 'Feb');             // [] (returns deleted elements)

console.log(months);                    // ["Jan", "Feb", "March", "April", "June"]

// index 4자리에 / 1개를 없애고 / 'May' 삽입
months.splice(4, 1, 'May');             // ["June"] (returns deleted elements)

console.log(months);                    // ["Jan", "Feb", "March", "April", "May"]
```