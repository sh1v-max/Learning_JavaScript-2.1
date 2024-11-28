
# Import and Export in JavaScript

The `import` and `export` keywords in JavaScript are part of the **ES6 module system**, which allows you to split your code into smaller, reusable files. This modular approach improves maintainability, readability, and reusability of your code.


## Table of Contents

1. [What are Modules?](#what-are-modules)
2. [Exporting](#exporting)
   - [Named Exports](#named-exports)
   - [Default Exports](#default-exports)
3. [Importing](#importing)
   - [Importing Named Exports](#importing-named-exports)
   - [Importing Default Exports](#importing-default-exports)
   - [Renaming Imports](#renaming-imports)
4. [Dynamic Imports](#dynamic-imports)
5. [Best Practices](#best-practices)


## 1. What are Modules?

Modules are self-contained files in JavaScript that encapsulate code and allow it to be shared between files using `import` and `export`. Each module can contain:
- Variables
- Functions
- Classes
- Objects

### Example Structure:

```plaintext
.
├── math.js   // Module file
├── app.js    // Main application file
```

## 2. Exporting

The `export` keyword is used to make parts of a module available to other modules. There are two main types of exports: **named exports** and **default exports**.

### Named Exports

Named exports allow you to export multiple variables, functions, or classes from a module.

#### Syntax:
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14;
```

### Default Exports

Default exports allow you to export a single value from a module. Each module can have only **one default export**.

#### Syntax:
```javascript
// greet.js
const greet = (name) => `Hello, ${name}!`;
export default greet;
```


## 3. Importing

The `import` keyword is used to bring the exported values into another module. 

### Importing Named Exports

To import named exports, use curly braces `{}` around the specific exports you want.

#### Syntax:
```javascript
// app.js
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));    // 8
console.log(subtract(10, 4)); // 6
console.log(PI);           // 3.14
```

### Importing Default Exports

To import a default export, simply specify a name for the import without curly braces.

#### Syntax:
```javascript
// app.js
import greet from './greet.js';

console.log(greet('Alice')); // Hello, Alice!
```

### Mixing Named and Default Imports

You can mix default and named imports in the same statement.

#### Syntax:
```javascript
// math.js
export const multiply = (a, b) => a * b;
export default function divide(a, b) {
  return a / b;
}

// app.js
import divide, { multiply } from './math.js';

console.log(divide(10, 2));    // 5
console.log(multiply(3, 4));   // 12
```

### Renaming Imports

You can rename imported values using the `as` keyword.

#### Syntax:
```javascript
// app.js
import { add as addition, subtract as subtraction } from './math.js';

console.log(addition(5, 2));   // 7
console.log(subtraction(9, 4)); // 5
```


## 4. Dynamic Imports

Dynamic imports allow you to load modules dynamically at runtime using the `import()` function. It returns a **Promise** that resolves with the module.

### Example:
```javascript
// app.js
const button = document.getElementById('load');

button.addEventListener('click', async () => {
  const { add } = await import('./math.js'); // Dynamically import math.js
  console.log(add(5, 6)); // 11
});
```

Dynamic imports are useful for:
- Code-splitting
- Lazy-loading modules
- Loading modules conditionally


## 5. Best Practices

1. **Use Default Exports for Single Exports**:
   - Use default exports for modules that export a single value or concept (e.g., a class or main function).

2. **Use Named Exports for Multiple Values**:
   - Use named exports for modules that export multiple values, like utility functions.

3. **Organize Your Modules**:
   - Group related functionality into a single module for better readability and maintainability.

4. **Use Dynamic Imports for Large Modules**:
   - Load modules dynamically when they are needed to optimize performance.

5. **Use Relative Paths**:
   - Use relative paths (`./module.js`) for local modules and avoid unnecessary hardcoding of file locations.


## Summary

| Feature              | Syntax                   | Example                                         |
|----------------------|--------------------------|------------------------------------------------|
| **Named Export**     | `export { value }`       | `export const add = (a, b) => a + b;`          |
| **Default Export**   | `export default value`   | `export default function() { ... }`           |
| **Named Import**     | `import { value }`       | `import { add } from './module.js';`          |
| **Default Import**   | `import value`           | `import greet from './module.js';`            |
| **Renaming Import**  | `import { val as alias }`| `import { add as addition } from './math.js';`|
| **Dynamic Import**   | `import('module')`       | `const mod = await import('./module.js');`    |

By using `import` and `export`, you can write modular, reusable, and maintainable JavaScript code that scales well with larger applications.

## Reference
If you want to know more about Export/Import in JS, visit:

- [YouTube](https://www.youtube.com/watch?v=58_rdS5EVxU&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=126)