# Arrays in JavaScript

## Basic Array

Arrays are used to store multiple values in a single variable, and each value is identified by its **index** (starting from 0).

```js
let colors = ["red", "green", "blue"];
console.log(colors[0]);  // red
```

## Array Properties

1. **length**: Returns the number of elements in the array.

```js
console.log(colors.length);  // 3
```

## Array Methods

### 1. push()
Adds one or more elements to the **end** of the array.

```js
colors.push("yellow");
console.log(colors);  // ["red", "green", "blue", "yellow"]
```

### 2. pop()
Removes the **last** element from the array and returns it.

```js
let lastColor = colors.pop();
console.log(lastColor);  // "blue"
console.log(colors);     // ["red", "green"]
```

### 3. shift()
Removes the **first** element from the array and returns it.

```js
let firstColor = colors.shift();
console.log(firstColor);  // "red"
console.log(colors);      // ["green", "blue"]
```

### 4. unshift()
Adds one or more elements to the **beginning** of the array.

```js
colors.unshift("purple");
console.log(colors);  // ["purple", "green", "blue"]
```

### 5. splice()
Can be used to **add, remove, or replace** elements in the array at a specific index.

- **Adding elements**:

```js
colors.splice(1, 0, "orange");
console.log(colors);  // ["purple", "orange", "green", "blue"]
```

- **Removing elements**:

```js
colors.splice(2, 1);
console.log(colors);  // ["purple", "orange", "blue"]
```

### 6. slice()
Returns a **shallow copy** of a portion of an array. The original array is not modified.

```js
let newColors = colors.slice(1, 3);
console.log(newColors);  // ["orange", "blue"]
```

### 7. forEach()
Executes a provided function once for each array element.

```js
colors.forEach(function(color) {
  console.log(color);
});
// Output:
// purple
// orange
// blue
```

## Summary

JavaScript arrays are versatile data structures that allow for storing, accessing, and modifying a list of values. You can use various array methods to add, remove, or manipulate elements efficiently.



### For more information , visit: 
> - [W3School Arrays](https://www.w3schools.com/js/js_arrays.asp)
> - [YouTube](https://www.youtube.com/watch?v=xerUjcKdA0o&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=61&pp=iAQB)