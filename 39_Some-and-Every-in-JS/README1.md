# Rest parameters in JavaScript

The **rest operator** (`...`) in JavaScript is a syntax feature used to represent an indefinite number of arguments as an array. It allows you to capture multiple values in a function's arguments or to gather properties into an array or object.

## 1. **Rest Operator in Function Parameters:**
The rest operator can be used to collect all remaining arguments passed to a function.

**Example:**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(4, 5, 6, 7));  // Output: 22
```
Here, `...numbers` collects all arguments into an array, and the `reduce` method is used to calculate their sum.

## 2. **Rest Operator in Destructuring:**
The rest operator can also be used in array or object destructuring to group the remaining elements into a new array or object.

**Example:**
```javascript
const fruits = ['apple', 'banana', 'orange', 'mango'];
const [firstFruit, ...restFruits] = fruits;

console.log(firstFruit);  // Output: apple
console.log(restFruits);  // Output: ['banana', 'orange', 'mango']
```
In this example, the rest operator `...restFruits` gathers all the elements of the array except the first one into a new array.

## 3. **Object Rest Operator:**
Similarly, you can use the rest operator with objects to collect the remaining properties.

**Example:**
```javascript
const user = { name: 'John', age: 25, city: 'New York' };
const { name, ...otherDetails } = user;

console.log(name);  // Output: John
console.log(otherDetails);  // Output: { age: 25, city: 'New York' }
```
Here, the `...otherDetails` gathers the remaining properties of the object `user` (i.e., `age` and `city`).

## Key Points:
- The rest operator is always used as the last argument or property in a function or destructuring.
- It gathers "the rest" of the elements into an array or object.
- The rest operator is useful when you want to work with a dynamic number of arguments or want to extract specific elements while preserving the rest.

**References:**
- [MDN Web Docs: Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN Web Docs: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_in_object_destructuring)