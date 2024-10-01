### Function Expression vs. Function Declaration in JavaScript

In JavaScript, both **function expressions** and **function declarations** are ways to define functions, but they differ in terms of syntax, behavior, and usage. Understanding these differences helps in choosing the right approach depending on the situation.

---

### 1. **Function Declaration**

- **Definition**: A **function declaration** is the standard way of defining a named function in JavaScript. These functions are created at the top of their scope, due to a behavior called **hoisting**.
  
- **Syntax**:
  ```javascript
  function functionName(parameters) {
      // Function body
  }
  ```

- **Characteristics**:
  - **Hoisting**: Function declarations are **hoisted**, meaning they are available throughout the scope even before the actual line of code is encountered. This makes the function available before it is defined in the script.
  - **Naming**: Function declarations must have a name, which is used to invoke the function.
  - **Global vs Local**: If declared in the global scope, they become global functions. If declared inside another function or block, they remain local.

- **Example**:
  ```javascript
  console.log(add(2, 3)); // Output: 5

  function add(a, b) {
      return a + b;
  }
  ```
  Here, the function `add` is called before its actual definition, but it works due to **hoisting**.

---

### 2. **Function Expression**

- **Definition**: A **function expression** involves defining a function as part of an expression, typically by assigning it to a variable. Function expressions can be either named or anonymous (without a name).
  
- **Syntax**:
  ```javascript
  const functionName = function(parameters) {
      // Function body
  };
  ```

- **Characteristics**:
  - **Not Hoisted**: Function expressions are **not hoisted**. This means the function is only accessible after the line where it is defined.
  - **Anonymous or Named**: Function expressions can be anonymous or can have a name. If named, the name is only local to the function and used for recursion or identification in debugging.
  - **Flexibility**: Function expressions are commonly used in callbacks or closures, allowing for more dynamic and flexible code.
  
- **Example**:
  ```javascript
  //console.log(multiply(2, 3)); // This will throw an error because function is not hoisted
  
  const multiply = function(a, b) {
      return a + b;
  };

  console.log(multiply(2, 3)); // Output: 6
  ```
  In this case, trying to invoke the function `multiply` before its definition results in an error because **function expressions are not hoisted**.

---

### 3. **Key Differences**

| Feature                  | Function Declaration                                | Function Expression                             |
|--------------------------|-----------------------------------------------------|-------------------------------------------------|
| **Hoisting**              | Function declarations are hoisted to the top of their scope, allowing them to be called before they are defined. | Function expressions are not hoisted. They can only be invoked after the definition. |
| **Syntax**                | Uses the `function` keyword, followed by a function name and parameters. | A function is assigned to a variable or passed as an argument. |
| **Usage**                 | Commonly used to define standalone, reusable functions. | Frequently used in callbacks, closures, and to create modular code. |
| **Invocation**            | Can be invoked before its definition due to hoisting. | Can only be invoked after the expression is evaluated. |
| **Anonymous Functions**   | Not possible; a name is required.                   | Can be either anonymous or named.               |
| **Recursion**             | Works well for recursion, as the function name is readily available. | Named function expressions can handle recursion, but anonymous ones cannot refer to themselves. |

---

### 4. **When to Use Function Declarations vs Function Expressions**

- **Function Declarations**:
  - When you want to create reusable functions that can be called throughout the program.
  - When hoisting is beneficial, i.e., if you want to define a function at the bottom of a script but call it at the top.

- **Function Expressions**:
  - When you need more flexible or dynamic function definitions, especially in callbacks, closures, or immediately invoked functions.
  - When you want the function to be created only when the execution reaches that line of code.
  - In anonymous functions, typically used in event handlers or for modularity.

---

### 5. **Examples of Usage in Callbacks**

**Function Declaration**:
```javascript
function processNumbers(num, callback) {
    return callback(num);
}

function double(n) {
    return n * 2;
}

console.log(processNumbers(5, double)); // Output: 10
```

**Function Expression (Anonymous)**:
```javascript
function processNumbers(num, callback) {
    return callback(num);
}

console.log(processNumbers(5, function(n) { 
    return n * 2;
})); // Output: 10
```

---

### 6. **Advanced Usage: Immediately Invoked Function Expressions (IIFE)**

A special kind of function expression is the **Immediately Invoked Function Expression (IIFE)**. It is a function that is defined and invoked immediately after its definition.

#### Syntax:
```javascript
(function() {
    console.log('This function runs immediately!');
})();
```
- **Use Case**: IIFE is used to create private scopes or to run code immediately without polluting the global scope.

---

### Conclusion

Understanding the difference between **function expressions** and **function declarations** is crucial for writing efficient and clean JavaScript code. Function declarations are more traditional and hoisted, making them accessible throughout their scope. In contrast, function expressions provide flexibility and are often used in modern JavaScript patterns like callbacks, closures, and modular code.

For more information, you can refer to:
- [MDN Web Docs - Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN Web Docs - Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)