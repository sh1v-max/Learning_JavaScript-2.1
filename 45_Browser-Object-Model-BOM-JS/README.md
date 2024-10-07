# BOM (Browser Object Model) in JavaScript

The **BOM (Browser Object Model)** is an essential part of web development in JavaScript, providing an interface for interacting with the browser itself, rather than the content of a web page. It consists of objects and methods that allow you to manipulate browser windows, control navigation, manage the user's browsing history, and get information about the user's environment (e.g., browser type, screen resolution).

Unlike the **DOM (Document Object Model)**, which deals with the structure and content of a webpage, the BOM deals with browser-specific functionality.

## Main Components of BOM

1. **window** object
2. **navigator** object
3. **location** object
4. **history** object
5. **screen** object
6. **alert, prompt, confirm** dialogs
7. **timers** (setTimeout, setInterval)

Let's explore each of these in detail.



## 1. **`window` Object**

The `window` object is the **global object** in the browser environment. Every variable, object, or function declared globally is part of the `window` object. It also serves as the primary interface for interacting with other parts of the BOM.

### Key Points:
- The `window` object is the **global context** in the browser.
- All BOM properties, such as `navigator`, `location`, and `history`, are part of the `window` object.

### Example:

```javascript
console.log(window); // Logs the window object
console.log(window.innerWidth);  // Width of the browser window (viewport)
console.log(window.innerHeight); // Height of the browser window (viewport)
```

### Common Properties and Methods of `window`:
- **`window.open(url)`**: Opens a new browser window or tab.
- **`window.close()`**: Closes the current browser window (only if opened via script).
- **`window.alert(message)`**: Displays a popup alert with a message.
- **`window.innerWidth / innerHeight`**: Gets the dimensions of the viewport.
- **`window.scrollTo(x, y)`**: Scrolls to a specific position on the page.



## 2. **`navigator` Object**

The `navigator` object provides information about the browser and the operating system. This can include details like the browser name, version, language, and whether cookies or JavaScript are enabled.

### Key Points:
- It provides metadata about the **user's browser** and **environment**.
- Frequently used for **browser detection** or **checking features**.

### Example:

```javascript
console.log(navigator.userAgent);  // Returns the user agent string
console.log(navigator.language);   // Returns the browser's language
console.log(navigator.platform);   // Returns the platform (OS) the browser is running on
```

### Common Properties of `navigator`:
- **`navigator.userAgent`**: Returns a string identifying the browser and operating system.
- **`navigator.language`**: The language setting of the browser (e.g., "en-US").
- **`navigator.platform`**: The operating system or platform (e.g., "Win32").
- **`navigator.cookieEnabled`**: A boolean indicating whether cookies are enabled.



## 3. **`location` Object**

The `location` object contains information about the current URL of the browser. You can also use it to redirect the user to a new URL or reload the current page.

### Key Points:
- It provides methods to **manipulate the URL** of the current document.
- Can be used for **redirecting the browser** or **reloading the page**.

### Example:

```javascript
console.log(location.href);      // Current URL of the page
location.href = "https://google.com";  // Redirects to Google
location.reload();               // Reloads the current page
```

### Common Properties of `location`:
- **`location.href`**: Full URL of the current page.
- **`location.protocol`**: The protocol (e.g., "https:" or "http:").
- **`location.hostname`**: The domain name (e.g., "www.example.com").
- **`location.pathname`**: The path of the URL (e.g., "/page.html").
- **`location.search`**: The query string, including the "?" (e.g., "?id=123").
- **`location.hash`**: The fragment identifier (the part after `#` in the URL).

### Methods:
- **`location.reload()`**: Reloads the current page.
- **`location.replace(url)`**: Replaces the current document with the one at the new URL (no history entry).
- **`location.assign(url)`**: Navigates to the given URL (creates a new history entry).



## 4. **`history` Object**

The `history` object provides methods to interact with the browser's session history (the list of pages the user has visited within the current tab).

### Key Points:
- It allows **navigation through the session history**, both forward and backward.
- Can be used to **manipulate the browsing history** without reloading the page (using `pushState` and `replaceState`).

### Example:

```javascript
history.back();    // Go back to the previous page in the history
history.forward(); // Go forward to the next page in the history
history.go(-1);    // Equivalent to history.back()
```

### Common Methods:
- **`history.back()`**: Go to the previous page in the history.
- **`history.forward()`**: Go to the next page in the history.
- **`history.go(n)`**: Go to the nth page in the history (negative for back, positive for forward).
- **`history.pushState()`**: Adds a new entry to the history stack without reloading the page.
- **`history.replaceState()`**: Replaces the current history entry without reloading.

### Example of `pushState` and `replaceState`:
```javascript
history.pushState({page: 1}, "title", "/new-url");  // Add new history entry
history.replaceState({page: 1}, "title", "/same-url");  // Replace current entry
```



## 5. **`screen` Object**

The `screen` object provides information about the user's screen, such as its width, height, and color depth.

### Key Points:
- Used for **retrieving screen resolution** and other screen-related information.
- Often used in **responsive web design** to optimize layout based on the user's screen size.

### Example:

```javascript
console.log(screen.width);  // Width of the user's screen
console.log(screen.height); // Height of the user's screen
console.log(screen.colorDepth); // Color depth (bits per pixel)
```

### Common Properties of `screen`:
- **`screen.width`**: The width of the user's screen in pixels.
- **`screen.height`**: The height of the user's screen in pixels.
- **`screen.availWidth`**: The available width (excluding interface elements like taskbars).
- **`screen.availHeight`**: The available height.
- **`screen.colorDepth`**: The color depth of the screen (e.g., 24 bits).


## 6. **Dialogs (`alert`, `prompt`, `confirm`)**

JavaScript provides built-in dialog methods to interact with users through popup messages. These are part of the BOM because they interact with the browser's UI.

### 1. **`alert()`**:
Displays a simple message in a dialog box. The user must acknowledge the message by clicking "OK."

```javascript
alert("This is a message");
```

### 2. **`prompt()`**:
Displays a dialog with an input field, allowing the user to enter some data. It returns the user's input or `null` if they cancel.

```javascript
const name = prompt("Enter your name:");
console.log(name);
```

### 3. **`confirm()`**:
Displays a dialog with "OK" and "Cancel" buttons, allowing the user to confirm or cancel an action. It returns `true` for "OK" and `false` for "Cancel."

```javascript
const result = confirm("Are you sure?");
console.log(result); // true or false
```


## 7. **Timers: `setTimeout()` and `setInterval()`**

These are BOM functions that allow you to execute code after a delay or repeatedly at a specified interval.

### 1. **`setTimeout()`**:
Executes a function after a specified delay.

```javascript
setTimeout(() => {
  console.log("This message appears after 3 seconds");
}, 3000); // 3000ms = 3 seconds
```

### 2. **`setInterval()`**:
Repeats the execution of a function at a specified interval.

```javascript
setInterval(() => {
  console.log("This message appears every 2 seconds");
}, 2000); // 2000ms = 2 seconds
```

### 3. **`clearTimeout()`** and **`clearInterval()`**:
Stop the execution of `setTimeout()` or `setInterval()` if needed.

```javascript
let timer = setTimeout(() => {
  console.log("This won't run because it's cleared");
}, 5000);

clearTimeout(timer); // Stops the timeout
```

## Conclusion

The **BOM (Browser Object Model)** provides methods and objects for interacting with the browser itself. While the **DOM** deals with the content of a web page, the **BOM** provides access to everything outside of the document, such as the browser window, screen resolution,


### References
Here are some helpful references for further reading on the **Browser Object Model (BOM)** and its components:
> [MDN Web Docs - BOM](https://developer.mozilla.org/en-US/docs/Web/API/Window)
>
> [MDN Web Docs - Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
>
> [W3Schools - BOM](https://www.w3schools.com/js/js_window.asp)
>
> [GeeksforGeeks - BOM](https://www.geeksforgeeks.org/browser-object-model-bom-in-javascript/)
