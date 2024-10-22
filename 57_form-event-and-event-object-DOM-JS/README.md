# **Form Events in DOM JavaScript**

Form events in the DOM are triggered when a user interacts with HTML form elements. These events are essential for capturing user input, validating form data, and managing form submissions in a web application. Here are some of the most common form events:

## **Common Form Events**

1. **`submit`**:
   - Triggered when a form is submitted, typically by clicking a submit button.
   - Useful for validating form data before submission.
   - You can prevent the default submission behavior using `event.preventDefault()`.

   ```javascript
   formElement.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent form from submitting
       console.log('Form submitted');
   });
   ```

2. **`change`**:
   - Fired when the value of an input element changes and the user leaves the element (loses focus).
   - Commonly used with `<select>`, `<input type="checkbox">`, and `<input type="radio">`.

   ```javascript
   inputElement.addEventListener('change', function(event) {
       console.log('Input changed:', event.target.value);
   });
   ```

3. **`input`**:
   - Triggered every time the user types in a text input or textarea.
   - Unlike `change`, this event is fired immediately when the input value changes.

   ```javascript
   inputElement.addEventListener('input', function(event) {
       console.log('Current input:', event.target.value);
   });
   ```

4. **`focus`**:
   - Triggered when an element gains focus, such as when the user clicks on an input field.

   ```javascript
   inputElement.addEventListener('focus', function() {
       console.log('Input focused');
   });
   ```

5. **`blur`**:
   - Fired when an element loses focus.

   ```javascript
   inputElement.addEventListener('blur', function() {
       console.log('Input lost focus');
   });
   ```

6. **`reset`**:
   - Triggered when the form is reset to its default values (via a reset button or programmatically).

   ```javascript
   formElement.addEventListener('reset', function() {
       console.log('Form reset');
   });
   ```

### **Example of Form Events**

Here's a simple HTML form example that demonstrates the use of various form events:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Event Example</title>
</head>
<body>
    <form id="myForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br><br>
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>

    <script>
        const form = document.getElementById('myForm');
        const usernameInput = document.getElementById('username');

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log('Form submitted with username:', usernameInput.value);
        });

        // Handle input change
        usernameInput.addEventListener('input', function(event) {
            console.log('Current username:', event.target.value);
        });

        // Handle focus and blur events
        usernameInput.addEventListener('focus', function() {
            console.log('Input focused');
        });

        usernameInput.addEventListener('blur', function() {
            console.log('Input lost focus');
        });

        // Handle form reset
        form.addEventListener('reset', function() {
            console.log('Form reset');
        });
    </script>
</body>
</html>
```

## **Event Object in JavaScript**

When an event occurs, an **event object** is created and passed to the event handler. This object contains useful information about the event, allowing developers to access details about what happened and respond accordingly.

### **Key Properties of the Event Object**

1. **`type`**: 
   - The type of the event (e.g., `'submit'`, `'change'`, `'input'`).
   
   ```javascript
   console.log(event.type); // e.g., 'submit'
   ```

2. **`target`**:
   - The element that triggered the event (e.g., the input field or form).
   
   ```javascript
   console.log(event.target); // Returns the element that triggered the event
   ```

3. **`currentTarget`**:
   - The element to which the event listener is attached. This may differ from `target` when the event bubbles up.
   
   ```javascript
   console.log(event.currentTarget); // Returns the element where the event listener is attached
   ```

4. **`preventDefault()`**:
   - A method that prevents the default behavior associated with the event (e.g., preventing form submission).
   
   ```javascript
   event.preventDefault(); // Prevents the default action
   ```

5. **`stopPropagation()`**:
   - A method that stops the event from propagating (bubbling) up to parent elements.
   
   ```javascript
   event.stopPropagation(); // Stops the event from bubbling
   ```

6. **`key`**: 
   - For keyboard events, this property indicates which key was pressed.
   
   ```javascript
   document.addEventListener('keydown', function(event) {
       console.log('Key pressed:', event.key);
   });
   ```

### **Example: Accessing the Event Object**

Here’s an example that shows how to use the event object in a form event:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Object Example</title>
</head>
<body>
    <form id="myForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        const form = document.getElementById('myForm');

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Accessing properties of the event object
            console.log('Event Type:', event.type); // Logs: submit
            console.log('Target Element:', event.target); // Logs: <form id="myForm">...
            console.log('Email Input Value:', event.target.email.value); // Logs the email value
        });
    </script>
</body>
</html>
```

## **Conclusion**

- **Form Events** are crucial for capturing and managing user input in web applications. They allow developers to validate, modify, and respond to user interactions with forms.
- The **Event Object** provides valuable properties and methods to gain insight into the event and control its behavior, enabling developers to create dynamic and responsive user interfaces.

### reference
to know more about Form event and Event object in DOM JS... visit:
> - [W3School (addEventListener())](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
> - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=J5-yOKK--78&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=112)