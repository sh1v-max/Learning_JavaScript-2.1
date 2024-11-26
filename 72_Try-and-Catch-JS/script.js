// console.log(a)
// output: ReferenceError: a is not defined
// console.log('hello')
// at we encounter an error, the code stops executing and "hello" wont be printed

//^ to encounter the error and still print "hello" we use try and catch block

//~ try{
//   console.log(a)
// }catch(err){
//   console.dir(err) // output: ReferenceError: a is not defined at script.js:9:15
//   //! this "err" is an object and not a string
// }

// console.log('hello') // output: hello
// console.log(3 + 7) // output: 10

const user = {
  name: 'Wazir',
  age: 34,
}
// console.log(user.address) // output: undefined
// console.log(user.address.city)
// output: Uncaught TypeError: Cannot read properties of undefined (reading 'city')
// at script.js:23:26

//~ try{ //^ will run always
// console.log(user.address) // output: undefined
//   console.log(user.address.city)
// }catch(err){ //^ will run only if there is an error
//   console.dir(err)
// error will be logged in the console
//   console.dir(err.name) // return the type of the error (reference error/type error etc)
//   console.dir(err.message) // return error message (cannot read property of undefined)
// }finally{ //^ wil run always
//   console.log('finally block') // this block will always run
// }

// console.log('hello') // output: hello
// console.log(3 + 7) // output: 10

//^ try/catch with async/await
async function makeAsyncRequest() {
  try {
    const url = 'https://dummyjson.com/products'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.dir(err)
  }

  console.log('hello')
}

makeAsyncRequest()
