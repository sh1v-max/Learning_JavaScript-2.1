# Hoisting in JavaScript (Detailed Explanation)

**Hoisting** is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. However, only the declarations are hoisted, not the initializations.

## 1. Hoisting of Variables

Variables declared using `var` are hoisted, but their initialization remains in place. They are initialized with `undefined` at the top of their scope.

```js
console.log(x);  // Output: undefined
var x = 5;
```

In the example above, the `var x` declaration is hoisted, but the assignment `x = 5` remains where it is.

### `let` and `const` Declarations

Variables declared with `let` and `const` are also hoisted but not initialized. They are in a **Temporal Dead Zone** (TDZ) from the start of the block until the declaration is encountered, meaning accessing them before their declaration results in a `ReferenceError`.

```js
console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

### Key Points
- **`var`** declarations are hoisted and initialized with `undefined`.
- **`let` and `const`** are hoisted but uninitialized, making them inaccessible until declaration.

## 2. Hoisting of Functions

Function declarations are fully hoisted. This means the entire function definition is moved to the top, allowing the function to be called before its declaration.

```js
greet();  // Output: Hello, World!

function greet() {
  console.log("Hello, World!");
}
```

### Function Expressions

Unlike function declarations, **function expressions** (including arrow functions) are not hoisted. They follow variable hoisting rules, meaning they behave like variables declared with `var`.

```js
greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hi!");
};
```

### Key Points
- **Function declarations** are hoisted, meaning they can be called before the line where they are defined.
- **Function expressions** are not hoisted, behaving like variables.

## 3. Temporal Dead Zone (TDZ)

For variables declared with `let` and `const`, the TDZ is the time between entering a scope and the variable’s actual declaration. Attempting to access the variable during this period results in a `ReferenceError`.

```js
console.log(a);  // ReferenceError: Cannot access 'a' before initialization
let a = 3;
```

## Summary

- **Hoisting** allows JavaScript to move variable and function declarations to the top of the current scope.
- `var` declarations are hoisted and initialized with `undefined`, while `let` and `const` are hoisted but not initialized, causing a `ReferenceError` if accessed too early.
- Function declarations are hoisted completely, whereas function expressions are treated like variables.
