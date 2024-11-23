# Understanding Async and Await in JavaScript

## Introduction

In JavaScript, asynchronous programming is essential for handling tasks that take time, such as fetching data from an API, reading files, or performing calculations. The traditional approach to handling asynchronous operations was with callbacks or promises. However, the `async` and `await` keywords, introduced in ES8 (ECMAScript 2017), provide a more readable and concise way to work with asynchronous code.

In this document, we will explore `async` and `await`, starting with the basics and progressing to more advanced concepts.


## Table of Contents

1. [What is `async`?](#what-is-async)
2. [What is `await`?](#what-is-await)
3. [How `async` and `await` work](#how-async-and-await-work)
4. [Error Handling with `try`/`catch`](#error-handling-with-trycatch)
5. [Returning Values from `async` Functions](#returning-values-from-async-functions)
6. [Handling Multiple Asynchronous Calls](#handling-multiple-asynchronous-calls)
7. [Advanced Topics](#advanced-topics)
    - [Parallel Execution](#parallel-execution)
    - [Sequential Execution](#sequential-execution)
    - [Error Propagation in `async` Functions](#error-propagation-in-async-functions)



## What is `async`?

The `async` keyword is used to declare a function as asynchronous. This means the function will return a `Promise`, and inside it, you can use the `await` keyword to pause the function's execution until a `Promise` resolves.

### Syntax:

```javascript
async function myAsyncFunction() {
  // Your asynchronous code goes here
}
```

When you define a function with `async`, it automatically returns a `Promise`. If the function returns a non-promise value, JavaScript automatically wraps it in a resolved `Promise`.

### Example:

```javascript
async function greet() {
  return "Hello, world!";
}

greet().then(result => console.log(result)); // Output: "Hello, world!"
```

In the above example, even though `greet()` returns a string, it is wrapped in a `Promise` automatically.

## What is `await`?

The `await` keyword can only be used inside `async` functions. It pauses the execution of the function and waits for the `Promise` to resolve (or reject) before moving to the next line of code.

### Syntax:

```javascript
let result = await someAsyncFunction();
```

The `await` keyword pauses the execution until the `someAsyncFunction()` resolves and returns a result.

### Example:

```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();
```

In this example, the `await` keyword ensures that the code doesn't continue executing until the `fetch()` promise is resolved and the response is available.


## How `async` and `await` work

The combination of `async` and `await` allows you to write asynchronous code in a way that looks and behaves like synchronous code. Here's a simple flow of how they work together:

1. An `async` function is called.
2. Inside the `async` function, `await` is used to pause execution until a promise resolves.
3. Once the promise resolves, the next line of code executes.
4. If there’s an error in the promise, execution jumps to the `catch` block.

### Example:

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data); // Success
  } catch (error) {
    console.error('Error:', error); // Error handling
  }
}

fetchData();
```

In this example:
- `await fetch(...)` waits for the fetch to complete.
- `await response.json()` waits for the data to be parsed.
- If there is any error, it’s caught by the `catch` block.


## Error Handling with `try`/`catch`

When using `async` and `await`, you can handle errors more easily with the `try`/`catch` block, just like in synchronous code.

### Example:

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchData();
```

In the above code:
- If `fetch()` fails or the response is not ok, the error is thrown and caught by the `catch` block.


## Returning Values from `async` Functions

An `async` function automatically returns a promise. When you return a value from an `async` function, it is wrapped in a resolved promise.

### Example:

```javascript
async function getNumber() {
  return 42;
}

getNumber().then(result => console.log(result)); // Output: 42
```

In this example, `getNumber()` returns `42`, but because the function is `async`, it automatically returns a resolved promise with that value.


## Handling Multiple Asynchronous Calls

You can handle multiple asynchronous operations with `async`/`await` in different ways, depending on whether you want them to execute in parallel or sequentially.

### Parallel Execution

When you want to execute multiple async operations in parallel, you can use `Promise.all()`.

```javascript
async function fetchMultipleData() {
  let [response1, response2] = await Promise.all([
    fetch('https://api.example1.com/data'),
    fetch('https://api.example2.com/data')
  ]);
  let data1 = await response1.json();
  let data2 = await response2.json();
  console.log(data1, data2);
}

fetchMultipleData();
```

In this example, both `fetch` requests are made in parallel, and the results are awaited together.

### Sequential Execution

If you need to execute the async operations one after another (i.e., wait for one to complete before starting the next), simply await each one in sequence.

```javascript
async function fetchSequentialData() {
  let response1 = await fetch('https://api.example1.com/data');
  let data1 = await response1.json();
  
  let response2 = await fetch('https://api.example2.com/data');
  let data2 = await response2.json();
  
  console.log(data1, data2);
}

fetchSequentialData();
```


## Advanced Topics

### Parallel Execution with `Promise.all()`

`Promise.all()` is useful when you want to execute multiple asynchronous tasks simultaneously, but you need to wait for all of them to finish before proceeding.

```javascript
async function fetchData() {
  let urls = [
    'https://api.example1.com/data',
    'https://api.example2.com/data',
    'https://api.example3.com/data'
  ];

  let responses = await Promise.all(urls.map(url => fetch(url)));
  let data = await Promise.all(responses.map(response => response.json()));
  
  console.log(data);
}

fetchData();
```

In this example, we fetch data from multiple APIs in parallel and wait for all the responses.

### Sequential Execution with `for`/`for...of`

To make asynchronous calls sequentially, you can use `await` inside a loop like `for` or `for...of`.

```javascript
async function fetchSequentialData() {
  const urls = [
    'https://api.example1.com/data',
    'https://api.example2.com/data',
    'https://api.example3.com/data'
  ];

  for (let url of urls) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }
}

fetchSequentialData();
```

### Error Propagation in `async` Functions

If an error occurs in an `async` function, it is propagated as a rejected promise. You can catch this error using `.catch()` or within the `try/catch` block.

```javascript
async function fetchData() {
  throw new Error("Something went wrong!");
}

fetchData().catch(error => console.error(error)); // Catching the error
```

## Conclusion

`async` and `await` provide a more readable and efficient way to handle asynchronous operations in JavaScript. By using `async` functions and `await` for promises, you can write cleaner, more maintainable code.

### Key Takeaways:
- `async` makes a function return a `Promise`.
- `await` pauses the execution until the promise resolves or rejects.
- `async/await` simplifies the handling of asynchronous tasks, making code more readable and easier to understand.



## Reference
If you want to know more about Async/Await in JS, visit:
- [FreeCodeCamp]()
- [YouTube]()