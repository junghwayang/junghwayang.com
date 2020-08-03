---
title: 'Class'
date: '2020-05-04'
---

The `class` syntax of ES6 simply replaces the constructor function creation.

```js
class BellBoy {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const bellBoy1 = new BellBoy('Timmy', 19);
```

### getters & setters

- <span>getters</span> : simply return (get) values from an object.
- <span>setters</span> : modify (set) the value of a property within an object.

```js
class User {
  constructor(username) {
    this._username = username;
  }

  // getter
  get userId() {
    return this._username;
  }

  // setter
  set userId(newUsername) {
    this._username = newUsername;
  }
}

const newUser = new User('user1234');
console.log(newUser.userId);             // user1234

newUser.userId = 'user5678';
console.log(newUser.userId);             // user5678
```