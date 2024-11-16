## Question: -
### **how are we able to use `addEventListener('laod')`  **before** calling `xhr.open()` and `xhr.send()`... how is it possible?**

![image](./image/image.png)

## Solution: -
Great question! The reason you're able to use the `xhr.addEventListener('load', ...)` **before** calling `xhr.open()` and `xhr.send()` lies in how **`XMLHttpRequest`** (XHR) works.

### How XHR Events Work:

When you create a new `XMLHttpRequest` object, the request is not yet sent, and no actual data transfer has occurred. However, the XHR object is still capable of registering events, such as the `'load'` event, **even before the request is sent**.

### Event Listeners are Set in Advance:

By adding an event listener for `'load'` **before** calling `xhr.open()` and `xhr.send()`, you're essentially preparing for the moment when the request completes, without affecting the process of sending the request.

1. **Event Listeners** are **registered** in advance. You can think of it as preparing the callback function that will run once the request finishes. The event listener is attached to the XHR object as soon as it's created.

2. **`xhr.open()`**: When you call `xhr.open()`, you set up the request with the HTTP method and the URL. It doesn't send the request yet, so the listener can still be attached at this stage.

3. **`xhr.send()`**: This sends the actual request. Once the request is sent, the browser processes the HTTP request, and when the response is received, the `'load'` event is triggered.

### Event Flow:

- **Step 1**: You create a new XHR object (`const xhr = new XMLHttpRequest();`).
- **Step 2**: You add an event listener for the `'load'` event using `xhr.addEventListener('load', ...)`.
- **Step 3**: You set the response type (`xhr.responseType = 'json'`), which is part of configuring the request.
- **Step 4**: You initialize the request using `xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')`.
- **Step 5**: You send the request using `xhr.send()`. Now, the request is sent, and the event listener for `'load'` waits for the response to complete.

As soon as the server responds, the `'load'` event is triggered, and the callback inside the event listener executes. 

### Why Does This Work?

- **Asynchronous Nature of XHR**: XHR works asynchronously by default. This means that the code that registers the event listener is executed immediately and doesn't block the rest of the code, even before the request is sent. When the server responds, the event listener gets triggered.
  
- **Event Queue**: JavaScript is event-driven, meaning that event listeners are set up to wait for certain events (like `'load'` in this case) to happen, even if the request hasn't been sent yet. Once the request is sent, the `'load'` event will be placed in the event queue, waiting for the response.

### Example of Flow:

```javascript
const xhr = new XMLHttpRequest();  // Create XHR object
xhr.responseType = 'json';         // Set response type

xhr.addEventListener('load', () => {  // Register the 'load' event listener
  image.src = xhr.response.message;  // Update image src on successful load
  console.log(xhr);                   // Log the response
  console.log('successfully loaded'); // Log success
});

// At this point, no request has been sent yet.

// Prepare and send the request
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');  // Configure the request
xhr.send();  // Send the request
```

In summary, you're **registering the event listener first**, which is perfectly fine because it's not dependent on the request having been sent yet. The event listener just waits for the request to complete, and once the server responds, it gets triggered.