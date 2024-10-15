# Applying Styles on JavaScript DOM

In JavaScript, one of the powerful features is the ability to manipulate the **Document Object Model (DOM)** dynamically, including applying and changing styles of HTML elements. This is essential for creating interactive, visually appealing web applications. There are several ways to apply styles to DOM elements using JavaScript.

---

## **1. Using the `style` Property**

The most common and direct way to apply styles to an element in the DOM is by modifying the `style` property. This property corresponds to the inline CSS styles of the element.

#### **Syntax**:
```javascript
element.style.propertyName = "value";
```
- **`element`**: The DOM element you want to style.
- **`propertyName`**: The CSS property you want to modify, in camelCase notation (e.g., `backgroundColor` for `background-color`).
- **`value`**: The value of the CSS property (e.g., `"red"`, `"10px"`, `"none"`).

#### **Example**:
```html
<div id="box">Hello World!</div>
```
```javascript
let box = document.getElementById("box");

// Apply styles using the 'style' property
box.style.backgroundColor = "lightblue";
box.style.color = "white";
box.style.padding = "20px";
box.style.border = "2px solid black";
```

This applies the styles directly to the `box` element, resulting in the following HTML (if viewed through the developer tools):
```html
<div id="box" style="background-color: lightblue; color: white; padding: 20px; border: 2px solid black;">Hello World!</div>
```

#### **Important Notes**:
- The `style` property only applies inline styles, which means that the styles are added directly to the HTML element, overriding any external or internal stylesheets for the same properties.
- CSS properties in JavaScript follow camelCase convention, so `background-color` becomes `backgroundColor`, `font-size` becomes `fontSize`, and so on.

---

### **2. Using `className` and `classList` for CSS Class Manipulation**

Another way to style elements is by toggling or modifying their CSS classes. This method is especially useful for maintaining clean and reusable code by keeping the styles in external or internal stylesheets, rather than directly applying inline styles.

#### **a. `className` Property**:
- The `className` property allows you to set or get the `class` attribute of an element. When you set `className`, it overwrites all existing classes on the element.

#### **Example**:
```html
<div id="box" class="initialClass">Hello World!</div>
```
```javascript
let box = document.getElementById("box");

// Change the class of the element
box.className = "newClass";
```
This replaces any existing class with `"newClass"`.

#### **b. `classList` API**:
- The `classList` property is a more flexible and powerful way to manipulate classes. It allows you to add, remove, or toggle individual classes without affecting others.

##### **Methods**:
- **`element.classList.add(className)`**: Adds the specified class to the element.
- **`element.classList.remove(className)`**: Removes the specified class from the element.
- **`element.classList.toggle(className)`**: Adds the class if it doesn't exist; removes it if it does.
- **`element.classList.contains(className)`**: Checks if the element has the specified class (returns `true` or `false`).

#### **Example**:
```html
<div id="box" class="boxStyle">Hello World!</div>
```
```javascript
let box = document.getElementById("box");

// Add a new class to the element
box.classList.add("highlight");

// Remove an existing class
box.classList.remove("boxStyle");

// Toggle a class (add it if it doesn't exist, remove it if it does)
box.classList.toggle("active");

// Check if the element has a specific class
console.log(box.classList.contains("highlight"));  // true
```

#### **Advantages**:
- Using classes allows you to maintain a separation between **JavaScript logic** and **CSS styles**, making your code cleaner and more maintainable.
- Styles can be applied conditionally and dynamically without cluttering the HTML with inline styles.

---

### **3. Manipulating Styles via External Stylesheets**

If your styles are defined in an external stylesheet, you can still use JavaScript to manipulate styles by changing the `className` or `classList` of elements. This allows the page to load with the default styles, and JavaScript can selectively change them based on user interaction or other logic.

#### **Example**:
```html
<head>
  <style>
    .redBox {
      background-color: red;
      width: 100px;
      height: 100px;
    }

    .blueBox {
      background-color: blue;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div id="box" class="redBox"></div>
</body>
```
```javascript
let box = document.getElementById("box");

// Change the class from 'redBox' to 'blueBox'
box.classList.replace("redBox", "blueBox");
```

In this example, the box starts out red, and JavaScript changes it to blue by simply toggling between the classes.

---

### **4. Using `getComputedStyle()` to Read Current Styles**

Sometimes, you may need to read the actual computed styles of an element (styles that are currently being applied after all CSS rules, including external stylesheets and inline styles, have been calculated). You can use the `getComputedStyle()` method for this.

#### **Syntax**:
```javascript
window.getComputedStyle(element);
```

#### **Example**:
```javascript
let box = document.getElementById("box");

// Get the computed style of the box
let styles = window.getComputedStyle(box);

// Access individual style properties
console.log(styles.backgroundColor);  // Output: rgb(255, 0, 0) (for red)
```

This method is useful when you need to determine the final style that the browser is applying to an element, including styles inherited from external stylesheets, inline styles, and user agent styles (default browser styles).

---

### **5. Changing Styles Using `setAttribute()`**

Another approach to applying styles is by directly manipulating the `style` attribute of an element using the `setAttribute()` method. This is less commonly used than `element.style`, but it allows for more flexibility if you are dynamically setting multiple attributes.

#### **Example**:
```javascript
let box = document.getElementById("box");

// Set multiple inline styles at once
box.setAttribute("style", "background-color: green; color: white; padding: 20px;");
```
In this case, the entire `style` attribute is overwritten, similar to manually editing it in the HTML.

---

### **6. Using CSS Variables (Custom Properties)**

With modern CSS, you can define **CSS variables** (also called custom properties) and manipulate them using JavaScript. This is a powerful way to create dynamic styles that can be easily reused across different elements.

#### **Example**:
```html
<head>
  <style>
    :root {
      --box-color: red;
    }

    .box {
      background-color: var(--box-color);
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div id="box" class="box"></div>
</body>
```
```javascript
// Change the value of the CSS variable
document.documentElement.style.setProperty('--box-color', 'blue');
```

This approach allows for easily updating global or local styles by modifying the value of CSS variables, which can be applied consistently across the entire document.

---

### **Summary**

- **Direct Style Manipulation**: Use `element.style.propertyName` to directly modify individual inline styles. This is useful for quick, one-off style changes.
- **Class Manipulation**: Use `className` or `classList` to apply predefined styles from CSS. This approach keeps JavaScript logic separate from CSS styles and is more maintainable.
- **External Stylesheets**: Dynamically add or remove classes to apply external styles.
- **Reading Styles**: Use `getComputedStyle()` to read the final computed styles being applied to an element.
- **CSS Variables**: You can use CSS variables in combination with JavaScript to create dynamic, reusable styles.

---

These techniques provide flexibility in how you style elements in your application, allowing for dynamic changes based on user interaction, application state, or other logic.


## reference
to know more about innerText, innerHTML, textContent... visit:
> - [W3School (HTML DOM Element style Property)](https://www.w3schools.com/jsref/prop_html_style.asp)
> - [W3School (JavaScript HTML DOM - Changing CSS)](https://www.w3schools.com/js/js_htmldom_css.asp)
> - [W3School (HTML DOM Style object)](https://www.w3schools.com/jsref/dom_obj_style.asp)
> - [YouTube (Recommended)](https://www.youtube.com/watch?v=KW9DiBSVC_c&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=97)

