# Regular Expressions (RegEx) in JavaScript

Regular Expressions (RegEx) are patterns used to match and manipulate strings in JavaScript. RegEx allows for advanced searching, validation, and manipulation of text data.

## Table of Contents:
1. [What is a Regular Expression?](#what-is-a-regular-expression)
2. [Creating a Regular Expression](#creating-a-regular-expression)
3. [RegEx Syntax](#regex-syntax)
4. [Flags in RegEx](#flags-in-regex)
5. [Common RegEx Methods](#common-regex-methods)
6. [Character Classes](#character-classes)
7. [Quantifiers](#quantifiers)
8. [Anchors and Boundaries](#anchors-and-boundaries)
9. [RegEx Examples](#regex-examples)
10. [Conclusion](#conclusion)


## What is a Regular Expression?

A **Regular Expression** (RegEx) is a sequence of characters that defines a search pattern. It is often used for:
- Matching patterns in strings
- Searching, validating, or replacing text
- Extracting substrings from larger strings

In JavaScript, RegEx is implemented through the `RegExp` object and the literal `/pattern/` syntax.


## Creating a Regular Expression

You can create a RegEx in JavaScript in two ways:

### 1. **Using RegEx Literal Syntax**
```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
```

### 2. **Using the `RegExp` Constructor**
```javascript
const regex = new RegExp("hello");
console.log(regex.test("hello world")); // true
```

Both approaches work, but the literal syntax (`/pattern/`) is more common and concise.


## RegEx Syntax

A RegEx pattern consists of:
- **Characters**: Literal characters (e.g., `abc`)
- **Metacharacters**: Special characters that have special meanings (e.g., `.`, `\d`, `*`, `?`)

Here’s a basic example:
```javascript
const regex = /hello/;
console.log(regex.test("hello world")); // true
```


## Flags in RegEx

Flags are optional modifiers that change how the RegEx behaves. Flags are added after the closing `/`.

| **Flag** | **Description**                   | **Example**            |
|----------|-----------------------------------|------------------------|
| `g`      | Global search (matches all)       | `/pattern/g`           |
| `i`      | Case-insensitive search           | `/pattern/i`           |
| `m`      | Multi-line search                 | `/pattern/m`           |
| `u`      | Unicode support                   | `/pattern/u`           |
| `s`      | Dot (`.`) matches newline         | `/pattern/s`           |

Example with flags:
```javascript
const regex = /hello/gi; // Case-insensitive, global match
console.log("Hello hello HEllO".match(regex)); // ['Hello', 'hello', 'HEllO']
```


## Common RegEx Methods

### 1. `test()`
Tests whether the pattern matches a string. Returns `true` or `false`.
```javascript
const regex = /world/;
console.log(regex.test("hello world")); // true
```

### 2. `match()`
Returns an array of matches or `null` if no match is found.
```javascript
const regex = /o/g;
console.log("hello world".match(regex)); // ['o', 'o']
```

### 3. `replace()`
Replaces matched patterns with a specified string.
```javascript
const regex = /world/;
console.log("hello world".replace(regex, "JavaScript")); // "hello JavaScript"
```

### 4. `search()`
Returns the index of the first match or `-1` if no match is found.
```javascript
const regex = /world/;
console.log("hello world".search(regex)); // 6
```

### 5. `split()`
Splits a string into an array based on the pattern.
```javascript
const regex = /,/;
console.log("apple,banana,grape".split(regex)); // ['apple', 'banana', 'grape']
```


## Character Classes

Character classes allow you to match specific types of characters.

| **Pattern** | **Description**            | **Example**        |
|-------------|----------------------------|--------------------|
| `\d`        | Matches any digit (0-9)    | `/\d/` → "123"     |
| `\D`        | Matches non-digits         | `/\D/` → "abc"     |
| `\w`        | Matches word characters    | `/\w/` → "hello"   |
| `\W`        | Matches non-word characters| `/\W/` → "@"       |
| `\s`        | Matches whitespace         | `/\s/` → " "       |
| `\S`        | Matches non-whitespace     | `/\S/` → "a"       |
| `.`         | Matches any character      | `/./` → "a, 1, @"  |



## Quantifiers

Quantifiers specify the number of times a character or group should appear.

| **Quantifier** | **Description**                    | **Example**         |
|----------------|------------------------------------|---------------------|
| `+`           | 1 or more                          | `/a+/` → "aaa"      |
| `*`           | 0 or more                          | `/a*/` → "aaa"      |
| `?`           | 0 or 1 (optional)                  | `/a?/` → "a" or ""  |
| `{n}`         | Exactly `n` occurrences            | `/a{3}/` → "aaa"    |
| `{n,}`        | At least `n` occurrences           | `/a{2,}/` → "aaaa"  |
| `{n,m}`       | Between `n` and `m` occurrences    | `/a{2,4}/` → "aaa"  |

Example:
```javascript
const regex = /a{2,4}/;
console.log("aa".match(regex)); // ["aa"]
```


## Anchors and Boundaries

| **Pattern** | **Description**             | **Example**       |
|-------------|-----------------------------|-------------------|
| `^`         | Matches the start of a string | `/^hello/`       |
| `$`         | Matches the end of a string   | `/world$/`       |
| `\b`        | Word boundary                | `/\bword\b/`     |

Example:
```javascript
const regex = /^hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("say hello"));  // false
```


## RegEx Examples

### 1. Validate Email
```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("example@email.com")); // true
console.log(emailRegex.test("invalid-email"));    // false
```

### 2. Validate Phone Number
```javascript
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test("123-456-7890")); // true
console.log(phoneRegex.test("1234567890"));   // false
```

### 3. Extract Digits from a String
```javascript
const regex = /\d+/g;
console.log("Order ID: 12345".match(regex)); // ['12345']
```

### 4. Replace All Occurrences of a Word
```javascript
const text = "I love JavaScript. JavaScript is awesome!";
const regex = /JavaScript/g;
console.log(text.replace(regex, "JS")); // "I love JS. JS is awesome!"
```



## Conclusion

Regular Expressions (RegEx) are a powerful tool for string searching, matching, and manipulation in JavaScript. By learning the syntax, flags, character classes, and quantifiers, you can efficiently handle complex text-based tasks such as validation, searching, and replacement.