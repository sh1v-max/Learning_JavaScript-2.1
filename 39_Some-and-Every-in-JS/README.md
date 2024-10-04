# Some() and Every() in JavaScript

In JavaScript, both **`some()`** and **`every()`** are array methods used to test elements of an array based on a condition provided through a callback function.

## 1. **`some()` Method:**
- The `some()` method checks if **at least one element** in the array satisfies the condition provided in the callback function.
- It returns `true` if **any element** passes the test, otherwise, it returns `false`.

**Syntax:**
```javascript
array.some(callback(element, index, array))
```

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);  // Output: true (since 2 and 4 are even)
```
Here, the `some()` method checks if the array `numbers` contains any even numbers. Since it finds at least one, it returns `true`.

## 2. **`every()` Method:**
- The `every()` method checks if **all elements** in the array satisfy the condition provided in the callback function.
- It returns `true` only if **every element** passes the test, otherwise, it returns `false`.

**Syntax:**
```javascript
array.every(callback(element, index, array))
```

**Example:**
```javascript
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);  // Output: true (since all elements are even)
```
Here, the `every()` method checks if all the elements in the array `numbers` are even. Since all are even, it returns `true`.

## Key Differences:
- **`some()`** returns `true` if **at least one** element passes the test, while **`every()`** returns `true` only if **all elements** pass the test.
- If **`some()`** finds a matching element early, it will stop checking the rest, while **`every()`** will stop if any element fails the test.

## Example of Combined Use:
You can combine `some()` and `every()` to perform more complex validations.

```javascript
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Mark', age: 20 }
];

// Check if at least one person is under 21
const hasUnderage = people.some(person => person.age < 21);
console.log(hasUnderage);  // Output: true

// Check if everyone is at least 18
const allAdults = people.every(person => person.age >= 18);
console.log(allAdults);  // Output: true
```

**References:**
- [MDN Web Docs - some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [MDN Web Docs - every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)