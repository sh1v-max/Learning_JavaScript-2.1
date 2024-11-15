// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
/**
 This code snippet demonstrates the basic features of JSON.
 
 JSON (JavaScript Object Notation) is a lightweight data interchange format 
 that is easy for humans to read and write, and easy for machines to parse and generate.
 
 It is based on a subset of JavaScript syntax, but is language-independent.
 
 JSON data is represented as key-value pairs, where the keys are strings and the values 
 can be of various types, including strings, numbers, booleans, arrays, and objects.
 
 JSON is commonly used for transmitting data between a server and a web application, 
 or between different parts of a web application.
*/
let userData

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log('got the data')
        console.log(json)
        userData = json
      })
