# `return` Keyword in JavaScript Functions

The `return` keyword in JavaScript functions serves multiple purposes:

## 1. Returning Values
The `return` statement sends a value back to the function caller.

```js
function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 4);  // Output: 20
```

## 2. Ending Function Execution
The `return` statement stops the function’s execution immediately, ignoring any further code.

```js
function checkNumber(num) {
  if (num < 0) {
    return "Negative number";
  }
  console.log("This won't execute if num is negative.");
}
```

## 3. No `return`
When no `return` is specified, the function returns `undefined` by default.

```js
function greet() {
  console.log("Hello");
}
let result = greet();  // result is undefined
```

## 4. Returning Multiple Values
In JavaScript, a function cannot return multiple values directly. However, you can return an array or object.

```js
function getCoordinates() {
  return { x: 10, y: 20 };
}
let coords = getCoordinates();  // { x: 10, y: 20 }
```

## Summary
The `return` keyword plays a crucial role in controlling function behavior, such as returning values and terminating execution early.
