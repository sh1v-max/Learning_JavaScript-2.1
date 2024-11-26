// console.log(a)
// output: ReferenceError: a is not defined
// console.log('hello')
// at we encounter an error, the code stops executing and "hello" wont be printed

//^ to encounter the error and still print "hello" we use try and catch block

try{
  console.log(a)
}catch(err){
  console.log('error') // output: error //! this "error" is an object and not a string
}

console.log('hello') // output: hello
console.log(3 + 7) // output: 10

console.log("hello")