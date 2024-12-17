# IIFE (Immediately Invoked Function Expression) in JavaScript

An **IIFE** (Immediately Invoked Function Expression) is a function that is **executed immediately after its definition**. It is a powerful and useful pattern in JavaScript, often used to avoid polluting the global scope and create private variables.



## Table of Contents:
1. [What is an IIFE?](#what-is-an-iife)
2. [Syntax of an IIFE](#syntax-of-an-iife)
3. [Why Use IIFE?](#why-use-iife)
4. [Examples of IIFE](#examples-of-iife)
5. [IIFE with Parameters](#iife-with-parameters)
6. [Named vs Anonymous IIFE](#named-vs-anonymous-iife)
7. [IIFE and Closures](#iife-and-closures)
8. [Benefits of IIFE](#benefits-of-iife)
9. [Conclusion](#conclusion)


## What is an IIFE?

An **IIFE** is a **function expression** that is defined and immediately invoked (executed). The purpose of IIFE is to create a local scope for the variables inside the function and avoid polluting the global scope.

The **syntax** includes:
1. Defining a function expression.
2. Wrapping it in parentheses `()` to make it an expression.
3. Immediately invoking it with `()`.


## Syntax of an IIFE

The general syntax of an IIFE is:

```javascript
(function () {
  // Code to be executed immediately
})();
```

OR with arrow functions:

```javascript
(() => {
  // Code to be executed immediately
})();
```



### Key Points:
- An IIFE is **wrapped in parentheses** to turn it into an **expression**.
- It is immediately invoked using `()`.



## Why Use IIFE?

1. **Avoid Global Scope Pollution**: Variables inside an IIFE are not accessible outside, preventing conflicts.
2. **Encapsulation**: It creates a private scope for variables.
3. **Execute Code Immediately**: Useful for initialization or running code on load.
4. **Avoid Hoisting Issues**: IIFEs are expressions, so they are not hoisted like regular functions.


## Examples of IIFE

### 1. Basic IIFE Example

```javascript
(function () {
  console.log("IIFE is executed immediately!");
})();
```

**Output**:
```
IIFE is executed immediately!
```



### 2. IIFE with Arrow Function

```javascript
(() => {
  console.log("Arrow function IIFE");
})();
```

**Output**:
```
Arrow function IIFE
```



## IIFE with Parameters

You can pass parameters to an IIFE:

```javascript
(function (name) {
  console.log("Hello, " + name);
})("Aman");
```

**Output**:
```
Hello, Aman
```

Here, the string `"Aman"` is passed as an argument to the IIFE.



## Named vs Anonymous IIFE

An IIFE can be either **anonymous** (no name) or **named** (has a name).

### 1. Anonymous IIFE
```javascript
(function () {
  console.log("Anonymous IIFE");
})();
```

### 2. Named IIFE
```javascript
(function greet() {
  console.log("Named IIFE");
})();
```

**Note**: The function name `greet` is only accessible inside the IIFE and cannot be called outside of it.



## IIFE and Closures

IIFE can be combined with **closures** to create private variables:

```javascript
const counter = (function () {
  let count = 0; // Private variable
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

### Explanation:
- The variable `count` is **private** and cannot be accessed directly.
- The `increment` and `decrement` methods have access to `count` through **closures**.

## Benefits of IIFE

1. **Prevents Global Variable Pollution**: Variables are confined to the IIFE scope.
2. **Encapsulation**: Provides a clean, private scope.
3. **Initialization**: Runs code immediately, ideal for setup logic.
4. **Modularity**: Useful for wrapping code into self-contained modules.
5. **Works with Closures**: Provides private variables.


## Conclusion

IIFE (Immediately Invoked Function Expression) is a powerful pattern in JavaScript that helps execute code immediately while maintaining a private scope. It is commonly used to:
- Prevent global scope pollution.
- Initialize variables.
- Encapsulate logic.
