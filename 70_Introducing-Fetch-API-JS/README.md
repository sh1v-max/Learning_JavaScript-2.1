
# Fetch API

The **Fetch API** is a modern interface in JavaScript that allows you to make HTTP requests (GET, POST, PUT, DELETE, etc.) asynchronously. It is a replacement for older methods like `XMLHttpRequest` and provides a more flexible and powerful way to interact with servers.

## Table of Contents
1. [Introduction to Fetch API](#introduction-to-fetch-api)
2. [Making GET Requests](#making-get-requests)
3. [Handling Responses](#handling-responses)
4. [Handling Errors](#handling-errors)
5. [Making POST Requests](#making-post-requests)
6. [Advanced Fetch API Usage](#advanced-fetch-api-usage)
7. [Fetch with Async/Await](#fetch-with-asyncawait)
8. [Conclusion](#conclusion)


## Introduction to Fetch API

The **Fetch API** provides a simple way to fetch resources asynchronously across the network. It returns a **Promise**, allowing developers to handle responses and errors using the `.then()` method or `async/await` syntax.

```javascript
fetch(url, options)
  .then(response => response.json()) // Process response as JSON
  .then(data => console.log(data)) // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors
```

### Key Features of Fetch:
- **Asynchronous by default**: Fetch operations are non-blocking, which means your code won't freeze while waiting for a network response.
- **Returns a Promise**: Fetch works with promises, enabling better handling of asynchronous code.
- **No need for callbacks**: Unlike `XMLHttpRequest`, fetch avoids callback hell, allowing cleaner code.
  

## Making GET Requests

A GET request is used to fetch data from the server.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())  // Parsing the response as JSON
  .then(data => console.log(data))  // Handling the data
  .catch(error => console.log('Error:', error));  // Error handling
```

### Important Notes:
- **Response Object**: The `response` object contains the HTTP response from the server.
- **`.json()` method**: It parses the JSON response body into a JavaScript object.
- **`.text()` method**: If the response is plain text, use `.text()` instead.


## Handling Responses

Once a response is received, you can handle it in various ways:

### 1. **Check for Success**
Use `response.ok` to check if the response was successful (status code 200-299).

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 2. **Handling Status Codes**
If you need to check the exact status code, use `response.status`.

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (response.status === 404) {
      throw new Error('Resource not found');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```


## Handling Errors

**Error handling** is one of the most important aspects of any network request. With the Fetch API, you can catch both network and HTTP errors.

### Catching Errors
Use `.catch()` to handle network issues, and custom checks for HTTP status errors (like 404 or 500).

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

### Error Types:
- **Network Errors**: These occur when there’s no response or the server is unreachable.
- **HTTP Errors**: For example, if the server returns a status like 404 (Not Found) or 500 (Internal Server Error).



## Making POST Requests

A POST request is typically used to send data to the server, such as when submitting a form or creating a resource.

### Example of Sending Data with a POST Request:
```javascript
fetch('https://api.example.com/submit', {
  method: 'POST',  // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json'  // Specify the content type
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })  // Sending data in JSON format
})
  .then(response => response.json())  // Parse JSON response
  .then(data => console.log(data))  // Handle response data
  .catch(error => console.log('Error:', error));  // Error handling
```


## Advanced Fetch API Usage

### 1. **Custom Headers**
You can customize headers for your requests.

```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer token123',
    'X-Custom-Header': 'value'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 2. **Handling Timeouts**
The Fetch API does not have built-in timeout functionality. However, you can implement a timeout using `AbortController`.

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request timed out');
    } else {
      console.log('Error:', error);
    }
  });

// Abort the request after 5 seconds
setTimeout(() => controller.abort(), 5000);
```


## Fetch with Async/Await

**Async/Await** is a modern way to handle asynchronous code in JavaScript. It simplifies the syntax and makes the code easier to read compared to using `.then()` and `.catch()`.

### Example of Fetch with Async/Await:

```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

- **`await`** pauses the execution of the function until the `Promise` resolves.
- **`async`** marks a function that contains `await`.



## Conclusion

The **Fetch API** is a powerful and modern way to interact with resources over the network. It simplifies working with asynchronous HTTP requests, supports promises, and can be easily integrated with other asynchronous operations using `async/await`. Fetch is a great alternative to the older `XMLHttpRequest` method, providing a cleaner and more readable approach to handling HTTP requests in JavaScript.

# Reference
If you want to know more about Fetch API in JS, visit: 
- [FreeCodeCamp](https://www.freecodecamp.org/news/javascript-fetch-api-for-beginners/)
- [YouTube](https://www.youtube.com/watch?v=CNwb02vgsmc&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=124)