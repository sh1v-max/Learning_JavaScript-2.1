# Nested if-else in JavaScript

A **nested if-else** statement is an `if` or `else if` statement placed inside another `if` or `else` block. This allows for more complex decision-making structures, where you can check multiple conditions that depend on previous ones.

## Syntax:
```js
if (condition1) {
    // Code to execute if condition1 is true
    if (condition2) {
        // Code to execute if condition2 is true
    } else {
        // Code to execute if condition2 is false
    }
} else {
    // Code to execute if condition1 is false
}
```

## Example 1: Basic Nested if-else

```js
let num = 10;

if (num > 0) {
    console.log('The number is positive.');
    
    if (num % 2 === 0) {
        console.log('The number is even.');
    } else {
        console.log('The number is odd.');
    }
} else {
    console.log('The number is not positive.');
}
```

### Explanation:
- The first `if` checks if the number is positive.
- If true, it enters another `if-else` to check if the number is even or odd.
- If the number is not positive, the outer `else` block runs.

### Output for `num = 10`:
```
The number is positive.
The number is even.
```

### Output for `num = 3`:
```
The number is positive.
The number is odd.
```

### Output for `num = -5`:
```
The number is not positive.
```

## Example 2: Nested if-else with Multiple Conditions

```js
let age = 20;
let hasID = true;

if (age >= 18) {
    console.log('You are eligible to vote.');
    
    if (hasID) {
        console.log('You can proceed to vote.');
    } else {
        console.log('You need an ID to vote.');
    }
} else {
    console.log('You are not old enough to vote.');
}
```

### Explanation:
- The outer `if` checks if the person is 18 or older.
- If true, it then checks if they have an ID.
- If false, the person is not old enough to vote.

### Output when `age = 20` and `hasID = true`:
```
You are eligible to vote.
You can proceed to vote.
```

### Output when `age = 16`:
```
You are not old enough to vote.
```

## Example 3: Multiple Levels of Nesting

You can have more than two levels of nested `if`-`else` statements, although it can make your code more complex and harder to read.

```js
let num = 15;

if (num > 0) {
    console.log('The number is positive.');

    if (num > 10) {
        console.log('The number is greater than 10.');

        if (num % 5 === 0) {
            console.log('The number is divisible by 5.');
        } else {
            console.log('The number is not divisible by 5.');
        }
    } else {
        console.log('The number is less than or equal to 10.');
    }
} else {
    console.log('The number is not positive.');
}
```

### Explanation:
- The first `if` checks if the number is positive.
- The second `if` checks if the number is greater than 10.
- The third `if` checks if the number is divisible by 5.

### Output for `num = 15`:
```
The number is positive.
The number is greater than 10.
