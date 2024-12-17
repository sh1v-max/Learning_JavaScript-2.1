# Closures in JavaScript

A **closure** in JavaScript is a combination of a **function** and the **lexical environment** in which that function was declared. Closures allow functions to access variables from an outer scope, even after the outer function has finished executing.

Closures are one of the most important and powerful concepts in JavaScript, enabling functionalities like **data hiding**, **encapsulation**, and **maintaining state**.


## Table of Contents:
1. [What is a Closure?](#what-is-a-closure)
2. [How Do Closures Work?](#how-do-closures-work)
3. [Why Use Closures?](#why-use-closures)
4. [Examples of Closures](#examples-of-closures)
   - [Basic Example](#basic-example)
   - [Preserving State](#preserving-state)
   - [Private Variables with Closures](#private-variables-with-closures)
5. [Closures and Loops](#closures-and-loops)
6. [Use Cases of Closures](#use-cases-of-closures)
7. [Advantages of Closures](#advantages-of-closures)
8. [Conclusion](#conclusion)



## What is a Closure?

A **closure** is created when a function remembers the **variables** from its **lexical scope** even after the outer function has finished executing.

In other words:
- A function **"remembers"** where it was defined.
- It has access to the variables in its outer function **even after the outer function returns**.



## How Do Closures Work?

Closures work because of:
1. **Lexical Scope**: Variables are resolved based on where functions are defined, not where they are called.
2. **Scope Chain**: Functions can access variables from their own scope, outer scope, and global scope.


### Example of Lexical Scope
```javascript
function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable); // Access outer function's variable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am from outerFunction
```

Here:
- `innerFunction` **remembers** `outerVariable` because of closures.
- Even after `outerFunction` has returned, `innerFunction` still has access to `outerVariable`.


## Why Use Closures?

Closures allow:
1. **Data Encapsulation**: Create private variables and functions.
2. **Persistent State**: Functions can "remember" data between calls.
3. **Callbacks and Asynchronous Programming**: Functions maintain context in asynchronous code.
4. **Function Factories**: Create functions dynamically with customized behavior.


## Examples of Closures

### 1. Basic Example

```javascript
function greet() {
  const name = "John"; // Outer variable
  return function () {
    console.log("Hello, " + name);
  };
}

const sayHello = greet();
sayHello(); // Output: Hello, John
```

Here, the returned function has access to `name` because of closure.



### 2. Preserving State

Closures allow you to preserve state in functions.

```javascript
function counter() {
  let count = 0; // State preserved in closure

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();
increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3
```

Here:
- The `count` variable is **private** to the `counter` function.
- It is "remembered" by the returned inner function.



### 3. Private Variables with Closures

Closures help create private variables in JavaScript.

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}, Balance: ${balance}`);
      }
    },
    checkBalance() {
      console.log(`Balance: ${balance}`);
    },
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50); // Deposited: 50, Balance: 150
myAccount.withdraw(30); // Withdrawn: 30, Balance: 120
myAccount.checkBalance(); // Balance: 120
```

Here:
- `balance` is a private variable that cannot be accessed directly.
- The returned object methods `deposit`, `withdraw`, and `checkBalance` form a closure around `balance`.



## Closures and Loops

Closures are often used to fix issues with loops and asynchronous code.

### Problem with `var` in a Loop

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4
```

- The problem occurs because `var` is function-scoped and not block-scoped.
- The same `i` is shared across all iterations.

### Solution Using Closures

```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3
```

OR with `var` and a closure:

```javascript
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Output: 1, 2, 3
```



## Use Cases of Closures

1. **Data Encapsulation**: Hiding implementation details and exposing limited functionality.
2. **Creating Private Variables**: Preventing direct access to variables.
3. **Function Factories**: Generating functions dynamically.

   ```javascript
   function multiplier(factor) {
     return function (number) {
       return number * factor;
     };
   }

   const double = multiplier(2);
   console.log(double(5)); // Output: 10
   ```

4. **Event Handlers and Callbacks**: Preserving context in asynchronous code.
5. **Memoization**: Optimizing performance by caching results.


## Advantages of Closures

1. **Private Variables**: Hide data from external access.
2. **Persistent State**: Maintain state between function calls.
3. **Cleaner Code**: Organize logic and encapsulate functionality.
4. **Improved Modularity**: Split code into small, reusable parts.


## Conclusion

Closures are a fundamental concept in JavaScript that enable:
- Access to variables from an outer scope.
- Data encapsulation and private variables.
- Persistent state between function executions.
