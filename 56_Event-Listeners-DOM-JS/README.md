# What is an Event Listener?
An **event listener** is a JavaScript function that waits for a specific event to occur on a specified element in the Document Object Model (DOM). Once the event occurs, the event listener executes the associated function.

## Key Concepts

1. **Events**: An event is an action or occurrence that can be detected by JavaScript. Common events include:
   - **Mouse Events**: `click`, `dblclick`, `mouseover`, `mouseout`
   - **Keyboard Events**: `keydown`, `keyup`, `keypress`
   - **Form Events**: `submit`, `change`, `focus`, `blur`
   - **Window Events**: `load`, `resize`, `scroll`

2. **Event Target**: This is the element that the event listener is attached to. For example, if you want to listen for a click on a button, the button is the event target.

## Adding Event Listeners

You can add an event listener to an element using the `addEventListener()` method:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

In this example:
- `button` is the event target.
- `'click'` is the event type.
- The function will be executed when the button is clicked.

## Parameters of `addEventListener()`

- **Event Type**: A string that specifies the type of event to listen for (e.g., `'click'`, `'mouseover'`).
- **Callback Function**: A function that will be called when the event occurs. This function can be defined inline or as a separate named function.
- **Options (optional)**: An object that can include properties like:
  - `capture`: A boolean indicating whether the event should be captured during the capture phase (default is `false`).
  - `once`: A boolean indicating whether the listener should be invoked at most once after being added (default is `false`).
  - `passive`: A boolean that indicates that the listener will never call `preventDefault()` (default is `false`).

## Example with Options

```javascript
button.addEventListener('click', function() {
    console.log('Button clicked!');
}, { once: true }); // This listener will be removed after the first click.
```

## Removing Event Listeners

You can remove an event listener using the `removeEventListener()` method. To successfully remove an event listener, you must pass the same parameters that were used when adding it:

```javascript
function handleClick() {
    alert('Button clicked!');
}

button.addEventListener('click', handleClick);

// Later in the code
button.removeEventListener('click', handleClick);
```

## Event Object

When an event occurs, an **event object** is created and passed to the event handler. This object contains information about the event, including:
- `target`: The element that triggered the event.
- `type`: The type of the event (e.g., `'click'`).
- `currentTarget`: The element to which the event listener is attached.
- Additional properties related to the event (e.g., mouse position, key pressed).

You can access this object within your event handler:

```javascript
button.addEventListener('click', function(event) {
    console.log(event.target); // The button element
    console.log(event.type);   // 'click'
});
```

## Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to manage events for multiple child elements. This is useful for dynamically generated elements:

```javascript
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert(`You clicked on ${event.target.textContent}`);
    }
});
```

## Summary

- **Event listeners** are essential for creating interactive web applications.
- Use `addEventListener()` to attach an event listener to an element.
- Use `removeEventListener()` to detach the listener when it’s no longer needed.
- Understand the **event object** to access useful information about the event.

Feel free to ask if you have any questions or need further clarification!

### reference
to know more about Removing element in DOM JS... visit:
> - [W3School (addEventListener())](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
> - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=5mo0xQu4FOM&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=107)
