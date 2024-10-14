# `getAttribute()` and `setAttribute()` in JavaScript

`getAttribute()` and `setAttribute()` are two essential methods for interacting with HTML elements’ attributes using JavaScript. They allow developers to retrieve or modify the attributes of an HTML element dynamically, offering a powerful way to manipulate the DOM.

---

## **1. `getAttribute()`**

### **Purpose**:
- The `getAttribute()` method is used to retrieve the value of a specified attribute from an HTML element.

### **Syntax**:
```javascript
element.getAttribute(attributeName);
```
- **`element`**: The DOM element you want to inspect.
- **`attributeName`**: The name of the attribute whose value you want to retrieve (e.g., `"class"`, `"href"`, `"src"`).

### **Return Value**:
- The value of the specified attribute as a string.
- If the attribute does not exist, it returns `null`.

### **Example**:
Consider this HTML:
```html
<a id="myLink" href="https://example.com" target="_blank">Example</a>
```
Using `getAttribute()` in JavaScript:
```javascript
let link = document.getElementById("myLink");

// Get 'href' attribute
let hrefValue = link.getAttribute("href");
console.log(hrefValue);  // Output: "https://example.com"

// Get 'target' attribute
let targetValue = link.getAttribute("target");
console.log(targetValue);  // Output: "_blank"

// Trying to get a non-existing attribute
let titleValue = link.getAttribute("title");
console.log(titleValue);  // Output: null
```

### **Use Cases**:
- **Reading Attributes**: Use `getAttribute()` to access an element’s attributes that are specified in the HTML, such as `src`, `href`, `alt`, etc.
- **Custom Attributes**: It is also useful for reading custom `data-*` attributes, often used to store extra information in an HTML element.

### **Example with Custom Attribute**:
```html
<div id="product" data-product-id="12345" data-product-name="Laptop"></div>
```
```javascript
let product = document.getElementById("product");
let productId = product.getAttribute("data-product-id");
console.log(productId);  // Output: "12345"
```

### **Key Point**:
- `getAttribute()` retrieves the value that was initially set in the HTML source code, not the live value that might be modified dynamically by the browser or JavaScript (for example, with `input` elements).

---

## **2. `setAttribute()`**

### **Purpose**:
- The `setAttribute()` method is used to add a new attribute or modify the value of an existing attribute on an HTML element.

### **Syntax**:
```javascript
element.setAttribute(attributeName, attributeValue);
```
- **`element`**: The DOM element you want to modify.
- **`attributeName`**: The name of the attribute you want to set (e.g., `"src"`, `"alt"`, `"id"`).
- **`attributeValue`**: The value to set for the attribute (always passed as a string).

### **Return Value**:
- This method does not return anything. It directly updates the attribute on the element.

### **Example**:
Consider this HTML:
```html
<img id="myImage" src="image1.jpg" alt="Image Description">
```
Using `setAttribute()` to modify the attributes in JavaScript:
```javascript
let img = document.getElementById("myImage");

// Change the 'src' attribute
img.setAttribute("src", "image2.jpg");  // Updates the image source

// Add a new 'title' attribute
img.setAttribute("title", "New Image");  // Adds a tooltip when hovering over the image

console.log(img.getAttribute("src"));  // Output: "image2.jpg"
console.log(img.getAttribute("title"));  // Output: "New Image"
```

### **Use Cases**:
- **Modifying Existing Attributes**: Use `setAttribute()` to change existing attributes such as `src`, `href`, `alt`, etc., based on user interaction or dynamic data.
- **Adding New Attributes**: It can also be used to add new attributes that weren’t originally defined in the HTML, such as custom `data-*` attributes or attributes like `title`.

### **Example of Adding a Custom Attribute**:
```html
<div id="info"></div>
```
```javascript
let infoDiv = document.getElementById("info");

// Add a new data attribute
infoDiv.setAttribute("data-user-id", "456");
console.log(infoDiv.getAttribute("data-user-id"));  // Output: "456"
```

### **Key Points**:
- If the attribute exists, `setAttribute()` updates it with the new value.
- If the attribute does not exist, it creates the attribute and sets its value.
- All attribute values are passed and stored as strings.

---

## **3. Differences Between `getAttribute()`/`setAttribute()` and DOM Properties**

While `getAttribute()` and `setAttribute()` work with HTML attributes, there are many cases where developers can directly access and modify DOM properties of elements instead. For example:

### **DOM Property Access Example**:
```html
<input type="text" id="myInput" value="default text">
```
In JavaScript, you can use the property `value` to manipulate the live state of the input element:
```javascript
let input = document.getElementById("myInput");

// Access and modify the live value (property)
input.value = "New Text";
console.log(input.value);  // Output: "New Text"
```

However, using `getAttribute()` and `setAttribute()` works with the initial values in the HTML, not the live state:
```javascript
console.log(input.getAttribute("value"));  // Output: "default text"

// Change the initial 'value' attribute using setAttribute()
input.setAttribute("value", "Changed Again");
console.log(input.getAttribute("value"));  // Output: "Changed Again"
```

### **When to Use Which**:
- **`getAttribute()`/`setAttribute()`**: When you want to work with the initial values or custom attributes directly set in the HTML, such as when you need to access non-standard attributes like `data-*`.
- **DOM Properties**: When you want to interact with the live state of an element, such as getting or setting the current text input value or toggling the state of a checkbox.

---

## **4. Common Use Cases**

### **a. Image Slideshow**:
You can dynamically change the image source by updating the `src` attribute of an `<img>` element:
```javascript
let image = document.getElementById("slideshow");
image.setAttribute("src", "newImage.jpg");
```

### **b. Handling Forms**:
You might want to dynamically update or read form input attributes:
```javascript
let formInput = document.getElementById("emailInput");

// Update placeholder
formInput.setAttribute("placeholder", "Enter your email");
```

### **c. Accessibility Enhancements**:
You can dynamically add `aria-*` attributes for better accessibility support:
```javascript
let button = document.getElementById("submitButton");
button.setAttribute("aria-label", "Submit the form");
```

---

## **5. Browser Compatibility**
Both `getAttribute()` and `setAttribute()` are supported across all modern browsers, including Chrome, Firefox, Safari, Edge, and even older browsers like Internet Explorer. There are no significant compatibility concerns when using these methods in most web projects.

---

## **6. Conclusion**

- **`getAttribute()`**: Retrieves the value of an attribute directly from the HTML, whether it's a standard attribute or a custom attribute.
- **`setAttribute()`**: Sets or updates an attribute of an HTML element, allowing for dynamic changes to the webpage’s structure and behavior.

These methods are vital for any JavaScript developer working with dynamic, interactive web applications where attributes need to be inspected or modified at runtime.


## reference
to know more about innerText, innerHTML, textContent... visit:
> - [W3School](https://www.w3schools.com/jsref/met_element_setattribute.asp)
> - [YouTube](https://www.youtube.com/watch?v=38mNZls3lUU&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=96)

