# **Main Keyboard Events in JavaScript**
JavaScript provides a variety of keyboard events in the DOM (Document Object Model) to interact with user input via the keyboard. These events allow you to detect when a user presses, releases, or interacts with keyboard keys, and respond to those actions.

1. **`keydown`**:
   - This event fires **when any key is pressed down**.
   - It continues to fire as long as the key is held down (repeatable).
   - This event is useful for capturing key presses for things like game controls or shortcuts.

2. **`keypress`**:
   - This event is **deprecated** in modern browsers, but it was previously used for capturing character-generating key presses (like letters and numbers).
   - It's generally replaced by the `keydown` or `keyup` event for detecting key presses.
   - Modern usage has shifted away from this event, so it’s best to avoid using it in new projects.

3. **`keyup`**:
   - This event is fired **when a key is released** after being pressed down.
   - It’s commonly used when you want to detect the completion of a key press.

## **Common Properties in Keyboard Events**

When any of these keyboard events are triggered, an **event object** is passed to the event handler, which contains useful properties and methods related to the key press.

### **Key Properties**:

- **`event.key`**:
  - Returns the value of the key pressed (e.g., `"a"`, `"Enter"`, `"1"`, etc.).
  
- **`event.code`**:
  - Returns the physical key code of the key pressed, which is independent of the current keyboard layout (e.g., `"KeyA"`, `"Digit1"`, `"ArrowUp"`).
  
- **`event.keyCode`**:
  - Returns the numeric code representing the key pressed (e.g., 65 for "A"). 
  - It is deprecated and is replaced by `event.key` and `event.code`, but you may still encounter it in older codebases.

- **`event.ctrlKey`**, **`event.shiftKey`**, **`event.altKey`**, **`event.metaKey`**:
  - Boolean properties that indicate whether the **Ctrl**, **Shift**, **Alt**, or **Meta** (Command on macOS) keys were held down when the event was fired.

## **Example of Keyboard Event Handling**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Events Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .output {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Keyboard Events</h1>
    <input type="text" id="inputField" placeholder="Type something..." />
    <div class="output">
        Key: <span id="key"></span><br>
        Code: <span id="code"></span><br>
        KeyCode: <span id="keyCode"></span><br>
        Ctrl Key: <span id="ctrlKey"></span><br>
        Shift Key: <span id="shiftKey"></span><br>
    </div>

    <script>
        const inputField = document.getElementById('inputField');
        const keySpan = document.getElementById('key');
        const codeSpan = document.getElementById('code');
        const keyCodeSpan = document.getElementById('keyCode');
        const ctrlKeySpan = document.getElementById('ctrlKey');
        const shiftKeySpan = document.getElementById('shiftKey');

        // Handle keydown event
        inputField.addEventListener('keydown', function(event) {
            keySpan.textContent = event.key; // Display key pressed
            codeSpan.textContent = event.code; // Display key code
            keyCodeSpan.textContent = event.keyCode; // Display deprecated keyCode

            // Check if Ctrl and Shift keys are pressed
            ctrlKeySpan.textContent = event.ctrlKey ? 'Yes' : 'No';
            shiftKeySpan.textContent = event.shiftKey ? 'Yes' : 'No';
        });

        // Handle keyup event
        inputField.addEventListener('keyup', function(event) {
            console.log('Key released:', event.key);
        });
    </script>
</body>
</html>
```

## **Explanation**:

1. **`keydown`** event:
   - In this example, the `keydown` event captures key presses and displays:
     - **`event.key`**: The actual key pressed by the user.
     - **`event.code`**: The code representing the physical key on the keyboard.
     - **`event.keyCode`**: The numeric representation of the key (for older code).
     - **Modifier keys**: The event checks if **Ctrl** or **Shift** keys are held down during the key press.

2. **`keyup`** event:
   - When the user releases a key, the `keyup` event fires, logging the key that was released.

## **Practical Use Cases for Keyboard Events**:

1. **Form Validation on Key Press**:
   - Real-time form validation while the user types input (e.g., ensuring passwords match or fields are correctly filled).

   ```javascript
   const passwordInput = document.getElementById('password');
   const confirmPasswordInput = document.getElementById('confirmPassword');
   const message = document.getElementById('message');

   confirmPasswordInput.addEventListener('keyup', function() {
       if (passwordInput.value === confirmPasswordInput.value) {
           message.textContent = 'Passwords match!';
       } else {
           message.textContent = 'Passwords do not match!';
       }
   });
   ```

2. **Keyboard Shortcuts**:
   - Implement keyboard shortcuts, like pressing `Ctrl + S` to save a file.

   ```javascript
   document.addEventListener('keydown', function(event) {
       if (event.ctrlKey && event.key === 's') {
           event.preventDefault(); // Prevent default save behavior in the browser
           console.log('File saved!');
       }
   });
   ```

3. **Game Controls**:
   - Create simple game controls by detecting arrow keys or WASD keys.

   ```javascript
   document.addEventListener('keydown', function(event) {
       switch (event.code) {
           case 'ArrowUp':
               console.log('Move up');
               break;
           case 'ArrowDown':
               console.log('Move down');
               break;
           case 'ArrowLeft':
               console.log('Move left');
               break;
           case 'ArrowRight':
               console.log('Move right');
               break;
       }
   });
   ```

## **Modifier Keys in Keyboard Events**

Sometimes, you might want to handle key combinations (like `Ctrl + C`, `Shift + A`, etc.). The `event` object includes boolean properties to check if modifier keys are being pressed:

- **`event.ctrlKey`**: `true` if the **Ctrl** key is pressed.
- **`event.shiftKey`**: `true` if the **Shift** key is pressed.
- **`event.altKey`**: `true` if the **Alt** key is pressed.
- **`event.metaKey`**: `true` if the **Meta** (Command on macOS) key is pressed.

Example for handling `Ctrl + C` (copy shortcut):

```javascript
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        console.log('Copy shortcut detected!');
    }
});
```

## **Summary of Keyboard Events**:

| Event     | Description                                  | Triggered on | Example Use                |
|-----------|----------------------------------------------|--------------|----------------------------|
| `keydown` | Fires when a key is pressed                  | Key press    | Capturing shortcuts         |
| `keyup`   | Fires when a key is released                 | Key release  | Triggering actions on key release |
| `keypress`| Fires when a character-generating key is pressed (deprecated) | Key press (character) | Legacy use, better to use `keydown` |

## **Conclusion**:
- **Keyboard events** allow you to capture and react to user keyboard input in real-time, enabling functionalities like form validation, game controls, and custom keyboard shortcuts.
- The **event object** contains useful information about which key was pressed, the key code, and whether modifier keys were used.

### reference
to know more about Keyboard events in DOM JS... visit:

> - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
> - [](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=crRttpPp_4o&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=106)