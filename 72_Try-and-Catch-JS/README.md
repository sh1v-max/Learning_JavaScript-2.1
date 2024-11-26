# JavaScript `try` and `catch` - From Basic to Advanced

In JavaScript, error handling is an essential part of writing reliable and robust code. The `try` and `catch` statements provide a way to handle exceptions or errors that may occur during code execution. This document explains `try` and `catch` from basic to advanced levels.

## Table of Contents
1. [Basic Usage](#basic-usage)
2. [Error Object](#error-object)
3. [Finally Block](#finally-block)
4. [Nested Try-Catch](#nested-try-catch)
5. [Throwing Errors](#throwing-errors)
6. [Custom Error Handling](#custom-error-handling)

---

## 1. Basic Usage

The basic syntax of a `try...catch` block is as follows:

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

### Example:
```javascript
try {
  let result = 10 / 0; // No error
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error);
}
```

- If no error occurs inside the `try` block, the `catch` block is skipped.
- If an error occurs, the `catch` block is executed, and the error is passed to the `catch` parameter.

## 2. Error Object

The `catch` block receives an **error object** which contains details about the error, such as the error message and stack trace. You can access the error message with `error.message` and the full error stack with `error.stack`.

### Example:
```javascript
try {
  let num = undefined;
  let result = num + 10;
} catch (error) {
  console.log("Error message: " + error.message); // Undefined is not a number
  console.log("Stack trace: " + error.stack);
}
```


## 3. Finally Block

The `finally` block is optional and runs **regardless of whether an error was thrown** or not. It is commonly used to clean up resources like closing file handlers, database connections, etc.

### Syntax:
```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle error
} finally {
  // Code to execute after try-catch (cleanup)
}
```

### Example:
```javascript
try {
  console.log("Executing risky code...");
  let result = 5 / 0; // Infinity, no error thrown
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("This will run no matter what.");
}
```

Output:
```
Executing risky code...
This will run no matter what.
```


## 4. Nested Try-Catch

You can place `try-catch` blocks inside other `try-catch` blocks. This allows you to handle errors at multiple levels of your code.

### Example:
```javascript
try {
  try {
    let result = JSON.parse("invalid JSON");
  } catch (innerError) {
    console.log("Inner error: " + innerError.message); // Handles inner error
    throw new Error("Re-throwing error from inner block");
  }
} catch (outerError) {
  console.log("Outer error: " + outerError.message); // Handles outer error
}
```


## 5. Throwing Errors

You can use the `throw` statement to explicitly create and throw your own errors. This is useful when you want to handle specific conditions or validate input in your functions.

### Syntax:
```javascript
throw new Error('Custom error message');
```

### Example:
```javascript
function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older.");
  }
  console.log("Age is valid");
}

try {
  validateAge(16);
} catch (error) {
  console.log("Error: " + error.message); // Error: Age must be 18 or older.
}
```


## 6. Custom Error Handling

In JavaScript, you can create custom error types by extending the built-in `Error` class. This allows you to throw specific types of errors with custom messages and properties.

### Example:
```javascript
class CustomError extends Error {
  constructor(message, code) {
    super(message);  // Pass message to the base Error class
    this.name = this.constructor.name; // Set the name of the custom error
    this.code = code; // Add a custom code property
  }
}

try {
  throw new CustomError("Invalid input", 400);
} catch (error) {
  console.log(`${error.name} [${error.code}]: ${error.message}`);
}
```

Output:
```
CustomError [400]: Invalid input
```


## Best Practices for Using `try...catch`

1. **Use `try...catch` for Code that Might Fail**:  
   - Wrap only the code that has a potential to fail (e.g., parsing JSON, network requests) in a `try` block.
   - Avoid using `try...catch` for control flow in normal code execution.

2. **Handle Specific Errors**:  
   - Be specific about the errors you handle. For instance, handle specific types of exceptions like `TypeError` or `SyntaxError` instead of using a general catch-all.

3. **Use `finally` for Cleanup**:  
   - Always use the `finally` block for cleanup operations that should run regardless of whether an error occurs or not (e.g., closing files, clearing timeouts).

4. **Avoid Empty Catch Blocks**:  
   - Always log or handle the error in a meaningful way. An empty `catch` block may hide issues in your code.

## Conclusion

`try...catch` is an essential mechanism in JavaScript for handling errors gracefully. Understanding how to handle and throw custom errors, manage error objects, and clean up resources with `finally` helps you write robust and user-friendly applications.

## Reference 
If you want to know more about try/catch in JavaScript, visit:
- [FreeCodeCamp](https://www.freecodecamp.org/news/try-catch-in-javascript/)
- [MDN web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [YouTube](https://www.youtube.com/watch?v=JNOmHVrSnwo&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=124)