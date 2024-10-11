# **Document Object Model (DOM) in JavaScript**

### **What is the DOM?**
- **DOM (Document Object Model)** is a **tree-like structure** that represents the content of HTML and XML documents.
- It is an interface for web pages, allowing scripts (JavaScript) to dynamically manipulate the document structure, style, and content.
- The DOM is **platform and language-independent**, which means it can be used with various programming languages (though commonly used with JavaScript).


### **DOM Structure**
- **Tree Structure**: The document is represented as a hierarchy of **nodes** (e.g., elements, text, attributes).
  - **Document**: The root node representing the whole web page.
  - **Element Nodes**: HTML tags like `<div>`, `<p>`, `<h1>`.
  - **Text Nodes**: The text within elements.
  - **Attribute Nodes**: Attributes like `id`, `class` associated with elements.
  - **Comments**: Comments in the HTML are also nodes in the DOM.
  
#### **Example**: Representation of a Simple HTML Document
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
This will be represented in the DOM as:
```
Document
  └── html
      ├── head
      │   └── title
      └── body
          ├── h1
          └── p
```

### **Interacting with the DOM**
JavaScript can access and manipulate DOM elements using the **`document`** object.

#### **Key Methods to Access Elements:**
1. **`getElementById()`**: Selects an element by its `id`.
   ```javascript
   const element = document.getElementById('myElement');
   ```
2. **`getElementsByClassName()`**: Selects elements by their class.
   ```javascript
   const elements = document.getElementsByClassName('myClass');
   ```
3. **`getElementsByTagName()`**: Selects elements by tag name.
   ```javascript
   const paragraphs = document.getElementsByTagName('p');
   ```
4. **`querySelector()`**: Selects the first element that matches a CSS selector.
   ```javascript
   const firstDiv = document.querySelector('div');
   ```
5. **`querySelectorAll()`**: Selects all elements that match a CSS selector.
   ```javascript
   const allDivs = document.querySelectorAll('div');
   ```

### **Modifying the DOM**
Once an element is selected, you can modify its content, attributes, and style.

#### **1. Modifying Content:**
- **`textContent`**: Changes or retrieves the text content of an element.
  ```javascript
  const header = document.querySelector('h1');
  header.textContent = "New Title";
  ```
- **`innerHTML`**: Allows you to change or retrieve the HTML content of an element.
  ```javascript
  const paragraph = document.querySelector('p');
  paragraph.innerHTML = "<strong>This is bold text</strong>";
  ```

#### **2. Modifying Attributes:**
- **`setAttribute()`**: Sets an attribute (like `id`, `class`, `src`) for an element.
  ```javascript
  const img = document.querySelector('img');
  img.setAttribute('src', 'new-image.jpg');
  ```
- **`getAttribute()`**: Retrieves the value of an attribute.
  ```javascript
  const imgSrc = img.getAttribute('src');
  ```

#### **3. Modifying Styles:**
- **`style`**: Modifies the inline CSS of an element.
  ```javascript
  const div = document.querySelector('div');
  div.style.backgroundColor = "blue";
  div.style.fontSize = "20px";
  ```


### **Creating and Removing Elements**
JavaScript allows you to create new elements and remove existing ones in the DOM.

#### **1. Creating Elements:**
- **`createElement()`**: Creates a new element.
  ```javascript
  const newElement = document.createElement('div');
  newElement.textContent = "I am a new element!";
  document.body.appendChild(newElement);
  ```

#### **2. Removing Elements:**
- **`remove()`**: Removes an element from the DOM.
  ```javascript
  const elementToRemove = document.querySelector('#removeThis');
  elementToRemove.remove();
  ```


### **DOM Events**
Events allow JavaScript to react to user interactions with the web page (clicks, key presses, form submissions, etc.).

#### **Common Events:**
- **`click`**: Fires when an element is clicked.
- **`keyup`**: Fires when a key is released.
- **`submit`**: Fires when a form is submitted.

#### **Example of Handling an Event**:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button was clicked!');
});
```


### **DOM Traversal**
JavaScript allows you to navigate through the DOM tree to find related elements.

#### **Traversal Properties:**
1. **`parentNode`**: Accesses the parent of a node.
   ```javascript
   const parent = element.parentNode;
   ```
2. **`childNodes`**: Returns a collection of a node's child nodes.
   ```javascript
   const children = element.childNodes;
   ```
3. **`firstChild`**: Accesses the first child of a node.
   ```javascript
   const firstChild = element.firstChild;
   ```
4. **`nextSibling`**: Accesses the next sibling of a node.
   ```javascript
   const next = element.nextSibling;
   ```


### **DOM vs BOM (Browser Object Model)**
- **DOM**: Focuses on the document and its structure, allowing you to interact with elements, attributes, and content.
- **BOM**: Focuses on the browser window and its components like the `window` object, `navigator`, `screen`, `location`, and `history`.


### **Summary**
- The **DOM** represents the structure of an HTML or XML document as a **tree of nodes**.
- JavaScript interacts with the DOM via the `document` object, allowing you to **select, modify, create, and remove** elements.
- The DOM is essential for creating **dynamic web pages** that respond to user actions and can be updated in real-time.


### **References:**
> - Mozilla Developer Network (MDN) Web Docs. ["DOM Introduction"](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
> - W3Schools. ["JavaScript HTML DOM"](https://www.w3schools.com/js/js_htmldom.asp)
> - JavaScript.info. ["The DOM – Document Object Model"](https://javascript.info/dom-nodes)
> - YouTube. [YouTube](https://www.youtube.com/watch?v=m2TpNXtT4Cs&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=95)
