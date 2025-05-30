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

// let userData

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log('got the data')
//         console.log(json)
//         userData = json
//       })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const image = document.querySelector('img')
const button = document.querySelector('button')


// button.addEventListener('click', () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((json) => {
//       image.src = json.message
//     })
// })

XMLHttpRequest
// output: ƒ XMLHttpRequest() { [native code] }
//~ XMLHttpRequest()
// output: error, will say 'its constructor, use new keyword'
new XMLHttpRequest()
// output: XMLHttpRequest {onreadystatechange: null, 
// readyState: 0, timeout: 0, withCredentials: false, 
// upload: XMLHttpRequestUpload, …}

function sayHi(){
  console.log('Hi')
}
// sayHi()
// output: Hi
// new sayHi()
// output: Hi
// sayHi {}
// when we use 'new' keyword it will create an object of the function sayHi

button.addEventListener('click', () => {
  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     image.src = json.message
  //   })
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'
  // it will automatically parse the response to json format
  // so no need to use parse method
  
  //^ using eventlistener with load property
  // xhr.addEventListener('load', () => { // load event is fired when the request has successfully completed
    // console.log(xhr.response) // its in json format
    // console.log(JSON.parse(xhr.response)) // converting json to js object
    // image.src = xhr.response.message
    // console.log(xhr)
    // console.log('successfully loaded')
    // setting the src of the image to the url of the image
  // })
  
  //^ using onload property
  xhr.onload = () => {
    image.src = xhr.response.message
    console.log(xhr)
    console.log('successfully loaded')
  }
  
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
  // send() method sends the request to the server
  // now how to access the response?
})

//! but at the end, we have to use "fetch" method instead of "XMLHttpRequest" method
//! because it is more modern and easy to use
//^ XMLHttpRequest is important in for interview point of view