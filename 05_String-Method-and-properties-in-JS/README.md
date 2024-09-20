# Strings in JavaScript

A **string** in JavaScript is a sequence of characters used to represent text. Strings can be created using single quotes (`'`), double quotes (`"`), or backticks (`` ` `` for template literals).

```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Template literal example`;
```

## 1. Properties of Strings

### 1.1 `length`
The `length` property returns the number of characters in a string.

```js
let message = 'Hello, World!';
console.log(message.length);  // 13
```

## 2. Methods of Strings

### 2.1 `charAt(index)`
The `charAt()` method returns the character at a specified index in the string. The index is zero-based.

```js
let str = 'Hello';
console.log(str.charAt(1));  // 'e'
```

### 2.2 `concat()`
The `concat()` method is used to join two or more strings.

```js
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2));  // 'Hello World'
```

### 2.3 `includes(substring)`
The `includes()` method checks if a string contains a specified substring. It returns `true` if found, otherwise `false`.

```js
let sentence = 'JavaScript is awesome';
console.log(sentence.includes('awesome'));  // true
console.log(sentence.includes('bad'));      // false
```

### 2.4 `indexOf(substring)`
The `indexOf()` method returns the index of the first occurrence of a specified substring. If not found, it returns `-1`.

```js
let phrase = 'Hello, World!';
console.log(phrase.indexOf('World'));  // 7
console.log(phrase.indexOf('Java'));   // -1
```

### 2.5 `slice(startIndex, endIndex)`
The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string. The `endIndex` is optional and non-inclusive.

```js
let text = 'JavaScript';
console.log(text.slice(0, 4));   // 'Java'
console.log(text.slice(4));      // 'Script'
```

### 2.6 `toUpperCase()`
The `toUpperCase()` method converts the entire string to uppercase.

```js
let lowerCaseStr = 'hello';
console.log(lowerCaseStr.toUpperCase());  // 'HELLO'
```

### 2.7 `toLowerCase()`
The `toLowerCase()` method converts the entire string to lowercase.

```js
let upperCaseStr = 'HELLO';
console.log(upperCaseStr.toLowerCase());  // 'hello'
```

### 2.8 `trim()`
The `trim()` method removes whitespace from both ends of a string.

```js
let strWithSpaces = '   Hello, World!   ';
console.log(strWithSpaces.trim());  // 'Hello, World!'
```

### 2.9 `split(separator)`
The `split()` method splits a string into an array of substrings based on the specified separator.

```js
let sentence = 'JavaScript is awesome';
let words = sentence.split(' ');
console.log(words);  // ['JavaScript', 'is', 'awesome']
```

### 2.10 `replace(searchValue, newValue)`
The `replace()` method replaces the first occurrence of a specified value in a string with a new value.

```js
let greeting = 'Hello, World!';
let newGreeting = greeting.replace('World', 'JavaScript');
console.log(newGreeting);  // 'Hello, JavaScript!'
```

### 2.11 `repeat(count)`
The `repeat()` method returns a new string with the original string repeated the specified number of times.

```js
let repeatStr = 'Ha!';
console.log(repeatStr.repeat(3));  // 'Ha!Ha!Ha!'
```

### 2.12 `startsWith(prefix)`
The `startsWith()` method checks if a string starts with a specified prefix.

```js
let text = 'JavaScript is cool';
console.log(text.startsWith('Java'));   // true
console.log(text.startsWith('cool'));   // false
```

### 2.13 `endsWith(suffix)`
The `endsWith()` method checks if a string ends with a specified suffix.

```js
let text = 'JavaScript is cool';
console.log(text.endsWith('cool'));   // true
console.log(text.endsWith('Java'));   // false
```

## 3. String Immutability

Strings in JavaScript are **immutable**, meaning once a string is created, its value cannot be changed. Instead, you create a new string with the desired modifications.

```js
let str = 'Hello';
str[0] = 'h';   // This will not change the string
console.log(str);  // 'Hello'
```

## 4. Template Literals (ES6)

Template literals (enclosed by backticks) allow embedding variables and expressions into strings using `${}`.

```js
let name = 'Alice';
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);  // 'My name is Alice and I am 25 years old.'
```

Template literals also support multi-line strings:

```js
let multilineStr = `This is a string
that spans across
multiple lines.`;
console.log(multilineStr);
```

## 5. Escape Characters

You can use escape characters (like `\\`, `\'`, `\"`, and `\n`) to insert special characters into strings.

```js
let quote = 'He said, "JavaScript is awesome!"';
let escapedStr = 'This is a backslash: \\';
```

For more information about Strings in JavaScript, visit: 
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
> - [W3Schools](https://www.w3schools.com/js/js_strings.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=Z4x2EgRkJ1g&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=48&pp=iAQB)