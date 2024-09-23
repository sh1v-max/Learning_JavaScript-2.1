# Arrays in JavaScript

An **array** in JavaScript is a special type of object used to store multiple values in a single variable. Arrays can hold values of different types, including numbers, strings, and objects.

## 1. Creating an Array

```js
let fruits = ["Apple", "Banana", "Orange"];
```

## 2. Accessing Array Elements

Elements are accessed using **indexing** (0-based).

```js
console.log(fruits[0]);  // "Apple"
```

## 3. Array Properties

- **length**: Returns the number of elements.
  
```js
console.log(fruits.length);  // 3
```

## 4. Array Methods

- **push()**: Adds an element to the end.
  
```js
fruits.push("Grape");  // ["Apple", "Banana", "Orange", "Grape"]
```

- **pop()**: Removes the last element.
  
```js
fruits.pop();  // ["Apple", "Banana", "Orange"]
```

- **shift()**: Removes the first element.
  
```js
fruits.shift();  // ["Banana", "Orange"]
```

- **unshift()**: Adds an element to the beginning.
  
```js
fruits.unshift("Mango");  // ["Mango", "Banana", "Orange"]
```

- **splice()**: Adds or removes elements at a specified index.

```js
fruits.splice(1, 1);  // Removes "Banana", resulting in ["Mango", "Orange"]
```

- **slice()**: Returns a shallow copy of a portion of the array.

```js
let newFruits = fruits.slice(1);  // ["Orange"]
```

## 5. Iterating Through an Array

You can loop through array elements using **for** or **forEach**.

```js
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

## Summary

Arrays in JavaScript are versatile data structures that allow you to store and manipulate collections of values. You can access, modify, and iterate over arrays using various built-in methods.
