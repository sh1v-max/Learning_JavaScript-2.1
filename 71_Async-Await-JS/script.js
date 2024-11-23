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
//^ we can do the same thing using async await

async function makeRequest(){
  const url = 'https://dummyjson.com/products'
  const responsePromise = fetch(url) 
  
}
makeRequest()
