# Variables in JavaScript

Variables are used to store data values in JavaScript. They act as containers for data that can be changed during program execution. JavaScript uses three keywords to declare variables: `var`, `let`, and `const`.

## 1. Declaration Keywords

### 1.1 var
The `var` keyword is used to declare a variable. Variables declared with `var` are function-scoped or globally scoped and can be re-declared and updated.

```js
var name = 'Alice';
var age = 25;

if (true) {
    var name = 'Bob'; // same variable
    console.log(name); // Bob
}
console.log(name); // Bob (var is function-scoped)
```

### 1.2 let
The `let` keyword is used to declare block-scoped variables. Variables declared with `let` can be updated but not re-declared in the same scope.

```js
let city = 'New York';

if (true) {
    let city = 'Los Angeles'; // different variable
    console.log(city); // Los Angeles
}
console.log(city); // New York (let is block-scoped)
```

### 1.3 const
The `const` keyword is used to declare block-scoped constants. Variables declared with `const` must be initialized at the time of declaration and cannot be updated or re-declared.

```js
const PI = 3.14;

if (true) {
    const PI = 3.14159; // different constant
    console.log(PI); // 3.14159
}
console.log(PI); // 3.14 (const is block-scoped)
```

## 2. Variable Hoisting

JavaScript hoists variable declarations to the top of their scope. However, only the declaration is hoisted, not the initialization.

```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

With `let` and `const`, accessing the variable before declaration will result in a `ReferenceError`.

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

## 3. Naming Conventions

Variable names can contain letters, digits, underscores, and dollar signs. They must begin with a letter, underscore, or dollar sign.

### 3.1 Valid Variable Names
```js
let firstName;
let _age;
let $price;
let user1;
```

### 3.2 Invalid Variable Names
```js
let 1stName;   // Cannot start with a digit
let first-name; // Hyphens are not allowed
let let;       // Cannot use reserved keywords
```

## 4. Dynamic Typing

JavaScript is dynamically typed, meaning that the type of a variable can change at runtime.

```js
let value = 42;    // initially a number
value = 'Hello';   // now a string
value = true;      // now a boolean
```

## 5. Best Practices

- Use `let` and `const` instead of `var` to avoid scope-related issues.
- Use meaningful variable names that convey the purpose of the variable.
- Use `const` for variables that do not need to be reassigned, promoting immutability.

For more information about Variables in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
> - [W3Schools](https://www.w3schools.com/js/js_variables.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=RFx0PnTqxfI&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=45&pp=iAQB)