---
title: 'Spread and Destructuring'
date: '2020-04-30'
---

## `...` : Spread operator

`...arr` returns an unpacked array. (comma-separated arguments)

= it **spreads** the array.

e.g. `const num = [1, 2, 3];` → `...num = 1 2 3`

```js
const citrus = ['Lime', 'Lemon', 'Orange'];
const fruits = ['Apple', ...citrus, 'Banana', 'Coconut'];

console.log(fruits);           // ["Apple", "Lime", "Lemon", "Orange", "Banana", "Coconut"]
```

```js
const fullName = {
  firstName: 'James',
  lastName: 'Bond'
}

const user = {
  ...fullName,
  id: 1,
  username: 'jamesbond007'
}

console.log(user);           // {firstName: "James", lastName: "Bond", id: 1, username: "jamesbond007"}
```

## Rest parameters

```js
const filter = (...args) => {                    // args들을 array로 인식
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));                    // [1]
```

## Destructuring

```js
const user = { id: 5, firstName: 'Junghwa', lastName: 'Yang' }

function greeting ({ firstName, lastName }) {
  console.log(`Welcome, ${firstName} ${lastName}`);
}

greeting(user);             // Welcome, Junghwa Yang
```

```js
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1);             // 1
console.log(num3);             // 3
```

```js
// TRICKS

// Swap value among variables
let a = 10, b = 20;

[b, a] = [a, b];

console.log(a);                // 20
console.log(b);                // 10

// Remove some elements
const num = [1, 2, 3, 4, 5];

function removeFirstTwo(list) {
  const [,, ...arr] = list;
  return arr;
}

console.log(removeFirstTwo(num));        // [3, 4, 5]
```

```js
const animals = [
  { name: 'cat', sound: 'meow', feedingRequirements: { food: 2, water: 3 }},
  { name: 'dog', sound: 'woof' }
];

const [cat, dog] = animals;

console.log(cat);           // { name: "cat", sound: "meow", feedingRequirements: { food: 2, water: 3 }}
console.log(dog);           // { name: "dog", sound: "woof" }

const { name, sound, feedingRequirements } = cat;

console.log(name);                        // cat
console.log(sound);                       // meow
console.log(feedingRequirements);         // { food: 2, water: 3 }

// Assign variables from objects
const { name: catName, sound: catSound, feedingRequirements: {food, water} } = cat;

console.log(catName);             // cat
console.log(catSound);            // meow
console.log(food);                // 2

function useAnimals (animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

const [animalName, makeSound] = useAnimals(dog);

console.log(animalName);          // dog
makeSound();                      // woof
// useState 쓰는거랑 비슷한 효과
```

```js
const cars = [
  {
    model: 'Tesla Model 3',
    colorsByPopularity: ['red', 'white'],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

const [tesla] = cars;

const {
  colorsByPopularity: [teslaTopColor],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

console.log(teslaTopColor);           // red
console.log(teslaTopSpeed);           // 150
```