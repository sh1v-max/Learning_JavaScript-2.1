# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of **objects**, which combine **properties** (data) and **methods** (functions). OOP enables modular, reusable, and maintainable code. JavaScript supports OOP through **classes**, **prototypes**, and **objects**.


## Four Pillars of OOP

The four foundational principles of OOP are:

1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**


### 1. **Encapsulation**

Encapsulation bundles data (properties) and methods (functions) into a single unit (an object). It also restricts direct access to some properties, typically using private fields.

#### Example:

```javascript
class Person {
  constructor(name, age) {
    this._name = name; // Encapsulated property
    this._age = age;   // Encapsulated property
  }

  // Getter for name
  getName() {
    return this._name;
  }

  // Setter for name
  setName(name) {
    this._name = name;
  }

  // Method
  introduce() {
    console.log(`Hi, my name is ${this._name} and I am ${this._age} years old.`);
  }
}

const person = new Person("Alice", 25);
person.introduce(); // Output: Hi, my name is Alice and I am 25 years old.
person.setName("Bob");
console.log(person.getName()); // Output: Bob
```


### 2. **Abstraction**

Abstraction hides complex implementation details and exposes only the essential features of an object. This helps reduce complexity and increase usability.

#### Example:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Starting the car...");
    this.#igniteEngine(); // Private method
  }

  // Private method (hidden implementation detail)
  #igniteEngine() {
    console.log("Engine ignited!");
  }
}

const myCar = new Car("Tesla", "Model 3");
myCar.start(); 
// Output:
// Starting the car...
// Engine ignited!
```

In this example, the user only interacts with the `start()` method without worrying about how the engine ignition works.


### 3. **Inheritance**

Inheritance allows one class to derive (inherit) properties and methods from another class, promoting code reuse and a hierarchical structure.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```

In this example, the `Dog` class inherits from the `Animal` class and overrides the `speak` method.


### 4. **Polymorphism**

Polymorphism means "many forms." It allows methods in derived classes to override methods in the base class or to behave differently based on the object calling them.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const animals = [new Dog("Buddy"), new Cat("Whiskers")];
animals.forEach(animal => animal.speak());
// Output:
// Buddy barks.
// Whiskers meows.
```

Here, both `Dog` and `Cat` classes override the `speak` method from the `Animal` class, demonstrating polymorphism.


## Benefits of OOP

- **Modularity**: Code is organized into objects, making it easier to manage.
- **Reusability**: Classes and methods can be reused across different parts of an application.
- **Scalability**: Easier to scale and maintain complex applications.
- **Abstraction**: Hides implementation details to simplify usage.

## Conclusion

OOP in JavaScript enables developers to create scalable, maintainable, and modular applications. By understanding and applying the four pillars of OOP—**Encapsulation**, **Abstraction**, **Inheritance**, and **Polymorphism**—you can write cleaner and more efficient code.

## Reference 
If you want to know more about OOPs in JS, visit:

- [FreeCodeCamp](https://www.freecodecamp.org/news/object-oriented-programming-javascript/)
- [YouTube](https://www.youtube.com/watch?v=FH_6ww5b52k&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=128&pp=iAQB)

## Other topics

- [this](this.md) keyword in JavaScript
- [new](new.md) keyword in JavaScript
- [constructor](constructor.md) function in JavaScript