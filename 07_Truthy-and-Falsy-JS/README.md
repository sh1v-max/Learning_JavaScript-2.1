# Truthy and Falsy Values in JavaScript

In JavaScript, every value can be considered as either **truthy** or **falsy**. These values play a crucial role in conditional statements (like `if` statements) where JavaScript automatically coerces values to `true` or `false`.

## 1. Falsy Values

A **falsy** value is a value that JavaScript treats as `false` in a boolean context. The following are the falsy values in JavaScript:

1. `false` – The boolean value `false`.
2. `0` – The number zero.
3. `-0` – Negative zero.
4. `0n` – BigInt zero.
5. `""` or `''` or `` – Empty strings.
6. `null` – The absence of any value.
7. `undefined` – A variable that has not been assigned a value.
8. `NaN` – The "Not-a-Number" value.

### Example of Falsy Values:
```js
if (!false) {
    console.log('false is falsy');
}

if (!0) {
    console.log('0 is falsy');
}

if (!'') {
    console.log('An empty string is falsy');
}
```

In each of the above cases, the condition evaluates to `true` because the values are falsy.

## 2. Truthy Values

A **truthy** value is any value that is not falsy. This includes:

1. `true` – The boolean value `true`.
2. Any non-zero number (e.g., `1`, `-1`, `3.14`, etc.).
3. Non-empty strings (e.g., `"hello"`, `'false'`, etc.).
4. Objects (`{}`), Arrays (`[]`), and Functions.
5. Any non-null and non-undefined values.

### Example of Truthy Values:
```js
if (true) {
    console.log('true is truthy');
}

if (1) {
    console.log('1 is truthy');
}

if ('hello') {
    console.log('A non-empty string is truthy');
}

if ({}) {
    console.log('An empty object is truthy');
}

if ([]) {
    console.log('An empty array is truthy');
}
```

In these examples, the condition evaluates to `true` because the values are truthy.

## 3. Practical Use in Conditionals

When you use values in conditionals, JavaScript automatically converts them to either `true` or `false` based on their truthy or falsy nature.

### Example:
```js
let value = '';

if (value) {
    console.log('Value is truthy');
} else {
    console.log('Value is falsy');  // This will be printed because '' is falsy.
}
```

### Checking Truthy/Falsy in Real Scenarios:
```js
let user = '';

if (user) {
    console.log('User exists');
} else {
    console.log('No user');  // This will be printed because an empty string is falsy.
}

let score = 0;

if (score) {
    console.log('Valid score');
} else {
    console.log('No score');  // This will be printed because 0 is falsy.
}
```

## 4. Summary of Truthy and Falsy Values

- **Falsy Values**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- **Truthy Values**: Everything else that is not falsy (e.g., non-empty strings, numbers other than 0, objects, arrays, etc.).

For more information about Truthy and Falsy in JavaScript, visit: 
> - [MDN Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
> - [MDN Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
> - [YouTube](https://www.youtube.com/watch?v=UPARgGhfb5E&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=50)












