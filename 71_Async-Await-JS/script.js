//^ what does throw keyword do?

//~ throw 'hello' // Uncaught hello
//throw keyword is used to throw an exception. It can be a string, number, boolean or an object. It is used to handle errors in the code.
//It is used to throw a custom error.

//~ function hi(){
//   console.log('hii')
// throw 'error in program' //throwing an error
//   throw new Error('error in program') // same as above plus it will show some extra info like line no
//   console.log('bye') //unreachable code
// }

//~ async function makeRequest(){
// } // async returns a promise, by default it is resolved

//~ async function makeRequest(){
//   throw new Error('error in program')
// }// output will be a promise and an error

//~ async function makeRequest(){
//   const url = 'https://dummyjson.com/products'
//   const responsePromise = fetch(url) // as fetch returns a promise and we can store in into another variable
//   responsePromise.then(res => res.json())
//   .then(data => {
//     console.log(data)
// this will return data
//   })
// }

//============================================================================
//^ we can do the same thing using async await
//& async keyword simply makes a function asynchronous, and the function always return a promise
//& the await keyword in javascript is used inside an async function to pause execution
//& of the function until a promise is resolved or rejected
//& await makes the async code look synchronous, it doesn't wait in main thread
//& await works same as then() method, but it is more cleaner and easier to read
//await returns the result of the promise. it waits for the promise to resolve and then returns the result.
//! await wont allow the code to move forward until the promise is resolved

//~ async function makeRequest(){
//   const url = 'https://dummyjson.com/products'
// const responsePromise = fetch(url) // fetch returns a promise
// output: Promise {<pending>}
// console.log('hello')
// const response = await fetch(url) // fetch with await return response and will store it in "response" variable
//output: Response {type: "cors", url: "https://dummyjson.com/products", redirected: false, status: 200, ok: true, …}
//   console.log(response)
//   console.log('hello')
// }
// makeRequest()

//============================================================================
//^ async function with another function
//~ async function makeRequest() {
//   const url = 'https://dummyjson.com/products'
//   const response = await fetch(url)
// after this line, it will wait for response but simultaneously
// it will run the next part(skips next 2 lines until it gets the response)
//   console.log(response)
//   console.log('hello')
// }

//after async line, the parser will wait for the response and then it will run the next line
//till then, this function will be executed in the background
// function addTwoNumbers(){
// console.log('hello')
//   return 10+20
// }

//==============================================================================
// example with different function to illustrate synchronous and asynchronous behavior

//~ async function makeAsyncRequest() {
//   const url = 'https://dummyjson.com/products'
//   const response = await fetch(url)
//   console.log(response)
//   console.log('hello')
// }

// function makeSyncRequest(){
// const xhr = new XMLHttpRequest()
// xhr.addEventListener('load', () => {
//   console.log(xhr)
// })
// xhr.open('GET', 'https://dummyjson.com/products', false)
// xhr.send()
// here we making xhr xhr synchronous using false, but in this case, it will block the main thread
// but in case of await/async, it will not block the main thread
// }

// function addTwoNumbers(){
//   return 10+20
// }

//==============================================================================
//~ async function makeAsyncRequest() {
//   const url = 'https://dummyjson.com/products'
//   const response = await fetch(url) // this will fetch the response and return it
//   const data = await response.json() // this will convert the response into json and return the data
//   console.log(data)
//   console.log('hello')
// }

// makeAsyncRequest()

//! await works same as then() method, but it is more cleaner and easier to read

//==============================================================================
//~ async function makeAsyncRequest() {
//   const url = 'https://dummyjson.com/products'
//   const response = await fetch(url) // this will fetch the response and return it
//   const data = await response.json() // this will convert the response into json and return the data
//   console.log(data)
//   console.log('hello')
// }

// makeAsyncRequest()

// //^ can also be written as
async function makeAsyncRequest() {
  const url = 'https://dummyjson.com/products'
  // const response = await fetch(url) 
  // const data = await response.json()
  const data = await (await fetch(url)).json() // above 2 lines can be written in one line
  return data
  // console.log(data)
}

// makeAsyncRequest()
// makeAsyncRequest().then(data => console.log(data))
makeAsyncRequest().then(console.log)

//! normally, await doesn't work outside of async function, or top level bodies of module
// now make is module:kz
// <script src="script.js" type="module" defer></script>  //add type="module" in script tag
// tells the browser that the JavaScript file being linked is an ES6 module
// it creates a module scope
//^ now it will work fine

// const url = 'https://dummyjson.com/products'
// const response = await fetch(url) 
// const data = await response.json()
// const data = await (await fetch(url)).json() // above 2 lines can be written in one line
// console.log(data)


// when you run the code in module scope, it works differently
// url, output: not defined
// whether you use let, const or var, it will not work


//^ we will learn how to handle errors in async await wins try/catch in next part
