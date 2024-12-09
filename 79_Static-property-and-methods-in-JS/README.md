# Static Properties and Methods in JavaScript Classes

In JavaScript, **static properties** and **static methods** are associated with the class itself rather than instances of the class. They are typically used for utility functions, constants, or class-wide information that doesn’t need to be tied to a specific instance.


## **Static Properties**

A **static property** is a property of the class itself, not of the objects created using the class. Static properties are defined directly on the class and can be accessed without instantiating the class.

### **Syntax**
```javascript
class ClassName {
  static propertyName = value;
}
```

### **Example**
```javascript
class MathUtils {
  static PI = 3.14159;
  static description = "A utility class for mathematical constants and operations";
}

console.log(MathUtils.PI);           // Output: 3.14159
console.log(MathUtils.description);  // Output: "A utility class for mathematical constants and operations"
```

### Key Points:
- **Access**: Static properties are accessed using the class name (e.g., `ClassName.propertyName`).
- **Shared**: They are shared across all instances of the class.
- **Not inherited by instances**: Static properties are not available on individual instances of the class.


## **Static Methods**

A **static method** is a method that belongs to the class itself, not to its instances. These methods cannot be called on an instance of the class but are instead invoked using the class name.

### **Syntax**
```javascript
class ClassName {
  static methodName() {
    // method logic
  }
}
```

### **Example**
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

// Accessing static methods using the class name
console.log(MathUtils.add(5, 3));        // Output: 8
console.log(MathUtils.subtract(5, 3));   // Output: 2

// Trying to call a static method on an instance throws an error
const math = new MathUtils();
console.log(math.add(5, 3));             // Error: math.add is not a function
```

### Key Points:
- **Access**: Static methods are accessed using the class name (e.g., `ClassName.methodName()`).
- **No `this` context for instances**: Inside static methods, `this` refers to the class itself, not any instance.


## **Combining Static Properties and Methods**

Static properties and methods can work together to manage shared state or perform class-level tasks.

### **Example**
```javascript
class Counter {
  static count = 0; // Static property to store the count

  static increment() {
    this.count += 1; // Accessing static property using 'this'
    return this.count;
  }

  static reset() {
    this.count = 0;
    return this.count;
  }
}

console.log(Counter.increment()); // Output: 1
console.log(Counter.increment()); // Output: 2
console.log(Counter.reset());     // Output: 0
```


## **Key Differences Between Static and Instance Members**

| Feature           | Static Members                     | Instance Members                  |
|--------------------|------------------------------------|------------------------------------|
| **Accessed By**    | Class name (e.g., `ClassName.prop`)| Object instance (e.g., `obj.prop`)|
| **Shared Across**  | Shared across all instances        | Unique to each instance           |
| **Usage**          | Utility, constants, shared logic  | Object-specific data and behavior |

## **Real-World Use Cases**

1. **Utility Functions**: Use static methods for common operations (e.g., mathematical computations).
2. **Constants**: Use static properties to define unchanging values (e.g., `MathUtils.PI`).
3. **Global State**: Use static properties to store class-wide state (e.g., counters, configuration settings).


## **Caveats and Best Practices**

1. **Avoid Overuse**: Use static members only for class-level logic. For instance-specific behavior, prefer instance methods and properties.
2. **Testing**: Ensure static methods are pure and do not depend on instance-specific data.
3. **Accessing Static Members**: Always access static properties and methods using the class name, not an instance.

## Reference
To know more about static property/method in JS, visit:
- [MDN webdocs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [YouTube](https://www.youtube.com/watch?v=vtEKnyU379Q&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=133)
