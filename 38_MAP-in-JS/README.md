## **`map()`**, **`filter()`**, and **`reduce()`** in JavaScript.


## **1. `map()` Method**

### **What is `map()`?**
- The **`map()`** method is used to **transform** every element in an array based on the function you provide, and it returns a **new array** with the transformed elements.
- It’s commonly used when you need to take an array, process each element, and return a new array without changing the original.

### **How `map()` works**:
- It loops through each element of the array, applies the provided function, and returns the result in a new array.
- The original array remains **unchanged**.

### **Syntax**:
```javascript
const newArray = array.map(function(currentValue, index, array) {
  // Perform some operation and return the new value
});
```

- **currentValue**: The current element being processed.
- **index**: The index of the current element (optional).
- **array**: The original array (optional).

### **Example 1: Basic Use Case**:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]
```
**Explanation**: Each element of the `numbers` array is doubled, and the result is stored in the new `doubled` array. The original array is not changed.

### **Example 2: Transforming Array of Objects**:
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const names = users.map(user => user.name);
console.log(names);  // Output: ['Alice', 'Bob']
```
**Explanation**: Here, `map()` extracts the `name` property from each object in the `users` array and returns a new array containing just the names.

### **Advanced Example: Nesting `map()` with Objects**:
```javascript
const students = [
  { name: 'John', grades: [80, 90, 70] },
  { name: 'Jane', grades: [85, 95, 75] }
];

const averageGrades = students.map(student => {
  const total = student.grades.reduce((acc, grade) => acc + grade, 0);
  return total / student.grades.length;
});

console.log(averageGrades);  // Output: [80, 85]
```
**Explanation**: We use `map()` to calculate the average grade for each student. Here, `reduce()` is used inside the `map()` function to sum up grades.

---

## **2. `filter()` Method**

### **What is `filter()`?**
- The **`filter()`** method is used to **create a new array** by selecting elements from the original array that pass a certain test (i.e., return `true` when evaluated by a function).
- Like `map()`, it does not modify the original array.

### **Syntax**:
```javascript
const filteredArray = array.filter(function(currentValue, index, array) {
  // Return true to include the element, false otherwise
});
```

### **Example 1: Filtering Numbers**:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]
```
**Explanation**: `filter()` tests each number and returns a new array with only the even numbers. The condition `num % 2 === 0` ensures only even numbers are selected.

### **Example 2: Filtering Objects**:
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 30 }
];

const adults = users.filter(user => user.age >= 21);
console.log(adults);  // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
```
**Explanation**: This filters out users who are 21 or older, leaving only `Alice` and `Charlie` in the result.

---

## **3. `reduce()` Method**

### **What is `reduce()`?**
- The **`reduce()`** method **reduces** an array to a **single value** by applying a function that accumulates a result as it iterates through each element.
- It’s commonly used for summing numbers, concatenating strings, or any operation that needs to combine all elements into one final value.

### **Syntax**:
```javascript
const result = array.reduce(function(accumulator, currentValue, index, array) {
  // Return the updated accumulator
}, initialValue);
```

- **accumulator**: The value accumulated from previous iterations.
- **currentValue**: The current element being processed.
- **initialValue**: The initial value to start with (optional but often needed).

### **Example 1: Summing Numbers**:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 10
```
**Explanation**: Starting with `0` as the initial value, `reduce()` adds each number to the `accumulator` (`acc`) to compute the total sum.

### **Example 2: Reducing to an Object**:
```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);  
// Output: { apple: 3, banana: 2, orange: 1 }
```
**Explanation**: `reduce()` counts the number of times each fruit appears in the array, resulting in an object with the count of each fruit.

### **Advanced Example: Chaining `map()`, `filter()`, and `reduce()`**:
```javascript
const orders = [
  { product: 'Laptop', amount: 1000, shipped: true },
  { product: 'Phone', amount: 500, shipped: false },
  { product: 'Tablet', amount: 700, shipped: true }
];

const totalShippedAmount = orders
  .filter(order => order.shipped)
  .map(order => order.amount)
  .reduce((acc, amount) => acc + amount, 0);

console.log(totalShippedAmount);  // Output: 1700
```
**Explanation**:
- `filter()` selects only shipped orders.
- `map()` extracts the `amount` from each shipped order.
- `reduce()` sums up the amounts of the shipped orders.

---

### **Key Differences Between `map()`, `filter()`, and `reduce()`**:

| Method    | Purpose                                    | Returns                     | Modifies Original Array? | Common Use Cases                                     |
|-----------|--------------------------------------------|-----------------------------|--------------------------|-----------------------------------------------------|
| `map()`   | Transforms every element in the array      | A new array                 | No                       | Changing or transforming data                       |
| `filter()`| Selects elements based on a condition      | A new array                 | No                       | Selecting elements based on a condition             |
| `reduce()`| Combines elements into a single value      | A single value              | No                       | Summing, counting, or accumulating data             |

---

### **Summary**:
- **`map()`** is used when you want to **transform** elements in an array.
- **`filter()`** is used to **select** specific elements based on a condition.
- **`reduce()`** is used to **combine** all elements into a single result, like summing or counting.

These three methods are powerful tools in JavaScript for working with arrays, and they can be combined to perform complex data transformations in a clean, readable way.

## References:
- MDN Web Docs:  [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [JavaScript.info](https://javascript.info/array-methods#map-reduce-filter)
- [FreeCodeCamp](https://www.freecodecamp.org/news/javascript-higher-order-functions-explained-using-map-filter-and-reduce/)
- [YouTube](https://www.youtube.com/watch?v=Kc3kSIpL6x8&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=84&pp=iAQB)
- [YouTube (best explanation for reduce())](https://youtu.be/zdp0zrpKzIE?t=1111)

## Other related topics
- [Map](./map.md) 
- [Filter](./filter.md) 
- [Reduce](./reduce.md) 
- [Reduce with Initial value](./reduce%20with%20initial%20value.md)