# Getters and Setters in JavaScript

In JavaScript, **getters** and **setters** are special methods that allow you to define how to access and update the properties of an object. These methods are part of **object-oriented programming** and are used to encapsulate the internal representation of data while exposing a controlled interface to interact with it.


## **What are Getters and Setters?**

- A **getter** is a method that gets the value of a specific property.
- A **setter** is a method that sets the value of a specific property.

### Key Benefits:
1. **Encapsulation**: Control access to an object's properties.
2. **Validation**: Perform checks or transformations on data before setting it.
3. **Derived Properties**: Compute a property's value dynamically.
4. **Read-Only or Write-Only Access**: Expose properties as read-only or write-only.



## **Syntax**

### Defining a Getter and Setter in an Object Literal
```javascript
const obj = {
  _name: "Default",

  // Getter
  get name() {
    return this._name;
  },

  // Setter
  set name(value) {
    if (value.length > 0) {
      this._name = value;
    } else {
      console.error("Name cannot be empty");
    }
  },
};
```

### Defining a Getter and Setter in a Class
```javascript
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    if (parts.length === 2) {
      this._firstName = parts[0];
      this._lastName = parts[1];
    } else {
      console.error("Invalid name format");
    }
  }
}
```


## **Examples**

### Example 1: Using Getter and Setter in an Object
```javascript
const obj = {
  _value: 42,

  // Getter
  get value() {
    return this._value;
  },

  // Setter
  set value(newValue) {
    if (typeof newValue === "number") {
      this._value = newValue;
    } else {
      console.error("Value must be a number");
    }
  },
};

console.log(obj.value); // Output: 42
obj.value = 100;        // Setting a new value
console.log(obj.value); // Output: 100
obj.value = "abc";      // Output: Value must be a number
```

### Example 2: Using Getter and Setter in a Class
```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for area
  get area() {
    return this._width * this._height;
  }

  // Setter for dimensions
  set dimensions({ width, height }) {
    if (width > 0 && height > 0) {
      this._width = width;
      this._height = height;
    } else {
      console.error("Invalid dimensions");
    }
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50

rect.dimensions = { width: 20, height: 10 }; // Setting new dimensions
console.log(rect.area); // Output: 200
```



## **Key Points to Remember**

1. **No Function Call Syntax**:
   - Getters and setters are accessed like regular properties.
   ```javascript
   console.log(obj.value); // Using getter
   obj.value = 50;        // Using setter
   ```

2. **Backing Properties**:
   - Use a convention (e.g., `_name`) to store the actual value to avoid recursion in getter/setter.
   ```javascript
   set name(value) {
     this._name = value; // Use a different property name internally
   }
   ```

3. **Computed or Derived Properties**:
   - Getters can compute values dynamically without storing them directly.
   ```javascript
   get fullName() {
     return `${this.firstName} ${this.lastName}`;
   }
   ```

4. **Error Handling and Validation**:
   - Setters can enforce constraints or log errors when invalid data is provided.
   ```javascript
   set age(value) {
     if (value < 0) {
       console.error("Age must be a positive number");
     } else {
       this._age = value;
     }
   }
   ```

5. **Browser Compatibility**:
   - Getters and setters are supported in all modern browsers and Node.js environments.


## **Use Cases**

1. **Read-Only Properties**:
   - Use a getter without a setter to make a property read-only.
   ```javascript
   get id() {
     return this._id;
   }
   ```

2. **Write-Only Properties**:
   - Use a setter without a getter to make a property write-only.
   ```javascript
   set password(value) {
     this._hashedPassword = hash(value);
   }
   ```

3. **Data Validation**:
   - Use a setter to validate or sanitize input data.
   ```javascript
   set email(value) {
     if (isValidEmail(value)) {
       this._email = value;
     } else {
       console.error("Invalid email address");
     }
   }
   ```


## **Caveats and Best Practices**

1. **Avoid Overuse**:
   - Only use getters and setters when necessary. Overusing them can make the code harder to debug.

2. **Performance**:
   - Getters can introduce computational overhead if they perform expensive calculations.

3. **Debugging**:
   - Use descriptive names and meaningful error messages in setters to simplify debugging.


## Reference
To know more about getter and setter in JavaScript, visit:
- []()
- [YouTube](https://www.youtube.com/watch?v=IhGRluP0UDQ&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=134)