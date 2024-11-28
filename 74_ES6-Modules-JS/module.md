# What is type="module"
The `type="module"` attribute in a `<script>` tag in HTML specifies that the JavaScript file should be treated as an **ES6 module** (ECMAScript Module). This enables the use of modern JavaScript features such as `import` and `export` for modular code structure. Here's a detailed explanation of what it does:

## What does `type="module"` do?

1. **Enables Module Syntax:**
   When you add `type="module"` to a `<script>` tag, it allows the script to use `import` and `export` statements, which are essential features of ECMAScript Modules (ES Modules or ESM).
   
   - **Imports**: You can import functions, objects, or values from other JavaScript files.
   - **Exports**: You can export functions, objects, or values from the current module so they can be used in other modules.

2. **Enables Top-Level Code:**
   In a regular JavaScript script (without `type="module"`), all code is executed in a global scope. However, with `type="module"`, the code is scoped to the module, and variables or functions defined in the module are **not globally accessible**.
   
   - You don't have to worry about polluting the global namespace.

3. **Asynchronous Loading:**
   Scripts with `type="module"` are always **loaded asynchronously** by the browser. This means that the browser doesn't block the page's rendering while the script is being fetched and executed.
   
   - This also means that `defer` is automatically applied to module scripts, so you don't need to explicitly include the `defer` attribute.

4. **Strict Mode by Default:**
   JavaScript modules automatically use **strict mode**, meaning that the code follows stricter parsing and error handling, which can help catch common coding mistakes.

   - For example, you cannot use undeclared variables in module scripts.

5. **File References:**
   When using `type="module"`, the script URL is treated as a **relative path** (i.e., the file path must be correct relative to the current file). You must also use full URLs for external imports, especially when importing from external files or packages.

   ```html
   <script type="module" src="main.js"></script>
   ```

   In this case, the JavaScript file `main.js` is treated as a module, and you can use `import` and `export` within it.

6. **Cross-Origin Restrictions:**
   If you're using modules, the browser enforces **CORS (Cross-Origin Resource Sharing)** policies when loading scripts from different origins. This means that for modules loaded from external servers or other domains, proper CORS headers must be present.

## Example: Basic Usage of `type="module"`

### HTML File (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Modules</title>
</head>
<body>
  <h1>JavaScript Modules Example</h1>
  
  <script type="module" src="main.js"></script>
</body>
</html>
```

### JavaScript File (`main.js`):
```javascript
import { greet } from './greet.js';  // Importing from another module

console.log(greet('Alice'));  // Using the imported function
```

### Another JavaScript File (`greet.js`):
```javascript
export function greet(name) {
  return `Hello, ${name}!`;
}
```

## Key Points:
- **Modules**: `type="module"` allows you to use `import` and `export` for modular code.
- **Asynchronous**: The module is loaded asynchronously, improving performance.
- **Strict Mode**: Automatically enables strict mode for better error handling.
- **Scoped**: Variables inside modules do not pollute the global scope.

In summary, the `type="module"` attribute transforms a JavaScript file into an ES6 module, enabling modern JavaScript syntax and features, and making it possible to structure large applications in a modular way.