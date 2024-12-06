# Object-Oriented Programming (OOP) and its 4 Pillars in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to organize and structure code. In OOP, objects are instances of classes, and they encapsulate data (properties) and behaviors (methods) that interact with each other.

JavaScript, though traditionally a prototype-based language, supports Object-Oriented Programming principles, especially with the introduction of classes in ECMAScript 6 (ES6). JavaScript OOP allows you to organize and structure your code using objects, making it easier to manage and extend.

The four fundamental principles (or **pillars**) of Object-Oriented Programming are:

1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**

Let's dive into each of these concepts and explain how they work in JavaScript.



## 1. **Encapsulation**

**Encapsulation** is the concept of bundling the data (properties) and the methods (functions) that operate on the data into a single unit, or class. It also restricts direct access to some of the object's components, which can prevent unintended interference and misuse of the data.

In JavaScript, we achieve encapsulation by:

- Using **classes** to define an object with its properties and methods.
- Using **private fields** (introduced in ES2022) to hide certain data from outside access, allowing access only through methods.

### Example:
```javascript
class Person {
  #ssn;  // Private field

  constructor(name, age, ssn) {
    this.name = name;
    this.age = age;
    this.#ssn = ssn;  // Private field initialization
  }

  // Public method to access private data
  getSSN() {
    return this.#ssn;
  }

  setSSN(newSSN) {
    this.#ssn = newSSN;
  }
}

const person = new Person('Alice', 30, '123-45-6789');
console.log(person.name); // Output: Alice
console.log(person.getSSN()); // Output: 123-45-6789
person.setSSN('987-65-4321');
console.log(person.getSSN()); // Output: 987-65-4321
```

Here:
- The **SSN** is encapsulated within the class as a private field (`#ssn`), and it can only be accessed or modified through the methods `getSSN()` and `setSSN()`.
- This prevents direct access to sensitive data from outside the class.


## 2. **Abstraction**

**Abstraction** is the principle of hiding the complex implementation details and exposing only the essential features of an object. The goal is to focus on what an object does, rather than how it does it.

In JavaScript, abstraction can be achieved by:
- Creating **methods** in a class that hide complex internal logic.
- Using **interfaces** (in some cases, or by documentation) to specify the functionalities that a class should provide, without exposing implementation details.

### Example:
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log('The car is starting.');
  }

  drive() {
    console.log('The car is driving.');
  }
}

class ElectricCar extends Car {
  constructor(make, model, batteryLevel) {
    super(make, model);
    this.batteryLevel = batteryLevel;
  }

  // Override the drive method to include battery check
  drive() {
    if (this.batteryLevel > 0) {
      console.log('The electric car is driving.');
    } else {
      console.log('The electric car needs charging!');
    }
  }
}

const myCar = new ElectricCar('Tesla', 'Model 3', 100);
myCar.start();  // Output: The car is starting.
myCar.drive();  // Output: The electric car is driving.
```

Here:
- The `Car` class exposes the **start** and **drive** methods, abstracting away the internal workings.
- The `ElectricCar` class overrides the `drive` method to add additional logic for battery level, while still following the abstraction principle by focusing on driving and not exposing how the battery is managed.


## 3. **Inheritance**

**Inheritance** allows a class to inherit properties and methods from another class. This allows for the reuse of code, and the creation of more specific or specialized classes based on general classes. Inheritance represents the "is-a" relationship in OOP.

In JavaScript, inheritance is implemented using the `extends` keyword, which allows a subclass to inherit from a parent class.

### Example:
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
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Override the speak method
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Output: Buddy barks.
```

Here:
- The `Dog` class **inherits** from the `Animal` class. It gains all the properties and methods of `Animal` but can also **override** the `speak()` method to provide its own behavior.
- The `super(name)` calls the constructor of the parent (`Animal`) class to initialize the `name` property.


## 4. **Polymorphism**

**Polymorphism** is the ability for different classes to provide different implementations of the same method or functionality. The most common type of polymorphism is **method overriding**, where a subclass provides a specific implementation of a method that is already defined in the parent class.

In JavaScript, polymorphism is typically achieved through method overriding, where a method in a subclass overrides a method in its parent class.

### Example:
```javascript
class Shape {
  draw() {
    console.log('Drawing a shape.');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle.');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a square.');
  }
}

const shapes = [new Shape(), new Circle(), new Square()];

shapes.forEach(shape => shape.draw());
// Output:
// Drawing a shape.
// Drawing a circle.
// Drawing a square.
```

Here:
- All classes (`Shape`, `Circle`, and `Square`) have a `draw()` method, but each class provides its own implementation of the method.
- The **same method name** (`draw()`) behaves differently based on the object's class, which is an example of **polymorphism**.


## Summary

Object-Oriented Programming (OOP) in JavaScript follows four key principles that help developers structure their code efficiently:

1. **Encapsulation**: Bundles data and methods into one unit and restricts access to internal details.
2. **Abstraction**: Hides complex implementation details and exposes only the necessary functionality.
3. **Inheritance**: Allows one class to inherit properties and methods from another class, enabling code reuse and specialization.
4. **Polymorphism**: Allows methods in different classes to have the same name but different implementations.

By applying these principles, JavaScript developers can create more modular, maintainable, and reusable code, making it easier to manage and extend software applications.