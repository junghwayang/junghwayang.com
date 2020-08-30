---
title: 'JavaScript에서 Class와 Object의 차이점'
date: '2020-08-30'
tags: ['javascript']
---

JavaScript에서 <span>클래스(Class)</span>는 **연관있는 데이터들을 한 곳에 모아놓은 컨테이너**같은 개념으로, 클래스 자체에는 데이터가 들어있지 않고 템플릿만 정의해놓은 것이다. 상속과 생성자(Constructor) 함수를 편리하게 쓰기 위한 Syntactic sugar로써, ES6에서 새로 추가되었다.

반면, <span>객체(Object)</span>란 클래스에 실제 데이터를 넣어 만드는 **클래스의 인스턴스(Instance)**이다.

쉽게 말하면, 클래스는 붕어빵을 만드는 붕어빵 틀과 같은 것이고, 객체는 붕어빵 틀로 만들어낸 붕어빵 같은 것이다. 팥을 넣으면 팥붕어빵이 되고, 슈크림을 넣으면 슈크림붕어빵이 되는 것처럼, 객체 안에 넣는 데이터에 따라 다른 객체가 된다.

## Class, Object 만들기

그러면, 클래스를 실제로 한번 만들어보자. 이 과정은 붕어빵 틀을 만드는 것처럼 처음에 한번만 만들고 나면 여러개의 객체들을 만들어낼 수 있다.

클래스에는 field값과 method들을 정의할 수 있다. `name`, `age`와 같은 변수들이 field값이고, `sayHi()`처럼 무언가를 수행하는 값이 method이다.

클래스 내의 `constructor`는 객체를 만들때 필요한 데이터들을 전달하고, 전달받은 데이터를 클래스의 field들에 할당해준다. 그리고 method 안에서 `this`로 클래스에 저장된 field값들을 불러낼 수 있다.

```js
class User {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  sayHi() {
    console.log(`Hi, ${this.name}.`);
  }
}
```

이렇게 만든 `User` 클래스로 객체(object)를 만들어보자. 붕어빵 반죽안에 어떤 소를 넣는지에 따라 다른 붕어빵이 되듯이, 객체를 만들때도 어떤 데이터를 입력하는지에 따라 다른 객체가 된다.

새로운 객체를 만들때는 `new`라는 키워드를 사용한다. 그리고 클래스 생성자(constructor)안에 `name`과 `age`라는 데이터가 전달되기 때문에, 객체를 만들때도 이 두가지 데이터를 차례대로 전달해줘야 한다.

객체를 만들고 나면 클래스의 method를 함수처럼 `junghwa.sayHi()`로 쓸 수 있다.

```js
const junghwa = new User('Junghwa', 20);
console.log(junghwa.name);     // "Junghwa"
console.log(junghwa.age);      // 20
junghwa.sayHi();               // Hi, Junghwa.
```

## Getter and Setter

이렇게 객체를 만들땐 `name`과 `age`값을 입력해야 한다. 그런데 만약에 동료 중 누군가가 실수로 `new User('Jennifer', -1)`처럼 나이가 -1살인 불가능한 데이터값을 입력했다고 하자. 나이는 절대 음수가 될 수 없기 때문에, 음수로 입력된 `age`값을 0으로 바꾸거나 다른 기본값으로 바꿔주는 추가 조치가 필요하다. 이렇게 데이터가 잘못 입력되어도 방어적으로 처리해주는것이 **getter**와 **setter**이다.

```js
class User {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}
```

`get age`를 호출하면 클래스의 `age`값을 리턴하고, 새로운 value를 받으면 `set age`를 통해 value값을 클래스의 `age`값으로 설정한다. 하지만 getter, setter에서는 constructor에서 쓰인 `age`와 구분하기 위해 보통 age 앞에 `_`를 붙여서 `this._age`로 써준다.

setter가 받은 value값이 음수인 것을 방지하기 위해 `age`값으로 설정할때 value값이 만약 0보다 작다면 (=음수라면) 0으로 바꿔주고, 0보다 작지 않다면 value값을 그대로 써준다.

위 코드에서는 `value < 0 ? 0 : value`처럼 [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 써서 `value < 0`이 true면 '0'을, false면 'value'값을 그대로 `age`값에 설정해줬다.

## 상속 (Inheritance)

이번엔 네모, 세모, 동그라미 등의 다양한 도형들을 그리는 기능을 구현해보자. 각 도형을 나타내는 속성들은 아마도 너비와 높이, 색상 등이 될 것이다. 이렇게 모든 도형들에 공통적으로 필요한 속성들을 각 도형마다 각각 추가해주기 보다는, 한 곳에 모아서 설정해놓고 각 도형에서 이를 공동으로 사용한다. 이렇게 공통적인 한 클래스를 다른 클래스에 확장해서 사용하는 것을 상속이라고 한다.

다음처럼 `Shape`라는 공통 클래스를 만들어보자. 이 공통 클래스는 모든 도형들이 필요한 속성들: `width`(너비), `height`(높이), `color`(색상)을 가지고 있다.

```js
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`Drawing in ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}
```

이번엔 이 `Shape` 클래스를 연장해서 `Rectangle` 클래스와 `Triangle` 클래스를 만들고, 각각의 클래스로 객체를 만들어보자.

```js
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');

rectangle.draw();                       // Drawing in blue
console.log(rectangle.getArea());       // 400
```

이렇게 도형들에 공통적으로 필요한 속성들을  `Shape`라는 클래스에 넣어놓고, `extends`라는 키워드를 이용해서 `Shape` 클래스를 <span>연장</span>해 Rectangle, Triangle, Circle과 같은 도형 클래스들을 쉽게 만들 수 있다. 이렇게 연장만 해도 `Shape` 클래스에서 정의한 field와 method가 자동적으로 `Rectangle` 클래스에 포함된다.

이처럼 공통 속성들을 한 클래스에 모아서 관리하면, 새로운 속성을 추가하거나 기존 속성들을 수정할때도 한 클래스에서만 관리하면 되니 유지보수가 쉽고 에러가 생길 위험도 적어진다.

이번엔 `Shape` 클래스를 연장해서 `Triangle` 클래스를 만들어보자. 하지만 이번엔 클래스에 정의된 `getArea`의 리턴값을 바꿔줘야 한다. 이렇게 공통 클래스에 담긴 속성들을 그대로 받아오면서 `Triangle` 도형에 필요한 함수를 새로 재정의해서 덮어쓸 수 있는데, 이것을 <span>Overriding</span>이라고 한다.

또한, 부모 클래스의 `draw`에서 정의한대로 `Drawing in ${this.color}`도 출력하면서 '🔺'도 출력하게 하고 싶다면, 부모 클래스의 `draw` method를 쓰기 위해 `super.draw()`를 써주면 된다. 이렇게 하면 부모 클래스의 `draw()`도 호출되고, 그 다음에 내가 추가로 정의한 '🔺'도 출력되게 된다. 

```js
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(20, 20, 'red');

triangle.draw();
// Drawing in red
// 🔺
console.log(triangle.getArea());     // 200
```

마지막으로, `instanceof` operator로 한 객체가 어떤 클래스의 instance인지 아닌지 확인해볼 수 있다. 결과값은 true or false, 즉 Boolean값으로 리턴된다.

```js
console.log(rectangle instanceof Rectangle);      // true
console.log(triangle instanceof Triangle);        // true
console.log(triangle instanceof Shape);           // true
console.log(rectangle instanceof Triangle);       // false
console.log(triangle instanceof Rectangle);       // false
```