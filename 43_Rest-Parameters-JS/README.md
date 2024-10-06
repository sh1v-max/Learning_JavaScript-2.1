# Rest Parameter in JavaScript

The **rest parameter** in JavaScript allows a function to accept an **indefinite number of arguments** as an array. It's a powerful feature that simplifies how we work with multiple arguments in functions, especially when we don’t know beforehand how many arguments will be passed.

The **rest parameter** is denoted by three dots (`...`) followed by a name, and it must always be the **last** parameter in the function definition.



## Syntax

```javascript
function functionName(...restParameter) {
  // function body
}
```

Here, `restParameter` collects all the remaining arguments passed to the function into a single array.


## Key Use Cases of Rest Parameter

### 1. Collecting Arguments in Functions

The rest parameter allows a function to accept **any number of arguments** as an array. This is particularly useful when you want your function to handle multiple inputs flexibly.

#### Example:
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10));      // Output: 15
```

- Here, `numbers` is an array containing all the arguments passed to the `sum` function. The function uses `reduce()` to sum them up.

### 2. Combining Fixed and Rest Parameters

You can combine regular parameters with the rest parameter to handle both **specific arguments** and **variable arguments** in a single function.

#### Example:
```javascript
function introduce(greeting, ...names) {
  return `${greeting}, ${names.join(' and ')}`;
}

console.log(introduce("Hello", "John", "Jane", "Doe")); 
// Output: "Hello, John and Jane and Doe"
```

- In this case, `greeting` is a fixed argument, and `names` collects the remaining arguments into an array.

### 3. Array Destructuring

You can use the rest parameter when destructuring arrays, where the rest of the elements are gathered into a new array.

#### Example:
```javascript
const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]
```

- Here, the first two elements are assigned to `first` and `second`, and the rest are gathered into the `rest` array.

### 4. Object Destructuring with Rest

You can use the rest parameter to collect the remaining properties when destructuring objects.

#### Example:
```javascript
const user = { name: 'John', age: 30, city: 'New York', job: 'Developer' };
const { name, ...rest } = user;

console.log(name); // Output: 'John'
console.log(rest); // Output: { age: 30, city: 'New York', job: 'Developer' }
```

- Here, the `name` property is extracted, and the rest of the properties are collected into the `rest` object.


## Important Notes

1. **Rest Parameter Must Be Last**:
   The rest parameter must always be the last in the parameter list. You cannot have parameters after the rest parameter.

   ```javascript
   function example(...args, last) { }  // ❌ This will throw an error
   ```

2. **Rest vs. Spread Operator**:
   - **Rest Operator** (`...`): Collects multiple arguments into an array.
   - **Spread Operator** (`...`): Expands an array or object into individual elements.

## Conclusion

The **rest parameter** provides a clean and flexible way to work with an unknown number of arguments in JavaScript. By grouping excess arguments into an array, it simplifies tasks such as summing numbers, managing variable arguments, or gathering properties in object destructuring. It makes your functions adaptable and reusable, especially in scenarios where you need to handle different amounts of input.

## Reference:
- [MDN Web Docs: Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [YouTube](https://www.youtube.com/watch?v=-DZmZq2hyCY&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=89)