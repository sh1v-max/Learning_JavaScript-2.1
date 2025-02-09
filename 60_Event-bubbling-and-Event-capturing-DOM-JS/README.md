# Event Propagation in JavaScript

- Event propagation refers to the way events travel through the DOM tree.
- There are two main phases of event propagation: **event bubbling** and **event capturing**.

## 1. **Event Bubbling**

### Definition
- In event bubbling, the event starts from the target element (the element that triggered the event) and bubbles up to the root of the DOM tree.
- The innermost element handles the event first, followed by its parent elements.


### Example Structure
```html
<div id="parent">
    <button id="child">Click Me!</button>
</div>
```

### Code Example
```javascript
// Select the elements
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Add event listener to the parent
parent.addEventListener('click', function() {
    console.log('Parent clicked!');
});

// Add event listener to the child
child.addEventListener('click', function() {
    console.log('Child clicked!');
});
```

### Output on Click
- Clicking the button will produce the following output:
  ```
  Child clicked!
  Parent clicked!
  ```
- **Explanation**: The "Child clicked!" message appears first because the button is the target element, followed by "Parent clicked!" as the event bubbles up to the parent.



## 2. **Event Capturing**

### Definition
- In event capturing, the event starts from the root of the DOM tree and moves down to the target element.
- The outermost element handles the event first before it reaches the target element.

### Code Example
Using the same HTML structure, you enable capturing by setting the `useCapture` parameter to `true` in the `addEventListener` method.

```javascript
// Add event listener to the parent with capturing
parent.addEventListener('click', function() {
    console.log('Parent clicked (capturing)!');
}, true); // true enables capturing

// Add event listener to the child
child.addEventListener('click', function() {
    console.log('Child clicked!');
});
```

### Output on Click
- Clicking the button will produce the following output:
  ```
  Parent clicked (capturing)!
  Child clicked!
  ```
- **Explanation**: "Parent clicked (capturing)!" appears first because the event is captured by the parent before reaching the child.


## 3. **Using Options with Event Listeners**

### 3.1 **Event Listener Options**
JavaScript allows you to pass an options object to the `addEventListener` method, which can control various behaviors of the event listener.

- **Capture Phase**: You can specify whether the event listener should be invoked during the capturing phase by setting the `capture` option to `true`.

  ```javascript
  parent.addEventListener('click', function() {
      console.log('Parent clicked (with capture option)!');
  }, { capture: true });
  ```

- **Once**: The `{ once: true }` option allows the event listener to be invoked at most once after being added. After the first invocation, the listener is automatically removed.

  ```javascript
  child.addEventListener('click', function() {
      console.log('Child clicked (once)!');
  }, { once: true });
  ```

#### Example Code with Options
```javascript
// Using capture and once options
parent.addEventListener('click', function() {
    console.log('Parent clicked (with capture option)!');
}, { capture: true });

child.addEventListener('click', function() {
    console.log('Child clicked (once)!');
}, { once: true });
```

### Output on Click
- If you click the button, you will see:
  ```
  Parent clicked (with capture option)!
  Child clicked (once)!
  ```
- If you click the button again, the child event will not trigger because it is set to `once`, whereas the parent event will still be invoked.



## 4. **Stopping Propagation with `stopPropagation`**

### Definition
- The `stopPropagation` method prevents the event from propagating (bubbling or capturing) further up or down the DOM tree.

### Usage
- You can use `stopPropagation` in an event listener to stop the event from reaching other event handlers in the propagation path.

### Code Example
```javascript
child.addEventListener('click', function(event) {
    console.log('Child clicked!');
    event.stopPropagation(); // Prevents the event from bubbling up
});

// Add event listener to the parent
parent.addEventListener('click', function() {
    console.log('Parent clicked (will not be triggered if child is clicked)!');
});
```

### Output on Click
- If you click the button, the output will be:
  ```
  Child clicked!
  ```
- **Explanation**: The "Parent clicked!" message will not appear because the `stopPropagation` method was called in the child’s event listener, stopping the event from bubbling up to the parent.


## 5. **Key Differences Between Bubbling and Capturing**

| Feature              | Event Bubbling                        | Event Capturing                        |
|----------------------|--------------------------------------|---------------------------------------|
| **Direction**        | From target to root                  | From root to target                   |
| **Default Behavior** | Enabled by default                   | Disabled by default (useCapture: false) |
| **Use Case**         | Commonly used for event delegation   | Rarely used, but useful in specific scenarios |
| **Event Listener**   | Typically added without capturing    | Added with `useCapture: true`         |
| **Options**          | Can use `{ once: true }`            | Can use `{ once: true }`              |


## Conclusion
- Understanding event bubbling, capturing, and the use of `stopPropagation` is essential for effective event handling in web applications.
- Event bubbling is the default mode of propagation, while event capturing is less commonly used but can be beneficial in certain scenarios.
- By utilizing both phases and the options available, developers can create more dynamic and responsive user interfaces.

### Reference
To know more about Mouse events in DOM JS, visit:

> - [freeCodeCamp](https://www.freecodecamp.org/news/event-bubbling-and-event-capturing-in-javascript/)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=lfRgu5dLh8E&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=106)

