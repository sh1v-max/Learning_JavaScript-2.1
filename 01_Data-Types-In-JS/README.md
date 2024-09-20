# JavaScript Data Types

JavaScript has various data types, which can be categorized into two groups: **Primitive Data Types** and **Non-Primitive (Reference) Data Types**. Below is a comprehensive list of all data types in JavaScript along with their description and examples.

## 1. Primitive Data Types

Primitive data types are immutable and are stored directly by value.

### 1.1 Number
The `Number` data type represents both integer and floating-point numbers.

```js
let age = 25;         // integer
let price = 99.99;    // floating-point
```

### 1.2 String
A `String` is used to represent textual data. Strings are created using single (`'`) or double (`"`) quotes.

```js
let name = 'John';
let greeting = "Hello, World!";
```

### 1.3 Boolean
A `Boolean` represents one of two values: `true` or `false`.

```js
let isActive = true;
let isMember = false;
```

### 1.4 Undefined
A variable that has been declared but not assigned a value is of type `undefined`.

```js
let x;      // undefined
```

### 1.5 Null
`Null` represents the intentional absence of any object value. It is a primitive type but treated as an object.

```js
let y = null;
```
 Difference between `null` and `undefined`
> - `null` represents the intentional absence of any object value.
> - `undefined` represents an uninitialized variable or a non-existent property.


### 1.6 Symbol (ES6)
A `Symbol` is a unique and immutable data type often used as a key for object properties.

```js
let sym = Symbol('identifier');
```

### 1.7 BigInt (ES2020)
`BigInt` is used for representing integers that are too large to be represented by the `Number` type.

```js
let largeNumber = 1234567890123456789012345678901234567890n;
```

## 2. Non-Primitive (Reference) Data Types

Non-primitive data types store references to the memory location rather than the value itself.

### 2.1 Object
An `Object` is a collection of properties, where each property is a key-value pair.

```js
let person = {
    name: 'Alice',
    age: 30,
    isAdmin: true
};
```

### 2.2 Array
An `Array` is a special type of object used to store ordered lists of values (of any type).

```js
let fruits = ['Apple', 'Banana', 'Cherry'];
```

### 2.3 Function
A `Function` is a block of code designed to perform a particular task.

```js
function greet(name) {
    return `Hello, ${name}!`;
}
```

### 2.4 Date
`Date` objects represent a single moment in time.

```js
let today = new Date();
```

## 3. Type Checking in JavaScript

To check the data type of a variable, the `typeof` operator is used.

```js
let num = 42;
console.log(typeof num);    // "number"
let str = "Hello";
console.log(typeof str);    // "string"
```

## 4. Type Conversion in JavaScript

JavaScript provides both explicit and implicit type conversions.

### 4.1 Explicit Type Conversion
You can explicitly convert data types using functions like `String()`, `Number()`, or `Boolean()`.

```js
let num = 100;
let str = String(num);     // Converts number to string
```

### 4.2 Implicit Type Conversion
JavaScript automatically converts data types in certain situations.

```js
let result = '5' + 10;     // "510" (number is converted to string)
```

## 5. Mutable vs Immutable Data Types

- **Primitive types** (like `Number`, `String`, `Boolean`) are **immutable**.
- **Non-Primitive types** (like `Object`, `Array`) are **mutable**, meaning their contents can be changed without changing the reference.

## 6. Special Considerations
- `null` is considered an object, which is a long-standing bug in JavaScript.
- `NaN` (Not-a-Number) is a special value of type `number` used when a mathematical operation fails.

```js
let invalidOperation = 'abc' / 2;
console.log(invalidOperation);  // NaN
```

## 7. Dynamic Typing

JavaScript is dynamically typed, meaning you don't need to specify the data type of a variable, and its type can change at runtime.

```js
let value = 42;    // Initially a number
value = 'Hello';   // Now a string
```

## Recap of what i have learned about Data Types
```js
/*
1. primitive data type ... call by value
original value doesnt change, you will be provided with 
copy of data every type you call it rather than the
original data... thats why called call by value

7 types: string, number, Boolean, null, undefined, symbol, Bigint

*/

"use strict"; //treat all js code as newer version

//alert( 3 + 3) //do same on inspect chrome and see the output
//alert require different syntex..... we are using node js not browser

console.log(3+
    3) //code readability should be high

console.log("shiv")

let name="hitesh"
let age= 18
//let isLoggedIn = false

// number =>2 to power 53
// bigint
// string => true/false
// null = standalone value
// undefined => 
// symbol => unique
// object

console.log(typeof age); //number
console.log(typeof null) //object
console.log(typeof undefined) //undefined

const score=10
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userAge;             //undefined
let userAge2=undefined   //undefined

//to declare symbol
const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===Symbol);

// const bigNumber=32425345353253453n //add n at end




/*
2. refrence(non premetive)

types: arrays, object, function

dynamically typed language or statically typed language...
const score=false
const score =100
const score ="false"
we dont initialise data type, javascript handles it iteself 
accordingly so its dynamically typed language or week typing
*/

const heros = ["shaktiman", "nagraj", "doga"]; // array
let myObj={                                    // object
    name:"shiv",    // initialise in curly brackets
    age:22,         // data type can be any thing       
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);     // undefined
console.log(typeof outsideTemp);   // object
console.log((typeof myFunction));  // function
console.log(typeof heros);  //object

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//************************************************************* */

/*
Memory and threads in javascript

stack and heap
stack(Primitive) , heap(Non-Primitive)

*/
let myYoutubename = "wazir"

let anothername = myYoutubename
anothername="shiv"

console.log(myYoutubename);
console.log(anothername);

let user1={
    email:"user@google.com",
    upi:"987@ybl"
}

let user2=user1
user2.email="shiv@email.com"

console.log(user1.email);
console.log(user2.email);

/*see the support image for
understanding refrence of memory for heap and stack
in heap, one memory space is used for all the refrences
email for both user hav been changed
 */
```

For more information about Data Types in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
> - [W3Schools](https://www.w3schools.com/js/js_datatypes.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=-3H3XJHwzRI&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=44&pp=iAQB)
