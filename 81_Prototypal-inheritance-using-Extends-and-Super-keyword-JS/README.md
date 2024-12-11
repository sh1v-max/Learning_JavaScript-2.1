# Prototypal Inheritance, `extends`, and `super` in JavaScript

JavaScript is an object-oriented language that utilizes **prototypal inheritance** for property and method inheritance. Through **classes** and **constructor functions**, JavaScript objects can inherit properties and methods from other objects.

### Table of Contents:
1. [Prototypal Inheritance](#prototypal-inheritance)
2. [The `extends` Keyword](#the-extends-keyword)
3. [The `super` Keyword](#the-super-keyword)


## Prototypal Inheritance

**Prototypal inheritance** is a feature in JavaScript where objects can inherit properties and methods from other objects. Unlike classical inheritance (where classes inherit from classes), JavaScript objects directly inherit from other objects.

### How Prototypal Inheritance Works:

1. Every JavaScript object has a special property called **`[[Prototype]]`** (often accessed as `__proto__`), which points to another object. This is the object from which the current object inherits properties and methods.
2. If a property or method is not found in the object itself, JavaScript looks up the chain of prototypes to find it.
3. The chain ends at **`Object.prototype`**, the root object in JavaScript.

### Example:
```javascript
const animal = {
  speak: function() {
    console.log("Animal is speaking");
  }
};

const dog = Object.create(animal);  // dog inherits from animal
dog.speak(); // Output: Animal is speaking
```

In this example:
- `dog` inherits from `animal`.
- `dog.speak()` calls the `speak` method found in `animal`.


## The `extends` Keyword

The `extends` keyword is used in JavaScript to create a **class-based inheritance**. It allows one class to **inherit** properties and methods from another class.

### Using `extends` in Classes:

When you define a class using `extends`, you are setting up prototypal inheritance between the **subclass** and the **superclass**.

### Syntax:
```javascript
class ChildClass extends ParentClass {
  // ChildClass can access methods and properties from ParentClass
}
```

### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }
  
  speak() {
    super.speak(); // Call the parent class method
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); 
// Output:
// Rex makes a sound
// Rex barks
```

### Key Points:
- **`extends`** is used to inherit from another class.
- The subclass (child class) inherits the properties and methods of the superclass (parent class).
- The **constructor** of the subclass can call the constructor of the parent class using the `super` keyword.


## The `super` Keyword

The **`super`** keyword is used to call **methods or constructors** from the parent class (superclass). It is essential for working with inheritance, as it allows the subclass to call methods or access the constructor of the parent class.

### Usage:
1. **Calling the parent class's constructor**: You use `super()` inside the constructor of the subclass to call the constructor of the parent class.
2. **Calling parent class methods**: You use `super.methodName()` to call a method from the parent class.

### Example: Using `super` with Constructor and Methods

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);  // Calls the parent class constructor
    this.grade = grade;
  }

  greet() {
    super.greet(); // Calls the parent class greet method
    console.log(`I am in grade ${this.grade}`);
  }
}

const student = new Student("Alice", 20, "A");
student.greet();
// Output:
// Hello, my name is Alice
// I am in grade A
```

### Key Points:
- **`super()`** calls the constructor of the parent class, allowing you to initialize properties inherited from the parent class.
- **`super.methodName()`** allows you to invoke a method of the parent class, enabling method overriding while still accessing the parent method.


## Summary

### Prototypal Inheritance
- Objects in JavaScript can inherit properties and methods from other objects directly via **prototypal inheritance**.
- Every object has a prototype chain that can be used to look for properties and methods.

### The `extends` Keyword
- **`extends`** is used in **class-based inheritance**, allowing one class to inherit properties and methods from another.
- A child class can override methods of the parent class, but it can still call the parent class's constructor and methods using `super`.

### The `super` Keyword
- **`super`** is used to call methods and constructors from the parent class.
- It is crucial when working with inheritance to access and reuse functionality from the parent class.

By understanding and using **prototypal inheritance**, **`extends`**, and **`super`**, you can create more efficient and reusable code with inheritance in JavaScript.

## Reference
To know more about prototypal inheritance, extend, and super keywords in JavaScript, visit:
- [YouTube](https://www.youtube.com/watch?v=xUlikVTAxrM&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=136)