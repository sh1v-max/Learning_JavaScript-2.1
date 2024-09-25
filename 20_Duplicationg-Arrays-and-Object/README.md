# Deep and Shallow Copy

> A **shallow copy** of an object is a new object which references the same values as the original object. A **deep copy** of an object is a new object which contains copies of all the values of the original object. This means that if the original object contains references to other objects, the deep copy will contain new copies of those objects, rather than references to the same objects.

## Deep Copy

### Definition
A deep copy creates a new object or array and recursively copies all properties or elements, ensuring that no references to the original object’s nested structures remain.

### Characteristics
- Changes to the nested objects in the copied structure do not affect the original structure since they are completely independent copies.
- It is slower and consumes more memory due to the recursion involved in copying nested structures.

## Shallow Copy

### Definition
A shallow copy creates a new object or array, but it only copies the references to the original object’s properties or elements. This means that nested objects or arrays are not copied; they remain linked to the original.

### Characteristics
- Changes to nested objects in the copied structure affect the original structure since both point to the same nested objects.
- It is faster and consumes less memory compared to deep copy.




## Copying Arrays/Objects in JavaScript

### Shallow Copy
- Copies top-level properties only.
- Nested objects are referenced.
- Changes in nested objects affect the original.

### Deep Copy
- Copies all properties, including nested objects.
- Changes in nested objects do not affect the original.


### For more information , visit: 
> - [MDN Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
> - [YouTube](https://www.youtube.com/watch?v=l_YFa0SKqtY&list=PLfEr2kn3s-br9ZFmejfLhAgMbGgbpdof8&index=64&pp=iAQB)