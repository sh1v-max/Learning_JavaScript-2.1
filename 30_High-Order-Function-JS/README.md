# Lexical Scope and Block Scope in JavaScript

## Lexical Scope

Lexical scope (also known as static scope) refers to the fact that the scope of a variable is determined by its position in the source code. In JavaScript, functions are lexically scoped, meaning an inner function can access variables defined in outer functions.

```js
function outer() {
  let outerVar = "I am from outer";
  
  function inner() {
    console.log(outerVar);  // Can access outerVar
  }
  inner();  // Output: I am from outer
}
outer();
```

### Key Points:
- Inner functions have access to variables in their outer scope.
- Lexical scope is defined at the time of writing, not during execution.

## Block Scope

Block scope refers to variables declared inside a block (`{}`), typically with `let` or `const`, and these variables are only accessible within that block.

```js
{
  let blockScopedVar = "I am block scoped";
  console.log(blockScopedVar);  // Accessible here
}
console.log(blockScopedVar);  // Error: blockScopedVar is not defined
```

### Key Points:
- `let` and `const` are block-scoped and cannot be accessed outside the block in which they are defined.
- Variables declared with `var` are **not** block-scoped but are function-scoped.

## Summary

- **Lexical Scope**: Functions can access variables from their outer lexical environment.
- **Block Scope**: Variables declared with `let` or `const` are confined within the block where they are declared.


For more information about Scope in JavaScript, visit: 
> - [W3School](https://www.w3schools.com/js/js_scope.asp)
> - [YouTube](https://www.youtube.com/watch?v=P6G0ucf2nSw&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=76)




