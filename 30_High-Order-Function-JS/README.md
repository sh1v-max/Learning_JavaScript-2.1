# Higher-Order Functions in JavaScript

A **higher-order function** is a function that either:
- Takes one or more functions as arguments, or
- Returns a function as its result.

These functions enable a functional programming style and allow for more flexible and concise code.

## Example of a Higher-Order Function

### Passing a Function as an Argument

```js
function greet() {
  return "Hello";
}

function executeFunction(func) {
  console.log(func());
}

executeFunction(greet);  // Output: Hello
```

In this example, `executeFunction` is a higher-order function because it takes another function `greet` as its argument.

### Returning a Function from Another Function

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));  // Output: 10
```

Here, `multiplier` is a higher-order function because it returns another function that multiplies a number by a given factor.

## Common Higher-Order Functions in JavaScript

JavaScript has several built-in higher-order functions used with arrays:

### `map()`
The `map()` method creates a new array by applying a function to each element of the original array.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // Output: [2, 4, 6]
```

### `filter()`
The `filter()` method creates a new array with all elements that pass a test implemented by a provided function.

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
console.log(even);  // Output: [2, 4]
```

### `reduce()`
The `reduce()` method applies a function against an accumulator and each element of the array to reduce it to a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // Output: 10
```

## Benefits of Higher-Order Functions

- **Abstraction**: Higher-order functions abstract actions, not just values, making code more reusable.
- **Modularity**: They promote modular code, where specific logic can be separated into reusable functions.
- **Code Simplification**: They reduce the need for loops and conditional statements by offering concise methods for handling common tasks like mapping, filtering, or reducing arrays.

## Conclusion

Higher-order functions are an essential part of functional programming in JavaScript, making it easier to manipulate functions and data in a clean, modular, and reusable manner.


For more information about Higher Order and CallBack function in JavaScript, visit: 
> - [FreeCodeCamp](https://www.freecodecamp.org/news/higher-order-functions-explained/)
> - [YouTube](https://www.youtube.com/watch?v=P6G0ucf2nSw&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=76)




