# Public and Private Fields in JavaScript Classes

In JavaScript, classes are templates for creating objects. They encapsulate properties (fields) and methods (functions) that define the behavior of an object. With the introduction of private fields in ECMAScript 2022 (ES2022), JavaScript now allows developers to create fields that are strictly private, meaning they can only be accessed within the class. This is a key feature for encapsulating the internal state of an object and restricting direct access to certain data.

## Public Fields

A **public field** in a JavaScript class is any property that can be accessed or modified from outside the class. These fields are part of the object instance and are accessible from anywhere in the code, including from outside the class.

### Example of Public Fields:
```javascript
class Person {
  constructor(name, age) {
    this.name = name; // Public field
    this.age = age; // Public field
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice (public field)
console.log(person1.age); // Output: 30 (public field)
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Characteristics of Public Fields:
- Public fields are **accessible** from any part of the program.
- They are typically used to store the main data or properties of the object, such as a `name`, `age`, or `address`.
- You can directly modify public fields using the dot notation: `object.property`.

## Private Fields

**Private fields** in JavaScript classes are properties that are intended to be **private** to the class. These fields can only be accessed or modified from within the class. Private fields are declared using the `#` syntax, and they cannot be accessed outside the class, making them an important tool for **data encapsulation**.

### Example of Private Fields:
```javascript
class Person {
  #name;  // Private field
  #age;   // Private field

  constructor(name, age) {
    this.#name = name;  // Private field initialization
    this.#age = age;    // Private field initialization
  }

  greet() {
    console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
  }

  getName() {
    return this.#name;  // Access private field via a method
  }

  setAge(age) {
    this.#age = age;  // Modify private field via a method
  }
}

const person1 = new Person("Alice", 30);
console.log(person1.getName()); // Output: Alice (using a getter method)
person1.setAge(31);
person1.greet(); // Output: Hello, my name is Alice and I am 31 years old.
```

### Characteristics of Private Fields:
- Private fields are declared with a `#` symbol, like `#fieldName`.
- They **cannot be accessed** directly from outside the class.
- If you try to access a private field from outside the class, JavaScript will throw a `SyntaxError`.
  ```javascript
  console.log(person1.#name);  // SyntaxError: Private field '#name' must be declared in an enclosing class
  ```
- To interact with private fields, you must use **public methods** (getter/setter) to access or modify the data.

### Why Use Private Fields?
- **Encapsulation**: Prevents external code from directly accessing or modifying internal object data, ensuring better control and data integrity.
- **Data Security**: Sensitive data, such as a password or a social security number, can be stored in private fields, making it impossible for external code to manipulate it directly.
- **Implementation Hiding**: The implementation details of the class are hidden from external code, making it easier to change or refactor the class without affecting other parts of the code.


## Example Comparison: Public vs Private Fields

Here’s a more concrete example showing the difference between public and private fields:

```javascript
class BankAccount {
  #balance;  // Private field

  constructor(owner, balance) {
    this.owner = owner;  // Public field
    this.#balance = balance;  // Private field initialization
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;  // Modify private field
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Amount must be greater than zero.");
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance && amount > 0) {
      this.#balance -= amount;  // Modify private field
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  getBalance() {
    return this.#balance;  // Access private field via a getter method
  }
}

const account = new BankAccount("John Doe", 1000);
console.log(account.owner);  // Output: John Doe (public field)
account.deposit(500);  // Output: Deposited $500. New balance: $1500
account.withdraw(200);  // Output: Withdrew $200. New balance: $1300
console.log(account.getBalance());  // Output: 1300 (via a getter method)
```

### What can you do with public and private fields?
- **Public fields** are good for storing data that you want to be **accessible** and **modifiable** from outside the class.
- **Private fields** are good for storing data that should only be **modified** or **accessed** by the class itself, often used for internal state or sensitive information.

## Summary

### Public Fields:
- Defined without a `#` symbol.
- Accessible from anywhere in the program.
- Used to store data that needs to be available or modified externally.

### Private Fields:
- Defined with a `#` symbol (e.g., `#fieldName`).
- Accessible only inside the class.
- Prevent direct access or modification from outside the class, ensuring better data security and encapsulation.

Private fields are an important tool for creating robust, secure, and maintainable JavaScript classes. They are ideal for managing internal state while keeping sensitive data safe from unintended access.

## Reference
To get to know more about private and public fields in class in JavaScript, visit:
- [YouTube](https://www.youtube.com/watch?v=Mu1m4ssFFmE&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=131&pp=iAQB)
