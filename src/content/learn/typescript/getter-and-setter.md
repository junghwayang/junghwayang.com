---
title: 'Getter & Setter'
date: '2021-03-03'
---

```ts
class User {
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
}

const user = new User('Steve', 'Jobs');
console.log(user.fullName);   // Steve Jobs
user.firstName = 'Rosie';
console.log(user.fullName);   // Steve Jobs
```

- 마지막에 `firstName`을 'Rosie'로 바꿔도, `fullName`에는 변경이 안됨
- 처음 `user`가 생성될 때 입력된 `firstName`, `lastName`으로 `fullName`이 설정되어, 그 후 `firstName`, `lastName`이 변경되어도 `fullName`이 다시 계산되지 않음
- → 이런 경우 <span>getter</span> 써주기

```ts
class User {
  firstName: string;
  lastName: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('Steve', 'Jobs');
console.log(user.fullName);   // Steve Jobs
user.firstName = 'Rosie';
console.log(user.fullName);   // Rosie Jobs
```

- `fullName`에 접근할 때마다 새로운 데이터를 만들고 계산
  - `fullName()`을 호출하면 호출되는 시점의 `firstName`, `lastName`을 조합하여 `fullName`을 리턴함

```ts
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

- `firstName`, `lastName` 멤버변수를 private으로 따로따로 선언하지 않고, constructor 안에서 private or public으로 설정하면 바로 멤버변수로 설정이 됨.

```ts
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private internalAge = 20;

  get age(): number {
    return this.internalAge;
  }

  set age(num: number) {
    if (num < 0) {
      throw new Error('Age should be greater than 0');
    }
    this.internalAge = num;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

- `set age()`: private 변수인 `internalAge`는 외부에서 변경 불가하니까 setter를 활용해 유효성 검사를 하고 private 변수를 변경할 수 있음