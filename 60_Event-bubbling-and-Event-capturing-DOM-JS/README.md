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


## 3. **Key Differences Between Bubbling and Capturing**
| Feature              | Event Bubbling                        | Event Capturing                        |
|----------------------|--------------------------------------|---------------------------------------|
| **Direction**        | From target to root                  | From root to target                   |
| **Default Behavior** | Enabled by default                   | Disabled by default (useCapture: false) |
| **Use Case**         | Commonly used for event delegation   | Rarely used, but useful in specific scenarios |
| **Event Listener**   | Typically added without capturing    | Added with `useCapture: true`         |


## Conclusion
- Understanding event bubbling and capturing is essential for effective event handling in web applications.
- Event bubbling is the default mode of propagation, while event capturing is less commonly used but can be beneficial in certain scenarios.
- By utilizing both phases, developers can create more dynamic and responsive user interfaces.

### reference
to know more about Mouse events in DOM JS... visit:

> - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
> - [W3School](https://www.w3schools.com/jsref/obj_mouseevent.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=lfRgu5dLh8E&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=106)