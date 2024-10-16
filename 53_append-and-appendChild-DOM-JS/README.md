### **append() and appendChild() in DOM - JavaScript**

#### **1. `append()`**
- **Purpose**: Adds content (text or elements) to the end of a specified parent element.
- **Key Features**:
  - Can append **multiple nodes** or **text strings** at once.
  - Can append **text strings** directly (without needing to wrap them in a `Text` node).
  - Does not return the appended element.
- **Syntax**:
  ```javascript
  parentElement.append(node1, node2, "text");
  ```
- **Example**:
  ```javascript
  const parent = document.querySelector(".container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Element";
  parent.append(newDiv, " Some text");
  ```
- **Use Cases**:
  - When you want to append multiple elements or mix text and elements at the end of a parent element.

#### **2. `appendChild()`**
- **Purpose**: Adds a single **Node** (element or text node) as the last child of a parent element.
- **Key Features**:
  - Can append **only one node** at a time.
  - Can **only append Node objects** (elements, not raw text strings).
  - Returns the appended node.
- **Syntax**:
  ```javascript
  parentElement.appendChild(newNode);
  ```
- **Example**:
  ```javascript
  const parent = document.querySelector(".container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Child";
  parent.appendChild(newDiv);
  ```
- **Use Cases**:
  - When you need to append a single element as the last child of a parent.

#### **Key Differences**:
| `append()`                         | `appendChild()`                    |
|------------------------------------|------------------------------------|
| Can append **multiple** nodes or text strings | Can append **only one** node (no text strings) |
| **Does not return** appended node  | **Returns** the appended node      |
| Can append **text** directly       | Only appends **Node objects**      |

### **Example**: Using Both Methods
```javascript
const parent = document.querySelector(".container");

// Using append()
parent.append("Some text", document.createElement("div"));

// Using appendChild()
const newElement = document.createElement("p");
parent.appendChild(newElement);
```