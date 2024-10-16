
# `append` and `appendChild`**

Both `append` and `appendChild` are methods used to add nodes to the DOM, but they have different functionalities and behaviors.

## **1. `appendChild` Method**

### **Syntax**
```javascript
parentNode.appendChild(childNode);
```

### **Description**
- **Usage**: `appendChild` adds a specified node as the last child of a specified parent node.
- **Node Types**: It only accepts a single Node (like an element, text node, etc.).
- **Return Value**: It returns the appended child node.
- **Node Requirement**: If the node is already part of the DOM, it is moved from its current position to the new location.

### **Example**
```html
<div id="parent">
    <p>Original Paragraph</p>
</div>
```
```javascript
const parentDiv = document.getElementById('parent');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New Paragraph';

// Appending the new paragraph
parentDiv.appendChild(newParagraph);
```
**Resulting HTML:**
```html
<div id="parent">
    <p>Original Paragraph</p>
    <p>New Paragraph</p>
</div>
```

## **2. `append` Method**

### **Syntax**
```javascript
parentNode.append(childNode1, childNode2, ...);
```

### **Description**
- **Usage**: `append` can add multiple nodes and/or strings to the end of the specified parent node.
- **Node Types**: It can accept one or more Node objects or strings (including HTML strings).
- **Return Value**: It does not return a value.
- **Node Requirement**: If a node is already in the DOM, it will be moved to the new location.

### **Example**
```html
<div id="parent">
    <p>Original Paragraph</p>
</div>
```
```javascript
const parentDiv = document.getElementById('parent');
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'New Paragraph 1';
const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'New Paragraph 2';

// Appending multiple nodes
parentDiv.append(newParagraph1, newParagraph2, 'Some text as a string');
```
**Resulting HTML:**
```html
<div id="parent">
    <p>Original Paragraph</p>
    <p>New Paragraph 1</p>
    <p>New Paragraph 2</p>
    Some text as a string
</div>
```

## **Key Differences Between `appendChild` and `append`**

| Feature                | `appendChild`                     | `append`                              |
|------------------------|-----------------------------------|---------------------------------------|
| Node Types             | Only Node objects                 | Node objects and strings              |
| Multiple Nodes         | No                                | Yes                                   |
| Return Value           | Returns the appended node         | Returns `undefined`                  |
| HTML String Support     | No                                | Yes                                   |

## **Conclusion**
- Use `appendChild` when you want to add a single node to a parent.
- Use `append` when you want to add multiple nodes or a combination of nodes and text to a parent.

Feel free to ask if you need more details or examples!

## reference
to know more about append and appendChild in DOM JS... visit:
> - [MDN - appendChil()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
> - [MDN - append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=rSX0sYwPnZg&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=102)
