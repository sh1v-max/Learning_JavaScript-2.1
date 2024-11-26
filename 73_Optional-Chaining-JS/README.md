# JavaScript Optional Chaining - From Basic to Advanced

Optional chaining (`?.`) is a feature in JavaScript that allows you to safely access deeply nested object properties without having to explicitly check if each level of the property exists. This document explains optional chaining from basic to advanced levels, with examples.

## Table of Contents
1. [What is Optional Chaining?](#what-is-optional-chaining)
2. [Basic Syntax](#basic-syntax)
3. [How Optional Chaining Works](#how-optional-chaining-works)
4. [Accessing Properties](#accessing-properties)
5. [Accessing Methods and Function Calls](#accessing-methods-and-function-calls)
6. [Using Optional Chaining with Arrays](#using-optional-chaining-with-arrays)
7. [Chaining Multiple Levels](#chaining-multiple-levels)
8. [Combining with Nullish Coalescing (`??`)](#combining-with-nullish-coalescing-)
9. [Advanced Use Cases](#advanced-use-cases)

## 1. What is Optional Chaining?

Optional chaining (`?.`) is a feature introduced in ES2020 that provides a concise way to safely access properties of objects that may be `null` or `undefined`. It allows for accessing deeply nested values without needing to check for the existence of each intermediate property, preventing runtime errors caused by accessing properties on `null` or `undefined`.

## 2. Basic Syntax

The syntax for optional chaining is `?.`. It is used between an object and its properties or methods to safely access a property. If any part of the chain is `null` or `undefined`, the expression will return `undefined` instead of throwing an error.

### Example:
```javascript
const user = {
  profile: {
    name: 'John Doe',
    address: {
      city: 'New York'
    }
  }
};

console.log(user?.profile?.name);  // John Doe
console.log(user?.profile?.address?.city);  // New York
console.log(user?.profile?.age);  // undefined
console.log(user?.nonExistent?.property);  // undefined
```

In the example above:
- `user?.profile?.name` will return the name because `profile` exists.
- `user?.profile?.age` returns `undefined` because `age` is not a property of `profile`.


## 3. How Optional Chaining Works

When accessing an object property using optional chaining:
1. The first part checks if the object (`user` in the example above) is `null` or `undefined`.
2. If the object exists, it proceeds to the next part of the chain.
3. If any part of the chain evaluates to `null` or `undefined`, the expression short-circuits and returns `undefined`.

This eliminates the need to manually check each level for `null` or `undefined`.


## 4. Accessing Properties

The most common use case of optional chaining is accessing properties of an object. If any part of the chain is `null` or `undefined`, the result will be `undefined`.

### Example:
```javascript
const person = {
  name: 'Alice',
  details: {
    age: 25
  }
};

console.log(person?.details?.age);  // 25
console.log(person?.address?.street);  // undefined
```

In this example:
- `person?.details?.age` returns `25` because `details` exists.
- `person?.address?.street` returns `undefined` because `address` does not exist.

## 5. Accessing Methods and Function Calls

Optional chaining can also be used to safely call methods on an object or function. If the method or function does not exist, it will return `undefined` instead of throwing an error.

### Example:
```javascript
const car = {
  start: () => 'Engine started',
};

console.log(car?.start());  // Engine started
console.log(car?.stop());   // undefined
```

In this example:
- `car?.start()` calls the `start` method because it exists.
- `car?.stop()` returns `undefined` because `stop` is not defined.

## 6. Using Optional Chaining with Arrays

You can also use optional chaining to access array elements or methods. If the array is `null` or `undefined`, the result will be `undefined`.

### Example:
```javascript
const users = [
  { name: 'John' },
  { name: 'Jane' }
];

console.log(users?.[1]?.name);  // Jane
console.log(users?.[2]?.name);  // undefined
```

In this example:
- `users?.[1]?.name` returns `"Jane"` because the second element exists.
- `users?.[2]?.name` returns `undefined` because the third element does not exist.

## 7. Chaining Multiple Levels

Optional chaining can be chained across multiple levels of an object, making it very useful for accessing deeply nested properties or methods.

### Example:
```javascript
const userProfile = {
  user: {
    name: 'Mike',
    profile: {
      age: 30,
      address: {
        city: 'Los Angeles'
      }
    }
  }
};

console.log(userProfile?.user?.profile?.address?.city);  // Los Angeles
console.log(userProfile?.user?.profile?.contact?.phone);  // undefined
```

In this example:
- `userProfile?.user?.profile?.address?.city` returns `"Los Angeles"`.
- `userProfile?.user?.profile?.contact?.phone` returns `undefined` because `contact` does not exist.


## 8. Combining with Nullish Coalescing (`??`)

You can combine optional chaining with the **nullish coalescing operator** (`??`). This operator returns the right-hand operand if the left-hand operand is `null` or `undefined`.

### Example:
```javascript
const config = {
  settings: {
    theme: 'dark'
  }
};

console.log(config?.settings?.theme ?? 'default');  // dark
console.log(config?.settings?.language ?? 'English');  // English
```

In this example:
- `config?.settings?.theme` returns `"dark"`.
- `config?.settings?.language` returns `undefined`, so `'English'` is returned because of the `??` operator.


## 9. Advanced Use Cases

### Using Optional Chaining with Dynamic Property Access

Optional chaining can be combined with dynamic property names, making it more flexible.

```javascript
const settings = {
  user: {
    preferences: {
      theme: 'light',
    }
  }
};

const property = 'theme';
console.log(settings?.user?.preferences?.[property]);  // light
```

### Avoiding Errors with Nested Arrays and Objects

In complex data structures, optional chaining helps avoid runtime errors due to missing properties.

```javascript
const data = [
  { id: 1, info: { name: 'Alice' } },
  { id: 2, info: { name: 'Bob' } },
];

console.log(data?.[0]?.info?.name);  // Alice
console.log(data?.[2]?.info?.name);  // undefined
```


## Summary

### Key Points:
- **Optional Chaining (`?.`)** allows safe access to properties or methods of objects that may be `null` or `undefined`, avoiding runtime errors.
- It can be used with objects, arrays, and function calls.
- **Nullish Coalescing (`??`)** works well with optional chaining to provide default values when `null` or `undefined` are encountered.
- It simplifies the code, making it more readable and reducing the need for lengthy conditional checks.

Optional chaining is a powerful feature to improve your code’s robustness and readability when dealing with uncertain data structures.

## Reference 
If you want to know more about Optional Chaining in JavaScript, visit:
- [FreeCodeCamp](https://www.freecodecamp.org/news/optional-chaining-javascript/)
- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [YouTube](https://www.youtube.com/watch?v=JNOmHVrSnwo&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=124)