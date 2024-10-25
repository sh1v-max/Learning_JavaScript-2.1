# **Mouse Events in JavaScript DOM**

Mouse events in JavaScript allow you to detect and respond to mouse interactions within the browser, such as clicks, movements, and button presses. These events enable interactivity and improve user experience in web applications.

## **Types of Mouse Events**

### 1. **`click`**: 
   - Triggered when the user clicks (usually a left-click) on an element.
   - Used commonly for buttons, links, and interactive elements.
   - Example:
     ```javascript
     element.addEventListener('click', function() {
         console.log("Element clicked!");
     });
     ```

### 2. **`dblclick`**: 
   - Triggered when the user double-clicks on an element.
   - Useful for special actions, like opening an item in a list or zooming in on an image.
   - Example:
     ```javascript
     element.addEventListener('dblclick', function() {
         console.log("Element double-clicked!");
     });
     ```

### 3. **`mousedown`**: 
   - Triggered when any mouse button is pressed down on an element.
   - Can detect which mouse button was pressed (`event.button`).
   - Example:
     ```javascript
     element.addEventListener('mousedown', function(event) {
         console.log("Mouse button pressed: ", event.button);
     });
     ```

### 4. **`mouseup`**: 
   - Triggered when a mouse button is released after a `mousedown`.
   - Useful in drag-and-drop actions to detect when dragging stops.
   - Example:
     ```javascript
     element.addEventListener('mouseup', function() {
         console.log("Mouse button released");
     });
     ```

### 5. **`mousemove`**: 
   - Triggered when the mouse pointer moves over an element.
   - Ideal for tracking mouse movements, drawing on a canvas, or other interactive visual feedback.
   - Example:
     ```javascript
     element.addEventListener('mousemove', function(event) {
         console.log("Mouse moved at: ", event.clientX, event.clientY);
     });
     ```

### 6. **`mouseenter`**: 
   - Triggered when the mouse pointer enters the boundary of an element.
   - Does not trigger when entering child elements, unlike `mouseover`.
   - Example:
     ```javascript
     element.addEventListener('mouseenter', function() {
         console.log("Mouse entered element");
     });
     ```

### 7. **`mouseleave`**: 
   - Triggered when the mouse pointer leaves the boundary of an element.
   - Similar to `mouseout` but does not fire when moving to a child element.
   - Example:
     ```javascript
     element.addEventListener('mouseleave', function() {
         console.log("Mouse left element");
     });
     ```

### 8. **`mouseover`**: 
   - Triggered when the mouse pointer is placed over an element.
   - Unlike `mouseenter`, it also fires when entering child elements.
   - Example:
     ```javascript
     element.addEventListener('mouseover', function() {
         console.log("Mouse is over the element");
     });
     ```

### 9. **`mouseout`**: 
   - Triggered when the mouse pointer leaves an element or moves over its child elements.
   - Example:
     ```javascript
     element.addEventListener('mouseout', function() {
         console.log("Mouse left the element");
     });
     ```

## **Event Object Properties in Mouse Events**

Each mouse event comes with an event object containing useful properties:

- **event.clientX / event.clientY**: X and Y coordinates of the mouse relative to the viewport.
- **event.screenX / event.screenY**: X and Y coordinates of the mouse relative to the screen.
- **event.button**: Indicates which mouse button was pressed (0 for left, 1 for middle, 2 for right).
- **event.altKey / event.shiftKey / event.ctrlKey / event.metaKey**: Boolean values indicating if these modifier keys were pressed during the event.

## **Examples of Practical Uses for Mouse Events**

1. **Implementing a Drag-and-Drop Interface**:
   - `mousedown` starts the drag, `mousemove` moves the element, and `mouseup` ends the drag.
   
2. **Interactive Hover Effects**:
   - Use `mouseenter` and `mouseleave` to add hover effects, such as displaying a tooltip or changing styles.
   
3. **Drawing on a Canvas**:
   - Track `mousedown`, `mousemove`, and `mouseup` to enable free drawing on a canvas element.

## **Example: Drag-and-Drop with Mouse Events**

```javascript
const draggableElement = document.getElementById('draggable');
let isDragging = false;

draggableElement.addEventListener('mousedown', function(event) {
    isDragging = true;
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
        draggableElement.style.left = `${event.clientX}px`;
        draggableElement.style.top = `${event.clientY}px`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});
```

### **Summary of Mouse Events**

| Event       | Description                                                | Triggered On          | Example Use                       |
|-------------|------------------------------------------------------------|-----------------------|-----------------------------------|
| `click`     | Fires when an element is clicked                           | Single left-click     | Button click, form submission     |
| `dblclick`  | Fires when an element is double-clicked                    | Double-click          | Zooming in on an image            |
| `mousedown` | Fires when a mouse button is pressed                       | Button press          | Start of drag action              |
| `mouseup`   | Fires when a mouse button is released                      | Button release        | End of drag action                |
| `mousemove` | Fires when the mouse pointer moves over an element         | Mouse movement        | Drawing, tracking mouse position  |
| `mouseenter`| Fires when the mouse enters an element                     | Entering an element   | Tooltip or hover effect           |
| `mouseleave`| Fires when the mouse leaves an element                     | Leaving an element    | Tooltip or hover effect           |
| `mouseover` | Fires when the mouse is over an element or its children    | Hovering              | Hover effect with child elements  |
| `mouseout`  | Fires when the mouse leaves an element or its children     | Exiting hover area    | Hover effect with child elements  |

These mouse events give you control over how the user interacts with elements using the mouse, enhancing the interactivity of your web pages.

### reference
to know more about Keyboard events in DOM JS... visit:

> - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
> - [W3School](https://www.w3schools.com/jsref/obj_mouseevent.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=izxOuK_mhqw&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=107)